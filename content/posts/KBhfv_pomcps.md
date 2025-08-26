+++
title = "FV-POMCPs"
author = ["Houjun Liu"]
draft = false
+++

Main problem: joint actions and observations are exponential by the number of agents.

Solution: **Smaple-based online planning** for multiagent systems. We do this with the factored-value [POMCP]({{< relref "KBhpomcp.md" >}}).

-   **factored statistics**: reduces the number of joint actions (through action selection statistics)
-   **factored trees**: reduces the number of histories


## Multiagent Definition {#multiagent-definition}

-   \\(I\\) set of agents
-   \\(S\\) set of states
-   \\(A\_{i}\\) set of states for each agent \\(i\\)
-   \\(T\\) state transitions
-   \\(R\\) reward function
-   \\(Z\_{i}\\) joint observations for each agents
-   \\(O\\) set of observations


## Coordination Graphs {#coordination-graphs}

you can use [sum-product elimination]({{< relref "KBhinference.md#sum-product-elimination" >}}) to shorten the [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) of the agent [Coordination Graphs](#coordination-graphs) (which is how agents influnece each other).


## Mixture of Experts {#mixture-of-experts}

Directly search for the best joint actions; computed by [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) of the total value.
