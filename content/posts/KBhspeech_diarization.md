+++
title = "Transformer Speech Diarization"
author = ["Houjun Liu"]
draft = false
+++

## Background {#background}

Current deep-learning first approaches have shown promising results for the speech text diarization task. For ASR-independent diarization, specifically, two main methods appear as yielding fruitful conclusions:

1.  Auditory feature extraction using deep learning to create a trained, fixed-size latent representation via Mel-frequency cepstral coefficients slices that came from any existing voice-activity detection (VAD) scheme ((<a href="#citeproc_bib_item_14">Snyder et al. 2018</a>)), where the features extracted with the neural network are later used with traditional clustering and Variational Bayes refinement ((<a href="#citeproc_bib_item_12">Sell et al. 2018</a>; <a href="#citeproc_bib_item_6">Landini et al. 2022</a>)) approaches to produce groups of diarized speakers
2.  End-to-end neural approaches which takes temporally-dependent log-mel-frequency cepstrum and perform voice activity detection, speaker recognition, and diarization directly on the same neural network ((<a href="#citeproc_bib_item_3">Fujita, Kanda, Horiguchi, Xue, et al. 2019</a>))

    {{< figure src="/ox-hugo/2023-04-09_23-26-04_screenshot.png" caption="<span class=\"figure-number\">Figure 1: </span><&fujita2019end1>" >}}

The latter, end-to-end approach (EEND), offers lower Diarization Error Rate (DER) than former clustering ((<a href="#citeproc_bib_item_3">Fujita, Kanda, Horiguchi, Xue, et al. 2019</a>)), achiving 10.76 vs. 11.53 DER on the CALLHOME dataset respectively. However, it confers a few disadvantages: the end-to-end system produces a diarization result directly dependent on the time dimension of the input Log-Mel (i.e. it outputs probability per speaker per time slice), so its error could include _both_ the error in voice activity detection and diarization; furthermore, the one-shot nature of this method allows no interpretation or manipulation of its actual outputs---such as specifying the number of speakers _after_ diarization is completed (as is possible with clustering because one could simply choose the number of centroids to calculate) (<a href="#citeproc_bib_item_9">Park et al. 2021</a>).

We therefore desire here to combine the advantages of both methods discussed here in producing a diarization technique that both retains the flexible nature of vector-based approaches but also seeks to generate as complete and performant (in terms of DER) a pipeline as possible with deep learning.


## Motivations {#motivations}

The discussion here is motivated by a few facts:

1.  Excellent ((<a href="#citeproc_bib_item_11">Radford et al. 2022</a>)) ASR models exist without being pre-trained on the diarization task, meaning they produce well-timed transcriptions without the speakers labels
2.  Well performing forced-alignment tools exist (<a href="#citeproc_bib_item_8">McAuliffe et al. 2017</a>), which can be applied on-top-of rough voice activity segments from assumption `#1` (for instance, by reading attention activations; or by concatenating rough word timings).
3.  The number of speakers is not exogenously known, yet could be specified after diarization completes.


## Proposal {#proposal}

One of the latest advances for EEND-class models leverages the reasonably novel Convolutional Transformer ("Conformer") architecture ((<a href="#citeproc_bib_item_4">Gulati et al. 2020</a>)) to improve the performance of the model. Specifically, the model swaps the time-delayed fully connected blocks in favor of Conformer blocks, and mixes in the SpecAugment data augmentation technique for the Log-Mel frequency input ((<a href="#citeproc_bib_item_7">Liu et al. 2021</a>)). We will use this new model both as the basis of our work, as well as the benchmark to improve upon for diarization results.


### Text-Aware (Near) End-to-End Approach {#text-aware--near--end-to-end-approach}

{{< figure src="/ox-hugo/2023-04-11_22-49-01_screenshot.png" >}}

Contextual and positional information (for instance, raving pronoun use) provides a useful basis by which humans recognize the flow of an utterance used to diarize speech.

Assumption `#2` above indicates that one could identify segments of text transcripts corresponding to the input audio---albeit not diarized. We hypothesize that leveraging the information from text transcripts (even if not tightly aligned) will help the model track the flow of conversation and get better diarization performance.

