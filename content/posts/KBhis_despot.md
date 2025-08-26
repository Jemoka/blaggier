+++
title = "IS-DESPOT"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

Large crowd navigation with sudden changes: unlikely events are out of likely sample. So, we want to bring in another distribution based on **importance** and not **likelyness**.


## Goals {#goals}

-   retains DESPOT garantees
-   outperforms [DESPOT]({{< relref "KBhdespot.md" >}}) and [POMCP]({{< relref "KBhpomcp.md" >}})


## [DESPOT]({{< relref "KBhdespot.md" >}}) with [Importance Sampling]({{< relref "KBhimportance_sampling.md#importance-sampling" >}}) {#despot--kbhdespot-dot-md--with-importance-sampling--kbhimportance-sampling-dot-md}

1.  take our initial belief
2.  sample trajectories according to [Importance Sampling]({{< relref "KBhimportance_sampling.md#importance-sampling" >}}) distribution
3.  calculate values of those states
4.  obtain value estimate based on weighted average of the values


### [Importance Sampling]({{< relref "KBhimportance_sampling.md#importance-sampling" >}}) of trajectories {#importance-sampling--kbhimportance-sampling-dot-md--of-trajectories}

We define an [importance distribution]({{< relref "KBhimportance_sampling.md#importance-sampling" >}}) of some trajectory \\(\xi\\):

\begin{equation}
q(\xi | b,\pi) = q(s\_0) \prod\_{t=0}^{D} q(s\_{t+1}, o\_{t+1} | s\_{t}, a\_{t+1})
\end{equation}


## Background {#background}

[Importance Sampling]({{< relref "KBhimportance_sampling.md#importance-sampling" >}})
