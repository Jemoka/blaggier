+++
title = "upper-triangular matrix"
author = ["Houjun Liu"]
draft = false
+++

A [matrix]({{< relref "KBhmatricies.md" >}}) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) if the entries below the [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) are \\(0\\):

\begin{equation}
\mqty(\lambda\_{1} & & \* \\\ & \ddots & \\\ 0 & & \lambda\_{n})
\end{equation}


## properties of [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) {#properties-of-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md}

Suppose \\(T \in \mathcal{L}(V)\\), and \\(v\_1 ... v\_{n}\\) is a basis of \\(V\\). Then:

1.  the matrix of \\(T\\) w.r.t. \\(v\_1 ... v\_{n}\\) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}})
2.  \\(Tv\_{j} \in span(v\_1 \dots v\_{j})\\) for each \\(v\_{j}\\)
3.  \\(span(v\_{1}, ... v\_{j})\\) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\) for each \\(v\_{j}\\)


### \\(1 \implies 2\\) {#1-implies-2}

Recall that our matrix \\(A=\mathcal{M}(T)\\) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}). So, for any \\(v\_{j}\\) sent through \\(A\\), it will be multiplied to the $j$-th column [vector]({{< relref "KBhvector.md" >}}) of the [matrix]({{< relref "KBhmatricies.md" >}}). Now, that $j$-th column has \\(0\\) for rows \\(j+1 ... n\\), meaning that only through a linear combination of the first \\(j\\) vectors we can construct \\(T v\_{j}\\). Hence, \\(Tv\_{j} \in span(v\_1 ... v\_{j})\\)


### \\(3 \implies 2\\) {#3-implies-2}

"obviously"

All \\(v\_{j} \in span(v\_1, \dots v\_{j})\\), and yet \\(T v\_{j} \in span (v\_{1}, ... v\_{j})\\) as it is given. Hence, \\(span(v\_1, ... v\_{j})\\) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\).


### \\(2 \implies 3\\) {#2-implies-3}

Let \\(v \in span(v\_1, ... v\_{j})\\); meaning: \\(v = a\_1 v\_1 + ... + a\_{j} v\_{j}\\). Now, \\(Tv = a\_1 T v\_{1} + ... + a\_{j} T v\_{j}\\). Recall now we are given \\(T v\_{j} \in span(v\_1, ... v\_{j})\\) for each \\(v\_{j}\\) (of course if \\(T{v\_{1}} \in span(v\_{1})\\)  it is also in \\(span(v\_1, ... v\_{j})\\) so the statement make sense.) Therefore, a linear combinations of \\(T v\_{j}\\) also is in \\(span(v\_1 ... v\_{j})\\). Making the latter [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\). \\(\blacksquare\\)


## every complex operator has an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) {#every-complex-operator-has-an-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md}

Suppose \\(V\\) is a finite-dimensional [complex vector space]({{< relref "KBhvector_space.md#vector-space-over-fields" >}}), with an [operator]({{< relref "KBhoperator.md" >}}) \\(T \in \mathcal{L}(V)\\). Then, \\(T\\) has an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) w.r.t. some [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

Proof:

We will use induction.

Inductive hypothesis: given dimension of \\(V\\), \\(T \in \mathcal{L}(V)\\) has an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) for a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

Base case: \\(\dim V=1\\)

If \\(\dim V = 1\\), any matrix of \\(T\\) is technically [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) because its just one number \\(\mqty(a)\\).

Step: \\(\dim V = n\\), and \\(T \in \mathcal{L}(V)\\)

Because [operators on complex vector spaces have an eigenvalue]({{< relref "KBhoperators_on_complex_vector_spaces_have_an_eigenvalue.md" >}}), let \\(v\_1\\) be an [eigenvector]({{< relref "KBheigenvalue.md" >}}) corresponding to an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\). Now, create an [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}}) \\(U = span(v\_1)\\). (it is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) because \\(v\_1\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}})). Now, evidently \\(\dim U =1\\).

