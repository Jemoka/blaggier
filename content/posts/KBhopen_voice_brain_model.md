+++
title = "Open Voice Brain Model"
author = ["Houjun Liu"]
draft = false
+++

The [Open Voice Brain Model]({{< relref "KBhopen_voice_brain_model.md" >}}) is a audio processing architecture proposed by [Laguarta 2021]({{< relref "KBhlaguarta_2021.md" >}}) for audio/biomarker correlation work.

Here's a fairly self-explanatory figure:

{{< figure src="/ox-hugo/2022-06-24_21-36-29_screenshot.png" >}}

The model outputs an AD diagnoses as well as a longitudinal correlation with Memory, Mood, and Respiratory biomarkers.

{{< figure src="/ox-hugo/2022-06-24_21-38-42_screenshot.png" >}}

This is then the embedding that they are proposing for use by other tasks.