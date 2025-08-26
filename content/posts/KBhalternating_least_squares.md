+++
title = "Alternating Least Squares"
author = ["Houjun Liu"]
draft = false
+++

[Alternating Least Squares]({{< relref "KBhalternating_least_squares.md" >}}) is a method to [Factoring]({{< relref "KBhthoughts_on_axler_4.md#factoring" >}}) a [matrix]({{< relref "KBhmatricies.md" >}}) into two components:

\begin{equation}
\mathcal{M}( R) \approx \mathcal{M}(U) \cdot \mathcal{M}(P)
\end{equation}

where, we want to come up matricies \\(U\\) and \\(P\\) with a certain side length \\(k\\) that we exdogenously come up with

{{< figure src="/ox-hugo/2023-08-01_11-10-42_screenshot.png" >}}

---

To perform [Alternating Least Squares]({{< relref "KBhalternating_least_squares.md" >}}), we fix the values of either \\(U\\) or \\(P\\), then perform the least-squares optimization on

(This is proven best-fit for "[non-pathological matricies]({{< relref "KBhnon_pathological_matricies.md" >}})")
