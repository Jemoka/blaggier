+++
title = "bool"
author = ["Houjun Liu"]
draft = false
+++

[bool]({{< relref "KBhbool.md" >}}) does **not** belong in pure C.

```c
#include <stdio.h>
#include <stdbool.h> // you need to include this to get bools to work.

int main(int argc, char *argv[]) {
    bool test = true;

    if (test)
        printf("its true\n")
}
```
