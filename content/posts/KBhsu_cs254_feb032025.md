+++
title = "SU-CS254 FEB032025"
author = ["Houjun Liu"]
draft = false
+++

**Key question**: why is having a SAT oracle less powerful than \\(\text{SAT} \in P\\)? What's the role of a oracle?


## with a SAT oracle... {#with-a-sat-oracle-dot-dot-dot}

We can solve NP problems because SAT is NP complete; we can solve coNP problems we can now finally just negate it.


## polynomial hierarchy collapses if \\(\text{SAT} \in \text{P}\\) {#polynomial-hierarchy-collapses-if-text-sat-in-text-p}

We can solve \\(\Sigma\_{j}\\) because we can peel off inner languages; for instance, for \\(\Sigma\_{2}\\):

\begin{equation}
x \in L \Leftrightarrow \exists w\_{1} \forall w\_{2} V\qty(x, w\_{1}, w\_{2}) = 1
\end{equation}

We can define:

\begin{equation}
\qty(x, w\_{1}) \in L' \Leftrightarrow \forall w\_{2} V\qty(x, w\_{2}, w\_{2}) = 1
\end{equation}

since \\(P = NP \implies P = coNP\\), there exists a polytime \\(A\\) for \\(L'\\).

Therefore, \\(x \in L \Leftrightarrow \exists w\_1, A\qty(x, w\_{1}) = 1\\), so this is now in \\(NP\\), and we again have a polytime for it.


## polynomial hierarchy against a \\(\text{SAT}\\) oracle... {#polynomial-hierarchy-against-a-text-sat-oracle-dot-dot-dot}

Look at our definition about \\(A\\); if we only have a \\(\text{SAT}\\) oracle, we don't have \\(A \in \text{coNP} \implies A \in \text{P}\\). This is because we actually have \\(A \in \text{coNP} \implies A^{\text{SAT}} \in P\\).

Yet, on the next step, we have

\\(x \in L \Leftrightarrow \exists w\_1, A^{\text{SAT}}\qty(x, w\_{1}) = 1\\)

Now, we can't actually use or oracle again! What we want to do next is to show that the above stament implies that \\(\text{L} \in \text{NP}\\) and we can invoke [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}). Yet, this oracle use **breaks [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}})!**


### oracles break Cook-Levin theorem {#oracles-break-cook-levin-theorem}

...because a magic box can't be easily encoded in a [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}) formula (since there's no tape delta that can be captured as a clause in the [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}) reduction).


### instead, we need to use the result in [\\(\text{P}^{\text{SAT}} \subseteq \Sigma\_{2}\\)](#text-p-text-sat-subseteq-sigma-2) to show that the oracle is slightly less powerful {#instead-we-need-to-use-the-result-in-text-p-text-sat-subseteq-sigma-2--orgb2a66fd--to-show-that-the-oracle-is-slightly-less-powerful}


## [Oracle Turing Machine]({{< relref "KBhoracle_reduction.md#oracle-turing-machine" >}}) {#oracle-turing-machine--kbhoracle-reduction-dot-md}

See [Oracle Turing Machine]({{< relref "KBhoracle_reduction.md#oracle-turing-machine" >}})


## Oracle Turing Languages {#oracle-turing-languages}

\begin{equation}
\text{P}^{\text{SAT}} : \qty {L : L\text{ can be decided in polytime with SAT-oracle TM}}
\end{equation}

generally...

\begin{equation}
\qty {\text{NP}, \text{P}, \text{coNP}} \in \text{P}^{\text{SAT}}
\end{equation}


### \\(\text{P}^{\text{SAT}} \subseteq \Sigma\_{2}\\) {#text-p-text-sat-subseteq-sigma-2}

Suppose \\(\text{L} \in \text{P}^{\text{SAT}}\\), solved by some SAT oracle Turing Machine called \\(A\\).

We desire that \\(A\\) accepts \\(x\\) \\(\Leftrightarrow\\) \\(\exists w\_{1} \forall w\_{2} V\qty(x, w\_1, w\_2) = 1\\).

---

tangent, why can't we place \\(A\\) into \\(\Sigma\_{1}\\)? Say we desire \\(A\\) accepts \\(x\\) \\(\Leftrightarrow \exists  w, V\qty(x, w) = 1\\). Can't we feasibly make \\(w\\) contain all the oracle answers? In particular since \\(A\\) is a poly-oracle machine, it makes at most poly oracle calls, so the "witness is fine."

The problem is that unlike a normal verifier, the oracle machine gives full trust to the oracle's output; unlike a verifier, it trusts the oracle fully and hence can be fooled.

You may say "hey, I can just include the for-real certificate along as well"; this is fine and poly-time for the \\(1\\) cases, but for the \\(0\\) cases, we have to ship along the "for all" flavor certificates (think UNSAT).

This actually motivates our overall proof.

---

For:

\begin{equation}
\qty(b\_1, \dots, b\_{m}) \text{ and } \begin{cases}
b\_{i} = 1, \text{proof $\phi\_{i}$ \text{SAT}} \\\\
b\_{i} = 0, \text{proof $\phi\_{i}$ \text{UNSAT}}
\end{cases}
\end{equation}

So, we desire to make:

\begin{equation}
\text{A} \text{ accept } x \Leftrightarrow \exists w\_{1} \forall w\_{2} V\qty(x, w\_1, w\_2) = 1
\end{equation}

Let's write certificates:

the oracle anwsers + the "satisfying assignment" certificate

\begin{equation}
w\_1 = \qty {\qty(b\_1, \dots, b\_{m}), \forall i \text{ s.t. } b\_{i} = 1, \text{ give } z\_{i}: \phi\_{i} \qty(z\_{i}) = 1}
\end{equation}

and the "unsatisfying assignment" certificate

\begin{equation}
w\_2 = \qty {\forall i \text{ s.t. } b\_{i} = 0, z\_{i}\text{ s.t. } \phi\_{i}\qty(z\_{i}) = 0}
\end{equation}

given \\(x, w\_1, w\_2\\), our \\(V\\) will proceed as follows:

-   simulate \\(A\\) on \\(x\\)
-   when \\(A\\) makes its ith Oracle query, \\(V\\) looks up answer \\(b\_{i}\\)
    -   if \\(b\_{i} = 1\\), check if \\(\phi\_{i} \qty(z\_{i}) = 1\\); reject if not
    -   if \\(b\_{i} = 0\\), check if \\(\phi\_{i} \qty(z\_{i}) = 0\\), reject if not
-   if \\(b\_{i}\\) passes check, then use \\(b\_{i}\\) as an answer
-   accept iff \\(A\\) accepts
