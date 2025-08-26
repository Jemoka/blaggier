+++
title = "confidence interval"
author = ["Houjun Liu"]
draft = false
+++

## proportional confidence intervals {#proportional-confidence-intervals}

We will measure a single [stastistic]({{< relref "KBhstastistic.md" >}}) from a large population, and call it the [point estimate]({{< relref "KBhpoint_estimate.md" >}}). This is usually denoted as \\(\hat{p}\\).

Given a proportion \\(\hat{p}\\) ("95% of sample), the range which would possibly contain it as part of its \\(2\sigma\\) range is the \\(95\\%\\) confidence interval.

Therefore, given a \\(\hat{p}\\) the plausible interval for its confidence is:

\begin{equation}
   \hat{p} \pm z^\* \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}
\end{equation}

where, \\(n\\) is the sample size, \\(\hat{p}\\) is the [point estimate]({{< relref "KBhpoint_estimate.md" >}}), and \\(z\*=1.96\\) is the [critical value]({{< relref "KBhcritical_value.md" >}}), the [z-score]({{< relref "KBhz_score.md" >}}) denoting \\(95\\%\\) confidence (or any other desired confidence level).


## conditions for proportional confidence interval {#conditions-for-proportional-confidence-interval}

There are the conditions that make a [proportional confidence interval](#proportional-confidence-intervals) work

-   distribution is normal
-   \\(n\hat{p}\\) and \\(n(1-\hat{p})\\) are both \\(>10\\)
-   we are sampling with replacement, or otherwise sampling \\(<10\\%\\) of population (otherwise, we need to apply a finite population correction


## value confidence intervals {#value-confidence-intervals}

The expression is:

\begin{equation}
   \bar{x} \pm t^\* \frac{s}{\sqrt{n}}
\end{equation}

where \\(t\*\\) is the \\(t\\) score of the desired power level with the correct degrees of freedom; \\(s\\) the sample standard deviation, \\(n\\) the sample size, and \\(\har{x}\\) the mean.