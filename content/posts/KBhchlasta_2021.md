+++
title = "Chlasta 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fpsyg.2020.623237


## One-Liner (thrice) {#one-liner--thrice}

1.  Used features extracted by [VGGish]({{< relref "KBhvggish.md" >}}) from raw acoustic audio against a SVM, Perceptron, 1NN; got \\(59.1\\%\\) classif. accuracy for dementia
2.  Then, trained a CNN on raw wave-forms and got \\(63.6\\%\\) accuracy
3.  Then, they fine-tuned a [VGGish]({{< relref "KBhvggish.md" >}}) on the raw wave-forms and didn't report their results and just said "we discovered that audio transfer learning with a pretrained VGGish feature extractor performs better" Gah!


## Novelty {#novelty}

Threw the kitchen sink to process only raw acoustic input, most of it missed; wanted 0 human involvement. It seems like last method is promising.


## Notable Methods {#notable-methods}

fine-tuning [VGGish]({{< relref "KBhvggish.md" >}}) against raw acoustic waveforms to build a classifier via a CNN.


## Key Figs {#key-figs}


### Their fancy network {#their-fancy-network}

{{< figure src="/ox-hugo/2022-06-23_23-37-51_screenshot.png" >}}

Its just a CNN afaik with much maxpooling; could have used some skipped connections. I wonder if it overfit?


### Their actual training results {#their-actual-training-results}

{{< figure src="/ox-hugo/2022-06-23_23-38-34_screenshot.png" >}}

Looks generally pretty bad, but a run of their DemCNN seem to have gotten state-of-the-art results. Not sure where transfer training data went.


## New Concepts {#new-concepts}

-   [VGGish]({{< relref "KBhvggish.md" >}})


## Notes {#notes}


### Accuracy question {#accuracy-question}

According to this the state of the art at the time from pure audio was 56.6%? For a binary classifier isn't that just doing nothing?

{{< figure src="/ox-hugo/2022-06-23_23-39-31_screenshot.png" >}}

So somebody did get better before?