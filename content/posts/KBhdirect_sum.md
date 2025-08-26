+++
title = "direct sum"
author = ["Houjun Liu"]
draft = false
+++

A [direct sum]({{< relref "KBhdirect_sum.md" >}}) is a sum of ****[subspace]({{< relref "KBhsubspace.md" >}})s**** (not just subsets!!) where there's only one way to represent each element.


## constituents {#constituents}

[subspace]({{< relref "KBhsubspace.md" >}})s of \\(V\\) named \\(U\_1, \dots, U\_{m}\\)


## requirements {#requirements}

The [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) of \\(U\_1+\dots+U\_{m}\\) is called a _direct sum_ [IFF]({{< relref "KBhequivalence.md" >}}):

each element in \\(U\_1+\dots +U\_{m}\\) can only be written in one way as a sum \\(u\_1 +\dots +u\_{m}\\) (as in, they are linearly independent?)

We use \\(\oplus\\) to represent [direct sum]({{< relref "KBhdirect_sum.md" >}}).


## additional information {#additional-information}


### why is it _called_ a [direct sum?]({{< relref "KBhdirect_sum.md" >}}) {#why-is-it-called-a-direct-sum--kbhdirect-sum-dot-md}

Something is _not_ a [direct sum]({{< relref "KBhdirect_sum.md" >}}) if any of its components can be described using the others. Its kind of line linear independence but! on entire spaces.


### a [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) there is only one way to write \\(0\\) {#a-sum-of-subsets--kbhsum-of-subsets-dot-md--is-a-direct-sum--kbhdirect-sum-dot-md--iff--kbhequivalence-dot-md--there-is-only-one-way-to-write-0}

Given \\(U\_1, \dots, U\_{m}\\) are subspaces of \\(V\\), then \\(U\_1+\dots +U\_{m}\\) is a direct sum IFF the only way to write \\(0\\) as a sum \\(u\_1 +\dots +u\_{m}\\) is by taking each element to \\(0\\).

Proof:

if---
If some \\(U\_1 + \dots +U\_{m}\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}), definitionally there is only one way to write \\(0\\). And you can always write \\(0\\) by taking all the constituents to \\(0\\) as they are [subspace]({{< relref "KBhsubspace.md" >}})s, so the [additive identity]({{< relref "KBhadditive_identity.md" >}}) exists.

only if---
We are given that there is only one way to write \\(0\\), that:

\begin{equation}
0 = u\_1+ u\_2+ \dots+ u\_{m}: u\_j \in U\_{j}
\end{equation}

as \\(U\_{j}\\) are all subspaces, and the [additive identity]({{< relref "KBhadditive_identity.md" >}}) exists, we can say that \\(u\_1=u\_2=\dots =0\\).

Assume for the sake of contradiction that \\(U\_1 + \dots +U\_{m}\\) is not a [direct sum]({{< relref "KBhdirect_sum.md" >}}). Therefore:

\begin{equation}
\exists\ v\_1 = u\_1+u\_2+\dots + u\_{m}: u\_{j} \in U\_{j}
\end{equation}

and

\begin{equation}
\exists\ v\_1 = w\_1+w\_2+\dots + w\_{m}: w\_{j} \in U\_{j}
\end{equation}

"there are two unique representations of a [vector]({{< relref "KBhvector.md" >}}) given the [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}})"

Subtracting these representations, then:

\begin{equation}
(v\_1-v\_1) = (u\_1-w\_1) + \dots +(u\_{m}-w\_{m}): u\_{j}, w\_{j} \in U\_{j}
\end{equation}

Finally, then:

\begin{equation}
0 = (u\_1-w\_1) + \dots +(u\_{m}-w\_{m}): u\_{j}, w\_{j} \in U\_{j}
\end{equation}

We have established that each slot that makes up this particular sum \\(=0\\). Therefore, \\(u\_{i}-w\_{i} = 0\\). This means $u<sub>i</sub>=w<sub>i</sub>$---there are no two unique representations of \\(v\_{1}\\). Reaching contradiction. \\(\blacksquare\\)


