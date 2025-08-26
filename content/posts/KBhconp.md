+++
title = "coNP"
author = ["Houjun Liu"]
draft = false
+++

[coNP]({{< relref "KBhconp.md" >}}) is the set:

\begin{equation}
\text{coNP}= \qty {\neg L \mid L \in NP}
\end{equation}

"\\(L\\) is in [coNP]({{< relref "KBhconp.md" >}}) if there exists a poly-time verifier for the "no" instances of this language". Formally:

\begin{equation}
L \in \text{coNP} \Leftrightarrow \exists \text{polytime} V s.t. x \in L: \exists  w \in \qty {0,1}^{\text{poly}\qty(x)}, V\qty(x,w) = 1
\end{equation}

Some [coNP]({{< relref "KBhconp.md" >}}) stuff: [UNSAT]({{< relref "KBhunsat.md" >}}), NOT-3COL, etc.


## \\(P \subseteq coNP\\) {#p-subseteq-conp}

Because we just invert the judgments after running \\(P\\) to get the whole set.

Meaning: recall that \\(L \in P \implies  \neg L \in P \implies \neg L \in NP \implies L \in coNP\\).

"Take \\(\text{P} \subseteq \text{NP}\\), 'co' both sides


## if \\(\text{P}= \text{NP}\\), then \\(\text{NP} = \text{coNP}\\) {#if-text-p-text-np-then-text-np-text-conp}

\begin{equation}
L \in \text{NP} \underbrace{\implies}\_{\text{(given)}}\ L \in \text{P} \implies L \in \text{coNP}
\end{equation}

More importantly, this means that \\(\text{NP} \neq \text{coNP}\\) we see that the contrapositive of this statement implies \\(\text{P} \neq \text{NP}\\).


## coNP complete {#conp-complete}

For every \\(A\\) in coNP, there is a polynomial time reduction from \\(A\\) to \\(B\\) (that is, \\(B\\) is coNP-hard)


### UNSAT {#unsat}

\begin{equation}
\text{UNSAT} = \qty {\phi \mid \phi \text{ is a boolean formula and nothing satisfies $\phi$}}
\end{equation}

try all and see that they all fail / not (something satisfies phi)

for \\(A \in coNP\\), we show that \\(A \leq UNSAT\\). For some input \\(w \in A\\), we can reduce \\(w\\) to some \\(\phi\\) for \\(\neg A\\) since \\(\neg A \in NP\\) through [Cook-Levin Theorem]({{< relref "KBhcook_levin_theorem.md" >}}).

\\(w \in \neg A \implies \phi \in SAT\\); meaning in particular \\(w \not\in  \neg A \implies \phi \not\in SAT\\); so \\(w \in A \implies \phi \in UNSAT\\).


### tautology {#tautology}

\begin{equation}
\text{TAUTOLOGY} = \qty {\phi \mid \phi \text{ is a boolean formula and every variable assignment satisfies $\phi$}}
\end{equation}


#### in coNP {#in-conp}

-   directly: for all assignments of values, check that they accept
-   complement: the complement of the language of non-trivial (i.e. there are some unsatisfying assignment) formulas


#### in coNP-complete {#in-conp-complete}

\begin{equation}
\text{TAUTOLOGY} = \qty {\phi \mid \neg \phi \in \text{UNSAT}}
\end{equation}

because we can just write a reduction \\(\text{UNSAT} \leq\_{p} \text{TAUT}\\) through simply inverting \\(\phi\\) on an input.


### FACTORING {#factoring}

\begin{equation}
\qty {(m,n) \mid m > n > 1\text{ are integers, there is a prime factor $p$ of $m$ where $n \leq p < m$}}
\end{equation}

if this is in \\(p\\), we could probably break public-key cryptography currently in use.

Importantly, \\(\text{FACTORING} \in NP \cap coNP\\). Factoring is in NP trivially because you can just give me the factors.

FACTORING is in coNP because the prime factorization of \\(m\\) can be given to you \\(p\_1 ... p\_{k}\\); we can use PRIMES (below) to check that each \\(p\\) is prime; then we can just look for the \\(p\\) above \\(n\\), then \\((m,n)\\) is in FACTORING, otherwise, it is not.

So both FACTORING is in NP, and not FACTORING is in NP, so FACTORING is in NP intersect coNP.


### PRIMES {#primes}

\begin{equation}
\text{PRIMES} = \qty {n \mid n\text{ is prime}}
\end{equation}

this is in \\(P\\)

<https://annals.math.princeton.edu/wp-content/uploads/annals-v160-n2-p12.pdf>
