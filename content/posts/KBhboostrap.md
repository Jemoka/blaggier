+++
title = "bootstrap"
author = ["Houjun Liu"]
draft = false
+++

[bootstrap]({{< relref "KBhboostrap.md" >}}) allows you to know distribution statistics, calculate [p-value]({{< relref "KBhhypothesis_testing.md#p-value" >}}), etc, with NO [statistic]({{< relref "KBhstastistic.md" >}})al testing like t test, etc.

Big idea: treat your [sample space]({{< relref "KBhsample_space.md" >}}) as your population, and sample from it to obtain an estimate of the properties of the sample distribution.

\begin{equation}
D \approx \hat{D}
\end{equation}

so, to calculate the distribution of any given [statistic]({{< relref "KBhstastistic.md" >}}) via a sample:

1.  estimate the [PMF]({{< relref "KBhprobability_mass_function.md" >}}) using sample
2.  `my_statistic_dist` = [] (like [sample mean]({{< relref "KBhrandom_variables.md#sample-mean" >}}), [sample variance]({{< relref "KBhrandom_variables.md#sample-variance" >}}), etc.)
3.  for i in (N &gt;&gt; 10000)
    1.  take a `subsample` of len(sample) samples from [PMF]({{< relref "KBhprobability_mass_function.md" >}})u
    2.  `my_statistic_dist`.append(`my_statistic=(=subsample`)) (recall it has to be a [sampling statistic]({{< relref "KBhrandom_variables.md#sampling-statistics" >}}) (like N-1 for [sample variance]({{< relref "KBhrandom_variables.md#sample-variance" >}}))
4.  how you have a distribution of `my_statistic`

We know that taking mean and var re drawn as a statistic of the same random variable, \\(N\\) times. So, [central limit theorem]({{< relref "KBhcentral_limit_theorem.md" >}}) holds. Therefore, these are normal and you can deal with them.

In terms of step 3.1, the subsample of len sample can be given by:

```python
np.random.choice(sample_pop, len(sample_pop), replace=True)
```

because we essentilaly want to draw from a weighted distribution of your input sample, WITH REPLACEMENT (otherwise it'd be the same exact set of data instead of a sample from it).


## p-value from bootstrap {#p-value-from-bootstrap}

[p-value]({{< relref "KBhhypothesis_testing.md#p-value" >}}) is defined as "[probability]({{< relref "KBhprobability.md" >}}) of having an difference in sample means (called [Effecient Frontier]({{< relref "KBhcapm.md#minimum-variance-boundary" >}})) greater than that observed in samples of the [null hypothesis]({{< relref "KBhhypothesis_testing.md#null-hypothesis" >}}), that the two sames came from the same distribution".

so:

\begin{equation}
P(|\mu\_{1} - \mu\_{2}|>x | \text{null}\\))
\end{equation}

We can simply calculate an [effect size](#p-value-from-bootstrap) distribution via the [bootstrap]({{< relref "KBhboostrap.md" >}})ping on the combined population of both distributions, to see what the probability above is where \\(x\\) is the actual effect size we got.
