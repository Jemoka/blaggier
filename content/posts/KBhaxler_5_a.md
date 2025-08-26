+++
title = "Axler 5.A"
author = ["Houjun Liu"]
draft = false
+++

EIGENSTUFF and [OPERATOR]({{< relref "KBhoperator.md" >}})S! Invariant subspaces are nice.

Sometimes, if we can break the domain of a linear map down to its eigenvalues, we can understand what its doing on a component-wise level.


## Key Sequence {#key-sequence}

-   we defined an [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}}), and gave a name to 1-D [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}})s: the span of [eigenvector]({{< relref "KBheigenvalue.md" >}})s
-   we showed some [properties of eigenvalues]({{< relref "KBheigenvalue.md#properties-of-id-7d742b39-4a4a-4a9d-a55b-07e2030dfdeb-eigenvalue-s" >}}) and showed that a [list of eigenvectors are linearly independent]({{< relref "KBheigenvalue.md#list-of-eigenvectors-are-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent" >}})
    -   a correlate of this is that [operators on finite dimensional V has at most dim V eigenvalues]({{< relref "KBheigenvalue.md#operators-on-finite-dimensional-v-has-at-most-dim-v-id-7d742b39-4a4a-4a9d-a55b-07e2030dfdeb-eigenvalue-s" >}})
-   finally, we defined [map restriction operator]({{< relref "KBhmap_restriction_operator.md" >}}) and [quotient operator]({{< relref "KBhquotient_operator.md" >}}), and showed that they were well-defined


## New Definitions {#new-definitions}

-   [invariant subspace]({{< relref "KBhinvariant_subspace.md" >}})
    -   conditions for [nontrivial invariant subspace]({{< relref "KBhinvariant_subspace.md#nontrivial-id-731fad15-1ec3-4619-8532-1290fefd3b89-invariant-subspace" >}})
-   [eigenvalue]({{< relref "KBheigenvalue.md" >}})s + [eigenvector]({{< relref "KBheigenvalue.md" >}})s + [eigenspace]({{< relref "KBheigenspace.md" >}})
-   two new operators: [map restriction operator]({{< relref "KBhmap_restriction_operator.md" >}}) and [quotient operator]({{< relref "KBhquotient_operator.md" >}})


## Results and Their Proofs {#results-and-their-proofs}

-   [properties of eigenvalues]({{< relref "KBheigenvalue.md#properties-of-id-7d742b39-4a4a-4a9d-a55b-07e2030dfdeb-eigenvalue-s" >}})
-   [list of eigenvectors are linearly independent]({{< relref "KBheigenvalue.md#list-of-eigenvectors-are-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent" >}})
    -   [eigenspaces are disjoint]({{< relref "KBheigenvalue.md#eigenspaces-are-disjoint" >}})
    -   [operators on finite dimensional V has at most dim V eigenvalues]({{< relref "KBheigenvalue.md#operators-on-finite-dimensional-v-has-at-most-dim-v-id-7d742b39-4a4a-4a9d-a55b-07e2030dfdeb-eigenvalue-s" >}})
-   [quotient operator is well-defined]({{< relref "KBhquotient_operator.md#id-84dca125-e64f-48d7-b71e-858ad5c3db6c-quotient-operator-is-well-defined" >}})


## Questions for Jana {#questions-for-jana}

-   ~~~~Doesn't [homogeneity]({{< relref "KBhhomogeneity.md" >}}) imply infinite [eigenvalue]({{< relref "KBheigenvalue.md" >}})s?~~~~ no. It _does_ imply infinite [eigenvector]({{< relref "KBheigenvalue.md" >}}), but [eigenvalue]({{< relref "KBheigenvalue.md" >}})s are well-defined: \\(T(\alpha v) = \alpha \lambda v\\), so the only scale that's introduced is \\(\lambda\\); \\(\alpha\\) already came in during the input.


## Interesting Factoids {#interesting-factoids}

"[eigenvalue]({{< relref "KBheigenvalue.md" >}})" is sometimes called the "characterizing value" of a map

-   [finding eigenvalues with actual numbers]({{< relref "KBheigenvalue.md#finding-eigenvalues-with-actual-numbers" >}})
-   [natural choordinates of a map]({{< relref "KBheigenvalue.md#natural-choordinates-of-a-map" >}})