+++
title = "Proof Design Patterns"
author = ["Houjun Liu"]
draft = false
+++

Based on the wise words of a crab, I will start writing down some [Proof Design Patterns]({{< relref "KBhproof_design_patterns.md" >}}) I saw over [Axler]({{< relref "KBhlinear_algebra_index.md" >}}).

-   [inheriting properties (splitting, doing, merging)]({{< relref "KBhcomplex_number.md#insights-combining-and-splitting" >}}) "complex numbers inherit [commutativity]({{< relref "KBhcommutivity.md" >}}) via [real number]({{< relref "KBhreal_number.md" >}})s"
-   [construct then generalize]({{< relref "KBhcomplex_number.md#insights-construct-then-generalize" >}}) for uniqueness and existence
-   [try to remember to go backwards]({{< relref "KBhcomplex_number.md#insights-try-to-remember-to-go-backwards" >}})
-   [to prove IFF]({{< relref "KBhequivalence.md" >}})
-   [zero is cool]({{< relref "KBhadditive_inverse_is_unique_in_a_vector_space.md" >}}), [and here too!]({{< relref "KBhzero_times_vector.md" >}}), also \\(1-1=0\\)
    -   \\(0v = 0\\)
    -   \\(1-1 = 0\\)
    -   \\(v-v=0\\) a.k.a. \\(v+(-v)=0\\)
    -   \\(v+0 = v\\)
-   [distributivity]({{< relref "KBhdistributivity.md" >}}) is epic: it is essentially the only tool to connect scalar multiplication and addition in a [vector space]({{< relref "KBhvector_space.md" >}})
-   ["smallest" double containement proofs]({{< relref "KBhsum_of_subsets.md#sum-of-subspaces-is-the-smallest-subspace-with-both-subspaces" >}}) to show set [equivalence]({{< relref "KBhequivalence.md" >}}): prove one way, then prove the converse (\\(a \subset b, b\subset a \Rightarrow a=b\\))

-   couple hints
    -   step 1: identify
        -   hypothesis (assumptions)
        -   desired conclusion (results, trying/to/proof)
    -   step 2: define
        -   write down precise, mathematical notations