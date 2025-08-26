+++
title = "hypothesis testing"
author = ["Houjun Liu"]
draft = false
+++

[hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}) is the mechanism by which a hypothesis is tested statistically.

The core logic of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}): have a metric, do tests, calculate probability that the outcome could have happened given the metric is true.

Examples include

-   [t-test]({{< relref "KBht_test.md" >}}) (for sample means)
-   [z-test]({{< relref "KBhz_test.md" >}}) (for sample proportions)
-   [chi-square test]({{< relref "KBhchi_square.md#chi-square-test" >}}) (for sample categories)

Common to all [hypothesis tests]({{< relref "KBhhypothesis_testing.md" >}}) are the following terms.


## null hypothesis {#null-hypothesis}

A [null hypothesis](#null-hypothesis) is a "no difference" hypothesis created as a part of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}). It is usually stated as an equality.


## alternative hypothesis {#alternative-hypothesis}

The [alternative hypothesis](#alternative-hypothesis) is the "new news" hypothesis created as a part of [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}), whereby the confirmation would introduce new information.


## p-value {#p-value}

the [p-value](#p-value) of a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}) is the probability of the results acquired taking place given if the [null hypothesis](#null-hypothesis). That is:

\begin{equation}
   p(\hat{p} | H\_0\ true)
\end{equation}

To figure out the above probability, you could either simulate the occurrence and look at a histogram (more common for [AP Statistics]({{< relref "KBhAPStats.md" >}}) anyways) or measure a few other statistics. We will talk about them later.

To use [p-value](#p-value) as a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}), the sample has to meet the [conditions for inference]({{< relref "KBhz_test.md#conditions-for-inference--z-test" >}}).

See also [p-value from bootstrap]({{< relref "KBhboostrap.md#p-value-from-bootstrap" >}})


## Type I Error {#type-i-error}

A [Type I Error](#type-i-error) takes place when you reject the [null hypothesis](#null-hypothesis) during [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}) even while its true: i.e., a false positive.

The probability of having a [Type I Error](#type-i-error) is the [significance level](#significance-level) of the test.


## Type II Error {#type-ii-error}

A [Type II Error](#type-ii-error) takes place when you accept the [null hypothesis](#null-hypothesis) during [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}) even while its false.

The probability of having a [Type II Error](#type-ii-error) is the conjugate of the [power](#power--statistics) of a test.


## significance level {#significance-level}

[significance level](#significance-level) is the level by which one would accept a [p-value](#p-value) is being indicative of the success of a test. We usually use the letter \\(\alpha\\) to denote this.


## power (statistics) {#power--statistics}

[power](#power--statistics) is a [statistic]({{< relref "KBhstastistic.md" >}}) calculable during [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}). Its the probability of rejecting the [null hypothesis](#null-hypothesis) given the [null hypothesis](#null-hypothesis) is false. Also known as the conjugate of the [Type II Error](#type-ii-error).

[power](#power--statistics) increases as [significance level](#significance-level) increases, but then the probability of a [Type I Error](#type-i-error) increases as well.
