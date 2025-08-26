+++
title = "utility fusion"
author = ["Houjun Liu"]
draft = false
+++

Take the utility function from a bunch of [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s and combine them together using a fusion function.

\begin{equation}
U^{\*}(b,a) = f(U^{\*}(b\_1, a) ... U^{\*}(b\_{n}, a)
\end{equation}

where \\(f\\) can be `sum` or `min`. The overall belief \\(b\\) is simply \\(B\_1 \times ... \times B\_{n}\\), which combines all beliefs together.
