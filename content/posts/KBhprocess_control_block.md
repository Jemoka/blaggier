+++
title = "process control block"
author = ["Houjun Liu"]
draft = false
+++

Each [process]({{< relref "KBhmultiprocessing.md#process" >}}) is controlled by a struct which contain information about the process.

-   memory used by the process
-   [file descriptor table](#file-descriptor-table)
-   [thread state](#thread--kbhmultithreading-dot-md--state)
-   other accounting


## file descriptor table {#file-descriptor-table}

Within each process, we have a [file descriptor]({{< relref "KBhsyscalls.md#file-descriptor" >}}) table (and the ints we get are indicies into this table), for which each entry stores points to the [open file table]({{< relref "KBhmultiprocessing.md#open-file-table" >}}).

When a process forks, the child doesn't get more open file entries, instead, we simply clone the [file descriptor]({{< relref "KBhsyscalls.md#file-descriptor" >}}) table (i.e. parent and child will share the same underlying [open file table]({{< relref "KBhmultiprocessing.md#open-file-table" >}}) entries); this is how we can share pipes.

This is why you need to **CLOSE** all open file descriptors once every **PROCESS**, including forked child.


## [thread]({{< relref "KBhmultithreading.md#thread" >}}) state {#thread--kbhmultithreading-dot-md--state}

Recall that [thread]({{< relref "KBhmultithreading.md#thread" >}})s are the **unit of execution**. The [process control block]({{< relref "KBhprocess_control_block.md" >}}) keeps track of the [\*stack pointer]({{< relref "KBhassembly.md#stack-pointer" >}})\* of the thread `%rsp`, which means if a thread is put to sleep the state can be stored somewhere on the stack.

1.  **running**
2.  **blockde** - waiting for an event like disk, network, etc.
3.  **ready** - able to run, but not on CPU yet

{{< figure src="/ox-hugo/2024-02-21_13-50-23_screenshot.png" >}}


## IO vs. CPU bound {#io-vs-dot-cpu-bound}

-   [I/O Bound Thread](#io-vs-dot-cpu-bound) is a thread that needs to wait for disk events, and don't need CPU that much
-   [CPU Thread](#io-vs-dot-cpu-bound) is a thread that needs CPU time
