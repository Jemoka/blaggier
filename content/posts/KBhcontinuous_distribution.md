+++
title = "continuous distribution"
author = ["Houjun Liu"]
draft = false
+++

This is a continuous distribution for which the probability can be quantified as:

\begin{equation}
p(x) \dd{x}
\end{equation}

You will note that, at any given exact point, the probability is \\(\lim\_{\dd{x} \to 0} p(x)\dd{x} = 0\\). However, to get the actual probability, we take an integral over some range:

\begin{equation}
\int\_{-\infty}^{\infty} p(x) \dd{x} = 1
\end{equation}

See also [cumulative distribution function]({{< relref "KBhprobability_distributions.md#cumulative-distribution-function" >}}) which represents the chance of something happening up to a threshold.
