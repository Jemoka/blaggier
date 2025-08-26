+++
title = "Language Information Index"
author = ["Houjun Liu"]
draft = false
+++

What makes language modeling hard: **resolving ambiguity is hard**.

"the chef made her duck"


## Contents {#contents}


### Basic Text Processing {#basic-text-processing}

-   [regex]({{< relref "KBhregex.md" >}})
-   [ELIZA]({{< relref "KBheliza.md" >}})
-   [tokenization]({{< relref "KBhtokenization.md" >}}) and [corpus]({{< relref "KBhcorpus.md" >}})
    -   [Herdan's Law]({{< relref "KBhcorpus.md#herdan-s-law" >}})
-   [text normalization]({{< relref "KBhtext_normalization.md" >}})
    -   [tokenization]({{< relref "KBhtokenization.md" >}}) + [Subword Tokenization]({{< relref "KBhtokenization.md#subword-tokenization" >}})
        -   [BPE]({{< relref "KBhbpe.md" >}})
    -   [Word Normalization]({{< relref "KBhword_normalization.md" >}})
        -   [lemmatization]({{< relref "KBhlemmatization.md" >}}) through [morphological parsing]({{< relref "KBhmorphological_parsing.md" >}})
        -   only take stems from morphemes: [porter stemmer]({{< relref "KBhmorphological_parsing.md#porter-stemmer" >}})
    -   [sentence segmentation]({{< relref "KBhsentence_segmentation.md" >}})
-   [N-Grams]({{< relref "KBhn_grams.md" >}})


### Edit Distance {#edit-distance}

DP costs \\(O(nm)\\), backtrace costs \\(O(n+m)\\).

-   [minimum edit distance]({{< relref "KBhminimum_edit_distance.md" >}})
    -   [weighted edit distance]({{< relref "KBhweighted_edit_distance.md" >}})
-   [backtracing]({{< relref "KBhbacktracing.md" >}})


### Ngrams {#ngrams}

-   [N-Grams]({{< relref "KBhn_grams.md" >}})
-   [Markov Assumption]({{< relref "KBhn_grams.md#markov-assumption" >}})
    -   [Unigrams]({{< relref "KBhn_grams.md#unigrams" >}})
    -   [Backoff]({{< relref "KBhn_grams.md#backoff" >}}) and [Stupid Backoff]({{< relref "KBhn_grams.md#stupid-backoff" >}})
    -   [Interpolation]({{< relref "KBhn_grams.md#interpolation" >}})
    -   [OOV Words]({{< relref "KBhn_grams.md#oov-words" >}})
-   [Model Evaluation]({{< relref "KBhmodel_evaluation.md" >}})
    -   [perplexity]({{< relref "KBhperplexity.md" >}})
    -   [open vocabulary]({{< relref "KBhn_grams.md#oov-words" >}})


### Text Classification {#text-classification}

-   [Text Classification]({{< relref "KBhtext_classification.md" >}})
    -   [Bag of Words]({{< relref "KBhbag_of_words.md" >}})
    -   [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}})
    -   [Naive Bayes for Text Classification]({{< relref "KBhbag_of_words.md#naive-bayes-for-text-classification" >}})
        -   [Binary Naive Bayes]({{< relref "KBhbag_of_words.md#binary-naive-bayes" >}})
    -   [Lexicon]({{< relref "KBhlexicon.md" >}})
-   [Naive Bays Language Modeling]({{< relref "KBhn_grams.md#naive-bays-language-modeling" >}})
-   [Harmonic Mean]({{< relref "KBhharmonic_mean.md" >}})
    -   [Macroaverage]({{< relref "KBhmacroaverage.md" >}}) and [Microaverage]({{< relref "KBhmacroaverage.md" >}})


### Logistic Regression {#logistic-regression}

-   [Generative Classifier]({{< relref "KBhgenerative_vs_discriminitive_classifier.md#generative-classifier" >}}) vs [Discriminate Classifier]({{< relref "KBhgenerative_vs_discriminitive_classifier.md#discriminative-classifier" >}})
-   [Logistic Regression Text Classification]({{< relref "KBhlogistic_regression.md#logistic-regression-text-classification" >}})
    -   [decision boundary]({{< relref "KBhlogistic_regression.md#logistic-regression-text-classification" >}})
