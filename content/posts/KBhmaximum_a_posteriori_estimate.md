+++
title = "maximum a posteriori estimate"
author = ["Houjun Liu"]
draft = false
+++

[maximum a posteriori estimate]({{< relref "KBhmaximum_a_posteriori_estimate.md" >}}) is a [parameter learning]({{< relref "KBhparameter_learning.md" >}}) scheme that uses [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}}) and [Baysian inference]({{< relref "KBhbaysian_network.md" >}}) to get a distribution of the posterior of the parameter, and return the [argmax]({{< relref "KBhargmax.md" >}}) (i.e. the mode) of the [MAP]({{< relref "KBhmaximum_a_posteriori_estimate.md" >}}).

This differs from [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) because we are considering a _distribution_ of possible parameters:

\begin{equation}
p\qty (\theta \mid x\_1, \dots, x\_{n})
\end{equation}

---

Calculating a [MAP]({{< relref "KBhmaximum_a_posteriori_estimate.md" >}}) posterior, in general:

\begin{equation}
\theta\_{MAP} = \arg\max\_{\theta} P(\theta|x\_1, \dots, x\_{n}) = \arg\max\_{\theta} \frac{f(x\_1, \dots, x\_{n} | \theta) g(\theta)}{h(x\_1, \dots, x\_{n})}
\end{equation}

We assume that the data points are [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}), and the fact that the bottom of this is constant, we have:

\begin{equation}
\theta\_{MAP} = \arg\max\_{\theta} g(\theta) \prod\_{i=1}^{n} f(x\_{i}|\theta)
\end{equation}

Usually, we'd like to argmax the log:

\begin{equation}
\theta\_{MAP} = \arg\max\_{\theta} \qty(\log (g(\theta)) + \sum\_{i=1}^{n} \log(f(x\_{i}|\theta))  )
\end{equation}

where, \\(g\\) is the probability density of \\(\theta\\) happening given the ****prior**** belief, and \\(f\\) is the [likelyhood]({{< relref "KBhlikelyhood.md" >}}) of \\(x\_{i}\\) given parameter \\(\theta\\).

You will note this is just [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) function, plus the log-probability of the parameter prior.


## MAP for Bernoulli and Binomial \\(p\\) {#map-for-bernoulli-and-binomial-p}

To estimate \\(p\\), we use the [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}}):

The MODE of the beta, which is the [MAP]({{< relref "KBhmaximum_a_posteriori_estimate.md" >}}) of such a result:

\begin{equation}
\frac{\alpha -1 }{\alpha + \beta -2}
\end{equation}

now, for a Laplace posterior \\(Beta(2,2)\\), we have:

\begin{equation}
\frac{n+1}{m+n+2}
\end{equation}


## [MAP]({{< relref "KBhmaximum_a_posteriori_estimate.md" >}}) for Poisson and Exponential \\(\lambda\\) {#map--kbhmaximum-a-posteriori-estimate-dot-md--for-poisson-and-exponential-lambda}

We use the [gamma distribution](#map--kbhmaximum-a-posteriori-estimate-dot-md--for-poisson-and-exponential-lambda) as our prior

\begin{equation}
\Lambda \sim Gamma(\alpha, \beta)
\end{equation}

where \\(\alpha-1\\) is the prior event count, and \\(\beta\\) is the prior time periods.

{{< figure src="/ox-hugo/2023-11-15_16-16-40_screenshot.png" >}}

---

Let's say you have some data points \\(x\_1, ...x\_{k}\\), the posterior from from those resulting events:

\begin{equation}
Gamma(\alpha + n, \beta+k)
\end{equation}
