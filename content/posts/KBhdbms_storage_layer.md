+++
title = "DBMS Storage Format"
author = ["Houjun Liu"]
draft = false
+++

## Database Page {#database-page}

each [Database Page](#database-page) is given a unique identifier; a page ID could be unique per DBMS, per DB, or per table---page IDs is indirection to physical location.

-   a [Database Page](#database-page) is a fixed-size block of data
    -   tuples
    -   meta-data
    -   indicies
    -   log records
    -   ...
-   _most systems_ do **not** mix page types (don't mix different tables, do not mix different types, etc.)
-   _some systems_ require a page to be self contained (no pointers, etc.) --- for fault tolerance


### Whoops, we accidentally overloaded a word {#whoops-we-accidentally-overloaded-a-word}

-   **Hardware Page** (4kb, i.e. a [block]({{< relref "KBhfilesystem.md#block" >}}) on the physical disk)
-   **OS Page** (usually a [block]({{< relref "KBhfilesystem.md#block" >}}), notionally different for now but abstracted, 2mb, 1gb)
-   **Database Page**

each [Database Page](#database-page) is automatically read/written
