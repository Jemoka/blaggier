+++
title = "invertability"
author = ["Houjun Liu"]
draft = false
+++

A [Linear Map]({{< relref "KBhlinear_map.md" >}}) is [invertable]({{< relref "KBhinvertability.md" >}}) if it can be undone. It is called a [nonsingular matrix]({{< relref "KBhinvertability.md" >}})


## constituents {#constituents}

A linear map \\(T \in \mathcal{L}(V,W)\\)


## requirements {#requirements}

A [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(T \in \mathcal{L}(V,W)\\) is called [invertable]({{< relref "KBhinvertability.md" >}}) if \\(\exists T^{-1} \in \mathcal{L}(W,V): T^{-1}T=I \in \mathcal{L}(V), TT^{-1} = I \in \mathcal{L}(W)\\).

"a map is [invertable]({{< relref "KBhinvertability.md" >}}) if there is an inverse": that combining the **commutable** inverse and itself will result in the [identity]({{< relref "KBhidentity.md" >}}) map.


## additional information {#additional-information}


### [matrix]({{< relref "KBhmatricies.md" >}}) [invertability]({{< relref "KBhinvertability.md" >}}) {#matrix--kbhmatricies-dot-md--invertability--kbhinvertability-dot-md}

Matrices whose determinants are not \\(0\\) (i.e. it is invertable) is called "[nonsingular matrix]({{< relref "KBhinvertability.md" >}})". If it doesn't have an [inverse]({{< relref "KBhinverses.md" >}}), it is called a [singular matrix]({{< relref "KBhinvertability.md" >}}).


### linear map inverse is unique {#linear-map-inverse-is-unique}

An [invertable]({{< relref "KBhinvertability.md" >}}) [Linear Map]({{< relref "KBhlinear_map.md" >}}) has an unique inverse:

Proof:

Suppose \\(T \in \mathcal{L}(V,W)\\), and \\(\exists S\_1, S\_2\\) which are both inverses of \\(T\\). We desire \\(S\_1=S\_2\\).

So:

\begin{equation}
S\_1 = S\_1(TS\_2) = (S\_1T)S\_2 = IS\_{2} = S\_2
\end{equation}

given [Product of Linear Maps]({{< relref "KBhproduct_of_linear_maps.md" >}}) is [associative]({{< relref "KBhassociative.md" >}}).

\\(S\_1=S\_2\\), as desired. \\(\blacksquare\\)


### [injectivity]({{< relref "KBhinjectivity.md" >}}) and [surjectivity]({{< relref "KBhsurjectivity.md" >}}) implies [invertability]({{< relref "KBhinvertability.md" >}}) {#injectivity--kbhinjectivity-dot-md--and-surjectivity--kbhsurjectivity-dot-md--implies-invertability--kbhinvertability-dot-md}

Suppose \\(T \in \mathcal{L}(V,W)\\); we desire that \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}) IFF it is both injective and surjective.

****First, suppose \\(T\\) is invertible****; that is, \\(\exists T^{-1}: T^{-1}T=I, TT^{-1}=I\\) We desire that \\(T\\) is both [injective]({{< relref "KBhinjectivity.md" >}}) and [surjective]({{< relref "KBhsurjectivity.md" >}}).

Injectivity: Suppose \\(Tv=Tu\\); we desire \\(u=v\\). \\(u = T^{-1}(Tu) = T^{-1}(Tv) = v\\) . We essentially to use the fact that \\(T^{-1}\\) is a function to "revert" the map of \\(T\\); as \\(T^{-1}\\) is a map, we know it has to revert to the same result.

Surjectivity: Recall \\(T: V\to W\\). WLOG let \\(w \in W\\), \\(w=T(T^{-1}w)\\). Therefore, all \\(w\\) is in range of \\(T\\).

****Second, suppose \\(T\\) is both injective and surjective****. Define a transition \\(S\\) such that \\(T(Sw) = w\\) for all \\(w \in W\\) (i.e. it hits just the right element to hit \\(w\\) as an input of \\(T\\).) This is made possible because \\(T\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}) (because you can hit all \\(W\\)) and [injective]({{< relref "KBhinjectivity.md" >}}) (which makes \\(S\\) not need to hit two different things or have two non-equal  things accidentally map to the same thing.)

Evidently, \\(T(Sw)=w \forall w \in W \implies (TS) = I\\) by definition.

We now desire \\(ST = I\\). We have \\((TSTv) = (TS)(Tv) = ITv = Tv\\) by associativity of map multiplication. Now, \\((TSTv) = Tv \implies T(ST)v = Tv\\) by associativity again. This implies that \\((ST)v=v\\) again because \\(T\\) is injective: so the same input will not produce two unique outputs.

We then can show \\(S\\) is a linear map in the usual way.

Having constructed the desired result, \\(\blacksquare\\)


#### Alternate Proof for Finite Dimensional \\(T\\) {#alternate-proof-for-finite-dimensional-t}

So given [map to bigger space is not surjective]({{< relref "KBhlinear_map.md#map-to-bigger-space-is-not-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjective" >}}) and [map to smaller space is not injective]({{< relref "KBhlinear_map.md#map-to-smaller-space-is-not-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}}), we have that the dimension of \\(W = V\\), we leverage the [basis]({{< relref "KBhbasis.md" >}}) of each and build the <inverse> using the [basis of domain]({{< relref "KBhbasis_of_domain.md" >}}).