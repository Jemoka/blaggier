+++
title = "Anytime Error Minimization Search"
author = ["Houjun Liu"]
draft = false
+++

Big picture: **combining off-line and on-line approaches** maybe the best way to tackle large POMDPs.

Try planning:

-   only where we are
-   only where we can reach

Take into account three factors:

1.  uncertainty in the value function
2.  reachability from the current belief
3.  actions that are likely optimal

It allows policy improvement on any base policy.


## Setup {#setup}

Discrete POMDPs:

-   \\(L\\), lower bound
-   \\(U\\), upper-bound
-   \\(b\_0\\): current belief

Two main phases: the algorithm


### Planning Phase {#planning-phase}

-   at each belief point, choose a particular next node to expand (using the scheme below to score the nodes)
-   expand that next node that are chosen
-   propagate the value of the belief upwards through [POMDP Bellman Backup]({{< relref "KBhvalue_iteration.md#pomdp-bellman-update" >}}) up through the tree


#### Best Node Selection {#best-node-selection}

We select the best node by three metrics:

1.  Uncertainty: \\(\epsilon(b) = U(b)-L(b)\\) we want small gap between upper and lower bound
2.  Optimality in actions:
    -   AEMS1: \\(p(a|b) = \frac{U(a,b)-L(b)}{U(a^{\*}, b)-L(b)}\\) ("what's the relative optimality of our action, compared to best action")
    -   AEMS2: \\(p(a|b)\\) = \\(1\\) if \\(a=A^{\*}\\), \\(0\\) otherwise. ("just take best action")
3.  Reachability: \\(p(b) = \prod\_{i=0}^{d} P(o^{(i)} | b^{(i)}, a^{(i)}) p(a^{(i)}|b^{(i)}})\\), where small \\(p\\) is either AIMS 1 or 2 above, where \\(a\\) comes from the best action conditional plan that came so far

Combining the metrics gives:

\begin{equation}
E(b) = \gamma P(b) \epsilon(b)
\end{equation}


### Execution {#execution}

-   execute the best action at \\(b\_0\\)
-   Perceive a new observation
-   \\(b\_0 \leftarrow update(b\_0,a,o)\\)
