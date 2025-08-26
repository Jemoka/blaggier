+++
title = "SU-CS143 MAY272025"
author = ["Houjun Liu"]
draft = false
+++

## Memory Hierachy {#memory-hierachy}

-   registers: 1 cycle (256 bytes or so)
-   cache: 4 cycles (100MB or so)
-   memory: 100-500 cycles (128GB)
-   disk: millions of cycles (1-10TB)


## Trends {#trends}

-   power usage limits: with a fixed power budget, we can't really get more transistors in the same space (i.e. stuff can't be faster)
-   cache miss cost is quite high, so using multiple lines of cache


## register allocation {#register-allocation}

see [Register Allocation]({{< relref "KBhregister_allocation.md" >}})


## performance engineering {#performance-engineering}


### example {#example}

Consider:

```c
for (int j=1; j<10; j++)
    for (int i=1; i<10000; i++)
        a[i] *= b[i]
```

you can see that, by the time you get to `b[100000]`, you probably have lost `b[1]` from your cache.

Instead, just reordering the loop:

```c
for (int i=1; i<10000; i++)
    for (int j=1; j<10; j++)
        a[i] *= b[i]
```

notice! at this point you are just using the same `b[i]` 10 times, and it will stay in cache.
