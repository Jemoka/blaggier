+++
title = "dimension"
author = ["Houjun Liu"]
draft = false
+++

The [dimension]({{< relref "KBhdimension.md" >}}) of a [vector space]({{< relref "KBhvector_space.md" >}}) is the length of any [basis]({{< relref "KBhbasis.md" >}}) in the [vector space]({{< relref "KBhvector_space.md" >}}). It is denoted as \\(\dim V\\).


## additional information {#additional-information}

See also [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) and [infinite-demensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})


### dimension of subspace is smaller or equal to that of its parent {#dimension-of-subspace-is-smaller-or-equal-to-that-of-its-parent}

If we have a [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) \\(V\\) and a [subspace]({{< relref "KBhsubspace.md" >}}) thereof \\(U\\), then \\(\dim U \leq \dim V\\).

Firstly, the [every subspace of a finite-dimensional vector space is a finite-dimensional vector space]({{< relref "KBhsubspace.md#finite-dimensional-subspaces" >}}) is itself a [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}). Therefore, it has a finite dimension.

Then, we will simply think of the [basis]({{< relref "KBhbasis.md" >}}) of \\(U\\) as an [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\); and of course, the [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\). As [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}}), we have that length of [basis]({{< relref "KBhbasis.md" >}}) of \\(U \leq\\) length of [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

This makes \\(\dim U \leq \dim V\\), as desired. \\(\blacksquare\\)


### lists of right length are a [basis]({{< relref "KBhbasis.md" >}}) {#lists-of-right-length-are-a-basis--kbhbasis-dot-md}

These are two results that tell us if you are given a list of [list]({{< relref "KBhlist.md" >}}) of right length, one condition ([spanning]({{< relref "KBhspan.md#spans" >}}) or [linear independence]({{< relref "KBhlinear_independence.md" >}})) can tell you that they are a [basis]({{< relref "KBhbasis.md" >}}). It's also known (as a John McHugh special:tm:) as the Half Is Good Enough theorems.


#### linearly independent list of length dim V are a basis of V {#linearly-independent-list-of-length-dim-v-are-a-basis-of-v}

Begin with an [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\) of length \\(\dim V\\). We aim to extend this list into a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

As we know all [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\) must have length \\(\dim V\\), and the list is already length \\(\dim V\\), no extension is needed to form a [basis]({{< relref "KBhbasis.md" >}}).

As [every linearly independent list expends to a basis]({{< relref "KBhbasis.md#a-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent-list-expends-to-a-id-f88170b1-08b5-48a7-a7b5-1ace768e7b28-basis" >}}), we conclude that the list is already a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), as desired \\(\blacksquare\\).


#### spanning list of length of dim V are a basis of V {#spanning-list-of-length-of-dim-v-are-a-basis-of-v}

Begin with a [spanning]({{< relref "KBhspan.md#spans" >}}) list in \\(V\\) of length \\(\dim V\\). We aim to reduce this list into a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

As we know all [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\) must have length \\(\dim V\\), and the list is already length \\(\dim V\\), no reduction is needed to form a [basis]({{< relref "KBhbasis.md" >}}).

As [all spanning lists contains a basis of which you are spanning]({{< relref "KBhbasis.md#all-id-e8109222-5548-4d08-b6df-8f933f2dbb36-spanning-lists-contains-a-id-f88170b1-08b5-48a7-a7b5-1ace768e7b28-basis-of-which-you-are-id-e8109222-5548-4d08-b6df-8f933f2dbb36-spanning" >}}), we conclude that the list is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), as desired \\(\blacksquare\\).


### [dimension]({{< relref "KBhdimension.md" >}}) of sums {#dimension--kbhdimension-dot-md--of-sums}

See [dimension of sums]({{< relref "KBhsum_of_subsets.md#id-07b04334-5ae7-457c-bc3e-92feed8fc2cc-dimension-of-sums" >}})