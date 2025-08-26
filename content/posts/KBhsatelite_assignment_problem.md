+++
title = "Satelite Assignment Problem"
author = ["Houjun Liu"]
draft = false
+++

Goal: for a bunch of satellite with

\begin{equation}
\alpha \qty(\beta) = \text{argmax}\_{x \in X}\sum\_{i=1}^{n} \sum\_{j=1}^{m} \beta\_{ij}x\_{ij}
\end{equation}

where there's benefit matrix of Agent assigned to Task, \\(\beta\\). This is greedy and can be soled with [Hungarian Method]({{< relref "KBhhungarian_method.md" >}}). But, this becomes hard when satellites MOVE and becomes sequential! and stuff starts running out of time: it becomes sequential with dependenices of past to future.

Solution: [Multi-Agent RL]({{< relref "KBhmulti_agent_rl.md" >}}). But, vanilla solution will conflict because the dominants strategy maybe the same for each agent.

Solution': to fix this, we use the learned \\(Q\\) values as the benefit matrix \\(\beta\\) at each time stamp, and then apply the equation above with [an Method]({{< relref "KBhhungarian_method.md" >}}) to solve each point.
