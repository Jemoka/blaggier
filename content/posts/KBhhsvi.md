+++
title = "HSVI"
author = ["Houjun Liu"]
draft = false
+++

Improving [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}) without sacrificing quality.


## Initialization {#initialization}

We first initialize [HSVI]({{< relref "KBhhsvi.md" >}}) with a set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s \\(\Gamma\\), representing the lower-bound, and a list of tuples of \\((b, U(b))\\) named \\(\Upsilon\\), representing the upper-bound. We call the value functions they generate as \\(\bar{V}\\) and \\(\underline V\\).


### Lower Bound {#lower-bound}

Set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s: [best-action worst-state]({{< relref "KBhworst_possible_state.md" >}}) ([HSVI]({{< relref "KBhhsvi.md" >}})1), [blind lower bound]({{< relref "KBhblind_lower_bound.md" >}}) ([HSVI]({{< relref "KBhhsvi.md" >}})2)


#### Calculating \\(\underline{V}(b)\\) {#calculating-underline-v--b}

\begin{equation}
\underline{V}\_{\Gamma} = \max\_{\alpha} \alpha^{\top}b
\end{equation}


### Upper Bound {#upper-bound}

[Fast Informed Bound]({{< relref "KBhfast_informed_bound.md" >}})

-   solving fully-observable MDP
-   Project \\(b\\) into the point-set
-   Projected the upper bound onto a convex hull (HSVI2: via approximate convex hull projection)


#### Calculating \\(\bar{V}(b)\\) {#calculating-bar-v--b}

Recall that though the lower-bound is given by [alpha vector]({{< relref "KBhalpha_vector.md" >}})s, the upper bound is given in terms of a series of tuples \\((b, U(b)) \in \Upsilon\\).

-   [HSVI]({{< relref "KBhhsvi.md" >}})1: we figure the upper bound for any given \\(b\\) by projecting onto the convex hull formed by points on \\(\Upsilon\\)
-   [HSVI]({{< relref "KBhhsvi.md" >}})2: approximate linear projection


## Update {#update}

Begin with state \\(b = b\_0\\).

Repeat:

at every step, we perform a local update for upper and lower bound using the current \\(b\\)

-   the lower bound is **updated** using [PBVI Backup]({{< relref "KBhpoint_based_value_iteration.md#pbvi-backup" >}}) on \\(b, \Gamma\\)
-   the upper bound is **updated** using [POMDP Bellman Update]({{< relref "KBhvalue_iteration.md#pomdp-bellman-update" >}}) on \\(b, \Upsilon\\), putting the new \\((b, u(b))\\) in the set \\(\Upsilon\\).

Then, we update our belief via the usual:

\begin{equation}
b \leftarrow update(b, a^{\*}, o^{\*})
\end{equation}

where \\(a^{\*}\\) and \\(o^{\*}\\) are determined by...


### IE-MAX Heuristic {#ie-max-heuristic}

[IE-MAX Heuristic](#ie-max-heuristic) is used to determine \\(a^{\*}\\), whereby we choose the action such that:

\begin{equation}
a^{\*} = \arg\max\_{a}Q^{(\bar{V})}(b)
\end{equation}

yes, we choose the next action which maximizes the **upper bound** of the utility we can get.


### weighted excess uncertainty {#weighted-excess-uncertainty}

[weighted excess uncertainty](#weighted-excess-uncertainty) is used to determine \\(o^{\*}\\). Suppose we are depth \\(d\\) loops in the search tree (i.e. this is our $d$th chain), we define:

\begin{equation}
\text{excess}(b,t) = (\bar{V}(b)-\underline{V}(b)) - \epsilon \gamma^{-t}
\end{equation}

"how far away are we from converging to a value uncertainty of no more than \\(\epsilon\\), given we are depth \\(t\\) in?

and, we choose the observation \\(o^{\*}\\) such that:

\begin{equation}
o^{\*} = \arg\max\_{o} \qty[p(o|b,a^{\*}) \text{excess}(update(b,a,o), t+1)]
\end{equation}

where,

\begin{align}
P(o|b,a) &= \sum\_{s}^{} p(o|s,a) b(s)  \\\\
&= \sum\_{s}^{} \sum\_{s'}^{} T(s'|s,a) O(o|s',a) b(s)
\end{align}
