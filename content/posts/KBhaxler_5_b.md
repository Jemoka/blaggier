+++
title = "Axler 5.B"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}

-   we began the chapter defining [\\(T^m\\)]({{< relref "KBhraising_operators_to_powers.md" >}}) (reminding ourselves the usual rules of \\(T^{m+n} = T^{m}T^{n}\\), \\((T^{m})^{n} = T^{mn}\\), and, for invertible maps, \\(T^{-m} = (T^{-1})^{m}\\)) and [\\(p(T)\\)]({{< relref "KBhpolynomial_operator.md" >}}), wrapping copies of \\(T\\) into coefficients of a polynomial, and from those definitions showed that [polynomial of operator is commutative]({{< relref "KBhpolynomial_operator.md#id-fbaf420a-6345-417b-8016-a976e7b155be-polynomial-of-operator-is-commutative" >}})
-   we then used those results + [fundamental theorem of algebra]({{< relref "KBhfundamental_theorem_of_algebra.md" >}}) to show that [operators on complex vector spaces have an eigenvalue]({{< relref "KBhoperators_on_complex_vector_spaces_have_an_eigenvalue.md" >}})
-   that previous, important result in hand, we then dove into [upper-triangular matricies]({{< relref "KBhupper_triangular_matrix.md" >}})
    -   specifically, we learned the [properties of upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#properties-of-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}}), that if \\(v\_1 ... v\_{n}\\) is a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\) then \\(\mathcal{M}(T)\\) is [upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}}) if \\(Tv\_{j} \in span(v\_1, ... v\_{j})\\) for all \\(j \leq n\\); and, equivalently, \\(T\\) in [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under the [span]({{< relref "KBhspan.md" >}}) of \\(v\_{j}\\)
    -   using that result, we show that [every complex operator has an upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#every-complex-operator-has-an-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}})
    -   using some neat tricks of algebra, we then establish that [operator is only invertible if diagonal of its upper-triangular matrix is nonzero]({{< relref "KBhupper_triangular_matrix.md#operator-is-only-invertible-if-id-c38ed162-6861-420c-a812-6d25ac539ea9-diagonal-of-its-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix-is-nonzero" >}}), which seems awfully unmotivated until you learn that...
    -   [eigenvalues of a map are the entries of the diagonal of its upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#eigenvalues-of-a-map-are-the-entries-of-the-id-c38ed162-6861-420c-a812-6d25ac539ea9-diagonal-of-its-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}}), and that basically is a direct correlary from the [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) of \\(T-\lambda I\\)


## New Definitions {#new-definitions}

-   [\\(T^m\\)]({{< relref "KBhraising_operators_to_powers.md" >}})
-   [\\(p(T)\\)]({{< relref "KBhpolynomial_operator.md" >}})
    -   technically also [product of polynomials]({{< relref "KBhproduct_of_polynomial.md" >}})
-   [matrix]({{< relref "KBhmatricies.md" >}}) of an [operator]({{< relref "KBhoperator.md" >}})
    -   [diagonal]({{< relref "KBhmatricies.md#diagonal" >}}) of a matrix
    -   [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}})


## Results and Their Proofs {#results-and-their-proofs}

-   [\\(p(z) \to p(T)\\) is a linear function]({{< relref "KBhpolynomial_operator.md#p--z--to-p--t--is-a-linear-id-d782b5f7-29b5-4f70-a058-f15c0162cbef-function" >}})
-   [polynomial of operator is commutative]({{< relref "KBhpolynomial_operator.md#id-fbaf420a-6345-417b-8016-a976e7b155be-polynomial-of-operator-is-commutative" >}})
-   [operators on complex vector spaces have an eigenvalue]({{< relref "KBhoperators_on_complex_vector_spaces_have_an_eigenvalue.md" >}})
-   [properties of upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#properties-of-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}})
-   [every complex operator has an upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#every-complex-operator-has-an-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}})
-   [operator is only invertible if diagonal of its upper-triangular matrix is nonzero]({{< relref "KBhupper_triangular_matrix.md#operator-is-only-invertible-if-id-c38ed162-6861-420c-a812-6d25ac539ea9-diagonal-of-its-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix-is-nonzero" >}})
-   [eigenvalues of a map are the entries of the diagonal of its upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#eigenvalues-of-a-map-are-the-entries-of-the-id-c38ed162-6861-420c-a812-6d25ac539ea9-diagonal-of-its-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}})


## Questions for Jana {#questions-for-jana}

-   ~~why define the [matrix]({{< relref "KBhmatricies.md" >}}) of an [operator]({{< relref "KBhoperator.md" >}}) again??~~ just to stress that its square
-   for the second flavor of the proof that [every complex operator has an upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#every-complex-operator-has-an-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}}), why is \\(v\_1 ... v\_{j}\\)  a [basis]({{< relref "KBhbasis.md" >}}) of \\(V\\)?


## Interesting Factoids {#interesting-factoids}

Its 12:18AM and I read this chapter for 5 hours. I also just got jumpscared by my phone notification. What's happening?