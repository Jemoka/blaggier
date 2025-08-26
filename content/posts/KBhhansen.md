+++
title = "Hansen"
author = ["Houjun Liu"]
draft = false
+++

[controller]({{< relref "KBhcontroller.md" >}}) [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) policies with FST. Previous papers had exponential blowups.

Successor function is **deterministic**.


## [policy iteration]({{< relref "KBhpolicy_iteration.md" >}}) {#policy-iteration--kbhpolicy-iteration-dot-md}

Use FST as policy representation:

1.  [deterministic controller POMDP evaluation](#deterministic-controller-pomdp-evaluation)
2.  for all \\((a,o,x)\\), add a now node x' and evaluate them to see if its needed
3.  then, we perform pruning
    -   everything that's dominated (i.e. \\(U(x,s) < U(x', s) \forall s\\). i.e. we want to prune everything for which the expected utility of being in node \\(x'\\) dominates the expected utility of \\(x\\) for all \\(x\\).
    -   prune new nodes that are duplicates in terms of action and transitions

When you are done, extract the policy: find the node that maximizes your


## heuristic search {#heuristic-search}

Optimize value function ran starting at the starting belief state, not for all states. Add nodes only when improvement is seen starting at the beginning.


## deterministic controller POMDP evaluation {#deterministic-controller-pomdp-evaluation}

Recall that controllers are defined over belief-states, and, unlike [finite state controller evaluation]({{< relref "KBhcontroller.md#finite-state-controller-evaluation" >}}), the transitions are not distributions; so, we have:

\begin{equation}
U(x,s) = R(s,a(x)) + \gamma \sum\_{s'}^{}T(s'|s,a(x)) \sum\_{o}^{} O(o|s', a(x)) U(x'(x,a,o), s')
\end{equation}
