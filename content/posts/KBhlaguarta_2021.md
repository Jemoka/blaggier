+++
title = "Laguarta 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fcomp.2021.624694


## One-Liner {#one-liner}

Proposed a large multimodal approach to embed auditory info + biomarkers for baseline classification.


## Novelty {#novelty}

Developed a massively multimodal audio-to-embedding correlation system that maps audio to biomarker information collected (mood, memory, respiratory) and demonstrated its ability to discriminate cough results for COVID. (they were looking for AD; whoopsies)


## Notable Methods {#notable-methods}

-   Developed a feature extraction model for AD detection named [Open Voice Brain Model]({{< relref "KBhopen_voice_brain_model.md" >}})
-   Collected a dataset on people coughing and correlated it with biomarkers


## Key Figs {#key-figs}


### Figure 2 {#figure-2}

This is ****MULTI-MODAL**** as heck

{{< figure src="/ox-hugo/2022-06-24_21-32-21_screenshot.png" >}}

This figure tells us the large network the came up with.


### Table 2 and 3 {#table-2-and-3}

{{< figure src="/ox-hugo/2022-06-24_21-37-45_screenshot.png" >}}

The descriminator tacked on the end of the network is transfer-trained to different tasks. It shows promising results for cough-to-COVID classification


## New Concepts {#new-concepts}

-   [OVBM]({{< relref "KBhopen_voice_brain_model.md" >}})
-   [Lyu 2018]({{< relref "KBhlyu_2018.md" >}})


## Notes {#notes}


### Biomarker correlation {#biomarker-correlation}

Is biomarker data something that is commonly used as a feature extraction/benchmark tool?

{{< figure src="/ox-hugo/2022-06-24_21-24-32_screenshot.png" >}}