+++
title = "parameter"
author = ["Houjun Liu"]
draft = false
+++

a [parameter]({{< relref "KBhparameter.md" >}}) of [probability distribution]({{< relref "KBhprobability_distributions.md" >}}) govern the [probabilities]({{< relref "KBhprobability.md" >}}) associated with different conditions in that distribution. It is usually a [vector]({{< relref "KBhvector.md" >}}):

For instance, for uniform \\(Uni(\alpha, \beta)\\), parameter \\(\theta = [\alpha, \beta]\\).

importantly, for a [discrete distribution]({{< relref "KBhdiscrete_distribution.md" >}}) system with 6 parameters, we only need 5 [independent]({{< relref "KBhprobability.md#independence" >}}) [parameter]({{< relref "KBhparameter.md" >}})s to be able to satisfy the entire system. This is because a probability distribution must sum to 1.

however, for a [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}):

\begin{equation}
p(x|a)
\end{equation}

we need to specificity \\((n-1)m\\) [parameter]({{< relref "KBhparameter.md" >}})s, whereby \\(m\\) is the number of states \\(a\\) can take, and \\(n\\)  the number of states \\(n\\) can take. Each group of \\(m\\) has to add up to \\(1\\).


## [parameter learning]({{< relref "KBhparameter_learning.md" >}}) {#parameter-learning--kbhparameter-learning-dot-md}

see [parameter learning]({{< relref "KBhparameter_learning.md" >}})
