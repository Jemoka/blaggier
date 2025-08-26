+++
title = "injectivity"
author = ["Houjun Liu"]
draft = false
+++

An [injective]({{< relref "KBhinjectivity.md" >}}) [function]({{< relref "KBhfunction.md" >}}) is one which is one-to-one: that it maps distinct inputs to distinct outputs.


## constituents {#constituents}

-   A [function]({{< relref "KBhfunction.md" >}}) \\(T: V \to W\\)


## requirements {#requirements}

\\(T\\) is [injective]({{< relref "KBhinjectivity.md" >}}) if \\(Tu = Tv\\) implies \\(u=v\\).


## additional information {#additional-information}


### injectivity implies that [null space]({{< relref "KBhnull_space.md" >}}) is \\(\\{0\\}\\) {#injectivity-implies-that-null-space--kbhnull-space-dot-md--is-0}

Proof: let \\(T \in \mathcal{L}(V,W)\\); \\(T\\) is [injective]({{< relref "KBhinjectivity.md" >}}) IFF \\(null\ T = \\{0\\}\\).


#### given [injectivity]({{< relref "KBhinjectivity.md" >}}) {#given-injectivity--kbhinjectivity-dot-md}

Suppose \\(T\\) is injective.

Now, we know that \\(0\\), because it indeed gets mapped by \\(T\\) to \\(0\\), is in the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\).

Because [linear maps take \\(0\\) to \\(0\\)]({{< relref "KBhlinear_map.md#linear-maps-take-0-to-0" >}}), \\(T0=0\\). Now, because \\(T\\) is [injective]({{< relref "KBhinjectivity.md" >}}), for any \\(v\\) that \\(Tv = 0 = T 0\\) implies \\(v=0\\).

So \\(0\\) is the only thing that an injective \\(T\\) can map to \\(0\\), and it is indeed in the [null space]({{< relref "KBhnull_space.md" >}}), so the [null space]({{< relref "KBhnull_space.md" >}}) is just \\(\\{0\\}\\).


#### given \\(null\ T=\\{0\\}\\) {#given-null-t-0}

Suppose we have some \\(Tu = Tv\\), we desire to proof that \\(u=v\\) to show that \\(T\\) is [injective]({{< relref "KBhinjectivity.md" >}}).

Given \\(Tu=Tv\\), we have that \\(Tu-Tv\\). Given additivity, \\(T(u-v) = 0\\). This makes \\((u-v) \in\ null\ T\\).

Given only \\(0\\) is in the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\), \\(u-v = 0\\), so \\(u=v\\), as desired. \\(\blacksquare\\).


### [map to smaller space is not injective]({{< relref "KBhlinear_map.md#map-to-smaller-space-is-not-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}}) {#map-to-smaller-space-is-not-injective--kbhlinear-map-dot-md}

See [map to smaller space is not injective]({{< relref "KBhlinear_map.md#map-to-smaller-space-is-not-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}})