In the figure above, we specifically chose the Transformer BERT encoder ((<a href="#citeproc_bib_item_1">Devlin et al. 2018</a>)) to process a segment of text ASR corresponding to the input log-mel audio. The processed Bert latents are added and statistically pooled to the Conformer outputs from processing the audio signals; the fused embeddings are then passed through a fully-connected classification head for the usual labeling consistent with EEND ((<a href="#citeproc_bib_item_2">Fujita, Kanda, Horiguchi, Nagamatsu, et al. 2019</a>)).

By training a multimodal scheme in this manner, we hope to demonstrate an improved level of performance which fusing ASR text can provide to the diarization task.


### Improved X-Vector via Conformers {#improved-x-vector-via-conformers}

Design constraint `#3` which we outlined earlier was the desire to identify extogenously the number of speakers. While an extension below explores the possibility of this in an end-to-end architecture, conventional probabilistic clustering methods (even including neural components, such as (<a href="#citeproc_bib_item_14">Snyder et al. 2018</a>)) allow manually specified clusters to be created and tagged using PLDA ((<a href="#citeproc_bib_item_5">Kenny et al. 2013</a>)) or HMMs ((<a href="#citeproc_bib_item_6">Landini et al. 2022</a>)).

One direct extension to this approach would be the use of the Conformer architecture highlighted above in place of the fully-connected network ((<a href="#citeproc_bib_item_13">Snyder et al. 2017</a>)) which forms the basis of the x-vector approach.

To perform this, the x-vector representations would be swapped directly for the final latent from the EEND Conformer architecture prior to the fully-connected prediction head. All other post-processing of x-vectors, we hypothesize, could be applied to the new latents with minimal changes.

Specifically, convolution self-attention in the Conformer architecture work in a similar pattern to ((<a href="#citeproc_bib_item_10">Peddinti, Povey, and Khudanpur 2015</a>)) to scan across time frames; however, self-attention is a trained parameter, allowing the timescale dependence to be adaptive to the context provided.

Further adaptive training---including training on previously segmented voice activity, and/or taking MFCC instead of Log-Mel as input---maybe needed mostly following the training objectives in ((<a href="#citeproc_bib_item_14">Snyder et al. 2018</a>)) in order for the latent vectors to reflect the characteristics of new, unknown speakers.


### Other Possibilities {#other-possibilities}


#### Text and Vectors {#text-and-vectors}

One direct correlary of the two proposals above is simply concatenating the novelty of each: creating text+audio transformer based latent embeddings as the basis for speaker clustering.


#### Speaker-Count Signal {#speaker-count-signal}

Clustering approaches, although more explainable, does confer some disadvantages. For instance, it will have no good way forward to predict overlapping speakers (as "a speaker similar to both A and B" would appear in a similar place in the latent space as "A and B are crosstalking").

Returning to the EEND approach, however, brings into focus the question regarding speaker count. One possibility for addressing this involves injecting an extra token---either in the "text" portion of the multimodal implementation, or perhaps simply fused into the input of the original diarizing Conformer (i.e. (<a href="#citeproc_bib_item_7">Liu et al. 2021</a>))---representing the number of speakers.

Then, we will add a large negative positive term to the loss associated with incorrectly-used (i.e. out of bounds) speaker ID classes.

