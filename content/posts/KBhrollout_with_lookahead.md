+++
title = "Rollout with Lookahead"
author = ["Houjun Liu"]
draft = false
+++

Ingredients:

-   \\(\mathcal{P}\\) problem (states, transitions, etc.)
-   \\(\pi\\) a [Rollout Policy](#rollout-policy)
-   \\(d\\) depth (how many next states to look into)---more is more accurate but slower

Use the [greedy policy]({{< relref "KBhaction_value_function.md#value-function-policy" >}}) at each state by using the [Rollout](#rollout) procedure to estimate your [value function]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}) at any given state.


## Rollout {#rollout}

[Rollout](#rollout) works by hallucinating a trajectory and calculating the reward.

For some state, [Rollout Policy](#rollout-policy), and depth...

1.  let ret be 0; for i in range depth
    1.  take action following the [Rollout Policy](#rollout-policy)
    2.  obtain a sample of possible next state (weighted by the action you took, meaning an instantiation of \\(s' \sim T(\cdot | s,a)\\)) and reward \\(R(s,a)\\) from current state
    3.  ret += gamma^i \* r
2.  return ret


## Rollout Policy {#rollout-policy}

A [Rollout Policy](#rollout-policy) is a default [policy]({{< relref "KBhpolicy.md" >}}) used for lookahead. Usually this [policy]({{< relref "KBhpolicy.md" >}}) should be designed with domain knowledge; if not, we just use a uniform random next steps.
