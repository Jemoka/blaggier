+++
title = "T twiddle"
author = ["Houjun Liu"]
draft = false
+++

Suppose \\(T \in \mathcal{L}(V,W)\\). Define a \\(\widetilde{T}: V / (null\ T) \to W\\)  such that:

\begin{align}
\widetilde{T}(v+ null\ T) = Tv
\end{align}

so \\(\widetilde{T}\\) is the map that recovers the mapped result from an [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) from the [null space]({{< relref "KBhnull_space.md" >}}) of the map.


## \\(\widetilde{T}\\) is well defined {#widetilde-t-is-well-defined}

Same problem as that with [operations on quotient space]({{< relref "KBhquotient_space.md#operations-on-id-53548f85-b3c8-42ce-81e7-9016ed7bd280-quotient-space" >}}). We need to make sure that \\(\widetilde{T}\\) behave the same way on distinct but equivalent representations of the same [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}).

Suppose \\(u,v \in V\\) such that \\(u+null\ T = v+null\ T\\). Because [two affine subsets parallel to \\(U\\) are either equal or disjoint]({{< relref "KBhparallel_linear_algebra.md#two-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-parallel-to-u-are-either-equal-or-disjoint" >}}), we have that \\(u-v \in null\ T\\). This means that \\(Tu-Tv = 0 \implies Tu= Tv\\). So applying \\(\widetilde{T}\\) on equivalent representations of the same [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) would yield the same result, as desired. \\(\blacksquare\\)


## properties of \\(\widetilde{T}\\) {#properties-of-widetilde-t}


### it is a linear map {#it-is-a-linear-map}

TBD proof. Basically just like do it inheriting operations from the [operations on quotient space]({{< relref "KBhquotient_space.md#operations-on-id-53548f85-b3c8-42ce-81e7-9016ed7bd280-quotient-space" >}}).


### it is injective {#it-is-injective}

We desire here that \\(null\ \widetilde{T} = \\{0\\}\\) which will tell us that \\(\widetilde{T}\\) is [injective]({{< relref "KBhinjectivity.md" >}}).

Suppose some \\(v + null\ T\\) is in the [null space]({{< relref "KBhnull_space.md" >}}) of \\(\widetilde{T}\\). So, we have that:

\begin{equation}
\widetilde{T}(v+null\ T) = Tv = 0
\end{equation}

So, we have that \\(v \in null\ T\\). Now, this means that \\(v-0 \in null\ T\\). Because [two affine subsets parallel to \\(U\\) are either equal or disjoint]({{< relref "KBhparallel_linear_algebra.md#two-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-parallel-to-u-are-either-equal-or-disjoint" >}}), \\(v + null\ T = 0 + null\ T\\) WLOG \\(\forall v+null\ T \in null\ \widetilde{T}\\). This means that \\(null\ \widetilde{T}=\\{0\\}\\), as desired.


### its range is equal to the map's range {#its-range-is-equal-to-the-map-s-range}

\begin{equation}
range\ \widetilde{T} = range\ T
\end{equation}

by definition of everything.


### \\(V / null\ T\\) is [isomorphic]({{< relref "KBhisomorphism.md" >}}) to \\(range\ T\\) {#v-null-t-is-isomorphic--kbhisomorphism-dot-md--to-range-t}

....is this the point of this whole thing?

Shown by the two sub-results above, and that [injectivity and surjectivity implies invertability]({{< relref "KBhinvertability.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-and-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-implies-id-ff05739c-6e70-46ba-9d56-0958ef847f57-invertability" >}}).