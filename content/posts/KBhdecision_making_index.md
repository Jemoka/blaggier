+++
title = "Decision Making Index"
author = ["Houjun Liu"]
tags = ["index"]
draft = false
+++

Lecture notes taking during CS238, decision making. Stanford Intelligence Systems Laboratory (SISL: planning and validation of intelligent systems).


## Big Ideas {#big-ideas}


### Themes {#themes}

1.  There's a principled mathematical framework for defining rational behavior
2.  There are computational techniques that could lead to better, and perhaps counter-intuitive decisions
3.  Successful application depends on your choice of representation and approximation
    -   you typically can't solve mathematical models **exactly**
    -   so, we have to rely on good models of approximations
4.  The same computational approaches can be applied to different application domains
    -   the same set of abstractions can be carried through life
    -   send Mykel a note about how these topics about where this stuff is applied

These algorithms drive **high quality** decisions on a **tight timeline**. You can't fuck up: people die.


### Contents {#contents}

-   Fundamental understanding of mathematical models and solution methods---ungraded book exercises
    -   Three quizzes: one question per chapter
        1.  chapters 2, 3, 5
-   Implement and extend key algorithms for learning and decision making
-   Identify an application of the theory of this course and formulate it mathematically (proposal)
    -   what are the i/o
    -   what are the sensors measurements
    -   what are the decisions to be made
-   [one other thing]


## Course Outline {#course-outline}


### 1-shot: Probabilistic Reasoning {#1-shot-probabilistic-reasoning}

-   models of distributions over many variables
-   using distributions to make inferences
-   [utility theory]({{< relref "KBhutility_theory.md" >}})


### n-shot: Sequential Problems {#n-shot-sequential-problems}

-   we now 1-shot [decision network]({{< relref "KBhdecision_networks.md" >}})s into making a series of decisions
    -   **assume**: model of environment is known (no [Model Uncertainty]({{< relref "KBhmodel_uncertainty.md" >}})), and environment is fully observable (no [State Uncertainty]({{< relref "KBhstate_uncertainty.md" >}}))
    -   this introduces a [Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) (MDP)
-   approximation solutions for observing the environment both online and offline


### Model Uncertainty {#model-uncertainty}

-   deal with situations where we don't know what the best action is at any given step
-   i.e.: future rewards, etc.
-   introduce [reinforcement learning]({{< relref "KBhreinforcement_learning.md" >}}) and its challenges
    1.  Rewards may be received long after important decisions
    2.  Agents must generalized from limited exploration experience


### State Uncertainty {#state-uncertainty}

-   deal with situations where we don't know what is actually happening: we only have a **probabilistic** state
-   introduce [Partially Observable Markov Decision Process]({{< relref "KBhpartially_observable_markov_decision_process.md" >}})
    1.  keep a distribution of believes
    2.  update the distribution of believes
    3.  make decisions based the distribution


### Multiagent Systems {#multiagent-systems}

-   challenges of [Interaction Uncertainty]({{< relref "KBhinteraction_uncertainty.md" >}})
-   building up interaction complexity
    1.  [simple game]({{< relref "KBhsimple_game.md" >}})s: many [agent]({{< relref "KBhagent.md" >}})s, each with individual rewards, acting to make a single joint action
    2.  [markov game]({{< relref "KBhmarkov_game.md" >}})s: many agents, many states, multiple outcomes in a stochastic environment; [Interaction Uncertainty]({{< relref "KBhinteraction_uncertainty.md" >}}) arises out of unknowns about what other agents will do
    3.  [partially observable markov game]({{< relref "KBhpartially_observable_markov_game.md" >}}): [markov game]({{< relref "KBhmarkov_game.md" >}})s with [State Uncertainty]({{< relref "KBhstate_uncertainty.md" >}})
    4.  decentralized [partially observable markov game]({{< relref "KBhpartially_observable_markov_game.md" >}}): [POMG]({{< relref "KBhpartially_observable_markov_game.md" >}})s with shared rewards between [agent]({{< relref "KBhagent.md" >}})s instead of individual rewards


## Lectures {#lectures}


### probabilistic reasoning relating to single decisions {#probabilistic-reasoning-relating-to-single-decisions}

[Baysian Network]({{< relref "KBhbaysian_network.md" >}})s, and how to deal with them.

-   [SU-CS238 SEP262023]({{< relref "KBhsu_cs238_sep262023.md" >}})
-   [SU-CS238 SEP272023]({{< relref "KBhsu_cs238_sep272023.md" >}})
-   [SU-CS238 OCT032023]({{< relref "KBhsu_cs238_oct032023.md" >}})
-   [SU-CS238 OCT052023]({{< relref "KBhsu_cs238_oct052023.md" >}})
-   [SU-CS238 OCT102023]({{< relref "KBhsu_cs238_oct102023.md" >}})
-   [SU-CS238 OCT122023]({{< relref "KBhsu_cs238_oct122023.md" >}})


