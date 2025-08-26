+++
title = "SU-CS120 OCT082024"
author = ["Houjun Liu"]
draft = false
+++

-   evaluation is quite hard---you need


## Classical Test Theory {#classical-test-theory}

-   "just average each test" (think MUC, b3, etc.)
-   test-dependent ability estimation
-   **BAD**: because each test maybe different difficulty


## Item Response Theory (IRT) {#item-response-theory--irt}

-   model item and test taker characteristics
-   test-invariant ability estimation (subset invariant)
-   adaptive testing


### problem {#problem}

-   requires calibration first
-   ...which is quite costly


## Flash-HELM {#flash-helm}

HELM, prioritizing higher-ranked models. Evaluate good model more.


## Sang's Method {#sang-s-method}

We want to estimate \\(\theta\\) with a budget of \\(K\\) questions.

-   test taker ability is fixed, but unknown: \\(\theta \sim p(\theta)\\)
-   there's some function \\(z(q) \to Z \in \triangle\\), for some question \\(q \in Q\\)
-   our response model, then, is \\(p(y=1 | z; \theta) = \sigma(\theta - z)\\)

Then for ever question we have we ask what the fisher information is.

You then update for every test result the response model using [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}).


### amortized calibration {#amortized-calibration}

-   compute the calibration difficulty \\(z\\)


## advantages {#advantages}

-   more reliable and efficient across emprical setting
-   incorporates amortized (learned) calibration to reduce calibration costs
-   introduces **conditional question generation** to generate questions of specific difficulties
