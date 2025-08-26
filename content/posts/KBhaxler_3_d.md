+++
title = "Axler 3.D"
author = ["Houjun Liu"]
draft = false
+++

[isomorphism]({{< relref "KBhisomorphism.md" >}})s. Somebody's new favourite word since last year.


## Key Sequence {#key-sequence}

-   we showed that a [linear map's inverse is unique]({{< relref "KBhinvertability.md#linear-map-inverse-is-unique" >}}), and so named the inverse \\(T^{-1}\\)
-   we then showed an important result, that [injectivity and surjectivity implies invertability]({{< relref "KBhinvertability.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-and-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-implies-id-ff05739c-6e70-46ba-9d56-0958ef847f57-invertability" >}})
-   this property allowed us to use [invertable]({{< relref "KBhinvertability.md" >}}) maps to define [isomorphic]({{< relref "KBhisomorphism.md" >}}) spaces, naming the [invertable]({{< relref "KBhinvertability.md" >}}) map between them as the [isomorphism]({{< relref "KBhisomorphism.md" >}})
    -   we see that [having the same dimension is enough to show invertability (IFF)]({{< relref "KBhisomorphism.md#two-vector-spaces-are-isomorphic-iff-they-have-the-same-dimension" >}}), because we can use [basis of domain]({{< relref "KBhbasis_of_domain.md" >}}) to map the [basis]({{< relref "KBhbasis.md" >}}) of one space to another
    -   we then use that property to establish that [matricies and linear maps have an isomorphism between them]({{< relref "KBhisomorphism.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matricies-and-id-17f3b01c-4945-4268-8da4-9887d960596b-linear-map-s-from-the-right-id-07b04334-5ae7-457c-bc3e-92feed8fc2cc-dimension-s-are-id-3f5ba3a5-15d4-4b58-99de-09eb1e4713cb-isomorphic" >}}): namely, the matrixify operator \\(\mathcal{M}\\).
    -   this [isomorphism]({{< relref "KBhisomorphism.md" >}}) allow us to show that the [dimension]({{< relref "KBhdimension.md" >}}) of a set of [Linear Map]({{< relref "KBhlinear_map.md" >}})s is the product of the [dimension]({{< relref "KBhdimension.md" >}})s of their domain and codomain (that [\\(\dim \mathcal{L}(V,W) = (\dim V)(\dim W)\\)]({{< relref "KBhisomorphism.md#dim-mathcal-l--v-w----dim-v----dim-w" >}}))
-   We then, for some unknown reason, decided that right this second we gotta define [matrix of a vector]({{< relref "KBhmatricies.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matrix-of-a-vector" >}}), and that [linear map applications are like matrix multiplication]({{< relref "KBhmatrix_multiplication.md#linear-maps-are-like-matrix-multiplication" >}}) because of it. Not sure how this relates
-   finally, we defined a [Linear Map]({{< relref "KBhlinear_map.md" >}}) from a space to itself as an [operator]({{< relref "KBhoperator.md" >}})
    -   we finally show an important result that, despite not being true for [infinite-demensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}), [injectivity is surjectivity in finite-dimensional operators]({{< relref "KBhoperator.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-is-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-in-id-4ed27ed5-4edc-4ef4-afd7-9b8e3bcd9b96-finite-dimensional-id-36e84a46-76f1-481e-b031-8ab2f0da0aa8-operator-s" >}})


## New Definitions {#new-definitions}

-   [invertability]({{< relref "KBhinvertability.md" >}})
-   [isomorphism]({{< relref "KBhisomorphism.md" >}}) + [isomorphic]({{< relref "KBhisomorphism.md" >}}) [vector space]({{< relref "KBhvector_space.md" >}})s
-   [matrix of a vector]({{< relref "KBhmatricies.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matrix-of-a-vector" >}})
-   [operator]({{< relref "KBhoperator.md" >}})


## Results and Their Proofs {#results-and-their-proofs}

