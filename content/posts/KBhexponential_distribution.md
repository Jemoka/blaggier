+++
title = "exponential distribution"
author = ["Houjun Liu"]
draft = false
+++

Analogous to [poisson distribution]({{< relref "KBhprobability_of_k_in_x_time.md" >}}), but for [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) [random variable]({{< relref "KBhrandom_variables.md" >}}). Consider a distribution which lasts a duration of time until success; what's the [probability]({{< relref "KBhprobability.md" >}}) that success is found in some range of times:

"What's the probability that there are an earthquake in \\(k\\) years if there's on average \\(2\\) earthquakes in 1 year?"


## constituents {#constituents}

-   $&lambda;$---"rate": event rate (mean occurrence per time)


## requirements {#requirements}

\begin{equation}
f(x) = \begin{cases}
\lambda e^{-\lambda x},  x\geq 0\\\\
0,   x< 0
\end{cases}
\end{equation}


## additional information {#additional-information}

-   **expectation**: \\(\frac{1}{\lambda}\\)
-   **variance**: \\(\frac{1}{\lambda^{2}}\\)


### [exponential distribution]({{< relref "KBhexponential_distribution.md" >}}) is memoryless {#exponential-distribution--kbhexponential-distribution-dot-md--is-memoryless}

An [exponential distribution]({{< relref "KBhexponential_distribution.md" >}}) doesn't care about what happened before.

"On average, we have a request every 5 minutes. There have been 2 minutes with no requests. What's the probability that the next request is in 10 minutes?"

is the same statement as

"On average, we have a request every 5 minutes. ~~There have been 2 minutes with no requests.~~ What's the probability that the next request is in 10 minutes?"

That is:

\begin{equation}
P(s+t|s) = P(t)
\end{equation}
