+++
title = "SU-CS361 Project Proposal"
author = ["Houjun Liu"]
draft = false
+++

## Introduction {#introduction}

Reinforcement Learning with Human Feedback (RLHF) has demonstrated superb effect for aligning the performance of a language model (LM) against unsupervised human preference judgements of LM output trajectories ((<a href="#citeproc_bib_item_17">Ziegler et al. 2020</a>)). However, the original RLHF formulation has shown little direct improvements to the model’s toxicity without further prompting, yet conferred some advantage when prompted to specifically be respectful ((<a href="#citeproc_bib_item_10">Ouyang et al. 2022</a>)).

To specifically target the problem of the reduction of harmfulness in LM toxicity, varying approaches have been explored via contrastive learning ((<a href="#citeproc_bib_item_8">Lu et al., n.d.</a>)), or---though a combination of instruction-following RLHF and in-context learning (i.e. prompting)---sampling and LM self-correcting output trajectories ((<a href="#citeproc_bib_item_4">Ganguli et al. 2023</a>)).

These approaches, however, suffers from a major overriding issue. As they are mostly preference or ranking based schemes over the entire distribution of sampled output trajectories, the naive RLHF reward signal is fairly sparse over the output trajectory. (<a href="#citeproc_bib_item_12">Ramamurthy et al. 2023</a>) discusses empirically that such reward signals from direct application RLHF maybe unreliable suitable for long-form output trajectories.

Turn-based conversational dialogue is one such long-context language modeling task which is in particular susceptible to the risks of sparse, document-wide rewards. Two key issues make this domain particularly challenging. First, previous work ((<a href="#citeproc_bib_item_9">Mehrabi et al. 2022</a>; <a href="#citeproc_bib_item_14">Wallace et al. 2019</a>)) has shown the possibility of the insertion of model-specific adversarial toxicity elicitation contexts optimized specifically for each model which themselves appear harmless and can be placed in conversation turns before the toxicity trigger---making it an overall reward scheme too sparse if applied over the entire conversation domain, yet not generalized enough to prevent the original elicitation if applied only over the triggering utterance. Second, many domains of application of conversational agents where toxicity maybe elicited involves conversations about marginalized groups or sensitive topics, which themselves are not toxic; yet, typical mitigation strategies may ((<a href="#citeproc_bib_item_15">Welbl et al. 2021</a>)) also shift the LM's distribution away from any coverage of texts about these sensitive topics---liming the LM's capabilities and creating unintentional _representational harm_ ((<a href="#citeproc_bib_item_3">Dixon et al. 2018</a>)).

Recent work Fine-Grained RLHF ((<a href="#citeproc_bib_item_16">Wu et al. 2023</a>)) (FG-RLHF) has demonstrated success in limiting the toxicity of LMs through a novel formulation of language modeling as a step-wise Markov Decision Process (MDP)---treating each token as a timestamp---whereby rewards are _densely_ assigned at each token based on _span_ level annotations of the target objective. Then, the decision model is then improved via Proximal Policy Optimization (PPO) ((<a href="#citeproc_bib_item_13">Schulman et al. 2017</a>)) similar to the scheme given in RLHF.

In our work, we propose an extension of the work of FG-RLHF to the dialogue domain, and in particular as a means to lower the susceptibility of LMs for multi-turn dialogue attacks while retaining their representational capability. We hypothesize that 1) the application of a more densely specified (word, turn, multi-turn) level RLHF scheme (using the same technique as proposed by (<a href="#citeproc_bib_item_17">Ziegler et al. 2020</a>)) can reduce the susceptibility of a language model to multi-turn adversarial toxicity attacks, while 2) due to RLHF's localized application of reward, the resulting policy will better retain its modeling performance in general (non-toxic) discussion of topics co-occurring with toxic content, thereby limiting the model's _representational harm_.


## Methods {#methods}

The proposed work involves four key steps: first, we aim to leverage a LM which has not been tuned with RLHF before to elicit toxic turn-based dialogue; second, we aim to use automated metrics to create localized utterance and turn-level tags of toxicity within the elicited conversations; third, we aim to apply the Fine-Grained RLHF scheme ((<a href="#citeproc_bib_item_16">Wu et al. 2023</a>)) to those conversations, using the localized toxicity scores as a negative reward signal; lastly, we aim to evaluate the resulting policy again for toxic behavior again via toxicity elicitation as well as its modeling capability of non-toxic sensitive topics by scoring its perplexity over a linguistic bias dataset.


### Language Modeling and Toxicity Elicitation {#language-modeling-and-toxicity-elicitation}

We aim to leverage a large language model (LLM)---Mistral 7B ((<a href="#citeproc_bib_item_6">Jiang et al. 2023</a>)), whose base LM variant was not conversation fine-tuned and therefore has not been supervised by existing variants of RLHF---and the _RealToxicityPrompts_ ((<a href="#citeproc_bib_item_5">Gehman et al. 2020</a>)) dataset to elicit toxic responses.

