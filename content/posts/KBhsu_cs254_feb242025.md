+++
title = "SU-CS254 FEB242025"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}


## Notation {#notation}


## New Concepts {#new-concepts}

-   [Interactive Proof]({{< relref "KBhinteractive_proof.md" >}})
-   [IP(k)]({{< relref "KBhinteractive_proof.md" >}})


## Important Results / Claims {#important-results-claims}

-   [An Anthropomorphic View of NP](#an-anthropomorphic-view-of-np)
-   [Graph Isomorphism is in NP]({{< relref "KBhgraph_isomorphism_is_in_np.md" >}})
-   [IP = PSACE]({{< relref "KBhinteractive_proof.md#ip-psace" >}})


## Questions {#questions}


## Interesting Factoids {#interesting-factoids}

---


## An Anthropomorphic View of NP {#an-anthropomorphic-view-of-np}

For some string \\(x\\), and language \\(L\\). We wonder:

\begin{equation}
x \in^{?} L
\end{equation}

We can consider NP as a two party game, whereby:

-   **prover**: looks at \\(x, L\\), and sends some proof \\(w\\) for \\(x \in L\\)
-   **verifier**: does some polytime computation, and either accepts or rejects

We want to make sure that this system follows the following patterns:

-   \\(x \in L \implies \exists  y \text{ s.t. } V\qty(x,y)\\) accepts
-   \\(x \not \in L \implies \forall  y, V\qty(x,y)\\) rejects

In general, think of the prover as actively malicious, in that it will try to convince you \\(x \in L, \forall x\\)


## Interactive Proofs {#interactive-proofs}

What happens if you allow the prover and verifier to interact? This is of course a larger class than NP, but is it strictly larger?

Suppose the prover and verifier could interact?


### Interactive  {#interactive}

See [Interactive Proof]({{< relref "KBhinteractive_proof.md" >}})
