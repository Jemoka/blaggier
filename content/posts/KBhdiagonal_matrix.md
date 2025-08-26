+++
title = "Diagonal Matrix"
author = ["Houjun Liu"]
draft = false
+++

The [diagonal]({{< relref "KBhdiagonal_matrix.md" >}}) of a square matrix consists of entries from the upper-left to the bottom-right

{{< figure src="/ox-hugo/2023-03-20_20-16-29_screenshot.png" >}}

Furthermore, because [eigenvalues of a map are the entries of the diagonal of its upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#eigenvalues-of-a-map-are-the-entries-of-the-id-c38ed162-6861-420c-a812-6d25ac539ea9-diagonal-of-its-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}}), and this is _technically_ an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}), the entries on the diagonal are exactly the [eigenvalue]({{< relref "KBheigenvalue.md" >}})s of the [Linear Map]({{< relref "KBhlinear_map.md" >}}).


## properties of diagonal matrices {#properties-of-diagonal-matrices}

Suppose \\(V\\) is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}), and \\(T \in \mathcal{L}(V)\\); and let \\(\lambda\_{1}, ... \lambda\_{m}\\) be distinct [eigenvalue]({{< relref "KBheigenvalue.md" >}})s of \\(T\\). Then, the following are equivalent:

1.  \\(T\\) is diagonalizable
2.  \\(V\\) has a basis containing of [eigenvector]({{< relref "KBheigenvalue.md" >}})s of \\(T\\)
3.  there exists 1-dim subspaces \\(U\_{1}, ..., U\_{n}\\) of \\(V\\), each invariant under \\(T\\), such that \\(V = U\_1 \oplus ... \oplus U\_{n}\\)
4.  specifically, those \\(U\\) are [eigenspace]({{< relref "KBheigenspace.md" >}})s; that is: \\(V = E(\lambda\_{1}, T) \oplus ... \oplus E(\lambda\_{m}, T)\\)
5.  \\(\dim V = \dim E(\lambda\_{1}, T) + ... + \dim E(\lambda\_{m}, T)\\)

---

Proof:

\\(1 \implies 2\\), \\(2 \implies 1\\)

By a moment's fucking thought. hehe my notes my rule. jkjkjk

By calculation this is true; if you apply a standard basis to the matrix, it will simply be scaled; therefore, you can think of each slot as an [eigenvector]({{< relref "KBheigenvalue.md" >}}) of \\(T\\).

\\(2 \implies 3\\)

Create \\(U\_{j} = span(v\_{j})\\)  where \\(v\_{j}\\) is the \\(j\\) [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\). Now, given \\(v\_{j}\\) forms a [basis]({{< relref "KBhbasis.md" >}}), then, \\(v\_1 ... v\_{n}\\) not only is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) but [span]({{< relref "KBhspan.md" >}}). Therefore, each [vector]({{< relref "KBhvector.md" >}}) in \\(V\\) can be written uniquely by a linear combination of \\(v\_{j}\\) (i.e. taking one \\(v\_{j}\\) from each \\(U\\)). Hence, by definition, \\(U\_{j}\\) form a [direct sum]({{< relref "KBhdirect_sum.md" >}}) to \\(V\\), hence showing \\(3\\).

\\(3\implies 2\\)

Now, suppose you have a bunch of 1-d [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}})s \\(U\_1 ... U\_{n}\\) and they form a [direct sum]({{< relref "KBhdirect_sum.md" >}}); because they are [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}})s, picking any \\(v\_{j} \in U\_{j}\\) would be an [eigenvector]({{< relref "KBheigenvalue.md" >}}) (because \\(T v\_{j} = a\_{j} v\_{j}\\), as applying \\(T\\) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) so it'd return to the same space, just at a different place). Now, because they form a [direct sum]({{< relref "KBhdirect_sum.md" >}}) on \\(V\\), taking \\(v\_{j}\\) from each \\(U\_{j}\\) would result in a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list which---because they sum up to $V$---[span]({{< relref "KBhspan.md" >}}) all of \\(V\\) as each \\(U\\) is simply spanning by scaling \\(v\_{j}\\). So, \\(v\_{j}\\) together forms a [basis]({{< relref "KBhbasis.md" >}}).

\\(2 \implies 4\\)

Given \\(V\\) has a [basis]({{< relref "KBhbasis.md" >}}) formed by [eigenvector]({{< relref "KBheigenvalue.md" >}})s of \\(T\\), the sum of all scales of eigenvectors in \\(T\\) can be written by the sum of all [eigenspace]({{< relref "KBheigenspace.md" >}})s: that is \\(V = null(T-\lambda\_{1} I) + ... null(T- \lambda\_{m} I)\\) (recall that \\(E(\lambda\_{j}, T) = null(T- \lambda\_{j}I)\\)); as each [eigenvalue]({{< relref "KBheigenvalue.md" >}}) for which the [basis]({{< relref "KBhbasis.md" >}}) is formed can be found in each of these spaces, their sum would therefore equal to \\(V\\) as this sum represents an [linear combination]({{< relref "KBhlinear_combination.md" >}}) of [eigenvector]({{< relref "KBheigenvalue.md" >}})s in \\(T\\).

