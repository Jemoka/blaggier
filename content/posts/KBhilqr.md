+++
title = "Belief iLQR"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

-   Imperfect sensors in robot control: **partial observations**
-   Manipulators face tradeoff between **sensing** + **acting**

[curse of dimensionality]({{< relref "KBhcurse_of_dimensionality.md" >}}) and curse of history.


## Belief-Space Planning {#belief-space-planning}

Perhaps we should plan over all possible distributions of state space, making a [belief-state MDP]({{< relref "KBhbelief_state_mdp.md" >}}).

But: this is a **nonlinear**, **stochastic** dynamic. In fact: there maybe stochastic events that affects dynamics.

Big problem:

-   dim([belief]({{< relref "KBhbelief.md" >}})) &gt;&gt; dim([state]({{< relref "KBhstate_uncertainty.md" >}}))
-   dim([belief]({{< relref "KBhbelief.md" >}})) &gt;&gt; dim([action]({{< relref "KBhaction_value_function.md" >}}))


## [Belief iLQR]({{< relref "KBhilqr.md" >}}) {#belief-ilqr--kbhilqr-dot-md}

"determinize and replan": simplify the dynamics at each step, plan, take action, and replan

1.  tracks belief via observations
2.  simplifies belief state dynamics based on linear [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}})

When the dynamics is linear, you can use [Linear-Quadratic Regulator]({{< relref "KBhlinear_quadratic_regulator.md" >}}) to solve. This results in a worse policy but will give you a policy.


### Previous Work {#previous-work}

-   "just solve most-likely state": doesn't take action to explore and understand the state.
-   "belief roadmap": not really planning in the belief space itself


### Approach {#approach}


#### Belief Update {#belief-update}

We use Baysian updates for the state probably updates:

\begin{equation}
P(s\_{t+1}) = \eta P(o\_{t+1}|s\_{t+1}) \int\_{x} p(\_{t+1}|x, a\_{t}) P(s)
\end{equation}

and then the actual beliefs are updated with [Extended Kalman Filter]({{< relref "KBhfilters.md#extended" >}}).

Importantly, the [Extended Kalman Filter]({{< relref "KBhfilters.md#extended" >}}) usually requires us to take an expectation of each observation O over all O; instead, we assume that the future states are uniform linearly distributed.


#### Belief Update Cost {#belief-update-cost}

Ideally, we want to lower [covariance]({{< relref "KBhcovariance.md" >}}) of the [belief]({{< relref "KBhbelief.md" >}}) vectors in order to be more confident.

{{< figure src="/ox-hugo/2024-02-20_09-32-34_screenshot.png" >}}

1.  first term: reduce large trajectories (verify)
2.  second: stabilization


#### Replanning Strategy {#replanning-strategy}

{{< figure src="/ox-hugo/2024-02-20_09-35-47_screenshot.png" >}}

```python
while b not at goal:
    # replan at where we are at now
    (b, a, mean_b) = create_initial_plan(b);

    for depth d:
        a_t = solve_lqr_for_plan_at_time(b, a, mean_b)
        o = environment.step(a_t)
        b = extended_kalman(b, a, o)

        if mean(b) > max_allowed_belief_uncertainty:
            break
```
