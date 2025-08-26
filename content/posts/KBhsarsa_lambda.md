+++
title = "Sarsa (Lambda)"
author = ["Houjun Liu"]
draft = false
+++

[Sarsa (Lambda)]({{< relref "KBhsarsa_lambda.md" >}}) is [SARSA]({{< relref "KBhmodel_free_reinforcement_learning.md#sarsa" >}}) with [Eligibility Traces]({{< relref "KBhmodel_free_reinforcement_learning.md#eligibility-traces" >}}) (\\(\lambda\\)).

Previous approaches to deal with [Partially Observable Markov Decision Process]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}):

-   memory-based state estimation ([belief]({{< relref "KBhbelief.md" >}})s)
-   special planning methods

Key question: **Can we use MDP [reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}) to deal with [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s?**


## Background {#background}

Recall MDP [SARSA]({{< relref "KBhmodel_free_reinforcement_learning.md#sarsa" >}}):

\begin{equation}
Q(s,a) \leftarrow Q(s,a)  + \alpha \qty [(r + \gamma  Q(s', a')) - Q(s,a)]
\end{equation}

Recall that, sparse rewards with [SARSA]({{< relref "KBhmodel_free_reinforcement_learning.md#sarsa" >}}) can take a long time to learn because it takes time to backpropgate.

Hence, we use [Eligibility Traces]({{< relref "KBhmodel_free_reinforcement_learning.md#eligibility-traces" >}}), which keeps track of what's "eligible" for updates:

let \\(\lambda\\) be some decay parameter, we have:

\begin{equation}
\delta = r + \gamma Q(s',a') - Q(s,a)
\end{equation}

and, we can write:

\begin{equation}
Q(s,a) \leftarrow Q(s,a) + \lambda \delta N(s,a)
\end{equation}

where by the visit counts are discounted such that:

\begin{equation}
N(s,a) \leftarrow \gamma \lambda N(s,a)
\end{equation}


## Worry {#worry}

Inability of fully observing the state seems to invalidate the point of \\(Q\\) learning, [SARSA]({{< relref "KBhmodel_free_reinforcement_learning.md#sarsa" >}}), etc.


## Applying [Eligibility Traces]({{< relref "KBhmodel_free_reinforcement_learning.md#eligibility-traces" >}}) to [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s {#applying-eligibility-traces--kbhmodel-free-reinforcement-learning-dot-md--to-pomdp--kbhpartially-observable-markov-decision-process-dot-md--s}

Instead of \\(N(s,a)\\) a visitation count, we initialize some \\(\eta(x,a)\\) for observation + action and work on the rest of it in the same way.

At each step, we sample some reward \\(r\_{t+1}\\) and observation \\(x\_{t+1}\\) (and remember our current \\(r\_{t}, x\_{t}\\)). Then in which case:

\begin{equation}
\eta(x\_{t},a\_{t}) = 1\ \text{(reset decay)}
\end{equation}

and

\begin{equation}
\forall (x\neq x\_{t}, a \neq a\_{t}): \eta(x,a) = \gamma \lambda \eta\_{t-1}(x,a)\ \text{(decay others)} \\\\
\end{equation}

Using the new \\(\eta\\) values, we update \\(Q(x, a)\\) in the usualish manner:

\begin{equation}
\delta\_{t} := r\_{t} + \gamma Q (x\_{t+1}, a\_{t+1}) - Q(x\_{t}, a\_{t})
\end{equation}

\begin{equation}
\forall (x,a): Q(x,a) = Q(x,a)+a \delta\_{t} \eta(x,a)
\end{equation}

all values of \\(\eta\\) are established to \\(0\\) per episode.

Notably, we formulate \\(x\\) as a tuple of ****TWO**** observations in the past---meaning we have a single step of memory in the past and optimise over those.

**This requires no belief propagation**!! And note how the "eligibility" of each observation decays over time, such that the influence of that observation decays until we see the corresponding observation again.


## aliasing {#aliasing}

an important failure of this is [aliasing](#aliasing)--where you maybe in one of two different places that has similar properties observationally, but taking actions at those states results in very different places.
