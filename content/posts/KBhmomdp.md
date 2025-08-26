+++
title = "MOMDP"
author = ["Houjun Liu"]
draft = false
+++

[MOMDP]({{< relref "KBhmomdp.md" >}}) are [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s where some parts of the state are fully observable.

---


## Motivation {#motivation}

scaling up [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})s is ****really hard****: exponential [curse of dimensionality]({{< relref "KBhcurse_of_dimensionality.md" >}}). Even discretization will cause the number of beliefs to really blow up.

**Some of the state isn't uncertain, some others are bounded uncertainty: this REDUCES scale a lot.**


## Solving {#solving}

Solving the algorithm uses [SARSOP]({{< relref "KBhsarsop.md" >}}), or any point-based system. Instead of sampling the full belief state, however, we sample from a tuple \\((x, b\_{y})\\), whereby \\(x\\) is the observable part and \\(b\_{y}\\) is the unobservable part.


## How Exactly Tuple? {#how-exactly-tuple}


### True Mixed Observability {#true-mixed-observability}

Go about splitting about your space based on the true observability part. Say there are \\(10\\) states which are observable, you literally just initialize 10 sets of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s to create \\(V\_{1} ... V\_{10}\\) for your observable states, where each one you have:

\begin{equation}
V\_{x\_{i}}(b\_{j}) = \dots
\end{equation}

whereby all of your objectives and backup, etc., takes \\(x\\) your observable state as input. Then, during inference/backup looking at where you are in the observable part and use the value function from that part.


### Pseudo-Full Observability {#pseudo-full-observability}

Train a fully observable model, and then use [belief]({{< relref "KBhbelief.md" >}})-weighted average during inference. This is where [QMDP]({{< relref "KBhqmdp.md" >}}) came from.


### Bounded Uncertainty {#bounded-uncertainty}

Most of the time neither of the top two cases apply cleanly. Instead, most frequently your uncertainty in your observation is _bounded_ by a significant degree.


#### Condition {#condition}

For instance, your GPS maybe uncertain, but if it says you are in Kansas you are not in Shanghai. Formally, for \\(h: O \to S\\) (the hypothetical "preimage" of any observation), we expect that:

\begin{equation}
\frac{h(o)}{S} = c
\end{equation}

gives \\(c \ll 1\\).


#### Solution {#solution}

If we know we have [Bounded Uncertainty](#bounded-uncertainty), we can reparameterize our [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) to an [MDP]({{< relref "KBhmarkov_decision_process.md" >}}) over observations (we call this \\(X\\)) plus a [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) modeling [uncertainty]({{< relref "KBhuncertainty.md" >}}) in offsets from those observations (we call this \\(Y\\)).

Whereby:

\begin{equation}
\begin{cases}
T\_{x}(x'|x,y,a) = \sum\_{s' \in S} T(s' | (x,y),a) O(x'|s',a) \\\\
T\_{y}(y'|x,x',y,a) = \frac{T((x',y') | (x,y),a) O((x',y')|s',a)}{T\_{x}(x'|x,y,a)}
\end{cases}
\end{equation}

where our state space is now split into \\(s \in S = X \times Y\\) s.t. \\(s=(x,y)\\).
