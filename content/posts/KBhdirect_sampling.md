+++
title = "Direct Sampling"
author = ["Houjun Liu"]
draft = false
+++

[Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) is the act in [probability]({{< relref "KBhprobability.md" >}}) to sample what you want from the distribution. This is often used when actual [inference]({{< relref "KBhinference.md" >}}) impossible. It involves. well. sampling from the distribution to compute a [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}) that you want.

It basically involves invoking the [Frequentist Definition of Probability]({{< relref "KBhprobability.md#frequentist-definition-of-probability" >}}) without letting \\(n \to \infty\\), instead just sampling some \\(n < \infty\\) and dividing the event space by your [sample space]({{< relref "KBhsample_space.md" >}}).

So, for instance, to compute [inference]({{< relref "KBhinference.md" >}}) on \\(b^{1}\\) given observations \\(d^{1}c^{1}\\), we can write:

\begin{equation}
P(b^{1} | d^{1}, c^{1}) = \frac{P(b^{1}, d^{1}, c^{1})}{P(d^{1})P(c^{1})} \approx \frac{\sum\_{i}^{} b^{i} = 1 \land d^{i} = i \land c^{i} = 1}{\sum\_{i}^{} d^{i} =1 \land c^{i} = 1}
\end{equation}

where \\(a^{i}\\) is the \\(i\\) th sample.


## Direct Sampling a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) {#direct-sampling-a-baysian-network--kbhbaysian-network-dot-md}

We first obtain a [topological sort]({{< relref "KBhtopological_sort.md" >}}) of the system. For a graph with \\(n\\) nodes, we then obtain a list \\(X\_{1:n}\\).

We can then obtain a [Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) via simply sampling from this list. Whenever we need to sample some kind of [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}), we know that for every \\(k\_{i}\\) we need to sample from, its parent conditions would have already been sampled because we are sampling in order of a [topological sort]({{< relref "KBhtopological_sort.md" >}}) so we can just sample the values from a subset of the conditioned set.


## Likelihood Weighted Sampling {#likelihood-weighted-sampling}

[Likelihood Weighted Sampling](#likelihood-weighted-sampling) is a change to the [Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) approach which deals with the fact that [Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) may oversample [conditional probabilities]({{< relref "KBhprobability.md#conditional-probability" >}}) as it is sampling sub-nodes an equal amount.

It is particularly useful when our priors are unlikely.

To do this, we first perform [Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) as how you would normally. Now, say we get \\(D=1\\), \\(C=1\\), \\(E=1\\) for the [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) presented below, the actual value we return would be whatever \\(P(D|E) P(C|E)\\).

{{< figure src="/ox-hugo/2023-09-28_10-20-23_screenshot.png" >}}

See [an example here]({{< relref "KBhapproximate_inference.md#example" >}}).
