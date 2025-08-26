+++
title = "Hindsight Optimization"
author = ["Houjun Liu"]
draft = false
+++

If we are tele-operating a robot, we ideally want to minimize **cost**. We want to estimate a user's **goal** via user inputs. Predict the most likely goal + assist for it.

"find a cost function for which user input \\(u\\) is optimal".

-   system does not know the goal
-   the user may not change their goal on a whim


## [Hindsight Optimization]({{< relref "KBhhindsight_optimization.md" >}}) {#hindsight-optimization--kbhhindsight-optimization-dot-md}

To solve this, we use [QMDP]({{< relref "KBhqmdp.md" >}}): "select the most optimal actions to estimating cost-to-go assuming full observability".

\begin{equation}
Q(b,a,u) = \sum\_{g}^{} b(g) Q\_{g}(x,a,u)
\end{equation}


## Result {#result}

users felt less in control with [Hindsight Optimization]({{< relref "KBhhindsight_optimization.md" >}}), despite reaching the goal faster with this policy.

Challenging the results between "task completion" vs. "user satisfaction".
