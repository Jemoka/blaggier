+++
title = "monte-carlo tree search"
author = ["Houjun Liu"]
draft = false
+++

-   \\(\mathcal{P}\\) problem (states, transitions, etc.)
-   \\(N\\) visit counts
-   \\(Q\\) a q-table: [action-value]({{< relref "KBhaction_value_function.md" >}}) estimates
-   \\(d\\) depth (how many next states to look into)---more is more accurate but slower
-   \\(U\\) [value function estimate]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}); usually a [Rollout Policy]({{< relref "KBhrollout_with_lookahead.md#rollout-policy" >}}), estimate at some depth \\(d\\)
-   \\(c\\) exploration constant

After \\(n\\) simulation s from the starting state; we find the best action for our current state from our q-table.

Subroutine: `simulate(state, depth_remaining)`

-   If `depth_remaining=0`, simply return the [utility]({{< relref "KBhutility_theory.md" >}}) from the [value function]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}) estimate
-   For some `s, Actions` that we just got, if we haven't seen it, we just return the [value function]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}) estimate + initialize the N and Q tables
-   select an action via the [monte-carlo exploration](#monte-carlo-exploration) formula
-   sample a next state and current reward based on the action you gotten via a [generative model]({{< relref "KBhonline_planning.md#generative-model" >}})
-   `value = reward + discount*simulate(next_state, depth_remaining-1)`
-   add to the `N(state, action)` count
-   update the q table at (state, action): `Q[s,a] + = (value-Q[s,a])/N[s,a]` ("how much better is taking this action?" --- with later times taking this action more heavily discounted)


## monte-carlo exploration {#monte-carlo-exploration}

\begin{equation}
\max\_{a} Q(s,a) + c \sqrt{ \frac{\log \sum\_{a}N(s,a)}{N(s,a)}}
\end{equation}

where \\(c\\) is the exploration factor, and \\(N\\) is the next steps.

We want to encourage the exploration of things we haven't tried as much. Note that as \\(N(s,a)\\) is small, the right term is larger. So, if its also not too bad in terms of \\(Q\\), we will choose it.

If \\(N(s,a)\\) is zero, you return the action. You always want to try something at least once.
