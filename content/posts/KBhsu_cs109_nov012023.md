+++
title = "SU-CS109 NOV012023"
author = ["Houjun Liu"]
draft = false
+++

What if you don't know about a probability of success?

[Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}}) time!!!


## [Multi-Arm Bandit]({{< relref "KBhexploration_and_exploitation.md" >}}) {#multi-arm-bandit--kbhexploration-and-exploitation-dot-md}

See [Multi-Arm Bandit]({{< relref "KBhexploration_and_exploitation.md" >}})

Strategies:

-   [upper confidence bound]({{< relref "KBhdirected_exploration.md#quantile-exploration" >}}): take the action with theh highest n-tn-thonfidence bound
-   [Posterior Sampling]({{< relref "KBhdirected_exploration.md#posterior-sampling" >}}): take a sample from each [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}})s distribution; take the action that has a higher probability of success based on their r
