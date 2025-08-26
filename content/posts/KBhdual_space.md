+++
title = "dual space"
author = ["Houjun Liu"]
draft = false
+++

The dual space of \\(V\\), named \\(V'\\), is the vector space formed by [linear functional]({{< relref "KBhlinear_functional.md" >}})s on \\(V\\) (because recall [set of linear maps between two vector spaces form a vector space]({{< relref "KBhlinear_map.md#addition-and-scalar-multiplication-on-mathcal-l--v-w" >}})).


## constituents {#constituents}

A [vector space]({{< relref "KBhvector_space.md" >}}) \\(V\\)


## requirements {#requirements}

\\(V' = \mathcal{L}(V, \mathbb{F})\\) , and its a [vector space]({{< relref "KBhvector_space.md" >}}).


## additional information {#additional-information}


### dimension of dual space is equivalent to the original space {#dimension-of-dual-space-is-equivalent-to-the-original-space}

\begin{equation}
\dim V' = \dim V
\end{equation}

Proof:

Because [\\(\dim \mathcal{L}(V,W) = (\dim V)(\dim W)\\)]({{< relref "KBhisomorphism.md#dim-mathcal-l--v-w----dim-v----dim-w" >}}), and \\(V' = \mathcal{L}(V, \mathbb{F})\\). Now, \\(\dim V' = \dim \mathcal{L}(V,\mathbb{F}) = (\dim V)(\dim \mathbb{F}) = \dim V \cdot 1 = \dim V\\).


### dual basis {#dual-basis}

Let \\(v\_1, ..., v\_{n}\\) be a basis of \\(V\\), then, we can construct a [basis]({{< relref "KBhbasis.md" >}}) of \\(V'\\) with [linear functional]({{< relref "KBhlinear_functional.md" >}})s \\(\varphi\_{1}, ..., \varphi\_{n}\\):

\begin{equation}
\varphi\_{j}(v\_{k}) =
\begin{cases}
1, if\ k=j \\\\
0, if\ k \neq j
\end{cases}
\end{equation}

Now, we can show that \\(\varphi\_{j}\\) are indeed [linear functional]({{< relref "KBhlinear_functional.md" >}})s by [basis of domain]({{< relref "KBhbasis_of_domain.md" >}}): we defined its behavior of each \\(\varphi\_{j}\\) based on where it sends each \\(v\_{j}\\) (i.e. the [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), the domain of elements in \\(V'\\)) into _values_ in \\(\mathbb{F}\\) (i.e. \\(1\\) or \\(0\\)).

We can now show that these \\(\varphi\_{j}\\) is indeed a [basis]({{< relref "KBhbasis.md" >}}) of \\(V'\\) by only showing that it is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) because we have already a list of \\(n\\) \\(\varphi\_{j}\\) elements (i.e. \\(\dim V'=\dim V = n\\) number of \\(\varphi\_{j}\\)), and [linearly independent list of length dim V are a basis of V]({{< relref "KBhdimension.md#linearly-independent-list-of-length-dim-v-are-a-basis-of-v" >}}).
