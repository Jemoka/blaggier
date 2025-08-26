+++
title = "Bouton 2018"
author = ["Houjun Liu"]
draft = false
+++

(<a href="#citeproc_bib_item_2">Bouton et al. 2018</a>)


## One-Liner {#one-liner}

Uses the single-user avoidance POMDP formulation presented in (<a href="#citeproc_bib_item_1">Bouton, Cosgun, and Kochenderfer 2017</a>) to extend to multiple road users


## Novelty {#novelty}

Uses [Single-User Model of Road Navigation](#single-user-model-of-road-navigation) to extend general [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) formulation into multi-pedestrian/multi road user casesroad user cases

{{< figure src="/ox-hugo/2024-01-11_09-18-05_screenshot.png" >}}


## Previous Work {#previous-work}

Imagine worst-case scenario always: set upper bound and always imagine it; could cause gridlock if situation never resolves.


## Notable Methods {#notable-methods}

Uses [QMDP]({{< relref "KBhqmdp.md" >}}) and [SARSOP]({{< relref "KBhsarsop.md" >}}) to perform optimization


### [Single-User Model of Road Navigation](#single-user-model-of-road-navigation) {#single-user-model-of-road-navigation--orgea079d6}

See [Single-User Model of Road Navigation](#single-user-model-of-road-navigation)


### Scaling to multiple road users {#scaling-to-multiple-road-users}

-   make an aggregate utility which is a function across all the single-user avoidance strategies (i.e. the aggregate utiltiy of mulitlpe road user is the utility of avoiding each individual user) \\(U^{\*}(b,a) = f(U^{\*}(b\_1, a) ... U^{\*}(b\_{n}, a)\\). this is called [utility fusion]({{< relref "KBhutility_fusion.md" >}})
-   two possible approaches: either minimum of all the utilities, or the sum of them; the former is more risk averse (we want to hit no one), and latter treats each user is independent.
-   further, the number of users in the road is modeled by a belief


### Evaluation {#evaluation}

"the evaluation models are different to find the optimal policy, and are also higher fidelity"

We want to evaluate our [POMDP]({{< relref "KBhpartially_observable_markov_decision_process.md" >}}) on a higher fidelity model to check if the system can generalize to harder environments.

Baselines: random actions, or hand crafted rules-based policy.


## Key Figs {#key-figs}

{{< figure src="/ox-hugo/2024-01-09_13-00-53_screenshot.png" >}}

{{< figure src="/ox-hugo/2024-01-11_09-35-15_screenshot.png" >}}


## New Concepts {#new-concepts}


### Single-User Model of Road Navigation {#single-user-model-of-road-navigation}

POMDP formulation; we only care about **one road user**

1.  action: a finite set of change in acceleration -4m/s2, -2m/s2, 0m/s2, 2m/s2, 4m/s2
2.  states and transitions: poses (position + velocity) of the car and the road user; position are velocities are discretized
3.  observation: measured position and velocity of the one other road user with a pm 1 meter variance for crosswalks and pm 2 meter variance for intersection
    -   users in non-occluded area will always be detected
    -   user in an occluded area will not be detected
    -   position and velocity of road users are uncertain pm 1 meter and pm 1 meter / second
4.  belief: categorical distribution over states
5.  dynamics: physics + kinematics for car; pedestrians have stochastic velocity
6.  reward: unit reward for final position, tuned penalty for collision


## Notes {#notes}
