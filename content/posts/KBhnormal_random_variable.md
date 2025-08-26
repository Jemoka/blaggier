+++
title = "normal random variable"
author = ["Houjun Liu"]
draft = false
+++

[normal random variable]({{< relref "KBhnormal_random_variable.md" >}}) is a [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) [random variable]({{< relref "KBhrandom_variables.md" >}}) that allows you to manually specify the expectation and variance


## constituents {#constituents}

-   \\(\mu\\) the mean
-   \\(\sigma\\) the variance


## requirements {#requirements}

\begin{equation}
X \sim \mathcal{N}(\mu, \sigma^{2})
\end{equation}

[PDF]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}):

\begin{equation}
f(x) = \frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{(x-\mu)^{2}}{2 \sigma^{2}}}
\end{equation}


## additional information {#additional-information}


### normal maximizes entropy {#normal-maximizes-entropy}

no other [random variable]({{< relref "KBhrandom_variables.md" >}}) uses as little [parameter]({{< relref "KBhparameter.md" >}})s to convey as much information
