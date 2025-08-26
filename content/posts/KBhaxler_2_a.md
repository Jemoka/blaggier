+++
title = "Axler 2.A"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}

-   we defined the combination of a list of vectors as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) and defined set of all [linear combination]({{< relref "KBhlinear_combination.md" >}}) of [vector]({{< relref "KBhvector.md" >}})s to be called a [span]({{< relref "KBhspan.md" >}})
-   we defined the idea of a [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) vis a vi [spanning]({{< relref "KBhspan.md#spans" >}})
-   we took a god-forsaken divergence into [polynomial]({{< relref "KBhpolynomial.md" >}})s that will surely not come back and bite us in chapter 4
-   we defined [linear independence]({{< relref "KBhlinear_independence.md" >}}) + [linear dependence]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}) and, from those definition, proved the actual usecase of these concepts which is the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}})
-   we apply the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}) to show that [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}}) as well as that [finite-dimensional vector spaces make finite subspaces]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}}). Both of these proofs work by making [linearly independent]({{< relref "KBhlinear_independence.md" >}}) lists---the former by taking a [spanning]({{< relref "KBhspan.md#spans" >}}) list and making it smaller and smaller, and the latter by taking a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list and making it bigger and bigger


## New Definitions {#new-definitions}

-   [linear combination]({{< relref "KBhlinear_combination.md" >}})
-   [span]({{< relref "KBhspan.md" >}}) + "[spans]({{< relref "KBhspan.md#spans" >}})"
-   [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})
    -   [infinite-demensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})
    -   [finite-dimensional subspaces]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}})
-   [polynomial]({{< relref "KBhpolynomial.md" >}})
    -   [\\(\mathcal{P}(\mathbb{F})\\)]({{< relref "KBhpolynomial.md#mathcal-p--mathbb-f" >}})
    -   [\\(\mathcal{P}\_{m}(\mathbb{F})\\)]({{< relref "KBhpolynomial.md#mathcal-p-m--mathbb-f" >}})
    -   [degree of a polynomial \\(\deg p\\)]({{< relref "KBhpolynomial.md#degree-of-a-polynomial-deg-p" >}})
-   [linear independence]({{< relref "KBhlinear_independence.md" >}}) and [linear dependence]({{< relref "KBhlinear_independence.md#linearly-dependent" >}})
-   [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}})


## Results and Their Proofs {#results-and-their-proofs}

-   [span is the smallest subspace containing all vectors in the list]({{< relref "KBhspan.md#span-is-the-smallest-subspace-containing-all-vectors-in-the-list" >}})
-   [\\(\mathcal{P}(\mathbb{F})\\) is a vector space over \\(\mathbb{F}\\)]({{< relref "KBhpolynomial.md#mathcal-p--mathbb-f--is-a-vector-space-over-mathbb-f" >}})
-   the world famous [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}) and its fun [issue]({{< relref "KBhlinear_dependence_lemma.md#issue" >}})
-   [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}})
-   [subspaces of inite-dimensional vector spaces is finite dimensional]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}})


## Questions for Jana {#questions-for-jana}

-   ~~obviously [polynomial]({{< relref "KBhpolynomial.md" >}})s are non-linear structures; under what conditions make them nice to work with in linear algebra?~~
-   ~~what is the "obvious way" to change [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}})'s part \\(b\\) to make \\(v\_1=0\\) work?~~
-   for the [finite-dimensional subspaces]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}}) proof, though we know that the process terminates, how do we know that it terminates at a [spanning]({{< relref "KBhspan.md#spans" >}}) list of \\(U\\) and not just a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(U\\)?
-   direct sum and linear independence related; how exactly?


## Interesting Factoids {#interesting-factoids}

I just ate an entire Chinese new-year worth of food while typing this up. That's worth _something_ right