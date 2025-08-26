+++
title = "probabilistic programming"
author = ["Houjun Liu"]
draft = false
+++

Remember Bayes Rule in [Baysian Parameter Learning]({{< relref "KBhbaysian_parameter_learning.md" >}}):

\begin{equation}
P\qty(\theta | D) = \frac{P\qty(D | \theta) p \qty(\theta)}{\int\_{\theta}P\qty(D | \theta) p \qty(\theta) \dd{\theta}}
\end{equation}

we can't actually easily compute the bottom without taking an analytic integral; instead we can sample from it.

If you want analytical form, you should hope that your likelihood function is a [conjugate prior]({{< relref "KBhconjugate_prior.md" >}}) which allows us to analytically update prirors.
