+++
title = "proposal distribution"
author = ["Houjun Liu"]
draft = false
+++

We define the optimal [proposal distribution]({{< relref "KBhproposal_distribution.md" >}}) as the one that _minimizes the variance_ of the estimator of the [Probability of Failure]({{< relref "KBhprobability_of_failure.md" >}}).

Sadly, the best proposal distributions is...

\begin{equation}
q^{\*}\qty(\tau) = \frac{p\qty(\tau) 1\qty {\tau \not \in \psi}}{p\_{\text{fail}}} = \frac{p\qty(\tau) 1\qty {\tau \not \in \psi}}{\int 1 \qty {\tau \not\in  \psi} p\qty(\tau) \dd{\tau }}
\end{equation}

but wait this is just the [Failure Distribution]({{< relref "KBhfailure_distribution.md" >}})! But our entire point is trying to estimate \\(p\_{\text{fail}}\\).

notice that this is exactly the **DEFINITION OF THE FAILURE DISTRIBUTION**. et, we were trying to estimate \\(p\_{\text{fail}}\\) in the first place? Recall; we are able to sample from the [Failure Distribution]({{< relref "KBhfailure_distribution.md" >}}), fit a model and nice.

Yet, this brings two challenges

1.  sampling from [Failure Distribution]({{< relref "KBhfailure_distribution.md" >}}) is quite hard
2.  it maybe difficult to produce a good fit with higher dimensional systems

see [adaptive cross entropy method with adaptive importance sampling]({{< relref "KBhadaptive_importance_sampling.md#adaptive-cross-entropy-method-with-adaptive-importance-sampling" >}})


## population monte-carlo {#population-monte-carlo}

what if you are doing [multiple importance sampling]({{< relref "KBhmultiple_importance_sampling.md" >}}) and so you need a whole bunch of proposals? let's just keep around a bunch of proposals

1.  select an initial populating of **proposals**
2.  draw a sample from each proposal
3.  compute the importance weight for each sample
4.  resample based on importance weights
5.  create new proposal distribution centered at the samples---perhaps with constant variance
