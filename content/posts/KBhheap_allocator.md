+++
title = "Heap allocator"
author = ["Houjun Liu"]
draft = false
+++

Upon initialization, a large contiguous block of memory is initialized as a whole and called the "heap". If we run out of it, we double the amount of memory being allocated.

1.  handling arbitrary requests of mallocs/realloc and frees
2.  keep track of what's been allocated and what's free
3.  decide which segment of memory to use when fulfilling an allocating request
4.  respond quickly
5.  Return addresses that are 8-byte aligned (native types must be stored at a memory location which is a multiple of its size; otherwise bus error)

Two main goals:

-   maximize throughput: we want to make number of requests per unit of time large ("we want the largest address in use to be as low as possible")
-   maximize utilization: we want to use memory economically without fragmenting it

These two goals seems to be conflicting: it may take longer to plan out heap memory use for each request if we want to have perfect.


## Design Questions {#design-questions}

1.  how do we keep track of blocks that are freed
2.  how do we choose which free block to satisfy an allocation request
3.  after we choose a free block, how do we deal with the excess

4.  can we avoid searching all blocks for the free blocks to reuse?
5.  can we merge adjacent free blocks to keep large space available?
6.  Can we avoid always coping/moving data?


## Bump Allocator {#bump-allocator}

Silliest [Heap allocator]({{< relref "KBhheap_allocator.md" >}}). You maintain a pointer that's the root of the memory being used, and each time you get memory we bump that pointer forward. Free does nothing.

Maximum throughput (you like, just allocate heap, and free is very easy), but bad utilization.


## Implicit Free List Allocator {#implicit-free-list-allocator}

In this implementation, the block structure implies what has been freed. We used to store this into a global data structure, but that's bad because there is too much memory overhead. Instead, we place a 8-byte "header" in front of each block of memory containing whether its free or in use + its payload size. Through reading all the headers, we essentially maintain an implicit list of free nodes.

Now, the 8 byte system for memory + free status doesn't sound right. Recall memory addresses themselves are 8-bytes; however, all of our memory is 8-byte aligned. So, the first three bits should be 0.

Therefore, we pack free status in the firs tbit, ignore the next two, do store the memory in the rest


### "which one do you alloc" {#which-one-do-you-alloc}

-   **First fit**: start from the beginning, and search for the first free block you come across to serve the request
-   **Next fit**: continuing search starting at the end point of your last malloc until you get the first free block, when you hit the end, go back around
-   **Best fit**: examine every free block and find the one with the smallest size that fits

Best fit minimizes fragmentation; next fit optimizes speed


### edge case {#edge-case}

if you run out of space in the end, with an awkward 8 byte in the end, you can either make a 0-byte block or just give the last bit of memory to the previous one.


### Explicit Free List Allocator {#explicit-free-list-allocator}

Can we design an allocator to jump between free blocks. Naively doing this is bad.

Instead, we can constrain each block to be at least size 16. And then, we will put the pointers to the prev/next free nodes in the next two 8-byte payload.

Finally, we will keep track of a head node as a global variable


## Memory Coalescing {#memory-coalescing}

During frees, we should try to eat the adjacent **right** free memory to create one large free block in order to coalescing free blocks together

During [realloc]({{< relref "KBhheap.md#realloc" >}}), there are three conditions by which you can retrun the same address:

1.  size is growing, there's free space to the right
2.  size is growing, but we added padding so we can use that
3.  size is shrinking (we have to ensure that we have at least 16 bytes in the shrink space, which means we need to be shrink by at least 24 bytes to actually do any shrinking)


## Memory providing rules {#memory-providing-rules}

1.  at least 16 bytes (only if [Explicit Free List Allocator](#explicit-free-list-allocator))
2.  has to be multiple of 8


## Explicit allocator Requirements {#explicit-allocator-requirements}

-   must have headers to track information in implicit
-   must have an explicit free list managed as a doubly linked list using the first 16 bytes of the free block
-   must have a malloc implementation that searches the free block
-   must coallesce the immediate right free blocks
-   must do in-place realloc when possible; even if its not possible, we should still absorb adjacent right blocks or no longer absorb and must realloc
