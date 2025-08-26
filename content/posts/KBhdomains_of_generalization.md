+++
title = "Generalization"
author = ["Houjun Liu"]
tags = ["emnlp2024"]
draft = false
+++

## Compositionality {#compositionality}

Getting the right contents.

-   **semantic capacity tested** --- knowing the propositional content
-   **operationalization** --- form =&gt; meaning mapping
-   **measure of success** --- generalizing to the right meaning representation for novel expressions (this is non-trivial; multiple compatible generalization maybe applicable depending on context)


### task {#task}

Given that a model can map certain expressions to their meaning representations, can they also do this for new expressions?


### results {#results}

-   lexical generalization (fill in new words/pairs) isn't too hard for new NN
-   but structural generalization (permute syntactical forms) is very hard

-   subclause decomposition
-   phrase id
-   iterative proposional phrase and noun phrase annotation
-   verb phrase normalization


### limitations {#limitations}

-   "structure" requires some definition by committing to a particular formalism
-   PTing makes exposing these stems hard


## Entity Tracking {#entity-tracking}

Getting the right entity through a conversation.


### task {#task}

"box world": putting stuff into boxes


### results {#results}

-   models that did have a lot of code in pretraining generalized better than those that didn't
-   this is even shown in minimal pairs of the same architecture with more code
