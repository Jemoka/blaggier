+++
title = "ACL2025 Keynote: Luke Zettemoyer"
author = ["Houjun Liu"]
draft = false
+++

Naively: "almost everything comes from pretraining." How much simple supervision will it radically change the behavior of our language model.


## Key Directions {#key-directions}

1.  data long-tail: tokenizer free LLMs
2.  data modules: how to we specialize quickly?


## Tokenizer-Free LM {#tokenizer-free-lm}

Byte-Level LMs are just more expensive (i.e., there is just a bunch more residual streams! and that's pretty bad). High level intution: takes the input bytes, create some "strides"/"patches", and then send the patches through a transformer, and then unpatch

Insight: BLP --- create "patches" wherever there are high entropy.

<http://github.com/facebookresearch/blt>


## Specialize on Data Quickly {#specialize-on-data-quickly}

"Modular language models": specialize different parts of the model (i.e., MoE-esque "experts" to different domains of data.

Naive: different FFNs for different data.

Smarter approaches:

-   start with unlabeled data corpus
-   cluster and perform unsupervised domain discovery
-   train on each? separately?

High level solution notion: how do we have MoE where we can add/remove experts dynamically. "Domain-informed non-parametric route." Each of the branches, we can just do a binary-classification problem of \\(C\_{\text{pub}}\\), a "public/default expert" versus \\(C\_{j}\\) for each of the experts. At inference time, we perform a multi-class classifictaion to be able to do routing.

i.e., we try to learn to push the classification decision boundary.


## LIMA {#lima}

Less is more for alignment. SFT using very careful dataset could radically change the model behavior.


## Spurious Rewards in RLVF {#spurious-rewards-in-rlvf}

RLVF makes models better, even if the rewards are random.
