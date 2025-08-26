+++
title = "GDB"
author = ["Houjun Liu"]
draft = false
+++

[GDB]({{< relref "KBhgdb.md" >}}) is gnu's very own debugger

-   `b main` or `b 72` (set breakpoint on `main` function or line `72`)
-   `r args` (run with args)
-   `p thingname` or `p 3+5` (print a variable or return value)
    -   `p/t` print as binary
    -   `p/x` print as hex
-   `info` (get args, locals)
-   `n` `s` `continue` next, step, continue

<!--listend-->

```C
int test;
short lsb = 0xff;
test |= lsb

printf("%d\n",lsb);
```

```C
int test;

```
