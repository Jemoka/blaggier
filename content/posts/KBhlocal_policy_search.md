+++
title = "Local Policy Search"
author = ["Houjun Liu"]
draft = false
+++

We begin with a policy parameterized on anything you'd like with random seed weights. Then,

1.  We sample a local set of [parameter]({{< relref "KBhparameter.md" >}})s, one pertubation \\(\pm \alpha\\) per direction in the parameter vector (for instance, for a parameter in 4-space, up, down, left, right in latent space), and use those new parameters to seed a policy.
2.  Check each policy for its [utility]({{< relref "KBhutility_theory.md" >}}) via [monte-carlo policy evaluation]({{< relref "KBhpolicy_evaluation.md#monte-carlo-policy-evaluation" >}})
3.  If any of the adjacent points are better, we move there
4.  If none of the adjacent points are better, we set \\(\alpha = 0.5 \alpha\\) (of the up/down/left/right) and try again

We continue until \\(\alpha\\) drops below some \\(\epsilon\\).

Note: if we have billions of parameters, this method will be not that feasible because we have to calculate the [Roll-out utility]({{< relref "KBhpolicy_evaluation.md#roll-out-utility" >}}) so many many many times.
