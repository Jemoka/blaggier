+++
title = "Forward Search"
author = ["Houjun Liu"]
draft = false
+++

Ingredients:

-   \\(\mathcal{P}\\) problem (states, transitions, etc.)
-   \\(d\\) depth (how many next states to look into)---more is more accurate but slower
-   \\(U\\) [value function]({{< relref "KBhaction_value_function.md#value-function--kbhaction-value-function-dot-md" >}}) estimate at depth \\(d\\)

We essentially roll forward into all possible next states up to depth \\(d\\), and tabulate our [value function]({{< relref "KBhaction_value_function.md#value-function--kbhaction-value-function-dot-md" >}}).

Define subroutine `forward_search(depth_remaining, value_function_estimate_at_d, state)`.

1.  if `depth_remaining=0`; return `(action=None, utility=value_function_estimate_at_d(state))`
2.  otherwise,
    1.  let `best = (action = None, utility = -infinity)`
    2.  for each possible action at our state
        1.  get an [action-value]({{< relref "KBhaction_value_function.md" >}}) for our current state where the [utility]({{< relref "KBhutility_theory.md" >}}) of each next state is the utility given by `forward_search(depth_remaining-1, value_function_estimate_at_d, next_state)`
        2.  if the [action-value]({{< relref "KBhaction_value_function.md" >}}) is higher than what we have, then we set `best=(a, action-value)`
    3.  return `best`

What this essentially does is to Dijkstra an optimal path towards the highest final utility \\(U(s)\\) om your current state, by trying all states.
