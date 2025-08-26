+++
title = "MaxQ"
author = ["Houjun Liu"]
draft = false
+++

## Two Abstractions {#two-abstractions}

-   "temporal abstractions": making decisions without consideration / abstracting away time ([MDP]({{< relref "KBhmarkov_decision_process.md" >}}))
-   "state abstractions": making decisions about groups of states at once


## Graph {#graph}

[MaxQ]({{< relref "KBhmaxq.md" >}}) formulates a policy as a graph, which formulates a set of \\(n\\) policies

{{< figure src="/ox-hugo/2024-02-13_09-50-20_screenshot.png" >}}


### Max Node {#max-node}

This is a "policy node", connected to a series of \\(Q\\) nodes from which it takes the max and propegate down. If we are at a leaf max-node, the actual action is taken and control is passed back t to the top of the graph


### Q Node {#q-node}

each node computes \\(Q(S,A)\\) for a value at that action


## Hierachical Value Function {#hierachical-value-function}

{{< figure src="/ox-hugo/2024-02-13_09-51-27_screenshot.png" >}}

\begin{equation}
Q(s,a) = V\_{a}(s) + C\_{i}(s,a)
\end{equation}

the value function of the root node is the value obtained over all nodes in the graph

where:

\begin{equation}
C\_{i}(s,a) = \sum\_{s'}^{} P(s'|s,a) V(s')
\end{equation}


## Learning MaxQ {#learning-maxq}

1.  maintain two tables \\(C\_{i}\\) and \\(\tilde{C}\_{i}(s,a)\\) (which is a special completion function which corresponds to a special reward \\(\tilde{R}\\) which prevents the model from doing egregious ending actions)
2.  choose \\(a\\) according to exploration strategy
3.  execute \\(a\\), observe \\(s'\\), and compute \\(R(s'|s,a)\\)

Then, update:

{{< figure src="/ox-hugo/2024-02-13_09-54-38_screenshot.png" >}}
