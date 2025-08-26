+++
title = "demand paging"
author = ["Houjun Liu"]
draft = false
+++

1.  use efficient **page maps** too translate virtual to physical addresses
2.  kick things off to **disk** when memory runs out

Every process has its own [page map](#page-map).


## demand paging {#demand-paging}

Key idea: physical representation of virtual memory does **not have to be on actual memory**.

1.  if memory fills out, kick a page to disk
2.  if the program asks for memory again, kick another page to disk and load its memory back

Keep in memory the information that's being **used**, kick the rest to [swap space]({{< relref "KBhdemand_paging.md" >}})/"[paging file]({{< relref "KBhdemand_paging.md" >}})". Ideally: we have a performance of main memory and capacity of disk.


### demand fetching {#demand-fetching}

most modern OSes start with **no pages loaded**---load pages only when referenced; this is tempered by the type of page that's needed:

1.  read only code pages (program code, doesn't change) ---
    -   do **NOT** save to swap; executable will always be there so you can just reload from disk
    -   program will expect code pages too contain executable data
2.  initialized data pages ---
    -   **save to swap** because contents may have changed frorm initial values
    -   program expects them to contain data on load, so we need to load them ahead of time
3.  unitialized data pages
    -   save to swap
    -   no initial content

| Page Type  | Need Content on First Load | Save to Swap ("Swap?") |
|------------|----------------------------|------------------------|
| code       | yes                        | no (read from exe)     |
| data       | yes                        | yes                    |
| stack/heap | no                         | yes                    |

We only write to disk if its **dirty**.


### using swap to get extra memory {#using-swap-to-get-extra-memory}

1.  pick a page to kick out
2.  write kicked page to disk
3.  mark the old page entry as not present
4.  give the physical address to the new virtual page

If we ever ask for the old page back, trigger [page fault](#page-fault):


### page fault {#page-fault}

(to recover a page that's on swap)

1.  check with swap for the data
2.  get new physical page (perhaps kicking out another page)
3.  load data into page
4.  update page map as present and with new address


### choosing what to swap {#choosing-what-to-swap}


### thrashing {#thrashing}

****downside of [demand paging]({{< relref "KBhdemand_paging.md" >}})****

When the pages being actively used don't fit in memory: you will have to get the page, kick it out immediately, get it back again, etc. This basically make memory as fast as disk; which is really slow.

Solution: download more RAM. "buy more memory, or use task manager" - nick


## page map {#page-map}

A [page map](#page-map), to keep track of something is valid/invalid, we have to store information about **EVERY PAGE** for **EVERY PROCESS**.

Each entry in the page:

| Index | Physical Address | Writable | Present/Mapped? | Last Access | Kernel | Dirty |
|-------|------------------|----------|-----------------|-------------|--------|-------|
| 0     | 0x2023           | 1        | 0               | 0           | 0      | 0     |
| 1     | 0x0023           | 1        | 1               | 1           | 0      | 0     |

**Dirty**: the content matters and it needs to be written out.

This is, of course, very big if stored densely. Consider 36 bit page numbers, 8 byte entries, it requires \\(2^{36} \cdot  8 = 512GB\\) worth of space per process. This is sad.

**PRESENT** simply means if the segment of memory is **MAPPED**. ITs possible for a not present index to be in SWAP instead.


### page map tree implementation {#page-map-tree-implementation}

To resolve this, we have entry for RANGES of virtual pages; there's about \\(4\\) levels. If everything is invalid in a range, we just consider the whole range invalid using one row.

Therefore, we lazily make space for this tree.
