+++
title = "HybPlan"
author = ["Houjun Liu"]
draft = false
+++

"Can we come up a policy that, if not fast, **at least reach the goal!**"


## Background {#background}


### Stochastic Shortest-Path {#stochastic-shortest-path}

we are at an initial state, and we have a series of goal states, and we want to reach to the goal states.

We can solve this just by:

-   [value iteration]({{< relref "KBhvalue_iteration.md" >}})
-   simulate a trajectory and only updating reachable state: [RTDP]({{< relref "KBhltrdp.md#real-time-dynamic-programming" >}}), [LRTDP]({{< relref "KBhltrdp.md" >}})
-   [MBP]({{< relref "KBhmbp.md" >}})


## Problem {#problem}

MDP + Goal States

-   \\(S\\): set of states
-   \\(A\\): actions
-   \\(P(s'|s,a)\\): transition
-   \\(C\\): reward
-   \\(G\\): absorbing **goal states**


## Approach {#approach}

Combining [LRTDP]({{< relref "KBhltrdp.md" >}}) with anytime dynamics

1.  run GPT (not the transformer, "General Planning Tool", think [LRTDP]({{< relref "KBhltrdp.md" >}})) exact solver
2.  use GPT policy for solved states or visited more than a certain threshold
3.  uses [MBP]({{< relref "KBhmbp.md" >}}) policy for other states
4.  policy evaluation for convergence

{{< figure src="/ox-hugo/2024-02-15_09-27-58_screenshot.png" >}}

"use GPT solution as much as possible, and when we haven't ever visited a place due to the search trajectories, we can use [MBP]({{< relref "KBhmbp.md" >}}) to supplement the solution"
