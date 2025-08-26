+++
title = "Knowledge Editing"
author = ["Houjun Liu"]
draft = false
+++

## controllable {#controllable}

We want \\(P(Y|X) = p\\), for a specific \\(p\\) that we specify.


### fine-grained control {#fine-grained-control}

ideally, instead of optimizing over entire expected values, we want to tune specific  utputs


## Success in Editing {#success-in-editing}

Say we edited some \\(M\\), specifying a viper is a vertebrate.

Ideally, this should also edit the other related information:

-   \\(P\\) (paraphrases)j: viper and vertebrates
-   \\(E\\) (logical entailments): a viper has a brain

And we shouldn't touch:

-   \\(R\\) (other stuff): Chile is a country
-   \\(LN\\) (local neural data): a viper is venomous


## Hypernetwork Weight Editing's Drawbacks {#hypernetwork-weight-editing-s-drawbacks}

-   harder to **fix errors** than **creating them**
-   harder to retain preformance on **local data** than **random data**
-   hander to generalize to **entailed data** than **paraphrases**
-   Updates **improves consistency**


## Information Deletion {#information-deletion}

-   "deleting information" from LLMs is undefined
-   RLHF, SFT, etc. **HIDES** rather than ddeleting
-   this can be framed as model editing


### High Level Approach {#high-level-approach}

-   notice threat information
-   attempt to "delete it"
-   evaluate the deletion
-   try to extract the threat information again
-   loop

We formalize this by saying, for some adversarial \\(A\\) to question \\(Q\\), we hope that the candidate output set \\(C\\) of size \\(B\\) all don't contain \\(A\\).

Formal guarantees don't work very well in LLMWorld.

Ideally, we balance attack success and the damage to other aspects from the model.


### Supervision Gap Recovered {#supervision-gap-recovered}

Measuring the ratio between the rate of success of "easy" supervision data over "hard" supervisiation data.
