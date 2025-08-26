+++
title = "Proof Design Patterns"
author = ["Houjun Liu"]
draft = false
+++

Based on the wise words of a crab, I will start writing down some [Proof Design Patterns]({{< relref "KBhproof_design_patterns.md" >}}) I saw over ~~[Axler]({{< relref "KBhlinear_algebra_index.md" >}})~~ everything.

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

-   proving uniqueness: set up two distinct results, show that they are the same
-   proving negation: if the "negative" is distinct, but the direct case is more nebulous, use proves by contradiction

-   [proof by induction]({{< relref "KBhproof_by_induction.md" >}})
    -   especially if you are dealing with polynomials, try factoring
    -   tools to help includes [length of linearly-independent list \\(\leq\\) length of spanning list]({{< relref "KBhlinear_independence.md#length-of-linearly-independent-list-leq-length-of-spanning-list" >}})
-   Uniqueness by construction: uniqueness part of [basis of domain]({{< relref "KBhbasis_of_domain.md" >}})
    -   pick one element that does exist
    -   pick arbitrary elements and construct a result

-   if we are trying to prove equivalence, double-containment is a good bet
-   see [fundamental theorem of linear maps]({{< relref "KBhfundamental_theorem_of_linear_maps.md" >}}): but basically wehnever you need to construct [basis]({{< relref "KBhbasis.md" >}}) of things start with an arbiturary [basis]({{< relref "KBhbasis.md" >}}) of the subspace and expand into that of the whole space

-   [a loop in the statements makes them all equivalent]({{< relref "KBhoperator.md#id-e3ff3c90-e719-4c5b-afc4-efcec3169fb2-injectivity-is-id-1af529ce-e2fb-43a4-8f13-aee1dc743b5f-surjectivity-in-id-4ed27ed5-4edc-4ef4-afd7-9b8e3bcd9b96-finite-dimensional-id-36e84a46-76f1-481e-b031-8ab2f0da0aa8-operator-s" >}})

-   [working with the square of the norm is often easier]({{< relref "KBhnorm.md#properties-of-the-norm" >}})

<!--listend-->

-   using [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) in place of a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) can make your life a lot easier; if you need a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) in the end then just use [subset construction]({{< relref "KBhnondeterministic_finite_automata.md#dfa--kbhdeterministic-finite-automata-dot-md--s-are-equivalent-to-nfa--kbhnondeterministic-finite-automata-dot-md--s" >}})
-   remember the [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}})s that are useful to make each construction for the [properties of regular languages]({{< relref "KBhregular_language.md#properties-of-id-a8a2a1e4-9bb8-4a06-8218-5002136bab87-regular-language-s" >}}); then, construct any [NFA]({{< relref "KBhnondeterministic_finite_automata.md" >}}) you need to support a particular language out of those properties
