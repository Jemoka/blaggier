+++
title = "SU-CS238V MAR062025"
author = ["Houjun Liu"]
draft = false
+++

## Pathway to acceptance {#pathway-to-acceptance}

1.  engineering development
2.  limitations of change request
3.  NN testing
4.  open loop testing
5.  sims
6.  track testing
7.  shadow mode
8.  real world testing
9.  wave1 user problems
10. rollout metrics


### why end to end system? {#why-end-to-end-system}

-   human values is hard to codify
-   the interfaces betteen observation and action isn't wel defined
-   can scale to handle long tail problems
-   homogeneous compute + known latency


### how to support data collection for corner cases? {#how-to-support-data-collection-for-corner-cases}

-   small NNs that trigger data collection for specific problems
-   user intervention
-   large change in state space


## Two Problems with Alignment {#two-problems-with-alignment}

-   **underspecification**: specs are non-exhaustive
-   **overgeneralization**: specs are non-restrictive
