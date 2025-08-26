+++
title = "Space Time Hierachy"
author = ["Houjun Liu"]
draft = false
+++

I finally get to sound like I'm doing physics.

\begin{equation}
L \subseteq P \subseteq \text{PSPACE} \subseteq \text{EXP}
\end{equation}

by [space hierarchy theorem]({{< relref "KBhspace_complexity.md#space-hierarchy-theorem" >}}) and [time hierarchy theorem]({{< relref "KBhtime_complexity.md#time-hierarchy-theorem" >}}), we have also that:

\begin{equation}
\text{P} \subset \text{EXP}
\end{equation}

and

\begin{equation}
L \subset\text{PSPACE}
\end{equation}

so we know that one of the subset things on top is a strict subset. There's also a bridge \\(P \subseteq \text{NP} \subseteq \text{PSPACE}\\).


## \\(L =^{?} P\\) {#l-p}

We believe that \\(L \subset P\\), but we can't show this.


## \\(L =^{?} \text{NP}\\) {#l-text-np}

We believe that \\(L \subset \text{NP}\\), but we can't show this
