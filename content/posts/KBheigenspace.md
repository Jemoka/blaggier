+++
title = "eigenspace"
author = ["Houjun Liu"]
draft = false
+++

The [eigenspace]({{< relref "KBheigenspace.md" >}}) of \\(T, \lambda\\) is the set of all [eigenvector]({{< relref "KBheigenvalue.md" >}})s of \\(T\\) corresponding to \\(\lambda\\), plus the \\(0\\) vector.


## constituents {#constituents}

-   \\(T \in \mathcal{L}(V)\\)
-   \\(\lambda \in \mathbb{F}\\), an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\)


## requirements {#requirements}

\begin{equation}
E(\lambda, T) = \text{null}\ (T - \lambda I)
\end{equation}

i.e. all vectors such that \\((T- \lambda I) v = 0\\).

where, \\(E\\) is an [eigenspace]({{< relref "KBheigenspace.md" >}}) of \\(T\\).


## additional information {#additional-information}


### sum of eigenspaces is a direct sum {#sum-of-eigenspaces-is-a-direct-sum}

\\(E(\lambda\_{1}, T) + ... + E(\lambda\_{m}, T)\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}).

See [eigenspaces are disjoint]({{< relref "KBheigenvalue.md#eigenspaces-are-disjoint" >}}).


### dimension of sum of eigenspaces is smaller than or equal to the dimension of the whole space {#dimension-of-sum-of-eigenspaces-is-smaller-than-or-equal-to-the-dimension-of-the-whole-space}

A correlate of the above is that:

\begin{equation}
\dim E(\lambda\_{1}, T) + ... + \dim E(\lambda\_{m}, T) \leq \dim V
\end{equation}

Proof:

Recall that:

\begin{equation}
\dim E(\lambda\_{1}, T) + ... + \dim E(\lambda\_{m}, T) = \dim (E(\lambda\_{1}, T) \oplus ... \oplus  E(\lambda\_{m}, T) )
\end{equation}

because [\\(U\_1 + \dots + U\_{m}\\) is a direct sum IFF \\(\dim (U\_1 + \dots + U\_{m}) = \dim U\_1 + \dots + \dim U\_{m}\\)]({{< relref "KBhproduct_summation_map.md#u-1-plus-dots-plus-u-m-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-iff-dim--u-1-plus-dots-plus-u-m--dim-u-1-plus-dots-plus-dim-u-m" >}}).

Now, the [sum of subspaces is the smallest subspace]({{< relref "KBhsum_of_subsets.md#sum-of-subspaces-is-the-smallest-subspace-with-both-subspaces" >}}), so \\(\dim (E(\lambda\_{1}, T) \oplus ... \oplus  E(\lambda\_{m}, T) ) \leq \dim V\\).

And hence:

\begin{equation}
\dim E(\lambda\_{1}, T) + ... + \dim E(\lambda\_{m}, T) \leq \dim V
\end{equation}

as desired. \\(\blacksquare\\)
