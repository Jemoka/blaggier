+++
title = "Non-Deterministic Computation"
author = ["Houjun Liu"]
draft = false
+++

...building blocks of [Non-deterministic Turing Machine]({{< relref "KBhnon_deterministic_turing_machines.md" >}}). Two transition functions:

\begin{equation}
\delta\_{0}, \delta\_{1} : Q \times \Gamma^{k} \to  Q \times \Gamma^{k-1} \times \qty {L, R, S}^{k}
\end{equation}

At every point, apply both of these separate functions/branch on both. Some sequences lead to \\(q\_{\text{accept}}\\), and some others lead to \\(q\_{\text{reject}}\\).

We accept IFF exists any path accepts =&gt; we reject IFF all path rejects.


## why NP is awesome {#why-np-is-awesome}

"what a ridiculous model of computation!"

1.  Yes, so that's why [P vs. NP]({{< relref "KBhp_vs_np.md" >}}) is so frustrating as a problem; if NP is indeed ridiculous, should be able prove P != NP
2.  [verifier formulation of NP]({{< relref "KBhnon_polynomial_time.md#verifier-formulation-of-np" >}})
3.  [NP]({{< relref "KBhnon_polynomial_time.md" >}}) captures many, many important problems: [SAT]({{< relref "KBhnon_deterministic_turing_machines.md#boolean-formula-satisfiability" >}}), [Hamiltonian path problem]({{< relref "KBhnon_deterministic_turing_machines.md#hamiltonian-path-problem" >}}), [clique problem]({{< relref "KBhnon_deterministic_turing_machines.md#clique-problem" >}}), etc. etc.
4.  the notion of [NP-Complete]({{< relref "KBhnp_complete.md" >}})ss: "if any of these problems in \\(P\\), then all of everything in \\(NP\\) are in \\(P\\)"
