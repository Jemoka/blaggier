+++
title = "LM Alignment"
author = ["Houjun Liu"]
draft = false
+++

Been Kim

alignment problem involves "aligning" the representation spaces between machines of the world and that of the human. alternative perspective: **teach <span class="underline"><span class="underline">humans</span></span> new concepts to understand/communicate better**


## feature attribution doesn't work {#feature-attribution-doesn-t-work}

We take that perspective because many of the intersectional intepretability doesn't work well (feature permutation, etc.)---feature attribution type analyses ("Impossibility Theorems Been Kim") actually has no correlation with predictive results.


## feature information store in models is unrelated to model edit success {#feature-information-store-in-models-is-unrelated-to-model-edit-success}

i.e.: knowledge storing location located using ROME technique, though it gives you a sense of the location to store information, doens't correlate to success of model editing.


## can we use ML to teach people? {#can-we-use-ml-to-teach-people}

for instance, we can teach grandmasters to play chess using AlphaGo, and see if we can make a quantitative impact.


### concept {#concept}

A [concept](#concept) is a unit of knowledge that's **useful for a task**. Two properties:

1.  **minimality**: irrelavent information has been removed
2.  **transferable**: it can be taught atomically


#### filtering for good [concept](#concept)s {#filtering-for-good-concept--org4a10397--s}

Representing a concept as a sparse vector as the latent space. We can check if a concept is transferable by teaching a student agent by doing KL divergence.


#### demonstration learning {#demonstration-learning}

instead of doing demonstration learning on machines, do it on ****HUMANS****. Filter for the [concept](#concept)s that are well operationalized.


## AlphaZero {#alphazero}

recap: using a dense network to embed the network, and then [MCTS]({{< relref "KBhmonte_carlo_tree_search.md" >}}).
