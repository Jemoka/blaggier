+++
title = "decision making"
author = ["Houjun Liu"]
draft = false
+++

## Key components {#key-components}

-   Task/Objective ("Automated Driving to reach destination [here]")
-   Resources (state) ("sensors, fuel, etc.")
-   Uncertainties ("What in the world is happening")
-   Actions ("turn left")

In one line: an [agent]({{< relref "KBhagent.md" >}}) makes decisions via the balance of **observation** with **[uncertainty]({{< relref "KBhuncertainty.md" >}})**. This is called the [observe-act cycle]({{< relref "KBhobserve_act_cycle.md" >}}).

See also [connectionism]({{< relref "KBhconnectionism.md" >}})


## Applications {#applications}

-   Stock shelving
-   Automated driving
-   Space missions
-   Sports
-   Congestion modeling
-   Online dating
-   Traffic light control


## [decision making]({{< relref "KBhdecision_making.md" >}}) methods {#decision-making--kbhdecision-making-dot-md--methods}

-   [explicit programming]({{< relref "KBhexplicit_programming.md" >}}): "just code it up" --- try this first if you are building something, which should establish a **baseline**: guess all possible states, and hard code strategies for all of them
-   [supervised learning]({{< relref "KBhsupervised_learning.md" >}}): manually solve representative states, hard code strategies for them, make model interpolate between them
-   [optimization]({{< relref "KBhoptimization.md" >}}): create optimization objective connected to a model of the environment, optimize that objective
-   [planning]({{< relref "KBhplanning.md" >}}): using model of the environment directly to predict best moves
-   [reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}): make agent interact with environment directly, and optimize its score of success in the environment without a model

| Method                                                                  | Model Visible?              | Strategy Hard-Coded?     |
|-------------------------------------------------------------------------|-----------------------------|--------------------------|
| [explicit programming]({{< relref "KBhexplicit_programming.md" >}})     | yes, all states fully known | yes                      |
| [supervised learning]({{< relref "KBhsupervised_learning.md" >}})       | no, only a sample of it     | yes, only a sample of it |
| [optimization]({{< relref "KBhoptimization.md" >}})                     | no, except reward           | no                       |
| [planning]({{< relref "KBhplanning.md" >}})                             | yes                         | no                       |
| [reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}) |                             |                          |


## history {#history}

see [decision making history]({{< relref "KBhdecision_making_history.md" >}})
