+++
title = "poisson distribution"
author = ["Houjun Liu"]
draft = false
+++

Let's say we want to know what is the chance of having an event occurring \\(k\\) times in a unit time, on average, this event happens at a rate of \\(\lambda\\) per unit time.

"What's the probability that there are \\(k\\) earthquakes in the 1 year if there's on average \\(2\\) earthquakes in 1 year?"

where:

1.  events have to be independent
2.  probability of sucess in each trial doesn't vary


## constituents {#constituents}

-   $&lambda;$---count of events per time
-   \\(X \sim Poi(\lambda)\\)


## requirements {#requirements}

the [probability mass function]({{< relref "KBhprobability_mass_function.md" >}}):

\begin{equation}
P(X=k) = e^{-\lambda} \frac{\lambda^{k}}{k!}
\end{equation}


## additional information {#additional-information}


### properties of [poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md" >}}) {#properties-of-poisson-distribution--kbhprobability-of-k-in-x-time-dot-md}

-   **[expected value]({{< relref "KBhexpectation.md" >}})**: \\(\lambda\\)
-   **[variance]({{< relref "KBhvariance.md" >}})**: \\(\lambda\\)


### derivation {#derivation}

We divide the event into infinitely small buckets and plug into a [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}), to formulate the question:

"what's the [probability]({{< relref "KBhprobability.md" >}}) of large \\(n\\) number samples getting \\(k\\) events with probability of \\(\frac{\lambda}{n}\\) of events"

\begin{equation}
P(X=k) = \lim\_{n \to \infty} {n \choose k} \qty(\frac{\lambda}{n})^{k}\qty(1- \frac{\lambda}{n})^{n-k}
\end{equation}

and then do algebra.

{{< figure src="/ox-hugo/2023-10-13_16-17-13_screenshot.png" >}}

And because of this, when you have a large \\(n\\) for your [binomial distribution]({{< relref "KBhbinomial_distribution.md" >}}), you can just use a [poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md" >}}), where \\(\lambda = np\\).


### adding [poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md" >}}) {#adding-poisson-distribution--kbhprobability-of-k-in-x-time-dot-md}

For [independent]({{< relref "KBhprobability.md#independence" >}}) \\(A, B\\)

\begin{equation}
A+B \sim Poi(\lambda\_{A}+ \lambda\_{B})
\end{equation}


### MLE for [poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md" >}}) {#mle-for-poisson-distribution--kbhprobability-of-k-in-x-time-dot-md}

\begin{equation}
\lambda = \frac{1}{n} \sum\_{i=1}^{n} x\_{i}
\end{equation}

yes, that's just the [sample mean]({{< relref "KBhrandom_variables.md#sample-mean" >}})
