+++
title = "SU-CS361 MAY072024"
author = ["Houjun Liu"]
draft = false
+++

## Generalization Error {#generalization-error}

\begin{equation}
\epsilon\_{gen} = \mathbb{E}\_{x \sim \mathcal{X}} \qty[\qty(f(x) - \hat{f}(x))^{2}]
\end{equation}

we usually instead of compute it by averaging specific points we measured.


## Probabilistic Surrogate Models {#probabilistic-surrogate-models}


### Gaussian Process {#gaussian-process}

A [Gaussian Process](#gaussian-process) is a [Gaussian distribution]({{< relref "KBhgaussian_distribution.md" >}}) over [function]({{< relref "KBhfunction.md" >}})s!

Consider a mean function \\(m(x)\\), and a covariance ([kernel]({{< relref "KBhnull_space.md" >}})) function \\(k(x, x')\\). And, for a set of objective values \\(y\_{j} \in \mathbb{R}\\), which we are trying to infer using \\(m\\) and \\(k\\).

\begin{equation}
\mqty[y\_1 \\\ \dots \\\ y\_{m}] \sim \mathcal{N} \qty(\mqty[m(x\_1) \\\ \dots \\\ m(x\_{m})], \mqty[k(x\_1, x\_1) & \dots & k(x\_1, x\_{m}) \\\&\dots&\\\ k(x\_{m}, x\_{1}) &\dots &k(x\_{m}, x\_{m})])
\end{equation}

The choice of [kernel]({{< relref "KBhnull_space.md" >}}) makes or breaks the your ability to model your system. Its the way by which your input values are "smoothed" together to create a probabilistic estimate.


#### Choice of Kernels {#choice-of-kernels}

<!--list-separator-->

-  squared exponential kernel

    \begin{equation}
    k(x,x') = \exp \qty( \frac{-(x-x')^{2}}{2 l^{2}})
    \end{equation}

    where, \\(l\\) is the parameter controlling the "length scale" (i.e. distance required for the function to change significantly). As \\(l\\) gets larger, there's more smoothing.

<!--list-separator-->

-  Matérn Kernel

    This is a very common kernel. Look it up.


#### Prediction {#prediction}

Given known means and variances of the sampled points from the original system, we can compute:

\begin{equation}
P(Y^{\*}|Y)
\end{equation}

through using [conditioning Gaussian distributions]({{< relref "KBhgaussian_distribution.md#conditioning-gaussian-distributions" >}}).

Specifically, with:

\begin{equation}
\mqty[\hat{y} \\\ y] \sim \mathcal{N} \qty(\mqty[m(X^{\*}) \\\ m(X)], \mqty[K(X^{\*}, X^{\*}) & K(X^{\*},X) \\\ K(X, X^{\*}) & K(X, X)])
\end{equation}

we can compute a new mean and a new covariance using [conditioning Gaussian distributions]({{< relref "KBhgaussian_distribution.md#conditioning-gaussian-distributions" >}})


#### Noisy Measurements {#noisy-measurements}

We can account for zero-mean noise by adding some noise to your covariance:

\begin{equation}
\mqty[\hat{y} \\\ y] \sim \mathcal{N} \qty(\mqty[m(X^{\*}) \\\ m(X)], \mqty[K(X^{\*}, X^{\*}) & K(X^{\*},X) \\\ K(X, X^{\*}) & K(X, X) + v I])
\end{equation}


## Surrogate Optimization {#surrogate-optimization}


### Prediction Based Exploration {#prediction-based-exploration}

Given your existing points \\(D\\), evaluate \\(\mu\_{x|D}\\), and optimize for the next design point that has the smallest \\(\mu\_{x|D}\\).

This is **all exploitation, no exploration**.


### Error Based Exploration {#error-based-exploration}

Use the 95% [confidence interval]({{< relref "KBhconfidence_interval.md" >}}) from the [Gaussian Process](#gaussian-process), find the areas with with the biggest gap and then lower those.

This is \*all exploration, no exploitation.


### Lower Confidence Bound Exploration {#lower-confidence-bound-exploration}

tradeoff between exploration and exploitation. Try to minimize:

\begin{equation}
LB(x) = \hat{\mu}(x) - \alpha \hat{\Sigma}(x)
\end{equation}

try to minimize both the LOWER BOUND as well as the optimum. This is a probabilistic generalization of the [Shubert-Piyavskill Method]({{< relref "KBhsu_cs361_apr092024.md#shubert-piyavskill-method" >}})---and no [Lipschitz Constant]({{< relref "KBhuniqueness_and_existance.md#lipschitz-condition" >}}) needed!

Reminder, though, these are **probabilistic bounds**---unlike [Shubert-Piyavskill Method]({{< relref "KBhsu_cs361_apr092024.md#shubert-piyavskill-method" >}}).


### Probability of Improvement Exploration {#probability-of-improvement-exploration}

We define "improvement" as:

\begin{equation}
I(y) = \begin{cases}
y\_{\min} - y, \text{if}\ y < y\_{\min} \\\\
0, \text{otherwise}
\end{cases}
\end{equation}

then, we have the "probability of improvement" metric at:

\begin{equation}
P(y < y\_{\min}) &= \int\_{-\infty}^{y\_{\min}} \mathcal{N}(y | \hat{\mu}, \hat{\Sigma}) \dd{y}  \\\\
&= \Phi\qty( \frac{y\_{\min } - \hat{\mu}}{\hat{\Sigma}})
\end{equation}

(i.e. we want to find points that are very possible to improve). This could be zero when \\(\hat{\Sigma} = 0\\), which happens when we are at a noiseless point.

You can also do this by the expected value of improvement
