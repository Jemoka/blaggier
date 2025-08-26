+++
title = "advantage function"
author = ["Houjun Liu"]
draft = false
+++

an [advantage function]({{< relref "KBhadvantage_function.md" >}}) is a method for scoring a [policy]({{< relref "KBhpolicy.md" >}}) based on how much additional value it provides compared to the [greedy policy]({{< relref "KBhpolicy_evaluation.md#value-function-policy" >}}):

\begin{align}
A(s,a) &= Q(s,a) - U(s)  \\\\
&= Q(s,a) - \max\_{a}Q(s,a)
\end{align}

that is, how much does your policy's [action-value function]({{< relref "KBhpolicy_evaluation.md#action-value-function" >}}) differ from that of choosing the action that maximizes the [utility]({{< relref "KBhutility_theory.md" >}}).

For a [greedy policy]({{< relref "KBhpolicy_evaluation.md#value-function-policy" >}}) that just optimizes this exact metric, \\(A =0\\).
