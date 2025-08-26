+++
title = "Martinc 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fnagi.2021.642647


## One-Liner {#one-liner}

Combined bag-of-words on transcript + [ADR]({{< relref "KBhactive_data_representation.md" >}}) on audio to various classifiers for AD; ablated BERT's decesion space for attention to make more easy models in the future.


## Novelty {#novelty}

-   Pre-processed each of the two modalities before fusing it ([late fusion]({{< relref "KBhfusion.md#late-fusion" >}}))
-   Archieved \\(93.75\\%\\) accuracy on AD detection
-   The data being forced-aligned and fed with [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) allows one to see what sounds/words the BERT model was focusing on by just focusing on the attention on the words


## Notable Methods {#notable-methods}

-   Used classic cookie theft data
-   bag of words to do [ADR]({{< relref "KBhactive_data_representation.md" >}}) but for words
-   multimodality but [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) with one (hot-swappable) classifier


## Key Figs {#key-figs}


### How they did it {#how-they-did-it}

{{< figure src="/ox-hugo/2022-06-24_00-20-26_screenshot.png" >}}

This is how the combined the forced aligned (:tada:) audio and transcript together.


### Bertbelation {#bertbelation}

Ablated BERT results.

{{< figure src="/ox-hugo/2022-06-24_00-23-36_screenshot.png" >}}

The model overall tends to focus on early parts of sentences. y is attention weight, x is position in sentence, blue is TD, red is AD.


## New Concepts {#new-concepts}

-   [Active Data Representation]({{< relref "KBhactive_data_representation.md" >}})