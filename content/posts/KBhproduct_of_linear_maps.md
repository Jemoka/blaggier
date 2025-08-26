+++
title = "Product of Linear Maps"
author = ["Houjun Liu"]
draft = false
+++

Take two linear maps \\(T \in \mathcal{L}(U,V)\\) and \\(S \in \mathcal{L}(V,W)\\), then \\(ST \in \mathcal{L}(U,W)\\) is defined by:

\begin{equation}
(ST)(u) = S(Tu)
\end{equation}

Indeed the "product" of [Linear Map]({{< relref "KBhlinear_map.md" >}})s is just function composition. Of course, \\(ST\\) is defined only when \\(T\\) maps to something in the domain of \\(S\\).

The following there properties hold on linear-map products (_note that commutativity isn't one of them!_):


## associativity {#associativity}

\begin{equation}
(T\_1T\_2)T\_3 = T\_1(T\_2T\_3)
\end{equation}


## identity {#identity}

\begin{equation}
TI = IT = T
\end{equation}

for \\(T \in \mathcal{L}(V,W)\\) and \\(I \in \mathcal{L}(V,V)\\) (OR \\(I \in \mathcal{L}(W,W)\\) depending on the order) is the [identity]({{< relref "KBhidentity.md" >}}) map in \\(V\\).

[identity]({{< relref "KBhidentity.md" >}}) commutes, as always.


## distributive {#distributive}

in both directions---

\begin{equation}
(S\_1+S\_2)T = S\_1T + S\_2T
\end{equation}

and

\begin{equation}
S(T\_1+T\_2) = ST\_{1}+ST\_{2}
\end{equation}