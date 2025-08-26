+++
title = "Factored MDPs"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

Multiple agents need to collaborate to achieve common goal.

**Joint Utility Maximization**: maximize the joint utility between various agents.


## Possible Approaches {#possible-approaches}

-   **Using a traditional MDP**: an MDP considers "action" as a joint action between all agents (exponential blow up because the agent actions multiply)
-   **Local Optimization**: share rewards/values among agents
-   **Local Optimization**: search and maximize joint utility explicitly (no need to model the entire action space)

Problems with single Reward Sharing:


### Credit Assignment Problem {#credit-assignment-problem}

In collective reward situations, determining which action out of the cohort actually contributed to the award is hard.


### Free Ride Problem {#free-ride-problem}

Agents can benefit from reward without actually doing anything by being carried.


## [Factored MDPs]({{< relref "KBhfactored_mdps.md" >}}) Representation {#factored-mdps--kbhfactored-mdps-dot-md--representation}

-   Using factored linear value function to approximate the joint value function
-   Using linear programming to avoid exponential blow up


### Background {#background}


#### Coordination Graphs {#coordination-graphs}

-   modeling each agent as a node
-   each edge is a dependency


#### factored [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) {#factored-markov-decision-process--kbhmarkov-decision-process-dot-md}

-   MDPs are not good at large problems
-   factor the state and action spaces as a random variable factors, etc.


### action selection {#action-selection}

-   each agent maintains a local \\(Q\\) function indicating its population
-   the \\(Q\\) function of each agent maybe influenced by other agents:
    -   the coordination graph of the agent is used to calculate contribution

We optimize by using **one agent at a time**: we optimize one agent, then