Consistent with previous work ((<a href="#citeproc_bib_item_16">Wu et al. 2023</a>)), we will use nucleus sampling with \\(p=0.9\\) and \\(t=1.0\\) to elicit a series of decoding sequences following an open-domain dialogue prompt ((<a href="#citeproc_bib_item_1">Bae et al. 2022</a>)). Within the last user turns, we will insert adversarial toxicity elicitation trajectories given by _RealToxicityPrompts_, and sample model decoding sequences.


### Toxicity Scoring and Reward Signal {#toxicity-scoring-and-reward-signal}

The resulting conversation will be scored turn-wise via the Perspective API from Google Jigsaw ((<a href="#citeproc_bib_item_7">Lees et al. 2022</a>)), which has been used ((<a href="#citeproc_bib_item_17">Ziegler et al. 2020</a>; <a href="#citeproc_bib_item_16">Wu et al. 2023</a>; <a href="#citeproc_bib_item_9">Mehrabi et al. 2022</a>; <a href="#citeproc_bib_item_5">Gehman et al. 2020</a>)) as a standard heuristic for LM output toxicity. In particular, the API model confidence ("Toxicity Score") has been shown to be a workable negative reward signal ((<a href="#citeproc_bib_item_16">Wu et al. 2023</a>)) for toxicity filtering training.

Consistent with previous work, we treat an open-domain conversation as a finite-horizon MDP, whereby rewards are densely assigned at each turn inversely proportional to its toxicity rating. We will vary the span and discount rate to which each "turn" is defined, and evaluate model performance.


### Model Improvement {#model-improvement}

We will train our model following the procedure and objective outlined by ((<a href="#citeproc_bib_item_13">Schulman et al. 2017</a>; <a href="#citeproc_bib_item_16">Wu et al. 2023</a>)), consistent with previous literature. In particular, we will apply a span-level RLHF metric and optimize it using Proximal Policy Optimization (PPO).

Recall we consider the task of language modeling as a fully-observable MDP, whereby each new token generated is given by \\(P\_{\theta}(a\_{t} | S\_{t})\\), whereby the language model \\(P\_{\theta}\\) gives a choice of \\(a\_{t} \in W\\) over the distribution of words given a prompt \\(S\_{t}\\).

We formalize the Jigsaw Perspective API as a model which elicits a score for a sequence of words \\(w\_1, ... w\_{N}\\) which

\begin{equation}
J(w\_1, \dots, w\_{N}) \in [0, 1]
\end{equation}

where if a highly toxic statement exists among \\(w\_1, ..., w\_{N}\\), \\(J \to 1\\), and otherwise \\(J \to 0\\). Investigations into the behavior of \\(J\\) indicate that, for a truly toxic subsequence of length \\(k\\) embedded within a larger sequence of length \\(N\\), \\(J \to 1\\) smoothly as \\(k \to N\\), and the inverse holds as well (by formulating the "non-toxic overall sequence" as a form of obfuscation, this has been discussed by (<a href="#citeproc_bib_item_7">Lees et al. 2022</a>)).

To address this property of length-based decay, we define our optimization objective as a expectation of the toxicity score over multiple candidate spans given a center word. As a slight modification to the FG-RLHF framework ((<a href="#citeproc_bib_item_16">Wu et al. 2023</a>)), then, we first sample an output formulate a token-level reward as:

\begin{equation}
r\_{t} = \sum\_{n=1}^{N} \sum\_{j=\min\qty(0, (t-n+1))}^{t+n} -J\qty(w\_{j}, \dots, w\_{j+N}) \frac{\alpha}{(\mid t-j\mid)} - \beta \log  \frac{P\_{\theta}(w\_{t} | w\_{t-1} \dots w\_{0})}{P\_{\theta\_{init}}\qty(w\_{t} | w\_{t-1} \dots w\_{0})}
\end{equation}

where, under the framework of FG-RLHF, we essentially consider all size-\\(N\\) and below windows in the text "spans", score each span using the Perspective API, and define the span weight as the distance from the "center word" of the window (\\(\frac{\alpha}{| t - j|}\\)).

Given \\(L\\) trajectory samples \\(Y\_1, ..., Y\_{L}\\) from a single toxic prompt, then, we desire to:

\begin{equation}
\max\_{t} \mathbb{E}\_{Y \sim Y\_{j}} \mathbb{E}\_{t} r\_{t}
\end{equation}

To do this, we will optimize this objective via Proximal Policy Optimization ((<a href="#citeproc_bib_item_13">Schulman et al. 2017</a>)).

