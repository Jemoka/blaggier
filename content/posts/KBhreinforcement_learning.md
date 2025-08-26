+++
title = "reinforcement learning"
author = ["Houjun Liu"]
draft = false
+++

[reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}) is a [decision making method]({{< relref "KBhdecision_making.md#id-9075c44f-4b26-4f5a-9236-bc7a5c10f4ee-decision-making-methods" >}}) with no known model of the environment at all.

1.  [agent]({{< relref "KBhagent.md" >}}) interacts with environment directly
2.  designer provide a performance measure of the agent in the environment
3.  [agent]({{< relref "KBhagent.md" >}}) tries to optimize the [decision making]({{< relref "KBhdecision_making.md" >}}) algorithm to maximise the performance measure

Note: [agent]({{< relref "KBhagent.md" >}})'s own choice of action, in this case, actually influences how the environment works (and what futures the agent sees). So the agent's actions will influence the environment outcomes


## contrast v. explicit programming v. planning {#contrast-v-dot-explicit-programming-v-dot-planning}

Note 2: **look ma, no model!** unlike [optimization]({{< relref "KBhoptimization.md" >}}), [reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}) tasks does not require an optimization objective connected to a model of the environment where we know what knobs to turn. Instead, the objective is a literal performance of how the [agent]({{< relref "KBhagent.md" >}}) is doing in the actual environment.


## contents {#contents}

-   [model-based reinforcement learning]({{< relref "KBhmodel_based_reinforcement_learning.md" >}})
-   [model-free reinforcement learning]({{< relref "KBhmodel_free_reinforcement_learning.md" >}})
