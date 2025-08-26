+++
title = "Speech Feature Extraction"
author = ["Houjun Liu"]
draft = false
+++

-   take audio
-   calculate [Mel Scale]({{< relref "KBhmel_scale.md" >}}) representation
-   apply a series of [Filter Bank]({{< relref "KBhfilter_bank.md" >}})s which attenuates the input to highlight groups of frequencies

    {{< figure src="/ox-hugo/2023-10-20_14-50-55_screenshot.png" >}}

-   we then run a discrete-cosine transform to obtain [MFCC]({{< relref "KBhspeech_feature_extraction.md" >}})s, because much of the output results will still correlate with each other
