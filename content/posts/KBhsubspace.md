+++
title = "subspace"
author = ["Houjun Liu"]
draft = false
+++

A [subspace]({{< relref "KBhsubspace.md" >}}) is a [vector space]({{< relref "KBhvector_space.md" >}}) which is a subset of a [vector space]({{< relref "KBhvector_space.md" >}}), using the same [addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) operations. Intuitively, a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(\mathbb{R}^{2}\\) are all the lines through the origin as well as \\(\\{0\\}\\); a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(\mathbb{R}^{3}\\) are all the planes through the origin as well as \\(\\{0\\}\\), etc. etc.


## constituents {#constituents}

-   [vector space]({{< relref "KBhvector_space.md" >}}) \\(V\\)
-   A subset \\(U \subset V\\) which is itself a [vector space]({{< relref "KBhvector_space.md" >}})


## requirements {#requirements}

You check if \\(U\\) is a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(V\\) by checking [IFF]({{< relref "KBhequivalence.md" >}}) the following three conditions:

-   [additive identity]({{< relref "KBhadditive_identity.md" >}}): \\(0 \in U\\)
-   [closed]({{< relref "KBhclosed.md" >}}) under the same [addition]({{< relref "KBhadding.md" >}}) as in \\(V\\): \\(u,w \in U: u+w \in U\\)
-   [closed]({{< relref "KBhclosed.md" >}}) under [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) as in \\(V\\): \\(a \in \mathbb{F}\\) and \\(u \in U\\) means \\(au \in U\\)

Yes, by only checking three you can prove everything else.


## additional information {#additional-information}


### simplified check for subspace {#simplified-check-for-subspace}


#### [commutativity]({{< relref "KBhcommutivity.md" >}}), [associativity]({{< relref "KBhassociative.md" >}}), [distributivity]({{< relref "KBhdistributivity.md" >}}) {#commutativity--kbhcommutivity-dot-md--associativity--kbhassociative-dot-md--distributivity--kbhdistributivity-dot-md}

These properties are inherited from \\(V\\) as they hold for every element in \\(V\\) so they will hold for \\(U \subset V\\).


#### [additive inverse]({{< relref "KBhinverses.md" >}}) {#additive-inverse--kbhinverses-dot-md}

Because [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is defined, and we proved in [Axler 1.B]({{< relref "KBhaxler_1_b.md" >}}) that \\(-1v=-v\\) (proof: \\(v+(-1)v = (1+(-1))v = 0v = 0\\)).


#### [multiplicative identity]({{< relref "KBhmultiplicative_identity.md" >}}) {#multiplicative-identity--kbhmultiplicative-identity-dot-md}

Its still \\(1\\).

\\(\blacksquare\\)


### finite-dimensional subspaces {#finite-dimensional-subspaces}

Every [subspace]({{< relref "KBhsubspace.md" >}}) of a [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) is a [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}).

We prove this result again via induction.


#### base case {#base-case}

If \\(U=\\{0\\}\\), we know \\(U\\) is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) and are done. If not, take some \\(v\_1 \in U\\) and create a list with only \\(v\_1\\) thus far; the invariant here is that the list is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) as we see that a list containing this one element as indeed [linearly independent]({{< relref "KBhlinear_independence.md" >}}).


#### case \\(j\\) {#case-j}

If the [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list we created \\(v\_1, \dots v\_{j-1}\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(U\\), we are done. We have created a finite list which [spans]({{< relref "KBhspan.md#spans" >}}) \\(U\\), making \\(U\\) [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}).

If not, that means that we can pick some \\(u \in U\\) that cannot be written as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of the invariantly [linearly independent]({{< relref "KBhlinear_independence.md" >}}) vectors \\(v\_1, \dots v\_{j-1}\\). We append \\(u\\) to the list, naming it \\(v\_{j}\\). As \\(v\_{j}\\) cannot be written as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of the original list, appending it to the list doesn't make the list dependent. This means that the list is still [linearly independent]({{< relref "KBhlinear_independence.md" >}}).


#### induction {#induction}

Therefore, we have constructed a list of increasing length that is [linearly independent]({{< relref "KBhlinear_independence.md" >}}). By the fact that [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}}), and the fact that the [spanning]({{< relref "KBhspan.md#spans" >}}) list of \\(V\\) has finite length (it is given that \\(V\\) is a [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})), the increasingly longer [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list---building upwards to eventually [span]({{< relref "KBhspan.md" >}}) \\(U\\) in finite length.