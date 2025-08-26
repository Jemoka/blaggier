+++
title = "product summation map"
author = ["Houjun Liu"]
draft = false
+++

Let \\(U\_1, \dots, U\_{m}\\) be [subspace]({{< relref "KBhsubspace.md" >}})s of \\(V\\); we define a linear

We define \\(\Gamma\\) to be a map \\(U\_1 \times \dots U\_{m} \to U\_1 + \dots + U\_{m}\\) such that:

\begin{equation}
\Gamma (u\_1, \dots, u\_{m}) = u\_1 + \dots + u\_{m}
\end{equation}

Essentially, \\(\Gamma\\) is the sum operation of the elements of the tuple made by the [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}})s.


## \\(U\_1 + \dots + U\_{m}\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) \\(\Gamma\\) is [injective]({{< relref "KBhinjectivity.md" >}}) {#u-1-plus-dots-plus-u-m-is-a-direct-sum--kbhdirect-sum-dot-md--iff--kbhequivalence-dot-md--gamma-is-injective--kbhinjectivity-dot-md}

Proof:

Given \\(\Gamma\\) is injective:
Given [injectivity]({{< relref "KBhinjectivity.md" >}}), we have that [injectivity implies that null space is \\(\\{0\\}\\)]({{< relref "KBhinjectivity.md#injectivity-implies-that-id-767a441d-4931-4fad-aa8e-c6b001e8b507-null-space-is-0" >}}). Now, because the only way to produce \\(0\\) is to have the input product/tuple be 0, \\(u\_1 \dots u\_{m} = 0\\). So, given [a sum of subsets is a direct sum IFF there is only one way to write \\(0\\)]({{< relref "KBhdirect_sum.md#a-id-1b800658-2f83-4802-acfd-2d15cf5a1d74-sum-of-subsets-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-id-fddf0648-91ea-4c5b-8298-fa0a30637cb7-iff-there-is-only-one-way-to-write-0" >}}), the sum is a [direct sum]({{< relref "KBhdirect_sum.md" >}}).

Given [direct sum]({{< relref "KBhdirect_sum.md" >}}):
Reverse the logic of above directly. Given its a direct sum, the only way to be in the [null space]({{< relref "KBhnull_space.md" >}}) of \\(\Gamma\\) (i.e. have the sum of the elements of tuple by \\(0\\)) is by taking each \\(u\_1 \dots u\_{m}\\) to \\(0\\). Now, [injectivity implies that null space is \\(\\{0\\}\\)]({{< relref "KBhinjectivity.md#injectivity-implies-that-id-767a441d-4931-4fad-aa8e-c6b001e8b507-null-space-is-0" >}}), so \\(\Gamma\\) is [injective]({{< relref "KBhinjectivity.md" >}}). \\(\blacksquare\\)


### Aside: {#aside}

\\(\Gamma\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}) because product of vector-spaces is simply the pre-combined version of the sum.

So a corollary of the above result is that:  \\(U\_1 + \dots + U\_{m}\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) [IFF]({{< relref "KBhequivalence.md" >}}) \\(\Gamma\\) is [invertable]({{< relref "KBhinvertability.md" >}}), because [injectivity and surjectivity implies invertability]({{< relref "KBhinvertability.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-and-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-implies-id-ff05739c-6e70-46ba-9d56-0958ef847f57-invertability" >}}).


## \\(U\_1 + \dots + U\_{m}\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) IFF \\(\dim (U\_1 + \dots + U\_{m}) = \dim U\_1 + \dots + \dim U\_{m}\\) {#u-1-plus-dots-plus-u-m-is-a-direct-sum--kbhdirect-sum-dot-md--iff-dim--u-1-plus-dots-plus-u-m--dim-u-1-plus-dots-plus-dim-u-m}

\\(\Gamma\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}) for all cases because product of vector-spaces is simply the pre-combined version of the sum.

So, by [rank-nullity theorem]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}}), \\(\dim (U\_1 \times \dots U\_{m}) = \dim null\ \Gamma + \dim (U\_1 + \dots + U\_{m})\\).

Now, \\(\dim null\ \Gamma = 0\\) [IFF]({{< relref "KBhequivalence.md" >}}) \\(\dim (U\_1 \times \dots U\_{m}) = 0 + \dim (U\_1 + \dots + U\_{m})\\).

Now, [dimension of the Product of Vector Spaces is the sum of the spaces' dimension]({{< relref "KBhproduct_of_vector_spaces.md#dimension-of-the-id-a45b05c0-3e01-4c27-bc3b-543ff3606c66-product-of-vector-space-s-is-the-sum-of-the-spaces-dimension" >}}).

So: \\(\dim null\ \Gamma = 0\\) [IFF]({{< relref "KBhequivalence.md" >}}) \\(\dim U\_1 + \dots + \dim U\_{m} = 0 + \dim (U\_1 + \dots + U\_{m})\\).

Now, [\\(U\_1 + \dots + U\_{m}\\) is a direct sum IFF \\(\Gamma\\) is injective](#u-1-plus-dots-plus-u-m-is-a-direct-sum--kbhdirect-sum-dot-md--iff--kbhequivalence-dot-md--gamma-is-injective--kbhinjectivity-dot-md), and from above \\(\dim null\ \Gamma = 0\\) (that \\(\Gamma\\) is [injective]({{< relref "KBhinjectivity.md" >}})) [IFF]({{< relref "KBhequivalence.md" >}}) \\(\dim U\_1 + \dots + \dim U\_{m} = 0 + \dim (U\_1 + \dots + U\_{m})\\).

So,  \\(U\_1 + \dots + U\_{m}\\) is a [direct sum]({{< relref "KBhdirect_sum.md" >}}) IFF \\(\dim (U\_1 + \dots + U\_{m}) = \dim U\_1 + \dots + \dim U\_{m}\\), as desired. \\(\blacksquare\\)

(Note that this proof is built out of a series of [IFF]({{< relref "KBhequivalence.md" >}})s, so it goes in both directions.)