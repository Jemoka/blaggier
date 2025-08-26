+++
title = "policy iteration"
author = ["Houjun Liu"]
draft = false
+++

[policy iteration]({{< relref "KBhpolicy_iteration.md" >}}) will allow us to get an [optimal policy]({{< relref "KBhpolicy.md#optimal-policy" >}}).

1.  start with some initial [policy]({{< relref "KBhpolicy.md" >}}) \\(\pi\\) (this scheme converges to an [optimal policy]({{< relref "KBhpolicy.md#optimal-policy" >}}) regardless of where you start)
2.  [solve for \\(U^{\pi}\\)]({{< relref "KBhpolicy_evaluation.md#solving-for-the-utility-of-a-policy" >}})
3.  create a new policy \\(\pi'\\) by creating a [value-function policy]({{< relref "KBhaction_value_function.md#value-function-policy" >}}) on \\(U^{\pi}\\)
4.  repeat 2-3

Since there are a finite policies, this will eventually converge.

At each point, the utility of the policy increases.

At each step, the utility of the resulting policy will necessarily be larger or equal to than the previous one as we are greedily choosing "better" (or equivalent) actions as measured by the utility of the previous policy.
