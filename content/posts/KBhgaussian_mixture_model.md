+++
title = "Gaussian mixture model"
author = ["Houjun Liu"]
draft = false
+++

Gaussian models are typically [unimodal]({{< relref "KBhunimodal.md" >}}), meaning they have one peak (things decrease to the left of that peak, increases to the right of it).

Therefore, in order to model something more complex with multiple peaks, we just weighted average multiple gaussian models

\begin{equation}
p(x | \dots ) = \sum\_{i-1}^{n}p\_i \mathcal{N}(x | u\_{i}, {\sigma\_{i}}^{2})
\end{equation}

where we want our weights \\(p\_{j}\\) to sum up ultimate to \\(1\\) because we want the ultimate thing to still integrate to \\(1\\).
