+++
title = "joint probability distribution"
author = ["Houjun Liu"]
draft = false
+++

for [random variable]({{< relref "KBhrandom_variables.md" >}})s \\(X, Y\\), the [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}}) is the [probability]({{< relref "KBhprobability.md" >}}) of both of them happening at once.

\begin{equation}
p(x,y)
\end{equation}

The most fundamental solution can be derived with a table where all complete [probabilities]({{< relref "KBhprobability.md" >}}) are listed. They are going to be too large to practically store.


## independent joint probability {#independent-joint-probability}

For any given variable, the probability of the joint of two separate events is their product.


## probability of the joint of a [Bayes Net]({{< relref "KBhbaysian_network.md" >}}) {#probability-of-the-joint-of-a-bayes-net--kbhbaysian-network-dot-md}

\begin{equation}
p(joint) = \prod\_{i \in BN}^{} p(x\_{i} | parents(x\_{i}))
\end{equation}
