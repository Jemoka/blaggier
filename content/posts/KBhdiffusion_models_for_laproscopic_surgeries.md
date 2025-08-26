+++
title = "Diffusion Models for Laproscopic Surgeries"
author = ["Houjun Liu"]
draft = false
+++

What if we can use diffusion models to generate Laproscopic surgeries to train surgeons?


## Problem {#problem}

Asking dalle to just "generate a Laproscopic surgery" is not going to work. It will give you cartoons.


## Approach {#approach}

1.  **text problem formulation**: "grasper grasp gallbladder"
2.  encode text into latents
3.  do diffusion with late fusion of latents

Data: Cholec T-45


### Weighting {#weighting}

Scoring: Perception Prioritized Weighting + Prioritization for Signal-to-Noise

(Ho et al, 2020)


### Text {#text}

"[subject] [verb] [object] [surgical phase]"

"grasper grasp gallbladder in preparation"


### Model {#model}

Elucidated Imagen. Dall-E is very bad; Imagen-class models works better because (why?).


## Added Value to Physicians using Generated Images {#added-value-to-physicians-using-generated-images}


### Train a Classifier {#train-a-classifier}

Rendevouz Network: train a discriminator for procedure based on data augmented with generated images; 5% improvement.


### Medical Expert Survey {#medical-expert-survey}

"yo mr doctor man can you spot which one of these are generated?"

45% success rate.
