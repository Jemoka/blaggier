+++
title = "ICLR2025 Friday Posters"
author = ["Houjun Liu"]
draft = false
+++

## ICLR2025 Morris: contextual document embeddings {#iclr2025-morris-contextual-document-embeddings}

Take a bunch of sentence embeddings as input to produce a new sentence embedding that is now contextual


## ICLR2025 Noukhovich: asynchronous reinforcement learning for language models {#iclr2025-noukhovich-asynchronous-reinforcement-learning-for-language-models}

Rollout and tune concurrently


## ICLR2025 Yao: CR-CTC CONSISTENCY REGULATION {#iclr2025-yao-cr-ctc-consistency-regulation}

CTC LOSS CAN BE MADE MORE ROBUST IF YOU REGULARIZE TO HAVE MINIMAL DIFFERENCE BETWEEN TWO AUGMENTED VIEWS OF THE SAME MEL SPECTRUM


## ICLR2025 Sun: ReDeEP detecting hallucination using mechanistic interpretability {#iclr2025-sun-redeep-detecting-hallucination-using-mechanistic-interpretability}

Find layers most prone to insert information, measure the information insertion using logit lens before and after passing through FFN, strong change after hallucination prone FFN means hallucination


## ICLR2025 Fu: CHiP {#iclr2025-fu-chip}

For multi model preference optimization, combine four different loss terms together a varying types of preference loss to get best results


## ICLR2025 Faysse: ColPali {#iclr2025-faysse-colpali}

Embed images of text instead of text itself during rag


## ICLR2025 Liu: DeLLMa {#iclr2025-liu-dellma}

Key insight; make a language model of POMDP by asking the language model to produce value judgments and normalizing them and doing standard value iteration


## ICLR2025 Wijmans: cut your losses in large vocabulary language model {#iclr2025-wijmans-cut-your-losses-in-large-vocabulary-language-model}

Instead of decoding directly into logits, which is memory intensive, there is a trick to allow us to not have to store the entire out projection in memory


## ICLR2025 Gao: progressing the relative future {#iclr2025-gao-progressing-the-relative-future}

Solve multiturn RLHF by writing the policy Q value and optimizing it over discounted features


## ICLR2025 Xiao: SimPER preference alignment by removing hyper parameters {#iclr2025-xiao-simper-preference-alignment-by-removing-hyper-parameters}

Remove the log term of DPO and remove thereby the hyper parameter beta that is needed


## ICLR2025 Xiong: from tokens to lattices {#iclr2025-xiong-from-tokens-to-lattices}

Mask language models learn conditional relationships between tokens of the same entity thereby implicitly creating a graph


## ICLR2025 Pagliardini: AdEMAMix {#iclr2025-pagliardini-ademamix}

Key insight: Adam with two different betas and also use gradient information from multiple steps for stabler and faster convergence


## ICLR2025 Fan: loop transformers for length generalization {#iclr2025-fan-loop-transformers-for-length-generalization}

Key insight: UT like approaches with loops generalize better for tasks of a specific kind


## ICLR2025 Lee: multiple non-asymptotic rates for value iteration {#iclr2025-lee-multiple-non-asymptotic-rates-for-value-iteration}

Key insight: anchoring using the original policy speed up average value value iteration

That is: Vt = a\*V0 + b\*T\*Vt-1


## ICLR2025 Liu: linear combination of saves checkpoints makes diffusion and consistency models better {#iclr2025-liu-linear-combination-of-saves-checkpoints-makes-diffusion-and-consistency-models-better}

Key insight: as titled, use evolutionary research to figure out the best mixture of weights to select


## ICLR2025 Ramapuram: theory analysis and best practices for sigmoid self attention {#iclr2025-ramapuram-theory-analysis-and-best-practices-for-sigmoid-self-attention}

Key insight: sigmoid self attention reduces all gather costs and they have a bunch of tricks to make it work


## ICLR2025 Sun: block verification accelerate speculative decoding {#iclr2025-sun-block-verification-accelerate-speculative-decoding}

Key insight: when using a small language model to speculatively decode a large language model, evaluate likelihood blocks at a time


## ICLR2025 Chang: skiable influence a fact tracing {#iclr2025-chang-skiable-influence-a-fact-tracing}

Key insight: using a normalized gradient dot product between training examples and outputs, do attribution


## ICLR2025 Hu: how to visualize training dynamics {#iclr2025-hu-how-to-visualize-training-dynamics}

Key insight: take whatever summary statistics you have for each checkpoint, run classical low dimensional work on it such as PCA


## ICLR2025 Addepali: safety training of LM's generalized to semantically related prompts {#iclr2025-addepali-safety-training-of-lm-s-generalized-to-semantically-related-prompts}

Key insight: take some jailbreak that doesn't work anymore, make semantic pururbation o it, check if it still works. Often, it does.


## ICLR2025 Georgiev: attribute to delete {#iclr2025-georgiev-attribute-to-delete}

Key; learn a data model which then allows you to perturb what pieces of input pre-training data is relevant to the actual output, using this,, with counterfactual for what the correct unlearned outcome is, and then tune against that.
