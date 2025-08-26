+++
title = "casting"
author = ["Houjun Liu"]
draft = false
+++

## Pitfalls {#pitfalls}

The bytes remains the same despite copying, so you can get too funky:

```C
int v = -12345;
unsigned int uv = v;

printf("v = %d, uv = %d\n", v, uv);
```

This prints "v = -12345, uv=4294954951". As in: **when you copy rvalues, the [bit]({{< relref "KBhbinary_number_system.md#bit" >}}) pattern gets copied and not the numerical number itself**; so, it will overflow.

You can use U to force an signed quantity to be unsigned:

```C
unsigned int uv = -12345U;
```


## sign promotion {#sign-promotion}

If you have the nerve of putting a comparing things of different types (don't), then, the **signed quantities gets promoted to be unsigned**.

That is, we get that:

-   -1 &lt; 0U is **false** because the -1 is promoted to an [unsigned integer]({{< relref "KBhbinary_number_system.md#unsigned-integers" >}})
-   2....7 &gt; -2....7 is **true** because nothing is converted
-


## type size promotion {#type-size-promotion}

If you have the nerve of putting a comparing things of different types (don't), then, the **smaller types get promoted to being a bigger types**.

-   casting from small unsigned value to larger unsigned value just requires us prepending a buncha zeros as needed
-   casting from a small signed value to larger signed value requires us repeating the left most value to fill out the rest of the variable (-1 = 11111, so bigger -1 = 11111 (repeated) 111)
-   lasting from a large value to a smaller value will cause **truncation**


## type size truncation {#type-size-truncation}

Take, for instance:

```c
int x = 53191;
short sx = x;
int y = sx;
```

The short is 2 [byte]({{< relref "KBhbinary_number_system.md#byte" >}}), which means that 2 of the left [byte]({{< relref "KBhbinary_number_system.md#byte" >}})s of the int got dropped.
