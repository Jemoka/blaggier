+++
title = "SU-CS143 MAY202025"
author = ["Houjun Liu"]
draft = false
+++

Its optimization time!!


## Program Optimization {#program-optimization}

"maximum benefit for minimal cost"


### When should optimization happen? {#when-should-optimization-happen}

**AST**?

-   pro: machine independent
-   con: no notion registers, not language dependent

**Assembly**?

-   pro: many optimization opportunities
-   con: machine dependent

And so, we really should be doing this with some IR.


### Three-address intermediate code {#three-address-intermediate-code}

Each instruction is of the form:

```nil
x := y op z
x := op z
```

where `x`, `z` are registers, constants, etc.


#### basic block {#basic-block}

A [basic block](#basic-block) is a sequence with no labels (except in the first point) an no jumps (except in the last point). So when we are inside a basic block, we can optimize the code inside sans worry about control flow.


#### control-flow graph {#control-flow-graph}

a [control-flow graph](#control-flow-graph) is a directed graph with....

-   basic blocks as nodes
-   as edge from \\(A\\) to \\(B\\) if an execution can pass from the last instruction in \\(A\\) to first instruction in \\(B\\)


### Three Levels of Optimizations {#three-levels-of-optimizations}

-   **local optimizations**: apply to a basic block in isolation
-   **global optimizations**: apply to a control-flow graph
-   **inter-procedural optimizations**: optimizations between graphs, such as inclining


### some stuff you should run {#some-stuff-you-should-run}

-   basic block
-   dataflow
-   loop
-   instruction optimization / peephole
-   register


#### some special oop stuff {#some-special-oop-stuff}

-   function inclining
-   method call targets
-   class unboxing


#### some functional stuff {#some-functional-stuff}

-   tail recursion
-   deforestation


### basic block optimizations {#basic-block-optimizations}


#### algebraic simplification {#algebraic-simplification}

```nil
x := x + 0  => x := x
x := x * 1 => x := x
y := y ** 2 => y := y*y
x := x * 8 => x := x << 3
```

on `--ffast-math`

```nil
-- only works on ints (since nan * 0 = nan)
x := x * 0 => x := 0
```


#### constant folding {#constant-folding}

```nil
x := y op z
```

with constant `y` and `z`, we can just fold it. so

```nil
x := 2+2 => x := 4
```


#### static single-assignment form {#static-single-assignment-form}

rewrite intermediate code in SSA form &lt;= never reassign variables. Meaning, if two assignments end up with the same rhs, they compute the same value. Namely:

So in SSA,

```nil
x := y + z
...
w := y + z
```

we know that `x` and `w` can't be redefined in SSA; this means that we cloud write:

```nil
x := y + z
...
w := x
```


#### copy propagation {#copy-propagation}

so we can keep writing using [static single-assignment form](#static-single-assignment-form) replacements. In particular note that once we are just assigning a variable to another, the first variable can just be replaced with the second everywhere.

```nil
b := z + y
a := b
x := 2 * a
```

we can stick b into a

```nil
b := z + y
a := b
x := 2 * b
```

and then we see that \`a := b\` is deadcode.

```nil
b := z + y
x := 2 * b
```


#### dead code elimination {#dead-code-elimination}

within a basic block, only one type of dead code

Suppose "w := rhs" appears in a basic block, but "w" doesn't appear anywhere else in the program. We can say "w := rhs" is dead and can be eliminated.


#### peephole optimization {#peephole-optimization}

a "peephole" is a sequence of contiguous instructions; the optimizer replaces the sequence with another equivalent one, but faster.


### global optimizations {#global-optimizations}

How do we apply [local optimizations](#basic-block-optimizations) to a global scope?

Generally, to prove postulate `P` at any point requires knowing the entire function; so we either know `X` is definitely true, or we say "we don't know."


#### example {#example}

Consider the branching order:

```nil
(X := 3, B > 0) => {(Y := Z + W), (Y := 0)} => (A := 2*x)
```

in this control flow graph, we never touch `x` in the middle, therefore we can just propagate `x` forward by replace it.


#### program point {#program-point}

every statement is associated with 2 [program point](#program-point)s:

1.  right before a statement
2.  right after a statement


#### global constant propagation {#global-constant-propagation}

Let's consider three states `x` can be:

| value      | interpretation          |
|------------|-------------------------|
| \\(\top\\) | not constant            |
| \\(c\\)    | constant, on every path |
| \\(\bot\\) | unreachable code        |

so by the time you hit a [program point](#program-point), if \\(x=c\\), then its constant. To perform this labeling, we must...

<!--list-separator-->

-  transfer function

    for "in"(to a statement) and "out" (of a statement), we have, slides 21 and more <https://web.stanford.edu/class/cs143/lectures/lecture15.pdf>.

<!--list-separator-->

-  an algorithm

    For every entry \\(s\_{0}\\) to the program, we set:

    \begin{equation}
    C\qty(s\_{0},x,\text{in}) = \top
    \end{equation}

    and set:

    \begin{equation}
    C\qty(s \neq s\_{0},x,\text{in}) = C\qty(s \neq s\_{0},x,\text{out}) = \bot
    \end{equation}

    everywhere else. An then we just apply the rules above.

    <!--list-separator-->

    -  convergence

        This system converges because the rules have it such that \\(\bot < c < \top\\) (once something is top, it can't go back.) So, \\(\top\\) is the "greatest" value, and \\(\bot\\) the "least".

        We can then lub the rules 1-4 from above into on rule:

        \begin{equation}
        C\qty(s,x,\text{in}) = \text{lub} \qty {C\qty(p,x,\text{out}) | p\text{ predecessor } s}
        \end{equation}

        So you can just see the lub of predecessor hierarchy of each statement.


#### dead code elimination {#dead-code-elimination}

a variable \\(x\\) is "live" at statement \\(s\\) if...

-   there's a statement \\(s'\\) that uses \\(x\\)
-   there's a path from \\(s\\) to \\(s'\\)
-   that path has no intervening assignment to \\(x\\)
