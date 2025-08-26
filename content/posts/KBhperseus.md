+++
title = "Randomized Point-Based Value Iteration"
author = ["Houjun Liu"]
draft = false
+++

The number of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s needed to perform [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}) is one for each of your belief sample. Which is a bad idea. [Perseus]({{< relref "KBhperseus.md" >}}) is essentially [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}), where this idea is explored slightly.

The preamble is the same as [PBVI]({{< relref "KBhpoint_based_value_iteration.md" >}}):

we keep track of a bunch of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s and [belief]({{< relref "KBhbelief.md" >}}) samples (which we get from [point selection]({{< relref "KBhpoint_selection.md" >}})):

\begin{equation}
\Gamma = \\{\alpha\_{1}, \dots, \alpha\_{m}\\}
\end{equation}

and

\begin{equation}
B = \\{b\_1, \dots, b\_{m}\\}
\end{equation}

To preserve the lower-boundedness of these [alpha vector]({{< relref "KBhalpha_vector.md" >}})s, one should seed the [alpha vector]({{< relref "KBhalpha_vector.md" >}})s via something like [blind lower bound]({{< relref "KBhblind_lower_bound.md" >}})

We can estimate our [utility]({{< relref "KBhutility_theory.md" >}}) function at any belief by looking in the set for the most optimal:

\begin{equation}
U^{\Gamma}(b) = \max\_{\alpha \in \Gamma} \alpha^{\top}b
\end{equation}

We now define a function named `backup` (see [PBVI Backup]({{< relref "KBhpoint_based_value_iteration.md#pbvi-backup" >}})), and call it on ONLY ONE belief:

let us sample---

\begin{equation}
b \in B
\end{equation}

and call `backup` to get:

\begin{equation}
\alpha' = backup(\Gamma, b)
\end{equation}

where,

\begin{equation}
backup(\Gamma, b) \rightarrow \alpha\_{t+1}
\end{equation}

Now, if \\(b \cdot a' > \max\_{\alpha \in \Gamma} \alpha^{\top}b\\) (i.e. we just increased our value floor because our new [alpha vector]({{< relref "KBhalpha_vector.md" >}}) indicates a higher value at \\(b\\)), we add our new vector to the set \\(\Gamma\\). Otherwise, we add \\(a' = \arg\max\_{\alpha \in \Gamma} b \cdot \alpha\\), the [alpha vector]({{< relref "KBhalpha_vector.md" >}}) which previously got the highest value for \\(b\\).

After this, we pull a Perseus-core funni:


## Perseus Belief Pruning {#perseus-belief-pruning}

let us define:

\begin{equation}
V\_{t}(b) = \max\_{\alpha \in \Gamma\_{t}} \alpha \cdot b
\end{equation}

and

\begin{equation}
V\_{t+1}(b) = \max\_{\alpha \in \Gamma\_{t+1}} \alpha \cdot b
\end{equation}

namely, the expected value of \\(b\\) before and after [belief]({{< relref "KBhbelief.md" >}}) updates. Then, we:

\begin{equation}
B\_{t+1} = \\{b \in B, \text{if}\ V\_{t+1}(b) < V(b)\\}
\end{equation}

that is, if updating our sampled belief's [alpha vector]({{< relref "KBhalpha_vector.md" >}}) improved the value of another belief in the set by accident already, we don't need to update that belief again.

Repeat this process until we are out of beliefs to update, that is, when \\(B = \emptyset\\).


## Slight Variation? {#slight-variation}

{{< figure src="/ox-hugo/2024-01-27_20-15-18_screenshot.png" >}}

then,

{{< figure src="/ox-hugo/2024-01-27_20-15-24_screenshot.png" >}}
