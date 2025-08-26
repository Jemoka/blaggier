+++
title = "array"
author = ["Houjun Liu"]
draft = false
+++

-   When you make an [array]({{< relref "KBharray.md" >}}), you are making space for each element
-   When you create a pointer, you are making space for 64 bit address
-   [array]({{< relref "KBharray.md" >}})s "decay to pointers": when you identify an array by name, you are sharing the location of the leading element
-   &amp;arr gets an address to the FIRST element --- don't do this, &amp;ptr gets the pointers' address

Array is a special type that represent a segment of contiguously allocated memory. You can't reassign an array to be equal to a new array.

```C
int nums[] = {1, 2, 3};
int nums2[] = {4, 5, 6};
```

`nums` and `nums2` has no memory set aside. Calling `sizeof()` on an array gets the length of the array; calling `sizeof()` on the pointer it decays to will get the word size. Therefore, when we pass an array to a function will require you giving the size to the function as well.

To get a pointer to the beginning of an array, write `&str[0]`. NEVER EVER write `&str`, even if its the same thing: the latter sounds like you are getting the address of an array which doesn't exist.


## Pointer Arithmetic {#pointer-arithmetic}

If you add/subtract values to a pointer, the value you add/subtract gets scaled by the size of type so you can always add/subtract as needed.
