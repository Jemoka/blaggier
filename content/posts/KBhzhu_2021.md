+++
title = "Zhu 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fcomp.2021.624683


## One-Liner {#one-liner}

[late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) of multimodal signal on the [CTP]({{< relref "KBhctp.md" >}}) task using transformers, mobilnet, yamnet, and mockingjay


## Novelty {#novelty}

-   Similar to  [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}) and [Shah 2021]({{< relref "KBhshah_2021.md" >}}) but actually used the the current Neural-Network state of the art
-   Used [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) again after the base model training
-   Proposed that inconsistency in the diagnoses of [MMSE]({{< relref "KBhmmse.md" >}}) scores could be a great contributing factor to multi-task learning performance hindrance


## Notable Methods {#notable-methods}

-   Proposed base model for transfer learning from text based on MobileNet (image), YAMNet (audio), Mockingjay (speech) and BERT (text)
-   Data all sourced from recording/transcribing/recognizing [CTP]({{< relref "KBhctp.md" >}}) task


## Key Figs {#key-figs}


### Figure 3 and 4 {#figure-3-and-4}

{{< figure src="/ox-hugo/2022-06-25_10-54-21_screenshot.png" >}}

This figure tells us the [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) architecture used


### Table 2 {#table-2}

{{< figure src="/ox-hugo/2022-06-25_10-55-53_screenshot.png" >}}

Pre-training with an existing dataset had (not statistically quantified) improvement against a randomly seeded model.


### Table 3 {#table-3}

{{< figure src="/ox-hugo/2022-06-25_10-56-22_screenshot.png" >}}

Concat/Add fusion methods between audio and text provided even better results; confirms [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}) on newer data