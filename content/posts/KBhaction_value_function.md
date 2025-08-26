+++
title = "action-value function"
author = ["[[Houjun Liu]]"]
draft = false
+++

Quality of taking a particular value at a function---"expected discounted return when following a [policy]({{< relref "KBhpolicy.md" >}}) from \\(S\\) and taking \\(a\\)":

\begin{equation}
Q(s,a) = R(s,a) + \gamma \sum\_{s'} T(s'|s,a) U(s')
\end{equation}

where, \\(T\\) is the transition probability from \\(s\\) to \\(s'\\) given action \\(a\\).


## [value function]({{< relref "KBhaction_value_function.md" >}}) {#value-function--kbhaction-value-function-dot-md}

Therefore, the [utility]({{< relref "KBhutility_theory.md" >}}) of being in a state (called the [value function]({{< relref "KBhaction_value_function.md" >}})) is:

\begin{equation}
U(s) = \max\_{a}  Q(s,a)
\end{equation}

"the [utility]({{< relref "KBhutility_theory.md" >}}) that gains the best [action-value]({{< relref "KBhaction_value_function.md" >}})"


## value-function policy {#value-function-policy}

A [value-function policy](#value-function-policy) is a [policy]({{< relref "KBhpolicy.md" >}}) that maximizes the [action-value]({{< relref "KBhaction_value_function.md" >}})

\begin{equation}
\pi(s) = \arg\max\_{a} Q(s,a)
\end{equation}

"the [policy]({{< relref "KBhpolicy.md" >}}) that takes the best action to maximize [action-value]({{< relref "KBhaction_value_function.md" >}})"

we call this \\(\pi\\) "[greedy policy](#value-function-policy) with respect to \\(U\\)"


## advantage {#advantage}

see [advantage function]({{< relref "KBhadvantage_function.md" >}})
