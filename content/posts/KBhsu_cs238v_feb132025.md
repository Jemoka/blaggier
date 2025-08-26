+++
title = "SU-CS238V FEB132025"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}


## Notation {#notation}


## New Concepts {#new-concepts}


## Important Results / Claims {#important-results-claims}

-   [overapproximate]({{< relref "KBhoverapproximation.md#overapproximation" >}})
-   [inclusion functions]({{< relref "KBhinclusion_functions.md#inclusion-functions" >}})


## Questions {#questions}


## Interesting Factoids {#interesting-factoids}


## reachability for non-linear systems {#reachability-for-non-linear-systems}

Standard [reachability analysis]({{< relref "KBhreachability_analysis.md#reachability-analysis" >}}) for [Linear Dynamical System]({{< relref "KBhlinear_dynamical_system.md#linear-dynamical-system" >}}) is not great, because [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}})s don't stay [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}})s when we apply non-linear operations.

The general vibe, then, is to take a non-linear thing and bound them using a [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}}).


### interval arithmetic {#interval-arithmetic}

We can't propagate [polytope]({{< relref "KBhsu_cs238v_feb112025.md#polytope" >}})s though non linear systems; but we can propagate intervals.

Suppose we have an interval:

\begin{equation}
[x] = \qty {x \mid x\_1 \leq x \leq x\_2}
\end{equation}

Let's define some operations


#### interval counterpart of addition {#interval-counterpart-of-addition}

\begin{equation}
[x] + [y] = \qty {x+y \mid x \in [x], y \in [y]}
\end{equation}

We could actually compute the interval explicitly:

\begin{equation}
[x] + [y] = [x\_1 + y\_1, x\_2 + y\_2]
\end{equation}

we can just add the intervals together


#### interval counter part of binary operators {#interval-counter-part-of-binary-operators}

\begin{equation}
[x] \cdot [y] = \qty {x \cdot y \mid x \in [x], y \in [y]}
\end{equation}


#### specifically... {#specifically-dot-dot-dot}

\begin{equation}
[x] + [y] = [x\_1 - y\_2, x\_2 - y\_1]
\end{equation}

\begin{equation}
[x] \times [y] = [\min \qty(x\_1y\_1, x\_1y\_2, x\_2y\_1, x\_2y\_2), \max \qty(x\_1y\_1, x\_1y\_2, x\_2y\_1, x\_2y\_2)]
\end{equation}

**notably!** this last thing is not defined if any of the intervals contains \\(0\\).

for [monotone function]({{< relref "KBhnon_linear_ode.md#monotone-function" >}}) **f**:

\begin{equation}
f\qty([x]) = [f\qty(x\_1), f\qty(x\_2)]
\end{equation}
