+++
title = "multiprocessing"
author = ["Houjun Liu"]
draft = false
+++

multiprocessing is the act of switching between multiple [process](#process)es so fast that it appears multiple processes are running concurrently.

-   OS _schedules_ tasks
-   each program gets a little time, then has to wait in a turn to continue executing

base level syscalls that requires waiting will be moved off before finishing, and in the meantime others can wait. like file read.


## program {#program}

A [program](#program) is a script to be ran.


## process {#process}

a [process](#process) is an instance of a [program](#program). Every process has a unique identifier, each process is uniquely identified by a [PID](#process).

syscall `get_pid` will give you back the PID.


### open file table {#open-file-table}

[open file table](#open-file-table) is a system wide for each file opening session, mentioning what the mode and cursor of the file is open, and the number of [file descriptor]({{< relref "KBhsyscalls.md#file-descriptor" >}}) tables pointing to it with a `refcount`.

When we call close, the `refcount` decrements. When `refcount=0`, the file is deleted. This means, if you share a [pipe]({{< relref "KBhpipe.md" >}}), both parent and child has to close the [pipe]({{< relref "KBhpipe.md" >}}).

**read blocks** until at least 1 byte is available, or until all write ends are closed.
