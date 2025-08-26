+++
title = "CPOMDP"
author = ["Houjun Liu"]
draft = false
+++

A [CPOMDP]({{< relref "KBhcpomdp.md" >}}), or [Constrained Partially Observable Markov Decision Process]({{< relref "KBhcpomdp.md" >}}), gives two objectives for the system to optimize upon:

an reward function \\(r(s,a)\\) and a set of constraints \\(c(s,a) \geq 0\\). Specifically, we formulate it as a [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}): \\((S,A,\Omega), T, O ,R\\), with an additional set of constraints \\(\bold{C}\\) and budgets \\(\beta\\).

Whereby, we seek to maximize the infinite-horizon reward \\(\mathbb{E}\_{t} \qty[R(a\_{t}, s\_{t})]\\) subject to discounting, subject to:

\begin{equation}
C\_{i}(s,a) \leq \beta\_{i}, \forall C\_{i},\beta\_{i} \in \bold{C}, \beta
\end{equation}
