+++
title = "basis"
author = ["Houjun Liu"]
draft = false
+++

A basis is a list of [vector]({{< relref "KBhvector.md" >}})s in \\(V\\) that [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\) and is [linearly independent]({{< relref "KBhlinear_independence.md" >}})


## constituents {#constituents}

-   a LIST! of [vector]({{< relref "KBhvector.md" >}})s in [vector space]({{< relref "KBhvector_space.md" >}}) \\(V\\)


## requirements {#requirements}

-   the list is...
    -   [linear independent]({{< relref "KBhlinear_independence.md" >}})
    -   [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\)


## additional information {#additional-information}


### criteria for [basis]({{< relref "KBhbasis.md" >}}) {#criteria-for-basis--kbhbasis-dot-md}

A list \\(v\_1, \dots v\_{n}\\) of vectors in \\(V\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\) [IFF]({{< relref "KBhequivalence.md" >}}) every \\(v \in V\\) can be written uniquely as:

\begin{equation}
v = a\_1v\_1+ \dots + a\_{n}v\_{n}
\end{equation}

where \\(a\_1, \dots, a\_{n} \in \mathbb{F}\\).


#### forward direction {#forward-direction}

Suppose we have \\(v\_1, \dots, v\_{n}\\) as the [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\). We desire that \\(v\_1, \dots v\_{n}\\) uniquely constructs each \\(v \in V\\).

By definition, they [span]({{< relref "KBhspan.md" >}}) \\(V\\) and are [linear independent]({{< relref "KBhlinear_independence.md" >}}) in \\(V\\).

Because of the [spanning]({{< relref "KBhspan.md#spans" >}}) quality, there exists _at least_ one set of \\(a\_1, \dots, a\_{n} \in \mathbb{F}\\) such that we can write:

\begin{equation}
v \in V = a\_1v\_1+ \dots + a\_{n}v\_{n}
\end{equation}

Suppose now that we have another representation of \\(v\\) via scalars \\(c\_1, \dots, c\_{n}\\) and our same list of vectors:

\begin{equation}
v \in V =^{?} c\_1v\_1+ \dots + c\_{n}v\_{n}
\end{equation}

Subtracting the two expressions, we have that:

\begin{equation}
0 = (a\_1-c\_1)v\_1 + \dots +(a\_{n}-c\_{n}) v\_{n}
\end{equation}

By definition that \\(v\_1 \dots v\_{n}\\) is  [linearly independent]({{< relref "KBhlinear_independence.md" >}}), we have that \\(a\_j-c\_j=0 \implies a\_{j}=c\_{j}\\). Therefore, there is only one unique representation for \\(v\\) as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of vectors \\(v\_1, \dots v\_{n}\\).

(to be honest, we could have just applied that as the definition of [linear independence]({{< relref "KBhlinear_independence.md" >}}) that the scalars in a linear combo of linearly independent list is unique but this is the more careful definition.)


#### backward direction {#backward-direction}

Suppose we have a list \\(v\_1, \dots v\_{n}\\) which uniquely constructs each \\(v \in V\\). We desire that \\(v\_1, \dots v\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\). Given a linear combination thereof can construct all \\(v \in V\\), we can say that \\(v\_1, \dots v\_{n}\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\).

As \\(V\\) is a [vector space]({{< relref "KBhvector_space.md" >}}), we have \\(0 \in V\\). Therefore, there exists some scalars \\(a\_1, \dots a\_{n}\\) for which:

\begin{equation}
0 = a\_1v\_1 + \dots +a\_{n}v\_{n}
\end{equation}

(as we already established \\(v\_1, \dots, v\_{n}\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\) and \\(0 \in V\\))

Of course, we are given that \\(v\_1, \dots v\_{n}\\) uniquely constructs each \\(v \in V\\). As the trivial solution _does_ exist: that \\(a\_1 = \dots = a\_{n} = 0\\), it is the only solution.

By definition of [linear independence]({{< relref "KBhlinear_independence.md" >}}), then, \\(v\_1, \dots v\_{n}\\) is [linearly independent]({{< relref "KBhlinear_independence.md" >}}). Having constructed that \\(v\_1, \dots v\_{n}\\) is both a [spanning]({{< relref "KBhspan.md#spans" >}}) set in \\(V\\) and are [linearly independent]({{< relref "KBhlinear_independence.md" >}}), we have that they are a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\). \\(\blacksquare\\)


