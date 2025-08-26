+++
title = "z-test"
author = ["Houjun Liu"]
draft = false
+++

A [z-test]({{< relref "KBhz_test.md" >}}) is a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}) for statistical significance between two sample proportions. Before it can be conducted, it must meet the [conditions for inference](#conditions-for-inference--z-test) for a z-test.


## conditions for inference (z-test) {#conditions-for-inference--z-test}

-   has to be random
-   has to be reasonably normal (vis a vi [test for normality]({{< relref "KBhtest_for_normality.md" >}}))
-   each sample has to be independent (or 10% rule)


## use a z-statistic to find p-value {#use-a-z-statistic-to-find-p-value}

1.  Given a sample proportion, calculate the sample proportion standard deviation (given on the formula sheet)
2.  Then, divide the difference between measured and null proportions to figure \\(z\\)

that is,

\begin{equation}
   z = \frac{\hat{p}-p\_0}{\sqrt{\frac{p\_0(1-p\_0)}{n}}}
\end{equation}

Look up the probability of \\(z\\) taking place on a \\(z\\) table. Then, \\(1-z\\) would yield the \\(p\\) vaule.