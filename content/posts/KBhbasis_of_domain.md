+++
title = "basis of domain"
author = ["Houjun Liu"]
draft = false
+++

Suppose \\(v\_1, \dots v\_{n} \in V\\) is a [basis]({{< relref "KBhbasis.md" >}}) of some [vector space]({{< relref "KBhvector_space.md" >}}) \\(V\\); \\(w\_1, \dots w\_{n} \in W\\) is just a good'ol list of length \\(n= \dim V\\) in \\(W\\).

There exists a unique linear map \\(T \in \mathcal{L}(V,W)\\) such that...

\begin{equation}
Tv\_{j} = w\_{j}
\end{equation}

for each \\(j = 1, \dots n\\)


## Intuition {#intuition}

The layperson's explanation of this result: 1) that, for everywhere you want to take the [basis]({{< relref "KBhbasis.md" >}}) of one space, there's always a unique linear map to take you there. 2) that, a linear map is determined uniquely by what it does to the [basis of its domain]({{< relref "KBhbasis_of_domain.md" >}}).


## Proof {#proof}

We have two vector spaces, \\(V\\) and \\(W\\); \\(v\_1, \dots v\_{n} \in V\\) forms a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\); \\(w\_1, \dots w\_{n} \in W\\) are just some [vector]({{< relref "KBhvector.md" >}})s in \\(W\\).


### Definition {#definition}

We define some \\(T: V \to W\\) as follows:

\begin{equation}
T(c\_1v\_1 + \dots + c\_{n}v\_{n}) = c\_1 w\_1 + \dots + c\_{n} w\_{n}
\end{equation}

where, \\(c\_1, \dots c\_{n} \in \mathbb{F}\\). Note that the actual _values_ of \\(c\\) doesn't actually matter here.


### Existence {#existence}

We now show that the \\(T\\) defined above has the property of mapping \\(Tv\_{j} \to w\_{j}\\).

As the basis \\(v\_1, \dots v\_{n}\\) is a [spanning]({{< relref "KBhspan.md#spans" >}}) list of \\(V\\), some \\(T\\) that takes an arbitrary [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(v\\) as input does indeed have domain \\(V\\). Due to [addition]({{< relref "KBhadding.md" >}})'s closure, a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(w\\) is \\(\in W\\). This makes \\(T\\) at least a function from \\(V \to W\\).

Of course, by taking all \\(c\_{i}\\) to \\(0\\) except for the index \\(c\_{j}\\) you are interested in to \\(1\\), you can show that this \\(T\\) takes \\(v\_{j}\\) to \\(w\_{j}\\).

We now show that \\(T\\) is a [Linear Map]({{< relref "KBhlinear_map.md" >}}). This part proof is just route algebra so I won't type it again.

{{< figure src="/ox-hugo/2022-11-02_22-26-02_screenshot.png" >}}


### Uniqueness {#uniqueness}

Suppose there is a [Linear Map]({{< relref "KBhlinear_map.md" >}}) that has the desired property: that \\(T \in \mathcal{L}(V,W)\\) and that \\(Tv\_{j}=w\_{j}, \forall j=1, \dots n\\). For any scalar \\(c\_{j}\\), the homogeneity of \\(T\\) indicates that this same \\(T\\) has to take \\(T(c\_{j}v\_{j}) = c\_{j}Tv\_{j} = c\_{j}w\_{j}\\).

Now, the additivity of \\(T\\) also indicates that we can string these \\(c\_{j} v\_{j}\\) together in the same \\(T\\); that:

given \\(T(c\_{j}v\_{j}) = c\_{j}w\_{j}\\), we can just string it all together to get \\(T(c\_1v\_1 + \dots + c\_{n}v\_{n}) = c\_1w\_1+ \dots + c\_{n}w\_{n}\\).

This means that there is only one \\(T\\) that behaves in the way that we desire, on the span of \\(v\_1 \dots v\_{n}\\). Those vectors being the basis, their span is just the domain \\(V\\). This makes \\(T\\) uniquely determined on \\(V\\) as we were able to construct the original given map simply by following the rules of the [Linear Map]({{< relref "KBhlinear_map.md" >}}).