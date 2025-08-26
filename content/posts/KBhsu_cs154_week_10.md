+++
title = "SU-CS154 Week 10"
author = ["Houjun Liu"]
draft = false
+++

[Algorithmic Fairness]({{< relref "KBhalgorithmic_fairness.md" >}})


## Randomness and Pesudorandomness {#randomness-and-pesudorandomness}

When randomness can be reduced or eliminated, we call it "derandomization".

**pseudorandomness** is an object which appears to be uniform distributed but actually it is not.


### when randomness is necessary {#when-randomness-is-necessary}

1.  **distributed computing**: symmetry, etc.
2.  **cryptography**: secrets, semantic security, etc.

**dining philosophers problems**---how to break symmetry which causes deadlock?

**Byzantine agreement**---attack if all leaders want to attack with Byzantine decisions (if the clocks of attack decisions each round is not synchronized, the only way this could work is through randomized algorithms)

[Zero-Knowledge Proof]({{< relref "KBhapproximation_algorithms.md#zero-knowledge-proof" >}}), [PCP Theorem]({{< relref "KBhapproximation_algorithms.md#pcp-theorem" >}}), etc.

strong pseudorandomness for encryption

**random walks**---flipping coins in a random walk actually gets out of a maze using minimal memory; basis of PageRank, etc. useful also for simulating physical systems


#### "shaking the input" {#shaking-the-input}

**communication network**: for n-dimensional cube---

every deterministic routing scheme will incur exponentially busy links in worst case (because there are "hubs" for which information could go through)

to solve this, we pass the message \\(x \to y\\) through a random node \\(z\\) such that \\(x \to z \to y\\): this actually reduces congestion to a constant to every edge

**randomized quicksort**: to avoid quicksort worst-case, you should "shake your input" a bit by randomizing its order to prevent the item to be the worst-case


#### smoothed analysis {#smoothed-analysis}

small perturbations on even worst-case input will make stuff work well


#### hiding the presence/absence {#hiding-the-presence-absence}

if we want to hide a particular individual from a population, you can shake the input around a bit (add random noise) and thereby adds more privacy "differential privacy"


### when randomness is good {#when-randomness-is-good}

1.  [Communication Complexity]({{< relref "KBhprotocol.md#communication-complexity" >}})
2.  routing


### when randomness is not needed {#when-randomness-is-not-needed}

1.  algorithms: most of the time, we maybe able to derandomize something
2.  BPP=P? does every randomized algorithm can be derandomized with only polynomial increase?
3.  RL=L? can randomized algorithms be derandomized with only a constant factor increase in memory
