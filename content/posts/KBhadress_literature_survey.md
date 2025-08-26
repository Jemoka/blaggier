+++
title = "ADReSS Literature Survey Index"
author = ["Houjun Liu"]
tags = ["index"]
draft = false
+++

The [ADReSS Literature Survey]({{< relref "KBhadress_literature_survey.md" >}}) is a literature survey for the results published during the [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}).

-   [Antonsson 2021]({{< relref "KBhantonsson_2021.md" >}}): disfluency + [SVF]({{< relref "KBhsemantic_verbal_fluency.md" >}}) features trained on SVM: lexical &gt;  narrative qual.
-   [Chlasta 2021]({{< relref "KBhchlasta_2021.md" >}}): features extracted from [VGGish]({{< relref "KBhvggish.md" >}}) on SVM; also trained new CNN from .wav.
-   [Sadeghian 2021]({{< relref "KBhsadeghian_2021.md" >}}): Used [GA]({{< relref "KBhgenetic_algorithum.md" >}}) for feature sel., achieved 94% w/ [MMSE]({{< relref "KBhmmse.md" >}}) alone; dev'd [ASR]({{< relref "KBhasr.md" >}}) tool.
-   [Martinc 2021]({{< relref "KBhmartinc_2021.md" >}}): CBOW (text) + [ADR]({{< relref "KBhactive_data_representation.md" >}}) (sound) [late fusion'd]({{< relref "KBhfusion.md#late-fusion" >}}) to a BERT, ablated for features.
-   [Meghanani 2021]({{< relref "KBhmeghanani_2021.md" >}}): spontaneous speech transcripts with fastText and CNN; 83.33% acc.
-   [Yuan 2021]({{< relref "KBhyuan_2021.md" >}}): ERNIE on transcripts with pause encoding; 89.6% acc.
-   [Jonell 2021]({{< relref "KBhjonell_2021.md" >}}): Developed a kitchen sink of diag. tools and correlated it with biomarkers.
-   [Laguarta 2021]({{< relref "KBhlaguarta_2021.md" >}}): multimodel ([OVBM]({{< relref "KBhopen_voice_brain_model.md" >}})) to embed auditory info + biomarkers for clsf.
-   [Shah 2021]({{< relref "KBhshah_2021.md" >}}): [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) of n-gram and [OpenSMILE]({{< relref "KBhopensmile.md" >}}) on std. classifiers.
-   [Lindsay 2021]({{< relref "KBhlindsay_2021.md" >}}): Cross-linguistic markers shared for AD patients between English and French.
-   [Zhu 2021]({{< relref "KBhzhu_2021.md" >}}): [late fusion]({{< relref "KBhfusion.md#late-fusion" >}}) of [CTP]({{< relref "KBhctp.md" >}}) task for AD clsf. w/ transf., mobilenet, yamnet, mockingjay.
-   [Guo 2021]({{< relref "KBhguo_2021.md" >}}): WLS data to augment [CTP]({{< relref "KBhctp.md" >}}) from [ADReSS Challenge]({{< relref "KBhadress_challenge.md" >}}) and trained it on a BERT.
-   [Balagopalan 2021]({{< relref "KBhbalagopalan_2021.md" >}}): lexo. and synt. features trained on a BERT and other models.
-   [Mahajan 2021]({{< relref "KBhmahajan_2021.md" >}}): a bimodal model on speech/text with GRU on speech and CNN-LSTM on text.
-   [Parvin 2020]({{< relref "KBhparvin_2020.md" >}}): excercize scheme effects on [theta/alpha ratio]({{< relref "KBhtheta_alpha_ratio.md" >}}) and Brain wave frequency.
-   [Luz 2021]({{< relref "KBhluz_2021.md" >}}): review paper presenting the ADReSSo challenge and current baselines.

From [Meghanani 2021]({{< relref "KBhmeghanani_2021.md" >}}), a review:

{{< figure src="/ox-hugo/2022-06-24_00-32-54_screenshot.png" >}}