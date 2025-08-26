+++
title = "caching"
author = ["Houjun Liu"]
draft = false
+++

All caches, uses similar memory addressing scheme (i.e. each address can map to one of each device); each "line" of cache is usually 64 bytes. This means that each time you grab something from memory, the 64 bytes surrounding that area of memory will be cached. You are most likely to do this because of iterating through an array.

-   L1-D cache: on the CPU, used for staging for registers
-   L1-I cache: on the CPU, used for staging for assembly instructions
-   L2 cache: L1 staging
-   L3 cache: L2 staging
-   Main memory: memory


## cache locality {#cache-locality}


### temporal locality {#temporal-locality}

"Things I have used recently, I'm likely to use again soon"


### spacial locality {#spacial-locality}

"Things next to what I got I'm likely going to use soon"
