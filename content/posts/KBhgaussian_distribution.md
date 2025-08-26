+++
title = "Gaussian distribution"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\mathcal{N}(x|\mu, \Sigma) = \qty(2\pi)^{-\frac{n}{2}} |\Sigma|^{-\frac{1}{2}} \exp \qty(-\frac{1}{2} \qty(x-\mu)^{\top} \Sigma^{-1}(x-\mu))
\end{equation}

where \\(\Sigma\\) is positive semidefinite


## conditioning Gaussian distributions {#conditioning-gaussian-distributions}

For distributions that follow [Gaussian distribution]({{< relref "KBhgaussian_distribution.md" >}})s, \\(a, b\\), we obtain:

\begin{align}
\mqty[a \\\ b] \sim \mathcal{N} \qty(\mqty[\mu\_{a}\\\ \mu\_{b}], \mqty(A & C \\\ C^{\top} & B))
\end{align}

meaning, each one can be marginalized as:

\begin{align}
a \sim \mathcal{N}(\mu\_{a}, A) \\\\
b \sim \mathcal{N}(\mu\_{b}, B) \\\\
\end{align}

Conditioning works too with those terms, for \\(a|b\\):

\begin{align}
\mu\_{a|b} &= \mu\_a + CB^{-1}\qty(b - \mu\_{b}) \\\\
\sigma\_{a|b} &= A - CB^{-1}C^{\top}
\end{align}


## standard normal density function {#standard-normal-density-function}

This is a function used to model many Gaussian distributions.

\begin{equation}
\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^{2}}{2}}
\end{equation}

This function is the [CDF]({{< relref "KBhprobability_distributions.md#cumulative-distribution-function" >}}) of the [standard normal.](#standard-normal)

[standard normal density function](#standard-normal-density-function) is also symmetric:

\begin{equation}
\phi(a) = 1- \phi(a)
\end{equation}


## Gaussian distribution {#gaussian-distribution}


### constituents {#constituents}

-   \\(\mu\\) the mean
-   \\(\sigma\\) the variance


### requirements {#requirements}

\begin{equation}
X \sim N(\mu, \sigma^{2})
\end{equation}

Its [PDF]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}) is:

\begin{equation}
\mathcal{N}(x \mid \mu, \sigma^{2}) = \frac{1}{\sigma\sqrt{2\pi}} e^{ \frac{-(x-u)^{2}}{2 \sigma^{2}}}
\end{equation}

where, \\(\phi\\) is the [standard normal density function](#standard-normal-density-function)

Its [CDF]({{< relref "KBhprobability_distributions.md#cumulative-distribution-function" >}}):

\begin{equation}
F(x) = \Phi \qty( \frac{x-\mu}{\sigma})
\end{equation}

We can't integrate \\(\Phi\\) further. So we leave it as a special function.

And its expectations:

\\(E(X) = \mu\\)

\\(Var(X) = \sigma^{2}\\)


### additional information {#additional-information}


#### linear transformations on Gaussian {#linear-transformations-on-gaussian}

For some:

\begin{equation}
Y = aX + b
\end{equation}

where \\(X \sim \mathcal{N}\\)

We will end up with another normal \\(Y \sim \mathcal{N}\\) such that:

-   mean: \\(au + b\\)
-   variance: \\(a^{2}\sigma^{2}\\)


#### standard normal {#standard-normal}

The standard normal is:

\begin{equation}
Z=\mathcal{N}(0,1)
\end{equation}

mean 0, variance 1. You can transform anything into a standard normal via the following linear transform:


#### transformation into [standard normal](#standard-normal) {#transformation-into-standard-normal--org8e66162}

\begin{equation}
X \sim \mathcal{N}(\mu, \sigma^{2})
\end{equation}

and, we can shift it into a standard normal with:

\begin{equation}
Z = \frac{X-\mu}{\sigma}
\end{equation}

therefore, we can derive what the [CDF]({{< relref "KBhprobability_distributions.md#cumulative-distribution-function" >}}) of the [normal distribution]({{< relref "KBhnormal_distribution.md" >}}) by shifting it back into the center:

\begin{equation}
P(X<x) \implies P\qty(\frac{X-\mu}{\theta} < \frac{x-\mu}{\theta}) \implies  P\qty(Z< \frac{x-\mu}{\theta}) = \Phi\qty(\frac{x-\mu}{\theta})
\end{equation}


#### normal maximizes entropy {#normal-maximizes-entropy}

no other [random variable]({{< relref "KBhrandom_variables.md" >}}) uses as little [parameter]({{< relref "KBhparameter.md" >}})s to convey as much information


#### approximation of [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}) with [normal distribution]({{< relref "KBhnormal_distribution.md" >}}) {#approximation-of-binomial-distribution--kbhbinomial-distribution-dot-md--with-normal-distribution--kbhnormal-distribution-dot-md}

You can use a [normal distribution]({{< relref "KBhnormal_distribution.md" >}}) to approximate [binomial approximation](#approximation-of-binomial-distribution--kbhbinomial-distribution-dot-md--with-normal-distribution--kbhnormal-distribution-dot-md). However, be aware of a [continuity correction]({{< relref "KBhcontinuity_correction.md" >}})


#### adding [Gaussian distribution]({{< relref "KBhgaussian_distribution.md" >}})s {#adding-gaussian-distribution--kbhgaussian-distribution-dot-md--s}

for [independent]({{< relref "KBhprobability.md#independence" >}}):

\begin{equation}
X+Y \sim \mathcal{N}(\mu\_{1}+\mu\_{2}, \sigma\_{1}^{2}+\sigma\_{2}^{2})
\end{equation}
