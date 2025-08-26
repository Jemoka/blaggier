+++
title = "Axler 1.B"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}

-   \\(\mathbb{F}^{n}\\) not being a [field]({{< relref "KBhfield.md" >}}) kinda sucks, so we made an object called a "[vector space]({{< relref "KBhvector_space.md" >}})" which essentially does everything a [field]({{< relref "KBhfield.md" >}}) does except without necessitating a [multiplicative inverse]({{< relref "KBhinverses.md" >}})
-   Formally, a [vector space]({{< relref "KBhvector_space.md" >}}) is [closed]({{< relref "KBhclosed.md" >}}) over [addition]({{< relref "KBhadding.md" >}}) and have a [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}). Its [addition]({{< relref "KBhadding.md" >}}) is [commutative]({{< relref "KBhcommutivity.md" >}}), both [addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}}) is [associative]({{< relref "KBhassociative.md" >}}), and [distributivity]({{< relref "KBhdistributivity.md" >}}) holds. There is an [additive identity]({{< relref "KBhadditive_identity.md" >}}), [additive inverse]({{< relref "KBhinverses.md" >}}), and [multiplicative identity]({{< relref "KBhmultiplicative_identity.md" >}}).
-   We defined something called \\(\mathbb{F}^{S}\\), which is the set of functions from a set \\(S\\) to \\(\mathbb{F}\\). Turns out, [\\(\mathbb{F}^{S}\\) is a Vector Space Over \\(\mathbb{F}\\)]({{< relref "KBhfs_is_a_vector_space.md" >}}) and we can secretly treat \\(\mathbb{F}^{n}\\) and \\(\mathbb{F}^{\infty}\\) as special cases of \\(\mathbb{F}^{s}\\).
-   We established that [identity]({{< relref "KBhidentity.md" >}}) and [inverse]({{< relref "KBhinverses.md" >}}) are unique additively in [vector space]({{< relref "KBhvector_space.md" >}})s.
-   Lastly, we proved some expressions we already know: \\(0v=0\\), \\(-1v=-v\\).


## New Definitions {#new-definitions}

-   [addition]({{< relref "KBhadding.md" >}}) and [scalar multiplication]({{< relref "KBhscalar_multiplication.md" >}})
-   [vector space]({{< relref "KBhvector_space.md" >}}) and [vector]({{< relref "KBhvector.md" >}})s
-   [vector space "over" fields]({{< relref "KBhvector_space.md#vector-space-over-fields" >}})
-   \\(V\\) denotes a vector space over \\(\mathbb{F}\\)
-   \\(-v\\) is defined as the [additive inverse]({{< relref "KBhinverses.md" >}}) of \\(v \in V\\)


## Results and Their Proofs {#results-and-their-proofs}

-   [\\(\mathbb{F}^{\infty}\\) is a Vector Space over \\(\mathbb{F}\\)]({{< relref "KBhfinfty_is_a_vector_space_over_f.md" >}})
-   [\\(\mathbb{F}^{S}\\) is a Vector Space Over \\(\mathbb{F}\\)]({{< relref "KBhfs_is_a_vector_space.md" >}})
-   All [vector space]({{< relref "KBhvector_space.md" >}})s \\(\mathbb{F}^{n}\\) and \\(\mathbb{F}^{\infty}\\) are just special cases \\(\mathbb{F}^{S}\\): you can think about those as a mapping from coordinates \\((1,2,3, \dots )\\) to their actual values in the "vector"
-   [additive identity is unique in a vector space]({{< relref "KBhadditive_identity_is_unique_in_a_vector_space.md" >}})
-   [additive inverse is unique in a vector space]({{< relref "KBhadditive_inverse_is_unique_in_a_vector_space.md" >}})
-   [\\(0v=0\\)]({{< relref "KBhzero_times_vector.md" >}}), both ways (for zero scalars and vectors)
-   [\\(-1v=-v\\)]({{< relref "KBh1v_1.md" >}})


## Questions for Jana {#questions-for-jana}

-   ~~The way Axler presented the idea of "over" is a tad weird; is it really only scalar multiplication which hinders vector spaces without \\(\mathbb{F}\\)? In other words, do the sets that form vector spaces, apart from the \\(\lambda\\) used for scalar multiplication, need anything to do with the \\(\mathbb{F}\\) they are "over"?~~ The **name** of the field and what its **over** do not have to be the same---"vector space \\(\mathbb{C}^2\\) over \\(\\{0,1\\}\\)" is a perfectly valid statement
-   ~~If lists have finite length \\(n\\), then what are the elements of \\(\mathbb{F}^{\infty}\\) called?~~ "we could think about \\(\mathbb{F}^{\infty}\\), but we aren't gonna."
-   ~~Why is \\(1v=v\\) an axiom, whereas we say that _some_ \\(0\\) exists?~~ because we know 1 already, and you can follow the behavor of scalar multiplication
-   ~~what's that thing called again in proofs where you just steal the property of a constituent element?~~: inherits


## Interesting Factoids {#interesting-factoids}

-   The simplest vector space is \\(\\{0\\}\\)