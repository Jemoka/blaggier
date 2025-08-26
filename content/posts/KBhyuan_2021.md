+++
title = "Yuan 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fcomp.2020.624488


## One-Liner {#one-liner}

Used an ERNIE trained on transcripts for classification; inclusion of pause encoding made results better.


## Novelty {#novelty}

-   Instead of just looking at actual speech content, look at pauses specific as a feature engineering task
-   \\(89.6\\%\\) on the [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}) dataset


## Notable Methods {#notable-methods}

{{< figure src="/ox-hugo/2022-06-24_20-45-47_screenshot.png" >}}

Applied FA with pause encoding with standard `.cha` semantics (short pauses, medium pauses, long pauses). Shoved all of this into an ERNIE.

Assay for performance was [LOO]({{< relref "KBhloo.md" >}})


## Key Figs {#key-figs}


### Fig 1 {#fig-1}

{{< figure src="/ox-hugo/2022-06-24_20-43-43_screenshot.png" >}}

This figure motivates the point that subjects with AD says oh and um more often; which prompted Table 1


### Table 1 {#table-1}

{{< figure src="/ox-hugo/2022-06-24_20-44-31_screenshot.png" >}}

Subjects with AD says uh a lot more often; no [significance level]({{< relref "KBhhypothesis_testing.md#significance-level" >}}) calculations but ok.


### Figure 5 {#figure-5}

{{< figure src="/ox-hugo/2022-06-24_20-55-10_screenshot.png" >}}

This figure is the result of a [LOO]({{< relref "KBhloo.md" >}}) study on the proposed model and presumably others before. X axis is the validation accuracy in question, Y is the density by which the score in X appears in an \\(N=35\\) [LOO]({{< relref "KBhloo.md" >}}) measurement.

This figure tells us that either way the ERNIE model is better than state of the art; furthermore, transcripts with pause encoding did better and did it better more of the time; that's where the 89.6% came from.


## New Concepts {#new-concepts}

-   [Leave-One-Out cross validation]({{< relref "KBhloo.md" >}})


## Notes {#notes}

Glorious.

{{< figure src="/ox-hugo/2022-06-24_20-41-41_screenshot.png" >}}