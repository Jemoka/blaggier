+++
title = "linear independence"
author = ["Houjun Liu"]
draft = false
+++

A [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list is a list of vectors such that there is one unique choice of scalars to be able to construct each member of their [span]({{< relref "KBhspan.md" >}}).

Based on the same technique as in the proof that [a sum of subsets is a direct sum IFF there is only one way to write \\(0\\)]({{< relref "KBhdirect_sum.md#a-id-1b800658-2f83-4802-acfd-2d15cf5a1d74-sum-of-subsets-is-a-id-4e586014-c91f-4d52-98bb-a2fe11a75007-direct-sum-id-fddf0648-91ea-4c5b-8298-fa0a30637cb7-iff-there-is-only-one-way-to-write-0" >}}), we can show that in a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) [list]({{< relref "KBhlist.md" >}}), there is (IFF) only one way to write the zero vector as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of that [list]({{< relref "KBhlist.md" >}}) of vectors ---namely, the trivial representation of taking each vector to \\(0\\). In fact, we will actually use that as the formal definition of [linear independence]({{< relref "KBhlinear_independence.md" >}}).

This definition of [linear independence]({{< relref "KBhlinear_independence.md" >}}) is the _result_ of the definition for [direct sum]({{< relref "KBhdirect_sum.md" >}}).

See also [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}).


## constituents {#constituents}

-   A list of vectors \\(v\_1, \dots, v\_{m}\\) in \\(V\\)


## requirements {#requirements}

Formally, a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list is defined by there being only one choice of scalars \\(a\_1, \dots, a\_{m} \in \mathbb{F}\\) to write \\(0\\) as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(v\_{1},\dots, v\_{m}\\): namely, by taking each \\(a\_1, \dots a\_{m}\\) to \\(0\\).

We also declare \\(()\\) to be [linearly independent]({{< relref "KBhlinear_independence.md" >}}).


## additional information {#additional-information}


### linearly dependent {#linearly-dependent}

a list is [linearly dependent](#linearly-dependent) if.... its not [linearly independent]({{< relref "KBhlinear_independence.md" >}}).

oh. my. god.

Based on the same formal definition, this means that a [linearly dependent](#linearly-dependent) list is defined by the fact that there can be more than one way of writing \\(0\\) as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of that [list]({{< relref "KBhlist.md" >}}) of [vector]({{< relref "KBhvector.md" >}})s, where one of the ways makes it so that writing \\(0\\) does not require all zero scalars.


### length of linearly-independent list \\(\leq\\) length of spanning list {#length-of-linearly-independent-list-leq-length-of-spanning-list}

A [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list should be smaller or equal in length to a [spanning]({{< relref "KBhspan.md#spans" >}}) list.

The canonical proof is one by induction.

Suppose \\(u\_1, \dots u\_{m}\\) is an [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\). Take also a list \\(w\_1, \dots w\_{n}\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\). We desire that \\(m\leq n\\). We create a list of length \\(n\\) containing all of the \\(w\\) thus far. Our invariant is that \\(len(B) = n\\). This proof essentially uses [Floyd's Invariant Method]({{< relref "KBhfloyd_s_invariant_method.md" >}}) (compsci topic for Jack's understanding only.)


#### base case {#base-case}

take the [spanning]({{< relref "KBhspan.md#spans" >}}) list of \\(V\\) we declared named \\(w\_1, \dots w\_{n}\\). Given it spans, adding any other vector in \\(V\\), if \\(w\_1, \dots w\_{n}\\) isn't already [linearly dependent](#linearly-dependent), will make it [linearly dependent](#linearly-dependent). This is because you can write the new vector \\(v \in V\\) which you add as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of the previous [vector]({{< relref "KBhvector.md" >}})s already as they already span \\(V\\).

By the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}), you can remove one of the [vector]({{< relref "KBhvector.md" >}})s in the new [linearly dependent](#linearly-dependent) list while keeping the list still [spanning]({{< relref "KBhspan.md#spans" >}}) \\(V\\).

Now, construct the list:

\begin{equation}
u\_1, w\_1, \dots w\_{n}
\end{equation}

where, \\(u\_{1} \in V\\) is taken from that [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\). By the statement above, via applying the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}), we can create a list that [span]({{< relref "KBhspan.md" >}})s the same space by taking away one of the \\(w\_{j}\\) (we can't take \\(u\_1\\) because it is at the first position, and we can't grantee its $0$---see the [issue]({{< relref "KBhlinear_dependence_lemma.md#issue" >}}) with the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}})). We now have a list \\(B\\) with length \\(n\\) with \\(u\_1\\) and the rest of the \\(w\\) not taken away which span \\(V\\)


#### case number \\(j\\) {#case-number-j}

Given a spanning list \\(B\\) of \\(V\\) with length \\(n\\), with some parts \\(u\_1, \dots, u\_{j-1}, w\_{j}, \dots w\_{n}\\). We now include \\(u\_{j}\\) in the list, placing it after \\(u\_{j-1}\\). As the list pre-inclusion is already a [spanning]({{< relref "KBhspan.md#spans" >}}) list of \\(V\\), any new [vector]({{< relref "KBhvector.md" >}})s from \\(V\\) added will necessarily be able to be written as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of the other vectors already in the list. Therefore, we know that---if not already pre-inclusion---the list is [linearly dependent](#linearly-dependent).

Because the first half (\\(u\_1,\dots u\_{j}\\)) of this new list is [linearly independent]({{< relref "KBhlinear_independence.md" >}}) (given), the bit that "causes" the linear dependence is in the \\(w\\) (i.e. each \\(u\\) cannot be written by other \\(u\\).) Therefore, we can say that the first condition of [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}) allows us to remove one of the \\(w\\) while [spanning]({{< relref "KBhspan.md#spans" >}}) the same space, creating again a [spanning]({{< relref "KBhspan.md#spans" >}}) list of length \\(n\\).


#### induction {#induction}

repeat the procedure \\(m\\) times, resulting in all the \\(u\_{j}\\) being included in our new list \\(B\\) of length still \\(n\\). Given we contained a list of length \\(m\\) in a list of length \\(n\\), \\(m \leq n\\).