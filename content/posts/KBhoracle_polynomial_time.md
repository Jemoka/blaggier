+++
title = "Oracle Polynomial Time"
author = ["Houjun Liu"]
draft = false
+++

Recall: [Oracle Turing Machine]({{< relref "KBhoracle_reduction.md#oracle-turing-machine" >}})s is a machine which has oracle \\(B \subseteq \Gamma^{\*}\\) which lets you ask "if \\(z \in B\\), then do something, otherwise do something else" and check that in ONE STEP.

We have:

\begin{equation}
P^{B} = \qty {L \mid L \text{{ can be decided by a polynomial-time TM with oracle for $B$ }}}
\end{equation}

For example \\(P^{\text{SAT}}\\) are languages we can decide in polynomial time once we have an oracle in SAT, and \\(P^{\text{NP}}\\) are languages decidable by some [Oracle Polynomial Time]({{< relref "KBhoracle_polynomial_time.md" >}}) \\(TM\\) for some \\(B \in NP\\).

Notice that \\(P^{\text{NP}} \subseteq P^{\text{SAT}}\\) because whenever we want to query the oracle \\(NP\\) we first poly-reduce it to SAT, then ask SAT. This doesn't leave poly-time for the loop-up step.


## some examples {#some-examples}


### Polynomial Oracles {#polynomial-oracles}

We know that \\(P^{P} \subseteq P\\) (this is because instead of looking up the oracle, we can just do it ourselves in poly-time)


### Non-Polynomial Oracles {#non-polynomial-oracles}

We also know that \\(NP \subseteq P^{NP}\\), because for \\(L \in NP\\), we can just solve it in NP by guessing every input and checking with our oracle in one step.


### CoNP Oracles {#conp-oracles}

Also, \\(\text{coNP} \subseteq P^{\text{NP}}\\), we can ask the oracle for the answer, and then negate it. By definition, since \\(\neg L \in \text{NP}\\) for \\(L \in \text{coNP}\\), we can simply solve a language \\(\in \text{coNP}\\) by querying the oracle for the corresponding NP language and then reverse it


## Open Questions {#open-questions}

\begin{equation}
NP =^{?} NP^{\text{NP}}
\end{equation}

\begin{equation}
\text{coNP} =^{?} NP^{NP}
\end{equation}


## Logic Minimization {#logic-minimization}

Suppose two boolean formulas \\(\phi\\) and \\(\psi\\) over the variables \\(x\_1, ..., x\_{n}\\) if they have the same value on every assignment of variables (that is, ever assignment that satisfies \\(\phi\\) using \\(x\_{j}\\) choices also satisfies \\(\psi\\) with the same \\(x\_{j}\\) choices).

A Boolean formula \\(\phi\\) is **minimal** if there are no smaller formulas equivalent to \\(\phi\\).

\begin{equation}
\text{{MIN-FORMULA}} = \qty {\phi \mid \phi \text{{ is min }}}
\end{equation}

---

Proof:

Let's define:

\begin{equation}
\text{NEQUIV} = \qty {(\phi, \psi) \mid \phi, \psi \text{ not equivalent }}
\end{equation}

in particular, \\(\text{NEQIV} \in NP\\) because to check if something is in \\(\text{NEQIV}\\) we simply has to guess all assignments and check if any of them are not equivalent.

Now, we can solve \\(\text{MIN-FORMULA}\in  \text{coNP}^{\text{NEQIV}}\\) because, given a formula \\(\phi\\), we try all the \\(\psi\\) smaller than \\(\phi\\). If every \\((\phi, \psi) \in \text{NEQIV}\\), accept. Otherwise, reject.
