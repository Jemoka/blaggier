+++
title = "1-d invariant subspace"
author = ["Houjun Liu"]
draft = false
+++

[eigenvalue]({{< relref "KBheigenvalue.md" >}}) is the scalar needed to scale the [basis]({{< relref "KBhbasis.md" >}}) element of a one [dimension]({{< relref "KBhdimension.md" >}})al [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}}) of a [Linear Map]({{< relref "KBhlinear_map.md" >}}) to represent the behavior of the map:

\begin{equation}
Tv = \lambda v
\end{equation}

Note we require \\(v \neq 0\\) because otherwise all scalars count.

[eigenvector]({{< relref "KBheigenvalue.md" >}}) is a [vector]({{< relref "KBhvector.md" >}}) that forms the [basis]({{< relref "KBhbasis.md" >}}) list of length 1 of that 1-D [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\).

"[operator]({{< relref "KBhoperator.md" >}})s own [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, [eigenvalue]({{< relref "KBheigenvalue.md" >}})s own [eigenvector]({{< relref "KBheigenvalue.md" >}})s"

Why is [eigenvalue]({{< relref "KBheigenvalue.md" >}}) consistent per [eigenvector]({{< relref "KBheigenvalue.md" >}})? Because a linear map has to act on the same way to something's basis as it does to the whole space.


## Motivation {#motivation}

Take some subspace \\(U \subset V\\):

\begin{equation}
U = \\{\lambda v\ |\ \lambda \in \mathbb{F}, v \in V\\} = span(v)
\end{equation}

Now, if \\(T|\_{U}\\) is an [operator]({{< relref "KBhoperator.md" >}}) on \\(U\\), \\(U\\) would be an [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}}) of \\(T\\) of dimension 1 (its [basis]({{< relref "KBhbasis.md" >}}) being the list \\(\\{v\\}\\)).

Therefore, for some vector \\(v \in U\\) (basically like various scalings of \\(v\\)), \\(T\\) will always send back to \\(U\\) so we can represent it yet again with another scalar on \\(v\\), like \\(\lambda v\\).

In this case, then, we can write that:

\begin{equation}
Tv = \lambda v
\end{equation}

And then the usual definition of [eigenvalue]({{< relref "KBheigenvalue.md" >}})s persist.


## constituents {#constituents}

-   linear map \\(T \in \mathcal{L}(V)\\)
-   vector \\(v \in V\\), such that \\(v \neq 0\\)
-   scalar \\(\lambda \in \mathbb{F}\\)


## requirements {#requirements}

If there exists \\(v \in V\\) such that \\(v\neq 0\\) and:

\begin{equation}
Tv = \lambda v
\end{equation}

then, \\(\lambda\\) is called an [eigenvalue]({{< relref "KBheigenvalue.md" >}}), and \\(v\\) the [eigenvector]({{< relref "KBheigenvalue.md" >}}).


## additional information {#additional-information}


### properties of [eigenvalue]({{< relref "KBheigenvalue.md" >}})s {#properties-of-eigenvalue--kbheigenvalue-dot-md--s}

Suppose \\(V\\) in [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}), \\(T \in \mathcal{L}(V)\\) and \\(\lambda \in \mathbb{F}\\), then:

1.  \\(\lambda\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\)
2.  \\(T - \lambda I\\) is not [injective]({{< relref "KBhinjectivity.md" >}})
3.  \\(T - \lambda I\\) is not [surjective]({{< relref "KBhsurjectivity.md" >}})
4.  \\(T - \lambda I\\) is not [invertable]({{< relref "KBhinvertability.md" >}})

Showing one shows all.

Proof:


#### \\(1 \implies 2\\) {#1-implies-2}

Suppose \\(\lambda\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\). Then, we have some \\(v \in V\\) such that:

\begin{equation}
Tv = \lambda v
\end{equation}

Now:

\begin{align}
&Tv = \lambda v \\\\
\Rightarrow\ & Tv - \lambda v = 0  \\\\
\Rightarrow\ & Tv - \lambda Iv = 0  \\\\
\Rightarrow\ & (T-\lambda I)v = 0
\end{align}

