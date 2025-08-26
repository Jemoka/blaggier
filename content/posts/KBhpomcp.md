+++
title = "POMCP"
author = ["Houjun Liu"]
draft = false
+++

Previous [monte-carlo tree search]({{< relref "KBhmonte_carlo_tree_search.md" >}}) methods which are not competitive to [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}), [SARSOP]({{< relref "KBhsarsop.md" >}}), etc., but those are affected by close-up history.

**key point**: monte-cargo roll outs best-first tree search + unweighted particle filter (instead of categorical beliefs)


## Background {#background}

-   History: a trajectory of some \\(h = \\{a\_1, o\_1, ...\\}\\)
-   [generative model]({{< relref "KBhonline_planning.md#generative-model" >}}): we perform a random sample of possible next state (weighted by the action you took, meaning an instantiation of \\(s' \sim T(\cdot | s,a)\\)) and reward \\(R(s,a)\\) from current state
-   Rollout: keep sampling at each point, rolling out and calculating future reward


## [monte-carlo tree search]({{< relref "KBhmonte_carlo_tree_search.md" >}}) {#monte-carlo-tree-search--kbhmonte-carlo-tree-search-dot-md}

1.  loop:
    1.  sample \\(s\\) from the belief distribution \\(B(h)\\) for each node and call that the node state
    2.  loop until we reach a leaf:
        1.  sample exploratino using [UCB 1]({{< relref "KBhdirected_exploration.md#ucb-1" >}}) via the belief
        2.  get observation, reward, next state
    3.  add leaf node, add node for each available action
    4.  [Rollout]({{< relref "KBhrollout_with_lookahead.md#rollout" >}})
    5.  backpropegate the obtained value with discounts backwards via [POMDP Bellman Backup]({{< relref "KBhvalue_iteration.md#pomdp-bellman-update" >}})

During runtime, we choose the action with the best action, prune the tree given what you observed, and do this again in a different.
