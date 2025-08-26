+++
title = "Algorithmic Fairness"
author = ["Houjun Liu"]
draft = false
+++

Could algorithms make more equitable decisions? No: algorithms may propagate and amplify biases---its not enough just to learn/optimize.

Collaboration with other fields has both a language gap and a value gap.


## Technical [Algorithmic Fairness]({{< relref "KBhalgorithmic_fairness.md" >}}) {#technical-algorithmic-fairness--kbhalgorithmic-fairness-dot-md}

fair scheduling, distributed computing, envy-freeness, cake cutting, stable matching, etc.


## Interpreting Individual Probabilities {#interpreting-individual-probabilities}

"I have n% probability of developing this thing" --- what does this mean? what does it capture in the environment?

Applications

-   insurance: how does actuarial scenarios work for this case---it is, in those cases, context dependent
-   satisfying fairness maybe mis-generalized: discrimination can be subtle for a given measure (do you know it when you see it?)

Definitions of fairness, however, is important to characterize a system.


## Group Fairness {#group-fairness}

Intuition: for a few protected groups \\(S\\), make sure that your predictor "behaves similarly" on \\(S\\) as on a general population \\(U\\)


### "similarly" {#similarly}

-   **statistical parity**: every prediction outcome i equally is as likely on \\(S\\) and \\(U\\)
-   **balance**: similar false positive and false negative on both \\(S\\) and \\(U\\)
-   **calibration**: prediction values are accurate on average on \\(S\\) and \\(U\\)

these systems are all at odds with each other, and also are often at odds with the overall utility.


### subgroups {#subgroups}

trying to advertise a burger store to vegetarians isn't going to work; so, **fairness** requires identifying subgroups \\(s \subseteq S\\) which are relevant to the task

**multi-group fairness**: offering "fairness protection" to every large subset of the population that can be identified given the data and computation limitations---fair by exhaustively protecting every group
