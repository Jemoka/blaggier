+++
title = "linked files"
author = ["Houjun Liu"]
draft = false
+++

[linked files]({{< relref "KBhlinked_files.md" >}}) is a linked list: in every block, it stores the location of the next block; we **don't store files contiguously**. We simply store a part of the file in a block, and a pointer to wherever the next block where the file is located is.

{{< figure src="/ox-hugo/2024-01-10_14-07-31_screenshot.png" >}}

this solves the [contiguous allocation]({{< relref "KBhcontiguous_allocation.md" >}})'s fragmentation problem.


## problems {#problems}

-   massive seek time to get all the blocks for a given file: data scattered
-   random access of files ("find the middle") is hard: can't easily jump to an arbitrary location; we had to read the file from the start
