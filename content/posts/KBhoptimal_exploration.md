+++
title = "Optimal Exploration Policy"
author = ["Houjun Liu"]
draft = false
+++

Suppose we have offline statistic regarding wins and losses of each slot machine as our state:

\begin{equation}
w\_1, l\_{1}, \dots, w\_{n},  l\_{n}
\end{equation}

What if we want to create a [policy]({{< relref "KBhpolicy.md" >}}) that maximises exploration?

We construct a [value function]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}):

\begin{equation}
U^{\*}([w\_1, l\_{1}, \dots, w\_{n},  l\_{n}]) = \max\_{a} Q^{\*}([w\_1, l\_{1}, \dots, w\_{n}, l\_{n}], a)
\end{equation}

our policy is the [greedy policy]({{< relref "KBhaction_value_function.md#value-function-policy" >}}):

\begin{equation}
U^{\*}([w\_1, l\_{1}, \dots, w\_{n},  l\_{n}]) = \arg\max\_{a} Q^{\*}([w\_1, l\_{1}, \dots, w\_{n}, l\_{n}], a)
\end{equation}

---

Now, how do we go about calculating the [action-value]({{< relref "KBhaction_value_function.md" >}}):

\begin{align}
Q ([w\_1, l\_{1}, \dots, w\_{n}, l\_{n}], a) =\ & \frac{w\_{a}+1}{w\_{a}+l\_{a}+2} (R(w) + U^{\*}(\dots, w\_{a}+1, l\_{a}, \dots)) \\\&+ \qty(1-\frac{w\_{a}+1}{w\_{a}+l\_{a}+2})(R(l) + U^{\*}(\dots, w\_{a}, l\_{a}+1, \dots))
\end{align}

"the probability of you win" (expectation of [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}})), times the instantaneous reward you win + the utility you gain in terms of information of you doing that.

To solve this in a finite horizon, note that at time \\(t=k\\), your \\(U^{\*}\\) is \\(0\\) because you have nothing to do anymore.

Then, you can back up slowly to get each previous state:

-   calculate \\(Q[w\_1-1, l\_1, ..., 1]\\)
-   calculate \\(Q[w\_1, l\_1-1, ...,1]\\)

and so on, and choosing the utility of each state from there.
