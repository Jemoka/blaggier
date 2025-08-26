+++
title = "JSJ"
author = ["Houjun Liu"]
draft = false
+++

[POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s can become computationally quite intractable. Alternative: a stochastic, memoryless policy. A policy should be stochastic in order to satisfy certain conditions during adversarial games (think bluffing).

[JSJ]({{< relref "KBhjsj.md" >}}) is basically [Q-Learning]({{< relref "KBhmodel_free_reinforcement_learning.md#q-learning" >}}) adapted for [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s:

\begin{equation}
\begin{cases}
Q^{\pi}(s,a) = \sum\_{t=1}^{\infty}\mathbb{E}\_{\pi} [r\_{t}- R^{\pi}|s, a] \\\\
Q^{\pi}(o,a) = \mathbb{E}\_{s}[Q^{\pi}(s,a) | M(s) = o]
\end{cases}
\end{equation}

where \\(M\\) is a mapping between states and possible observations.


## Policy Improvement {#policy-improvement}

Now, we want to maximise:

\begin{equation}
\Delta\_{o}(a) = Q(o,a) - V(o)
\end{equation}

"if an action \\(a\\) results in a better value than the expected value, we want to upweight that action."

We further normalise this:

\begin{equation}
\delta\_{o}(a) = \Delta\_{o}(a) - \frac{1}{|A|} \sum\_{a' \in A} \Delta\_{o}(a')
\end{equation}

"how does the diff of my action is considering improve over all other actions (i.e. "maybe all actions have similar diffs").

Now, substitution time:

\begin{equation}
\delta\_{o}(a) = \qty(Q(o,a) - V(o)) - \frac{1}{|A|} \sum\_{(a' \in A)} Q(o,a') - V(o)
\end{equation}

Which, after simplification (the two \\(V\\) cancels out), we actually get:

\begin{equation}
\delta\_{o}(a) = Q(o,a)  - \frac{1}{|A|} \sum\_{(a' \in A)}^{} Q(o,a')
\end{equation}

which makes sense; "how does our current action does better than all others". To obtain \\(Q(o,a)\\), see the big function above.

Finally, having defined our update step, we can now let the good times roll----gradient ascent! For some action \\(a\\) at observation \\(o\\) and learning rate we update our policy:

\begin{equation}
Q^{\pi}(a|o) = Q^{\pi}(a|o) + \varepsilon \delta\_{o}(a)
\end{equation}

We can then use it to take some more actions, compute more deltas, repeat.


## Policy Evaluation {#policy-evaluation}

{{< figure src="/ox-hugo/2024-02-08_09-54-59_screenshot.png" >}}
