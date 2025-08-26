+++
title = "MLE for Conditional Gaussian"
author = ["Houjun Liu"]
draft = false
+++

Let's say we want to find [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) parameters \\(\theta\\) for a conditional Gaussian with constant variance. That is:

\begin{equation}
p\qty(y\_{i} | x\_{i}) = \mathcal{N} \qty(y\_{i}|f\_{\theta } \qty(x\_{i}), \sigma^{2})
\end{equation}

and we have a corresponding dataset: \\(\qty(x\_1, y\_1), ..., \qty(x\_{m}, y\_{m})\\).

where:

\begin{align}
\hat{\theta} &= \arg\max\_{\theta} \sum\_{i=1}^{m} \log p\qty(y\_{i}|x\_{i})  \\\\
&= \arg\max\_{\theta} \sum\_{i=1}^{m} \log \mathcal{N} \qty(y\_{i}| f\_{\theta} \qty(x\_{i}), \sigma^{2})  \\\\
&= \arg\max\_{\theta } \sum\_{i=1}^{m} \log  \frac{1}{\sqrt{{2 \pi \sigma^{2}}}} \exp \qty(- \frac{\qty(y\_{i}- f\_{\theta }\qty(x\_{i}))^{2}}{2\sigma^{2}})
\end{align}

taking the $log $ of an $exp $, and removing constants (since they don't affect optimization), this gives us:

\begin{equation}
\arg\max\_{\theta} \sum\_{i=1}^{m} - \qty(y\_{i} - f\_{\theta} (x\_{i}))^{2}
\end{equation}

which is the...

\begin{equation}
\arg\min\_{\theta} \sum\_{i=1}^{m} \qty(y\_{i} - f\_{\theta} (x\_{i}))^{2}
\end{equation}

[woah, least-squares error]({{< relref "KBhcost_function.md#least-squares-error" >}})!
