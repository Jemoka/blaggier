+++
title = "Online POMDP Methods"
author = ["Houjun Liu"]
draft = false
+++

These are basically [MDP]({{< relref "KBhmarkov_decision_process.md" >}}) methods but tweaked. We make some changes:

1.  for everywhere that we need a state, we use a [belief]({{< relref "KBhbelief.md" >}})
2.  to sample the next state given an action (random next step), we call our generative model to get a new observation, and call `update(b,a,o)` with our [filter]({{< relref "KBhfilters.md" >}}) to propegate our [belief]({{< relref "KBhbelief.md" >}}) forward
3.  if we need an [action-value]({{< relref "KBhaction_value_function.md" >}}), we use the [one-step lookahead in POMDP]({{< relref "KBhalpha_vector.md#one-step-lookahead-in-pomdp" >}}):

\begin{equation}
Q(b,a) = R(b,a)+\gamma \qty(\sum\_{o}^{}P(o|b,a) U^{\Gamma}(update(b,a,o)))
\end{equation}

where,

\begin{equation}
R(b,a) = \sum\_{s}^{} R(s,a)b(s)
\end{equation}

\begin{align}
P(o|b,a) &= \sum\_{s}^{} p(o|s,a) b(s)  \\\\
&= \sum\_{s}^{} \sum\_{s'}^{} T(s'|s,a) O(o|s',a) b(s)
\end{align}

and where, if needed (i.e. most algorithms estimate this):

\begin{equation}
U^{\Gamma}(b) = \max\_{\alpha \in \Gamma} \alpha^{\top}  b
\end{equation}

we also revise our [generative model]({{< relref "KBhonline_planning.md#generative-model" >}}):

each step requires belief and action, and we sample from our belief a next state, propegate [belief]({{< relref "KBhbelief.md" >}}) forward, and use a traditional [generative model]({{< relref "KBhonline_planning.md#generative-model" >}}) to get the rewards and next states (which we don't use).

-   [Receeding Horizon]({{< relref "KBhreceeding_horizon.md" >}}): plan to a depth \\(d\\), select action, replan
-   [Rollout with Lookahead]({{< relref "KBhrollout_with_lookahead.md" >}}): simple to implement, no grantees of optimality or even boundedness
-   [Forward Search]({{< relref "KBhforward_search.md" >}}): quite expensive---exponential given the size of horizon
-   [monte-carlo tree search]({{< relref "KBhmonte_carlo_tree_search.md" >}}), but instead our counts are stored not in terms of states (which we don't know), but sequences of action observations: \\(h = a\_1o\_2a\_2o\_1a\_2o\_1\\) etc. Then, the counter takes \\(N(h,a)\\) as input: will head towards optimality and it requires a [generative model]({{< relref "KBhonline_planning.md#generative-model" >}}) to sample tracks
-   [Branch and Bound]({{< relref "KBhbranch_and_bound.md" >}}), but you use the [POMDP Approximation]({{< relref "KBhpomdp_approximation.md" >}}) methods to estimate the upper and lower bounds of your utility: its [Forward Search]({{< relref "KBhforward_search.md" >}}) with pruning
-   [Sparse Sampling]({{< relref "KBhsparse_sampling.md" >}}): its [Forward Search]({{< relref "KBhforward_search.md" >}}), but the next [action-value]({{< relref "KBhaction_value_function.md" >}}) is determined by a finite sampling of next observations and rewards and you average their future utility. that is, the action-value before depth \\(d\\) is obtained by: \\(Q(b,a) = \frac{1}{m} \sum\_{i=1}^{m} \qty(r\_{a}^{(i)}+\gammaU\_{d-1}(Update(b,a,o\_{a}^{(i)})))\\)
