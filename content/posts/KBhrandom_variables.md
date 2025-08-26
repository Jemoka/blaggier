+++
title = "random variable"
author = ["Houjun Liu"]
draft = false
+++

A [random variable]({{< relref "KBhrandom_variables.md" >}}) is a quantity that can take on different values, whereby there is a separate probability associated with each value:

-   **discrete**: finite number of values
-   **continuous**: infinitely many possible values


## [probability mass function]({{< relref "KBhprobability_mass_function.md" >}}) {#probability-mass-function--kbhprobability-mass-function-dot-md}

A discrete random variable is encoded as a [probability mass function]({{< relref "KBhprobability_mass_function.md" >}})


## [probability density function]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}) {#probability-density-function--kbhprobability-distributions-dot-md}

A continuous [random variable]({{< relref "KBhrandom_variables.md" >}}) is represented as a [probability density function]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}).


## summary statistics {#summary-statistics}

-   [probability mass function]({{< relref "KBhprobability_mass_function.md" >}}) is a description for the random variable: and [random variable]({{< relref "KBhrandom_variables.md" >}})s are usually communicated via [probability mass function]({{< relref "KBhprobability_mass_function.md" >}})s
-   [expected value]({{< relref "KBhexpectation.md" >}})


## adding random variables {#adding-random-variables}

"what's the probability of \\(X + Y = n\\) with [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) \\(X\\) and \\(Y\\)?"
"what's the probability of two independent samples from the same exact distribution adding up to \\(n\\)?"

\begin{equation}
\sum\_{i=-\infty}^{\infty} P(X=i, Y=n-i)
\end{equation}

or integrals and [PDF]({{< relref "KBhprobability_distributions.md#probability-density-function" >}})s, as appropriate for [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) cases

for every single outcome, we want to create every possible operation which causes the two variables to sum to \\(n\\).

We can use [convolution](#adding-random-variables) to figure out every combination of assignments to random variables which add to a value, and sum their probabilities together.

-   [adding binomial distribution]({{< relref "KBhbinomial_distribution.md#adding-id-6ef4a641-135c-45f5-9c71-efd1fe34166c-binomial-distribution" >}})
-   [adding Gaussian distributions]({{< relref "KBhgaussian_distribution.md#adding-id-8194b001-e4a1-43c9-9409-cd07bf1f00d4-gaussian-distribution-s" >}})
-   [adding poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md#adding-id-58a7600a-5169-4473-8ddc-f286534fc1f4-poisson-distribution" >}})

If you add a bunch of [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) things together.... [central limit theorem]({{< relref "KBhcentral_limit_theorem.md" >}})


## averaging random variables {#averaging-random-variables}

[adding random variables](#adding-random-variables) + [linear transformers on Gaussian]({{< relref "KBhgaussian_distribution.md#linear-transformations-on-gaussian" >}})

You end up with:

\begin{equation}
\mathcal{N}\qty(\mu, \frac{1}{n} \sigma^{2})
\end{equation}

you note: as you sum together many things that is [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}), the average is pretty the same; but the [variance]({{< relref "KBhvariance.md" >}}) gets smaller as you add more.


## maxing random variables {#maxing-random-variables}

Gumbel distribution: fisher tripplett gedembo theorem???


## sampling statistics {#sampling-statistics}

We assume that there's some underlying distribution with some true mean \\(\mu\\) and true variance \\(\sigma^{2}\\). We would like to model it with some confidence.

Consider a series of measured samples \\(x\_1, ..., x\_{n}\\), each being an instantiation of a [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}) [random variable]({{< relref "KBhrandom_variables.md" >}}) drawn from the underlying distribution each being \\(X\_1, ..., X\_{n}\\).


### sample mean {#sample-mean}

Let us estimate the true population mean... by creating a [random variable]({{< relref "KBhrandom_variables.md" >}}) representing the the averaging \\(n\\) measured [random variable]({{< relref "KBhrandom_variables.md" >}})s representing the observations:

\begin{equation}
\bar{X} = \frac{1}{N} \sum\_{i=1}^{n} X\_{i}
\end{equation}

we can do this because we really would like to know \\(\mathbb{E}[\bar{X}] = \mathbb{E}[\frac{1}{N} \sum\_{i=1}^{n} X\_i] = \frac{1}{N}\sum\_{i=1}^{n} \mathbb{E}[X\_{i}] = \frac{1}{N} N \mu = \mu\\) and so as long as each of the underlying variables have the same expected mean (they do because [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}})) drawn, we can use the [sample mean](#sample-mean) to estimate the population mean.


### sample variance {#sample-variance}

We can't just calculate the [sample variance](#sample-variance) with the variance of the sample. This is because the [sample mean](#sample-mean) will be by definition by closer to each of the sampled points than the actual value. So we correct for it. This is a [random variable]({{< relref "KBhrandom_variables.md" >}}) too:

\begin{equation}
S^{2} = \frac{1}{n-1} \sum\_{i=1}^{N} (X\_{i} - \bar{X})^{2}
\end{equation}


### standard error of the mean {#standard-error-of-the-mean}

\begin{equation}
Var(\bar{X}) = \frac{S^{2}}{n}
\end{equation}

this is the **ERROR OF the mean** given what you measured because of the central limit theorem
