+++
title = "Non-deterministic Turing Machine"
author = ["Houjun Liu"]
draft = false
+++

We have multiple transitions for a state, symbol pair in non-deterministic TMs.

1.  the machine may proceed according to several possible transitions
2.  the machine accepts an input if there exists an accepting computation history for the machine on the string

Here's the

{{< figure src="/ox-hugo/2024-11-05_17-43-53_screenshot.png" >}}

basically a [turing machine]({{< relref "KBhturing_machinea.md" >}}) except the transition is a subset instead of a single transition.


## \\(L\\) is in \\(NP\\) IFF there are polynomial-length proofs ("witnesses") that can be decided efficiently for membership in \\(L\\) {#l-is-in-np-iff-there-are-polynomial-length-proofs--witnesses--that-can-be-decided-efficiently-for-membership-in-l}

There exists some constant \\(k\\) and a polynomial-time Turing-machine \\(V\\),

\begin{equation}
L = \qty {x \mid  \exists y \in \Sigma^{\*}, |y| \leq |x|^{k}, V(x,y) \text{ accepts}}
\end{equation}

IFF \\(L \in NP\\)

We can call the \\(V\\) the polynomial length proof; we can call \\(y\\) the "witness"

---

Proof

1.  if \\(L\\) exists, we create an \\(N\\) to guess \\(y\\) of length at most \\(|x|^{k}\\) nondeterministically, run \\(V(x,y)\\) on each (which is polynomial time), and output; this means that \\(L(N)\\) is \\(L\\)
2.  if there is an NTM \\(N\\) that decides \\(L\\) (so \\(L \in NP\\)), we define \\(V(x,y)\\) to accept IFF \\(y\\) encodes an accepting computation history of \\(N\\) on \\(x\\) (now, \\(|y| \leq |x|^{k}\\)  because \\(N\\) is an NP NTM, and \\(V(x,y)\\) is polynomial because we are just iterating over the computation history)


## Boolean Formula Satisfiability {#boolean-formula-satisfiability}

Boolean formulas are logical expressions, like:

\begin{equation}
\phi = \qty(\neg x \wedge { y})  \vee z
\end{equation}

A **satisfying assignment** is a setting of variables which makes the formula above true.

A Boolean formula is **satisfiable** if there is a true/false setting to the variables that makes the formula true.

\begin{equation}
SAT = \qty {\phi \mid \phi\text{ is satisfiable}}
\end{equation}


### 3cnf-formula {#3cnf-formula}

This is a particular type of satisfiable formula

\begin{equation}
\qty(x\_1 \vee \neg x\_2 \vee x\_3) \wedge\qty(x\_4 \vee x\_2 \vee x\_5) \wedge\qty(x\_3 \vee x\_2 \vee \neg x\_1)
\end{equation}

\begin{equation}
3SAT = \qty {\phi \mid \phi\text{ is satisfiable and 3cnf}}
\end{equation}

We claim that \\(3SAT \in NP\\); we can express \\(3SAT\\) as:

\begin{equation}
3SAT = \qty {\phi \mid \phi\text{ is in 3cnf and $\exists$ a string $y$ \hat{t} encodes an satisfyingly assignment}}
\end{equation}

in particular,

\begin{equation}
3SAT-CHECK = \qty {(\phi, y) \mid \phi\text{ is in 3cnf and $y$ is a satisfying assignment}}
\end{equation}

is in \\(P\\).

(actually all of SAT is in \\(NP\\))


## [Time Complexity]({{< relref "KBhtime_complexity.md" >}}) of [Non-deterministic Turing Machines]({{< relref "KBhnon_deterministic_turing_machines.md" >}}) {#time-complexity--kbhtime-complexity-dot-md--of-non-deterministic-turing-machines--kbhnon-deterministic-turing-machines-dot-md}

First,

\begin{equation}
\text{TIME}(t(n)) \subseteq \text{NTIME}(t(n))
\end{equation}

