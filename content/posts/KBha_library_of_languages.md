+++
title = "A Library of Languages"
author = ["Houjun Liu"]
draft = false
+++

## PERFECT-MATCHING {#perfect-matching}

Given a bipartite graph \\(G = \qty(U,V,E)\\), is there a perfect matching (a one to one correspondence between \\(U\\) and \\(V\\) nodes)?

This is in both [NP]({{< relref "KBhnon_polynomial_time.md" >}}) and [coNP]({{< relref "KBhconp.md" >}})

But, [PERFECT-MATCHING](#perfect-matching) is in \\(P\\)

Yet, with a [randomized algorithm]({{< relref "KBhrandomized_algorithum.md" >}}), [PERFECT-MATCHING](#perfect-matching) can be solved in parallel time \\(O\qty(\log^{2} n)\\).


### NP trivial {#np-trivial}

I hand you the matching


### Not Hall's Theorem {#not-hall-s-theorem}

**Sufficient**: Suppose \\(S \subseteq U\\), consider \\(N\qty(S) \subseteq V\\), the [neighborhood]({{< relref "KBhstructure_learning.md#local-graph-search" >}}) of \\(S\\) is \\(|N(s)|< |S|\\), then there is no perfect matching.

Sketch: suppose for contradiction there _is_ a matching, but there would be not enough space to assign everyone in \\(S\\) a deduplicated match.


### Hall's Theorem {#hall-s-theorem}

**Necessary**: if \\(G = \qty(U, V, E)\\) has no perfect matching, then such an \\(S\\) from [Not Hall's Theorem](#not-hall-s-theorem) must exist.


## PRIMES {#primes}

"very prime has a succinct certificate"

\begin{equation}
\text{PRIMES} : \qty {A \mid A\text{ is prime}}
\end{equation}

The certificate?

\begin{equation}
A \text{ prime} \Leftrightarrow \exists 1 < b < A : B, B^{2}, \dots, B^{A\*2} \not \cong \ \text{mod}\ A
\end{equation}

So \\(\text{PRIMES} \in \text{NP}\\)


## FACTORING {#factoring}

\begin{equation}
\text{FACTORING} = \qty {X, A, B \mid \text{X has a prime factor $\in [A,B]$}}
\end{equation}

\\(\text{FACTORING} \in NP\\) certificate: just give the prime factor

\\(\text{FACTORING} \in \text{coNP}\\) certificate: give the prime factorization of \\(X\\); verifier check that these numbers do multiply to \\(x\\), check that none of these numbers are in \\([A,B]\\)
