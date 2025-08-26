+++
title = "span (linear algebra)"
author = ["Houjun Liu"]
draft = false
+++

The [span]({{< relref "KBhspan.md" >}}) of a bunch of [vector]({{< relref "KBhvector.md" >}})s is the set of all [linear combination]({{< relref "KBhlinear_combination.md" >}})s of that bunch of [vector]({{< relref "KBhvector.md" >}})s. We denote it as \\(span(v\_1, \dots v\_{m)}\\).


## constituents {#constituents}

-   for constructing a [linear combination]({{< relref "KBhlinear_combination.md" >}})
    -   a [list]({{< relref "KBhlist.md" >}}) of [vector]({{< relref "KBhvector.md" >}})s \\(v\_1,\dots,v\_{m}\\)
    -   and scalars \\(a\_1, a\_2, \dots, a\_{m} \in \mathbb{F}\\)


## requirements {#requirements}

\begin{equation}
span(v\_{1}..v\_{m}) = \\{a\_1v\_1+\dots +a\_{m}v\_{m}:a\_1\dots a\_{m} \in \mathbb{F}\\}
\end{equation}


## additional information {#additional-information}


### span is the smallest subspace containing all vectors in the list {#span-is-the-smallest-subspace-containing-all-vectors-in-the-list}

Part 1: that a [span]({{< relref "KBhspan.md" >}}) of a list of vectors is a [subspace]({{< relref "KBhsubspace.md" >}}) containing those [vector]({{< relref "KBhvector.md" >}})s

By taking all \\(a\_{n}\\) as \\(0\\), we show that the additive identity exists.

Taking two [linear combination]({{< relref "KBhlinear_combination.md" >}})s and [adding]({{< relref "KBhadding.md" >}}) them (i.e. adding two members of the [span]({{< relref "KBhspan.md" >}})) is still in the [span]({{< relref "KBhspan.md" >}}) by [commutativity]({{< relref "KBhcommutivity.md" >}}) and [distributivity]({{< relref "KBhdistributivity.md" >}}) (reorganize each constant \\(a\_{1}\\) together)---creating another [linear combination]({{< relref "KBhlinear_combination.md" >}}) and therefore a member of the [span]({{< relref "KBhspan.md" >}}).

Scaling a [linear combination]({{< relref "KBhlinear_combination.md" >}}), by [distributivity]({{< relref "KBhdistributivity.md" >}}), just scales the scalars and create yet another [linear combination]({{< relref "KBhlinear_combination.md" >}}).

Part 2: a [subspace]({{< relref "KBhsubspace.md" >}}) containing the list of vectors contain the span

[subspace]({{< relref "KBhsubspace.md" >}})s are closed under [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) and [addition]({{< relref "KBhadding.md" >}}). Therefore, we can just construct every [linear combination]({{< relref "KBhlinear_combination.md" >}}).

By double-containment, a [subspace]({{< relref "KBhsubspace.md" >}}) is the smallest [subspace]({{< relref "KBhsubspace.md" >}}) containing all vectors. \\(\blacksquare\\)


### spans {#spans}

If \\(span(v\_1, \dots v\_{m})\\) equals \\(V\\), we say that \\(v\_1, \dots, v\_{m}\\) [spans](#spans) \\(V\\).

NOTE! the two things have to be equal---if the [span]({{< relref "KBhspan.md" >}}) of a set of [vector]({{< relref "KBhvector.md" >}})s is _larger_ than \\(V\\), they do **not** span \\(V\\).


### length of linearly-independent list \\(\leq\\) length of spanning list {#length-of-linearly-independent-list-leq-length-of-spanning-list}

[see here]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}}).