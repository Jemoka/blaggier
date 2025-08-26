+++
title = "Literature Review: CultureAlign"
author = ["Houjun Liu"]
draft = false
+++

## LRCultureAlign Sukiennik: An Evaluation of Cultural Value Alignment in LLM (arXiv:2504.08863v1) {#lrculturealign-sukiennik-an-evaluation-of-cultural-value-alignment-in-llm--arxiv-2504-dot-08863v1}

Take the Values Survey Module, evaluate ground truth, prompt LMs in 1) country-native language 2) model developer language 3) across all languages with role-play based on specific human characteristics, show that GLM-4 is best aligned, and generally models are more US aligned.


## LRCultureAlign Adiga: Attention Speaks Volumes: Localizing And  Mitigating Bias In Language Models (arXiv:2410.22517v1) {#lrculturealign-adiga-attention-speaks-volumes-localizing-and-mitigating-bias-in-language-models--arxiv-2410-dot-22517v1}

Analyzing concentrated attention across protected class entities shows models' preference for one entity vs. another; intervening on the attention by rescaling the attention across entities allow bias to somewhat mitigated.


## LRCultureAlign Huang: Culturally Aware Natural Language Inference (EMNLP 2023) {#lrculturealign-huang-culturally-aware-natural-language-inference--emnlp-2023}

Dataset in the shape of NLI, for culture bias identification. MTurk labeled each generation step, while LM generated the hypotheses.


## LRCuluterAlign Li: CulturePark---Boosting Cross-cultural Understanding  in Large Language Models (arXiv:2405.15145v1) {#lrculuteralign-li-culturepark-boosting-cross-cultural-understanding-in-large-language-models--arxiv-2405-dot-15145v1}

Prompt LLMs to role-play different cultures. Fine-tuning on rollouts will improve culture evaluation on VSM.


## LRCultureAlign Naous: Having Beer after Prayer? Measuring Cultural Bias in Large Language Models (arXiv:2305.14456v4) {#lrculturealign-naous-having-beer-after-prayer-measuring-cultural-bias-in-large-language-models--arxiv-2305-dot-14456v4}

Made a Blimp-y dataset (continuation, NER, story generation) and found that a lot of Muslim cultural norms are ignored in favor of wester value.


## LRCultureAlign Ziems: Multi-VALUE: A Framework for Cross-Dialectal English NLP (ACL 2023) {#lrculturealign-ziems-multi-value-a-framework-for-cross-dialectal-english-nlp--acl-2023}

Uses rules based translation to change Standard American English to other forms, found that LMs perform worse after perturbation on a serious of tasks.


## LRCultureAlign Khan: Randomness, Not Representation: The Unreliability of Evaluating Cultural Alignment in LLMs (arXiv:2503.08688v2) {#lrculturealign-khan-randomness-not-representation-the-unreliability-of-evaluating-cultural-alignment-in-llms--arxiv-2503-dot-08688v2}

Culture evaluation results are extremely variant under different testing methodologies. Slight variations break and change benchmark.


## LRCultureAlign Xiao: Task-Agnostic Low-Rank Adapters for Unseen English Dialects (EMNLP 2023) {#lrculturealign-xiao-task-agnostic-low-rank-adapters-for-unseen-english-dialects--emnlp-2023}

Stick a LoRA between dialect feature network and then the adapter weights to perform alignment


## LRCuluterAlign Ryan: Unintended Impacts of LLM Alignment on Global Representation (arXiv:2402.15018v2) {#lrculuteralign-ryan-unintended-impacts-of-llm-alignment-on-global-representation--arxiv-2402-dot-15018v2}

Alignment improves capabilities a few languages, but rewards lower to other places. i.e., alignment makes things more American centric.