### a [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) is only a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) their intersection is set containing \\(0\\) {#a-sum-of-subsets--kbhsum-of-subsets-dot-md--is-only-a-direct-sum--kbhdirect-sum-dot-md--iff--kbhequivalence-dot-md--their-intersection-is-set-containing-0}

Take \\(U\\) and \\(W\\), two [subspace]({{< relref "KBhsubspace.md" >}})s  of \\(V\\). \\(U+V\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) \\(U \cap W = \\{0\\}\\).

Proof:

if---
Suppose \\(U+V\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}). \\(\forall v \in U \cap V\\), as \\(v\\) is equal to itself, we have that:

\begin{equation}
0 = v+(-v)
\end{equation}

where, \\(v\\) is in \\(U\\) and \\(-v\\) is in \\(V\\) (as both \\(U\\) and \\(V\\) are vector spaces, both would contain \\(-1v=-v\\) as we are given \\(v \in U \cap V\\) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is closed on both.)

By the unique representation in the definition of [direct sum]({{< relref "KBhdirect_sum.md" >}})s, you have only one way to construct this expression: namely, that \\(v=0\\) as both are [vector space]({{< relref "KBhvector_space.md" >}})s so the [additive identity]({{< relref "KBhadditive_identity.md" >}}) exists on both.

Hence:

\begin{equation}
\\{0\\} = U \cap V
\end{equation}

only if---
Suppose \\(U \cap W = \\{0\\}\\). Take also \\(u \in U\\) and \\(w \in W\\); we can construct an expression:

\begin{equation}
u + w = 0
\end{equation}

If we can show that there is only one unique combination of \\(u\\) and \\(w\\) to write \\(0\\), we satisfy the previous proof and therefore \\(U+W\\) is a direct sum.

The expression above implies that \\(w\\) is the [additive inverse]({{< relref "KBhinverses.md" >}}) of \\(u\\); therefore; \\(u = -w\\). As both \\(U\\) and \\(W\\) are [vector space]({{< relref "KBhvector_space.md" >}})s, their elements all have [inverse]({{< relref "KBhinverses.md" >}})s. As \\(u\\) is the inverse of \\(w\\), and given the definition of [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}) that \\(u \in U\\) and \\(w \in W\\), \\(u\\) and \\(w\\) are both in both \\(U\\) and \\(W\\).

As the intersection of \\(U\\) and \\(V\\) is \\(0\\), \\(u=w=0\\). Therefore, there is only one unique representation of \\(0\\), namely with \\(u=0,w=0\\), making \\(U+W\\) a [direct sum]({{< relref "KBhdirect_sum.md" >}}). \\(\blacksquare\\)


### [direct sum]({{< relref "KBhdirect_sum.md" >}}) proofs are not pairwise! {#direct-sum--kbhdirect-sum-dot-md--proofs-are-not-pairwise}

Those two proofs above only deal with pairs of [sum of subsets]({{< relref "KBhsum_of_subsets.md" >}}). If you have multiple subsets, they don't apply!


### every [subspace]({{< relref "KBhsubspace.md" >}}) of \\(V\\) is a part of a [direct sum]({{< relref "KBhdirect_sum.md" >}}) equaling to \\(V\\) {#every-subspace--kbhsubspace-dot-md--of-v-is-a-part-of-a-direct-sum--kbhdirect-sum-dot-md--equaling-to-v}

For every [subspace]({{< relref "KBhsubspace.md" >}}) \\(U\\) of a ****finite-dimensional**** \\(V\\), there is a [subspace]({{< relref "KBhsubspace.md" >}}) \\(W\\) of \\(V\\) for which \\(V = U \oplus W\\).

Because \\(V\\) is defined to be [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}), and the fact that a [finite-dimensional subspace]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}}) is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}), \\(U\\) is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}).