### a chain of reasoning with feedback {#a-chain-of-reasoning-with-feedback}

[Markov Decision Process]({{< relref "KBhmarkov_decision_process.md" >}}) uses [policies]({{< relref "KBhpolicy.md" >}}) that are evaluated with [policy evaluation]({{< relref "KBhpolicy_evaluation.md" >}}) via [utility]({{< relref "KBhutility_theory.md" >}}), [Bellman Equation]({{< relref "KBhpolicy_evaluation.md#bellman-expectation-equation" >}}), [value function]({{< relref "KBhaction_value_function.md#id-0b1509e0-4d88-44d1-b6fa-fe8e86d200bb-value-function" >}}), etc.

If we know the state space fully, we can use [policy iteration]({{< relref "KBhpolicy_iteration.md" >}}) and [value iteration]({{< relref "KBhvalue_iteration.md" >}}) to determine an objectively [optimal policy]({{< relref "KBhpolicy.md#optimal-policy" >}}). If we don't (or if the state space is too large), we can try to discretize our state space and appropriate through [Approximate Value Function]({{< relref "KBhapproximate_value_function.md" >}})s, or use [online planning]({{< relref "KBhonline_planning.md" >}}) approaches to compute good policy as we go.

If none of those things are feasible (i.e. your state space is too big or complex to be discretized (i.e. sampling will cause you to loose the structure of the problem)), you can do some lovely [Policy Optimization]({{< relref "KBhpolicy_optimization.md" >}}) which will keep you in continuous space while iterating on the policy directly. Some nerds lmao like [Policy Gradient]({{< relref "KBhpolicy_gradient.md" >}}) methods if your policy is differentiable.

Now, [Policy Optimization]({{< relref "KBhpolicy_optimization.md" >}}) methods all require sampling a certain set of [trajectories]({{< relref "KBhrollout_with_lookahead.md#rollout" >}}) and optimizing over them in order to work. How do we know how much sampling to do before we start optimizing? That's an [Exploration and Exploitation]({{< relref "KBhexploration_and_exploitation.md" >}}) question. We can try really hard to collect [trajectories]({{< relref "KBhrollout_with_lookahead.md#rollout" >}}), but then we'd loose out on collecting intermediate reward.

-   [SU-CS238 OCT172023]({{< relref "KBhsu_cs238_oct172023.md" >}})
-   [SU-CS238 OCT192023]({{< relref "KBhsu_cs238_oct192023.md" >}})
-   [SU-CS238 OCT242023]({{< relref "KBhsu_cs238_oct242023.md" >}})
-   [SU-CS238 OCT262023]({{< relref "KBhsu_cs238_oct262023.md" >}})
-   [SU-CS238 OCT312023]({{< relref "KBhsu_cs238_oct212023.md" >}})
-   [SU-CS238 NOV022023]({{< relref "KBhsu_cs238_nov022023.md" >}})


### [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) bomp bomp bomp {#pomdp--kbhpartially-observable-markov-decision-process-dot-md--bomp-bomp-bomp}

-   [SU-CS238 NOV092023]({{< relref "KBhsu_cs238_nov092023.md" >}})
-   [SU-CS238 NOV142023]({{< relref "KBhsu_cs238_nov142023.md" >}})
-   [SU-CS238 NOV162023]({{< relref "KBhsu_cs238_nov162023.md" >}})
-   [SU-CS238 NOV282023]({{< relref "KBhsu_cs238_nov282023.md" >}})
-   [SU-CS238 NOV302023]({{< relref "KBhsu_cs238_nov302023.md" >}})


### Failures? {#failures}

-   Change the action space
-   Change the reward function
-   Change the transition function
-   Improve the solver
-   Don't worry about it
-   Don't deploy the system


### Words of Wisdom from Mykel {#words-of-wisdom-from-mykel}

"The belief update is central to learning. The point of education is to change your beliefs; look for opportunities to change your belief."

"What's in the action space, how do we maximize it?"

From MDPs, "we can learn from the past, but the past doesn't influence you."

"Optimism under uncertainty": [Exploration and Exploitation]({{< relref "KBhexploration_and_exploitation.md" >}}) "you should try things"


## Worksheets {#worksheets}

-   [SU-CS238 Q0Q3]({{< relref "KBhsu_cs238_q0q3.md" >}})
