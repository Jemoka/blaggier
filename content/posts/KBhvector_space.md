+++
title = "vector space"
author = ["Houjun Liu"]
draft = false
+++

A [vector space]({{< relref "KBhvector_space.md" >}}) is an object between a [field]({{< relref "KBhfield.md" >}}) and a [group]({{< relref "KBhgroup.md" >}}); it has two ops---addition and scalar multiplication. Its not quite a [field]({{< relref "KBhfield.md" >}}) and its more than a [group]({{< relref "KBhgroup.md" >}}).


## constituents {#constituents}

-   A set \\(V\\)
-   An [addition]({{< relref "KBhadding.md" >}}) on \\(V\\)
-   An [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) on \\(V\\)

such that...


## requirements {#requirements}

-   [commutativity]({{< relref "KBhcommutivity.md" >}}) in add.: \\(u+v=v+u\\)
-   [associativity]({{< relref "KBhassociative.md" >}}) in add. and mult.: \\((u+v)+w=u+(v+w)\\); \\((ab)v=a(bv)\\): \\(\forall u,v,w \in V\\) and \\(a,b \in \mathbb{F}\\)
-   [distributivity]({{< relref "KBhdistributivity.md" >}}): goes both ways \\(a(u+v) = au+av\\) AND!! \\((a+b)v=av+bv\\): \\(\forall a,b \in \mathbb{F}\\) and \\(u,v \in V\\)
-   [additive identity]({{< relref "KBhadditive_identity.md" >}}): \\(\exists 0 \in V: v+0=v \forall v \in V\\)
-   [additive inverse]({{< relref "KBhinverses.md" >}}): \\(\forall  v \in  V, \exists  w \in  V: v+w=0\\)
-   [multiplicative identity]({{< relref "KBhmultiplicative_identity.md" >}}): \\(1v=v \forall v \in V\\)


## additional information {#additional-information}

-   Elements of a [vector space]({{< relref "KBhvector_space.md" >}}) are called [vector]({{< relref "KBhvector.md" >}})s or [point]({{< relref "KBhvector.md" >}})s.


### vector space "over" fields {#vector-space-over-fields}

[Scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is not in the set \\(V\\); instead, "scalars" \\(\lambda\\) come from this magic faraway land called \\(\mathbb{F}\\). The choice of \\(\mathbb{F}\\) for each vector space makes it different; so, when precision is needed, we can say that a vector space is "over" some \\(\mathbb{F}\\) which contributes its scalars.

Therefore:

-   A vector space over \\(\mathbb{R}\\) is called a _real vector space_
-   A vector space over \\(\mathbb{C}\\) is called a _real vector space_