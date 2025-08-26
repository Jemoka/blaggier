+++
title = "Two Statements About Uniformity"
author = ["Houjun Liu"]
draft = false
+++

## \\(\text{BPP} \subseteq p / poly\\) {#text-bpp-subseteq-p-poly}

Remember the [advice-taking TM]({{< relref "KBhcircuits.md#expanding-p-towards-p-poly" >}}) formulation of [circuit]({{< relref "KBhcircuits.md" >}})s.

Now, a language \\(L \in \text{BPP}\\) if \\(\exists\\) a polytime TM \\(M\\) such that:

-   \\(x \in L\\) implies \\(P\qty [M\qty(x, v) \text{ accepts}] \geq  \frac{2}{3}\\)
-   \\(x \not\in L\\) implies \\(P\qty [M\qty(x, v) \text{rejects}] \geq  \frac{2}{3}\\)

Intuition: we want to use \\(r\\) as advice. But, we need a "random" advice for each \\(x\\) which we don't have. But; consider the following parameterization of BPP: we notice that if we have \\(\frac{1}{3}\\)  chance of "bad" advice, we know that we can bump the failure down by trying a more, trending towards \\(2^{-O\qty(k)}\\). Using \\(O\qty(k)\\), by the union bound, we know at least one advice is good for all input \\(x\\).


## If \\(\text{SAT} \in p / poly\\), then polynomial hierarchy collapses to the second level; that is pi2=sigma2 {#if-text-sat-in-p-poly-then-polynomial-hierarchy-collapses-to-the-second-level-that-is-pi2-sigma2}

Suppose \\(\text{SAT} \in p / poly\\), so \\(\exists\\) a polysize circuit family:

\begin{equation}
\qty {C\_{n}}\_{n \in \mathbb{N}} \text{ solving SAT}
\end{equation}


### preliminaries 1: satisfying assignments {#preliminaries-1-satisfying-assignments}

Recall that SAT has a poly-time search-to-decision reduction---suppose \\(\text{SAT} \in P\\), there is a poly-time truing machine \\(M\\) such that given \\(\phi\\), outputs the actual satisfying assignment. The same thing works for [circuit]({{< relref "KBhcircuits.md" >}})s: there exists a poly-time transformation using circuits such that, given:

\begin{equation}
| \phi | = n
\end{equation}

it outputs: either reject or an actual satisfying assignment (through a multi-output circuit).


### preliminaries 2: \\(\pi\_{2} \text{SAT}\\) {#preliminaries-2-pi-2-text-sat}

This is \\(\pi\_{2}\\) complete:

\begin{equation}
\forall  x \in \qty {0,1}^{n}, \exists y \in \qty {0,1}^{n} \varphi\qty(0,1) =1
\end{equation}


### using our condition, let's now describe a \\(\Sigma\_{2}\\) algorithm that decides \\(\pi\_{2} \text{SAT}\\) {#using-our-condition-let-s-now-describe-a-sigma-2-algorithm-that-decides-pi-2-text-sat}

Recall by the first preliminary and the given, we have a self-certifying circuit family in p/poly (that runs in polynomial [size (circuits)]({{< relref "KBhcircuits.md#size--circuits" >}})). We desire to build a poly time TM \\(A\\) such that:

\begin{equation}
\exists w \in \qty {0,1}^{\text{poly}\qty(n)} \forall  x \in \qty {0,1}^{n} A\qty(w, x) =1
\end{equation}
