+++
title = "central limit theorem"
author = ["Houjun Liu"]
draft = false
+++

"If sample size is large and [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}), the sampling distribution is normal. The larger \\(N\\) is, the more normal the resulting shape is."

We can use the [central limit theorem]({{< relref "KBhcentral_limit_theorem.md" >}}) to estimate the sum of [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) [random variable]({{< relref "KBhrandom_variables.md" >}})s:

Let there be \\(n\\) [random variable]({{< relref "KBhrandom_variables.md" >}})s named \\(X\_{j}\\), they are [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}), and they have \\(E[x] = \mu\\), and \\(Var(x) = \sigma^{2}\\)

We have that:

\begin{equation}
    \sum\_{i=1}^{N} X\_{n} \sim N(n\mu, n \sigma^{2}), \text{as}\ n \to \infty
\end{equation}

That, as long as you normalize a random variable and have enough of it, you get closer and closer to the normal distribution.

Notably, for the [central limit theorem]({{< relref "KBhcentral_limit_theorem.md" >}}) to hold, the variance has to be finite (that the results vary in a certain finite value \\(\sigma\\). With that \\(\sigma\\) value, we can see above that the [central limit theorem]({{< relref "KBhcentral_limit_theorem.md" >}}) will eventually converge to the normal. THis is useful for the [Random Walk Hypothesis]({{< relref "KBhrandom_walk.md" >}}).

********REMEMBER THAT IF YOU ARE APPROXIMATIGN DISCRETE THINGS YOU NEED [continuity correction]({{< relref "KBhcontinuity_correction.md" >}})!!!********
