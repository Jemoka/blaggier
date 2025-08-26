+++
title = "SU-CS111 Outline"
author = ["Houjun Liu"]
draft = false
+++

**KEY IDEAS**:

1.  [filesystem]({{< relref "KBhfilesystem.md" >}})s - how do we design filesystems to manage files on disk
2.  [multiprocessing]({{< relref "KBhmultiprocessing.md" >}}) - how does programs interact with one another, coordinating, etc.
3.  [multithreading]({{< relref "KBhmultithreading.md" >}}) - how can we have single-process concurrency
4.  [virtual memory]({{< relref "KBhvirtual_memory.md" >}}) - how can one set of memory can be shared among several processes
5.  modern technologies - [busy waiting]({{< relref "KBhpermits_model.md" >}}) locking, [Flash Storage]({{< relref "KBhmodern_os.md#flash-storage" >}}), etc.

---

-   **interplay between tech + OS**: OS at the hardware, software boundary
-   **designing with tradeoffs**: not always one "best" way - evaluating pros/cons/priorities
-   **virtualization**: make one thing look like something else, or many of them
-   **concurrency**: synchronization is hard
-   **locality**: predicting the future (scheduling, paging, block cache, etc.)---try to estimate the future with priority queues, etc.
-   **atomics**: collections of operations that make them appear as a single, indivisible operation --- synchronization + file system consistency (log transactions)
-   **layering**: building higher level abstractions to hide details (monitors, fs layers, file descriptors, etc.)
-   **system builders wrangling complexity**: solving complex problems with simple interfaces that others can build on (virtual memory, filesystems, etc.)
-   **trust**: we have to trust _something_ or _someone_---evaluating what to trust and how systems can incorporate trust

---

1.  understanding justifies how complex systems work
2.  elegant ideas of computing (**concurrency**, **virtualization**, etc.)
3.  take advantage of hardware and OS software that's available
4.  OS aren't standing still: OS changing and encountering new challenges

---

Massive Review


## FS {#fs}

Design filesystems to manage files, what are the tradeoffs in designing them? How can we interact with the filesystem?

-   multiple approaches (continuous allocation, linked files, FAT, multi-level index---file access, metadata)
-   crash recovery designs
-   file descriptions


### Why? {#why}

-   large system design
-   manipulate files in programs + what is a file
-   design challenges and limitatinos


## MP {#mp}

How can our program create and interact other programs?

-   **fork/waitpid/execvp/pipe**: coordinating and run other programs and erpcosses
-   process control block information + running processes in any order


### Why? {#why}

-   challenges of concurrency
-   shells!
-   chrome site isolation


## MT {#mt}

Concurrency within a single process.

-   dining philosopher problem and its solution
-   OS' tracking of threads (and not processes) to run, and when to switch between them
-   scheduling (round robin, SRPT, [priority based scheduling]({{< relref "KBhscheduling.md#priority-based-scheduling" >}}), etc.), preemption, and dispatching
-   Concurrency Management


### Why? {#why}

-   maximally take advantage of hardware through multi cores
-   many applications in modern software (Excel's threads, for instance)
-   understand the behavior of computers---single core machines may also multi-task!
-   concurrency challenges + synchronization: this is **hard**


### Concurrency Management {#concurrency-management}

**synchronization/race conditions/deadlock**

-   processes and threads
-   creating and dispatching
-   sync primitive and their implementation: mutexes, CVs, monitor pattern
-   scheduling
-   interrupts
-   deadlock
-   races and inconsistency


## VMem {#vmem}

How can one set of memory be shared among several processes? How do we manage access to a limited amount of system memory?

-   gives each process isolated virtual address space
-   OS maps what's needed to real physical memory
-   OS can manage physical memory however it wants, including swapping pages to disk


### Why? {#why}

-   **virtualization** - virtual world does not need to know about the complexities of where to run
    -   programmer: we always assume tones of contiguous memory
-   thrashing, swapping, etc.


## Modern Technologies {#modern-technologies}

How do hardware impact design of OSes?

-   multi-core scheduling + locks
    -   how to schedule multi-core threads---[Gang Scheduling]({{< relref "KBhmodern_os.md#gang-scheduling" >}}) + [Work Stealing]({{< relref "KBhmodern_os.md#work-stealing" >}}) + [Core Affinity]({{< relref "KBhmodern_os.md#core-affinity" >}})
    -   locking between cores: busy waiting and atomics
-   flash-storage: impacts on file systems with wear-out and [Flash Translation Layer]({{< relref "KBhmodern_os.md#flash-storage" >}})


### Why? {#why}

-   OSes sitting at software-hardware boundary: system changes can change OSes
-   Can more fully understand how modern technologies impact our devices---we can understanding their impact at the OS level


## Ethics and Trust {#ethics-and-trust}

Who/what do we trust, how do we decided, what do we do when the thrust is not upheald, how gcan we factor trust?

-   [agential gullibility]({{< relref "KBhprivacy.md#trust" >}})
-   [privacy]({{< relref "KBhprivacy.md" >}}) + [trust]({{< relref "KBhprivacy.md#trust" >}})
    -   [pathways to trust]({{< relref "KBhprivacy.md#pathways-to-trust" >}})
-   [accountability]({{< relref "KBhprivacy.md#accountability" >}}), [stakeholder]({{< relref "KBhprivacy.md#stakeholder" >}})


### Why {#why}

-   OS has extreme **scale**: high amount of trust
-   we must trust **some** things, improtant to reflect what we trust and what we value
-   reflect on what to do when trust is violated, how can we incorporate considerations of trust into what we build


## Next Steps {#next-steps}

{{< figure src="/ox-hugo/2024-03-13_14-03-04_screenshot.png" >}}
