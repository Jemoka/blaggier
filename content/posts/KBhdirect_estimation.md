+++
title = "direct estimation"
author = ["Houjun Liu"]
draft = false
+++

[direct estimation]({{< relref "KBhdirect_estimation.md" >}}) of the probability of failure:

1.  perform a rollout of the system
2.  label the outcome as \\(1\\) if the trajectory is a failure, and \\(0\\) otherwise

this is just [Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}).

From there, we can just go about estimating this using standard parameter estimation (i.e. using [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) estimation or Baysian estimation.)


## maximum-likelihood estimation of failure distribution {#maximum-likelihood-estimation-of-failure-distribution}

\begin{equation}
\hat{p}\_{\text{fail}} = \frac{1}{m} \sum\_{i=1}^{m} 1\qty {\tau\_{i} \not \in \psi} = \frac{n}{m}
\end{equation}

for \\(n\\) failures and \\(m\\) rollouts, where \\(\tau \sim p\qty(\cdot)\\).


## Bayesian estimation of failure distribution {#bayesian-estimation-of-failure-distribution}

\begin{equation}
p \qty(\theta | D) = \frac{p\qty(D| \theta) p\qty(\theta)}{\int\_{\theta} p\qty(D | \theta) p\qty(\theta) \dd{\theta}}
\end{equation}

whereby \\(\theta := p\_{\text{fail}}\\), \\(n\\) is the number of failures, \\(m\\) is the number of total trials

\begin{equation}
\hat{p}\_{\text{fail}} \sim \text{Beta}\qty(\alpha + n, \beta + m - n)
\end{equation}
