+++
title = "Wang 2023"
author = ["Houjun Liu"]
draft = false
+++

## One-Liner {#one-liner}

Modeling carbon storage operations as a POMDP to show how different monitoring strategies can influence decision quality. Evalutae


## Novelty {#novelty}

Applying POMDP to the task of carbon capture monitor planning.


## Notable Methods {#notable-methods}

POMDP formulation

-   Solver: POMCPOW
-   Reward: trapped, free, and exited Co2
-   Action: injector placement
-   Observation: CO2 saturation
-   Belief: the permeability of the rock

POMDP Solution: particle filter tree.

Experimental design validated by simulations of CO2 sperad through injectors


### Fourier Network Simulation {#fourier-network-simulation}

The actual fluid dynamics is really really hard to solve. As such, we do the evaluation over a lot of scenarios and then train a neural network to act as surrogate.


## Key Figs {#key-figs}


## New Concepts {#new-concepts}

-


## Notes {#notes}
