+++
title = "conditional plan"
author = ["Houjun Liu"]
draft = false
+++

[conditional plan]({{< relref "KBhconditional_plan.md" >}}) is a [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) representation technique. We can represent a [conditional plan]({{< relref "KBhconditional_plan.md" >}}) as a tree.


## toy problem {#toy-problem}

crying baby [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) problem:

-   **actions**: feed, ignore
-   **reward**: if hungry, negative reward
-   **state**: two states: is the baby hungry or not
-   **observation**: noisy crying (she maybe crying because she's genuinely hungry or crying just for kicks)


## formulate a [conditional plan]({{< relref "KBhconditional_plan.md" >}}) {#formulate-a-conditional-plan--kbhconditional-plan-dot-md}

we can create a [conditional plan]({{< relref "KBhconditional_plan.md" >}}) by generating a exponential tree based on the **observations**. This is a [policy]({{< relref "KBhpolicy.md" >}}) which tells you what you should do given the sequence of observations you get, with no knowledge of the underlying state.

{{< figure src="/ox-hugo/2023-11-14_10-04-21_screenshot.png" >}}

We call this plan \\(\pi\\) (shock suprise). We define two notations:

-   \\(\pi()\\): the ****ACTION**** at the head of this tree (in this case, "ignore")
-   \\(\pi(o)\\): the ****SUBTREE**** which is one-level below the first action. For instance, for both observations of the tree above, \\(\pi(o)()\\) is ignore for both \\(o\\).


## [conditional plan]({{< relref "KBhconditional_plan.md" >}}) evaluation {#conditional-plan--kbhconditional-plan-dot-md--evaluation}

Assume we have a starting at some given true state \\(s\\). We can evaluate a [conditional plan]({{< relref "KBhconditional_plan.md" >}}) at that state by formulating:

\begin{equation}
U^{\pi} (s) = R(s, \pi()) + \gamma \qty[\sum\_{s'} T(s'|s, \pi()) \sum\_{o} O(o|\pi(), s') U^{\pi(o)}(s')]
\end{equation}

where, \\(\pi()\\) is the action at the root node of the tree; and \\(\pi(o)\\) is the subtree for subplan at observation \\(o\\); essentially, at each point where we evaluate \\(U\\), we move the root node forward and recalculate. If we run out of depth, the utility is \\(0\\) and hence the whole right term is \\(0\\).

Of course this assumes we know what our initial state is. Which is lame. So now:

\begin{equation}
U^{\pi}(b) = \sum\_{s}^{} b(s) U^{\pi}(s)
\end{equation}

which will give us the [utility]({{< relref "KBhutility_theory.md" >}}) of our policy given a [belief]({{< relref "KBhbelief.md" >}}) about wher ewe are.

so literally take our belief about the probability of us being in each initial state and calculate it for each of our initial states.


## [optimal value function]({{< relref "KBhpolicy.md#optimal-policy" >}}) for [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) {#optimal-value-function--kbhpolicy-dot-md--for-pomdp--kbhpartially-observable-markov-decision-process-dot-md}

\begin{equation}
U^{\*}(b) = \max\_{\pi} U^{\pi}(b)
\end{equation}

Of course, trying to actually do this is impossible because you have to iterate over all possible policies and then calculate every utility from them.

This is practically untenable, because the space of \\(\pi\\) is wayyy too big. Hence, we turn to [alpha vector]({{< relref "KBhalpha_vector.md" >}})s.

See also [optimal value function for POMDP with alpha vector]({{< relref "KBhalpha_vector.md#id-a2dee193-65b1-47ed-8dbc-aa362b28b451-optimal-value-function-for-pomdp-with-id-a11af4cf-7e36-4b3f-876f-e6a26cf6817e-alpha-vector" >}})
