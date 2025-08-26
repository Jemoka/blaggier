+++
title = "(NOTES COPY) Relativization Barrier to P vs. NP"
author = ["Houjun Liu"]
draft = false
+++

Key Takeaway: a powerful technique, diagonalization, is doomed to fail at resolving P vs. NP.


## Context {#context}

Complexity theory is generally the study of impossibilities. This is also an impossibility result. Here are some impossibility results!

1.  The reals are uncountable [Cantor 1874]
2.  [Godel's incompleteness]({{< relref "KBhmathematics.md#godel-s-incompleteness" >}}) theorem [Godel 1931]
3.  [halting problem]({{< relref "KBhmapping_reduction.md#halting-problem" >}}) is [undecidable]({{< relref "KBhturing_machinea.md#decidable" >}}) [Turing 1936]
4.  [time hierarchy theorem]({{< relref "KBhtime_complexity.md#time-hierarchy-theorem" >}}) [Hartmanis-Stearns 1965] --- \\(\text{P}\\) is a strict subset of \\(\text{EXP}\\)

Notice! All of these theorems uses a **single technique**---diagonalization.


## diagonalization {#diagonalization}

tl;dr: "simulate, and then, at the last minute, flip! and do the opposite." Notice that all diagonalization problems are [simulation result](#simulation-result)s---you have a Turing Machine for the thing and you watch it do something / you modify it and give an algorithm.


### simulation result {#simulation-result}

A hallmark of simulation results is that they continue to hold if both machines get access to the same oracle. All simulation results [relativize](#relativization)s.


#### relativization {#relativization}

When a result continue to hold when both sides get access to the same oracle, we call these proves that "[relativize](#relativization)". Everything is a [simulation result](#simulation-result) relatives (just re-simulate with oracles).


## Here we go! {#here-we-go}

Strangely enough, these are both true facts:

<div class="theorem"><span>

\begin{equation}
\exists \text{A}, \text{P}^{A} = \text{NP}^{A}
\end{equation}

</span></div>

<div class="theorem"><span>

\begin{equation}
\exists \text{B}, \text{P}^{B} \neq \text{NP}^{B}
\end{equation}

</span></div>

The philosophical takeaway is that, regardless of what your proof of \\(\text{P} =^{?} \text{NP}\\) relationship is, your proof better break when an arbitrary oracle is added. That is, its proof has to be "sensitive" to additional oracles. That is, it's proof better **not** [relativize](#relativization). That is, they better **not** be [diagonalization](#diagonalization).

(fun fact/drama: \\(\exists \text{B}, \text{P}^{B} \neq \text{NP}^{B}\\) is true for random oracle \\(B\\), which gives us evidence that \\(\text{P} \neq \text{NP}\\)).


### Review: Oracle Turing Machine {#review-oracle-turing-machine}

An oracle TM is a TM \\(M\\) with an extra "oracle tape" that it can read-write to. \\(M\\) has extra **unit-time** operation "ORACLE".

If \\(z \in \qty {0,1}^{\*}\\), denotes the contents of the oracle tape, the entire string is erased and replaced with \\(1\\) or \\(0\\).

<div class="definition"><span>

For language \\(A \in \qty {0,1}^{\*}\\), $A$-oracle TM is an oracle Turing machine where its oracle queries are answered according to whether \\(z \in A\\).

</span></div>


### Equality under A {#equality-under-a}

Let's first tackle:

<div class="theorem"><span>

\begin{equation}
\exists A, \text{P}^{A} = \text{NP}^{A}
\end{equation}

</span></div>

Sketch: we want to design an \\(\text{A}\\) a lot more useful for \\(\text{P}\\) than to \\(\text{NP}\\)

Answer: \\(A\\) is any P-SPACE complete language.


#### strategy {#strategy}

-   \\(P \subseteq NP \subseteq PSPACE\\) --- [polynomial hierarchy]({{< relref "KBhpolynomial_hierarchy.md" >}})
-   Show: (i) \\(\text{NP}^{A} \subseteq \text{PSPACE}\\), (ii) \\(\text{PSPACE} \subseteq \text{P}^{A}\\)
-   Then notice: \\(\text{P} \subseteq \text{NP}\\) [relativize](#relativization)s (TODO show this)

Finally, double containment!


#### i {#i}

<div class="lemma"><span>

Let \\(\text{L} \in \text{NP}^{A}\\), we desire that \\(\text{L} \in \text{PSPACE}\\)

</span></div>

<div class="proof"><span>

Let \\(\text{L} \in \text{NP}^{A}\\). So \\(\exists\\) an NTM \\(N\\) that decides \\(L\\).

On input \\(x\\), you as a PSPACE machine simulate all possible computation branches up to \\(\text{N}\qty(x)\\) Whenever it queries \\(A\\), since \\(A\\) is in PSACE, you as a PSPACE machine can also do it.

Equivalently, \\(\text{NP} \subseteq \text{PSPACE}\\) relativizes, and \\(\text{PSPACE}^{A} = \text{PSPACE}\\) if \\(A \in \text{PSPACE}\\)

</span></div>


#### ii {#ii}

<div class="lemma"><span>

Let \\(\text{L} \in \text{PSPACE}\\), we desire that \\(\text{L} \in P^{\text{A}}\\)

</span></div>

<div class="proof"><span>

Recall that \\(A\\) is PSPACE-complete. So then by definition we can just pipe \\(L\\) through the poly-time reduction to the \\(A\\) problem using \\(\text{P}^{A}\\), and then call the oracle once.

</span></div>


### Inequality under B {#inequality-under-b}

Let's now find:

<div class="theorem"><span>

\begin{equation}
\exists B, \text{P}^{B} \neq \text{NP}^{B}
\end{equation}

</span></div>


#### Seperating Language {#seperating-language}

The separating language \\(L\_{B} \in NP^{B} \backslash P^{B}\\) (i.e. which shows the oracle \\(B\\) causes inequality)

\begin{equation}
\text{L}\_{B} = \qty {1^{n} : B\text{ contains } \geq 1 \text{ length n strings }}
\end{equation}

that is:

\begin{equation}
\text{B} = \bigcup\_{n=0}^{\infty} B\_{n}
\end{equation}

where

\begin{equation}
B\_{n} = \qty {y \in B : |y| = n}
\end{equation}

That is, \\(1^{n} \in L\_{B} \Leftrightarrow B\_{n} \neq  \emptyset\\)


#### The Oracle {#the-oracle}

Our \\(B\\) will be such that \\(|B\_{n}| \in \qty { 0, 1}\\), for all \\(n\\). That is, for a given distinct length, we either have one string of that length or no strings of that length in \\(B\\).


#### Part 1 {#part-1}

First, we want to show that no matter choice of \\(B\\), \\(L\_{B} \in NP^{B}\\).

<div class="lemma"><span>

\\(\forall  B, L\_{B} \in NP^{B}\\), in particular \\(\exists\\) B oracle TM \\(M^{B}\\) such that \\(x \in L\_{B} \Leftrightarrow \exists y, M\qty(x,y)\\) accepts.

</span></div>

<div class="proof"><span>

Given \\(1^{n}\\), we want to determine if \\(1^{n} \in L\_{B}\\) using an \\(NP^{B}\\) machine. \\(1^{N} \in L\_{B}\\) if and only if we can find \\(\qty {y \in  B : |y| = n} \neq \emptyset\\).

So our oracle can just be \\(y \in B\_{n}\\).

</span></div>

All that's left is to show that \\(L\_{B} \not \in P^{B}\\).


#### Part 2 {#part-2}

We now want to show that \\(L\_{B} \not \in P^{B}\\)

Let \\(M\_1, M\_{2} \ldots\\) be the enumeration of all polytime oracle Turing machines.

Initially, \\(B = \emptyset\\).

Construct \\(B\\) in stages \\(i = 1, 2, \ldots\\) where \\(i\\)  stage ensures that \\(M\_{i}\\) does not decide \\(L\_{B}\\). At stage \\(i \in \mathbb{N}\\), there exists \\(n\\) that is large enough 1) \\(2^{n} > \text{poly}\qty(n)\\), so that we have space to "sneak a string", see below and 2) also such that no length \\(n\\) string has been included in \\(B\\) yet. That is, we desire, \\(B\_{n} = \emptyset\\) for now.

Now let's run \\(M\_{i}\\) on \\(1^{n}\\), at some point it makes it first query \\(y\_{1} \in^{?} \qty {0,1}^{\*}\\) to \\(B\\) oracle. This is where we commit that \\(y\_{1} \not \in B\\). After \\(y\_1, ..., y\_{j}\\) (poly many, since \\(P^{B}\\) can only make poly oracle calls), our machine will say a judgment about \\(B\\).

Suppose \\(M\_{i}\qty(1^{n})\\) accepts; then it thinks \\(B\_{n} \neq \emptyset\\). We will actually keep \\(B\_{n} = \emptyset\\) (notice our oracle didn't lie).

Suppose \\(M\_{i}\qty(1^{n})\\) rejects; then we can just add a string to make \\(B\_{n} = 1\\) that our \\(P^{B}\\) haven't asked yet. Here we need \\(n\\) is large enough (\\(2^{n} > \text{poly}\qty(n)\\)).

Since our machine made \\(\leq \text{poly}\qty(n)\\) many queries, and \\(|\qty {0,1}^{n}| = 2^{n}\\), we can add a string to make \\(B\_{n} = 1\\) if we want to and we won't run out.

(TODO this requires a bunch of faff to be formal, such as keep around the largest next value).


## Fun: other barriers {#fun-other-barriers}

-   algebrization barrier
-   natural proof barrier
