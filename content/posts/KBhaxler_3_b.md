+++
title = "Axler 3.B"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}

-   we defined the [null space]({{< relref "KBhnull_space.md" >}}) and [injectivity]({{< relref "KBhinjectivity.md" >}})
    -   from that, we showed that [injectivity IFF implies that null space is \\(\\{0\\}\\)]({{< relref "KBhinjectivity.md#injectivity-implies-that-id-767a441d-4931-4fad-aa8e-c6b001e8b507-null-space-is-0" >}}), essentially because if \\(T0=0\\) already, there cannot be another one that also is taken to \\(0\\) in an [injective]({{< relref "KBhinjectivity.md" >}}) function
-   we defined [range]({{< relref "KBhrange.md" >}}) and [surjectivity]({{< relref "KBhsurjectivity.md" >}})
-   we showed that these concepts are strongly related by the [fundamental theorem of linear maps]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}}): if \\(T \in \mathcal{L}(V,W)\\), then \\(\dim V = \dim null\ T + \dim range\ T\\)
-   from the fundamental theorem, we showed the somewhat intuitive pair about the sizes of maps: [map to smaller space is not injective]({{< relref "KBhlinear_map.md#map-to-smaller-space-is-not-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}}), [map to bigger space is not surjective]({{< relref "KBhlinear_map.md#map-to-bigger-space-is-not-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjective" >}})
-   we then applied that result to show results about [homogeneous]({{< relref "KBhhomogeneity.md" >}}) systems
    -   [homogenous system with more variables than equations has nonzero solutions]({{< relref "KBhhomogeneity.md#id-f57b638c-b8c9-4c88-b02f-9cd0ed47c51e-homogenous-system-with-more-variables-than-equations-has-nonzero-solutions" >}})
    -   [inhomogenous system with more equations than variables has no solutions for an arbitrary set of constants]({{< relref "KBhhomogeneity.md#in-id-f57b638c-b8c9-4c88-b02f-9cd0ed47c51e-homogenous-system-with-more-equations-than-variables-has-no-solutions-for-an-arbitrary-set-of-constants" >}})


## New Definitions {#new-definitions}

-   [null space]({{< relref "KBhnull_space.md" >}})
    -   [injectivity]({{< relref "KBhinjectivity.md" >}})
-   [range]({{< relref "KBhrange.md" >}})
    -   [surjectivity]({{< relref "KBhsurjectivity.md" >}})
-   [homogeneous system]({{< relref "KBhhomogeneity.md" >}})


## Results and Their Proofs {#results-and-their-proofs}

-   [the null space is a subspace of the domain]({{< relref "KBhnull_space.md#the-null-space-is-a-id-345c37fa-5d4c-44e9-ad03-2fe7e5a37224-subspace-of-the-domain" >}})
-   [injectivity IFF implies that null space is \\(\\{0\\}\\)]({{< relref "KBhinjectivity.md#injectivity-implies-that-id-767a441d-4931-4fad-aa8e-c6b001e8b507-null-space-is-0" >}})
-   the [fundamental theorem of linear maps]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}})
-   "sizes" of maps
    -   [map to smaller space is not injective]({{< relref "KBhlinear_map.md#map-to-smaller-space-is-not-id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injective" >}})
    -   [map to bigger space is not surjective]({{< relref "KBhlinear_map.md#map-to-bigger-space-is-not-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjective" >}})
-   solving systems of equations:
    -   [homogenous system with more variables than equations has nonzero solutions]({{< relref "KBhhomogeneity.md#id-f57b638c-b8c9-4c88-b02f-9cd0ed47c51e-homogenous-system-with-more-variables-than-equations-has-nonzero-solutions" >}})
    -   [inhomogenous system with more equations than variables has no solutions for an arbitrary set of constants]({{< relref "KBhhomogeneity.md#in-id-f57b638c-b8c9-4c88-b02f-9cd0ed47c51e-homogenous-system-with-more-equations-than-variables-has-no-solutions-for-an-arbitrary-set-of-constants" >}})


## Questions for Jana {#questions-for-jana}

-   ~~"To prove the inclusion in the other direction, suppose v 2 null T." for 3.16; what is the _first_ direction?~~ maybe nothing maps to \\(0\\)