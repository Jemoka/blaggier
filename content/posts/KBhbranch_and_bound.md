+++
title = "Branch and Bound"
author = ["Houjun Liu"]
draft = false
+++

Big idea: keep branching/selecting until a tally hits an upper/lower bound

Ingredients:

-   \\(Ulo(s)\\): lower bound function of [value function]({{< relref "KBhaction_value_function.md#value-function--kbhaction-value-function-dot-md" >}})
-   \\(Qhi(s,a)\\): upper bound function of [action-value function]({{< relref "KBhaction_value_function.md" >}})
-   \\(\mathcal{P}\\) problem (states, transitions, etc.)
-   \\(d\\) depth (how many next states to look into)---more is more accurate but slower

Its [Forward Search]({{< relref "KBhforward_search.md" >}}), but with bounds instead of exponentially looking into every possible next state, we only check the actions in the order of their bounded value. We start with the actions with the highest bound (most possible value), and if its already better than the upper bound, we can be done because we know everything else will have lower value as their bounds are lower.

Define subroutine `branch_and_bound(depth_remaining, utility_lower_bound, q_upper_bound, state)`.

1.  if depth_remaining=0; return (action=None, utility=utility_lower_bound(s))
2.  otherwise,
    1.  let `best=(action = None, utility = -infiny)`
    2.  for each possible action at our state, SORTED from highest `q_upper_bound(s,a)` to lowest
        1.  if `best.utility` is higher than the `q_upper_bound(s,a)` return best (because its not worth to search any other action anymore because anything else would have a lower max bound)
        2.  get an [action-value]({{< relref "KBhaction_value_function.md" >}}) for our current state where the [utility]({{< relref "KBhutility_theory.md" >}}) of each next state is the utility given by `branch_and_bound(depth_remaining-1, utility_lower_bound, q_upper_bound, next_state)`
        3.  if the [action-value]({{< relref "KBhaction_value_function.md" >}}) is higher than what we have, then we set best (a, action-value)
    3.  return best

This is basically the same thing as [Forward Search]({{< relref "KBhforward_search.md" >}}), but you get the bonus benefit of being able to early-terminate if you bettered your max bounds
