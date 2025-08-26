+++
title = "STCONN"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
\text{STCONN} = \qty {\langle G, S, t \rangle : \text{$\exists^{?}$ a path from s $\to$ t $\in$ G}}
\end{equation}

we solve this with BFS or DFS; but those algorithms' working sets require linear space. Turns out, we can solve this algorithm \\(\text{STCONN} \in \text{SPACE}\qty(\log^{2}\qty(n))\\)

-   for **directed** \\(G\\), we are not sure if its in [L]({{< relref "KBhspace_class_l.md" >}}).
-   for **undirected** \\(G\\), Omer showed that its in [L]({{< relref "KBhspace_class_l.md" >}})

**open problem**: [Savitch's Algorithm](#savitch-s-algorithm) is really really slow; we are not sure if there is an algorithm in which we can solve it in better time.


## Savitch's Algorithm {#savitch-s-algorithm}

[Savitch's Algorithm](#savitch-s-algorithm) is a [middle-first search](#savitch-s-algorithm) scheme for solving [STCONN]({{< relref "KBhstconn.md" >}}).

**key observation**: if there is a path form \\(s \to t\\) of length \\(n\\), then there must be a point \\(w\\) such that \\(s\to w\\) in \\(\frac{n}{2}\\) steps and \\(w \to t\\) in \\(\frac{n}{2}\\) steps.

Goal: brute force search for this \\(w\\). There is \\(n\\) possibilities for \\(w\\), we shall just try all of them! This engenders a more general problem named [PATH](#path): \\(\text{STCONN}\qty(s,t) = \text{PATH}\qty(s,t,\ceil{\log n})\\)


### PATH {#path}

\begin{equation}
\text{PATH}\qty(x,y,k): \text{does there exist path of length $\leq 2^{k}$ from $x$ to $y$}
\end{equation}

solution:

-   if \\(k = 0\\), then return TRUE IFF \\(\qty(x,y) \in E \vee x = y\\) (that \\(x\\) and \\(y\\) are adjacent or identical)
-   else for each \\(w \in V\\)
    -   if \\(\text{PATH}\qty(x,w,k-1) \wedge \text{PATH}\qty(w,y,k-1)\\), return TRUE
-   return FALSE

space of this:

\begin{equation}
S\qty(k) = O\qty(\log n) + S\qty(k-1)
\end{equation}

because for every \\(w\\), we need to track \\(\log n\\) possible \\(w\\), and then also need to recurse down to keep track the two \\(\text{PATH}\\) calls; in particular, we recuse the two recurse PATH calls to prevent exponential growth. This gives \\(S(t) = O\qty(k \log n)\\), so for \\(k = \log n\\), we have \\(S \qty(\log n) = O \qty(\log^{2} n)\\)

time of this:

\begin{equation}
T(k) = n 2 T(k-1) = \qty(2n)^{k} = n^{O(k)}
\end{equation}

so for \\(k = \log n\\) (n nodes), then \\(T \qty(\log n) = n^{O \qty(\log n)}\\)

because we can't recuse time, so the 2 times factor exsits.


### [STCONN is in NL]({{< relref "KBhnon_deterministic_space.md#stconn-is-in-nl" >}}) {#stconn-is-in-nl--kbhnon-deterministic-space-dot-md}

see [STCONN is in NL]({{< relref "KBhnon_deterministic_space.md#stconn-is-in-nl" >}})
