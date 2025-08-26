+++
title = "Forced-Alignment Error for Feature Extraction for Acoustic AD Detection"
author = ["Houjun Liu"]
draft = false
+++

## Abstract {#abstract}

Alzheimer's Disease (AD) is a demonstrativeness disease marked by declines in cognitive function. Despite early diagnoses being critical for AD prognosis and treatment, currently accepted diagnoses mechanisms for AD requires clinical outpatient testing with a medical professional, which reduces its accessibility. In this work, we propose a possible feature extraction mechanism leveraging the previously demonstrated errors of Hidden Markov-based forced alignment (FA) tools upon cognitively impaired patients as an automated means to quantify linguistic disfluency.


## Background {#background}

Annotated linguistic disfluency features, used in combination with semantic features, have been shown ((<a href="#citeproc_bib_item_1">Antonsson et al. 2021</a>)) to improve the accuracy of AD classification systems. However, manual annotation of disfluency hinders the throughput of AD detection systems. Furthermore, there is a dearth ((<a href="#citeproc_bib_item_2">Guo et al. 2021</a>)) of data provided with preexisting annotated results.

Existing acoustic-only approaches ((<a href="#citeproc_bib_item_4">Lindsay, Tröger, and König 2021</a>; <a href="#citeproc_bib_item_6">Shah et al. 2021</a>)) frequently places focus on the actual speech features such as silence, energy, rate, or loudness. While this approach has returned promising results ((<a href="#citeproc_bib_item_8">Wang et al. 2019</a>)), it renders the acoustic data features extracted independent of actual linguistic disfluency. Of course, some approaches (including that in (<a href="#citeproc_bib_item_8">Wang et al. 2019</a>)) perform separate, manual annotation on both aspects and treat them jointly with late fusion. However, no existing approaches have an effective feature representation that bridges the acoustic-linguistic gap.

An incidental effect of Hidden Markov Model (HMM) based Viterbi forced alignment (FA) tools (such as P2FA) is that its quality is shown ((<a href="#citeproc_bib_item_5">Saz et al. 2009</a>)) to be lowered in cognitively impaired speakers, resulting from a roughly \\(50\\%\\) decrease in power of discrimination between stressed and unstressed vowels. Other ASR and FA approaches ((<a href="#citeproc_bib_item_7">Tao, Xueqing, and Bian 2010</a>)) has since been designed discriminate against such changes more effectively.


## Proposal {#proposal}

By encoding FA results of HMM based approaches in embedding space, we introduce a novel feature representation of acoustic information. As FA requires an existing transcript, this method is considered semi-automated because the test must be either administered via a common-transcript, transcribed manually later, or transcribed using ASR techniques. After encoding, the proposed feature can be used in a few ways.


### Euclidean distance {#euclidean-distance}

The Euclidean Distance approach compares the embedding of the HMM FA vector with a "reference" benchmark via pythagoras in high dimension.

There are two possible modalities by which the "reference" can be acquired; if the data was sourced via the patient sample reading a standardized transcript, a reference FA sample could be provided via the audio of another individual reading the same transcript screened traditionally screened without AD. Therefore, the "deviation from reference" would be used as an input feature group to any proposed model architectures.

Alternatively, as stated before, other FA approaches are less susceptible to lexical hindrances with decreased discriminatory power. Therefore, we could equally take the Euclidean distance between embedded results of two different FA mechanisms---one shown to be more sustainable to cognitively impaired speakers and one not---as input features to training architectures.


### Cross-Attention {#cross-attention}

One key issue with the Euclidean Distance approach is that the difference between "normal" pauses, changes in speaker pace, etc. which would be variable between different speakers even controlling for AD prognoses.

In computer vision, few-shot classification cross-attention ((<a href="#citeproc_bib_item_3">Hou et al. 2019</a>)) has shown promising results in discrimination; furthermore, trainable cross-attention ensures more flexible control to non-prognostic verbal disturbances such as a normal change in pace which would otherwise cause a large difference in the Euclidean Distance approach.

In practice, a model similar to that proposed by ((<a href="#citeproc_bib_item_3">Hou et al. 2019</a>)) would be used as the basis to encode (or even discriminate) between pairwise samples of different FA approaches or against a non-AD control, as per highlighted in the section above.


### As input features {#as-input-features}

Of course, the raw FA embedding can be used as an input feature. There are less prior work on this front as this project would be, as far as we know, proposing the use of forced aligner outputs as a feature input heuristic.



## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Antonsson, Malin, Kristina Lundholm Fors, Marie Eckerström, and Dimitrios Kokkinakis. 2021. “Using a Discourse Task to Explore Semantic Ability in Persons with Cognitive Impairment.” <i>Frontiers in Aging Neuroscience</i> 12 (January): 607449. doi:<a href="https://doi.org/10.3389/fnagi.2020.607449">10.3389/fnagi.2020.607449</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Guo, Yue, Changye Li, Carol Roan, Serguei Pakhomov, and Trevor Cohen. 2021. “Crossing the ‘Cookie Theft’ Corpus Chasm: Applying What BERT Learns from Outside Data to the ADReSS Challenge Dementia Detection Task.” <i>Frontiers in Computer Science</i> 3 (April): 642517. doi:<a href="https://doi.org/10.3389/fcomp.2021.642517">10.3389/fcomp.2021.642517</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Hou, Ruibing, Hong Chang, Bingpeng Ma, Shiguang Shan, and Xilin Chen. 2019. “Cross Attention Network for Few-Shot Classification.” <i>Advances in Neural Information Processing Systems</i> 32.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Lindsay, Hali, Johannes Tröger, and Alexandra König. 2021. “Language Impairment in Alzheimer’s Disease—Robust and Explainable Evidence for AD-Related Deterioration of Spontaneous Speech through Multilingual Machine Learning.” <i>Frontiers in Aging Neuroscience</i> 13 (May): 642033. doi:<a href="https://doi.org/10.3389/fnagi.2021.642033">10.3389/fnagi.2021.642033</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Saz, Oscar, Javier Simón, W Ricardo Rodr\’ıguez, Eduardo Lleida, and Carlos Vaquero. 2009. “Analysis of Acoustic Features in Speakers with Cognitive Disorders and Speech Impairments.” <i>Eurasip Journal on Advances in Signal Processing</i> 2009. Springer: 1–11.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Shah, Zehra, Jeffrey Sawalha, Mashrura Tasnim, Shi-ang Qi, Eleni Stroulia, and Russell Greiner. 2021. “Learning Language and Acoustic Models for Identifying Alzheimer’s Dementia from Speech.” <i>Frontiers in Computer Science</i> 3 (February): 624659. doi:<a href="https://doi.org/10.3389/fcomp.2021.624659">10.3389/fcomp.2021.624659</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Tao, Ye, Li Xueqing, and Wu Bian. 2010. “A Dynamic Alignment Algorithm for Imperfect Speech and Transcript.” <i>Computer Science and Information Systems</i> 7 (1): 75–84. doi:<a href="https://doi.org/10.2298/CSIS1001075T">10.2298/CSIS1001075T</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Wang, Tianqi, Chongyuan Lian, Jingshen Pan, Quanlei Yan, Feiqi Zhu, Manwa L. Ng, Lan Wang, and Nan Yan. 2019. “Towards the Speech Features of Mild Cognitive Impairment: Universal Evidence from Structured and Unstructured Connected Speech of Chinese.” In <i>Interspeech 2019</i>, 3880–84. ISCA. doi:<a href="https://doi.org/10.21437/Interspeech.2019-2414">10.21437/Interspeech.2019-2414</a>.</div>
</div>