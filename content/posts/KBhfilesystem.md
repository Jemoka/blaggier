+++
title = "filesystem"
author = ["Houjun Liu"]
draft = false
+++

The [filesystem]({{< relref "KBhfilesystem.md" >}}) is the only thing that can store anything across power offs.


## disk {#disk}

Unlike memory, its "sector-addressable": you cannot read or write individual bytes. The [disk](#disk) is divided into [sector](#disk)s, which you have to wholesale read and write.


### seeking {#seeking}

Because disks are mostly moving, reading and writing requires [seeking](#seeking): to wait until the platter go under the arm and read.

[filesystem]({{< relref "KBhfilesystem.md" >}})s are designed to minimize the seek time.


## functionality {#functionality}

-   creating
-   looknig up
-   reading: sequential + random file access; access either all of a file or a part of the file
-   editing
-   creating folders


### main challenges {#main-challenges}

-   **disk space management**: minimize seeks, sharing space, efficient use of disk
-   **naming**: how do users name files
-   **reliability**: surviving OS crashes and hardware failures
-   **protection**: isolation between users, controlled sharing


## block {#block}

a [block](#block) is a group of one or more [sector](#disk)s, which issued to abstract away chunks of sectors.


## fragmentation {#fragmentation}


### internal fragmentation {#internal-fragmentation}

A file can be no less than a single [block](#block) of text.


### external fragmentation {#external-fragmentation}

"no space is available even if the space in aggregate is available"


## models of storage {#models-of-storage}

We typically put two things into the block:

-   file payload data
-   file meta-data

there is a few ways to do this:

-   [contiguous allocation]({{< relref "KBhcontiguous_allocation.md" >}})
-   [linked files]({{< relref "KBhlinked_files.md" >}})
-   [Windows FAT]({{< relref "KBhwindows_fat.md" >}})
-   [File Payload Data]({{< relref "KBhfile_payload_data.md" >}})
-   [Unix V6 Filesystem]({{< relref "KBhunix_v6_filesystem.md" >}}): [inode]({{< relref "KBhunix_v6_filesystem.md" >}}), [block](#block), [Block Cache]({{< relref "KBhunix_v6_filesystem.md#block-cache" >}})
