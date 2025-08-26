+++
title = "ICLR2025 Snell: Optimality of Scaling LLM Test-Time Compute"
author = ["Houjun Liu"]
draft = false
+++

## Compute-Optimal Scaling {#compute-optimal-scaling}

[Compute-Optimal Scaling](#compute-optimal-scaling) is the notion of selecting the optimal configuration (beam width, search budget, etc.) dynamically / for binned question.


## Approaches to "Scaling Test-Time Compute" {#approaches-to-scaling-test-time-compute}

Three primary approaches:

-   best-of-n: roll out a bunch, reject
-   [Beam Search]({{< relref "KBhnlp.md#beam-search" >}}): check against intermediate
-   lookahead search: MCTSish (do lookahead rollouts)


### Key insight {#key-insight}

-   On easy qusetion, beam search shows over-optimization and best of n is good
-   on medium/hard questions, beam search is better

Lookahead seems bad?


### Method {#method}


#### Learning a Value Function {#learning-a-value-function}

[Wang 2312.08935]


## Sequential vs. Parallel Sampling in Scaling Test Time Compute {#sequential-vs-dot-parallel-sampling-in-scaling-test-time-compute}

What's the trade-off between sampling a bunch in parallel vs. thinking sequentially.


### Key insight {#key-insight}

-   on easy questions, sequential is best
-   on harder questions, there's a good ratio of trade offs


## Test Time vs. Pretraining compute {#test-time-vs-dot-pretraining-compute}


### Key insight {#key-insight}

-   on easy questions, test time scaling is good
-   on medium/hard questions, pretraining scaling is better


## Questions {#questions}

-   why do you think lookahead search works worse/not better than others? is there some problem specific heuristics that trigger this?
