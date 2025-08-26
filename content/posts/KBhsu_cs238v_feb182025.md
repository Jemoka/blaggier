+++
title = "SU-CS238V FEB182025"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}


## Notation {#notation}


## New Concepts {#new-concepts}


## Important Results / Claims {#important-results-claims}

-   [Taylor Models]({{< relref "KBhtaylor_models.md#taylor-models" >}})
-   [Concrete Reachability]({{< relref "KBhconcrete_reachability.md#concrete-reachability" >}})


## Questions {#questions}


## Interesting Factoids {#interesting-factoids}

---


## Partitioning {#partitioning}

As a way to prevent [wrapping effect]({{< relref "KBhconcrete_reachability.md#concrete-reachability" >}}), you can partition your initial set into smaller chunks and propagate them separately, and then union them together.


## Discrete Reachability {#discrete-reachability}

Remember: we can represent discrete systems using directed graphs.


### reachable sets for discrete systems {#reachable-sets-for-discrete-systems}

Breadth-first search to get the reachable sets. We can terminate the BFS by checking if one subset of points is contained within another:

\begin{equation}
\mathcal{R}\_{1:d} \subseteq \mathcal{R}\_{1:d-1}
\end{equation}

and once we have this we know that the set outputs are going to be invariant.


## Probabilistic Reachability {#probabilistic-reachability}

"Will this thing or that thing be reached first?" --- "it allows us to tell us the distribution over reachable states at each time stamp"


### occupancy analysis {#occupancy-analysis}

The probability of **occupancy** tells us the distribution over reachable states at each time stamp

\begin{equation}
P\_{1}\qty(s) = P\_{s}\qty(s)
\end{equation}

For \\(t > 1\\):

\begin{equation}
P\_{t+1} \qty(s) = \sum\_{s' \in \mathcal{S}}^{} T\qty(s', s) P\_{t}\qty(s')
\end{equation}


### finite horizon reachability {#finite-horizon-reachability}

What if we want to know the probability _any of_ an entire **set** of states is reached? Call it \\(R\_{t}\\):

for \\(t = 1\\), we have:

\begin{equation}
R\_{1} \qty(s) = \begin{cases}
1, \text{if } s \in \mathcal{S}\_{T}\\\\
0
\end{cases}
\end{equation}

for \\(t > 1\\), we write:

\begin{equation}
R\_{t+1} \qty(s) = \begin{cases}
1, \text{if } s \in \mathcal{S}\_{T} \\\\
\sum\_{s' \in \mathcal{S}}^{} T\qty(s, s') R\_{t}\qty(s'), \text{otherwse}
\end{cases}
\end{equation}

this is **not** a probability distribution over all states! it doesn't sum to $1$---its just the probability of any given node reaching at that set.


### Discrete State Abstractions {#discrete-state-abstractions}

Converting continuous state to [Discrete State Abstractions](#discrete-state-abstractions). Grid up your input state space, and take the entire grid and propagate it using any [inclusion functions]({{< relref "KBhinclusion_functions.md#inclusion-functions" >}}). At every step, map back to the grid and us that as the current reachable (possibly non-convex) set.

A finer partition will result in less overapproximation.
