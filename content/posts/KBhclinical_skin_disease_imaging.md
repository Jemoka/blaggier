+++
title = "Clinical Skin Disease Image Generation"
author = ["Houjun Liu"]
draft = false
+++

**key question**: are there bias and changes in young children + changes in skin color to generate more samples of skin disease.

previous work: DermGAN (Ghorbani 2020), this is not pediatric and also a bit deterministic.


## key problems {#key-problems}


### data is scarce {#data-is-scarce}

data is not available and lack of data sharing.


### data is sensitive {#data-is-sensitive}

especially children.


### pediatric specificity {#pediatric-specificity}

we want to generate children's skin disease samples, which as vastly out of sample. The work is therefore trained on only 1000-2000ish samples.


## modeling {#modeling}

-   latent diffusion model (LDF)
-   ControlNet (Zhang 2023)---allows specific conditioning of the generation by exogenous rules


## data gym {#data-gym}


### cleaning {#cleaning}

1.  get rid of face
2.  crop for specific body part
3.  ensure anonymity, etc.


### patch extraction {#patch-extraction}

start in the upper left corner, ensure that the resulting patch has at least n% of diseases available

further, create a mask for where the disease should live


### modeling {#modeling}

train a diffusion model yay


## results {#results}

-   the diffusion model by itself does nothing
-   combined with ControlNet, life is much better and achieve higher than SOTA
