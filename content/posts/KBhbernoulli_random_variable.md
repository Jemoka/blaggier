+++
title = "Bernoulli distribution"
author = ["Houjun Liu"]
draft = false
+++

Consider a case where there's only a single [binary]({{< relref "KBhbinary_number_system.md#base-2" >}}) outcome:

-   "success", with probability \\(p\\)
-   "failure", with probability \\(1-p\\)


## constituents {#constituents}

\begin{equation}
X \sim Bern(p)
\end{equation}


## requirements {#requirements}

the [probability mass function]({{< relref "KBhprobability_mass_function.md" >}}):

\begin{equation}
P(X=k) =
\begin{cases}
p,\ if\ k=1\\\\
1-p,\ if\ k=0\\\\
\end{cases}
\end{equation}

This is sadly not [Differentiable]({{< relref "KBhuniqueness_and_existance.md#differentiable" >}}), which is sad for [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}). Therefore, we write:

\begin{equation}
P(X=k) = p^{k} (1-p)^{1-k}
\end{equation}

Which emulates the behavior of your function at \\(0\\) and \\(1\\) and we kinda don't care any other place.

We can use it


## additional information {#additional-information}


### properties of [Bernoulli distribution]({{< relref "KBhbernoulli_random_variable.md" >}}) {#properties-of-bernoulli-distribution--kbhbernoulli-random-variable-dot-md}

-   **[expected value]({{< relref "KBhexpectation.md" >}})**: \\(p\\)
-   **[variance]({{< relref "KBhvariance.md" >}})**: \\(p(1-p)\\)


### [Bernoulli]({{< relref "KBhbernoulli_random_variable.md" >}}) as indicator {#bernoulli--kbhbernoulli-random-variable-dot-md--as-indicator}

If there's a series of event whose probability you are given, you can use a [Bernoulli]({{< relref "KBhbernoulli_random_variable.md" >}}) to model each one and add/subtract


### MLE for Bernouli {#mle-for-bernouli}

\begin{equation}
p\_{MLE} = \frac{m}{n}
\end{equation}

\\(m\\) is the number of events
