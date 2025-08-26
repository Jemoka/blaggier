+++
title = "falsification"
author = ["Houjun Liu"]
draft = false
+++

[falsification]({{< relref "KBhfalsification.md" >}}) is the process of systematically finding failures of a particular system to inform future design decisions.

Goals:

-   enhance system sensors
-   change the agent's policy
-   revise the system requirements
-   adapt the training of human operators
-   recognize a system as having limitations
-   ...or abandon the project

Here are some methods


## direct falsification {#direct-falsification}

-   rollout to a ceratin depth
-   check if any trajectory is a failure and collect
-   return them

**drawback**: this doesn't work super well for rare events


### ...how bad is it {#dot-dot-dot-how-bad-is-it}

\begin{equation}
p\_{fail} = \text{probability of failure}
\end{equation}

we typically don't know this! But suppose we did. Let's define:

\begin{equation}
p\qty(k): \text{probability we sample a failure on the $k$ th rollout}
\end{equation}

Meaning, the probability of \\((1-p\_{fail})^{k-1} p\_{fail}\\). This is our distribution over \\(k\\), and it is a geometric distribution! Meaning, it should require \\(\frac{1}{p\_{fail}}\\) simulations on average before we find a singular failure event.


## falsification through optimization {#falsification-through-optimization}


### disturbances {#disturbances}

goal: systematically search for failures by **taking control for the sources of randomness**.

For instance, consider our observation model:

\begin{equation}
o \sim O\qty(\cdot | s)
\end{equation}

let's re-write:

\begin{equation}
o = O(s, x\_0), x\_{o} \sim D\_{o} \qty(\cdot | s)
\end{equation}

we are factoring the original model into a deterministic part \\(o = O\\), and also the stochastic part \\(x\_{o} \sim D\_{o}\\). Aesthetically, we typically want \\(D\\) to be a simple distribution, and perform transformations to the target distribution into \\(O\\).

---

we'll do this for everything

\begin{equation}
s' \sim T \qty(\cdot | s,a) \implies  s' = T(s,a,x\_{s}), x\_{s} \sim D\_{s}\qty(\cdot | s,a)
\end{equation}

...and more

We can package all of these \\(x,D\\) up together, into **disturbance** \\(x\\) and disturbance distribution \\(D\\).


#### example {#example}

Suppose our observation is \\(o \sim \mathcal{N} \qty(\cdot | s, \Sigma)\\). Let's factor it:

\begin{equation}
o = s + x\_0, x\_0 \sim \mathcal{N} \qty(\cdot | 0, \Sigma)
\end{equation}

that is, the disturbance is the "observation noise" added to the true state. We just have a disturbance distribution centered at zero which helps us add noise to the observation.


#### rewriting environment {#rewriting-environment}

```julia
function step(sys::System, s::State, D::DisturbanceDistributino)
    xo = rand(D.Do(s))
    o = sys.sensor(s, xo)
    xa = rand(D.Da(o))
    a = sys.agent(o,xa)
    xs = rand(D.Ds(s,a))
    s′ = sys.env(s,a,xs)

    # storing for bookeeping
    x = Disturbance(xa, xs, xo)

    return (; o, a, s′, x)
end
```


#### trajectory distribution {#trajectory-distribution}

Recall: sources of randomness for a rollout --- 1) the initial state, and 2) the disturbance distribution applied at each step.

