+++
title = "G-DICE"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

Its the same. It hasn't changed: curses of dimensionality and history.

Goal: to solve decentralized multi-agent MDPs.


## Key Insights {#key-insights}

1.  macro-actions (MAs) to reduce computational complexity (like hierarchical planning)
2.  uses cross entropy to make infinite horizon problem tractable


## Prior Approaches {#prior-approaches}

-   **masked Monte Carlo search**: heuristic based, no optimality garantees
-   [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}}): poor performance


## Direct Cross Entropy {#direct-cross-entropy}

see also [Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}})

1.  sample a value function \\(k\\)
2.  takes \\(n\\) highest sampled values
3.  update parameter \\(\theta\\)
4.  resample until distribution convergence
5.  take the best sample \\(x\\)


## [G-DICE]({{< relref "KBhg_dice.md" >}}) {#g-dice--kbhg-dice-dot-md}

1.  create a graph with exogenous \\(N\\) nodes, and \\(O\\) outgoing edges (designed before)
2.  use [Direct Cross Entropy](#direct-cross-entropy) to solve for the best policy

---

{{< figure src="/ox-hugo/2024-02-22_10-08-33_screenshot.png" >}}


## Results {#results}

1.  demonstrates improved performance over MMCS and [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}})
2.  does not need robot communication
3.  garantees convergence for both finite and infiinte horizon
4.  can choose exogenous number of nodes in order to gain computational savings
