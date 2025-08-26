+++
title = "Bayes Theorem"
author = ["Houjun Liu"]
draft = false
+++

\begin{align}
p(x\mid y) = \frac{p(y \mid x) p(x)}{p(y)}
\end{align}

this is a direct result of the [probability chain rule]({{< relref "KBhprobability.md#conditional-probability" >}}).

Typically, we name \\(p(y|x)\\) the "likelihood", \\(p(x)\\) the "prior".


## Better normalization {#better-normalization}

What if you don't fully know \\(p(y)\\), say it was parameterized over \\(x\\)?

\begin{align}
p(x|y) &= \frac{p(y|x) \cdot  p(x)}{p(y)}  \\\\
&= \frac{p(y|x) \cdot p(x)}{\sum\_{X\_{i}} p(y|X\_{i})}
\end{align}

just apply [law of total probability]({{< relref "KBhprobability.md#law-of-total-probability" >}})! taad