Unfortunately, because of the minimal weight of one speaker-count feature compared to the audio sample, and the Gaussian nature of neural networks, this method will provide no garantees regarding the actual diarization outputs.



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Devlin, Jacob, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2018. “Bert: Pre-Training of Deep Bidirectional Transformers for Language Understanding.” <i>arXiv Preprint arXiv:1810.04805</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Fujita, Yusuke, Naoyuki Kanda, Shota Horiguchi, Kenji Nagamatsu, and Shinji Watanabe. 2019. “End-to-End Neural Speaker Diarization with Permutation-Free Objectives.” <i>arXiv Preprint arXiv:1909.05952</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Fujita, Yusuke, Naoyuki Kanda, Shota Horiguchi, Yawen Xue, Kenji Nagamatsu, and Shinji Watanabe. 2019. “End-to-End Neural Speaker Diarization with Self-Attention.” In <i>2019 IEEE Automatic Speech Recognition and Understanding Workshop (ASRU)</i>, 296–303. IEEE.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Gulati, Anmol, James Qin, Chung-Cheng Chiu, Niki Parmar, Yu Zhang, Jiahui Yu, Wei Han, et al. 2020. “Conformer: Convolution-Augmented Transformer for Speech Recognition.” arXiv. <a href="http://arxiv.org/abs/2005.08100">http://arxiv.org/abs/2005.08100</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Kenny, Patrick, Themos Stafylakis, Pierre Ouellet, Md. Jahangir Alam, and Pierre Dumouchel. 2013. “PLDA for Speaker Verification with Utterances of Arbitrary Duration.” In <i>2013 IEEE International Conference on Acoustics, Speech and Signal Processing</i>, 7649–53. Vancouver, BC, Canada: IEEE. doi:<a href="https://doi.org/10.1109/ICASSP.2013.6639151">10.1109/ICASSP.2013.6639151</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Landini, Federico, Ján Profant, Mireia Diez, and Lukáš Burget. 2022. “Bayesian HMM Clustering of X-Vector Sequences (VBx) in Speaker Diarization: Theory, Implementation and Analysis on Standard Tasks.” <i>Computer Speech &#38; Language</i> 71 (January): 101254. doi:<a href="https://doi.org/10.1016/j.csl.2021.101254">10.1016/j.csl.2021.101254</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Liu, Yi Chieh, Eunjung Han, Chul Lee, and Andreas Stolcke. 2021. “End-to-End Neural Diarization: From Transformer to Conformer.” In <i>Interspeech 2021</i>, 3081–85. doi:<a href="https://doi.org/10.21437/Interspeech.2021-1909">10.21437/Interspeech.2021-1909</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>McAuliffe, Michael, Michaela Socolof, Sarah Mihuc, Michael Wagner, and Morgan Sonderegger. 2017. “Montreal Forced Aligner: Trainable Text-Speech Alignment Using Kaldi.” In <i>Interspeech</i>, 2017:498–502.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Park, Tae Jin, Naoyuki Kanda, Dimitrios Dimitriadis, Kyu J. Han, Shinji Watanabe, and Shrikanth Narayanan. 2021. “A Review of Speaker Diarization: Recent Advances with Deep Learning.” arXiv. <a href="http://arxiv.org/abs/2101.09624">http://arxiv.org/abs/2101.09624</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Peddinti, Vijayaditya, Daniel Povey, and Sanjeev Khudanpur. 2015. “A Time Delay Neural Network Architecture for Efficient Modeling of Long Temporal Contexts.” In <i>Interspeech 2015</i>, 3214–18. ISCA. doi:<a href="https://doi.org/10.21437/Interspeech.2015-647">10.21437/Interspeech.2015-647</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Radford, Alec, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, and Ilya Sutskever. 2022. “Robust Speech Recognition via Large-Scale Weak Supervision.” <i>arXiv Preprint arXiv:2212.04356</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>Sell, Gregory, David Snyder, Alan McCree, Daniel Garcia-Romero, Jesús Villalba, Matthew Maciejewski, Vimal Manohar, et al. 2018. “Diarization Is Hard: Some Experiences and Lessons Learned for the JHU Team in the Inaugural DIHARD Challenge.” In <i>Interspeech 2018</i>, 2808–12. ISCA. doi:<a href="https://doi.org/10.21437/Interspeech.2018-1893">10.21437/Interspeech.2018-1893</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>Snyder, David, Daniel Garcia-Romero, Daniel Povey, and Sanjeev Khudanpur. 2017. “Deep Neural Network Embeddings for Text-Independent Speaker Verification.” In <i>Interspeech 2017</i>, 999–1003. ISCA. doi:<a href="https://doi.org/10.21437/Interspeech.2017-620">10.21437/Interspeech.2017-620</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_14"></a>Snyder, David, Daniel Garcia-Romero, Gregory Sell, Daniel Povey, and Sanjeev Khudanpur. 2018. “X-Vectors: Robust DNN Embeddings for Speaker Recognition.” In <i>2018 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</i>, 5329–33. Calgary, AB: IEEE. doi:<a href="https://doi.org/10.1109/ICASSP.2018.8461375">10.1109/ICASSP.2018.8461375</a>.</div>
</div>
