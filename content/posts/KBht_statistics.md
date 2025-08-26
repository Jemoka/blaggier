+++
title = "t-statistics"
author = ["Houjun Liu"]
draft = false
+++

[confidence interval]({{< relref "KBhconfidence_interval.md" >}})s, a review:

\begin{equation}
   statistic \pm z^\*\sigma\_{statistic}
\end{equation}

Frequently, we don't have access to \\(\sigma\\) and hence have to guestimate. When we have a sample means and a proportion, we have ways of guestimating it from the standard error (available on the single-sample section of the [AP Statistics]({{< relref "KBhAPStats.md" >}}) formula sheet.)

However, for means, the standard error _involves!_ \\(\sigma\\). How do we figure \\(\sigma\\) when we don't know it? We _could_ use \\(s\\), sample standard deviation, but then we have to adjust \\(z^\*\\) otherwise we will have underestimation. Hence, we have to use a statistic called \\(t^\*\\).

We can use t-values to perform [t-test]({{< relref "KBht_test.md" >}}), a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}) of means.