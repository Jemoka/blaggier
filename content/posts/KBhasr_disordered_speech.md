+++
title = "ASR on Disordered Speech"
author = ["Houjun Liu"]
draft = false
+++

After a brief survey of current literature, it appears that no standardized benchmarks for ASR on clinical data exists that are widely used. Given the vast resources available from the TalkBank corpus, it is not infeasible to build such a corpus and evaluate the performance of a few commercial ASR systems in its ability to perform such a task.

Despite there not being a single baseline that works to benchmark ASR on clinical datasets, a few different subsets of efforts exists on each component of this front.


## Evaluation Datasets {#evaluation-datasets}

As perhaps an exemplar to the lack of standardization in ASR performance evaluation, the Whisper ASR model ((NO_ITEM_DATA:radford2022robust)) was not evaluated on one particular benchmark but instead a series of multi-domain benchmarks.

This is perhaps for good reason, recent results (discuses below) show that single-domain benchmarks do not describe performance well across other domains, or even other usage methods. Therefore, the battery of different tests done by (<a href="#citeproc_bib_item_6">Radford et al. 2022</a>) could be essentially thought of as a single battery of multi-usage tests that covers a good span of recent-standard ASR performance tests; among them:


### Standard Datasets {#standard-datasets}

-   CORAAL: a dataset of high-quality **lower-fidelity recordings** of African-American vernacular of varying degrees in conversation (incl. cross talk, etc.) ((<a href="#citeproc_bib_item_2">Farrington and Kendall 2021</a>))
-   EARNINGS: a set of benchmark datasets of **earnings calls** within various financial industries ((<a href="#citeproc_bib_item_7">Rio et al. 2021</a>))
-   TED-LIUM 3: a dataset of **high-fidelity recordings** of full-length TED talks ((<a href="#citeproc_bib_item_3">Hernandez et al. 2018</a>))

In addition to the three evaluation datasets provided, the entire model was also trained on (<a href="#citeproc_bib_item_4">Panayotov et al. 2015</a>), a gold-standard corpus of open-source **high-fidelity recordings** of audiobooks.


### "Home brew" Benchmarks {#home-brew-benchmarks}

In addition to the three published, standard datasets above, Radford et al. also used a series of self-selected datasets of varying quality.

1.  Rev16: Rev.AI's **clean podcast** transcription dataset <https://www.rev.ai/blog/podcast-transcription-benchmark-part-1/>
2.  Meanwhile: Recordings of Stephen Colbert's Meanwhile segments
3.  Kinkaid46: ....apparently a selection of YouTube videos from this guy's blog post: <https://medium.com/descript/which-automatic-transcription-service-is-the-most-accurate-2018-2e859b23ed19>


## Evaluation Metrics {#evaluation-metrics}

Most benchmarks still report results in terms of word-error-rate (WER) and the standard lexical distance metric of BLEU ((<a href="#citeproc_bib_item_5">Papineni et al. 2001</a>)). These are two generally well-accepted ways of reporting ASR performance, and for most of the datasets cited above suffice.

