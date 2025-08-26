+++
title = "Windows FAT"
author = ["Houjun Liu"]
draft = false
+++

[linked files]({{< relref "KBhlinked_files.md" >}}) architecture for [filesystem]({{< relref "KBhfilesystem.md" >}}), but it caches the file links in memory when the OS is running.


## problems {#problems}

-   data is **still** scattered across the disk
-   we had to construct the file allocation table
-   though its must faster because jumping to the middle of the file is now in memory, we are still doing O(n) search for a specific sub part