In particular, let us define a symbol \\(s\_{t}\\) as a partial output trajectory \\(w\_1, ..., w\_{t}\\); we further define a surrogate reward model \\(V\_{\phi}: S \to \mathbb{R}\\) to estimate the quality of a particular partial-output. We will use a smaller model (such as the T5 encoder ((<a href="#citeproc_bib_item_11">Raffel et al. 2023</a>))) and learn parameters \\(\phi\\).

For an output of length \\(T\\), We formulate our **advantage** at a timestamp as:

\begin{equation}
A\_{t} = \sum\_{t'=t}^{T} (\gamma\lambda)^{t'-t} \qty(r\_{t'} + \gamma V\_{\phi} \qty(s\_{t' + 1}) - V\_{\phi} \qty(s\_{t'}))
\end{equation}

we further define a "target value" as:

\begin{equation}
V^{(t)}\qty(s\_{t}) = \sum\_{t' = t}^{T-1} \gamma^{t' - t} r\_{t'} + \gamma^{T-t} V\_{\phi} \qty(s\_{T})
\end{equation}

where in both \\(\lambda, \gamma\\) are both hypeparemeters, with \\(\lambda\\) being the discount factor. Finally, we update our model parameters via classic PPO:

\begin{equation}
\begin{cases}
\theta \leftarrow \arg \max\_{\theta} \mathbb{E}\_{Y \sim Y\_{j}} \mathbb{E}\_{t} \min \qty( \frac{P\_{\theta}(a\_{t}|s\_{t})}{P\_{\theta\_{old}}(a\_{t}|s\_{t})} A\_{t}, \text{clip} \qty( \frac{P\_{\theta}(a\_{t}|s\_{t})}{P\_{\theta\_{old}}(a\_{t}|s\_{t})}, 1-\epsilon, 1+\epsilon))\\\\
\phi \leftarrow \arg \min\_{\phi} \mathbb{E}\_{Y \sim Y\_{j}} \mathbb{E}\_{t} \min\qty(V\_{\phi}(s\_{t}) - V^{(t)}(s\_{t}))^{2}
\end{cases}
\end{equation}


### Evaluation {#evaluation}

After obtaining the improved policy, we aim to evaluate our resulting scheme against naive applications of RLHF (applying the same exact elicitation and tuning procedure, with the expectation of the turn-based reward applied uniformly over the entire conversation).

We aim to perform our evaluation following two key metrics.


#### Toxicity Elicitation {#toxicity-elicitation}

We again follow the procedure outlined above, and measure change in average discounted reward given by the toxicity model for the test-partition of _RealToxicityPrompts_. We expect that the toxicity incident and average over turns will decrease after this procedure; previous work ((<a href="#citeproc_bib_item_16">Wu et al. 2023</a>)) has shown that it may provide lower incidences of toxicity as compared to a naive RLHF application.


#### Language Modeling {#language-modeling}

To benchmark our model against _representational harm_ in shifting its modeling distribution away from sensitive non-toxic discussion, we will further measure the resulting policy's fluency in sensitive topics.

We aim to use the LM perplexity on target sequences as a proxy for measuring model fluency, and in particular aim to measure the change in parity and calibration of the policy before and after tuning upon modeling different partitions of the BOLD dataset ((<a href="#citeproc_bib_item_2">Dhamala et al. 2021</a>)). We expect that, due to the localized nature of our reward and tuning procedure, our policy will have lower perplexities as compared to naive RLHF application due to samples of such sensitive conversations not being in span of the actual localized toxicity.



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Bae, Sanghwan, Donghyun Kwak, Sungdong Kim, Donghoon Ham, Soyoung Kang, Sang-Woo Lee, and Woomyoung Park. 2022. “Building a Role Specified Open-Domain Dialogue System Leveraging Large-Scale Language Models.” arXiv. <a href="http://arxiv.org/abs/2205.00176">http://arxiv.org/abs/2205.00176</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Dhamala, Jwala, Tony Sun, Varun Kumar, Satyapriya Krishna, Yada Pruksachatkun, Kai-Wei Chang, and Rahul Gupta. 2021. “BOLD: Dataset and Metrics for Measuring Biases in Open-Ended Language Generation.” In <i>Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency</i>, 862–72. Virtual Event Canada: ACM. doi:<a href="https://doi.org/10.1145/3442188.3445924">10.1145/3442188.3445924</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Dixon, Lucas, John Li, Jeffrey Sorensen, Nithum Thain, and Lucy Vasserman. 2018. “Measuring and Mitigating Unintended Bias in Text Classification.” In <i>Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society</i>, 67–73. New Orleans LA USA: ACM. doi:<a href="https://doi.org/10.1145/3278721.3278729">10.1145/3278721.3278729</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Ganguli, Deep, Amanda Askell, Nicholas Schiefer, Thomas I. Liao, Kamilė Lukošiūtė, Anna Chen, Anna Goldie, et al. 2023. “The Capacity for Moral Self-Correction in Large Language Models.” arXiv. <a href="http://arxiv.org/abs/2302.07459">http://arxiv.org/abs/2302.07459</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Gehman, Samuel, Suchin Gururangan, Maarten Sap, Yejin Choi, and Noah A. Smith. 2020. “RealToxicityPrompts: Evaluating Neural Toxic Degeneration in Language Models.” arXiv. <a href="http://arxiv.org/abs/2009.11462">http://arxiv.org/abs/2009.11462</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Jiang, Albert Q., Alexandre Sablayrolles, Arthur Mensch, Chris Bamford, Devendra Singh Chaplot, Diego de las Casas, Florian Bressand, et al. 2023. “Mistral 7b.” arXiv. <a href="http://arxiv.org/abs/2310.06825">http://arxiv.org/abs/2310.06825</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Lees, Alyssa, Vinh Q. Tran, Yi Tay, Jeffrey Sorensen, Jai Gupta, Donald Metzler, and Lucy Vasserman. 2022. “A New Generation of Perspective API: Efficient Multilingual Character-Level Transformers.” arXiv. <a href="http://arxiv.org/abs/2202.11176">http://arxiv.org/abs/2202.11176</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Lu, Ximing, Sean Welleck, Jack Hessel, Liwei Jiang, Lianhui Qin, Peter West, Prithviraj Ammanabrolu, and Yejin Choi. n.d. “Quark: Controllable Text Generation with Reinforced [Un]Learning.”</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Mehrabi, Ninareh, Ahmad Beirami, Fred Morstatter, and Aram Galstyan. 2022. “Robust Conversational Agents against Imperceptible Toxicity Triggers.” arXiv. <a href="http://arxiv.org/abs/2205.02392">http://arxiv.org/abs/2205.02392</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Ouyang, Long, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, et al. 2022. “Training Language Models to Follow Instructions with Human Feedback.” arXiv. <a href="http://arxiv.org/abs/2203.02155">http://arxiv.org/abs/2203.02155</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Raffel, Colin, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, and Peter J. Liu. 2023. “Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer.” arXiv. <a href="http://arxiv.org/abs/1910.10683">http://arxiv.org/abs/1910.10683</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>Ramamurthy, Rajkumar, Prithviraj Ammanabrolu, Kianté Brantley, Jack Hessel, Rafet Sifa, Christian Bauckhage, Hannaneh Hajishirzi, and Yejin Choi. 2023. “Is Reinforcement Learning (Not) for Natural Language Processing: Benchmarks, Baselines, and Building Blocks for Natural Language Policy Optimization.” arXiv. <a href="http://arxiv.org/abs/2210.01241">http://arxiv.org/abs/2210.01241</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>Schulman, John, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov. 2017. “Proximal Policy Optimization Algorithms.” arXiv. <a href="http://arxiv.org/abs/1707.06347">http://arxiv.org/abs/1707.06347</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_14"></a>Wallace, Eric, Shi Feng, Nikhil Kandpal, Matt Gardner, and Sameer Singh. 2019. “Universal Adversarial Triggers for Attacking and Analyzing NLP.” In <i>Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)</i>, 2153–62. Hong Kong, China: Association for Computational Linguistics. doi:<a href="https://doi.org/10.18653/v1/D19-1221">10.18653/v1/D19-1221</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_15"></a>Welbl, Johannes, Amelia Glaese, Jonathan Uesato, Sumanth Dathathri, John Mellor, Lisa Anne Hendricks, Kirsty Anderson, Pushmeet Kohli, Ben Coppin, and Po-Sen Huang. 2021. “Challenges in Detoxifying Language Models.” In <i>Findings of the Association for Computational Linguistics: EMNLP 2021</i>, 2447–69. Punta Cana, Dominican Republic: Association for Computational Linguistics. doi:<a href="https://doi.org/10.18653/v1/2021.findings-emnlp.210">10.18653/v1/2021.findings-emnlp.210</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_16"></a>Wu, Zeqiu, Yushi Hu, Weijia Shi, Nouha Dziri, Alane Suhr, Prithviraj Ammanabrolu, Noah A. Smith, Mari Ostendorf, and Hannaneh Hajishirzi. 2023. “Fine-Grained Human Feedback Gives Better Rewards for Language Model Training.” arXiv. <a href="http://arxiv.org/abs/2306.01693">http://arxiv.org/abs/2306.01693</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_17"></a>Ziegler, Daniel M., Nisan Stiennon, Jeffrey Wu, Tom B. Brown, Alec Radford, Dario Amodei, Paul Christiano, and Geoffrey Irving. 2020. “Fine-Tuning Language Models from Human Preferences.” arXiv. <a href="http://arxiv.org/abs/1909.08593">http://arxiv.org/abs/1909.08593</a>.</div>
</div>
