+++
title = "complexity theory"
author = ["Houjun Liu"]
draft = false
+++

[complexity theory]({{< relref "KBhcomplexity_theory.md" >}}) is a theory in algorithms to analyze time classes.


## older Notes {#older-notes}

We know that \\(O(n\ log\ n)\\) is between \\(O(n)\\) and \\(O(n^2)\\) --- so we can roughly call it "polynomial time."

Since the optimal comparison cannot be faster than polynomial time, we say that comparison-based sorting is a _polynomial-time_ algorithm.

From this information, we can come up with two main time classes: \\(P\\) for solutions with known polynomial time, \\(NP\\) for non-deterministic polynomial time.

Think of it as \\(P\\) is solvable with polynomial time and \\(NP\\) is verifiable with polynomial time.

The cool thing about \\(NP\\) problems is that solving a subset of them ("\\(NP\\) hard" problems) solves all \\(NP\\) problems.


### reduction (algorithms) {#reduction--algorithms}

[reduction](#reduction--algorithms) is how you can use \\(NP-hard\\) problems to solve all \\(NP\\) problems in [complexity theory]({{< relref "KBhcomplexity_theory.md" >}}).

Say, multiplication:

-   say you have a basic algorithm to add
-   we can perform multiplication by asking our black box addition algorithm to add \\(n\\) times
-   in [complexity theory]({{< relref "KBhcomplexity_theory.md" >}}) terms, this means addition is "at least as hard" as multiplication. Because, if we can solve any addition problem, we can solve any multiplication problem.

"Given this, do that."


### problem classes {#problem-classes}

(see above)

-   "Polynomial time" \\(P\\) --- problems solvable with polynomial time
-   "Non-deterministic polynomial time" \\(NP\\) --- problem verifiable with polynomial time
-   "Exponential time" \\(EXPTIME\\) --- problems that can only be solved in exponential time
-   "2 Exponential time" \\(2EXPTIME\\) --- class of problems that takes \\(2^{2^n}\\) time to solve

Space complexity works in a similar way.

\\(P\\) and \\(NP\\) are deterministic and non-deterministic _in context_ to a Turing machine.

Fundamentally, \\(P\\) and \\(NP\\) only apply to _decision problems_---given a problem, output "yes" or "no." However, this definition can be stretched: sorting is a decision problem, because it can be stated as "given an unsorted array, can you verify whether or not an array is sorted"
