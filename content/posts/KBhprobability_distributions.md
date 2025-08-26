+++
title = "probability distribution"
author = ["Houjun Liu"]
draft = false
+++

[probability distributions]({{< relref "KBhprobability_distributions.md" >}}) "assigns probability to outcomes"

\\(X\\) follows distribution \\(D\\). \\(X\\) is a "\\(D\\) random variable", where \\(D\\) is some distribution ([normal]({{< relref "KBhaxler_7_a.md#normal" >}}), gaussian, etc.)

syntax: \\(X \sim D\\).

Each distribution has three properties:

-   variables (what is being modeled)
-   values (what values can they take on)
-   parameters (how many degrees of freedom do we have)


## Types of Distribution {#types-of-distribution}


### [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}}) {#discrete-distribution--kbhdiscrete-distribution-dot-md}

-   described by [PMF]({{< relref "KBhprobability_mass_function.md" >}})


### [continuous distribution]({{< relref "KBhcontinuous_distribution.md" >}}) {#continuous-distribution--kbhcontinuous-distribution-dot-md}

-   described by [PDF]({{< relref "KBhprobability_density_function.md" >}})


## parametrized distribution {#parametrized-distribution}

We often represent probability distribution using a set of [parameter]({{< relref "KBhparameter.md" >}})s \\(\theta\_{j}\\).  For instance, a [normal distribution]({{< relref "KBhnormal_distribution.md" >}}) is given by \\(\mu\\) and \\(\sigma\\), and a [PMF]({{< relref "KBhprobability_mass_function.md" >}}) is by the probability mass for each.


## Methods of Compressing the Parameters of a Distribution {#methods-of-compressing-the-parameters-of-a-distribution}

So, for instance, for a binary distribution with \\(n\\) variables which we know nothing about, we have:

\begin{equation}
2^{n} - 1
\end{equation}

parameters (\\(2^{n}\\) different possibilities of combinations, and \\(1\\) non-free variables to ensure that the distribution add up)


### assuming independence {#assuming-independence}

HOWEVER, if the variables were [independent]({{< relref "KBhprobability.md#independence" >}}), this becomes much easier. Because the variables are independent, we can claim that:

\begin{equation}
p(x\_{1\dots n}) =  \prod\_{i}^{} p(x\_{i))
\end{equation}


### decision tree {#decision-tree}

For instance, you can have a decision tree which you selectively ignore some combinations.

{{< figure src="/ox-hugo/2023-09-28_10-13-07_screenshot.png" >}}

In this case, we ignored \\(z\\) if both \\(x\\) and \\(y\\) are \\(0\\).


### Baysian networks {#baysian-networks}

see [Baysian Network]({{< relref "KBhbaysian_network.md" >}})


## types of probability distributions {#types-of-probability-distributions}

-   [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}})
-   [continuous distribution]({{< relref "KBhcontinuous_distribution.md" >}})
-   [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}})


## distribution of note {#distribution-of-note}

-   [uniform distribution](#uniform-distribution)
-   gaussian distributions
    -   [Gaussian distribution]({{< relref "KBhgaussian_distribution.md" >}})
    -   [Truncated Gaussian distribution](#truncated-gaussian-distribution)
    -


### uniform distribution {#uniform-distribution}

\begin{equation}
X \sim Uni(\alpha, \beta)
\end{equation}

\begin{equation}
f(x) = \begin{cases}
\frac{1}{\beta -\alpha }, 0\leq x \leq 10 \\\0
\end{cases}
\end{equation}

\begin{equation}
E[x] = \frac{1}{2}(\alpha +\beta)
\end{equation}

\begin{equation}
Var(X) = \frac{1}{12}(\beta -\alpha )^{2}
\end{equation}


### Gaussian Things {#gaussian-things}


#### Truncated Gaussian distribution {#truncated-gaussian-distribution}

Sometimes, we don't want to use a [Gaussian distribution]({{< relref "KBhgaussian_distribution.md" >}}) for values above or below a threshold (say if they are physically impossible). In those cases, we have some:

\begin{equation}
X \sim N(\mu, \sigma^{2}, a, b)
\end{equation}

bounded within the interval of \\((a,b)\\). The [PDF]({{< relref "KBhprobability_density_function.md" >}}) of this function is given by:

\begin{equation}
N(\mu, \sigma^{2}, a, b) = \frac{\frac{1}{\sigma} \phi \qty(\frac{x-\mu }{\sigma })}{\Phi \qty(\frac{b-\mu }{\sigma }) - \Phi \qty(\frac{a-\mu}{\sigma})}
\end{equation}

where:

\begin{equation}
\Phi = \int\_{-\infty}^{x} \phi (x') \dd{x'}
\end{equation}

and where \\(\phi\\) is the [standard normal density function]({{< relref "KBhgaussian_distribution.md#standard-normal-density-function" >}}).


## three ways of analysis {#three-ways-of-analysis}


### cumulative distribution function {#cumulative-distribution-function}

What is the probability that a [random variable]({{< relref "KBhrandom_variables.md" >}}) takes on value less tha

\begin{equation}
cdf\_{x}(x) = P(X<x) = \int\_{-\infty}^{x} p(x') dx'
\end{equation}

sometimes written as:

\begin{equation}
F(x) = P(X < x)
\end{equation}

Recall that, with


### quantile function {#quantile-function}

\begin{equation}
\text{quantile}\_{X}(\alpha)
\end{equation}

is the value \\(x\\) such that:

\begin{equation}
P(X \leq x) = \alpha
\end{equation}

That is, the [quantile function](#quantile-function) returns the minimum value of \\(x\\) at which point a certain [cumulative distribution](#cumulative-distribution-function) value desired is achieved.


### adding [uniform distribution](#uniform-distribution) {#adding-uniform-distribution--org6d62aae}

for \\(1 < a < 2\\)

\begin{equation}
f(X+Y = a) =
\begin{cases}
a, 0 < a < 1, \\\\
2-a, 1 < a < 2, \\\\
0, otherwise
\end{cases}
\end{equation}
