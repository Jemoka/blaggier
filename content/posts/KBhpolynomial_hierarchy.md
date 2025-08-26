+++
title = "polynomial hierarchy"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\text{PH} = \bigcup\_{c \in \mathbb{N}} \Sigma\_{c} = \bigcup\_{c \in \mathbb{N}} \pi\_{c}
\end{equation}

"a language is in the polynomial hierarchy if it can be described with a constant number of qualifiers"


## results and conjectures {#results-and-conjectures}


### [polynomial hierarchy]({{< relref "KBhpolynomial_hierarchy.md" >}}) conjecture {#polynomial-hierarchy--kbhpolynomial-hierarchy-dot-md--conjecture}

"the [polynomial hierarchy]({{< relref "KBhpolynomial_hierarchy.md" >}}) is infinite"---that is, each arrow to a harder language is strict.

\\(P \neq NP\\), \\(NP \neq \pi\_{2}\\)


### PSPACE bounds the entire hierarchy {#pspace-bounds-the-entire-hierarchy}

\\(\text{PH} \subseteq \text{PSPACE}\\)

because for every \\(\exists\\) you only have to keep one of it around.


### polynomial hierarchy collapses {#polynomial-hierarchy-collapses}

\\(\text{P} = \text{NP} \implies \text{P} = \text{PH}\\)

"the polynomial hierarchy collapses to \\(P\\)" We study PH because it captures problems that are solvable efficiently if \\(\text{P} = \text{NP}\\).

---

Recall--if \\(\text{P} = \text{NP}\\), then \\(\text{P} = \text{NP} = \text{coNP}\\). The fact that \\(\text{P} = \text{NP}\\) lets you **remove** a quantifier, be it exists because \\(\text{P} = \text{NP}\\) for all. Our claim is that:

\\(\text{P} = \text{NP}\\), then \\(\text{ECLIQUE} \in P\\). Recall [ECLIQUE]({{< relref "KBheclique.md#eclique" >}})

Recall [ECLIQUE]({{< relref "KBheclique.md#eclique" >}}) can be written as:

\begin{align}
&\exists S \subseteq V, |S| = k, \text{ s.t. $S$ is k-clique} \\\\
&\forall S' \subseteq V, |S'| = k+1, \text{ s.t. $S'$ is not k-clique}
\end{align}

to show the collapse, we define an "inner language" which captures the second half of this expression:

\begin{equation}
\text{MQ} = \qty {\langle G,S,k \rangle, \forall S' \subseteq V, |S'| = k+1, S \text{ is clique, $S'$ is not, $| S | = k$}}
\end{equation}

MQ is the language with a poly-time checkable for-all, meaning its in [coNP]({{< relref "KBhconp.md" >}}); using our assumption now, its also in [P]({{< relref "KBhtime_complexity.md#polynomial-time" >}}).

Therefore, we can write an equivalent [ECLIQUE]({{< relref "KBheclique.md#eclique" >}}) expression of the shape

\begin{equation}
\text{ECLIQUE} = \qty {\langle G,k \rangle: \exists S \subseteq V, |S| = k, MQ\qty(G,S,k) = 1}
\end{equation}

now this is in [NP]({{< relref "KBhnon_polynomial_time.md" >}}) now, since we claim \\(\text{MQ} \in P\\). Finally if \\(\text{NP} = \text{P}\\), we see that \\(\text{ECLIQUE} \in P\\).


#### less dramatic collapse {#less-dramatic-collapse}

Suppose we only have \\(\Sigma\_{k} = \Pi\_{k}\\), then \\(\text{PH} = \Sigma\_{k} = \Pi\_{k}\\) (because we can swap the last \\(k\\) things and start eating up the left); sketch---

\begin{equation}
\exists \forall \exists \forall \exists \forall \exists
\end{equation}

suppose we can swap the last 2 (i.e. \\(\Sigma\_{2} = \Pi\_{2}\\))

\begin{equation}
\exists \forall \exists \forall \exists \qty(\exists \forall)
\end{equation}

the two exists next to each other can be eaten up

\begin{equation}
\exists \forall \exists \forall \exists \forall
\end{equation}

and so on.


## additional information {#additional-information}


### \\(\Sigma\\) and \\(L\\) {#sigma-and-l}

\begin{equation}
L \in \Sigma\_{2} \text{ if } \exists \text{ {polytime verifier $V$ s.t }} x \in L \Leftrightarrow \exists w\_{1}\in \qty {0,1}^{\text{poly}\qty(|x|)} \forall w\_{2} \in \qty {0,1}^{\text{poly}\qty(|x|)} V\qty(x, w\_1, w\_2) = 1
\end{equation}

\begin{equation}
L \in \pi\_{2} \text{ if } \exists \text{ {polytime verifier $V$ s.t }} x \in L \Leftrightarrow \forall  w\_{1}\in \qty {0,1}^{\text{poly}\qty(|x|)} \exists  w\_{2} \in \qty {0,1}^{\text{poly}\qty(|x|)} V\qty(x, w\_1, w\_2) = 1
\end{equation}

in general:

\begin{equation}
L \in \Sigma\_{k} \text{ if } \exists \text{ {polytime verifier $V$ s.t }} x \in L \Leftrightarrow \exists w\_{1} \forall w\_{2} ... \underbrace{Q\_{k}}\_{\exists, \forall, \text{even or odd}} w\_{k} V\qty(x, w\_1, x\_2, ..., w\_{k}) = 1
\end{equation}

\\(\pi\_{k}\\) is just like flipped, so we have \\(\forall\\) first, and then \\(\exists\\).


### observations {#observations}

\begin{equation}
\Sigma\_{k} \subseteq \Sigma\_{k+1}
\end{equation}

\begin{equation}
\pi\_{k} \subseteq \pi\_{k+1}
\end{equation}

Also:

\begin{equation}
\Sigma\_{k} \subseteq \pi\_{k+1}
\end{equation}

\begin{equation}
\pi\_{k} \subseteq \Sigma\_{k+1}
\end{equation}

{{< figure src="/ox-hugo/2025-01-29_15-35-29_screenshot.png" >}}
