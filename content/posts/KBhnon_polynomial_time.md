+++
title = "Non-Polynomial Time"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
NP = \bigcup\_{k \in N} \text{NTIME}\qty(n^{k})
\end{equation}

Meaning, these are problems with the property that once you "have" the solution, its "easy" to verify the solution.


## verifier formulation of NP {#verifier-formulation-of-np}

\\(L \in \text{NP}\\), if there exists a [Polynomial Time]({{< relref "KBhtime_complexity.md#polynomial-time" >}}) [turing machine]({{< relref "KBhturing_machinea.md" >}}) named \\(V\\) (called a "verifier") such that:

\begin{equation}
X \in L \Leftrightarrow \exists\ w \in \qty {0,1}^{\text{poly}\qty(|x|)} V(x,w) = 1
\end{equation}

that is, "yes instances have efficiently checkable certificates/"proofs"
