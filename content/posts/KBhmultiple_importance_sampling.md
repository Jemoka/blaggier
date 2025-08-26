+++
title = "multiple importance sampling"
author = ["Houjun Liu"]
draft = false
+++

what if we did [Importance Sampling]({{< relref "KBhimportance_sampling.md" >}}), but.... had **multiple proposals?!**

**notation**: \\(w\_{i}, \tau\_{i}\\), etc. all correspond to stuff that came from proposal \\(q\_{i}\\).

---

[standard multiple importance sampling]({{< relref "KBhmultiple_importance_sampling.md" >}}) ([s-MIS]({{< relref "KBhmultiple_importance_sampling.md" >}}))

1.  draw samples from current proposals \\(\tau\_{i} \sim q\_{i}\qty(\tau)\\)
2.  use all of the samples to estimate \\(p\_{\text{fail}}\\)

\begin{equation}
\hat{p}\_{\text{fail}} = \frac{1}{m} \sum\_{i=1}^{m} w\_{i} 1\qty {\tau\_{i}\not \in \psi}
\end{equation}

where

\begin{equation}
w\_{i} = \qty(\frac{p\qty(\tau\_{i})}{q\_{i}\qty(\tau\_{i})})
\end{equation}

---

[deterministic mixture multiple importance sampling]({{< relref "KBhmultiple_importance_sampling.md" >}}) ([DM-MIS]({{< relref "KBhmultiple_importance_sampling.md" >}}))

1.  draw samples alternating each of the proposals
2.  use them to estimate \\(p\_{\text{fail}}\\)

\begin{equation}
w\_{i} = \frac{p\qty(\tau\_{i})}{\frac{1}{m}\sum\_{j=1}^{m}q\_{j}\qty(\tau\_{i})}
\end{equation}

this version essentially creates a **mixture distribution** between all of your input distributions.

---
