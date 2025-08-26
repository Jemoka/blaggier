+++
title = "SU-CS224N APR022024"
author = ["Houjun Liu"]
draft = false
+++

## Why Language {#why-language}

-   language, first, allows communication (which allowed us to take over the world)
-   language allows humans to achieve higher level thoughts (it scaffolds detailed planning)
-   language is also a flexible system which allows variatically precise communication

"The common misconception is that language use has to do with words and what they mean; instead, language use has to do with people and what they mean."


## Timeline of Development {#timeline-of-development}


### 2014 - Neural Machine Translation {#2014-neural-machine-translation}

Deep Google Translate allows wider communication and understanding


### 2018 - Free-Text QA {#2018-free-text-qa}

Next generation search: actual sentence search instead of keyword matching.

For instance, YONO (Lee et al 2021)


### 2019 - GPT {#2019-gpt}

Autoregression! Conditioning on previous material, generate a single next word.


### 2022+ - ChatGPT+ {#2022-plus-chatgpt-plus}

Dialogue-based systems (question and answer instead of completion).


## Foundation Model {#foundation-model}

See [foundational model]({{< relref "KBhfoundational_model.md" >}})


## meaning {#meaning}


### denotational semantics {#denotational-semantics}

symbol &lt;=&gt; signified

"[meaning]({{< relref "KBhmeaning.md" >}}) of tree is a map to the set of all trees in the world"

This is pretty much useless.


### localist representation {#localist-representation}

a [localist](#localist-representation) representation means that each activation represents exactly one meaning; i.e. "one-hot".


#### one-hot representation {#one-hot-representation}

-   each word is a discrete symbol --- [localist](#localist-representation) representation
-   each word is represented one-hot over space of all words
-   dimentionality would be HUGGEEEE

**Main Problem**: no sense of the meaning of words; the difference between "hotel" and "motel" is the same between "house" and "chair"


### distributional semantics {#distributional-semantics}

We model a symbol based on the distribution in which they appear in language instead of quantified things that it symbolizes.

****KEY IDEA****: "You shall know the word by the company it keeps."


#### WordNet {#wordnet}

try 1. for better attempts, see [word vectors](#word-vectors).

<!--list-separator-->

-  Problems with WordNet

    -   "proficient" is a synonym for "good" --- missing nuance (i.e. WordNet misses contextual dependence)
    -   WordNet lists offensive synonyms without connotations or dangers


#### word vectors {#word-vectors}

A words meaning is represented by the **context** it lives in. This allows us to create [embedding](#word-vectors)s, which measures the similarity between words based on their dot product. We call [embedding](#word-vectors)s [embedding](#word-vectors)s because we are [embedding](#word-vectors) the word as a point in an \\(n\\) [dimension]({{< relref "KBhdimension.md" >}})al space.

We can compute these things via [Word2Vec]({{< relref "KBhword2vec.md" >}}).


### Word2Vec {#word2vec}

See [word2vec]({{< relref "KBhword2vec.md" >}}).
