+++
title = "Unix V6 Filesystem"
author = ["Houjun Liu"]
draft = false
+++

its a [File Payload Data]({{< relref "KBhfile_payload_data.md" >}}) with smartness.

| Sector Size | Block Size | Inode Size | Inodes Per Block | Address Type   |
|-------------|------------|------------|------------------|----------------|
| 512         | 512        | 32         | 16               | Short, 2 bytes |

Notably, the entire file system only supports \\(2^{16} = 32MB\\) worth of space due to short address types.

For each file on the disk, we store payload data in a bunch of places scattered across the disk, and a **single** [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) which stores the location of each block for the file in an array.

-   [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s contain an **ordered** list of block numbers, file size, permissions.
-   all [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s are stored together in an [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) table, which starts at **block 2**. Blocks 0 and 1 are disk metadata.
-   [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) can be read into memory individally to cache
-   10% of harddrive is used to [inode]({{< relref "KBhunix_v6_filesystem.md" >}})

[Unix V6 Filesystem]({{< relref "KBhunix_v6_filesystem.md" >}}) limits the maximum file size in order to keep the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) a finite size.

The [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) table for each file only contains space to point to \\(8\\) block. 1 block = 1 sector on Unix v6. [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s are usualy 32 bytes big, and 1 block = 1 sector = 512 bytes. usually this packs 16 inodes per block

****[inode]({{< relref "KBhunix_v6_filesystem.md" >}})s are 1 indexed**** in order to make.


## inode {#inode}

```C
struct inode {
    uint16_t i_addr[8];
    uint16_t i_mode[8];
    uint16_t file_size;
}
```

Each inode contains 8 addresses in shorts in **file order**.


### reading inode tables from disk {#reading-inode-tables-from-disk}

We read the raw 16-block inode data from the right sector, type coerce it into the inode type, and then read from it.

```C
const size_t INODE_PER_BLOCK = SECTOR_SIZE / sizeof(struct inode);
struct inode inodes[INODE_PER_BLOCK];

char buf[SECTOR_SIZE];
readsector(2, &inodes); // recall this is the first 16 inodes: sec0 is fs info, sec1 is supernode

printf("addr: %d\n", inodes[0].i_add);
```


### inode modes {#inode-modes}

[inode]({{< relref "KBhunix_v6_filesystem.md" >}})s have two modes

```C
if ((inode.i_mode & ILARG) != 0) == // node is in "large mode"
```

-   in **small mode**, the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) stores in `i_addr` the block numbers to the data
-   in **large mode**, the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) stores in the **first seven** numbers in `i_addr` block numbers to _blocks that contain block numbers_ (512/2 = 256 block numbers, which are chars); the **eighth number** points to **doubly indirect** _blocks that contain block numbers that point to other blocks_

this is called [indirect addressing](#inode-modes)

[indirect addressing](#inode-modes) uses more steps to get to the data, and requires more blocks to get to the block numbers.

in **large mode**, this system can store \\((7+256) \cdot (256 \cdot 512) = 34MB\\), which is as large as the file system itself, which is fine now.


## Directory {#directory}

Folders! Directory is a container that contains files, folders, directories, etc.! Its a **file container**.

-   All files ultimately live within root directory `/`.
-   Absolute paths start with root directory, and gets you to the file.
-   Relative paths start at the current folder, and gets you to the file

File names are **NOT** stored within the inode. They are stored in directories.

Unix stores 16 byte unsorted "directory entires" to represent directories:


### Directory Entries {#directory-entries}

```C
struct dirent {
    uint16_t d_inumber; // inode number of this file
    char d_name[14]; // the name; *NOT NECESSARILY NULL TERMINATED*
}
```

**THE NAME MAY NOT BE NULL TERMINATED** to cram max things. You have to use **strncmp** because it may not be terminated.


### Lookup {#lookup}

Start at the root directory, `/`. We want to go to the root directory, and find the entry named `/classes/`, and then, in that directory, find the file. etc. Traverse recursively. Directory could have metadata.

A directory is basically just a **file whose payload is a list of `dirent`**.

The inode tells you whether something is a file or a directory. They can be small or large, as usual. Root directory always have inode number `1`; `0` is reserved to NULL.

Because the directory entries are not sorted, in each direcotry the find is a linear search.


## Key Points {#key-points}

-   **modularity**: subdivision of a system into a collection of smaller systems
-   **layers**: layer several modules over each other
-   **name resolution**: system resolves human friendly name to machine friendly names
-   **visualization**: making one thing look like another

Overall theme: _multi-level index_


### Advantages {#advantages}

-   can access all block numbers for a file
-   still supports easy sequential access
-   easy to grow files


### Disadvantages {#disadvantages}

-   lots of linear directory search


## Caching {#caching}


### Freelist {#freelist}


#### Linked List {#linked-list}

Linked list of free-blocks


#### Bitmap {#bitmap}

Take a bit for every block in the disk, if its 1, its free. If 0, its not free. This allows _locality_: data likely used next is closed by, we can search local, continuous spaces.

**problem**: as the disk becomes full, we have to search basically \\(O(n)\\) for each bit until we find the free block---as the disk fills up, it becomes harder to find free space.

**solution**: lie to the user. don't let the disk used up. grantee that there are some free space at all times. we typically reserve \\(10\\%\\).


### Block Cache {#block-cache}

Getting blocks is very expensive. We can keep blocks around in memory because we may need to use them in the near future.

We will use part of the main memory to retain recently-accessed disk blocks. This is **NOT** at the granularity of individual files.


#### LRU {#lru}

When you insert a new element into the cache, kick out the element on the cache that hasn't been touched in the longest time.


#### Block Cache Modification {#block-cache-modification}

we can either **write asap**, or **delay**.

<!--list-separator-->

-  write asap

    -   **safer**: less risk of data loss, written as soon as possible
    -   **slow**: program must wait to proceed until disk I/O completes

<!--list-separator-->

-  write delay

    -   **dangerous**: may loose data after crash
    -   **efficient**: memory writes is faster
