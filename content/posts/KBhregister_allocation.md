+++
title = "Register Allocation"
author = ["Houjun Liu"]
draft = false
+++

Intermediate code uses "unlimited" temporaries. We have more temporaries than there are registers. Key: **assign multiple temporaries to each register**


## example {#example}

Consider:

```haskell
a := c + d
e := a + b
f := e - 1
```

notice how `a` and `e` are both dead after use, we can then allocate:

```haskell
r1 := r2 + r3
r1 := r1 + r4
r1 := r1 - r1
```

key: \*you can share a register between \\(t\_{1}\\) and \\(t\_{2}\\) if at any point at most one of \\(t\_1\\) and \\(t\_2\\) are alive.


## algorithm {#algorithm}


### liveness check {#liveness-check}

go through liveness analysis to see what's live or not at any particular moment.


### register inference graph {#register-inference-graph}

construct an undirected graph where:

1.  a node for each temporary
2.  an edge between \\(t\_1\\), \\(t\_2\\) if they are live at the same time

two temporaries can't be at the same register if there's an edge between them. Think of this as a [clique problem]({{< relref "KBhnon_deterministic_turing_machines.md#clique-problem" >}}) for every group of live variables from the step above.


### coloring {#coloring}

Notice that the graph above is \\(k\\) colorable iff all variables can fit in \\(k\\) registers as no two adjacent nodes will share the same color as they occur simultaneously.

This is naively an NP hard problem. And a coloring also may not exist.


#### observation {#observation}

-   pick a node \\(t\\) with fewer than \\(k\\) neighbors in the RIG
-   eliminate \\(t\\) and its edges from RIG
-   if the result is \\(k\\) colorable, then so is the original graph

since \\(t\\) has fewer than \\(k\\) neighbors, and then coloring it will just allow us to use the remaining color for \\(t\\)


#### algorithm {#algorithm}

to k_color:

1.  remove a node with less than \\(k\\) neighbors; stick it on a stack
2.  repeat step 1 until graph is empty
3.  while stack is not empty
    1.  pop
    2.  assign a color; since at every state here the thing we popped has less than \\(k\\), we can find a distinct color under \\(k\\)

we have a failure case when we are unable to peel the graph until empty in step 2.

if so, peel as much as you can, and then...

1.  pick a node (following some heuristics, see below)
2.  remove it and stick it somewhere else
3.  keep going to previous algorithm's step 2

when we put the node you evicted back in, there's a _chance_ that you can still color it.

if a variable is not colorable, we stick it into the stack.

We now make a control flow graph where we load the variable and write to the variable. This allows us to recompute liveness since the liveness is reduced to right before load and uses.

also each "live" of \\(f\\) is independent, and so we will have more nodes on the graph, etc.


#### who do we spill? {#who-do-we-spill}

if we have a case where everybody's edges is above \\(k-1\\), who do we spill?

**general goals**: "reduce number of loads"

-   spill with the most conflicts
-   spill with few definition and uses
-   _avoid spilling in inner loops_
