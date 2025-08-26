+++
title = "SU-CS109 NOV102023"
author = ["Houjun Liu"]
draft = false
+++

## Key Sequence {#key-sequence}


## Notation {#notation}


## New Concepts {#new-concepts}

-   [Bernoulli distribution]({{< relref "KBhbernoulli_random_variable.md" >}}) as an indicator
-   [conditional expectation]({{< relref "KBhexpectation.md#conditional-expectation" >}})
-   [law of total expectation]({{< relref "KBhexpectation.md#law-of-total-expectation" >}})


## Important Results / Claims {#important-results-claims}

Review: [expectation]({{< relref "KBhexpectation.md" >}}). [Expectation]({{< relref "KBhexpectation.md" >}}) of the sums of [random variable]({{< relref "KBhrandom_variables.md" >}})s are [linear]({{< relref "KBhexpectation.md#properties-of-id-24e5fb5b-b0b2-4872-adf2-398e91c3ee0e-expectation" >}}) regardless of whether or not the variables are [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}), [independent]({{< relref "KBhprobability.md#independence" >}}), whatever.

"expectation of the sum is the sum of the expectations". "Can I write the expectation I want to calculate as the sum of something else?"


## Questions {#questions}


## Interesting Factoids {#interesting-factoids}

\\(\mathbb{E}[Y]\\) =

-   \\(x=1\\): 3
-   \\(x=2\\): 5 + Y
-   \\(x=3\\): 7 + Y

\begin{equation}
\mathbb{E}[Y] = 3 \cdot \frac{1}{3} + (5+ \mathbb{E}[Y]) \cdot \frac{1}{3} + (7+ \mathbb{E}[Y]) \cdot \frac{1}{3}
\end{equation}
