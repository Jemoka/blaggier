+++
title = "null space"
author = ["Houjun Liu"]
draft = false
+++

The [Null Space]({{< relref "KBhnull_space.md" >}}), also known as the [kernel]({{< relref "KBhnull_space.md" >}}), is the subset of vectors which get mapped to \\(0\\) by some [Linear Map]({{< relref "KBhlinear_map.md" >}}).


## constituents {#constituents}

Some linear map \\(T \in \mathcal{L}(V,W)\\)


## requirements {#requirements}

The subset of \\(V\\) which \\(T\\) maps to \\(0\\) is called the "[Null Space]({{< relref "KBhnull_space.md" >}})":

\begin{equation}
null\ T = \\{v \in V: Tv = 0\\}
\end{equation}


## additional information {#additional-information}


### the null space is a [subspace]({{< relref "KBhsubspace.md" >}}) of the domain {#the-null-space-is-a-subspace--kbhsubspace-dot-md--of-the-domain}

It should probably not be a surprise, given a [Null Space]({{< relref "KBhnull_space.md" >}}) is called a [Null ****Space****]({{< relref "KBhnull_space.md" >}}), that the [Null Space]({{< relref "KBhnull_space.md" >}}) is a [subspace]({{< relref "KBhsubspace.md" >}}) of the domain.


#### zero {#zero}

As [linear maps take \\(0\\) to \\(0\\)]({{< relref "KBhlinear_map.md#linear-maps-take-0-to-0" >}}), \\(T 0=0\\) so \\(0\\) is in the [Null Space]({{< relref "KBhnull_space.md" >}}) of \\(T\\).


#### closure under addition {#closure-under-addition}

We have that:

\begin{equation}
0+0 = 0
\end{equation}

so by additivity of the [Linear Map]({{< relref "KBhlinear_map.md" >}})s the map is [closed]({{< relref "KBhclosed.md" >}}) under addition.


#### closure under scalar multiplication {#closure-under-scalar-multiplication}

By homogeneity of linear maps, the same of the above holds.

This completes the [subspace]({{< relref "KBhsubspace.md" >}}) proof,  making \\(null\ T\\) a [subspace]({{< relref "KBhsubspace.md" >}}) of the domain of \\(T\\), \\(V\\). \\(\blacksquare\\)


### the null space of the zero map is just the domain {#the-null-space-of-the-zero-map-is-just-the-domain}

I mean duh. The [zero]({{< relref "KBhzero.md" >}}) map maps literally everything to zero.


### Injectivity IFF implies that [null space]({{< relref "KBhnull_space.md" >}}) is \\(\\{0\\}\\) {#injectivity-iff-implies-that-null-space--kbhnull-space-dot-md--is-0}

See [injectivity IFF implies that null space is \\(\\{0\\}\\)]({{< relref "KBhinjectivity.md#injectivity-implies-that-id-767a441d-4931-4fad-aa8e-c6b001e8b507-null-space-is-0" >}})