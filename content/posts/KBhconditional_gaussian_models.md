+++
title = "conditional Gaussian model"
author = ["Houjun Liu"]
draft = false
+++

Say you have one continuous variable \\(X\\), and one discrete variable \\(Y\\), and you desire to express the probability of \\(X\\) conditioned upon \\(Y\\) using a [gaussian model]({{< relref "KBhprobability_distributions.md#gaussian-distribution" >}}):

\begin{equation}
p(x|y) = \begin{cases}
\mathcal{N}(x \mid \mu\_{1}, \sigma\_{1}^{2}), y^{1} \\\\
\dots \\\\
\mathcal{N}(x \mid \mu\_{1}, \sigma\_{1}^{2}), y^{n} \\\\
\end{cases}
\end{equation}
