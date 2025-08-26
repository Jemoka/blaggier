+++
title = "mathematics"
author = ["Houjun Liu"]
draft = false
+++

hehehe


## formal system {#formal-system}

a [formal system](#formal-system) describes a formal [language]({{< relref "KBhalphabet.md" >}}) for...

1.  writing finite mathematical statements
2.  have a definition of what statements are true
3.  has a definition of a proof of a statement


### examples {#examples}

Every Turing Machine \\(M\\) defines some formal system \\(\mathcal{F}\\) such that \\(\Sigma^{\*}\\) string \\(w\\) represents the statement "\\(M\\) accepts \\(w\\)"

-   "true statements \\(\mathcal{F}\\)" is \\(L(M)\\)
-   a proof that \\(M\\) accepts \\(w\\) can be defined to be an accepting computation history on \\(M\\) for \\(w\\)


### interesting {#interesting}

a [formal system](#formal-system) \\(\mathcal{F}\\) is "interesting" if:

1.  mathematical statements that can be precisely described in English should be expressible in \\(\mathcal{F}\\)
2.  proofs have to be "convincing": a [turing machine]({{< relref "KBhturing_machinea.md" >}}) can check that a proof of a theorem is correct
3.  simple proofs that can be precisely described in English should be expressible in \\(\mathcal{F}\\)

---

1.  given \\((M,w)\\), there is a computable \\(S\_{M,w}\\) in \\(\mathcal{F}\\) such that \\(S\_{M,w}\\) is true in \\(\mathcal{F}\\) if and only if \\(M\\) accepts \\(w\\)
2.  the set \\(\qty {(S,P) | P\text{ is a proof of }S\text{ in }F}\\) should be decidable, because we can just run it
3.  if \\(S\\) is in \\(F\\) and there is a proof of \\(S\\) describable as a computation, then there is a proof of \\(S\\) in \\(\mathcal{F}\\) (i.e. its just the computational path)
    1.  if \\(M\\) accepts \\(w\\), then there is a proof \\(P\\) in \\(F\\) of \\(S\_{M,w}\\)


### consistent {#consistent}

"proof in \\(\mathcal{F}\\) implies truth in \\(\mathcal{F}\\)"

A formal system is "consistent"/"sound" if no false statement has a valid proof in \\(\mathcal{F}\\)


### complete {#complete}

"truth in \\(\mathcal{F}\\) implies proof in \\(\mathcal{F}\\)"

A formal system \\(\mathcal{F}\\) is complete if every true statement has a valid proof in \\(\mathcal{F}\\)


## Limitations of Mathematics {#limitations-of-mathematics}

For every [consistent](#consistent) and [interesting](#interesting) \\(\mathcal{F}\\), [Godel's Theorem](#limitations-of-mathematics) tells us that:


### Godel's incompleteness {#godel-s-incompleteness}

There are mathematical statements in \\(\mathcal{F}\\) which are true but cannot be proven in \\(\mathcal{F}\\).

---

Proof: Let \\(S\_{M,w}\\) in \\(\mathcal{F}\\) be true IFF \\(M\\) accepts \\(w\\). Let's define a Turing machine \\(G(x)\\), for which we...

1.  obtain own description \\(G\\) (recursion)
2.  construct statement \\(S' = \neg S\_{G, \varepsilon}\\)
3.  search for a proof of \\(S'\\) in \\(\mathcal{F}\\) over all finite-length strings

accept if a proof is found

Claim: S' basically says "there's no proof of S' in \\(\mathcal{F }\\)". This is another diagonalization argument; if \\(S'\\) is false, we have a contradiction; if \\(S'\\) is true, then \\(S\_{G, \epsilon}\\) returned false, meaning \\(G\\) doesn't accept \\(\epsilon\\), meaning we weren't able to find a proof in \\(\mathcal{F}\\) for \\(S'\\). So the proof of \\(S'\\) mustn't be in \\(\mathcal{F}\\).


### Godel's consistency {#godel-s-consistency}

the [consistency](#consistent) of [interesting](#interesting) and [consistent](#consistent) \\(\mathcal{F}\\) itself cannot be proven in \\(\mathcal{F}\\)

Suppose we can prove \\(\mathcal{F}\\) is consistent in \\(\mathcal{F}\\). We constructed \\(S' = \neg S\_{G,\epsilon}\\) from above which is true but has no proof in \\(\mathcal{F}\\).

Observe that \\(G\\) doesn't accept \\(\epsilon\\) if and only if there's no proof of \\(\neg S\_{G,\varepsilon}\\) in \\(\mathcal{F}\\).  Yet, if we can proof \\(\mathcal{F}\\) is consistent within \\(\mathcal{F}\\), then we can prove \\(\neg S\_{G,\varepsilon}\\): since \\(G(x)\\) accepts if \\(\neg S\_{G,\varepsilon}\\) is found, if \\(G(\varepsilon) = true \implies S\_{G,\varepsilon} = true \implies \neg S\_{G,\varepsilon}\\), but they can't be both true. So \\(\neg S\_{G, \varepsilon}\\) is true.

This contradicts the previous theorem.


### Church-Turing undecidability {#church-turing-undecidability}

The problem of checking whether or not a given statement in \\(\mathcal{F}\\) has a proof is undecidable.

Consider:

\begin{equation}
PROVABLE\_{F} = \qty {S | \text{there's a proof in $\mathcal{F}$ of $S$, or there's a proof in $\mathcal{F}$ of $\neg S$}}
\end{equation}

suppose this is decidable with a Turing Machine \\(P\\); then we can decide \\(A\_{TM}\\) using the following procedure:

-   on input \\((M,w)\\), run the TM \\(P\\) on input \\(S\_{M,w}\\)
-   if \\(P\\) accepts, then look at all proofs in \\(\mathcal{F}\\), then we know we can iterate and find the proof
-   so if we found \\(S\_{M,w}\\) is found, then accept
-   otherwise, for \\(\neg S\_{M,w}\\), reject
-   if \\(P\\) rejects, we know its not provable, so we reject
