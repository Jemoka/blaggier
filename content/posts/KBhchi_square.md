+++
title = "chi-square"
author = ["Houjun Liu"]
draft = false
+++

\\(\chi^2\\) is a test [statistic]({{< relref "KBhstastistic.md" >}}) for [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}).


## motivation for chi-square {#motivation-for-chi-square}

The motivation for [chi-square]({{< relref "KBhchi_square.md" >}}) is because [t-test]({{< relref "KBht_test.md" >}}) (means, "is the value significantly different") and [z-test]({{< relref "KBhz_test.md" >}}) (proportion, "is the incidence percentage significantly different") all don't really cover categorical data samples: "the categories are distributed in this way."

Take, for instance, if we want to test the following [null hypothesis]({{< relref "KBhhypothesis_testing.md#null-hypothesis" >}}):

| Category | Expected | Actual |
|----------|----------|--------|
| A        | 25       | 20     |
| B        | 25       | 20     |
| C        | 25       | 25     |
| D        | 25       | 25     |

\\(\alpha = 0.05\\). What do we use to test this??

(hint: we can't, unless...)

Enter [chi-square]({{< relref "KBhchi_square.md" >}}).


## chi-square test {#chi-square-test}

[chi-square test](#chi-square-test) is a [hypothesis test]({{< relref "KBhhypothesis_testing.md" >}}) for categorical data. It is responsible to translate differences in distributions into [p-value]({{< relref "KBhhypothesis_testing.md#p-value" >}})s for significance.

Begin by [calculating chi-square](#calculating-chi-square) after you confirmed that your experiment meets [conditions for inference (chi-square test)](#conditions-for-inference--chi-square-test).

Once you have that, look it up at a chi-square table to figure the appropriate [p-value]({{< relref "KBhhypothesis_testing.md#p-value" >}}). Then, proceed with normal [hypothesis testing]({{< relref "KBhhypothesis_testing.md" >}}).

Because of this categorical nature, [chi-square test](#chi-square-test) can also be used as a homogeneity test.


## conditions for inference (chi-square test) {#conditions-for-inference--chi-square-test}

-   random sampling
-   expected value for data must be \\(\geq 5\\)
-   sampling should be \\(<10\\%\\) or independent


## chi-square test for homogeneity {#chi-square-test-for-homogeneity}

The [chi-square test for homogeneity](#chi-square-test-for-homogeneity) is a test for [homogeneity]({{< relref "KBhhomogeneity.md" >}}) via the [chi-square]({{< relref "KBhchi_square.md" >}}) [statistic]({{< relref "KBhstastistic.md" >}}).

To do this, we take the probability of a certain outcome happening---if distributed equally---and apply it to the samples to compare.

Take, for instance:

| Subject       | Right Hand | Left Hand | ****Total**** |
|---------------|------------|-----------|---------------|
| STEM          | 30         | 10        | 40            |
| Humanities    | 15         | 25        | 40            |
| Equal         | 15         | 5         | 20            |
| ****Total**** | 60         | 40        | 100           |

We will then figure the expected outcomes:

| Right | Left |
|-------|------|
| 24    | 16   |
| 24    | 16   |
| 12    | 8    |

Awesome! Now, [calculate chi-square](#calculating-chi-square) with each cell of measured outcomes. Calculate degrees of freedom by (num_row-1)\*(num_col-1).


## chi-square test for independence {#chi-square-test-for-independence}

The [chi-square test for independence](#chi-square-test-for-independence) is a test designed to accept-reject the null hypothesis of "no association between two variables."

Essentially, you leverage the fact that "AND" relationships are multiplicative probabilities. Therefore, the expected outcomes are simply the multiplied/fraction of sums:

{{< figure src="/ox-hugo/2022-04-20_22-37-43_screenshot.png" >}}


## calculating chi-square {#calculating-chi-square}

\begin{equation}
   \chi^2 = \frac{(\hat{x}\_0-x\_0)^2}{x\_0} +\frac{(\hat{x}\_1-x\_1)^2}{x\_1} + \cdots + \frac{(\hat{x}\_n-x\_n)^2}{x\_n}
\end{equation}

Where, \\(\hat{x}\_i\\) is the measured value and \\(x\_i\\) is the expected value.