+++
title = "virtual memory"
author = ["Houjun Liu"]
draft = false
+++

We are trying to share a resource: memory; memory allows multiple processes to use a share pool of memory.


## key goals {#key-goals}

-   **multitasking**: multiple processes should be able to use memory
-   **transparency**: no process need to know that memory is shared; each process should be able to run regardless of the number/locations of processes
-   **isolation**: processes shouldn't be able to corrupt other processes' memory
-   **efficiency**: shouldn't be degraded by sharing


## virtual memory {#virtual-memory}

The operating system will translate **virtual** addresses (which are 0 based for every program, which isn't a problem) to **physical** addresses in memory.

-   the OS doesn't need to map all virtual addresses unless its needed (i.e. if the program is asking for it)
-   worst case: we can kick out unused memory into disk, and load it back when needed

This is an example of [virtualization]({{< relref "KBhvirtual_memory.md" >}}).


## OS memory {#os-memory}

Whenever a process makes a **syscall**, OS will be handed virtual memory addresses. How do we resolve it?

Solution: **\*every process reserves some [virtual memory]({{< relref "KBhvirtual_memory.md" >}}) for the OS**---all of these virtual addresses maps to the **SAME PHYSICAL REGION** for the OS.

Then, the [page map]({{< relref "KBhdemand_paging.md#page-map" >}}) will have a **kernel bit** which marks this virtual region no read and no write.


## dynamic address translation {#dynamic-address-translation}

The system will die if we try to do virtual mapping to physical mapping.

So we have a [Memory Management Unit](#dynamic-address-translation) ([MMU](#dynamic-address-translation)) to do:

How does an [MMU](#dynamic-address-translation) work?


### base and bound {#base-and-bound}

This is basically [load-time relocation](#load-time-relocation), but with [virtual memory]({{< relref "KBhvirtual_memory.md" >}}).

-   assign a location in physical memory, call the **base**; during translation, we just add every virtual address by the **base**
-   we can cap the virtual address space for each process by a **bound**, we can raise a bus error/segfault if it goes above the highest allowable

The **bound** is a virtual address (the first invalid address in the virtual world), whereas the **base** is a physical address. This is both stored in the **process control block**.

**last possible address**: is (bound - 1)+base


#### translation {#translation}

-   compare virtual address to bound, [trap]({{< relref "KBhdispatching.md#trap" >}}) and raise if &gt;= **bound**
-   then, return virtual address + **base**

importantly, we can arbitrary adjust base and bound.


#### tradeoff {#tradeoff}

<!--list-separator-->

-  good news

    -   **inexpensive**: just doing addition
    -   **doesn't require additional space**: (just two addresses)
    -   **separation**: [virtualization]({{< relref "KBhvirtual_memory.md" >}}).

<!--list-separator-->

-  bad news

    -   **one contiguous region**: need to allocate free spcae
    -   **fragmentation**: because of the above
    -   **growing can only happens upwards with bounds** (and its kind of useless)---we can't move the stack up in virtual space, and we can't give more space downwards, because that would cause negative addresses
    -   **no read only memory** (we'll want to limit access to code segment, for instance)


### multiple segments {#multiple-segments}

Let's break up multiple virtual address space into segments, and map each of those segments separately. **EACH SEGMENT** will have its own [base and bound](#base-and-bound). So, you will store each struct in a map: `[segment number: [segment base, segment bound, read only or not]]`.


#### translation {#translation}

-   look up what segment a virtual address is in (we can do this by making the top couple bits of the virtual address the segment number, and the next bits as the offset into the segment)
-   get that segment's info
-   compare that address' offset to that segment's bound, if its &gt;= limit, [trap]({{< relref "KBhdispatching.md#trap" >}})
-   otherwise, to go the base of that segment and fetch data


#### tradeoff {#tradeoff}

<!--list-separator-->

-  features

    -   **you can recycle segments**: if you have two instances of a program running, we can actually share read-only segments (such as code).
    -   **you can not map the middle**: because stack and data segments are independent, we can not map the hole in the middle until more data is asked
    -   **you can grow things**: if you run out of continuous space, you can grow the segment by either just doing it or by moving it and growing it (and indeed we now can move the stack down as the stack is addressed as the highest address)

<!--list-separator-->

-  drawbacks

    -   **growing can only happens upwards with bounds**---now that we can move the heap independently, growing the heap makes sense now; however, growing the STACK **still** is impossible because growing the stack would entail moving the base address in order to go downwards
    -   **variable length segments**---extrernal fragmentation!
    -   **small number of segments**---the [segment, offset] deign divides virtual addresses, so you have to decide segment number exogenously


### paging {#paging}

So let's instead allocate memory in pages. Instead of variable-length segments that can GROW in [base and bound](#base-and-bound) and [multiple segments](#multiple-segments), let's force a specific size of memory in each chunk.

-   **virtual address**: **virtual page number** + **offset**
-   **physical address**: **physical page number** + **offset**

we map each page independently, and keep the offset. If a page is unused, internal fragmentation but not too bad. The **stack can now grow downwards**: because if it reaches into lower page numbers we can just map that page somewhere too.

To store page mappings, in a seperate storage location, we store a [page map](#paging)/[page table](#paging): its an array of tuples, where the index is the virtual page number, and each entry has [(physical page, writable)].

Notice that page continuity isn't a problem: the upper digits just count up, and the lower digits tells you offset in that chunk:

```asm
0x0000 - 0x0fff
0x1000 - 0x1fff
0x2000 - 0x2fff
```

where, the first digit tells you the page number

```asm
0x0 - 0x0
0x1 - 0x1
0x2 - 0x2
```

and the rest is the offset.

And everything is contiunous, and automatically paged.

For instance, typically page sizes are 4kb

| Page Size         | Offset Number Digits |
|-------------------|----------------------|
| 4096 bytes (16^3) | 3                    |

then the rest of the address would just be the page number.


#### Intel's implementation {#intel-s-implementation}

**Virtual Addresses**

|                  |                               |                  |
|------------------|-------------------------------|------------------|
| Unused (16 bits) | Virtual page number (36 bits) | Offset (12 bits) |

**Physical Addresses**

|                       |                  |
|-----------------------|------------------|
| Page number (40 bits) | Offset (12 bits) |


#### translation {#translation}

-   chop off page number and offset
-   translate the page number
-   concat the two together
-   **internal fragmentation**


## why not something simpler? {#why-not-something-simpler}


### single-tasking memory {#single-tasking-memory}

very bad idea:

ASSUME that there is only one process. Stack grows down, data grows up, and code sits at the bottom.


#### tradeoff {#tradeoff}

-   **no isolation**: even in this case, nothing is stopping the program from accessing memory in the OS reserve segment; which is bad.
-   **no multitasking**: because, well, we have one program
-   **fragmentation**: little bits of space all over the place


### load-time relocation {#load-time-relocation}

separate processes.

When program is compiled, it assumes that its initial address is `0x0`; so, at load time, we have to go into the code segment when the program is set up and increment all of its memory addresses up.


#### tradeoff {#tradeoff}

-   **no isolation**: nothing is stopping the program from accessing memory in otherbody's segments
-   must decide the memory usage of a program ahead of time + cannot grow if needs more memory (we can't move because the addresses would be in stack)
-   external fragmentation (normal alloc problems)
