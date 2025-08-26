+++
title = "NL"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\text{NL} = \text{NSPACE} \qty( \log n)
\end{equation}

See also [Certificates-Based Intepretation of NL]({{< relref "KBhcertificates_based_intepretation_of_nl.md" >}})


## problems in \\(NL\\) {#problems-in-nl}

We can see \\(L \subseteq NL\\), because a TM is a NTM.


## STCONN is in NL {#stconn-is-in-nl}

On input \\(\qty(G, s,t)\\), if \\(s = t\\), accept; otherwise,

-   currNode = 5
-   numSteps = 0
-   while steps &lt;= n
    -   non-deterministically choose a next node
    -   update currNode = w
    -   if w = t, accept
    -   set numSteps ++
-   reject

so we just have to remember the current node. So this whole thing is \\(O\qty(\log n)\\).


## three statements {#three-statements}


### bounding NL space by P time {#bounding-nl-space-by-p-time}

\begin{equation}
NL \subseteq P
\end{equation}

**key insights: [STCONN]({{< relref "KBhstconn.md" >}}) in \\(P\\)**

---

preliminaries:

Recap: \\(L \subseteq P\\): Recall the definition of [configuration]({{< relref "KBhturing_machinea.md#configuration" >}}) of TM \\(M\\) which solves \\(L\\) on input \\(x\\). Since \\(M\\) uses \\(O \qty(\log n)\\) space, then \\(\leq n^{k}\\) configurations because otherwise you'd run out of space.

Yet, this time, a configuration _can_ repeat on different branches within the non-determinism. Instead of a binary tree, instead, draw a digraph with each possible configuration corresponding at a vertex.

This is now a \\(G\\), such that \\(V\\) is all possible configurations; \\(\qty(c, c') \in E\\), if \\(c'\\) is a next con fig coming from \\(c\\). For space \\(S \qty(n)\\), we have \\(|V| = 2^{O(s \qty(n))}\\)

By definition of non-deterministic TM, \\(M\\) accepts \\(x\\) IFF \\(\exists\\) path \\(C\_{\text{start}}\\) to **any** accepting configuration.

We then take this graph, take each of the accepting configurations, and point each of the accepting configurations to a particular node \\(C\_{\text{accept}}\\). We call this graph \\(G'\\), suddenly this reduces to [STCONN]({{< relref "KBhstconn.md" >}}).

---

proof:

Let \\(A \in \text{NL}\\), for input \\(x\\), we spend poly time above to build graph \\(G'\\) (we know this is poly time because there is only Poly N Verticies for space \\(\log  n\\).

After this is done, \\(x \in A\\) if and only if \\(\qty(G'x, C\_{\text{start}}, C\_{\text{accept}}) \in \text{STCONN}\\).


### non-determinism buys quadratic savings {#non-determinism-buys-quadratic-savings}

\begin{equation}
NL \subseteq \text{SPACE}\qty(\log^{2}\qty(n))
\end{equation}

**key insights: [STCONN]({{< relref "KBhstconn.md" >}}) in \\(\log^{2}\qty(n)\\)**

---

preliminaries:

this is almost [bounding space by time](#bounding-nl-space-by-p-time), but writing down the graph as a whole is decently difficult. we just have to solve this by never actually giving the [Savitch's Algorithm]({{< relref "KBhstconn.md#savitch-s-algorithm" >}}) the graph, and instead just giving it all the vertices; at \\(k=0\\), then we check once whether or not an edge is present.

To do this "edge checking", we need to show that: let \\(M\\) be an NTM, given \\(x\\) and 2 configs \\(c\_1\\) and \\(c\_2\\), we can check in \\(O\qty(\log n)\\) space whether there is an edge between \\(c\_1\\) and \\(c\_2\\).


### NL = coNL {#nl-conl}

\begin{equation}
\text{NL} = \text{coNL}
\end{equation}

**key insights: [STCONN]({{< relref "KBhstconn.md" >}}) is in coNL**

That is, we want to show that:

\begin{equation}
\neg \text{STCONN} \in \text{NL}
\end{equation}

in particular is that we want to show a short certificate for \\(S\\) and \\(T\\) are **not** connected.

see [Proof of the Immerman-Szelepscenyi Theorem]({{< relref "KBhproof_of_nl_conl.md" >}}). Since \\(\neg \text{STCONN} \in NL\\), and since [STCONN]({{< relref "KBhstconn.md" >}}) is NL complete, \\(\text{NL} = \text{coNL}\\).
