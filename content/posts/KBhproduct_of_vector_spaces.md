+++
title = "Product of Vector Space"
author = ["Houjun Liu"]
draft = false
+++

A product of vector spaces is a [vector space]({{< relref "KBhvector_space.md" >}}) formed by putting an element from each space into an element of the vector.


## constituents {#constituents}

Suppose \\(V\_1 \dots V\_{m}\\) are [vector space]({{< relref "KBhvector_space.md" >}})s over the same field \\(\mathbb{F}\\)


## requirements {#requirements}

**Product** between \\(V\_1 \dots V\_{m}\\) is defined:

\begin{equation}
V\_1 \times \dots \times V\_{m} = \\{(v\_1, \dots, v\_{m}): v\_1 \in V\_1 \dots v\_{m} \in V\_{m}\\}
\end{equation}

"chain an element from each space into another vector"


## additional information {#additional-information}


### [operation]({{< relref "KBhoperation.md" >}})s on [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}})s {#operation--kbhoperation-dot-md--s-on-product-of-vector-space--kbhproduct-of-vector-spaces-dot-md--s}

The operations on the product of vector spaces are defined in the usual way.

Addition: \\((u\_1, \dots, u\_{m})+(v\_1, \dots, v\_{m}) = (u\_1+v\_1, \dots, u\_{m}+v\_{m})\\)

Scalar multiplication: \\(\lambda (v\_1 \dots v\_{m}) = (\lambda v\_1, \dots, \lambda v\_{m})\\)


### [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}})s is a [vector space]({{< relref "KBhvector_space.md" >}}) {#product-of-vector-space--kbhproduct-of-vector-spaces-dot-md--s-is-a-vector-space--kbhvector-space-dot-md}

The operations defined above inherits [closure]({{< relref "KBhclosed.md" >}}) from their respective vector spaces.

-   [additive identity]({{< relref "KBhadditive_identity.md" >}}): \\((0, \dots, 0)\\), taking the [zero]({{< relref "KBhzero.md" >}}) from each vector space
-   [additive inverse]({{< relref "KBhinverses.md" >}}): \\((-v\_1, \dots, -v\_{m})\\), taking the [additive inverse]({{< relref "KBhinverses.md" >}}) from each [vector space]({{< relref "KBhvector_space.md" >}})
-   scalar multiplicative identity: \\(1\\)
-   operations: [commutativity]({{< relref "KBhcommutivity.md" >}}), [associativity]({{< relref "KBhassociative.md" >}}), [distributivity]({{< relref "KBhdistributivity.md" >}})  --- inheriting from [vector space]({{< relref "KBhvector_space.md" >}})s

\\(\blacksquare\\)


### dimension of the [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}})s is the sum of the spaces' dimension {#dimension-of-the-product-of-vector-space--kbhproduct-of-vector-spaces-dot-md--s-is-the-sum-of-the-spaces-dimension}

Proof:

Take each \\(V\_{j}\\); construct a list such that, for each [basis]({{< relref "KBhbasis.md" >}}) vector in the [basis]({{< relref "KBhbasis.md" >}}) of \\(V\_{j}\\), we have an element of the list such that we have that basis vector in the \\(j^{th}\\) slot and \\(0\\) in all others.

This list is [linearly independent]({{< relref "KBhlinear_independence.md" >}}); and, a linear combination thereof span all of \\(V\_1 \times \dots \times V\_{m}\\). The length of this is the sum of the number of [basis]({{< relref "KBhbasis.md" >}}) vectors of each space, as desired. \\(\blacksquare\\)


### product summation map {#product-summation-map}

See: [product summation map]({{< relref "KBhproduct_summation_map.md" >}})