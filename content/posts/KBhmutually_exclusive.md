+++
title = "mutually exclusive"
author = ["Houjun Liu"]
draft = false
+++

[probability]({{< relref "KBhprobability.md" >}}) of "or"

If its not possible for two events to happen at the same time, they are called [mutually exclusive]({{< relref "KBhmutually_exclusive.md" >}}):

\begin{equation}
P(E\ or\ F) = P(E)+P(F) - P(E \cap F)
\end{equation}

This is called the [inclusion exclusion principle]({{< relref "KBhmutually_exclusive.md" >}}). This is what motivates [inclusion exclusion counting]({{< relref "KBhsum_rule_of_counting.md" >}}).


## General [inclusion exclusion principle]({{< relref "KBhmutually_exclusive.md" >}}) {#general-inclusion-exclusion-principle--kbhmutually-exclusive-dot-md}

Its scary. Think about this:

{{< figure src="/ox-hugo/2023-10-06_15-56-50_screenshot.png" >}}

We basically need to alternate between adding and subtracting. (i.e.: in our case here, we add all the odd-group pairs (for P(x) and P(xyz)), we subtract the even-number pairs (for p(xy))).

And so:

\begin{equation}
P(E\_1\ or\ \dots\ or\ E\_{n}) = \sum\_{r=1}^{n} (-1)^{r+1} Y\_{r}
\end{equation}

whereby, \\(Y\_{j}\\) is the sum of \\(P(x\_n, ... x\_{j})\\) for [combination]({{< relref "KBhcombination.md" >}})s of \\(j\\) events.

Try not to do this.
