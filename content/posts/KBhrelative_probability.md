+++
title = "relative probability"
author = ["Houjun Liu"]
draft = false
+++

Let \\(X \sim \mathcal{N}\\).

"How much more likely is \\(x=10\\) than \\(x=5\\)?"

We note that \\(P(x=value) = 0\\) for any value if \\(X\\) is continuous. However, we can still get an answer:

\begin{equation}
\frac{\dd{X} P(x=10)}{\dd{X} P(x=5)}
\end{equation}

these two things cancel out. Therefore, you can just divide the [PDF]({{< relref "KBhprobability_distributions.md#probability-density-function" >}}):

\begin{equation}
\frac{f(x=10)}{f(x=5)}
\end{equation}
