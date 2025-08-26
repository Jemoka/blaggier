+++
title = "approximate inference"
author = ["Houjun Liu"]
draft = false
+++

## [Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) {#direct-sampling--kbhdirect-sampling-dot-md}

[Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) is an [approximate inference]({{< relref "KBhapproximate_inference.md" >}}) method where we pull samples from the given [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}}).


### Example {#example}

Suppose we are interested in:

{{< figure src="/ox-hugo/2023-10-05_09-19-51_screenshot.png" >}}

where we dare \\(P(B^{1}|D^{1},C^{1})\\).


#### Step 1: sort {#step-1-sort}

We obtain a [topological sort]({{< relref "KBhtopological_sort.md" >}}) of this network:

\begin{equation}
B, S, E, D, C
\end{equation}


#### Step 2: sample from \\(B,S\\) {#step-2-sample-from-b-s}

-   We sample \\(B\\). We sampled that \\(B=1\\) today.
-   We sample \\(S\\). We sampled that \\(S=0\\) today.


#### Step 3: sample from \\(E\\) {#step-3-sample-from-e}

-   We sample \\(E\\) **GIVEN** what we already sampled, that \\(B=1, S=0\\), we sampled that that \\(E = 1\\)


#### Step 4: sample from \\(D, C\\) {#step-4-sample-from-d-c}

-   We sample \\(D\\) given that \\(E=1\\) as we sampled.
-   We sample \\(C\\) given that \\(E=1\\) as we sampled.


#### Repeat {#repeat}

Repeat steps 2-4


#### Step n: Analyze {#step-n-analyze}

| B | S | E | D | C |
|---|---|---|---|---|
| 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |

We desire to know \\(P(b^{1}|d^{1}, c^{1})\\). Looks like, given this table, it would be \\(100\\%\\).


## [Likelihood Weighted Sampling]({{< relref "KBhdirect_sampling.md#likelihood-weighted-sampling" >}}) {#likelihood-weighted-sampling--kbhdirect-sampling-dot-md}

[Likelihood Weighted Sampling]({{< relref "KBhdirect_sampling.md#likelihood-weighted-sampling" >}}) is a sampling approach whereby you force values that you wont, and then weight the results by the chance of it happening.

This is **super useful** when our envidence is unlikely.


### Example {#example}

Suppose again you are interested in \\(P(b^{1}|d^{1}, c^{1})\\). In this case, we only sample \\(B,S,E\\):

| B | S | E |
|---|---|---|
| 0 | 1 | 0 |
| 1 | 0 | 1 |

Now, for each of these results, we the compute the chance of our priors happening given the samples.

-   Row 1: \\(p(d^{1}|e^{0})p(c^{1}|e^{0})\\)
-   Row 2: \\(p(d^{1}|e^{1})p(c^{1}|e^{1})\\)

Let's say:

-   Row 1: \\(p(d^{1}|e^{0})p(c^{1}|e^{0})=0.3\\)
-   Row 2: \\(p(d^{1}|e^{1})p(c^{1}|e^{1})=0.9\\)

Finally, to compute \\(p(b^{1}|d^{1}c^{1})\\):

\begin{equation}
\frac{0.9}{0.9+0.3}
\end{equation}

because only row \\(2\\) fit with our expectations.
