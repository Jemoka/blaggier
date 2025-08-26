+++
title = "optimization"
author = ["Houjun Liu"]
draft = false
+++

[optimization]({{< relref "KBhoptimization.md" >}}) is a [decision making method]({{< relref "KBhdecision_making.md#id-9075c44f-4b26-4f5a-9236-bc7a5c10f4ee-decision-making-methods" >}}):

1.  identify a performance measure and a space of possible strategies to try
2.  run a bunch of simulations given a particular strategy, and measuring the performance
3.  try strategies with the goal of maximizing the performance measured

Importantly: model is not used to guide the search, it is only used to run simulations to evaluate performance.


## Disadvantage (or advantage) {#disadvantage--or-advantage}

does **not** take a advantage of the structure of the problem


## Optimization Steps {#optimization-steps}

1.  if you are doing something infrequently, make sure the simplest code
2.  If you are doing something very often, and/or on big inputs, make the primary algorithm big-o cost reasonable
3.  Make GCC Work!
4.  Optimize explicitly as last resort.


## Main Optimization Techniques {#main-optimization-techniques}

-   constant folding
-   sub-expression elimination
-   dead code elimination
-   "strength reduction"
-   code motion
-   tail recursion
-   loop unrolling


### constant folding {#constant-folding}

There are many constants which happens during code writing. Therefore, for functions that operate on constant values, they will be folded in and the math done ahead-of-time during compilation.


### common sub-instruction elimination {#common-sub-instruction-elimination}

If you have the same sub-expression over and over again, we compute it ahead of time and use that result in multiple places.


### dead code elimination {#dead-code-elimination}

Code which doesn't do anything of interest. This maybe subtle:

```C
if (param == 0) {
    return 0;
} else {
    return param;
}
```

this is (mostly) dead code. It all return `0`.


### strength reduction {#strength-reduction}

Multiply can be rounded to a bit shift, and mod can be changed to an AND operation.

```C
7 * a == 8*a - a
```

 vs
So you can left shift and then subtract, which is dramatically easier.

We can even do this with:

```C
b / 3
```

which can be converted to

```C
(b*3) / 10
```

which is much easier because its a multiplication


### code motion {#code-motion}

if there is a common sub-exppression, it can be pull out of loops

```C
for (size_t i = 0; i < strlen(s); i++) {
    arr[i] = s[i];
}
```

the `strlen` call can be and will be pulled out.


### tail recursion {#tail-recursion}

turn a recursive call into a while loop to save stack frame management time


### loop unrolling {#loop-unrolling}

A loop can be "factored out":

```C
for (int i=0; i<=n; i++) {
    sum += arr[i];
}
```

can turn into

```C
for (int i=0; i<=n-4; i+=4) {
    sum += arr[i];
    sum += arr[i+1];
    sum += arr[i+2];
    sum += arr[i+3];
} // handle ending cases
```

Why don't we unroll all the way? We don't know what \\(n\\) is.
