+++
title = "generative model"
author = ["Houjun Liu"]
draft = false
+++

Its like a [transforming distributions]({{< relref "KBhmodel_class.md#transforming-distributions" >}}) procedure, but your \\(f\\) is not constrained to be differentiable. So you can still sample from it.

---

we perform a random sample of possible next state (weighted by the action you took, meaning an instantiation of \\(s' \sim T(\cdot | s,a)\\)) and reward \\(R(s,a)\\) from current state
