+++
title = "POMDP-lite"
author = ["Houjun Liu"]
draft = false
+++

What if our initial state never change or is deterministically changing? For instance, say, for localization. This should make solving a POMDP easier.


## POMDP-lite {#pomdp-lite}

-   \\(X\\) fully observable states
-   \\(\theta\\) hidden parameter: finite amount of values \\(\theta\_{1 \dots N}\\)
-   where \\(S = X \times \theta\\)

we then assume conditional independence between \\(x\\) and \\(\theta\\). So: \\(T = P(x'|\theta, x, a)\\), where \\(P(\theta'|\theta,x,a) = 1\\) ("our hidden parameter is known or deterministically changing")


## Solving {#solving}

****Main Idea****: if that's the case, then we can split our models into a set of [MDP]({{< relref "KBhmarkov_decision_process.md" >}})s. Because \\(\theta\_{j}\\) change deterministically, we can have a MDP solved **ONLINE** over \\(X\\) and \\(T\\) for each possible initial \\(\theta\\). Then, you just take the believe over \\(\theta\\) and sample over the MDPs based on that belief.


### Reward bonus {#reward-bonus}

To help coordination, we introduce a reward bonus

1.  exploration reward bonus, which encourages exploration (this helps coordinate)
2.  maintain a value \\(\xi(b,x,a)\\) which is the number of times b,x,a is visited---if it exceeds a number of times, clip reward bonus

Whereby:

\begin{equation}
RB(b,s,a) = \beta \sum\_{s'}^{} P(s'|b,s,a)  || b\_{s} - b ||\_{1}
\end{equation}

which encourages information gain by encouraging exploring states with more \\(L\_{1}\\) divergence in belief compared to our current belief.

Then, we can formulate an augmented reward function \\(\tilde{R}(b,s,a) = R(s,a) + RB(b,s,a)\\).


### Solution {#solution}

Finally, at each timestamp, we look at our observation and assume it does not change. This gives an [MDP]({{< relref "KBhmarkov_decision_process.md" >}}):

\begin{equation}
\tilde{V}^{\*} (b,s) = \max\_{a} \left\\{ \tilde{R}(b,s,a) + \gamma \sum\_{s'}^{} P(s'|b,s,a) \tilde{V}^{\*} (b,s')\right\\}
\end{equation}

which we solve however we'd like. Authors used [UCT](#uct).


### UCT {#uct}

{{< figure src="/ox-hugo/2024-02-06_09-54-45_screenshot.png" >}}
