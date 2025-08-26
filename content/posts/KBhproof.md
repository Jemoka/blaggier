+++
title = "proof"
author = ["Houjun Liu"]
draft = false
+++

[proof]({{< relref "KBhproof.md" >}}) are important: you don't understand something until you proof it. We want to come up with the right level of proof---this is a challenge.

-   good proofs should be **clear**
-   good proofs should be **correct** and **convincing**
-   good proofs has **layers**: "cover the 'hot' technical details with various levels of intuition"

Typically, in writing proofs, it could be helpful to write three levels of detail:

1.  "hint" of the proof - "proof by contradiction, proof by induction, follows from..."
2.  "sketch" of the proof - a one-paragraph of the description of the main ideas
3.  the proofy proof

---

-   lecture proof are usually very scant of the third-level details
-   you should think about how to fill in the details!


## methods of proof {#methods-of-proof}

-   construction
-   contradiction
-   [induction]({{< relref "KBhprinciple_of_induction.md" >}}) / [strong induction]({{< relref "KBhstrong_induction.md" >}})
-   most powerful type of proof---[reduction]({{< relref "KBhcomplexity_theory.md#reduction--algorithms" >}})s, connecting problems together

---


## interactive proof systems {#interactive-proof-systems}

We have two parties of a game, the **proves** and **verifier**. Something is a well-formed proof system IF BOTH:

-   the prover can convience the verifier of the truthfulness
-   the prover cannot make a statement to the verifier that is false under this system
