+++
title = "best-action worst-state"
author = ["Houjun Liu"]
draft = false
+++

[best-action worst-state]({{< relref "KBhworst_possible_state.md" >}}) is a lower bound for [alpha vector]({{< relref "KBhalpha_vector.md" >}})s:

\begin{equation}
r\_{baws} = \max\_{a} \sum\_{k=1}^{\infty} \gamma^{k-1} \min\_{s}R(s,a)
\end{equation}

The [alpha vector]({{< relref "KBhalpha_vector.md" >}}) corresponding to this system would be the same \\(r\_{baws}\\) at each slot.

which should give us the highest possible reward possible given we always pick the most optimal actions while being stuck in the worst state
