+++
title = "Approximate Value Function"
author = ["Houjun Liu"]
draft = false
+++

How do we deal with [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) solution with [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) state space?

---

Let there be a [value function]({{< relref "KBhaction_value_function.md" >}}) [parameter]({{< relref "KBhparameter.md" >}})ized on \\(\theta\\):

\begin{equation}
U\_{\theta}(s)
\end{equation}

Let us find the [value-function policy]({{< relref "KBhaction_value_function.md#value-function-policy" >}}) of this utility:

\begin{equation}
\pi(s) = \arg\max\_{a} \qty(R(s,a) + \gamma \sum\_{s'}^{} T(s'|s,a) U\_{\theta}(s'))
\end{equation}

We now create a finite sampling of our state space, which maybe infinitely large (for instance, [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}})):

\begin{equation}
S \in \mathcal{S}
\end{equation}

where, \\(S\\) is a set of discrete states \\(\\{s\_1, \dots, s\_{m}\\}\\).

Now, what next?


## generally: {#generally}

Loop until convergence:

-   Initialize \\(u\_{\theta}\\)
-   For all \\(s\_{i} \in S\\), let \\(u\_{i} = \max\_{a} R(s,a) + \gamma \sum\_{s'}^{}T(s'|s,a) u\_{\theta}(s')\\), the [utility]({{< relref "KBhutility_theory.md" >}}) at those discrete state samples \\(s\_{i}\\)
-   Then, fit a \\(\theta\\) so that \\(U\_{\theta}(s\_{i})\\) is close to \\(u\_{i}\\)

**to get \\(T\\)**: get a finite sampling of next states, or fit a function to it.

BUT: **Convergence is not guaranteed.**

There are two main specific approaches to achieve this:


## global approximation {#global-approximation}

-   linreg a best-fit line of state value vs. [utility]({{< relref "KBhutility_theory.md" >}}) value
    -   polynomial fit a best-fit line, whereby \\(U\_{\theta}(s) = \theta^{T}\beta(s)\\), where each \\(\beta\_{j}(s)=s^{j-1}\\).
-   a frigin neural network (train a model with parameters \\(\theta\\) which produces the utility calculations for you \\(M\_{\theta}(s) = U\_{\theta}(s)\\))


## local approximation {#local-approximation}

-   make a sampling in your [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) state space to discretized it
-   do any [utility function]({{< relref "KBhutility_function.md" >}}) thing you'd like ([policy evaluation]({{< relref "KBhpolicy_evaluation.md" >}}) or [value iteration]({{< relref "KBhvalue_iteration.md" >}})) to get some set of \\(\theta\_{i}\\), which is the utility for being in each sampled discrete state \\(s\_{i}\\)
-   whenever you need to calculate \\(U(s)\\) of a particular state...
    -   linearly interpolate
    -   k nearest neighbor
    -   [kernel smoothing]({{< relref "KBhkernel_smoothing.md" >}})
