+++
title = "kernel smoothing"
author = ["Houjun Liu"]
draft = false
+++

[kernel smoothing]({{< relref "KBhkernel_smoothing.md" >}}) is a way of smoothing a [utility]({{< relref "KBhutility_theory.md" >}}) function over [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) state space despite only sampling a discrete set of the states.

\begin{equation}
U\_{\theta}(s) = \theta^{T} \beta(s)
\end{equation}

We multiply a vector \\(\theta\_{j}\\), the [utility]({{< relref "KBhutility_theory.md" >}}) of being in each state \\(s\_{j}\\) a basis function, which smears, generated for each \\(i\\) of known discrete state we have:

\begin{equation}
\beta\_{i}(s) = \frac{k(s, s\_{i})}{\sum\_{j}^{} k(s, s\_{j})}
\end{equation}

where, \\(k\\) is the [kernel function]({{< relref "KBhkernel_smoothing.md" >}}), a function inversely proportional to how close the two states are:

****k(s,sj)**** is a normalization factor and doesn't need to be computed at every call.

\begin{equation}
k(s, s') = \max \qty(d(s,s'), \epsilon)^{-1}
\end{equation}

where \\(d\\) is a measure of distance. We clip this function at \\(\epsilon\\) to prevent inverting \\(0\\).


## [gaussian]({{< relref "KBhgaussian_distribution.md" >}}) kernel {#gaussian--kbhgaussian-distribution-dot-md--kernel}

There is an alternate state smoothing function which is called [gaussian kernel](#gaussian--kbhgaussian-distribution-dot-md--kernel), which allows you to control the degree of smoothing between two states through a parameter \\(\sigma\\):

\begin{equation}
k(s,s') = \exp \qty( - \frac{d(s,s')^{2}}{2 \sigma^{2}})
\end{equation}
