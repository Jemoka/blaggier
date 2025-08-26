+++
title = "Multimodal AI for Real-World Signals"
author = ["Houjun Liu"]
draft = false
+++

Key idea: multi-modality, when leveraged well, leads to faster convergence.


## Data Availability {#data-availability}

Health and health sensing requires labels, but health signals require specialist knowledge + broader context to label.

-   typical image labeling: 0.05/label
-   medical imaging: 4.00/label

Even if want to automate the study, we need to Kyntic style strap a thing to a person and have soft labels that we align with raw sensor data..


## Instead, Do Time-series {#instead-do-time-series}

**Instead**: run proxy self-supervised studies into the future---pretraining on a shit tone of sensor data just as timeseries regressing into the future without any labels.

Then, take the resulting latents and do FTing on specific tasks with your minimal labeled data.

"arrow of time"?


## Approaches {#approaches}

Best method: **spacial masking** + **FT downstream**; the system also generalizes well even with missing modalities.

1.  able to achieve good models via multimodal signals
2.  was able to handle missing data... by skipping them
3.  is more data efficient by doing masked pret training
4.  requires no pre-processing


## Give up and use an LLM {#give-up-and-use-an-llm}

main problem: **tokenized is very bad at splitting up numbers**.

You can therefore come up with paired architectures with some modality encoder---taking the data and encode it using a SoTA EKG encoder, for instance---before passing the embeddings into the LLM.

<https://arxiv.org/abs/2309.16058>
