+++
title = "SU-CS254B APR212025"
author = ["Houjun Liu"]
draft = false
+++

## NP-Intermediate {#np-intermediate}

{{< figure src="/ox-hugo/2025-04-21_15-07-04_screenshot.png" >}}

If \\(P = NP\\), then no distinction between \\(P\\) and \\(NP\\), but...

<div class="theorem"><span>

If \\(\text{P} \neq \text{NP}\\), then exists "NP-intermediate" problem such that \\(L \in \text{NP}\\)  such that \\(L \not \in P\\) and \\(L\\) is **not** NP-complete.

</span></div>

But today, we will prove a weaker's version.


### Ladner's Theorem {#ladner-s-theorem}

Weaker's Ladner's theorem:

<div class="theorem"><span>

Assuming \\(\text{SAT}\\) requires \\(2^{\Omega\qty(n)}\\), then there are NP-intermediate languages.

</span></div>


#### PadSAT {#padsat}

Consider:

\begin{equation}
\text{PadSAT}\_{m} = \qty {\langle \varphi, 1^{m} \rangle : \varphi \in \text{SAT}}
\end{equation}

This is easier than SAT since you have a bigger \\(n\\) artificially, and you can throw away the \\(m\\).


#### Proof idea {#proof-idea}

Choose \\(m\\) appropriately so that [PadSAT](#padsat) falls in the sweet spot between \\(P\\) and \\(NP\\) complete. In particular, we choose:

\begin{equation}
\text{PadSAT} = \qty { \langle \varphi, 1^{2^{\sqrt{|\varphi|}}} \rangle, \phi \in \text{SAT}}
\end{equation}

Meaning, \\(N = n+2^{\sqrt{n}}}=2^{\theta\qty(\sqrt{n})}\\).

We show three things:

1.  PadSAT is in NP (witness is just the satisfying assignment)
2.  [PadSAT not in P](#padsat-not-in-p)
3.  [PadSAT is not NP-Complete](#padsat-is-not-np-complete)


#### PadSAT not in P {#padsat-not-in-p}

<div class="lemma"><span>

[PadSAT](#padsat) is not in P

</span></div>

<div class="proof"><span>

Assume for contradiction PadSAT is in P, meaning \\(\exists\\) algorithm in polytime that decides PadSAT in poly(N) time; there is an \\(2^{\theta\qty(\sqrt{n})}\\) time algorithm for SAT.

1.  pad the input to length using \\(2^{\theta\qty(\sqrt{n})}\\) time
2.  solve using the oracle, which takes at most \\(2^{\theta\qty(\sqrt{n})}\\) time

note that this contradicts our assumption that SAT is in \\(2^{\Omega\qty(n)}\\).

</span></div>


#### PadSAT is not NP-Complete {#padsat-is-not-np-complete}

<div class="lemma"><span>

[PadSAT](#padsat) is not NP complete

</span></div>

<div class="proof"><span>

Suppose for the sake of contradiction that [PadSAT](#padsat) _is_ NP-complete. We will see that \\(\text{SAT} \leq\_{P} \text{PadSAT}\\), which contradictions the assumption.

Consider: \\(\Phi \stackrel{?}{\in} \text{SAT}\\) with \\(N = |\Phi|\\) where, after a Poly(N) reduction, we have \\(\langle \varphi, 1^{2^{\sqrt{|\phi|}}} \rangle\\) where \\(\Phi \in \text{SAT} \Leftrightarrow \varphi \in \text{SAT}\\) by the assumption.

Now, consider what \\(|\varphi| = n\\) is in terms of \\(N\\):

-   \\(n + 2^{\sqrt{n}} = \text{poly}\qty(N)\\)
-   IFF \\(2^{\theta \qty(\sqrt{n})} = \text{poly} \qty(N)\\)
-   IFF \\(\theta \qty(\sqrt{N}) = \theta \qty(\log N)\\)
-   IFF \\(n = \theta \qty(\log^{2} N)\\)

this is compression! Meaning, we can run an extraction procedure

</span></div>