However, some very recent results ((<a href="#citeproc_bib_item_8">Shor et al. 2023</a>)) indicate that BLEU and WER themselves do not capture a good view for what would be clinically relevant data. Some ASR mistakes (such as that on the investigator, or that which doesn't relate to the disfluency being observed) matter a lot less than others (errors on the participant, esp. missing filled pauses, wrongly coded utterances etc.). The work by Shor et al. presents also an alternative metric to quantify such errors: essentially training a BERT model ((<a href="#citeproc_bib_item_1">Devlin et al. 2018</a>)) to perform the classification task of "clinician preference" (i.e. "predict which of these errors would be less problematic to a clinician"), then using the results of that model to evaluate the ASR performance.

This last method is likely overkill. However, it is useful to discuss if richer information--such as special binning for missing clinically significant markers, like filled pauses---in addition to simple BLEU and WER will be useful as we develop our own benchmarks.


## Discussion {#discussion}

(<a href="#citeproc_bib_item_9">Szymański et al. 2020</a>) (sec. 3, "Call to Action) offers some guidance with regards to the design of robust ASR benchmarks. Among which:

1.  Higher quality annotations, like morphology information we provide with %mor, to help aid language model training
2.  Broader range of human diects and variations covered
3.  Performance across many recording domains (various processing of audio signals, properties of the signal itself, etc.)

Though TalkBank contains a wealth of data, individual corpuses often have little variation, which Szymańki et. al. shows cause degraded performance. Therefore, it is useful to create a benchmark that strives across multiple problem domains and recording schemes to be able to provide a reproducible and more accurate benchmark of a given model.

Szymańki et. al. also brought up another issue through their paper: "due to legal constraints ... we are not able to provide the community with neither the benchmark data nor the detailed information about evaluated systems." ((<a href="#citeproc_bib_item_9">Szymański et al. 2020</a>), section 2.) The anonymization of benchmarked models seen in both Szymańki et. al. and Radford et. al. may point to a certain legal barrier in specifically benchmarking existing, commercial ASR models.



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Devlin, Jacob, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2018. “Bert: Pre-Training of Deep Bidirectional Transformers for Language Understanding.” <i>arXiv Preprint arXiv:1810.04805</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Farrington, Charlie, and Tyler Kendall. 2021. “The Corpus of Regional African American Language.” doi:<a href="https://doi.org/10.7264/1AD5-6T35">10.7264/1AD5-6T35</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Hernandez, François, Vincent Nguyen, Sahar Ghannay, Natalia Tomashenko, and Yannick Estève. 2018. “TED-LIUM 3: Twice as Much Data and Corpus Repartition for Experiments on Speaker Adaptation,” 11096:198–208. doi:<a href="https://doi.org/10.1007/978-3-319-99579-3_21">10.1007/978-3-319-99579-3_21</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Panayotov, Vassil, Guoguo Chen, Daniel Povey, and Sanjeev Khudanpur. 2015. “Librispeech: An ASR Corpus Based on Public Domain Audio Books.” In <i>2015 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</i>, 5206–10. South Brisbane, Queensland, Australia: IEEE. doi:<a href="https://doi.org/10.1109/ICASSP.2015.7178964">10.1109/ICASSP.2015.7178964</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Papineni, Kishore, Salim Roukos, Todd Ward, and Wei-Jing Zhu. 2001. “BLEU: A Method for Automatic Evaluation of Machine Translation.” In <i>Proceedings of the 40th Annual Meeting on Association for Computational Linguistics - ACL ’02</i>, 311. Philadelphia, Pennsylvania: Association for Computational Linguistics. doi:<a href="https://doi.org/10.3115/1073083.1073135">10.3115/1073083.1073135</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Radford, Alec, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, and Ilya Sutskever. 2022. “Robust Speech Recognition via Large-Scale Weak Supervision.” <i>arXiv Preprint arXiv:2212.04356</i>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Rio, M., Natalie Delworth, R. Westerman, Michelle Huang, Nishchal Bhandari, Joseph Palakapilly, Quinten McNamara, Joshua Dong, Piotr Żelasko, and Miguel Jette. 2021. “Earnings-21: A Practical Benchmark for ASR in the Wild.” <i>ArXiv</i>. doi:<a href="https://doi.org/10.21437/Interspeech.2021-1915">10.21437/Interspeech.2021-1915</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Shor, Joel, Ruyue Agnes Bi, Subhashini Venugopalan, Steven Ibara, Roman Goldenberg, and Ehud Rivlin. 2023. “Clinical BERTScore: An Improved Measure of Automatic Speech Recognition Performance in Clinical Settings.” arXiv. <a href="http://arxiv.org/abs/2303.05737">http://arxiv.org/abs/2303.05737</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Szymański, Piotr, Piotr Żelasko, Mikolaj Morzy, Adrian Szymczak, Marzena Żyła-Hoppe, Joanna Banaszczak, Lukasz Augustyniak, Jan Mizgajski, and Yishay Carmiel. 2020. “WER We Are and WER We Think We Are.” <i>Findings of the Association for Computational Linguistics: EMNLP 2020</i>, 3290–95. doi:<a href="https://doi.org/10.18653/v1/2020.findings-emnlp.295">10.18653/v1/2020.findings-emnlp.295</a>.</div>
  <div class="csl-entry">NO_ITEM_DATA:radford2022robust)</div>
</div>
