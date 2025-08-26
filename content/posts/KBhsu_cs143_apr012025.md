+++
title = "SU-CS143 APR012025"
author = ["Houjun Liu"]
draft = false
+++

its [compiler]({{< relref "KBhcompiler.md#compiler" >}})s time!

```dot
digraph {
rankdir=LR;
graph [bgcolor=transparent];
node [fontcolor=white, color=white];
edge [fontcolor=white, color=white];

program -> compiler -> "binary code";
}
```

{{< figure src="/ox-hugo/complier.svg" >}}


## a bit of history {#a-bit-of-history}

manual punch cards --- slow to write


### speedcoding {#speedcoding}

-   10-20 times slower than hand written assembly
-   interpreter!

...nobody used it


### Fortran I {#fortran-i}

John Backus

-   development time halved
-   performance is close to hand-written assembly (80%!)

Key automation: you had to manage the finite number of registers in hand-writing assembly, but Fortran would fix that for you.
