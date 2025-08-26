+++
title = "contiguous allocation"
author = ["Houjun Liu"]
draft = false
+++

Used: IBM/OS360

[contiguous allocation]({{< relref "KBhcontiguous_allocation.md" >}}) puts the files and metadata together, and implements a [Explicit Free List Allocator]({{< relref "KBhheap_allocator.md#explicit-free-list-allocator" >}}) across the file.


## benefits {#benefits}

-   simple


## problems {#problems}

-   external fragmentation: little pockets of data is everywhere
-   editing: hard to grow files
