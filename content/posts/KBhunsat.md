+++
title = "UNSAT"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\text{UNSAT} = \qty {\phi : \text{all assignment make $\phi$ false}}
\end{equation}

Equivalently, we have:

\begin{equation}
\text{UNSAT} = \neg \text{SAT}
\end{equation}


## NP = coNP IFF UNSAT is in NP {#np-conp-iff-unsat-is-in-np}

\begin{equation}
\text{NP} = \text{coNP} \Leftrightarrow \text{UNSAT} \in \text{NP}
\end{equation}


### \\(\Rightarrow\\) {#rightarrow}

Because \\(\text{UNSAT} \in \text{coNP}\\), and we hypothesize NP = coNP, so \\(\text{UNSAT} \in \text{NP}\\)


### \\(\Leftarrow\\) {#leftarrow}

Suppose UNSAT in NP, we desire that \\(\text{coNP} = NP\\). Let \\(L \in \text{coNP}\\),so  \\(\neg L \in \text{NP}\\), since SAT is NP-complete, we can write that \\(L \leq\_{p} \text{SAT}\\). Equivalently, we have \\(L \leq\_{p} \neg \text{SAT} = \text{UNSAT}\\). Since \\(\text{UNSAT} \in \text{coNP}\\), we have \\(L \in \text{NP}\\).

In particular this proves that [UNSAT is coNP-complete](#np-conp-iff-unsat-is-in-np)


## coNP complete {#conp-complete}

\\(L\\) is [coNP complete](#conp-complete) if

1.  \\(L \in \text{coNP}\\)
2.  \\(\forall A \in \text{coNP}, A \leq\_{p} L\\)

**key detail**: \\(L\\) is NP complete IFF \\(\neg L\\) is coNP complete. Corollary: \\(L\\) is [NP-Complete]({{< relref "KBhnp_complete.md" >}}) IFF \\(\neg L\\) is [NP-Complete]({{< relref "KBhnp_complete.md" >}}).
