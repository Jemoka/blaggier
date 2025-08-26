+++
title = "quotient space"
author = ["Houjun Liu"]
draft = false
+++

A [quotient space]({{< relref "KBhquotient_space.md" >}}) is the set of all [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})s of \\(V\\) [parallel]({{< relref "KBhparallel_linear_algebra.md" >}}) to some [subspace]({{< relref "KBhsubspace.md" >}}) \\(U\\). This should be reminiscent of [quotient group]({{< relref "KBhquotient_group.md" >}})s.


## constituents {#constituents}

-   [vector space]({{< relref "KBhvector_space.md" >}}) \\(V\\)
-   a [subspace]({{< relref "KBhsubspace.md" >}}) \\(U \subset V\\)


## requirements {#requirements}

\begin{equation}
V / U = \\{v+U : v \in V \\}
\end{equation}


## additional information {#additional-information}


### operations on [quotient space]({{< relref "KBhquotient_space.md" >}}) {#operations-on-quotient-space--kbhquotient-space-dot-md}

[Addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) on the [quotient space]({{< relref "KBhquotient_space.md" >}}) is defined in the expected way:

given \\((v+U), (w+U) \in V / U\\), and \\(\lambda \in \mathbb{F}\\):

\begin{equation}
\begin{cases}
(v+U) + (w+U) = ((v+w)+U) \\\\
\lambda (v+U) = ((\lambda v)+U)
\end{cases}
\end{equation}


#### [quotient space]({{< relref "KBhquotient_space.md" >}}) operations behave uniformly on equivalent [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})s {#quotient-space--kbhquotient-space-dot-md--operations-behave-uniformly-on-equivalent-affine-subset--kbhparallel-linear-algebra-dot-md--s}

The tricky thing about [quotient space]({{< relref "KBhquotient_space.md" >}}) [operation]({{< relref "KBhoperation.md" >}})s is that there are multiple ways of representing a single [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) parallel to \\(U\\); the one-liner about this is that if you think about shifting a parallel line with a vector: shifting the line along **any** perpendicular vector to the line with the same magnitude will get you the same shifted line.

For the [operation]({{< relref "KBhoperation.md" >}})s above to work, we have to make sure that they behave in the same way on distinct representations of the same [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}), which we endeavor to proof here:

Suppose we have \\(v,w \in V\\), \\(v',w' \in V\\), and that \\(v+U = v'+U\\); \\(w+U = w'+U\\). We desire that the operations above behave the same way to any addition groupings: that WLOG \\((v+U)+(w+U) = (v'+U)+(w'+U)\\) --- that is, we have to show that \\((v+w)+U = (v'+w')+U\\).

By the fact that [two affine subsets parallel to \\(U\\) are either equal or disjoint]({{< relref "KBhparallel_linear_algebra.md#two-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-parallel-to-u-are-either-equal-or-disjoint" >}}), we have that \\(v-v', w-w' \in U\\). And so, \\((v-v')+(w-w') \in U\\). Commuting these things under \\(V\\), we now have that \\((v+w)-(v'+w') \in U\\). Therefore, invoking the same result again, \\((v+w)+U = (v'+w')+U\\), as desired.

The same logic can be used for scalar multiplication. Suppose we have \\(v, v' \in V\\), \\(\lambda \in \mathbb{F}\\), and that \\(v+U = v'+U\\). We desire that WLOG \\(\lambda (v+U) = \lambda (v'+U)\\) --- that is, we have to show that \\((\lambda v)+U = (\lambda v')+U\\).

Again invoking the [two affine subsets parallel to \\(U\\) are either equal or disjoint]({{< relref "KBhparallel_linear_algebra.md#two-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-parallel-to-u-are-either-equal-or-disjoint" >}}) result, we have that \\(v-v' \in U\\). Now, this means that \\(\lambda (v-v') = \lambda v-\lambda v' \in U\\) because [closure]({{< relref "KBhclosed.md" >}}) of [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) in \\(U\\). Invoking the result again, we now have that \\(\lambda v + U = \lambda v' +U\\), as desired.

Having shown both operations make sense, we can declare that they make sense indeed. \\(\blacksquare\\)


### [quotient space]({{< relref "KBhquotient_space.md" >}}) is a [vector space]({{< relref "KBhvector_space.md" >}}) {#quotient-space--kbhquotient-space-dot-md--is-a-vector-space--kbhvector-space-dot-md}

Given the name! (jk)

Bleh I give up just prove it yourself given the above operations and the fact that the [additive identity]({{< relref "KBhadditive_identity.md" >}}) is \\(0+U = U\\), the [additive inverse]({{< relref "KBhinverses.md" >}}) is \\(-v+U\\).

"instead of the elements single vectors, we fuse the whole [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}}) together. instead of counting the contents, we count the bucket."


### dimension of a quotient space is the difference between dimensions of its constituents {#dimension-of-a-quotient-space-is-the-difference-between-dimensions-of-its-constituents}

that is,

\begin{equation}
\dim V / U = \dim V - \dim U
\end{equation}

for finite dimensional \\(V\\).

Proof:

Let \\(\pi: V \to V /U\\). By definition, \\(null\ \pi =U\\); and, given the input is any \\(v \in V\\), \\(range\ \pi = V / U\\). [rank-nullity theorem]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}}) then tells us that:

\begin{equation}
\dim V = \dim U + \dim V / U
\end{equation}

now subtract and get \\(\dim V /U\\) by itself. \\(\blacksquare\\)