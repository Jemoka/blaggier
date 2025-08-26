+++
title = "randomness"
author = ["Houjun Liu"]
draft = false
+++

[randomness]({{< relref "KBhrandomness.md" >}}) is a **resource** which can be used.

Our unit of computation is a [randomized turing machine]({{< relref "KBhrandomized_turing_machine.md" >}})


## some questions of randomness {#some-questions-of-randomness}

**save time/space by using randomness**: we used to believe that \\(P \subset \text{Randomized } P\\), \\(L \subset \text{Randomized } L\\), etc. But we now think \\(P = \text{Randomized } P\\) (intuition: if solving [SAT]({{< relref "KBhnon_deterministic_turing_machines.md#boolean-formula-satisfiability" >}}) requires circuits of exponential size, then \\(P\\) is equal to Randomized \\(P\\)).

**efficient derandomized**: can we reduce usage of randomization---i.e. completely derandomize it while not loosing a lot of efficiency?


## properties of random algorithms {#properties-of-random-algorithms}

they...

-   **have error**: not super bad, since we can bound their error---repeating a randomized algorithm \\(k\\) times yields \\(2^{-\Omega\qty(k)}\\) factor error.
-   **hard to obtain**: very hard to get true randomness; in practice we use pesudorandomness


## examples of random algorithms {#examples-of-random-algorithms}


### matrix multiplication verification {#matrix-multiplication-verification}

\begin{equation}
\qty {\langle  A, B,C\rangle : AB = c}
\end{equation}

we can do this in \\(O\qty(n^{2})\\) with randomness, in particular by sampling a \\(v\\) and checking if \\(AB v = Cv\\)


### minimum spanning tree {#minimum-spanning-tree}

for \\(G\\) with \\(n\\) nodes and \\(m\\) edges, randomized algorithm gives a result in \\(O\qty(m)\\), by Karger-Klein-Tarjan.


### undirected STCONN {#undirected-stconn}

this is randomized \\(O\qty(\log n)\\) space (because we can just take an \\(O\qty(n^{3})\\) random walk and wait til you reach \\(t\\) from \\(s\\)).

(actually this is secretly deterministic \\(O\qty(\log n)\\) space thanks to Omer).

The reason why we need to take at most \\(O\qty(n^{3})\\) steps because the maximum number of steps starting from a particular node to visit all nodes is \\(O\qty(n \cdot m)\\) for \\(n\\) nodes in the graph and \\(m\\) (at most \\(O\qty(n^{2})\\)) edges ("for every node, pick a next edge").


### [PERFECT-MATCHING]({{< relref "KBha_library_of_languages.md#perfect-matching" >}}) {#perfect-matching--kbha-library-of-languages-dot-md}

See [PERFECT-MATCHING]({{< relref "KBha_library_of_languages.md#perfect-matching" >}})


### polynomial identity testing {#polynomial-identity-testing}

given \\(f\qty(x)\\), check if \\(f\qty(x)\\) is identically \\(0\\).
