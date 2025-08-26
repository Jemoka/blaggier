+++
title = "isomorphism"
author = ["Houjun Liu"]
draft = false
+++

An [isomorphism]({{< relref "KBhisomorphism.md" >}}) is an [invertable]({{< relref "KBhinvertability.md" >}}) [Linear Map]({{< relref "KBhlinear_map.md" >}}). Two [vector space]({{< relref "KBhvector_space.md" >}})s are called [isomorphic]({{< relref "KBhisomorphism.md" >}}) if there is an [isomorphism]({{< relref "KBhisomorphism.md" >}}) from one to another.

"A linear map that maintain the correct structure of the structure."

This makes the [vector space]({{< relref "KBhvector_space.md" >}})s that are [isomorphic]({{< relref "KBhisomorphism.md" >}}) "equivalent", because the [isomorphism]({{< relref "KBhisomorphism.md" >}}) is the [equivalence]({{< relref "KBhequivalence.md" >}}) relationship. Of course, they are still not equal.

Generally, [isomorphism]({{< relref "KBhisomorphism.md" >}})s can only be built between [vector space]({{< relref "KBhvector_space.md" >}})s over the same [field]({{< relref "KBhfield.md" >}}).


## additional information {#additional-information}


### matrices {#matrices}

We know we can represent [Linear Map]({{< relref "KBhlinear_map.md" >}})s as [matricies]({{< relref "KBhmatricies.md" >}}).

So, given some \\(A\\), we have an inverse \\(A^{-1}\\).

So:

\begin{equation}
A A^{-1} = I = A^{-1} A
\end{equation}

In this case, the \\(I\\) is the [identity]({{< relref "KBhidentity.md" >}}) map: \\(Iv = v\\).


### two vector spaces are isomorphic IFF they have the same dimension {#two-vector-spaces-are-isomorphic-iff-they-have-the-same-dimension}

**note: this relationship works over the SAME field \\(\mathbb{F}\\), otherwise lin comb can't work**


#### Given vector spaces \\(I,W\\) [isomorphic]({{< relref "KBhisomorphism.md" >}}), we desire \\(dim V = dim W\\) {#given-vector-spaces-i-w-isomorphic--kbhisomorphism-dot-md--we-desire-dim-v-dim-w}

Suppose \\(V\\) and \\(W\\) are finite-dimensional [vector space]({{< relref "KBhvector_space.md" >}})s that are [isomorphic]({{< relref "KBhisomorphism.md" >}}). There means that there is an [isomorphism]({{< relref "KBhisomorphism.md" >}}), an [invertable]({{< relref "KBhinvertability.md" >}}) [Linear Map]({{< relref "KBhlinear_map.md" >}}) between them which we will name \\(T \in  \mathcal{L}(V,W)\\).

Because \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}), and [injectivity and surjectivity implies invertability]({{< relref "KBhinvertability.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-and-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-implies-id-ff05739c-6e70-46ba-9d56-0958ef847f57-invertability" >}}), so \\(null\ T = \\{0\\}\\) and \\(range\ T = W\\).

Lastly, we have that:

\begin{align}
\dim V &= \dim null\ T + \dim range\ T  \\\\
&= 0 + dim\ W  \\\\
&= dim\ W
\end{align}

as desired.


#### Given \\(dim V = dim W\\), show the vector spaces are [isomorphic]({{< relref "KBhisomorphism.md" >}}) {#given-dim-v-dim-w-show-the-vector-spaces-are-isomorphic--kbhisomorphism-dot-md}

Take \\(v\_1, \dots v\_{n}\\) a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), and \\(w\_1 \dots w\_{n}\\) a basis of \\(W\\).

Define a map by [basis of domain]({{< relref "KBhbasis_of_domain.md" >}}) mapping \\(Tv\_{j} = w\_{j}\\), that is, \\(T(c\_1v\_1 + \dots + c\_{n}v\_{n}) = c\_1 w\_1 + \dots + c\_{n} w\_{n}\\).

Because \\(w\_1 \dots  w\_{n}\\) [spans]({{< relref "KBhspan.md#spans" >}}) \\(W\\) (it is a [basis]({{< relref "KBhbasis.md" >}}) after all), \\(T\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}).

An input with some set of \\(c\_{j}\\) is in the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\) if \\(c\_1 w\_1 + \dots + c\_{n}w\_{n}\\) adds up to \\(0\\) (by definition, as that's the output of \\(T\\)).

Because \\(w\_1 \dots w\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}), the only [linear combination]({{< relref "KBhlinear_combination.md" >}}) thereof which makes \\(0\\) is by taking all \\(c\_1 = \dots c\_{n} = 0\\). This make it so that the only valid _input_ to \\(T\\) that will map to \\(0\\) requires \\(c\_1=\dots c\_{n} = 0\\), making \\(null\ T = \\{0\\}\\), showing that \\(T\\) is [injective]({{< relref "KBhinjectivity.md" >}}).

