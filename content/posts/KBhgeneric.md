+++
title = "generics"
author = ["Houjun Liu"]
draft = false
+++

We don't want to write the same thing many times; generics minimizes code duplication. Therefore, generics!

Let's implement a simple swap function:

```C
void swap_ptr_values(void *data1ptr, void *data2ptr, size_t datasize) {
}
```


## helper functions {#helper-functions}


### memcpy {#memcpy}

Copy `datasize` bytes worth of memory in the second argument into the first argument. The two arguments **CANNOT OVERLAP** otherwise, you risk UB.

```C
void *memcpy(void *dest, void *src, size_t nbytes)
```


### memmove {#memmove}

Its [memcpy](#memcpy), but it works with overlapping data, and is slower.

```C
void *memove(void *dest, void *src, size_t nbytes)
```


## [pointer arithmetic]({{< relref "KBharray.md#pointer-arithmetic" >}}) with [generics]({{< relref "KBhgeneric.md" >}}) {#pointer-arithmetic--kbharray-dot-md--with-generics--kbhgeneric-dot-md}

Unfortunately, given that we don't know how big a `void *` pointer is, we can't do [pointer arithmetic]({{< relref "KBharray.md#pointer-arithmetic" >}}) against it because it still doesn't know how big the pointer is. You can't just add/subtract numbers to `char *`.

So, we actually have to do [pointer arithmetic]({{< relref "KBharray.md#pointer-arithmetic" >}}) by [casting]({{< relref "KBhcasting.md" >}}) the pointer to a `char*` which will make pointer arithmetic work at the one-byte level.

```C
void *return_sixth_elem(void *arr) {
    return (char *)arr + 5;
}
```


## higher order functions {#higher-order-functions}

We can pass a function as a parameter.

```C
bool (*function_name)(int, int)
```
