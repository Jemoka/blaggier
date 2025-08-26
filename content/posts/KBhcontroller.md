+++
title = "controller"
author = ["Houjun Liu"]
draft = false
+++

a [controller]({{< relref "KBhcontroller.md" >}}) is a that maintains its own state.


## constituents {#constituents}

-   \\(X\\): a set of nodes (hidden, internal states)
-   \\(\Psi(a|x)\\): probability of taking an action
-   \\(\eta(x'|x,a,o)\\) : transition probability between hidden states


## requirements {#requirements}

Controllers are nice because we:

1.  don't have to maintain a belief over time: we need an initial belief, and then we can create beliefs as we'd like without much worry
2.  controllers can be made shorter than [conditional plan]({{< relref "KBhconditional_plan.md" >}})s


## additional information {#additional-information}


### finite state controller {#finite-state-controller}

A [finite state controller](#finite-state-controller) has a finite amount of hidden internal state.

Consider the crying baby problem. We will declare two internal state:

\begin{equation}
x\_1, x\_2
\end{equation}

Given our observations and our internal states, we can declare transitions and an action probability \\(\Psi\\):

{{< figure src="/ox-hugo/2023-11-30_09-07-04_screenshot.png" >}}

We essentially declare a policy vis a vi your observations. It can be a sequence, for instance, if we want to declare a policy whereby if you cry twice then you feed, you can declare:


### finite state controller evaluation {#finite-state-controller-evaluation}

\begin{equation}
U(x, s) = \sum\_{a}^{} \Psi(a|x) \qty[R(s,a) + \gamma \qty(\sum\_{s'}^{} T(s'|s,a) \sum\_{o}^{} O(o|a, s') \sum\_{x'}^{} \eta(x'|x,a,o) U(x', s')) ]
\end{equation}

which is a [conditional plan evaluation]({{< relref "KBhconditional_plan.md#id-6f19368f-74b5-4606-a882-ec9bc5619873-conditional-plan-evaluation" >}}) but we know even litle

and, to construct [alpha vector]({{< relref "KBhalpha_vector.md" >}})s:

\begin{equation}
\alpha\_{x} = \qty[U(x, s\_1), \dots, U(x, s\_{n})]
\end{equation}

we just make one alpha vector per node. So the entire plan is represented as usual by \\(\Gamma\\) a set of [alpha vector]({{< relref "KBhalpha_vector.md" >}})s. And yes you can [alpha vector pruning]({{< relref "KBhalpha_vector.md#id-a11af4cf-7e36-4b3f-876f-e6a26cf6817e-alpha-vector-pruning" >}}).

\begin{align}
U(x,b) = b^{\top} \alpha\_{x}
\end{align}

node we want to start at:

\begin{equation}
X^{\*} = \arg\max\_{x} U(x,b)
\end{equation}


### solving for \\(\Psi\\) and \\(\eta\\) {#solving-for-psi-and-eta}

1.  [policy iteration]({{< relref "KBhpolicy_iteration.md" >}}): incrementally add nodes and evaluate it
2.  nonlinear programming: this can be a nonlinear optimization problem
3.  [controller gradient ascent]({{< relref "KBhcontroller_gradient_ascent.md" >}})