where \\(\text{NTIME}\\) is the set of languages such that there exists a [Non-deterministic Turing Machine]({{< relref "KBhnon_deterministic_turing_machines.md" >}}) which decides the language within \\(t(n)\\) time.


## accepting {#accepting}

accepting on [Non-deterministic Turing Machines]({{< relref "KBhnon_deterministic_turing_machines.md" >}}) is a history of \\(N\\) on \\(w\\) such that we have a sequence \\(c\_0, ..., c\_{t}\\) where

1.  \\(C\_{0}\\) is the start configuration of \\(q\_0 w\\)
2.  \\(C\_{t}\\) is an accepting configuration (we are in an accepting state)
3.  each configuration \\(C\_{i}\\) yields \\(C\_{i+1}\\)

accepting in time \\(t\\) means that such a history exists.

\\(N\\) has a time complexity of \\(T(n)\\) if for all \\(n\\), for all inputs of length \\(n\\) and for all histories, \\(N\\) halts in \\(T(n)\\) time. (we can get it to halt for all strings by having a clock, and computing \\(n\\) and stopping \\(T\\) as needed; if \\(n\\) is correct, then we don't actually change the language that \\(T\\) recognized)


## non deterministic [turing machine]({{< relref "KBhturing_machinea.md" >}})s are not more powerful than [turing machine]({{< relref "KBhturing_machinea.md" >}})s {#non-deterministic-turing-machine--kbhturing-machinea-dot-md--s-are-not-more-powerful-than-turing-machine--kbhturing-machinea-dot-md--s}

Theorem: every non-deterministic Turing machine \\(N\\) can be transformed into a Turing machine \\(M\\) that accepts only strings \\(N\\) accepts.

(We don't care about rejection in this case, because "some rejection state" seems odd if there are some that's not a rejection state)

---

Proof:

We pick an ordering of strings over \\(\qty {Q \cup \Gamma \cup \\#}^{\*}\\).

To check if we accept \\(w\\) with \\(M\\): for all strings in \\(\qty {Q \cup \Gamma \cup \\#}^{\*}\\), check if for \\(D \in \qty {Q \cup \Gamma \cup \\#}\\), and \\(D = C\_0 \\# ... \\# C\_{k}\\), if the sequence \\(C\_0 ... C\_{k}\\) is an accepting computation history in \\(N\\) (that is, \\(C\_0\\) is a valid start configuration, and \\(C\_{k}\\) is (1) a valid accepting one) that (2) \\(C\_{0}\\) corresponds to the string \\(w\\). If so, accept.

(i.e. we precompute paths)


## clique problem {#clique-problem}

a \\(k\\) clique is a subgraph which is "complete" (all possible edges are connected) with \\(k\\) nodes

assume some encoding of graphs (adjacency matricies):

the language

\begin{equation}
\text{CLIQUE} = \qty {(G, k) \mid G\text{ is undirected with $k$ clique}}
\end{equation}

In particular, we claim that \\(\text{CLIQUE} \in \text{NTIME}\qty (n^{c})\\) for some \\(c>1\\). We do this by....

-   nondeterministically guess a subset \\(S \subseteq V\\) with \\(|S| = k\\)
    -   for all pairs of \\(u,v \in S\\), if \\((u,v)\\) is not in \\(E\\), then reject
-   accept

this is [NP-Complete]({{< relref "KBhnp_complete.md" >}}), see also [many, many NP-Complete thins]({{< relref "KBhnp_complete.md#many-many-np-complete-things" >}})


## Hamiltonian path problem {#hamiltonian-path-problem}

A Hamiltonian path is a path which goes through an node exactly once

\begin{equation}
\text{HAMPATH} = \qty {(G, s,t) \mid G\text{ is directed with path $s,k$}}
\end{equation}

this is also  \\(\text{HAMPATH} \in \text{NTIME}\qty (n^{c})\\) for some \\(c>1\\). We do this by....

Again find all paths and guess and check: guess a sequence of paths \\(v\_1, ..., v\_{|v|}\\), etc.