Having shown \\(T\\) is [injective]({{< relref "KBhinjectivity.md" >}}) and [surjective]({{< relref "KBhsurjectivity.md" >}}), it is an [isomorphism]({{< relref "KBhisomorphism.md" >}}), as desired. \\(\blacksquare\\)


### [matricies]({{< relref "KBhmatricies.md" >}}) and [Linear Map]({{< relref "KBhlinear_map.md" >}})s from the right [dimension]({{< relref "KBhdimension.md" >}})s are [isomorphic]({{< relref "KBhisomorphism.md" >}}) {#matricies--kbhmatricies-dot-md--and-linear-map--kbhlinear-map-dot-md--s-from-the-right-dimension--kbhdimension-dot-md--s-are-isomorphic--kbhisomorphism-dot-md}

Formally: suppose \\(v\_1 \dots v\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), and \\(w\_1 \dots w\_{m}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(W\\), then, \\(\mathcal{M}\\) the [matrix]({{< relref "KBhmatricies.md" >}})ify operation that takes [Linear Map]({{< relref "KBhlinear_map.md" >}})s and turn them into [matricies]({{< relref "KBhmatricies.md" >}}) is an [isomorphism]({{< relref "KBhisomorphism.md" >}}) between \\(\mathcal{L}(V,W)\\) and \\(\mathbb{F}^{m,n}\\).

The [matrix]({{< relref "KBhmatricies.md" >}})ify operation \\(\mathcal{M}\\) is linear, because [matricies]({{< relref "KBhmatricies.md" >}}) are linear. The only thing that \\(\mathcal{M}\\) will turn into the [zero]({{< relref "KBhzero.md" >}}) [matrix]({{< relref "KBhmatricies.md" >}}) is the [zero]({{< relref "KBhzero.md" >}}) [Linear Map]({{< relref "KBhlinear_map.md" >}}) (i.e. \\(\mathcal{M}(t)=0 \implies T v\_{k} = 0\ \forall k 1 \dots n\\) by construction of [matricies]({{< relref "KBhmatricies.md" >}}), and because the \\(v\_{k}\\) are a [basis]({{< relref "KBhbasis.md" >}}), \\(T v\_{k} =0 \implies T=0\\)), so the [null space]({{< relref "KBhnull_space.md" >}}) of \\(\mathcal{M}\\) is \\(\\{0\\}\\), making \\(\mathcal{M}\\) [injective]({{< relref "KBhinjectivity.md" >}}).

Now, because of the fact one can construct a [matrix]({{< relref "KBhmatricies.md" >}}) based on the scalars applied to map the input [basis]({{< relref "KBhbasis.md" >}}) to the output [basis]({{< relref "KBhbasis.md" >}}); i.e. that, for any map \\(T \in \mathcal{L}(V,W)\\):

\begin{equation}
Tv\_{k} = \sum\_{j=i}^{m}A\_{j,k} w\_{j}
\end{equation}

for some matrix \\(\mathcal{M}(T) = A \in \mathbb{F}^{m,n}\\), we have that \\(\mathcal{M}\\) can be used to produce any map between \\(V\\) and \\(W\\). This makes \\(\mathcal{M}\\) [surjective]({{< relref "KBhsurjectivity.md" >}}).


### \\(\dim \mathcal{L}(V,W) = (\dim V)(\dim W)\\) {#dim-mathcal-l--v-w----dim-v----dim-w}

\\(\mathcal{L}(V,W)\\) is [isomorphic]({{< relref "KBhisomorphism.md" >}}) to the set of [matricies]({{< relref "KBhmatricies.md" >}}) \\(\mathbb{F}^{m,n}\\) where \\(w\_1 \dots w\_{m}\\) is a [basis]({{< relref "KBhbasis.md" >}}) for \\(W\\) and \\(v\_1 \dots v\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) for \\(V\\). [two vector spaces are isomorphic IFF they have the same dimension](#two-vector-spaces-are-isomorphic-iff-they-have-the-same-dimension), so \\(\dim \mathcal{L}(V,W) = \dim \mathbb{F}^{m,n} = m\cdot n\\) (see [\\(\mathbb{F}^{m,n}\\)]({{< relref "KBhmatricies.md#mathbb-f-m-n" >}})).

Having claimed that \\(w\_1 \dots w\_{m}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(W\\) and \\(v\_1 \dots  v\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\), \\(W\\) and \\(V\\) have [dimension]({{< relref "KBhdimension.md" >}})s \\(m\\) and \\(n\\) respectively. So \\((\dim V)(\dim W) = n \cdot m = m\cdot n = \dim \mathbb{F}^{m,n} = \dim \mathcal{L}(V,W)\\), as desired.