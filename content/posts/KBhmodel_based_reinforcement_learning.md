+++
title = "model-based reinforcement learning"
author = ["Houjun Liu"]
draft = false
+++

## Step 1: Getting Model {#step-1-getting-model}

We want a model

-   \\(T\\): transition probability
-   \\(R\\): rewards


### [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) Method {#maximum-likelihood-parameter-learning--kbhmaximum-likelihood-parameter-learning-dot-md--method}

\begin{equation}
N(s,a,s')
\end{equation}

which is the count of transitions from \\(s,a\\) to \\(s'\\) and increment it as \\(s, a, s'\\) gets observed. This makes, with [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}):

\begin{equation}
T(s' | s,a) = \frac{N(s,a,s')}{\sum\_{s''}^{} N(s,a,s'')}
\end{equation}

We also keep a table:

\begin{equation}
p(s,a)
\end{equation}

the sum of rewards when taking \\(s,a\\). To calculate a reward, we take the average:

\begin{equation}
R(s,a) \approx \frac{p(s,a)}{\sum\_{s''}^{}N(s,a,s'')}
\end{equation}


### [Baysian Parameter Learning]({{< relref "KBhbaysian_parameter_learning.md" >}}) Method {#baysian-parameter-learning--kbhbaysian-parameter-learning-dot-md--method}

We build a [Dirichlet Distribution]({{< relref "KBhbaysian_parameter_learning.md#dirichlet-distribution" >}}); let:

\begin{equation}
\vec{\theta}\_{(s,a)} = \mqty[T(s\_1 | s,a) \\\ \dots\\\ T(s\_{n} | s,a)]
\end{equation}

We then calculate a distribution:

\begin{equation}
Dir(\vec{\theta}\_{s,a} | \vec{N}\_{s,a})
\end{equation}

which will give you a probability over a set of transitions.

Then, when we need a transition \\(T\\), we perform [Posterior Sampling]({{< relref "KBhdirected_exploration.md#posterior-sampling" >}}) on this [Dirichlet Distribution]({{< relref "KBhbaysian_parameter_learning.md#dirichlet-distribution" >}}) at every episode (or so, otherwise the model shifts a lot) and then optimize on that.

Getting rewards is an advanced topic. So let's just use [Maximum Likelihood Parameter Learning]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) or assume its given


## Step 2: Getting Value Function. {#step-2-getting-value-function-dot}


### full update {#full-update}

One direct strategy to work on this, then, is to use whatever transition and rewards you observed to perform [value iteration]({{< relref "KBhvalue_iteration.md" >}}) or [policy iteration]({{< relref "KBhpolicy_iteration.md" >}}). First go through one or a bunch of observations, then take a full [value iteration]({{< relref "KBhvalue_iteration.md" >}}) or [policy iteration]({{< relref "KBhpolicy_iteration.md" >}}) sweep, and then go back and take more measurements.


### randomized update {#randomized-update}

We randomly update a single state:

\begin{equation}
U(s) \leftarrow \max\_{a} \qty[R(s,a) + \gamma \sum\_{s'}^{} T(s' | s,a) U(s')]
\end{equation}

and take another observation, update our model estimate, and move on.


### prioritized updates {#prioritized-updates}

Say we are current updating a state \\(s\\), and there are two previous states that could transition into \\(s\\). First we create an estimate like before:

\begin{equation}
U(s) \leftarrow \max\_{a} \qty[R(s,a) + \gamma \sum\_{s'}^{} T(s' | s,a) U(s')]
\end{equation}

We create a queue whose contents are ranked by:

\begin{equation}
T(s|s^{-}, a^{-}) \times |U(s)-u(s)|
\end{equation}

where \\(u(s)\\) is \\(U(s)\\) prior to the update.

We move on to the next state to update by popping off the queue.


## Step 3: Explore a Little {#step-3-explore-a-little}

-   [epsilon-greedy exploration with decay]({{< relref "KBhundirected_exploration.md#epsilon-greedy-exploration-with-decay" >}})
-   [Softmax Method]({{< relref "KBhdirected_exploration.md#softmax-method" >}})


### R-Max {#r-max}

Most strategies above focuses on choosing a random action. This exploration focuses on adapting reward/transitions to explicitly explore new-state.

\begin{equation}
R(s,a) = \begin{cases}
r\_{\max}, if N(s,a) < m,\\\\
\rho\frac{s,a}{N(s,a)}, otherwise
\end{cases}
\end{equation}

you get a large reward \\(r\_{\max }\\) if you haven't been to \\((s,a)\\), otherwise the reward you get gets discounted by the number of times you visited.

\begin{equation}
T(s'|s,a) = \begin{cases}
1, if N(s,a) < m\ and\ s' = s \\\\
0, if N(s,a) < m\ and\ s' \neq s \\\\
\frac{N(s,a,s')}{N(s,a)}, otherwise
\end{cases}
\end{equation}
