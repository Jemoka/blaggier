+++
title = "operator"
author = ["Houjun Liu"]
draft = false
+++

A [Linear Map]({{< relref "KBhlinear_map.md" >}}) from a [vector space]({{< relref "KBhvector_space.md" >}}) to itself is called an [operator]({{< relref "KBhoperator.md" >}}).

\\(\mathcal{L}(V) = \mathcal{L}(V,V)\\), which is the set of all [operator]({{< relref "KBhoperator.md" >}})s on \\(V\\).


## constituents {#constituents}

-   a [vector space]({{< relref "KBhvector_space.md" >}}) \\(V\\)
-   a [Linear Map]({{< relref "KBhlinear_map.md" >}}) \\(T \in \mathcal{L}(V,V)\\)


## requirements {#requirements}

-   \\(T\\) is, by the constraints above, an [operator]({{< relref "KBhoperator.md" >}})


## additional information {#additional-information}


### [injectivity]({{< relref "KBhinjectivity.md" >}}) is [surjectivity]({{< relref "KBhsurjectivity.md" >}}) in [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) [operator]({{< relref "KBhoperator.md" >}})s {#injectivity--kbhinjectivity-dot-md--is-surjectivity--kbhsurjectivity-dot-md--in-finite-dimensional--kbhfinite-dimensional-vector-space-dot-md--operator--kbhoperator-dot-md--s}

Suppose \\(V\\) is [finite-dimensional]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) and \\(T \in \mathcal{L}(V)\\), then, the following statements are equivalent:

1.  \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}})
2.  \\(T\\) is [injective]({{< relref "KBhinjectivity.md" >}})
3.  \\(T\\) is [surjective]({{< relref "KBhsurjectivity.md" >}})

**THIS IS NOT TRUE IN [infinite-demensional vector space]({{< relref "KBhfinite_dimensional_vector_space.md" >}}) OPERATORS!** (for instance, backwards shift in \\(\mathbb{F}^{\infty}\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}) but not [injective]({{< relref "KBhinjectivity.md" >}}).)

Proof:

From the above, \\(1 \implies 2\\) by definition of [invertability]({{< relref "KBhinvertability.md" >}}).

Then, we have that \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}). We desire that \\(T\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}). Given [invertability]({{< relref "KBhinvertability.md" >}}), we have that \\(\null T = \\{0\\}\\). By the [rank-nullity theorem]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}}), we have that:  \\(\dim V = \dim range\ T + \dim null\ T = \dim range\ T +0= \dim range\ T\\). Now, given \\(T\\) is an [operator]({{< relref "KBhoperator.md" >}}), we have that \\(range\ T \subset V\\). Attempting to extend a [basis]({{< relref "KBhbasis.md" >}}) of \\(range\ T\\) (which, given it is a [subspace]({{< relref "KBhsubspace.md" >}}) of \\(V\\), is a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\)) to a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\) will be the trivial extension. So \\(range\ T = V\\), which is also the codomain of \\(T\\). This makes \\(T\\) [surjective]({{< relref "KBhsurjectivity.md" >}}), as desired. So \\(2 \implies 3\\).

Now, we have that \\(T\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}), we desire that \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}). We essentially reverse-engineer the step before. Given [rank-nullity theorem]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}}), we have that: \\(\dim V = \dim range\ T + \dim null\ T\\). Now, given \\(T\\) is [surjective]({{< relref "KBhsurjectivity.md" >}}), \\(\dim range\ T = \dim V\\). Therefore, we have that \\(\dim V = \dim V + \dim null\ T \implies 0 = \dim null\ T\\). This makes the [null space]({{< relref "KBhnull_space.md" >}}) of \\(T\\) be \\(\\{0\\}\\). This makes \\(T\\) [injective]({{< relref "KBhinjectivity.md" >}}). Having shown \\(T\\) to be both [surjective]({{< relref "KBhsurjectivity.md" >}}) and [injective]({{< relref "KBhinjectivity.md" >}}), \\(T\\) is [invertable]({{< relref "KBhinvertability.md" >}}), as desired. So \\(3 \implies 1\\).

Having shown a loop in the statements, all of them are equivalent.


### [operators on complex vector spaces have an eigenvalue]({{< relref "KBhoperators_on_complex_vector_spaces_have_an_eigenvalue.md" >}}) {#operators-on-complex-vector-spaces-have-an-eigenvalue--kbhoperators-on-complex-vector-spaces-have-an-eigenvalue-dot-md}

See [operators on complex vector spaces have an eigenvalue]({{< relref "KBhoperators_on_complex_vector_spaces_have_an_eigenvalue.md" >}})
