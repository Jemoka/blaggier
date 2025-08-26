+++
title = "model-free reinforcement learning"
author = ["Houjun Liu"]
draft = false
+++

In [model-based reinforcement learning]({{< relref "KBhmodel_based_reinforcement_learning.md" >}}), we tried real hard to get \\(T\\) and \\(R\\). What if we just estimated \\(Q(s,a)\\) directly? [model-free reinforcement learning]({{< relref "KBhmodel_free_reinforcement_learning.md" >}}) tends to be quite slow, compared to [model-based reinforcement learning]({{< relref "KBhmodel_based_reinforcement_learning.md" >}}) methods.


## review: estimating mean of a [random variable]({{< relref "KBhrandom_variables.md" >}}) {#review-estimating-mean-of-a-random-variable--kbhrandom-variables-dot-md}

we got \\(m\\) points \\(x^{(1 \dots m)} \in X\\) , what is the mean of \\(X\\)?

\begin{equation}
\hat{x\_{m}} = \frac{1}{m} \sum\_{i=1}^{m} x^{(i)}
\end{equation}

\begin{equation}
\hat{x}\_{m} = \hat{x}\_{m-1} + \frac{1}{m} (x^{(m)} - \hat{x}\_{m-1})
\end{equation}

every time you get a new measurement \\(x^{(m)}\\). sometimes we don't scale it by \\(\frac{1}{m}\\), you can scale it with constant \\(\alpha\\) which actually causes exponential decay of past samples (as it keeps getting scaled by \\(\alpha\\)).

\begin{equation}
\hat{x} = \hat{x} + \alpha (x- \hat{x})
\end{equation}


## Q-Learning {#q-learning}

Let us review the [action-value function]({{< relref "KBhaction_value_function.md" >}}):

\begin{equation}
Q(s,a) = R(s,a) + \gamma \sum\_{s'}^{} T(s'|s,a) U(s')
\end{equation}

this is a model-free method, substituting in the definition of the [value function]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}):

\begin{equation}
Q(s,a) = R(s,a) + \gamma \sum\_{s'}^{} T(s'|s,a) \max\_{a} Q(s', a')
\end{equation}

Note! The second half is know in the shape of an [expectation]({{< relref "KBhexpectation.md" >}}) ("[probability]({{< relref "KBhprobability.md" >}}) times the value"). Recall also that \\(R(s,a)\\) is the expected reward \\(r\\) when taking \\(s,a\\).

Let:

\begin{equation}
r = \mathbb{E}[R(s,a)]
\end{equation}

So we can say that:

