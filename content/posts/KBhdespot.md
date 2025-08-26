+++
title = "Determinized Sparse Partially Observable Tree"
author = ["Houjun Liu"]
draft = false
+++

key idea: let's build a tree such that, after taking the action, the **observation is deterministic**. Therefore, you get a [belief]({{< relref "KBhbelief.md" >}}) tree with no branching on observations.


## [DESPOT]({{< relref "KBhdespot.md" >}}) trees {#despot--kbhdespot-dot-md--trees}

We make an assumption, that the actual observation given are fixed given belief. That is:

\begin{equation}
O(o|b,a) = 1
\end{equation}

for some specific \\(o\\), everything else is \\(0\\) for every b,a.


### Sample Scenarios {#sample-scenarios}

To make such a tree, let's sample of set of [scenarios](#despot--kbhdespot-dot-md--trees): sequences of actions and observations (because, given a belief and action, we assume observation is fixed. So, given an initial belief and an action, you will always go down a single "scenario").


### Build Tree {#build-tree}

Do a bunch of scenario sampling


### Use Tree {#use-tree}

Starting at where you are in terms of initial belief, greedily choose the "best action".


### Evaluate Tree {#evaluate-tree}

Average discounted future reward of the scenarios that relate to your starting states.


### Drawbacks {#drawbacks}

Normal [DESPOT]({{< relref "KBhdespot.md" >}}) is very very easy to overfit.


## Regularized [DESPOT]({{< relref "KBhdespot.md" >}}) {#regularized-despot--kbhdespot-dot-md}

Build a [DESPOT]({{< relref "KBhdespot.md" >}}) until depth \\(D\\), with \\(K\\) senarios, then, treat the resulting tree as a [conditional plan]({{< relref "KBhconditional_plan.md" >}}), do bottom-up DP to optimize the plan.

Given a set of senarios \\(\Phi\\), we write:

{{< figure src="/ox-hugo/2024-01-27_23-48-15_screenshot.png" >}}


## Anytime DESPOT {#anytime-despot}

We build up the despot tree by maintaining upper and lower bounds on the value function, and try to expand on [scenarios](#despot--kbhdespot-dot-md--trees) that would help us lower the gap between them.

First, pick an upper and lower bound. The note on [HSVI]({{< relref "KBhhsvi.md" >}}) may help.

1.  Build and Optimize Bounded [DESPOT tree](#despot--kbhdespot-dot-md--trees) (see below) starting at \\(b\_{0}\\)
2.  Compute the optimal policy using [Regularized DESPOT](#regularized-despot--kbhdespot-dot-md) expression above
3.  Execute best action
4.  Get observation
5.  \\(update(b,a,o)\\)


### Building Bounded [DESPOT]({{< relref "KBhdespot.md" >}}) {#building-bounded-despot--kbhdespot-dot-md}

1.  sample a set of \\(\Phi\\) senarios at \\(b\_0\\)
2.  insert \\(b\_0\\) into the tree as the root node
3.  let \\(b \leftarrow b\_0\\), and, as time permits:
    1.  tighten bounds on \\(b\\)
    2.  back up the upper and lower bounds you found all the way up the tree as you would with [HSVI]({{< relref "KBhhsvi.md" >}})


### Tightening Bounds {#tightening-bounds}

if \\(b\\) is a leaf on the tree, then add new belief nodes for every action and every observation as children of \\(b\\).

then,

\begin{equation}
b \leftarrow update(b, a^{\*}, o^{\*})
\end{equation}

where \\(a^{\*}\\) and \\(o^{\*}\\) are determined by...

-   \\(a^{\*}\\): [IE-MAX Heuristic]({{< relref "KBhhsvi.md#ie-max-heuristic" >}}), where the original upper-bound is \\(Q\\)
-   \\(o^{\*}\\): [weighted excess uncertainty]({{< relref "KBhhsvi.md#weighted-excess-uncertainty" >}})

**If the [weighted excess uncertainty]({{< relref "KBhhsvi.md#weighted-excess-uncertainty" >}}) we got is non-zero, we repeat this tightening bounds process until it is zero.**


## DESPOT Theoretic Guarantees {#despot-theoretic-guarantees}

It is near-optimal as a policy.
