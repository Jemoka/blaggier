+++
title = "modern OS"
author = ["Houjun Liu"]
draft = false
+++

## multi-core CPUs {#multi-core-cpus}

Finally, actually multitasking: starting in mid 2000s, multiple cores are finally more common. **management between cores is crucial**


### Moors Law Break Down {#moors-law-break-down}

-   we have reached much of the limits of the speed of a single core
-   instead, we have to have more cores---which requires more management to take advantage of


### More kinds of Cores {#more-kinds-of-cores}

-   "performance" vs "efficiency" cores
-   needs to schedule for different tasks: not just who on what core, but who on what TYPE of core


## Other Hardware {#other-hardware}

Specialized hardware in these chips, which is required for scheduling.


### GPU {#gpu}

In change of graphics and some ML applications


### NPU/TPU {#npu-tpu}

Machine learning specialization.


## Scheduling Multi-Core CPUs {#scheduling-multi-core-cpus}


### Most Basic Idea {#most-basic-idea}

1.  share ready queue shared across cores
2.  lock to sync access to the ready queue
3.  one dispatcher
4.  separate interrupts for each core

Run \\(k\\) highest priority threads on the \\(k\\) cores.


#### Issue {#issue}

-   need to figure out what is the priority of each core run if we want preemption, so its an \\(O(n)\\) check for free + priority
-   the shared ready queue needs to be locked, so as core increases they need to be synchronized which causes slowdown


### One Ready Queue per Core {#one-ready-queue-per-core}

Big problems:

1.  where do we put a given thread?
2.  moving core between threads is expensive

Big tension: **[Work Stealing](#work-stealing)** and **[Core Affinity](#core-affinity)**


#### Work Stealing {#work-stealing}

If one core is free (even if there is things in the ready queue), check other cores' ready queues and try to do thread communism.


#### Core Affinity {#core-affinity}

Ideally, because moving threads between cores is expensive (need to rebuild cache), we keep each thread running on the same core.


### Gang Scheduling {#gang-scheduling}

When you have a thread you are trying to schedule, try to see if there are other threads from the same process in the ready queue and schedule all of them on various cores.


## Locking Multi-Core CPUs {#locking-multi-core-cpus}

**Main problem**: disable interrupts doesn't stop race conditions.

So we turn to [busy waiting]({{< relref "KBhpermits_model.md" >}}) with a hardware atomic operation `exchange`, which reads, returns, and swaps the value of some memory in a single atomic operation AND which is never ran in parallel; it returns the previous value of the memory before it was set:

```C++
class Lock {
    std::automic<int> sync(0);
}

void Lock::lock() {
    while (sync.exchange(1)) {}

    // we are now the only one using it
    // do work ....

    sync = 0;
}
```

The exchange function returns the old value.

The [busy waiting]({{< relref "KBhpermits_model.md" >}}) here isn't too bad, because you only need to busy wait for the lock itself to be locked, and then the lock will handle sync from there.


## Flash Storage {#flash-storage}

They are faster:

1.  no moving parts (no spinny)
2.  smaller, faster, lots of data
3.  mobile devices especially

Typically, we fix these quirky issues with the [Flash Translation Layer](#flash-storage) ([FTL](#flash-storage)), which provides block, sector, and read/write interfaces like spinning harddrives without the OS noticing.

Minimizing seeks isn't too necessary now, but, writing SSD is very weird:


### writing {#writing}

You have two operation.


#### erase {#erase}

You can set **ALL SEGMENT** of an "erase unit" to \\(1\\)

"erase unit" size is usually 256k


#### write {#write}

You can modify one "page" at a time (which is smaller than a erase unit)---but you can ONLY set individual bits in the page into 0 (and not 1, which you have to do by erasing larger erasing chunks).

"page" size is usually 512 bytes or 4k bytes


### wear-out {#wear-out}

**wear leveling**: make sure that the drive wears out at roughly the same rate as other parts of the drive. Moving commonly written data ("hot" data) around


### [FTL](#flash-storage) limitations {#ftl--org19007d5--limitations}

-   no hardware access (can't optimize around flash storage)
-   sacrifices performances for performance
-   wasts capacity (to look like hard drive)
-   many layers