Now, \\(\dim V / U = n-1\\), the previous step from induction tells us that there exists a [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) for \\(T/U \in \mathcal{L}(V / U)\\). Specifically, because of the [properties of upper-triangular matrix](#properties-of-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md), it tells us that there is a basis \\(v\_{2} + U ... v\_{n} + U\\) such that its [span]({{< relref "KBhspan.md" >}}) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T / U\\). Meaning:

\begin{equation}
(T / U) (v\_{j} + U ) \in span( v\_{2} + U \dots v\_{j} + U)
\end{equation}

Writing it out:

\begin{equation}
T v\_{j} + U = (a\_{2} v\_{2} + \dots + a\_{j} v\_{j}) + U
\end{equation}

Specifically, this means, there exists at least one pair \\(u\_1, u\_2\\) for which:

\begin{equation}
T v\_{j} + u\_1 = (a\_{2} v\_{2} + \dots + a\_{j} v\_{j}) + u\_2
\end{equation}

And so:

\begin{equation}
T v\_{j} = (a\_{2} v\_{2} + \dots + a\_{j} v\_{j}) + (u\_2 -  u\_1)
\end{equation}

And since \\(\\{v\_1\\}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(U\\), and \\(u\_2 - u\_1 \in U\\), we can say:

\begin{equation}
T v\_{j} = (a\_{2} v\_{2} + \dots + a\_{j} v\_{j}) + a\_1 v\_1
\end{equation}

Hence:

\begin{equation}
T v\_{j} \in span(v\_1, \dots  v\_{j})
\end{equation}

It has been shown in the past (see [Linear Algebra Errors]({{< relref "KBhlinear_algebra_errors.md" >}})) that if a list form a [basis]({{< relref "KBhbasis.md" >}}) of \\(V /U\\) and another form a basis of \\(U\\) then the two lists combined form a [basis]({{< relref "KBhbasis.md" >}}) of the whole thing \\(V\\). So \\(v\_1 ... v\_{j}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

Now, by the [properties of upper-triangular matrix](#properties-of-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md) again, we have that there exists an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) of \\(T\\) for \\(\dim V = n\\). \\(\blacksquare\\)


## operator is only invertible if [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) of its [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) is nonzero {#operator-is-only-invertible-if-diagonal--kbhmatricies-dot-md--of-its-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md--is-nonzero}

Suppose \\(T \in \mathcal{L}(V)\\) has an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) w.r.t. a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\). Then, \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}) IFF all the entries on the [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) of the [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) is nonzero.


### assume nonzero diagonal {#assume-nonzero-diagonal}

Let \\(\lambda\_{1} ... \lambda\_{n}\\) be the [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) entries of \\(T\\). Per given, let there be an [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) [matrix]({{< relref "KBhmatricies.md" >}}) of \\(T\\) under the basis \\(v\_1 ... v\_{n}\\). The [matrix]({{< relref "KBhmatricies.md" >}}) w.r.t. \\(T\\)'s matrix being [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) under the list of \\(v\_{j}\\) means that:

\begin{equation}
T v\_1 = \lambda\_{1} v\_1
\end{equation}

(because \\(T v\_{j} \in span(v\_1 ... v\_{j})\\), and let \\(j=1\\)). And so:

\begin{equation}
T \frac{v\_1}{\lambda\_{1}} = v\_{1}
\end{equation}

(legal as \\(\lambda\_{j} \neq 0\\) per given).

Thus, \\(v\_1 \in range(T)\\).

In a similar fashion, let:

\begin{equation}
T v\_{2} = a v\_{1} + \lambda\_{2} v\_{2}
\end{equation}

(\\(a\\) being the element just to the right of the \\(\lambda\_{1}\\) diagonal; recall again that \\(T\\)'s matrix under \\(v\_{j}\\) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}))

Now:

\begin{equation}
T \frac{v\_2}{\lambda 2} = \frac{a}{\lambda\_{2}} v\_{1} + v\_{2}
\end{equation}

The left side is in [range]({{< relref "KBhrange.md" >}}) \\(T\\) by definition; the right side's \\(\frac{a}{\lambda 2} v\_{1} \in range\ T\\) and hence so is its scaled versions. Thus, \\(v\_2 \in range\ T\\).

Continuing in this fashion, we have all \\(v\_{j} \in range\ T\\). So \\(T\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}) as it can hit all [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\). Now, [injectivity is surjectivity in finite-dimensional operators]({{< relref "KBhoperator.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-is-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-in-id-4ed27ed5-4edc-4ef4-afd7-9b8e3bcd9b96-finite-dimensional-id-36e84a46-76f1-481e-b031-8ab2f0da0aa8-operator-s" >}}), so \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}), as desired.


