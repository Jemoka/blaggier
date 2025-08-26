+++
title = "Balagopalan 2021"
author = ["Houjun Liu"]
tags = ["ntj"]
draft = false
+++

DOI: 10.3389/fnagi.2021.635945


## One-Liner {#one-liner}

extracted lexicographic and syntactical features from [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}) data and trained it on various models, with BERT performing the best.


## Novelty {#novelty}

???????

Seems like results here are a strict subset of [Zhu 2021]({{< relref "KBhzhu_2021.md" >}}). Same sets of dataprep of [Antonsson 2021]({{< relref "KBhantonsson_2021.md" >}}) but trained on a BERT now. Seem to do worse than [Antonsson 2021]({{< relref "KBhantonsson_2021.md" >}}) too.


## Notable Methods {#notable-methods}

Essentially [Antonsson 2021]({{< relref "KBhantonsson_2021.md" >}})

-   Also performed [MMSE]({{< relref "KBhmmse.md" >}}) score regression.


## Key Figs {#key-figs}


### Table 7 training result {#table-7-training-result}

{{< figure src="/ox-hugo/2022-06-25_11-47-38_screenshot.png" >}}

This figure shows us that the results attained by training on extracted feature is past the state-of-the-art at the time.


### Table 4 {#table-4}

{{< figure src="/ox-hugo/2022-06-25_11-48-55_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-06-25_11-48-59_screenshot.png" >}}

These tables tells us the feature extracted