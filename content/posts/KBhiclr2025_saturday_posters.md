+++
title = "ICLR2025 Saturday Posters"
author = ["Houjun Liu"]
draft = false
+++

## ICLR2025 Cassidy: AssistanceZero {#iclr2025-cassidy-assistancezero}

1.  Train reward predictor to also have rewards at test time
2.  MCTS
3.  Learn to match root node KL


## ICLR2025 Liu: synthesizing programmatic reinforcement learning policies with LLM guided search {#iclr2025-liu-synthesizing-programmatic-reinforcement-learning-policies-with-llm-guided-search}

Hill climbing with partial mutations of generated programs of LLMs


## ICLR2025 Weller: l PromptTrirver {#iclr2025-weller-l-prompttrirver}

??


## ICLR2025 Yu: robust LLM safeguard via refusal feature adversarial training {#iclr2025-yu-robust-llm-safeguard-via-refusal-feature-adversarial-training}

With mechanistic interpretability, we can find a sub space which is correlated with refusal, pull that up


## ICLR2025 Thrush: improving pre-training data using complexity correlation {#iclr2025-thrush-improving-pre-training-data-using-complexity-correlation}

For each pre-training data domain, measure perplexity using existing language model, wrong correlations, train a fast text data sampler using samples of high correlations with ppl


## ICLR2025 Muenninghoff: generative representational instruction tuning {#iclr2025-muenninghoff-generative-representational-instruction-tuning}

Train your model to do both the instructions and embeddings


## ICLR2025 Aycock: can LM really learn to translate a low resource language from grammar books {#iclr2025-aycock-can-lm-really-learn-to-translate-a-low-resource-language-from-grammar-books}

LLM's mostly learn parallel examples from grammar book in order for translation, gain from actually having grammar comes only in linguistic tasks


## ICLR2025 Kaplan: from tokens to words {#iclr2025-kaplan-from-tokens-to-words}

Interpretability results show that last token embeddings is often how multiword tokens are represented in language model; so, why don't we use the last token embedding as new embedding to insert more vocab into the language model, also, for typos, we can use logit lens to trace at one point of a typo becomes corrected


## ICLR2025 Kumarappan: lifeline learning for formal theorem proving {#iclr2025-kumarappan-lifeline-learning-for-formal-theorem-proving}

lean prover; tree research with intermediate rewards to identify useful partial steps, online learning using these steps, sequence problems in curriculum learning fashion to build on using simple proofs


## ICLR2025 Goyal: context parametric conversion {#iclr2025-goyal-context-parametric-conversion}

Although instruction tuning improves context reliance initially, context reliance drops after time of in instruction fine-tuning despite standard performance benchmarks increasing


## ICLR2025 Wan: self improving many shot reasoners {#iclr2025-wan-self-improving-many-shot-reasoners}

for in context learning, run Bayesian optimization steps on some of the outputs, and use that to generate new in context examples


## ICLR2025 Hsu: grounding by trying {#iclr2025-hsu-grounding-by-trying}

Do you RAG by trying some queries and for the good ones do SFT and then DPO


## ICLR2025 Jia: your proofs are use for optimization based jailbreaking {#iclr2025-jia-your-proofs-are-use-for-optimization-based-jailbreaking}

update multiple tokens at once in order to make attack efficiency faster


## ICLR2025 Kang: visual attention sink in large language models {#iclr2025-kang-visual-attention-sink-in-large-language-models}

Visual language models tend to attend to stuff that is kind of irrelevant, where a good intervention is to distribute attention weights from irrelevant things to relevant things


## ICLR2025 Huang: steering LLM behavior with concept activation factors {#iclr2025-huang-steering-llm-behavior-with-concept-activation-factors}

Method: extract last token embedding using positive and negative instructions. From there, steer LLMs using these in bedding


## ICLR2025 Wang: perplexity trap {#iclr2025-wang-perplexity-trap}

documents, under semantic permutation, is considered more relevant when the perplexity is lower
