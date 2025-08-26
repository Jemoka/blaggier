+++
title = "Directed Exploration"
author = ["Houjun Liu"]
draft = false
+++

## Softmax Method {#softmax-method}

Pull arm \\(a\\) with probability \\(\propto \exp (\lambda \rho\_{a})\\), where \\(\lambda \geq 0\\) is the "precision parameter".

When \\(\lambda \to 0\\), this system uses the same rate for each of the actions, so you are essentially randomly sampling; when \\(\lambda \to \infty\\), the system will use only the [greedy action]({{< relref "KBhexploration_and_exploitation.md#bayesian-model-estimation" >}}) because only the element with the biggest \\(\rho\_{a}\\) gets selected.

For a multi-state case:

\begin{equation}
\propto \exp (\lambda Q(s,a))
\end{equation}


## Quantile Exploration {#quantile-exploration}

Choose the arm with the largest \\(\theta\\) at the highest \\(\alpha\\) percentile of its beta distribution, pull that arm, update priors

"choose the arm with the highest \\(\theta\\) for the \\(90\\%\\) percentile, then update the distribution"


## UCB 1 {#ucb-1}

Inspired by [monte-carlo exploration]({{< relref "KBhmonte_carlo_tree_search.md#monte-carlo-exploration" >}})

take action \\(a\\) such that

\begin{equation}
\max\_{a} \rho\_{a} + c \sqrt{ \frac{\log N}{N(a)}}
\end{equation}

where, \\(c\\) is the exploration factor, \\(N\\) is the total number of trials, \\(N(a)\\) is the number of trials for \\(a\\) we have done.

This value is considered the "upper confidence bound"; hence "UCB"


## Posterior Sampling {#posterior-sampling}

Same one point from each [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}}) for each of your slot machines; then you pick the result that is the highest.

Does not require any parameter.

This is proven to do some over-exploration. But that's (mostly) just fine.


## R-Max {#r-max}

See [R-Max]({{< relref "KBhmodel_based_reinforcement_learning.md#r-max" >}})
