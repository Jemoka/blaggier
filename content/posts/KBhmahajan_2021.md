+++
title = "Mahajan 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fnagi.2021.623607


## One-Liner {#one-liner}

Trained a bimodal model on speech/text with GRU on speech and CNN-LSTM on text.


## Novelty {#novelty}

-   A post-2019 NLP paper that doesn't use transformers! (so ~~faster~~ (they used CNN-LSTM) lighter easier)
-   "Our work sheds light on why the accuracy of these models drops to 72.92% on the ADReSS dataset, whereas, they gave state of the art results on the DementiaBank dataset."


## Notable Methods {#notable-methods}

Bi-Modal audio and transcript processing vis a vi [Shah 2021]({{< relref "KBhshah_2021.md" >}}), but with a CNN-LSTM and GRU on the other side.


## Key Figs {#key-figs}


### Figure 1: Proposed Architecture {#figure-1-proposed-architecture}

{{< figure src="/ox-hugo/2022-06-25_12-10-09_screenshot.png" >}}

The figure highlights the authors' proposed architecture


### Figure 2: confusion matrix {#figure-2-confusion-matrix}

{{< figure src="/ox-hugo/2022-06-25_12-17-25_screenshot.png" >}}

In addition to validating prior work by Karlekar 2018 and Di Palo 2019, proposed model C and got accuracy of \\(73.92\\%\\).