+++
title = "Interactive Proof"
author = ["Houjun Liu"]
draft = false
+++

We have prover \\(P\\) and **randomized** verifier \\(V\\). The \\(V\\) asks \\(P\\) for membership statements, and \\(P\\) responds with statements. These proofs can be used to prove membership in very powerful languages.

<div class="definition"><span>

Languages \\(L\\) with a \\(k\\) round interactive proof system, where the verifier \\(V\\) is poly randomized machine and its interacting with an all-powerful prover \\(P\\).

</span></div>

<div class="theorem"><span>

-   \\(x \in L \implies \exists\_{ \text{prover}}\\) such that \\(V\qty(x\_1, \dots, y\_{k})\\) accepts with probability \\(\geq \frac{2}{3}\\)
-   \\(x \not \in L \implies \forall \_{\text{prover}}\\) such that \\(V\qty(x\_1, \dots, y\_{k})\\) accepts with probability \\(\leq \frac{1}{3}\\)

</span></div>

<div class="example"><span>

Some stuff that lives in [IP(k)]({{< relref "KBhinteractive_proof.md" >}})

-   \\(NP \subseteq \text{IP}[1]\\), even with 1s or 0
-   \\(\text{BPP} \subseteq IP[0]\\), since \\(V\\) has randomized power already, we just throw away the prover

</span></div>


## Properties of [IP(k)]({{< relref "KBhinteractive_proof.md" >}}) {#properties-of-ip--k----kbhinteractive-proof-dot-md}


### Can we try to upper bound the power of [IP(k)]({{< relref "KBhinteractive_proof.md" >}}) {#can-we-try-to-upper-bound-the-power-of-ip--k----kbhinteractive-proof-dot-md}

<div class="theorem"><span>

[IP(k)]({{< relref "KBhinteractive_proof.md" >}}) in <ip_in_pspace>

</span></div>

<div class="proof"><span>

Fix \\(L, x\\) and a randomized poly verifier \\(V\\). Note that the goal of the prover \\(P\\), regardless of whether \\(x \in L\\) or not, is to maximize P[V accepts]. We want to find a bound for the system.

Consider the task of, given \\(x\\), compute:

\begin{equation}
\max\_{\text{provers}} P[V\ \text{accept}]
\end{equation}

We can compute the expression above in EXPTIME, and in particular PSPACE, by tracing each of the computations and reuising space.

</span></div>

But actually, there's something crazier...


### IP = PSACE {#ip-psace}

This is an extremely powreful result.

<div class="theorem"><span>

IP = PSPACE

</span></div>

<div class="proof"><span>

We have shown in \Cref{ip_in_pspace} that \\(\text{IP} \subseteq \text{PSPACE}\\), all that's left is \\(\text{PSPACE} \subseteq \text{IP}\\)

</span></div>


## NP, written as an [Interactive Proof]({{< relref "KBhinteractive_proof.md" >}}) {#np-written-as-an-interactive-proof--kbhinteractive-proof-dot-md}

<div class="theorem"><span>

For a proof system whereby the prover is all powerful, and the verifier is polytime deterministic, and they get to interact with poly number of steps, then the proof system is still NP.

</span></div>

<div class="proof"><span>

Because, at the initial step, the prover can entirely predict what the verifier is going to say, and just give the entire conversation at the first turn without interaction.

</span></div>

This is quite disappointing.


### Randomized Interactive Proofs {#randomized-interactive-proofs}

This actually becomes interesting (namely, not NP) if you allow the verifier to be randomized! Because then the prover can't predict exactly what will become sent, and the prover can't guard against everything.

For an example of this, we go to [Graph Non-Isomorphism](#graph-non-isomorphism).


## Examples {#examples}


### Graph Non-Isomorphism {#graph-non-isomorphism}

A graph \\(G\\) and \\(H\\) are if you can rename \\(G\\) to get \\(H\\) (i.e. they are same up to renaming).

-   GraphIsomorphism = {(G,H) | G and H are isomorphic}
-   GraphNonIsomorphism = {(G,H) | G and H are not isomorphic}

[Graph Isomorphism is in NP]({{< relref "KBhgraph_isomorphism_is_in_np.md" >}}). So clearly [Graph Non-Isomorphism](#graph-non-isomorphism) is in . But, how do we show that two things are **not** isomorphic? Its not known if this is in NP.

Turns out,

<div class="theorem"><span>

[Graph Non-Isomorphism](#graph-non-isomorphism) has a simple [Interactive Proof]({{< relref "KBhinteractive_proof.md" >}})!

</span></div>

<div class="proof"><span>

We have graphs \\(G\_0, G\_1\\).

-   verifier \\(V\\) --- select a bit \\(b\\) at random; set \\(H\\) to be a random isomorphic copy of \\(G\_{b}\\), send it to \\(P\\) (intuition: this should be isomorphic to isomorphic to exactly one of them, so a good \\(P\\) should tell us its isomorphic to one)
-   prover \\(P\\) --- find \\(c\\) such that \\(H\\) and \\(G\_{c}\\) is isomorphic, send \\(c\\)
-   verifier \\(V\\) --- accepts if \\(c = b\\), otherwise, reject (because ether \\(P\\) is bad or our two graphs are isomorphic)

Now let's check! Suppose \\(\qty(G\_0, G\_1) \in \neg \text{GISO}\\), that is \\(G\_0 \neq G\_1\\), then we have:

\begin{equation}
\exists\_{\text{prover}} P\qty(\text{accept}) = 1
\end{equation}

by just the "tell the truth" prover. The more interesting case is that we want to, for \\(\qty(G\_0, G\_1) \not \in \neg \text{GISO}\\), that is \\(G\_0 \cong G\_1\\), we need:

\begin{equation}
\forall\_{\text{provers}} P\qty(\text{accept}) = \frac{1}{2}
\end{equation}

"we can't be fooled".

This is in [IP(4)]({{< relref "KBhinteractive_proof.md" >}})

</span></div>