\begin{equation}
Q(s,a) = \mathbb{E} \qty[r + \gamma \max\_{a'} Q(s', a')]
\end{equation}

Finally, then, we can perform [random variable]({{< relref "KBhrandom_variables.md" >}}) mean estimation scheme given above; recall:

\begin{equation}
\hat{x} = \hat{x} + \alpha (x- \hat{x})
\end{equation}

hence, we update our new mean with:

\begin{equation}
Q(s,a) \leftarrow Q(s,a)  + \alpha \qty [(r + \gamma \max\_{a'} Q(s', a')) - Q(s,a)]
\end{equation}


## SARSA {#sarsa}

[SARSA](#sarsa) is [Q-Learning](#q-learning) where you hope the model converges. You HAVE to perform some [Exploration and Exploitation]({{< relref "KBhexploration_and_exploitation.md" >}}) to try out other actions, and then you just update your function accordingly:

\begin{equation}
Q(s,a) \leftarrow Q(s,a)  + \alpha \qty [(r + \gamma  Q(s', a')) - Q(s,a)]
\end{equation}

this works in theory because over time, good [Exploration and Exploitation]({{< relref "KBhexploration_and_exploitation.md" >}}) assumes that:

\begin{equation}
a' \rightarrow \arg\max\_{a'} Q(s',a')
\end{equation}


## Eligibility Traces {#eligibility-traces}

[Eligibility Traces](#eligibility-traces) is a change to [SARSA](#sarsa) which uses the number of visits as an additional constraint that allows updates to propagate each reward backwards given the list of states which caused that reward to be distributed.

Meaning, let \\(\lambda\\) be some decay parameter, we have:

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

See also [Sarsa (Lambda)]({{< relref "KBhsarsa_lambda.md" >}}).


## Generalized [Q-Learning](#q-learning) with Gradient [action-value]({{< relref "KBhaction_value_function.md" >}}) {#generalized-q-learning--orgfb02fd1--with-gradient-action-value--kbhaction-value-function-dot-md}

Consider [Value Function Approximation]({{< relref "KBhapproximate_value_function.md" >}}). We were trying to fit a set of \\(\theta\\) at that time to find \\(U\_{\theta}\\) that matches \\(U^{\*}\\).

We now want to compute some \\(Q\_{\theta}\\) in the same flavour:

\begin{equation}
Q\_{\theta}(s,a) \sim Q^{\*}(s,a)
\end{equation}

We can measure the difference between these two values like so:

\begin{equation}
\ell(\theta) = \frac{1}{2}\mathbb{E}\_{(s,a)\sim \pi^{\*}}\qty[(Q^{\*}(s,a) - Q\_{\theta}(s,a))^{2}]
\end{equation}

We want to write this expected value distributed over \\(s,a\\) of the **optimal** policy because we want to calculate more samples over those states that the optimal policy ends up at most.

To optimize \\(Q\_{\theta}\\), then, you betcha know what's happenin:

\begin{align}
\nabla \ell &= \nabla \frac{1}{2} \nabla \mathbb{E}\_{(s,a) \sim \pi^{\*}} \qty[(Q^{\*}(s,a)-Q\_{\theta}(s,a))^{2}]  \\\\
&= \mathbb{E}\_{(s,a) \sim \pi^{\*}} \qty[(Q^{\*}(s,a)-Q\_{\theta}(s,a)) (-1)\nabla Q\_{\theta}(s,a)]   \\\\
&= -\mathbb{E}\_{(s,a) \sim \pi^{\*}} \qty[(Q^{\*}(s,a)-Q\_{\theta}(s,a)) \nabla Q\_{\theta}(s,a)]
\end{align}

by a healthy dose of the chain rule.

Now, to minimize this loss, we go in the direction opposite the gradient. The negatives then cancel out to give us:

\begin{equation}
\theta \leftarrow \theta + \alpha \qty[\mathbb{E}\_{(s,a) \sim \pi^{\*}} \qty[(Q^{\*}(s,a)-Q\_{\theta}(s,a)) \nabla Q\_{\theta}(s,a)] ]
\end{equation}

where \\(\alpha \in (0,1)\\).

Similar to the [SARSA](#sarsa) assumption, good [Exploration and Exploitation]({{< relref "KBhexploration_and_exploitation.md" >}}) assumes that:

\begin{equation}
Q \to Q^{\*}
\end{equation}

so we can drop our expectation with:

\begin{equation}
\theta \leftarrow \theta + \alpha \qty[(Q^{\*}(s,a)-Q\_{\theta}(s,a)) \nabla Q\_{\theta}(s,a)]
\end{equation}

Now, we can make one more assumption, the assumption from [Q-Learning](#q-learning):

\begin{equation}
Q^{\*}(s,a) \approx r\_{s} + \gamma \max\_{a'} Q\_{\theta}(s',a')
\end{equation}

that taking the best actions with the \\(Q\\) you have will slowly approximate optimal \\(Q\\).

\begin{equation}
\theta \leftarrow \theta + \alpha \qty[\qty((r\_{s} + \gamma \max\_{a'} Q\_{\theta}(s',a'))-Q\_{\theta}(s,a)) \nabla Q\_{\theta}(s,a)]
\end{equation}

you will note! this is actually just [Q-Learning](#q-learning) multiplying with a gradient.


## [Policy Gradient]({{< relref "KBhpolicy_gradient.md" >}}) {#policy-gradient--kbhpolicy-gradient-dot-md}

see also [Policy Gradient]({{< relref "KBhpolicy_gradient.md" >}})
