+++
title = "Axler 6.B"
author = ["Houjun Liu"]
draft = false
+++

OMG its [Gram-Schmidtting]({{< relref "KBhgram_schmidt.md" >}})


## Key Sequence {#key-sequence}

-   we defined lists of vectors that all have [norm]({{< relref "KBhnorm.md" >}}) 1 and are all [orthogonal]({{< relref "KBhorthogonal.md" >}}) to each other as [orthonormal]({{< relref "KBhorthonormal.md" >}}); we showed [orthonormal list is linearly independent]({{< relref "KBhorthonormal.md#orthonormal-list-is-linearly-independent" >}}) by hijacking [pythagoras]({{< relref "KBhcornucopia_of_analysis.md#pythagorean-theorem" >}})
-   of course, once we have a finitely long [linearly independent]({{< relref "KBhlinear_independence.md" >}}) thing we must be able to [build a basis]({{< relref "KBhorthonormal_basis.md#orthonormal-list-of-the-right-length-is-a-basis" >}}). The nice thing about such an [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) is that for every vector [we know precisely what its coefficients have to be]({{< relref "KBhorthonormal_basis.md#writing-a-vector-as-a-linear-combination-of-orthonormal-basis" >}})! Specifically, \\(a\_{j} = \langle v, e\_{j} \rangle\\). That's cool.
-   What we really want, though, is to be able to get an [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) from a regular [basis]({{< relref "KBhbasis.md" >}}), which we can do via [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}}). In fact, this gives us some useful correlaries regarding the existance of [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) (just [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}}) a normal one), or extending a [orthonormal]({{< relref "KBhorthonormal.md" >}}) list to a basis, etc. There are also important implications (still along the veins of "just [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}}) it!") for [upper-traingular matricies]({{< relref "KBhgram_schmidt.md#schur-s-theorem" >}}) as well
-   We also learned, as a result of [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}), any finite-dimensional [linear functional]({{< relref "KBhlinear_functional.md" >}}) ([Linear Map]({{< relref "KBhlinear_map.md" >}})s to scalars) can be represented as an [inner product]({{< relref "KBhinner_product.md" >}}) via the [Riesz Representation Theorem]({{< relref "KBhlinear_functional.md#riesz-representation-theorem" >}}), which is honestly kinda epic.


## New Definitions {#new-definitions}

-   [orthonormal]({{< relref "KBhorthonormal.md" >}}) + [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}})
-   [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}}) (i.e. [orthonormalization]({{< relref "KBhgram_schmidt.md" >}}))
-   [linear functional]({{< relref "KBhlinear_functional.md" >}}) and [Riesz Representation Theorem]({{< relref "KBhlinear_functional.md#riesz-representation-theorem" >}})


## Results and Their Proofs {#results-and-their-proofs}

-   [Norm of an Orthogonal Linear Combination]({{< relref "KBhorthonormal.md#norm-of-an-orthogonal-linear-combination" >}})
-   [An orthonormal list is linearly independent]({{< relref "KBhorthonormal.md#orthonormal-list-is-linearly-independent" >}})
-   [An orthonormal list of the right length is a basis]({{< relref "KBhorthonormal_basis.md#orthonormal-list-of-the-right-length-is-a-basis" >}})
-   [Writing a vector as a linear combination of orthonormal basis]({{< relref "KBhorthonormal_basis.md#writing-a-vector-as-a-linear-combination-of-orthonormal-basis" >}})
-   Corollaries of [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}})
    -   [Every Inner Product Space has an orthonormal basis]({{< relref "KBhgram_schmidt.md#every-id-4a788e29-a3e9-4c13-8c97-08746878966e-inner-product-space-has-an-id-2a1eecb2-f23a-469f-a860-b561a9197906-orthonormal-basis" >}})
    -   [Orthonormal list extended to orthonormal basis]({{< relref "KBhgram_schmidt.md#orthonormal-list-extended-to-id-2a1eecb2-f23a-469f-a860-b561a9197906-orthonormal-basis" >}})
    -   [Orthonormal upper-triangular matrix basis exists if normal upper-triangular exists]({{< relref "KBhgram_schmidt.md#orthonormal-upper-triangular-matrix-basis-exists-if-normal-upper-triangular-exists" >}})
    -   [Schur's Theorem]({{< relref "KBhgram_schmidt.md#schur-s-theorem" >}})
-   [Riesz Representation Theorem]({{< relref "KBhlinear_functional.md#riesz-representation-theorem" >}})


## Questions for Jana {#questions-for-jana}


## Interesting Factoids {#interesting-factoids}