### Dualing Basis Construction {#dualing-basis-construction}

These are two results that says: "you can build up a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list to a [basis]({{< relref "KBhbasis.md" >}}) or you can pluck away a [spanning]({{< relref "KBhspan.md#spans" >}}) list to a [basis]({{< relref "KBhbasis.md" >}})".


#### all [spanning]({{< relref "KBhspan.md#spans" >}}) lists contains a [basis]({{< relref "KBhbasis.md" >}}) of which you are [spanning]({{< relref "KBhspan.md#spans" >}}) {#all-spanning--kbhspan-dot-md--lists-contains-a-basis--kbhbasis-dot-md--of-which-you-are-spanning--kbhspan-dot-md}

Every [spanning]({{< relref "KBhspan.md#spans" >}}) list in \\(V\\) contains the [basis]({{< relref "KBhbasis.md" >}}) (and possibly some more) in \\(V\\).

Read: "apply [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}) your way to success".

Begin with a [spanning]({{< relref "KBhspan.md#spans" >}}) list \\(v\_1, \dots v\_{m}\\) of \\(V\\). We run a for loop for the list.

<!--list-separator-->

-  Step 0:

    If \\(v\_1=0\\) (i.e. \\(v\_1 \in span(\\{\\})\\)), delete \\(v\_1\\). Otherwise, do nothing.

<!--list-separator-->

-  Step \\(j\\):

    If \\(v\_{j}\\) is in \\(span(v\_1, \dots v\_{j-1})\\), \\(v\_{j}\\) satisfies the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}})'s first condition, and therefore naturally satisfies the second condition (removal from list keeps the same [span]({{< relref "KBhspan.md" >}}) because \\(v\_{j}\\) can just be rewritten from \\(v\_1, \dots v\_{j-1}\\)).

    So we remove \\(v\_{j}\\) if it is indeed in the span of the previous vectors. By the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}), the new list [spans]({{< relref "KBhspan.md#spans" >}}) the same space the old list.

<!--list-separator-->

-  Conclusion

    By the end of this process, no vectors left in the list will satisfy the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}) (read: we got rid of all of them.) Therefore, the list is [linearly independent]({{< relref "KBhlinear_independence.md" >}}). However, every step of the way the [Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}) ensures that the new list [spans]({{< relref "KBhspan.md#spans" >}}) the same space; therefore, the new list still [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\). Having constructed a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list that [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\), we declare the new list as a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\).

    As all we did was pluck vectors out of the old list, the new list is a sublist of the old list. This means that the [spanning]({{< relref "KBhspan.md#spans" >}}) list (old list) contains the new list, which is a basis. \\(\blacksquare\\)


#### a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list expends to a [basis]({{< relref "KBhbasis.md" >}}) {#a-linearly-independent--kbhlinear-independence-dot-md--list-expends-to-a-basis--kbhbasis-dot-md}

Every [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list of [vector]({{< relref "KBhvector.md" >}})s in [finite-dimensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}})s can be extended to a basis.

Recall first that [every finite-dimensional vector space has a basis]({{< relref "KBhfinite_dimensional_vector_space.md#every-id-4ed27ed5-4edc-4ef4-afd7-9b8e3bcd9b96-finite-dimensional-vector-space-has-a-id-f88170b1-08b5-48a7-a7b5-1ace768e7b28-basis" >}}).

Let's begin with a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\) \\(u\_1, \dots u\_{m}\\). Let's recruit also a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\): \\(w\_{1}, \dots w\_{m}\\).

Naturally: \\(u\_1, \dots u\_{m}, w\_1, \dots w\_{m}\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(V\\) (as the \\(w\\) vectors already [span]({{< relref "KBhspan.md" >}}) \\(V\\)). We will now apply the fact that [all spanning lists contains a basis of which you are spanning](#all-spanning--kbhspan-dot-md--lists-contains-a-basis--kbhbasis-dot-md--of-which-you-are-spanning--kbhspan-dot-md) (the order of \\(u\\) vectors first and \\(w\\) vectors second ensuring that you try to remove the \\(w\\), and, as \\(u\\) are [linearly independent]({{< relref "KBhlinear_independence.md" >}}), none of them will be removed) to get back a [basis]({{< relref "KBhbasis.md" >}}) in \\(V\\) consisting of all \\(u\\) and some \\(w\\). \\(\blacksquare\\)