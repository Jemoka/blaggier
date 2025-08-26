+++
title = "fairness"
author = ["Houjun Liu"]
draft = false
+++

## fairness through unawareness {#fairness-through-unawareness}

[procedural fairness](#fairness-through-unawareness), or [fairness through unawareness](#fairness-through-unawareness) is a [fairness]({{< relref "KBhprocedural_vs_distributive_fairness.md" >}}) system

If you have no idea about the demographics of [protected group]({{< relref "KBhprotected_group.md" >}})s, you will make better decisions.

1.  exclude sensitive features from datasets
2.  exclude proxies of [protected group]({{< relref "KBhprotected_group.md" >}})s

Problem: deeply correlated information (such as stuff that people like) is hard to get rid of---individual features does nothing with respect to predicting gender, but taken in groups it can recover [protected group]({{< relref "KBhprotected_group.md" >}}) information.


## fairness through awareness {#fairness-through-awareness}

we only care about the outcome


### fairness through parity {#fairness-through-parity}

that the prediction for different groups

\begin{equation}
P(G=1|D=0) = P(G=1|D=1)
\end{equation}


### fairness through calibration {#fairness-through-calibration}

We want the CORRECTNESS of the algorithm to be similar between [protected group]({{< relref "KBhprotected_group.md" >}})s.


#### disparate impact {#disparate-impact}

\begin{equation}
\frac{P(G=G^{\*}|D=0)}{P(G=G^{\*}|D=1)} \leq \epsilon
\end{equation}

where, by US law, [disparate impact](#disparate-impact) states \\(\epsilon\\) must be 0.2 or smaller for protected groups \\(D\\).

where \\(G^{\*}\\) is the correct prediction.
