+++
title = "Absolute Value Function"
author = ["Houjun Liu"]
draft = false
+++

Here's a fun implementation of absolute value.

```C
long abs_value(long num) {
    long sign = num >> (sizeof(long)*CHAR_BIT - 1); // so you only get all 1s or all 0s

    return (num ^ sign) - sign; // sign is either -1 or 0. So, if num is non-negative
                                // num^sign is not going to do anything (as 0^0 = 0, 0^1 = 1).
                                // If num negative, num^sign is going to flip the bit AND subtract
                                // negative on (i.e. add one)
}
```