Therefore, because [every finite-dimensional vector space has a basis]({{< relref "KBhfinite_dimensional_vector_space.md#every-id-4ed27ed5-4edc-4ef4-afd7-9b8e3bcd9b96-finite-dimensional-vector-space-has-a-id-f88170b1-08b5-48a7-a7b5-1ace768e7b28-basis" >}}), \\(U\\) has a basis \\(u\_1, \dots u\_{m}\\).

Because [bases]({{< relref "KBhbasis.md" >}}) are [linearly independent]({{< relref "KBhlinear_independence.md" >}}), and \\(U \subset V\\), \\(u\_1, \dots u\_{m}\\) is a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\).

Because [a linearly independent list expends to a basis]({{< relref "KBhbasis.md#a-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent-list-expends-to-a-id-f88170b1-08b5-48a7-a7b5-1ace768e7b28-basis" >}}), we can construct \\(u\_1, \dots u\_{m}, w\_{1}, \dots w\_{n}\\) as the [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\). We will construct a \\(W = span(w\_1, \dots w\_{n})\\) --- the space formed as the [span]({{< relref "KBhspan.md" >}}) of the "extension" vectors to make the [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\).

Because the list \\(u\_{j}\dots w\_{k}\\) we made is a [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\), \\(U+W=V\\).

You can see this because every element \\(v \in V\\) can be constructed with a [linear combination]({{< relref "KBhlinear_combination.md" >}}) \\(u\_1, \dots u\_{m}, w\_{1}, \dots w\_{n}\\) (again, because this list shown to be a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\) therefore it [span]({{< relref "KBhspan.md" >}})s \\(V\\).) Then, to show that \\(U+W=V\\), we can collapse \\(a\_{1}u\_1\dots + a\_{m}u\_{m}=u \in U\\), and \\(c\_{1}w\_1 \dots +c\_{m}w\_{m} = w \in W\\). Hence, every element \\(v \in V\\) can be constructed by some \\(u \in U + w \in W\\), making \\(U+W=V\\).

Now, we have to show that the combination is a [direct sum]({{< relref "KBhdirect_sum.md" >}}). There is a few ways of going about this, the one presented by [Axler]({{< relref "KBhlinear_algebra_index.md" >}}) is leveraging the fact that [a sum of subsets is only a direct sum IFF their intersection is set containing \\(0\\)](#a-sum-of-subsets--kbhsum-of-subsets-dot-md--is-only-a-direct-sum--kbhdirect-sum-dot-md--iff--kbhequivalence-dot-md--their-intersection-is-set-containing-0)---that \\(U \cap W = \\{0\\}\\).

Given some element \\(v\\) that lives in the intersection between \\(U\\) and \\(W\\), it must be formed as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of two [linearly independent]({{< relref "KBhlinear_independence.md" >}}) lists (as \\(u\_j, \dots w\_{j}\\) is a [basis]({{< relref "KBhbasis.md" >}}), they are [linearly independent]({{< relref "KBhlinear_independence.md" >}}).)

Intuition: if an non-zero element lives in the intersection between two [linearly independent]({{< relref "KBhlinear_independence.md" >}}) lists which together is still [linearly independent]({{< relref "KBhlinear_independence.md" >}}), it must be able to be written by a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of other elements of that [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list to live in the intersection of the two lists---which is absurd (violates the definition of [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}})). The only element for which this is an exception is \\(0\\).

Actual proof:

suppose \\(v \in U \cap W\\), so \\(v = a\_1u\_1\dots +a\_{m}v\_{m}\\) as well as \\(v=b\_1w\_{1} + \dots b\_{n}w\_{n}\\). Subtracting the two lists results in:

\begin{equation}
0 = a\_1u\_1+ \dots a\_{m} u\_{m} - b\_1w\_1+ \dots +b\_{n}w\_{n}
\end{equation}

having already declared this list [linearly independent]({{< relref "KBhlinear_independence.md" >}}), we see that each scalar \\(a\_1, \dots -b\_{n}\\) must equal to \\(0\\) for this expression. Therefore, the intersection \\(v\\) must be \\(\\{0\\}\\) as \\(0u\_1 + \dots +0u\_{m}=0\\).
