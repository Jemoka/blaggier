+++
title = "Proof of the Immerman-Szelepscenyi Theorem"
author = ["Houjun Liu"]
draft = false
+++

Suppose \\(\qty(G,s,t) \in \neg \text{STCONN}\\), meaning **no path** \\(s \to t\\) exists in \\(G\\).


## setup {#setup}

For \\(l \in \qty {0,1, \dots, n}\\), define \\(R\_{l} \subseteq V\\) is the set of all vertices readable from \\(s\\) in \\(\leq l\\) steps. \\(R\_0 \subseteq R\_1 \subset ... R\_{n}\\). Meaning \\(R\_0 = \qty {s}\\). Goal: convince \\(V\\) that \\(t \not \in R\_{n}\\).

Define: \\(r\_{l} = |R\_{l}|\\). What's the size of \\(r\_{l}\\)? It's at most \\(O\qty(\log \qty(n))\\) size. Notice that storing \\(R\_{l}\\) takes \\(O\qty(n \log n)\\) or at least \\(O(n)\\) space by storing either IDs or at least bitstring of everything.


## certificates {#certificates}

Here's the certificate for \\(\neg \text{STCONN}\\):

-   certificate 1: convince you of the size of \\(r\_1\\)
-   certificate 2: convince you of the size of \\(r\_2\\)
-   ...
-   certificate n: convince you of the size of \\(r\_n\\)

Finally, we compose them for a certificate for \\(t\\) is not reachable from \\(s\\).


## operations {#operations}

As you move from left to right through the certificates, we use the certificate \\(j\\) to recover the value for \\(r\_{j}\\) onto the tape (taking \\(O\qty(\log n)\\) space); then, we use the value \\(r\_{j}\\) to validate the certificate \\(j+1\\). When we write \\(r\_{j+1}\\), we **erase the previous \\(r\_{j}\\) value from tape**. This uses at most \\(O\qty(\log n)\\) space to store a single \\(r\_{j}\\).


## lemma 1 {#lemma-1}

Suppose \\(V\\) is convinced of the size of \\(r\_{n}\\) (i.e. its on its work tape). There exist a certificate that \\(t\\) is not reachable from \\(s\\) (in \\(n\\) steps, but that's true of everything that's reachable).

The certificate here is the **reachable paths** from \\(s\\) to each of the \\(r\_{n}\\) vertices, and we check that \\(t\\) is not one of the \\(r\_{n}\\) things. Naively doing this has a potential cheat where a path is repeated twice, thereby hiding our target vertex. So, we pre-process the input graph by presenting the paths in increasing order of input vertices. So, a node can't be repeated since they would appear right next to each other. We only have to store a single vertex, which is size \\(\log n\\).


## lemma 2 {#lemma-2}

Suppose \\(V\\) "knows" \\(r\_{l}\\); there is a certificate that convinces \\(V\\) of the value of \\(r\_{l+1}\\).


### requirements {#requirements}

That is, we want verifier \\(V\\) which only uses \\(O \qty(\log n)\\) space, reaching the cert just once, and gets convinced that:

-   vertices 1, 2, ..., n all present
-   counts the number of "vertex i in p_l+1" which it claims it sees; checks the end of the "because ..." claims


### certificates {#certificates}

For each vertex \\(v\_{j}\\), we issue a certificate for either \\(v\_{j} \in R\_{l+1}\\), or \\(v\_{j} \not \in R\_{l+1}\\).


#### \\(v\_{j} \in R\_{l+1}\\) {#v-j-in-r-l-plus-1}

we just give a path from \\(s \to v\_{j}\\) of length \\(\leq  l+1\\)


#### \\(v\_{j} \not \in R\_{l+1}\\) {#v-j-not-in-r-l-plus-1}

we show this by reminding \\(V\\) of \\(R\_{l}\\) by enumerating every single path \\(s \to v\_{k}\\) of length \\(l\\), \\(V\\) will then add one more step on top of each of these \\(v\_{k}\\) and checking that \\((v\_{k}, v\_{j})\\) is not an edge
