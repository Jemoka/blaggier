+++
title = "MCVI"
author = ["Houjun Liu"]
draft = false
+++

[MCVI]({{< relref "KBhmcvi.md" >}}) solves [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s with continuous state space, but with discrete observation and action spaces. It does this by formulating a POMDP as a graph.

Fast algorithms require discretized state spaces, which makes the problem much more difficult to model. MCVI makes continuous representations possible for complex domains.


## MC Backup {#mc-backup}

Normal [POMDP Bellman Backup]({{< relref "KBhvalue_iteration.md#pomdp-bellman-update" >}}) isn't going to work well with continuous state spaces.

Therefore, we reformulate our value backup as:

\begin{equation}
V\_{t+1}(b) = \max\_{a \in A} \qty(\int\_{s} R(s,a)b(s) \dd{s}) + \gamma \sum\_{o \in O}^{} p(o|b,a) V\_{t}(update(b,a,o))
\end{equation}

whereby, a continuous belief update:

\begin{equation}
update(b,a,o) = \kappa O(o|s',a) \int\_{s \in S} T(s'|s,a) b(s) \dd{s}
\end{equation}

where \\(\kappa\\) is a normalisation constant to keep the new belief a probability.

But! Instead of actually taking the integral, we simulate a series of trajectories and sum the toal reward


## MC-Backup at Graph {#mc-backup-at-graph}

We construct at graph by sticking each best action determined by rolling out \\(L\\) steps and computing the reward.

Collecting the values given each observation, we create a new node for the best action; the best action per observation is connected as well.

{{< figure src="/ox-hugo/2024-01-30_20-02-16_screenshot.png" >}}

This creates a new optimal policy graph from the rollouts.


## MCVI {#mcvi}

-   initial each reward at action to \\(0\\)
-   for each observation, initialize each observation, node as \\(0\\)
-   Take monte-carlo samples across the actions and states to take integrals to obtain:
    -   \\(HV\_{g}(b) = \max\_{a \in A} \qty(\int\_{s \in S} R(s,a)b(s) \dd{s} + \sum\_{o}^{} ???)\\)
    -   each future observation is sampled using monte-carlo simulation

each backup, you pick one new node to add.
