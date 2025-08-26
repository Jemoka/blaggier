+++
title = "heap"
author = ["Houjun Liu"]
draft = false
+++

The [heap]({{< relref "KBhheap.md" >}}) is a self-managed area of the [memory]({{< relref "KBhmemory.md" >}}).


## malloc {#malloc}

```C
void *malloc(size_t size);
```

You should pass in the number of [byte]({{< relref "KBhbinary_number_system.md#byte" >}})s; therefore, we need to pass in the number of bytes through something like `malloc(sizeof(int)*len)`. The memory is _not_ cleared out.


## calloc {#calloc}

```C
void *calloc(size_t nmemb, size_t size);
```

Put the [number]({{< relref "KBhnumber.md" >}}) of elements into `nmemb`, and the size of them into `size`. Stamp zeros throughout.


## strdup {#strdup}

Deep copy a string. `strlen`, `malloc`, `strcpy`, retrun.


## free {#free}

```C
void free(void *ptr);
```

Frees whatever the pointer points to. The [pointer]({{< relref "KBhpointer.md" >}}) itself (a [stack]({{< relref "KBhstack.md" >}}) variable), is not deleted and still points to the freed memory.


## realloc {#realloc}

```C
void *realloc(void *ptr, size_t size);
```

Changes the [memory]({{< relref "KBhmemory.md" >}}) that `ptr` points to to size `size`. If there's not enough space, `realloc` moves the memory content and frees the old one.
