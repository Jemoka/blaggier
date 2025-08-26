+++
title = "linear gaussian model"
author = ["Houjun Liu"]
draft = false
+++

Suppose you have continuous [random variable]({{< relref "KBhrandom_variables.md" >}})s \\(X,Y\\), you can use one to seed the value and the other to change the [Gaussian distribution]({{< relref "KBhprobability_distributions.md#gaussian-distribution" >}}):

\begin{equation}
p(x\mid y) = \mathcal{N}(x \mid my + b, \sigma^{2})
\end{equation}
