+++
title = "range"
author = ["Houjun Liu"]
draft = false
+++

The [range]({{< relref "KBhrange.md" >}}) ([image]({{< relref "KBhrange.md" >}}), [column space]({{< relref "KBhrange.md" >}})) is the set that some [function]({{< relref "KBhfunction.md" >}}) \\(T\\) maps to.


## constituents {#constituents}

some \\(T: V\to W\\)


## requirements {#requirements}

The range is just the space the map maps to:

\begin{equation}
range\ T = \\{Tv: v \in V\\}
\end{equation}


## additional information {#additional-information}


### range is a subspace of the codomain {#range-is-a-subspace-of-the-codomain}

This result is hopefully not super surprising.


#### zero {#zero}

\begin{equation}
T0 = 0
\end{equation}

as [linear maps take \\(0\\) to \\(0\\)]({{< relref "KBhlinear_map.md#linear-maps-take-0-to-0" >}}), so \\(0\\) is definitely in the [range]({{< relref "KBhrange.md" >}}).


#### addition and scalar multiplication {#addition-and-scalar-multiplication}

inherits from additivity and [homogeneity]({{< relref "KBhhomogeneity.md" >}}) of [Linear Map]({{< relref "KBhlinear_map.md" >}})s.

Given \\(T v\_1 = w\_1,\ T v\_2=w\_2\\), we have that \\(w\_1, w\_2 \in range\ T\\).

\begin{equation}
T(v\_1 + v\_2) = w\_1 + w\_2
\end{equation}

\begin{equation}
T(\lambda v\_1) = \lambda w\_1
\end{equation}

So [closed]({{< relref "KBhclosed.md" >}}) under [addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}). Having shown the [zero]({{< relref "KBhzero.md" >}}) and closure, we have that the [range]({{< relref "KBhrange.md" >}}) is a [subspace]({{< relref "KBhsubspace.md" >}}) of the codomain. \\(\blacksquare\\)