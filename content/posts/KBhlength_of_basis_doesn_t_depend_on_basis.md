+++
title = "Length of Basis Doesn't Depend on Basis"
author = ["Houjun Liu"]
draft = false
+++

Any two [basis]({{< relref "KBhbasis.md" >}}) of [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) have the same length.


## constituents {#constituents}

-   A [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) \\(V\\)
-   Basis \\(B\_1\\), \\(B\_2\\) be bases in \\(V\\)


## requirements {#requirements}

Given \\(B\_1\\), \\(B\_2\\) are [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\), we know that they are both [linearly independent]({{< relref "KBhlinear_independence.md" >}}) and [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\). We have that the [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}}).

Let's take first \\(B\_1\\) as [linearly independent]({{< relref "KBhlinear_independence.md" >}}) and \\(B\_2\\) as [spanning]({{< relref "KBhspan.md#spans" >}}):

We have then \\(len(B\_1) \leq len(B\_2)\\)

Swapping roles:

We have then \\(len(B\_2) \leq len(B\_1)\\)

As both of this conditions are true, we have that \\(len(B\_1)=len(B\_{2})\\). \\(\blacksquare\\)