+++
title = "function"
author = ["Houjun Liu"]
draft = false
+++

## function pointers {#function-pointers}

```c
typedef bool (*should_swap) (int, int);
```

all [function]({{< relref "KBhfunction.md" >}})'s names are **pointers** to first address of the function's machine code in memory.

When writing a [generic]({{< relref "KBhgeneric.md" >}}) function, if we don't know about the behavior of something (such as comparison), etc., we have to rely on the client to specify the information in terms of a function.

-   **function writer**: writes algorithmic function, relies on caller data
-   **function caller**: knows data, and doesn't know how algorithm knows
