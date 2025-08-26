+++
title = "Oracle Reduction"
author = ["Houjun Liu"]
draft = false
+++

## Oracle Turing Machine {#oracle-turing-machine}

An [Oracle Turing Machine](#oracle-turing-machine) \\(M\\) is a machine that can ask membership queries in a set \\(B \subseteq \Gamma^{\*}\\) on a special "oracle tape". This Turing machine will receive an answer in one step: in particular, if the string written on the oracle tape is in \\(B\\), then the state will be set to \\(q\_{yes}\\), and otherwise, we move to \\(q\_{no}\\)

Importantly, \\(B\\) does **not** have to be decidable. We think of them as subroutines.


### Recognizing and Deciding {#recognizing-and-deciding}

-   We say that \\(A\\) is recognizable with \\(B\\) if there is an oracle TM \\(M\\) with oracle \\(B\\) that recognizes \\(A\\)
-   We say that \\(A\\) is decidable with \\(B\\) if there is an oracle TM \\(M\\) with oracle \\(B\\) that decides \\(A\\)

When \\(A\\) is decidable with \\(B\\), we call \\(A\\) [Turing Reduce](#oracle-turing-machine)s to \\(B\\); that is, \\(A \leq\_{T} B\\).


### Some example {#some-example}


#### \\(A\_{TM} \leq\_{T} HALT\_{TM}\\), \\(A\_{TM} \leq\_{T} HALT\_{TM}\\) {#a-tm-leq-t-halt-tm-a-tm-leq-t-halt-tm}

On input \\((M,w)\\), if \\((M,w)\\) is in \\(HALT\_{TM}\\), then run \\(M(w)\\) sound output the answer; otherwise, reject.

On input \\((M,w)\\), we want to decide if \\(M\\) halts on \\(w\\), so we just check that \\((M, w) \in A\_{TM}\\) or swap accept and reject of \\(M\\) to get \\(M'\\), and if \\((M',w) \in A\_{TM}\\), then we also accept. Otherwise, we reject.


## [mapping reduction]({{< relref "KBhmapping_reduction.md" >}})s and [turing reductions](#oracle-turing-machine) {#mapping-reduction--kbhmapping-reduction-dot-md--s-and-turing-reductions--org0b02025}


### mapping reduction is weaker than turing reduction {#mapping-reduction-is-weaker-than-turing-reduction}

if \\(A \leq\_{M} B\\), then \\(A \leq\_{T} B\\)

if \\(A \leq\_{M} B\\), then there is a [computable function]({{< relref "KBhmapping_reduction.md#computable-function" >}}) \\(f\\) for every \\(w\\). So, to decide \\(A\\) on string \\(w\\), we compute \\(f(w)\\) and check if \\(f(w) \in L(B)\\) by calling the oracle.


### for instance... {#for-instance-dot-dot-dot}

notice:

\begin{equation}
\neg HALT\_{TM} \leq\_{T} HALT\_{TM}
\end{equation}

(because we just look it up and return the opposite)

and

\begin{equation}
\neg HALT\_{TM} \not \leq\_{M} HALT\_{TM}
\end{equation}

because if this were to be true than \\(\neg HALT\_{TM}\\) should be recognizable since \\(HALT\_{TM}\\) is recognizable.


## SUPERHALT {#superhalt}

\begin{equation}
SUPERHALT = \qty {(M,x) | M, \text{ with an oracle for the halting problem, halts on $x$ } }
\end{equation}

We show that this problem can't be decided through diagonalization. For contradiction suppose \\(H\\) decides \\(SUPERHALT\\). Let us define now a \\(D(X)\\) for which if \\(H(X,X)\\)  accepts we loop, and otherwise accept. Now, consider \\(D(D)\\). Suppose \\(D(D)\\) accepts, this means that \\(H(D,D)\\) rejected, meaning \\(D\\) didn't halt on \\(D\\), but that contradicts that \\(D(D)\\) accepts. Suppose \\(D(D)\\) rejects, that means that \\(H(D,D)\\) accepts, but that means \\(D(D)\\) is supposed to loop. Contradiction.


### Given any oracle O, there's always a harder problem that cannot be decided with that oracle O {#given-any-oracle-o-there-s-always-a-harder-problem-that-cannot-be-decided-with-that-oracle-o}

-   SUPERHALT0 = HALT = for (M,x), M halts on x
-   SUPERTHALT1 = for (M,x), M with an oracle for HALTtm, halts on x
-   SUPERTHALTn = for (M,x), M with an oracle for SUPERHALTn-1, halts on x