-   [cross entropy loss]({{< relref "KBhcross_entropy_loss.md" >}})
-   [stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}})


### Information Retrial {#information-retrial}

-   [Information Retrival]({{< relref "KBhinformation_retrival.md" >}})
    -   [Term-Document Matrix]({{< relref "KBhterm_document_matrix.md" >}})
    -   [Inverted Index]({{< relref "KBhinverted_index.md" >}}) + [postings list]({{< relref "KBhinverted_index.md#postings-list" >}})
        -   [Boolean Retrieval]({{< relref "KBhinverted_index.md#boolean-retrieval" >}})
        -   [positional index]({{< relref "KBhinverted_index.md#positional-index" >}})


### Ranked Information Retrial {#ranked-information-retrial}

-   [Ranked Information Retrieval]({{< relref "KBhranked_information_retrieval.md" >}})
    -   [feast or famine problem]({{< relref "KBhranked_information_retrieval.md#feast-or-famine-problem" >}})
    -   [free text query]({{< relref "KBhranked_information_retrieval.md#free-text-query" >}})
-   [score]({{< relref "KBhranked_information_retrieval.md#score" >}})
    -   [Jaccard Coefficient]({{< relref "KBhranked_information_retrieval.md#jaccard-coefficient" >}})
    -   [log-frequency weighting]({{< relref "KBhranked_information_retrieval.md#log-frequency-weighting" >}})
    -   [document frequency]({{< relref "KBhranked_information_retrieval.md#document-frequency" >}}) ("[idf weight]({{< relref "KBhranked_information_retrieval.md#document-frequency" >}})")
    -   [TF-IDF]({{< relref "KBhranked_information_retrieval.md#tf-idf" >}})
        -   [SMART notation]({{< relref "KBhranked_information_retrieval.md#smart-notation" >}})
-   [vector-space model]({{< relref "KBhranked_information_retrieval.md#vector-space-model" >}})


### Vector Semantics {#vector-semantics}

-   [sense]({{< relref "KBhsense.md" >}})
    -   [principle of contrast]({{< relref "KBhsense.md#principle-of-contrast" >}})
    -   [word relatedness]({{< relref "KBhsense.md#word-relatedness" >}})
        -   [semantic field]({{< relref "KBhsense.md#semantic-field" >}})
    -   [synonymy]({{< relref "KBhsense.md#synonymy" >}}) and [antonyms]({{< relref "KBhsense.md#antonyms" >}})
    -   [affective meaning]({{< relref "KBhsense.md#affective-meaning" >}})
-   [vector semantics]({{< relref "KBhvector_semantics.md" >}})
    -   [transposing a Term-Document Matrix]({{< relref "KBhvector_semantics.md#transposing-a-id-b5d7f908-0351-436d-9784-180ab5aa0562-term-document-matrix" >}})
    -   [term-term matrix]({{< relref "KBhvector_semantics.md#term-term-matrix" >}})
    -   [word2vec]({{< relref "KBhword2vec.md" >}})
        -   [skip-gram with negative sampling]({{< relref "KBhword2vec.md#skip-gram-with-negative-sampling" >}})


### POS and NER {#pos-and-ner}

-   [POS Tagging]({{< relref "KBhpos_tagging.md" >}})
-   [NER Tagging]({{< relref "KBhner_tagging.md" >}})


### Dialogue Systems {#dialogue-systems}

-   [Dialogue]({{< relref "KBhdialogue.md" >}})
-   [Chatbot]({{< relref "KBhchatbot.md" >}})
    -   [PARRY]({{< relref "KBhparry.md" >}})


### Recommender Systems {#recommender-systems}

-   [Recommender System]({{< relref "KBhrecommender_system.md" >}})


### Dora {#dora}

-   [Dora]({{< relref "KBhdora.md" >}})


### Neural Nets {#neural-nets}

-   [Neural Networks]({{< relref "KBhneural_networks.md" >}})


### The Web {#the-web}

-   [Web Graph]({{< relref "KBhweb_graph.md" >}})
-   [Social Network]({{< relref "KBhsocial_network.md" >}})
