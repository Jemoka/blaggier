+++
title = "Theory of Computing"
author = ["Houjun Liu"]
draft = false
+++

[Theory of Computing]({{< relref "KBhtheory_of_computing.md" >}}) is a science which attempts to identify "what the **most** **efficient** way to solve a given computational task?"


## "efficient" {#efficient}

...with respect to what _resources_?

-   time
-   space/memory
-   randomness
-   communication / interaction
-   quantum-ness (<https://theory.stanford.edu/~abouland/>)


## "most" {#most}


### study of impossibilities: _lower bounds_ {#study-of-impossibilities-lower-bounds}

For instance, we want a result like "**[SAT]({{< relref "KBhnon_deterministic_turing_machines.md#boolean-formula-satisfiability" >}}) cannot be solved in [Polynomial Time]({{< relref "KBhtime_complexity.md#polynomial-time" >}})**" (then in which case P != NP)


## history of the theory of computing {#history-of-the-theory-of-computing}


### computability theory {#computability-theory}

[computability theorists](#computability-theory) consider themselves to deal with the problem of: "what computational tasks can be solved at all?" We know that because of the [halting problem]({{< relref "KBhmapping_reduction.md#halting-problem" >}}), not everything is solvable. (Turing 1936)


### complexity theory {#complexity-theory}

Its a subclass of [computability theory](#computability-theory), but only with respect to problems that can be solve.


## grand challenges of complexity theory {#grand-challenges-of-complexity-theory}

1.  **P vs. NP** (belief P != NP): if the solution of a particular computational task can be verified quickly, does this mean the solution can be found quickly?
2.  **NP vs. coNP** (belief NP != coNP): are there theorems that are simple to state but require lengthy proofs?
3.  **P vs. NC** (belief P != NP): is every algorithm efficiently parallelizable? or are there inherently sequential tasks?
4.  **P vs. L** (belief P != L): can every **P** algorithm be recompiled to use "essentially no memory"
5.  **P vs. PSPACE** (belief P != PSPACE): does solvable without much memory implies solvable without much time
6.  **P vs. BPP** ([belief P == BPP]({{< relref "KBhp_vs_bpp.md" >}})): can every efficient randomized algorithms be deterministic (or are there only fast random algorithms but no fast deterministic algorithms?)
