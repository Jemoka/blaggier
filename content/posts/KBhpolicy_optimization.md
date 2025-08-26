+++
title = "Policy Optimization"
author = ["Houjun Liu"]
draft = false
+++

[Policy Optimization]({{< relref "KBhpolicy_optimization.md" >}}) deals with algorithms that, unlike [value iteration]({{< relref "KBhvalue_iteration.md" >}})/[policy iteration]({{< relref "KBhpolicy_iteration.md" >}})/[online planning]({{< relref "KBhonline_planning.md" >}}) which uses a surrogate (like [value function]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}) or some future discounted reward) to calculate a [policy]({{< relref "KBhpolicy.md" >}}), directly optimizes against policy parameters \\(\theta\\) for a policy \\(\pi\_{\theta}\\).

-   [Local Policy Search]({{< relref "KBhlocal_policy_search.md" >}}) (aka [Hooke-Jeeves Policy Search]({{< relref "KBhlocal_policy_search.md" >}}))
-   [Genetic Policy Search]({{< relref "KBhgenetic_policy_search.md" >}})
-   [Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}})
-   [Policy Gradient]({{< relref "KBhpolicy_gradient.md" >}}), [Regression Gradient]({{< relref "KBhpolicy_gradient.md#linear-regression-gradient-estimate" >}}) and [Likelyhood Ratio Gradient]({{< relref "KBhpolicy_gradient.md#likelyhood-ratio-id-2765155a-ba00-4014-b2a7-cf2f4f184178-gradient" >}})
-   [Reward-to-Go]({{< relref "KBhpolicy_gradient.md#reward-to-go" >}})
