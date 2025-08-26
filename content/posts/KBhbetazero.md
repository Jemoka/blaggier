+++
title = "BetaZero"
author = ["Houjun Liu"]
draft = false
+++

## Background {#background}

recall [AlphaZero]({{< relref "KBhlm_alignment.md#alphazero" >}})

1.  Selection ([UCB 1]({{< relref "KBhdirected_exploration.md#ucb-1" >}}), or [DTW]({{< relref "KBhdouble_progressive_widening.md" >}}), etc.)
2.  Expansion (generate possible belief notes)
3.  Simulation (if its a brand new node, [Rollout]({{< relref "KBhrollout_with_lookahead.md#rollout" >}}), etc.)
4.  Backpropegation (backpropegate your values up)


## Key Idea {#key-idea}

**Remove the need for heuristics for [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}})---removing inductive bias**


## Approach {#approach}

We keep the ol' neural network:

\begin{equation}
f\_{\theta}(b\_{t}) = (p\_{t}, v\_{t})
\end{equation}


### Policy Evaluation {#policy-evaluation}

Do \\(n\\) episodes of [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}}), then use cross entropy to improve \\(f\\)


### Ground truth policy {#ground-truth-policy}

{{< figure src="/ox-hugo/2024-02-15_10-05-04_screenshot.png" >}}


### Action Selection {#action-selection}

Uses [Double Progressive Widening]({{< relref "KBhdouble_progressive_widening.md" >}})

Importantly, **no need to use a heuristic (or worst yet random [Rollout]({{< relref "KBhrollout_with_lookahead.md#rollout" >}})s) for action selection**.

{{< figure src="/ox-hugo/2024-02-15_10-11-45_screenshot.png" >}}


## Difference vs. [LetsDrive]({{< relref "KBhletsdrive.md" >}}) {#difference-vs-dot-letsdrive--kbhletsdrive-dot-md}

-   [LetsDrive]({{< relref "KBhletsdrive.md" >}}) uses [DESPOT]({{< relref "KBhdespot.md" >}})
-   [BetaZero]({{< relref "KBhbetazero.md" >}}) uses [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}}) with [belief]({{< relref "KBhbelief.md" >}}) states.
