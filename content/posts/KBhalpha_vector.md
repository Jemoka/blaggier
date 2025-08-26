+++
title = "alpha vector"
author = ["Houjun Liu"]
draft = false
+++

Recall, from [conditional plan evaluation]({{< relref "KBhconditional_plan.md#id-6f19368f-74b5-4606-a882-ec9bc5619873-conditional-plan-evaluation" >}}), we had that:

\begin{equation}
U^{\pi}(b) = \sum\_{s}^{} b(s) U^{\pi}(s)
\end{equation}

let's write it as:

\begin{equation}
U^{\pi}(b) = \sum\_{s}^{} b(s) U^{\pi}(s) = {\alpha\_{\pi}}^{\top} b
\end{equation}

where \\(\U\_{\pi}(s)\\) is the [conditional plan evaluation]({{< relref "KBhconditional_plan.md#id-6f19368f-74b5-4606-a882-ec9bc5619873-conditional-plan-evaluation" >}}) starting at each of the initial states.

\begin{equation}
\alpha\_{\pi} = \qty[ U^{\pi}(s\_1), U^{\pi}(s\_2) ]
\end{equation}

You will notice, then the [utility]({{< relref "KBhutility_theory.md" >}}) of \\(b\\) is linear on \\(b\\) for different policies \\(\alpha\_{\pi}\\):

{{< figure src="/ox-hugo/2023-11-16_09-23-10_screenshot.png" >}}

At every belief \\(b\\), there is a policy which has the highest \\(U(b)\\) at that \\(b\\) given be the [alpha vector]({{< relref "KBhalpha_vector.md" >}}) formulation.


## Additional Information {#additional-information}


### top action {#top-action}

you can just represent a [policy]({{< relref "KBhpolicy.md" >}}) out of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s by taking the top (root) action of the [conditional plan]({{< relref "KBhconditional_plan.md" >}}) with the [alpha vector]({{< relref "KBhalpha_vector.md" >}}) on top.


### [optimal value function for POMDP]({{< relref "KBhconditional_plan.md#id-9ccda204-0967-44c8-a801-c92d0df154b5-optimal-value-function-for-id-130d5294-0274-422b-b395-7d6f7f75be7d-pomdp" >}}) with [alpha vector]({{< relref "KBhalpha_vector.md" >}}) {#optimal-value-function-for-pomdp--kbhconditional-plan-dot-md--with-alpha-vector--kbhalpha-vector-dot-md}

Recall:

\begin{equation}
U^{\*}(b) = \max\_{\pi} U^{\pi}(b) = \max\_{\pi} \alpha\_{\pi}^{\top}b
\end{equation}

NOTE! This function (look at the chart above from \\(b\\) to \\(u\\)) is:

1.  piecewise linear
2.  convex (because the "best" (highest) line) is always curving up

and so, for a policy instantiated by a bunch of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s \\(\Gamma\\), we have:

\begin{equation}
U^{\Gamma}(b) = \max\_{\alpha \in \Gamma} \alpha^{\top}  b
\end{equation}

To actually extract a [policy]({{< relref "KBhpolicy.md" >}}) out of this set of vectors \\(\Gamma\\), we turn to [one-step lookahead in POMDP](#one-step-lookahead-in-pomdp)


### one-step lookahead in POMDP {#one-step-lookahead-in-pomdp}

Say you want to extract a [policy]({{< relref "KBhpolicy.md" >}}) out of a bunch of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s.

Let \\(\alpha \in \Gamma\\), a set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s.

\begin{equation}
\pi^{\Gamma}(b) = \arg\max\_{a}\qty[R(b,a)+\gamma \qty(\sum\_{o}^{}P(o|b,a) U^{\Gamma}(update(b,a,o)))]
\end{equation}

where:

\begin{equation}
R(b,a) = \sum\_{s}^{} R(s,a)b(s)
\end{equation}

\begin{align}
P(o|b,a) &= \sum\_{s}^{} p(o|s,a) b(s)  \\\\
&= \sum\_{s}^{} \sum\_{s'}^{} T(s'|s,a) O(o|s',a) b(s)
\end{align}

and

\begin{equation}
U^{\Gamma}(b) = \max\_{\alpha \in \Gamma} \alpha^{\top}  b
\end{equation}


### [alpha vector]({{< relref "KBhalpha_vector.md" >}}) pruning {#alpha-vector--kbhalpha-vector-dot-md--pruning}

Say we had as set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s \\(\Gamma\\):

{{< figure src="/ox-hugo/2023-11-16_09-40-27_screenshot.png" >}}

\\(\alpha\_{3}\\) isn't all that useful here. So we ask:

"Is alpha dominated by some \\(\alpha\_{i}\\) everywhere?"

We formulate this question in terms of a linear program:

\begin{equation}
\max\_{\delta, b} \delta
\end{equation}

where \\(\delta\\) is the gap between \\(\alpha\\) and the [utility]({{< relref "KBhutility_theory.md" >}}) o

subject to:

\begin{align}
&1^{\top} b = 1\ \text{(b adds up to 1)} \\\\
& b\geq 0 \\\\
& \alpha^{\top} b \geq \alpha'^{\top} b + \delta, \forall \alpha' \in \Gamma
\end{align}

if \\(\delta < 0\\), then we can prune \\(\alpha\\) because it had been dominated.

if each value on the top of the set
