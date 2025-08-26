+++
title = "belief-state MDP"
author = ["Houjun Liu"]
draft = false
+++

Our [belief]({{< relref "KBhbelief.md" >}}) can be represented as [vector]({{< relref "KBhvector.md" >}})s as the probability of us being in each state. If we have that, we can just use our [belief]({{< relref "KBhbelief.md" >}}) vector as our state vector. Now use [MDP]({{< relref "KBhmarkov_decision_process.md" >}}) any solving you'd like, keeping in mind that the reward is just the expected reward:

\begin{equation}
\mathbb{E}[R(b,a)] = \sum\_{s} R(s,a) b(s)
\end{equation}

we can estimate our transition between belief-states like so:

\begin{align}
T(b'|b,a) &= P(b'|b,a)  \\\\
&= \sum\_{o}^{} P(b'|b,a,o) P(o|b,a) \\\\
&= \sum\_{o}^{} P(b' = Update(b,a,o)) \sum\_{s'}^{}O(o|a,s') \sum\_{s}^{}T(s'|s,a)b(s)
\end{align}

"the probability of the next belief being \\(b'\\) is equal to how probable it is to get state b' from conditions b,a,o, times the probability of getting that particular observation.".

However, this expression is quite unwheldy if your state-space is large. Hence, we turn to a technique like [conditional plan]({{< relref "KBhconditional_plan.md" >}})s which foregos considering individual states altogether.