We can actually then specify this [trajectory distribution](#trajectory-distribution) with the following properties:

```julia
abstract type TrajectoryDistribution end
function initial_state_distribution(p::TrajectoryDistribution) end
function distriburbance_distribution, t::Timestamp) end
function depth(p::TrajectoryDistribution) end
```

we can then roll this system out:

```julia
function rollout(p::TrajectoryDistribution; d=depth(p))
    s = rand(initial_state_distribution(p))
    τ = []
    for t = 1:d
        o,a,s′ = step(s, distriburbance_distribution(p,t))
        push!(τ, (s′,o,a,x))
        s = s′
    end
end
```

a normal rollout can be factored to this via a "nominal trajectory distribution" .


### fuzzing {#fuzzing}

input a non-nominal [trajectory distribution](#trajectory-distribution) to cause failure. Usually, we do this by increasing variance off the nominal distirbution.


### disturbance optimization {#disturbance-optimization}

we want to systematically search over initial states and _**sequences** of disturbances_ of find failure trajectories.

\begin{align}
\min\_{s,x} &\ f\qty(\tau) \\\\
s.t. &\ \tau = RO(s,x)
\end{align}

where \\(f(\tau)\\) represents "closeness to failure". Problem, though, using robustness alone isn't super duper likely as a failure case (it will give very unlikely trajectories).


#### likelihood of a trajectory {#likelihood-of-a-trajectory}

The likelihood of a trajectory is the likelihood of the _initial state_ and _all disturbances_ in the trajectory appearing.

\begin{equation}
p\qty(\tau) = p\qty(s\_{1}) D\qty(x\_1 | s\_1, a\_1, a\_1) \dots D\qty(x\_d | s\_d, a\_d, a\_d)
\end{equation}

Our new objective function, then:

\begin{equation}
f\qty(\tau) = \begin{cases}
- p\qty(\tau), \text{if $\tau \not \in \psi$},\\\\
\rho \qty(\tau, \psi)
\end{cases}
\end{equation}

if a trajectory is **not** a failure (\\(\tau \in \psi\\)), we want to maximize failure; if trajectory **is** a failure then we want to maximize its likelihood.


#### properties of the goal + refactoring {#properties-of-the-goal-plus-refactoring}

-   failures should never have a higher objective value than successes
-   ...but the log-likelihood of the objective above could cause non-failures to be negative error

so, more stably:

\begin{equation}
f\qty(\tau) = \rho \qty(\tau, \psi) - \lambda \log \qty(p \qty(\tau))
\end{equation}


#### how do you optimize? {#how-do-you-optimize}

-   local descrent methods: [gradient descent]({{< relref "KBhgradient_descent.md" >}}), adam (these methods \*require th gradient)..
-   direct methods: [Hooke-Jeeves Search]({{< relref "KBhsu_cs361_apr112024.md#hooke-jeeves-search" >}}): [Nelder-Mead Simplex Method]({{< relref "KBhsu_cs361_apr112024.md#nelder-mead-simplex-method" >}})
-   population methods


## falsification through planning {#falsification-through-planning}

Recall our optimization objective from above:

\begin{align}
\min\_{s, \mathbb{X}} &\ f(\tau) \\\\
s.t. &\ \tau = RO\qty(s,x)
\end{align}

High level goal---we want to create iterative methods to find possible areas of errors (i.e. some tree search). This is useful when you have too many states to directly optimize over.


### Tree Structure {#tree-structure}

-   nodes: each stage
-   edges: tuples of observation, action, disturbance \\(\qty(o,a,x)\\)


### Building the Tree {#building-the-tree}

1.  **select** a node which is the state
2.  **extend** the node by sampling an observation, action, disturbance \\(\qty(o,a,x)\\)


### Various Tree Types {#various-tree-types}


#### Heuristic Search {#heuristic-search}

[Heuristic Search](#heuristic-search), or [Rapidly Exploring Random Tree](#heuristic-search)s, we

-   **select**: sample a "goal state", compute the objective for **each node** in the tree based on the goal state, select the node with the lowest objective
-   **extend**: select disturbance, take a step using the selected disturbance, add result to the tree

We want our goals to roughly lead us to failure/be around failure; and the objective should be something like "distance" which measures the quality of being at a particular point.

So, revised:

-   **select**: sampling a goal state from the failure region
-   **extend**: select a disturbance that would move us closest to the goal state

But, this will give us failures, but not really likely failures. So, how do we go about doing that? It's time for **alternative objectives**. To do this, let's define a cost function (which **must be positive to ensure the search will terminate**):

\begin{equation}
c = \text{current cost} + \text{cost to go}
\end{equation}

the former is just computed from our historical trajectory; the latter is estimated some heuristic \\(h\\). For instance,

-   current cost: distance to the current node in the tree from start
-   cost to go: "direct distance to the goal"

For instance, if we wanted to include our likelihood:

-   current cost: rescaled negative log likelihood (to keep stuff positive)
-   cost to go: distance to the goal, as a proxy for NLL

**NOTICE**: if a heuristic is [admissable]({{< relref "KBhadmissable.md" >}}) and its guaranteed to never overestimate the cost of reaching the goal state, this is \\(A^{\*}\\).


#### [monte-carlo tree search]({{< relref "KBhmonte_carlo_tree_search.md" >}}) falsification {#monte-carlo-tree-search--kbhmonte-carlo-tree-search-dot-md--falsification}

Let's use [monte-carlo tree search]({{< relref "KBhmonte_carlo_tree_search.md" >}}) for falsification.

-   **select**: select a node based on a heuristic that balances [Exploration and Exploitation]({{< relref "KBhexploration_and_exploitation.md" >}}). For a given node...
    -   is the number of children \\(\leq k N^{\alpha}\\)?
        -   yes! select it and extend
        -   no! select a new node which _minimizes_ \\(Q\_{\text{child}} - c \sqrt{ \frac{\log  N}{N\_{\text{child}}}}\\), which is the [Lower Confidence Bound Exploration]({{< relref "KBhsu_cs361_may072024.md#lower-confidence-bound-exploration" >}}); the reason why we are picking **lowest** is because we want to minimize \\(Q\\), instead of [UCB 1]({{< relref "KBhdirected_exploration.md#ucb-1" >}}) which is trying to maximize \\(Q\\)

How do we estimate \\(Q\\)? We can do whatever we want; for instance, we can perform a bunch of roll-outs and estimate the robustness.


#### reinforcement learning falsification {#reinforcement-learning-falsification}

Technically, falsification is just RL:

-   system =&gt; reward to adversary
-   adversary =&gt; action to system

Most RL algorithms are designed to be very sample efficient, which means we can find failures rather quickly.

Using [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}}) or [reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}) to search for the most likely failure is called **adaptive stress testing**.


## how to pick a falsification method? {#how-to-pick-a-falsification-method}

-   if failure is easy to come by, just do [direct falsification](#direct-falsification)
-   if you could compute the gradient, then do that
-   otherwise, do black box approaches / population approaches / etc.