### assume invertible {#assume-invertible}

We will prove this by induction. Let \\(\lambda\_{1} ... \lambda\_{n}\\) be the [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) entries of \\(T\\).

Inductive hypothesis: \\(\lambda\_{j} \neq 0\\)

Base case: \\(\lambda\_{1} \neq 0\\) because if not, \\(T v\_{1} = 0\\) and \\(v\_{1} \neq 0\\) as it is part of a [basis]({{< relref "KBhbasis.md" >}}) so that would make \\(T\\) not [injective]({{< relref "KBhinjectivity.md" >}}) and hence not [invertable]({{< relref "KBhinvertability.md" >}}). Hence, by contradiction, \\(\lambda\_{1} = 0\\).

Step: \\(\lambda\_{j}\\)

Suppose for the sake of contradiction \\(\lambda\_{j} = 0\\). This means that the basis \\(v\_{j}\\) is mapped to somewhere in \\(span(v\_{1}, ... v\_{j-1})\\) as only the top \\(j-1\\) slots are non-zero for the $j$-th column. And so, \\(T\\), under the assumption, would map \\(span(v\_1, ... v\_{j})\\) into \\(span(v\_1, ... v\_{j-1})\\).

Now, because \\(v\_{j}\\) are [linearly independent]({{< relref "KBhlinear_independence.md" >}}) (they form a [basis]({{< relref "KBhbasis.md" >}}) after all), \\(\dim span(v\_1, ... v\_{j}) = j\\) and \\(\dim span(v\_1, ..., v\_{j-1}) = j-1\\). Now, as \\(T\\) [restricted]({{< relref "KBhmap_restriction_operator.md" >}}) on \\(span(v\_1, ..v\_{j})\\) maps to a smaller [subspace]({{< relref "KBhsubspace.md" >}}), [it is not injective]({{< relref "KBhlinear_map.md#map-to-smaller-space-is-not-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}}). So, \\(T\\) as a whole is not [injective]({{< relref "KBhinjectivity.md" >}}), so it is not [invertable]({{< relref "KBhinvertability.md" >}}). Reaching contradiction, \\(\blacksquare\\).


## eigenvalues of a map are the entries of the [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) of its [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) {#eigenvalues-of-a-map-are-the-entries-of-the-diagonal--kbhmatricies-dot-md--of-its-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md}

The [matrix]({{< relref "KBhmatricies.md" >}}) of \\(T-\lambda I\\) for an [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) form of \\(T\\) would look like:

\begin{equation}
\mqty(\lambda\_{1} - \lambda &&\* \\\ & \ddots & \\\ 0 &&\lambda\_{n} - \lambda)
\end{equation}

where \\(\lambda\_{j}\\) are the [diagonal]({{< relref "KBhmatricies.md#diagonal" >}})s of the [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) form of \\(T\\), and \\(\lambda\\) an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\).

Recall that [operator is only invertible if diagonal of its upper-triangular matrix is nonzero](#operator-is-only-invertible-if-diagonal--kbhmatricies-dot-md--of-its-upper-triangular-matrix--kbhupper-triangular-matrix-dot-md--is-nonzero); so if \\(\lambda\\) equals any of the \\(\lambda\_{j}\\), it will make the matrix above for \\(T - \lambda I\\) not [invertable]({{< relref "KBhinvertability.md" >}}) as one of its [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) will be \\(0\\). Recall the [properties of eigenvalues]({{< relref "KBheigenvalue.md#properties-of-id-7d742b39-4a4a-4a9d-a55b-07e2030dfdeb-eigenvalue-s" >}}), specifically that \\(\lambda\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) \\((T-\lambda I)\\) is not [invertable]({{< relref "KBhinvertability.md" >}}). Hence, each \\(\lambda\_{j}\\) is an [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of \\(T\\). \\(\blacksquare\\)