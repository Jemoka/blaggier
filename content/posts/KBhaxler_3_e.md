+++
title = "Axler 3.E"
author = ["Houjun Liu"]
draft = false
+++

No idea why this is so long!!!


## Key Sequence {#key-sequence}

Firehose of a chapter.

-   We first began an unrelated exploration in [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}})s ("tuples"):
    -   we show that the [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}})s is a [vector space]({{< relref "KBhvector_space.md" >}})
    -   because you can build a list out of zeroing every element except each one on each [basis]({{< relref "KBhbasis.md" >}}) of each element of the tuple sequentially, we learned that the [dimension of the Product of Vector Spaces is the sum of the spaces' dimension]({{< relref "KBhproduct_of_vector_spaces.md#dimension-of-the-id-a45b05c0-3e01-4c27-bc3b-543ff3606c66-product-of-vector-space-s-is-the-sum-of-the-spaces-dimension" >}}).
    -   we defined the product-to-sum map \\(\Gamma\\)
        -   [\\(U\_1 + \dots + U\_{m}\\) is a direct sum IFF \\(\Gamma\\) is injective]({{< relref "KBhproduct_summation_map.md#u-1-plus-dots-plus-u-m-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-id-fddf0648-91ea-4c5b-8298-fa0a30637cb7-iff-gamma-is-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}})
        -   and, as a result, [\\(U\_1 + \dots + U\_{m}\\) is a direct sum IFF \\(\dim (U\_1 + \dots + U\_{m}) = \dim U\_1 + \dots + \dim U\_{m}\\)]({{< relref "KBhproduct_summation_map.md#u-1-plus-dots-plus-u-m-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-iff-dim--u-1-plus-dots-plus-u-m--dim-u-1-plus-dots-plus-dim-u-m" >}})
-   We then tackled the fun part of this chapter, which is [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})s, [parallel]({{< relref "KBhparallel_linear_algebra.md" >}}) structures, [quotient space]({{< relref "KBhquotient_space.md" >}})s, [quotient map]({{< relref "KBhquotient_map.md" >}}) ([affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})ification maps)
    -   we learned an important and useful result that [two affine subsets parallel to \\(U\\) are either equal or disjoint]({{< relref "KBhparallel_linear_algebra.md#two-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-parallel-to-u-are-either-equal-or-disjoint" >}}) (\\(v-w \in U\\) means \\(v+U = w+U\\) means \\(v+U \cap w+U \neq \emptyset\\), means the first thing)
    -   we defined the [operations on quotient space]({{< relref "KBhquotient_space.md#operations-on-id-53548f85-b3c8-42ce-81e7-9016ed7bd280-quotient-space" >}}), and showed that [quotient space operations behave uniformly on equivalent affine subsets]({{< relref "KBhquotient_space.md#id-53548f85-b3c8-42ce-81e7-9016ed7bd280-quotient-space-operations-behave-uniformly-on-equivalent-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s" >}}). This, and the usual closer proof, demonstrates that [quotient space]({{< relref "KBhquotient_space.md" >}})s is a [vector space]({{< relref "KBhvector_space.md" >}})
    -   with the help of the [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})ification map (the [quotient map]({{< relref "KBhquotient_map.md" >}}) \\(\pi\\)), we show that the [dimension of a quotient space is the difference between dimensions of its constituents]({{< relref "KBhquotient_space.md#dimension-of-a-quotient-space-is-the-difference-between-dimensions-of-its-constituents" >}}) essentially by invoking [rank-nullity theorem]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}}) after knowing the fact that \\(null\ \pi = U\\) (because \\(u+U\\) is an [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) that has not been shifted (think about a line moving along itself... it doesn't move))
-   Then, and I'm not quite sure why, we defined \\(\widetilde{T}: V / null\ T \to W\\), for some \\(T: V\to W\\), defined as \\(\widetilde{T}(v+null\ T) = Tv\\).
    -   We show that the map is [Linear]({{< relref "KBhlinear_map.md" >}}), [injective]({{< relref "KBhinjectivity.md" >}}), its range is \\(range\ T\\), and so it forms an [isomorphism]({{< relref "KBhisomorphism.md" >}}) between \\(V / null\ T\\) and \\(range\ T\\).

Here's something: [products and quotients, the intuition]({{< relref "KBhproducts_and_quotients_the_intuition.md" >}})


## New Definitions {#new-definitions}

-   [Product of Vector Spaces]({{< relref "KBhproduct_of_vector_spaces.md" >}})
    -   [operations on Product of Vector Spaces]({{< relref "KBhproduct_of_vector_spaces.md#id-9700ea39-282d-48ef-a959-a416eee0d3ec-operation-s-on-id-a45b05c0-3e01-4c27-bc3b-543ff3606c66-product-of-vector-space-s" >}})
    -   [product summation map]({{< relref "KBhproduct_summation_map.md" >}}) \\(\Gamma\\)
-   [sum of vector and subspace]({{< relref "KBhsum_of_vector_and_subspace.md" >}})
-   [parallel]({{< relref "KBhparallel_linear_algebra.md" >}}) + [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})
-   [quotient space]({{< relref "KBhquotient_space.md" >}})
    -   [operations on the quotient space]({{< relref "KBhquotient_space.md#operations-on-id-53548f85-b3c8-42ce-81e7-9016ed7bd280-quotient-space" >}})
-   [quotient map]({{< relref "KBhquotient_map.md" >}})
-   [\\(\widetilde{T}\\)]({{< relref "KBht_twiddle.md" >}})


## Results and Their Proofs {#results-and-their-proofs}

-   [Product of Vector Spaces is a vector space]({{< relref "KBhproduct_of_vector_spaces.md#id-a45b05c0-3e01-4c27-bc3b-543ff3606c66-product-of-vector-space-s-is-a-id-123d705f-7ede-44bf-882a-04c2f123f7fc-vector-space" >}})
-   [dimension of the Product of Vector Spaces is the sum of the spaces' dimension]({{< relref "KBhproduct_of_vector_spaces.md#dimension-of-the-id-a45b05c0-3e01-4c27-bc3b-543ff3606c66-product-of-vector-space-s-is-the-sum-of-the-spaces-dimension" >}})
-   Results relating to \\(\Gamma\\)
    -   [\\(U\_1 + \dots + U\_{m}\\) is a direct sum IFF \\(\Gamma\\) is injective]({{< relref "KBhproduct_summation_map.md#u-1-plus-dots-plus-u-m-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-id-fddf0648-91ea-4c5b-8298-fa0a30637cb7-iff-gamma-is-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}})
    -   [\\(U\_1 + \dots + U\_{m}\\) is a direct sum IFF \\(\dim (U\_1 + \dots + U\_{m}) = \dim U\_1 + \dots + \dim U\_{m}\\)]({{< relref "KBhproduct_summation_map.md#u-1-plus-dots-plus-u-m-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-iff-dim--u-1-plus-dots-plus-u-m--dim-u-1-plus-dots-plus-dim-u-m" >}})
-   results relating to [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})s and [quotient space]({{< relref "KBhquotient_space.md" >}})s
    -   [two affine subsets parallel to \\(U\\) are either equal or disjoint]({{< relref "KBhparallel_linear_algebra.md#two-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-parallel-to-u-are-either-equal-or-disjoint" >}})
    -   [quotient space operations behave uniformly on equivalent affine subsets]({{< relref "KBhquotient_space.md#id-53548f85-b3c8-42ce-81e7-9016ed7bd280-quotient-space-operations-behave-uniformly-on-equivalent-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s" >}})
    -   [quotient space]({{< relref "KBhquotient_space.md" >}}) is a [vector space]({{< relref "KBhvector_space.md" >}}): bleh just prove it yourself. [additive identity]({{< relref "KBhadditive_identity.md" >}}) is \\(0+U\\) and [additive inverse]({{< relref "KBhinverses.md" >}}) is \\(-v + U\\).
    -   [dimension of a quotient space is the difference between dimensions of its constituents]({{< relref "KBhquotient_space.md#dimension-of-a-quotient-space-is-the-difference-between-dimensions-of-its-constituents" >}})
-   results relating to \\(\widetilde{T}\\)
    -   [\\(\widetilde{T}\\) is well defined]({{< relref "KBht_twiddle.md#widetilde-t-is-well-defined" >}})
    -   [properties of \\(\widetilde{T}\\)]({{< relref "KBht_twiddle.md#properties-of-widetilde-t" >}})
        -   it is linear
        -   it is injective
        -   its range is the range of \\(range\ T\\)
        -   it is an [isomorphism]({{< relref "KBhisomorphism.md" >}}) between \\(V / null\ T\\) and \\(range\ T\\)


## Questions for Jana {#questions-for-jana}

-   what's the point of learning about \\(\widetilde{T}\\)?
-   how are [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}})s and [quotient space]({{< relref "KBhquotient_space.md" >}}) opposites of each other?: [products and quotients, the intuition]({{< relref "KBhproducts_and_quotients_the_intuition.md" >}})


## Interesting Factoids {#interesting-factoids}

Happy Lunar New Year! Also, let's hope this is not a trend:

{{< figure src="/ox-hugo/2023-01-21_00-33-13_screenshot.png" >}}
