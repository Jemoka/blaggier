+++
title = "memory allocation"
author = ["Houjun Liu"]
draft = false
+++

Utilization vs throughput is conflicting goals.


## Big Picture {#big-picture}

{{< figure src="/ox-hugo/2023-11-13_10-56-33_screenshot.png" >}}

OS:

-   creates new process
-   sets up address space/segments
-   read the executable, load instructions, global data
-   libraries gets loaded

Complier:

-   set up stack

Heap Allocator: "Sandbox of bytes"

-   initialize the heap


## heap allocation: client {#heap-allocation-client}

```c
void *malloc(size_t size);
```

Returns a pointer to a block of heap memory of at least size `bytes`, or `NULL` if an error occurred.

```C
void free(void *ptr);
```

Frees the heap-allocated block starting at the specific address.

```C
void *realloc(void *ptr, size_t size);
```

Changing the size of a pointer and realloc if needed

See [Heap allocator]({{< relref "KBhheap_allocator.md#heap-allocator" >}})