the last step by \\((T+S)v = Tv+Sv\\), the property of the vector space of \\(\mathcal{L}(V)\\) (or any \\(\mathcal{L}\\)).

And therefore, \\(v \in null\ (T-\lambda I)\\), and \\(v\neq 0\\). And so \\(null\ (T-\lambda I) \neq \\{0\\}\\) and so \\(T-\lambda I\\) is not [injective]({{< relref "KBhinjectivity.md" >}}), as desired.

The reverse of this result shows the opposite direction that \\(1 \implies 2\\).


#### The others {#the-others}

\\(I \in \mathcal{L}(V)\\), \\(T \in \mathcal{L}(V)\\), \\(\mathcal{L}(V)\\) is [closed]({{< relref "KBhclosed.md" >}}), so \\((T - \lambda I) \in \mathcal{L}(V)\\), and so it is an operator. Having 2) implies all other conditions of non-injectivity, non-surjectivity, non-invertiblility by [injectivity is surjectivity in finite-dimensional operators]({{< relref "KBhoperator.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-is-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-in-id-4ed27ed5-4edc-4ef4-afd7-9b8e3bcd9b96-finite-dimensional-id-36e84a46-76f1-481e-b031-8ab2f0da0aa8-operator-s" >}})


### list of eigenvectors are [linearly independent]({{< relref "KBhlinear_independence.md" >}}) {#list-of-eigenvectors-are-linearly-independent--kbhlinear-independence-dot-md}

Let \\(T \in \mathcal{L}(V)\\), suppose \\(\lambda\_{j}\\) are distinct [eigenvalue]({{< relref "KBheigenvalue.md" >}})s of \\(T\\), and \\(v\_1, \ldots, v\_{m}\\) the corresponding [eigenvector]({{< relref "KBheigenvalue.md" >}})s, then \\(v\_1, \ldots, v\_{m}\\) is [linearly independent]({{< relref "KBhlinear_independence.md" >}}).

proof:

We will show this by contradiction. Suppose \\(v\_1, \ldots, v\_{m}\\) are [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}); then, by the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}), \\(\exists v\_{j}\\) such that:

\begin{equation}
v\_{j} \in span(v\_1, \dots, v\_{j-1})
\end{equation}

Meaning:

\begin{equation}
v\_{j} = a\_1v\_1 + \dots + a\_{j-1}v\_{j-1}
\end{equation}

Given the list is a list of [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, we can apply \\(T\\) to both sides to get:

\begin{equation}
\lambda\_{j}v\_{j} = a\_1\lambda\_{1}v\_1 + \dots + a\_{j-1}\lambda\_{j-1}v\_{j-1}
\end{equation}

We can also get another definition for \\(\lambda\_{j} v\_{j}\\) by simply multiplying the definition for \\(v\_{j}\\) above by \\(\lambda\_{j}\\):

\begin{align}
&v\_{j} = a\_1v\_1 + \dots + a\_{j-1}v\_{j-1}\ \text{from above} \\\\
\Rightarrow\ & \lambda\_{j} v\_{j} = a\_1\lambda\_{j}v\_1 + \dots + a\_{j-1}\lambda\_{j}v\_{j-1}
\end{align}

Now, subtracting our two definitions of \\(\lambda\_{j} v\_{j}\\), we get:

\begin{equation}
0 = a\_1 (\lambda\_{j} - \lambda\_{1})v\_{1} + \dots +a\_{j-1} (\lambda\_{j} - \lambda\_{j-1})v\_{j-1}
\end{equation}

Recall now that the eigenvalue list \\(\lambda\_{j}\\) are distinct. This means all \\(\lambda\_{j} - \lambda\_{k \neq j} \neq 0\\). No \\(v\_{j} =0\\); so if we choose the smallest positive integer for \\(j\\), the list before it \\(v\_1, \dots, v\_{j-1}\\) is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) (as no value in that list would satisfy the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}})). This makes \\(a\_{j} =\dots =a\_{j-1} = 0\\).

