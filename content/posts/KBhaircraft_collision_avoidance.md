+++
title = "aircraft collision avoidance"
author = ["Houjun Liu"]
draft = false
+++

suppose we have some aircraft, let's consider a sensor on this aircraft which is measuring the altitude:

{{< figure src="/ox-hugo/2025-01-14_13-37-13_screenshot.png" >}}

there's a true altitude \\(h\_{t}\\) that our system is at, and a measured altitude \\(\hat{h}\_{t}\\), which has some relation.

We can make a observation model through a linear conditional Gaussian:

\begin{align}
O \qty(o | s) &= O\qty(\hat{h} | h)  \\\\
&= \mathcal{N}\qty(\hat{h} \mid f\_{\theta}\qty(h), \sigma^{2})  \\\\
&= \mathcal{N}\qty(\hat{h} \mid \theta\_{1} h + \theta\_{2} \mid\sigma^{2})
\end{align}

and then we can solve for our parameters \\(\theta\_{j}\\)