Now, [sum of eigenspaces form a direct sum]({{< relref "KBheigenvalue.md#eigenspaces-are-disjoint" >}}) so we have that the sum is [direct sum]({{< relref "KBhdirect_sum.md" >}}). Hence: \\(V = E(\lambda\_{1}, T) \oplus ... \oplus E(\lambda\_{m}, T)\\)

\\(4 \implies 5\\)

[\\(U\_1 + \dots + U\_{m}\\) is a direct sum IFF \\(\dim (U\_1 + \dots + U\_{m}) = \dim U\_1 + \dots + \dim U\_{m}\\)]({{< relref "KBhproduct_summation_map.md#u-1-plus-dots-plus-u-m-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-iff-dim--u-1-plus-dots-plus-u-m--dim-u-1-plus-dots-plus-dim-u-m" >}}) (see link for proof).

\\(5 \implies 2\\)

We are given that:

\begin{equation}
\dim V = \dim E(\lambda\_{1}, T) + \dots + \dim E(\lambda\_{m}, T)
\end{equation}

which means that taking a [basis]({{< relref "KBhbasis.md" >}}) of each [subspace]({{< relref "KBhsubspace.md" >}}) provides a list of \\(\dim n\\) long of [eigenvector]({{< relref "KBheigenvalue.md" >}})s. Now, each sub-list belonging to each space is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) amongst themselves, and they will each be [linearly independent]({{< relref "KBhlinear_independence.md" >}}) against others as [list of eigenvectors are linearly independent]({{< relref "KBheigenvalue.md#list-of-eigenvectors-are-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent" >}}).

i.e.: if \\(a\_1v\_1 + ... + a\_{n} v\_{n} = 0\\), we can treat each chunk from each [eigenspace]({{< relref "KBheigenspace.md" >}}) as \\(u\\), making \\(u\_1 + ... u\_{m} = 0\\); as they are [eigenvector]({{< relref "KBheigenvalue.md" >}})s from distinct [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, they are [linearly independent]({{< relref "KBhlinear_independence.md" >}}) so each will be \\(0\\). Now, collapsing it into the [basis]({{< relref "KBhbasis.md" >}}) of each [eigenspace]({{< relref "KBheigenspace.md" >}}), this makes \\(a\_{j}\\) of the coefficients \\(0\\) as well.

And all of this makes \\(v\_1 ... v\_{n}\\) a list of \\(\dim n\\) long that is [linearly independent]({{< relref "KBhlinear_independence.md" >}}); hence, it is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), as desired. \\(\blacksquare\\)


## linear systems with diagonal matrices {#linear-systems-with-diagonal-matrices}

\begin{equation}
\mqty(5 & 0 \\\ 0 & 2) \mqty(c\_1 \\\ c\_2) = \mqty(10 \\\ 1)
\end{equation}

Each output is simply multiplying a value by th scaling factor corresponding to that row.


## enough eigenvalues implies diagonalizability {#enough-eigenvalues-implies-diagonalizability}

If \\(T \in \mathcal{L}(V)\\) has \\(\dim V\\) distinct [eigenvalue]({{< relref "KBheigenvalue.md" >}})s, then \\(T\\) is [diagonalizable](#properties-of-diagonal-matrices).

Proof:

let \\(\dim V = n\\). Pick [eigenvector]({{< relref "KBheigenvalue.md" >}})s \\(v\_1 ... v\_{n}\\) corresponding to distinct [eigenvalue]({{< relref "KBheigenvalue.md" >}})s \\(\lambda\_{1} ... \lambda\_{n}\\). Now, [eigenvectors coorsponding to distinct eigenvalues are linearly independent]({{< relref "KBheigenvalue.md#list-of-eigenvectors-are-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent" >}}), and this is a list of \\(\dim n\\) long that is [linearly independent]({{< relref "KBhlinear_independence.md" >}}), so it is a [basis]({{< relref "KBhbasis.md" >}}) of [eigenvector]({{< relref "KBheigenvalue.md" >}})s. Now, that means that the matrix coorsponding to \\(T\\) is [diagonalizable](#properties-of-diagonal-matrices).

**NOTE THAT THE CONVERSE IS NOT TRUE!** as each [eigenspace]({{< relref "KBheigenspace.md" >}}) can have a dimension of more than 1 so 1 [eigenvalue]({{< relref "KBheigenvalue.md" >}}) can generate two [linearly independent]({{< relref "KBhlinear_independence.md" >}}) [eigenvectors]({{< relref "KBheigenvalue.md" >}}) belonging to it.

For instance:

\begin{equation}
T (z\_1, z\_2, z\_3) = (4z\_1, 4z\_2, 5z\_3)
\end{equation}