And yet, substituting this back into the expression for \\(v\_{j}\\), we have \\(v\_{j} = 0\\), reaching contradiction. So therefore, the list of [eigenvector]({{< relref "KBheigenvalue.md" >}})s are [linearly independent.]({{< relref "KBhlinear_independence.md" >}}) \\(\blacksquare\\)


#### operators on finite dimensional V has at most dim V [eigenvalue]({{< relref "KBheigenvalue.md" >}})s {#operators-on-finite-dimensional-v-has-at-most-dim-v-eigenvalue--kbheigenvalue-dot-md--s}

As a corollary of the above result, suppose \\(V\\) is finite dimensional; then, each [operator]({{< relref "KBhoperator.md" >}}) on \\(V\\) has at most \\(dim\ V\\) distinct [eigenvalue]({{< relref "KBheigenvalue.md" >}})s because their [eigenvector]({{< relref "KBheigenvalue.md" >}})s form an [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list and [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}}).


#### eigenspaces are disjoint {#eigenspaces-are-disjoint}

the [eigenspace]({{< relref "KBheigenspace.md" >}})s of a [Linear Map]({{< relref "KBhlinear_map.md" >}}) form a [direct sum]({{< relref "KBhdirect_sum.md" >}}):

proof:

Corollary of result above. Because [eigenvector]({{< relref "KBheigenvalue.md" >}})s (i.e. bases) from distinct [eigenspace]({{< relref "KBheigenspace.md" >}})s are [linearly independent]({{< relref "KBhlinear_independence.md" >}}). So the only way to write \\(0\\) is by taking each to \\(0\\). So by taking the bases all to \\(0\\), you take the \\(0\\) vector from each space, which shows that the [eigenspace]({{< relref "KBheigenspace.md" >}})s are a [direct sum]({{< relref "KBhdirect_sum.md" >}}). \\(\blacksquare\\)


### finding eigenvalues with actual numbers {#finding-eigenvalues-with-actual-numbers}

\begin{equation}
\lambda\_{j} \in Spec(T) \Rightarrow det(\lambda\_{j}I-T) = 0
\end{equation}

The right polynomial \\(det(\lambda\_{j} I-T) = 0\\) is named the "characteristic polynomial."


### natural choordinates of a map {#natural-choordinates-of-a-map}

Given the eigenvectors \\((x+,y+), (x-,y-)\\), we can change coordinates of your matrix into the natural choordinates.

\begin{equation}
A = \begin{pmatrix}
x+ & x- \\\y+ & y-
\end{pmatrix} \begin{pmatrix}
\lambda+ & 0 \\\ 0 & \lambda-
\end{pmatrix} \begin{pmatrix}
x+ & x- \\\y+ & y-
\end{pmatrix}^{-1}
\end{equation}

This makes scaling matricides much much easier. If you think about multiplying the above matrix \\(n\\) times, the inverse and non-inverse cancells out.


### similar matrices {#similar-matrices}

Let \\(A,B\\) be defined:

\begin{equation}
A = C B C^{-1}
\end{equation}

and of course:

\begin{equation}
B = C^{-1} B C
\end{equation}

where, \\(A,B,C \in \mathcal{L}(V)\\)

\\(A, B\\) has the same [eigenvalue]({{< relref "KBheigenvalue.md" >}})s.


### invertable matricies {#invertable-matricies}

Let \\(T \in \mathcal{L}(V)\\) be [invertable]({{< relref "KBhinvertability.md" >}}). If \\(\lambda\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\), then \\(\frac{1}{\lambda}\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\). Furthermore, \\(T\\) and \\(T^{-1}\\) share [eigenvector]({{< relref "KBheigenvalue.md" >}})s with eigenvalues \\(\lambda\\) and \\(\frac{1}{\lambda}\\)


### symmetric matricies have a real basis of eigenvalues {#symmetric-matricies-have-a-real-basis-of-eigenvalues}

this falls out of the real [spectral theorem]({{< relref "KBhaxler_7_a.md#complex-spectral-theorem" >}}).
