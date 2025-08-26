+++
title = "evaulating model fitness"
author = ["Houjun Liu"]
draft = false
+++

We want to compare features of the _model_ to features of the _data_:


## Visual diagnostics {#visual-diagnostics}

1.  PDF plot
2.  CDF of data vs. CDF of model
3.  [Quantile-Quantile plot]({{< relref "KBhquantile_quantile_plot.md" >}})
4.  [Calibration Plot]({{< relref "KBhcalibration_plot.md" >}})


## Summative Metrics {#summative-metrics}

1.  KL Divergence
2.  Expected Calibration Error
3.  Maximum Calibration Error


## Marginalization Ignores Covariances {#marginalization-ignores-covariances}

{{< figure src="/ox-hugo/2025-01-14_14-24-43_screenshot.png" >}}

Notice on the figure on the right captures distribution much better, yet the marginal distributions don't show this. This is because marginalizing over the datasets ignores the covariances. Hence, remember to keep dimensions and any projections hould capture covariances, etc.


## Conditional Distributions {#conditional-distributions}

Bin the conditions into groups and perform evals on each.


## Turing Test {#turing-test}

If expert knowledge is available, you can show an expect roll outs from data and model, and see if they can tell.
