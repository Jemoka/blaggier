+++
title = "t-test"
author = ["Houjun Liu"]
draft = false
+++

A [t-test]({{< relref "KBht_test.md" >}}) is a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}) for statistical significance between two sample means based on [t-statistics]({{< relref "KBht_statistics.md" >}}). Before it can be conducted, it must meet the [conditions for inference](#conditions-for-inference--t-test).


## conditions for inference (t-test) {#conditions-for-inference--t-test}

To use [t-statistics]({{< relref "KBht_statistics.md" >}}), you have to meet three conditions just like the [conditions for inference]({{< relref "KBhz_test.md#conditions-for-inference--z-test" >}}) used in [z-score.]({{< relref "KBhz_score.md" >}})

-   random sampling
-   normal (sample size larger than 30, or if original distribution is confirmed as roughly symmetric about the mean)
-   Independence


## use a z-statistic to find a p-value {#use-a-z-statistic-to-find-a-p-value}

Begin by finding a \\(t\\) statistic. Remember that:

\begin{equation}
   t = \frac{statistic-parameter}{std\ err}
\end{equation}

In this case, when we are dealing with sample means, then, we have:

\begin{equation}
   t = \frac{\bar{x}-\mu\_0}{\frac{S\_x}{\sqrt{n}}}
\end{equation}

where \\(\bar{x}\\) is the measured mean, \\(\mu\_0\\) is the [null hypothesis]({{< relref "KBhhypothesis_testing.md#null-hypothesis" >}}) mean, and \\(S\_x\\) the sample's sample standard deviation.

Quick note:

\\(SE = \frac{S}{\sqrt{n}}\\)  because the [central limit theorem]({{< relref "KBhcentral_limit_theorem.md" >}}) states that sample means for their own distribution, whose variance equals the original variance divided by the sample size. Hence, the standard deviation of the means would be the sample standard deviation divided by the square root of the sample size.

Once you have a \\(t\\) value, you look at the test and what its asking (above the mean? below the mean? etc.) and add up the tail probabilities.


## paired vs two-sample tests {#paired-vs-two-sample-tests}

A paired t-test looks at pairs of values as [statistic]({{< relref "KBhstastistic.md" >}}) in itself (i.e. substracts directly, etc.) Think about it as a compound statistic, so you are doing a \\(t\\) test on one value, it just happened to be composed/calculated by a pair of values. (for instance, "difference between mother-father glucose levels.")

A two-staple t-test looks at two independent events and compares them. Hence, they are two random variables and should be manipulated as such.


## t-tests for regression lines {#t-tests-for-regression-lines}

regression lines can be imbibed with predictive power and confidence intervals:

\begin{equation}
   m \pm t^\* SE\_b
\end{equation}

where \\(m\\) is the slope and \\(SE\_b\\) is the [standard error]({{< relref "KBhstandard_error.md" >}}) of the regression line.

Note that the degrees of freedom used for \\(t^\*\\) is the number of data points, minus **two**.


### conditions for inference (slops) {#conditions-for-inference--slops}

Acronym: LINEAR

-   Linear
-   Independent (observations are independent or \\(<10\\%\\))
-   Normal (for a given \\(x\\), \\(y\\) is [normally distributed]({{< relref "KBhnormal_distribution.md" >}}))
-   Equal variance (for any given \\(x\\), it should have a roughly equal standard deviation in \\(y\\))
-   Random