-   [linear map inverse is unique]({{< relref "KBhinvertability.md#linear-map-inverse-is-unique" >}})
-   [injectivity and surjectivity implies invertability]({{< relref "KBhinvertability.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-and-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-implies-id-ff05739c-6e70-46ba-9d56-0958ef847f57-invertability" >}})
-   [two vector spaces are isomorphic IFF they have the same dimension]({{< relref "KBhisomorphism.md#two-vector-spaces-are-isomorphic-iff-they-have-the-same-dimension" >}})
-   [matricies and Linear Maps from the right dimensions are isomorphic]({{< relref "KBhisomorphism.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matricies-and-id-17f3b01c-4945-4268-8da4-9887d960596b-linear-map-s-from-the-right-id-07b04334-5ae7-457c-bc3e-92feed8fc2cc-dimension-s-are-id-3f5ba3a5-15d4-4b58-99de-09eb1e4713cb-isomorphic" >}})
-   [\\(\dim \mathcal{L}(V,W) = (\dim V)(\dim W)\\)]({{< relref "KBhisomorphism.md#dim-mathcal-l--v-w----dim-v----dim-w" >}})
-   \\(\mathcal{M}(T)\_{.,k} = \mathcal{M}(Tv\_{k})\\), a result of how everything is defined (see [matrix of a vector]({{< relref "KBhmatricies.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matrix-of-a-vector" >}}))
    -   "each column of a [matrix]({{< relref "KBhmatricies.md" >}}) represents where each of the [basis]({{< relref "KBhbasis.md" >}}) of the input gets taken to"
    -   So applying a vector to a matrix shows the linear combination of what where the basis sent
-   [linear maps are like matrix multiplication]({{< relref "KBhmatrix_multiplication.md#linear-maps-are-like-matrix-multiplication" >}})
-   [injectivity is surjectivity in finite-dimensional operators]({{< relref "KBhoperator.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-is-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-in-id-4ed27ed5-4edc-4ef4-afd7-9b8e3bcd9b96-finite-dimensional-id-36e84a46-76f1-481e-b031-8ab2f0da0aa8-operator-s" >}})


## Questions for Jana {#questions-for-jana}

-   ~~why doesn't axler just say the "[basis of domain]({{< relref "KBhbasis_of_domain.md" >}})" directly (i.e. he did a lin comb instead) for the second direction for the [two vector spaces are isomorphic IFF they have the same dimension]({{< relref "KBhisomorphism.md#two-vector-spaces-are-isomorphic-iff-they-have-the-same-dimension" >}}) proof?~~ because the next steps for [spanning]({{< relref "KBhspan.md#spans" >}}) ([surjectivity]({{< relref "KBhsurjectivity.md" >}})) and [linear independence]({{< relref "KBhlinear_independence.md" >}}) ([injectivity]({{< relref "KBhinjectivity.md" >}})) is made more obvious
-   ~~clarify the [matricies and Linear Maps from the right dimensions are isomorphic]({{< relref "KBhisomorphism.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matricies-and-id-17f3b01c-4945-4268-8da4-9887d960596b-linear-map-s-from-the-right-id-07b04334-5ae7-457c-bc3e-92feed8fc2cc-dimension-s-are-id-3f5ba3a5-15d4-4b58-99de-09eb1e4713cb-isomorphic" >}}) proof~~
-   ~~what is the "multiplication by \\(x^{2}\\)" [operator]({{< relref "KBhoperator.md" >}})?~~ literally multiplying by \\(x^{2}\\)
-   ~~how does the [matrix of a vector]({{< relref "KBhmatricies.md#id-7a09bc5f-6de2-485f-8c29-b94999299cc6-matrix-of-a-vector" >}}) detour relate to the content before and after? I suppose an [isomorphism]({{< relref "KBhisomorphism.md" >}}) exists but it isn't explicitly used in the [linear maps are like matrix multiplication]({{< relref "KBhmatrix_multiplication.md#linear-maps-are-like-matrix-multiplication" >}}) proof, which is the whole point~~ because we needed to close the loop of being able to linear algebra with [matricies]({{< relref "KBhmatricies.md" >}}) completely, which we didn't know without the [isomorphism]({{< relref "KBhisomorphism.md" >}}) between matricies and maps


## Interesting Factoids {#interesting-factoids}