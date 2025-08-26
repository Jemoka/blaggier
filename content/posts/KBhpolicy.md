+++
title = "policy"
author = ["Houjun Liu"]
draft = false
+++

## constituents {#constituents}

the history: last states and actions \\(h\_{t} = (s\_{1:t}, a\_{1:t-1})\\)


## requirements {#requirements}

typically:

\begin{equation}
a\_{t} = \pi\_{t}(h\_{t})
\end{equation}

for a [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}), our past states are [d-seperated]({{< relref "KBhbaysian_network.md#checking-for-conditional-independence" >}}) from our [current]({{< relref "KBhcurrent.md" >}}) action given knowing the state, so really we have \\(\pi\_{t}(s\_{t})\\)

Some [policies]({{< relref "KBhpolicy.md" >}}) can be stochastic:

\begin{equation}
P(a\_{t}) = \pi\_{t}(a\_{t} | h\_{t})
\end{equation}

instead of telling you something to do at a specific point, it tells you what the probability it chooses of doing \\(a\_{t}\\) is given the history.


## additional information {#additional-information}


### stationary [policy]({{< relref "KBhpolicy.md" >}}) {#stationary-policy--kbhpolicy-dot-md}

For [infinite-horizon models]({{< relref "KBhmarkov_decision_process.md#infinite-horizon-models" >}}), our [policy]({{< relref "KBhpolicy.md" >}}) can not care about how many time stamps are left (i.e. we are not optimizing within some box with constrained time) and therefore we don't really care about historical actions. So we have:

\begin{equation}
\pi(s)
\end{equation}

this can be used in [infinite-horizon models]({{< relref "KBhmarkov_decision_process.md#infinite-horizon-models" >}}) against [stationary Markov Decision Process]({{< relref "KBhmarkov_decision_process.md#stationary-id-5bb5350e-04e4-46dc-9ea8-cb7bb09edd42-markov-decision-process" >}}).


### optimal policy {#optimal-policy}

\begin{equation}
\pi^{\*}(s) = \arg\max\_{\pi} U^{\pi}(s)
\end{equation}

"the most [optimal policy](#optimal-policy) is the [policy]({{< relref "KBhpolicy.md" >}}) that maximizes the [expected utility]({{< relref "KBhutility_theory.md#expected-utility" >}}) of following \\(\pi\\) when starting from \\(s\\)"

We call the [utility]({{< relref "KBhutility_theory.md" >}}) from the best policy the "[optimal value function](#optimal-policy)"

\begin{equation}
U^{\*} = U^{\pi^{\*}}
\end{equation}


### policy utility, and value {#policy-utility-and-value}

-   creating a good [utility function]({{< relref "KBhutility_function.md" >}}): either [policy evaluation]({{< relref "KBhpolicy_evaluation.md" >}}) or [value iteration]({{< relref "KBhvalue_iteration.md" >}})
-   creating a [policy]({{< relref "KBhpolicy.md" >}}) from a [utility function]({{< relref "KBhutility_function.md" >}}): [value-function policy]({{< relref "KBhaction_value_function.md#value-function-policy" >}}) ("choose the policy that takes the best valued action")
-   calculating the [utility function]({{< relref "KBhutility_theory.md" >}}) a [policy]({{< relref "KBhpolicy.md" >}}) currently uses: use [policy evaluation]({{< relref "KBhpolicy_evaluation.md" >}})

See [policy evaluation]({{< relref "KBhpolicy_evaluation.md" >}})
