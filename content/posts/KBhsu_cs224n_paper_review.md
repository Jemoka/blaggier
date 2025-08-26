+++
title = "SU-CS224N Paper Review"
author = ["Houjun Liu"]
draft = false
+++

## Key Information {#key-information}

-   **Title**: Fine-Grained Language Model Detoxification with Dense, Token-Level Rewards
-   **Team Member** (in 224n): Houjun Liu &lt;houjun@stanford.edu&gt;
-   **External Collaborators**: Amelia Hardy &lt;ahardy@stanford.edu&gt;, Bernard Lange &lt;blange@stanford.edu&gt;
-   **Custom Project**
-   **Mentor**: we have no particular mentor within 224n
-   **Sharing Project**: this project is shared with AA222, and is a part of a research project PI'd by Mykel Kochenderfer &lt;mykel@stanford.edu&gt;, of which Houjun is taking a leading role


## Research Paper Summary {#research-paper-summary}

| Title | Fine-Grained Human Feedback Gives Better Rewards for Language Model Training |
|-------|------------------------------------------------------------------------------|
| Venue | NeurIPS (Spotlight)                                                          |
| Year  | 2023                                                                         |
| URL   | <https://arxiv.org/pdf/2306.01693>                                           |


### Background {#background}

Reinforcement Learning with Human Feedback (RLHF) has demonstrated superb effect for improving performance of a language model (LM) via human preference judgments of LM output desirability--reducing incidences of toxic or false generation trajectories ((<a href="#citeproc_bib_item_19">Ziegler et al. 2020</a>)). Naive application of RLHF directly has shown success in reducing the toxicity in language model outputs, yet its effects could sometimes be inconsistent without further in-context guidance of the resulting model ((<a href="#citeproc_bib_item_11">Ouyang et al. 2022</a>)).

Even without the specific technique of RLHF, other approaches have been formulated to specifically target the problem of the reduction of harmfulness in LM toxicity via human feedback data given by LM output trajectories, from  contrastive learning ((<a href="#citeproc_bib_item_8">Lu et al. 2022</a>)), or---though a combination of instruction-following RLHF and in-context learning (i.e. prompting)---eliciting LM self-correction in output trajectories ((<a href="#citeproc_bib_item_4">Ganguli et al. 2023</a>)).

Though the works above highlight that human-reviewed preference data are largely helpful for the task of LM detoxification, these approaches suffers from a major overriding issue. As they are mostly preference or ranking based schemes over the entire output trajectories, the naive RLHF reward signal is fairly sparse, especially given long contexts. (<a href="#citeproc_bib_item_13">Ramamurthy et al. 2023</a>) discusses empirically that such reward signals from direct application RLHF may be unreliable for long-form output trajectories.


### Contributions {#contributions}

Fine-Grained RLHF ((<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)) (FG-RLHF) has demonstrated success in limiting the toxicity of LMs a _dense_, token-level formulation of the "human-preference" reward usually constant throughout an entire output trajectory within naive RLHF.

The authors first collected "fine-grained preference data" in the form of a sequences of manually-annotated (or, in the case of toxicity, automatically annotated via the Google Jigsaw perspective API ((<a href="#citeproc_bib_item_7">Lees et al. 2022</a>))) spans within sampled output trajectories of the language model. Each span contains two fields: a `class` indicating what type of comment is being made, and a `score` \\(r \in [-1,1]\\) which indicates whether the behavior is good or bad. For instance, an annotator may provide a span annotating that a section of the output is (`Relavent +0.3`, or `Toxic -0.5`). For this specific work, each spans is a minimum of one sentence long, but can also encompass the entire document (the author discusses "information completeness" as such as annotation which can only be applied document-wide.)

Then, to tune the target language model to follow these human annotations, the author provides a slight reformulation of RLHF to densely provide reward to the model.

In particular, the authors formulate the task of language modeling as a token-level Markov Decision Process (MDP), where, at each timestamp, the language model takes an "action" within the MDP framework by selecting a word \\(w\_{n} \sim P\_{\theta}(\cdot | w\_{1}, ..., w\_{n-1})\\). Each \\(w\_{n}\\), results in the "state" of the MDP being extended by that word, into \\(\\{w\_1, ..., w\_{n-1}\\} \cup \\{w\_{n}\\}\\).

This specific (and perhaps unsurprising) formulating leads to a reward assignment consistent with that of an MDP, which is given at _each timestamp_: meaning, instead of given reward as preference scores per generating trajectory, we assign rewards with each output token. This gives rise to \\(r\_{1}, ..., r\_{n}\\) corresponding to each token in the output \\(w\_1, ..., w\_{n}\\).

To actually calculate \\(r\_{t}\\), the authors simply sum the rewards given by each span. For \\(K\\) `class` of outputs (e.g. "Relevant"), and \\(L\_{k}\\) spans for each class \\(k\\), and for a set \\(T\_{L\_{k}}^{(j)}\\)  indicating that a particular token is within the $j$-th annotated span, document-wide weight to the `class` \\(w\_{k}\\), and score \\(R\_{k}(j)\\) given by the annotator at span \\(j\\), we have:

\begin{equation}
r\_{t} = \sum\_{k=1}^{K} \sum\_{j=1}^{L\_{k}} \qty(\bold{1}\qty(t \in T\_{L\_{k}}^{(j)}) w\_{k} R\_{k}(j)) - \beta \log \frac{P\_{\theta}(w\_{t}|w\_{1} \dots w\_{t-1})}{P\_{\theta\_{orig}}(w\_{t}|w\_{1} \dots w\_{t-1})}
\end{equation}

whereby we, similar to the original formulation of RLHF ((<a href="#citeproc_bib_item_19">Ziegler et al. 2020</a>)), provide a penalty for overly large weight changes from the un-tuned model, parameterized by \\(\beta\\).

By applying this reward signal and standard Proximal Policy Optimization ((<a href="#citeproc_bib_item_14">Schulman et al. 2017</a>)) on the GPT-2 model, using Jigsaw Perspective API's "toxicity score" ((<a href="#citeproc_bib_item_7">Lees et al. 2022</a>)) as a heuristic for \\(R\_{k}\\), the authors saw a toxicity elicitation success rate reduction from \\(13.0\\%\\) to \\(8.1\\%\\) via the RealToxicityPrompts ((<a href="#citeproc_bib_item_5">Gehman et al. 2020</a>)) set---a set of harmless prefixes but which commonly result in toxic outputs (e.g. "they looked at her up and down, and..."). More excitingly, the model was able to preserve its perplexity on the dataset (i.e. the prompts, which are not toxic alone), obtaining a mean perplexity value of \\(9.77\\) compared to non-fine-tuned perplexity of \\(9.58\\) and that of full RLHF at \\(11.75\\). Non-RLHF based techniques ((<a href="#citeproc_bib_item_8">Lu et al. 2022</a>; <a href="#citeproc_bib_item_4">Ganguli et al. 2023</a>)) benchmarked on the same task were worse or equal on these metrics to the naive RLHF implementation.

These results indicate that the densely formulated rewards helped both obtain better results on the actual task of avoiding toxic output trajectories, but also retained more of the model's modeling---with the authors arguing that the latter metric indicates higher sample efficiency in the training procedure.


### Limitation {#limitation}

First, given the work's reliance on the notion of "fine-grained" upon its reward model, it is interesting to see that the actual reward formulation given still had an indicator function over what is essentially _sentence level_ spans. The choice of sentence-level spans were never really justified, and, in particular, not benchmarked against simply applying RLHF on shorter generation trajectories instead of formulating a token-level reward. The authors correctly recognized that trajectory length is a big factor of the suitableness of reward signal, but simply reducing the length of the trajectory before RLHF ((<a href="#citeproc_bib_item_15">Singhal et al. 2023</a>)) may have been a helpful baseline for that claim.

Second, given authors' cited previous discussion of in-context LM detoxicity elicitation---with which this work was benchmarked as an alternative to RLHF---were done with dramatically larger models than GPT-2 ((<a href="#citeproc_bib_item_4">Ganguli et al. 2023</a>), where the authors even commented the necessity for larger scale models), it is difficult to gauge whether or not the baseline, non-RLHF results reported in the paper was an adequate benchmark against the model chosen here.


### Why this Paper {#why-this-paper}

The paper provides a helpful reformulation of language modeling as an MDP, and actually takes advantage of this reformulation by proposing a way by which step-wise action-reward can be _non-sparsely_ assigned. One long-standing challenge in LM alignment, especially in detoxicity, involves the shifting ((<a href="#citeproc_bib_item_17">Welbl et al. 2021</a>)) of a LM's distribution away from any coverage of texts about  sensitive topics which may frequency co-occur with toxic texts---liming the LM's capabilities and creating unintentional _representational harm_ ((<a href="#citeproc_bib_item_3">Dixon et al. 2018</a>)). By formulating a more fine-grained metric like so, it is hopeful that this behavior could be lessened. In general, taking advantage of this token-level reformulation will hopefully allow more fine-grained control over model generation.


### Wider research context {#wider-research-context}

This paper is a part of a body of work which focuses on the post-training techniques in language modeling. Furthermore, it extends a widely used post training technique, RLHF ((<a href="#citeproc_bib_item_19">Ziegler et al. 2020</a>)), which leverages human preferences as a part of a final step in language modeling. Furthermore, the specific technique this paper investigates involves the research in language model toxicity elicitation and prevention ((<a href="#citeproc_bib_item_5">Gehman et al. 2020</a>; <a href="#citeproc_bib_item_4">Ganguli et al. 2023</a>; <a href="#citeproc_bib_item_8">Lu et al. 2022</a>; <a href="#citeproc_bib_item_17">Welbl et al. 2021</a>))---promoting safer language models used throughout deployment.

Furthermore, as mentioned above, the paper is selected both for its specific application for methods in reducing LM output detoxicity, but also for its general formulation of toke-level rewards which enables further work to specific alignment of LM behavior to human or heuristic based metrics that are not necessarily focused on detoxicity. This property is particularly advantageous given the development of more specific, span-level metrics for language model evaluation metrics ((<a href="#citeproc_bib_item_10">Min et al. 2023</a>)), which would complement the work here directly.


## Project Proposal {#project-proposal}


### Goal {#goal}

Classic formulations of RLHF has demonstrated positive capability to align language model outputs to specific preferences/ranking data in an unsupervised manner. However, as RLHF formulates its rewards over the entire generation trajectory, leading to fairly sparse assignment of rewards.

Turn-based conversational dialogue is one such long-context language modeling task which is in particular susceptible to the risks of sparse, document-wide rewards ((<a href="#citeproc_bib_item_9">Mehrabi et al. 2022</a>; <a href="#citeproc_bib_item_16">Wallace et al. 2019</a>; <a href="#citeproc_bib_item_13">Ramamurthy et al. 2023</a>)). Furthermore, many domains of application of conversational agents where toxicity maybe elicited involves conversations about marginalized groups or sensitive topics, which themselves are not toxic; yet, typical mitigation strategies may ((<a href="#citeproc_bib_item_17">Welbl et al. 2021</a>)) also shift the LM's distribution away from any coverage of texts about these sensitive topics---liming the LM's capabilities and creating unintentional _representational harm_ ((<a href="#citeproc_bib_item_3">Dixon et al. 2018</a>)).

Recent work Fine-Grained RLHF ((<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)) (FG-RLHF) has demonstrated success in limiting the toxicity of LMs through a novel formulation of language modeling as a step-wise Markov Decision Process (MDP)---treating each token as a timestamp---whereby rewards are _densely_ assigned at each token based on _span_ level annotations of the target objective. This formulation avoids some of the problems of reward sparsity previously found in naive applications of RLHF in long-form contexts.

In this project, we propose an extension of the work of FG-RLHF to the dialogue domain, and in particular as a means to lower the susceptibility of LMs for long-form dialogue toxicity elicitation attacks while retaining their representational capability for sensitive topics.

We hypothesize that 1) the application of an even more densely specified (word, turn, multi-turn) level RLHF scheme (using the same technique as proposed by (<a href="#citeproc_bib_item_19">Ziegler et al. 2020</a>), but importantly **not** keep reward constant at the sentence level as did (<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)) can reduce the susceptibility of a language model to multi-turn adversarial toxicity attacks, while 2) due to our proposed methods' localized application of reward, the resulting policy will better retain its modeling performance in general (non-toxic) discussion of topics co-occurring with toxic content, thereby limiting the model's _representational harm_.


### Task {#task}

The baseline task mirrors exactly as that in the FG-RLHF work: to use a heuristic based toxicity evaluation ((<a href="#citeproc_bib_item_7">Lees et al. 2022</a>)) as a densely formulated reward signal to perform _fine-grained_ reinforcement learning on possibly-toxic LM output trajectories. We add an additional evaluation beyond those presented in the FG-RLHF work, described in greater detail below, which evaluates the resulting model for its ability to model non-toxic yet sensitive topics after both naive RLHF and fine-grained reward schemes.


### Methods {#methods}

The proposed work involves four key steps: first, we aim to leverage a LM which has not been tuned with RLHF before to elicit toxic turn-based dialogue; second, we aim to use automated metrics to create localized utterance and turn-level tags of toxicity within the elicited conversations; third, we aim to apply the Fine-Grained RLHF scheme ((<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)) to those conversations, using the localized toxicity scores as a negative reward signal; lastly, we aim to evaluate the resulting policy again for toxic behavior again via toxicity elicitation as well as its modeling capability of non-toxic sensitive topics by scoring its perplexity over a linguistic bias dataset.


#### Data Gathering {#data-gathering}

<!--list-separator-->

-  Language Modeling and Toxicity Elicitation

    We aim to leverage a large language model (LLM)---Mistral 7B ((<a href="#citeproc_bib_item_6">Jiang et al. 2023</a>)), whose base LM variant was not conversation fine-tuned and therefore has not been supervised by existing variants of RLHF---and the _RealToxicityPrompts_ ((<a href="#citeproc_bib_item_5">Gehman et al. 2020</a>)) dataset to elicit toxic responses.

    Consistent with previous work ((<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)), we will use nucleus sampling with \\(p=0.9\\) and \\(t=1.0\\) to elicit a series of decoding sequences following an open-domain dialogue prompt ((<a href="#citeproc_bib_item_1">Bae et al. 2022</a>)). Within the last user turns, we will insert adversarial toxicity elicitation trajectories given by _RealToxicityPrompts_, and sample model decoding sequences.

<!--list-separator-->

-  Toxicity Scoring and Reward Signal

    The resulting conversation will be scored turn-wise via the Perspective API from Google Jigsaw ((<a href="#citeproc_bib_item_7">Lees et al. 2022</a>)), which has been used ((<a href="#citeproc_bib_item_19">Ziegler et al. 2020</a>; <a href="#citeproc_bib_item_18">Wu et al. 2023</a>; <a href="#citeproc_bib_item_9">Mehrabi et al. 2022</a>; <a href="#citeproc_bib_item_5">Gehman et al. 2020</a>)) as a standard heuristic for LM output toxicity. In particular, the API model confidence ("Toxicity Score") has been shown to be a workable negative reward signal ((<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)) for toxicity filtering training.

    Consistent with previous work, we treat an open-domain conversation as a finite-horizon MDP, whereby rewards are densely assigned at each turn inversely proportional to its toxicity rating. We will vary the span and discount rate to which each "turn" is defined, and evaluate model performance.


#### NLP/Neural Method {#nlp-neural-method}

We will train our model following the procedure and objective outlined by ((<a href="#citeproc_bib_item_14">Schulman et al. 2017</a>; <a href="#citeproc_bib_item_18">Wu et al. 2023</a>)), consistent with previous literature. In particular, we will apply a span-level RLHF metric and optimize it using Proximal Policy Optimization (PPO).

Recall we consider the task of language modeling as a fully-observable MDP, whereby each new token generated is given by \\(P\_{\theta}(a\_{t} | S\_{t})\\), whereby the language model \\(P\_{\theta}\\) gives a choice of \\(a\_{t} \in W\\) over the distribution of words given a prompt \\(S\_{t}\\).

We formalize the Jigsaw Perspective API as a model which elicits a score for a sequence of words \\(w\_1, ... w\_{N}\\) which

\begin{equation}
J(w\_1, \dots, w\_{N}) \in [0, 1]
\end{equation}

where if a highly toxic statement exists among \\(w\_1, ..., w\_{N}\\), \\(J \to 1\\), and otherwise \\(J \to 0\\). Investigations into the behavior of \\(J\\) indicate that, for a truly toxic subsequence of length \\(k\\) embedded within a larger sequence of length \\(N\\), \\(J \to 1\\) smoothly as \\(k \to N\\), and the inverse holds as well (by formulating the "non-toxic overall sequence" as a form of obfuscation, this has been discussed by (<a href="#citeproc_bib_item_7">Lees et al. 2022</a>)).

To address this property of length-based decay, we define our optimization objective as a expectation of the toxicity score over multiple candidate spans given a center word. As a slight modification to the FG-RLHF framework ((<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)), then, we first sample an output formulate a token-level reward as:

\begin{equation}
r\_{t} = \sum\_{n=1}^{N} \sum\_{j=\min\qty(0, (t-n+1))}^{t+n} -J\qty(w\_{j}, \dots, w\_{j+N}) \frac{\alpha}{(\mid t-j\mid)} - \beta \log  \frac{P\_{\theta}(w\_{t} | w\_{t-1} \dots w\_{0})}{P\_{\theta\_{init}}\qty(w\_{t} | w\_{t-1} \dots w\_{0})}
\end{equation}

where, under the framework of FG-RLHF, we essentially consider all size-\\(N\\) and below windows in the text "spans", score each span using the Perspective API, and define the span weight as the distance from the "center word" of the window (\\(\frac{\alpha}{| t - j|}\\)).

Given \\(L\\) trajectory samples \\(Y\_1, ..., Y\_{L}\\) from a single toxic prompt, then, we desire to:

\begin{equation}
\max\_{t} \mathbb{E}\_{Y \sim Y\_{j}} \mathbb{E}\_{t} r\_{t}
\end{equation}

The remainder of the procedure follows exactly to Proximal Policy Optimization ((<a href="#citeproc_bib_item_14">Schulman et al. 2017</a>)); however, we consider a single timestamp a _token_, rather than an entire generation sequence. This will increase the number of reward model and evaluation calls dramatically, but does not increase the amount of memory usage because the evaluations of each token can be computed separately (conditioned upon the actual output trajectory sampled from teh LM, which can be offloaded from active memory) and does not need to be within one batch.

In particular, let us define a symbol \\(s\_{t}\\) as a partial output trajectory \\(w\_1, ..., w\_{t}\\); we further define a surrogate reward model \\(V\_{\phi}: S \to \mathbb{R}\\) to estimate the quality of a particular partial-output. We will use a smaller model (such as the T5 encoder ((<a href="#citeproc_bib_item_12">Raffel et al. 2023</a>))) and learn parameters \\(\phi\\).

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


### Baselines and Evaluation {#baselines-and-evaluation}

After obtaining the improved policy, we aim to evaluate our resulting scheme against naive applications of RLHF (applying the same exact elicitation and tuning procedure, with the Perspective API toxicity score uniformly calculated and applied over the entire conversation).

We aim to perform our evaluation following two key metrics.


#### Toxicity Elicitation {#toxicity-elicitation}

We again follow the procedure outlined above, and measure change in average discounted toxicity score given by the Perspectives model for model output trajectories on the test-partition of _RealToxicityPrompts_. We expect that the toxicity incident and average over turns will decrease after this procedure; previous work ((<a href="#citeproc_bib_item_18">Wu et al. 2023</a>)) has shown that it may provide lower incidences of toxicity as compared to a naive RLHF application.


#### Language Modeling {#language-modeling}

To benchmark our model against _representational harm_ in shifting its modeling distribution away from sensitive non-toxic discussion, we will further measure the resulting policy's fluency in sensitive topics.

We aim to use the LM perplexity on target sequences as a proxy for measuring model fluency, and in particular aim to measure the change in parity and calibration of the policy before and after tuning upon modeling different partitions of the BOLD dataset ((<a href="#citeproc_bib_item_2">Dhamala et al. 2021</a>)). We expect that, due to the localized nature of our reward and tuning procedure, our policy will have lower perplexities as compared to naive RLHF application due to samples of such sensitive conversations not being in span of the actual localized toxicity.


### Ethics {#ethics}

First, this is a project that involves eliciting and responding to the ability for toxicity to arise in language models. Naturally, it will involve first a demonstration and evaluation of an LM's ability to perform toxic generation trajectories. Beyond examples given in our article of correction of behavior, we do not intend to release any completions performed during the experiment (except to the Perspective API, for evaluation), and will clearly demarcate toxic content in our article as is standard. Second, though we can evaluate the safety profile of our resulting model on a fixed dataset, we have no holistic counterfacutal on the objective safety of our resulting model. As such, when we release the artifacts (code, weights) to our experiments, we expect to note clearly that it is a research work and not intended for broader deployment without further evaluation. Ideally, this will serve to limit the capacity to which our work is misused as a general technique for detoxification without further evaluation. If the weights has shown no improvements to detoxicity over the base model, we will not release it to mitigate any harms it may cause.


### Note on Hardware {#note-on-hardware}

This project involves the use of a 7-billion parameter language model, as well as a roughly 770-million parameter reward model. We are in progress to making separate arrangements to obtain compute necessary for this project, and are confident in our ability to obtain sufficient allocations to tune these models.



<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Bae, Sanghwan, Donghyun Kwak, Sungdong Kim, Donghoon Ham, Soyoung Kang, Sang-Woo Lee, and Woomyoung Park. 2022. “Building a Role Specified Open-Domain Dialogue System Leveraging Large-Scale Language Models.” arXiv. <a href="http://arxiv.org/abs/2205.00176">http://arxiv.org/abs/2205.00176</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Dhamala, Jwala, Tony Sun, Varun Kumar, Satyapriya Krishna, Yada Pruksachatkun, Kai-Wei Chang, and Rahul Gupta. 2021. “BOLD: Dataset and Metrics for Measuring Biases in Open-Ended Language Generation.” In <i>Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency</i>, 862–72. Virtual Event Canada: ACM. doi:<a href="https://doi.org/10.1145/3442188.3445924">10.1145/3442188.3445924</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_3"></a>Dixon, Lucas, John Li, Jeffrey Sorensen, Nithum Thain, and Lucy Vasserman. 2018. “Measuring and Mitigating Unintended Bias in Text Classification.” In <i>Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society</i>, 67–73. New Orleans LA USA: ACM. doi:<a href="https://doi.org/10.1145/3278721.3278729">10.1145/3278721.3278729</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_4"></a>Ganguli, Deep, Amanda Askell, Nicholas Schiefer, Thomas I. Liao, Kamilė Lukošiūtė, Anna Chen, Anna Goldie, et al. 2023. “The Capacity for Moral Self-Correction in Large Language Models.” arXiv. <a href="http://arxiv.org/abs/2302.07459">http://arxiv.org/abs/2302.07459</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_5"></a>Gehman, Samuel, Suchin Gururangan, Maarten Sap, Yejin Choi, and Noah A. Smith. 2020. “RealToxicityPrompts: Evaluating Neural Toxic Degeneration in Language Models.” arXiv. <a href="http://arxiv.org/abs/2009.11462">http://arxiv.org/abs/2009.11462</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_6"></a>Jiang, Albert Q., Alexandre Sablayrolles, Arthur Mensch, Chris Bamford, Devendra Singh Chaplot, Diego de las Casas, Florian Bressand, et al. 2023. “Mistral 7b.” arXiv. <a href="http://arxiv.org/abs/2310.06825">http://arxiv.org/abs/2310.06825</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_7"></a>Lees, Alyssa, Vinh Q. Tran, Yi Tay, Jeffrey Sorensen, Jai Gupta, Donald Metzler, and Lucy Vasserman. 2022. “A New Generation of Perspective API: Efficient Multilingual Character-Level Transformers.” arXiv. <a href="http://arxiv.org/abs/2202.11176">http://arxiv.org/abs/2202.11176</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_8"></a>Lu, Ximing, Sean Welleck, Jack Hessel, Liwei Jiang, Lianhui Qin, Peter West, Prithviraj Ammanabrolu, and Yejin Choi. 2022. “Quark: Controllable Text Generation with Reinforced Unlearning.” <i>Advances in Neural Information Processing Systems</i> 35: 27591–609.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_9"></a>Mehrabi, Ninareh, Ahmad Beirami, Fred Morstatter, and Aram Galstyan. 2022. “Robust Conversational Agents against Imperceptible Toxicity Triggers.” arXiv. <a href="http://arxiv.org/abs/2205.02392">http://arxiv.org/abs/2205.02392</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_10"></a>Min, Sewon, Kalpesh Krishna, Xinxi Lyu, Mike Lewis, Wen-tau Yih, Pang Koh, Mohit Iyyer, Luke Zettlemoyer, and Hannaneh Hajishirzi. 2023. “FActScore: Fine-Grained Atomic Evaluation of Factual Precision in Long Form Text Generation.” In <i>Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing</i>, edited by Houda Bouamor, Juan Pino, and Kalika Bali, 12076–100. Singapore: Association for Computational Linguistics. doi:<a href="https://doi.org/10.18653/v1/2023.emnlp-main.741">10.18653/v1/2023.emnlp-main.741</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_11"></a>Ouyang, Long, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, et al. 2022. “Training Language Models to Follow Instructions with Human Feedback.” arXiv. <a href="http://arxiv.org/abs/2203.02155">http://arxiv.org/abs/2203.02155</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_12"></a>Raffel, Colin, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, and Peter J. Liu. 2023. “Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer.” arXiv. <a href="http://arxiv.org/abs/1910.10683">http://arxiv.org/abs/1910.10683</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_13"></a>Ramamurthy, Rajkumar, Prithviraj Ammanabrolu, Kianté Brantley, Jack Hessel, Rafet Sifa, Christian Bauckhage, Hannaneh Hajishirzi, and Yejin Choi. 2023. “Is Reinforcement Learning (Not) for Natural Language Processing: Benchmarks, Baselines, and Building Blocks for Natural Language Policy Optimization.” arXiv. <a href="http://arxiv.org/abs/2210.01241">http://arxiv.org/abs/2210.01241</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_14"></a>Schulman, John, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov. 2017. “Proximal Policy Optimization Algorithms.” arXiv. <a href="http://arxiv.org/abs/1707.06347">http://arxiv.org/abs/1707.06347</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_15"></a>Singhal, Prasann, Tanya Goyal, Jiacheng Xu, and Greg Durrett. 2023. “A Long Way to Go: Investigating Length Correlations in RLHF.” arXiv. <a href="http://arxiv.org/abs/2310.03716">http://arxiv.org/abs/2310.03716</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_16"></a>Wallace, Eric, Shi Feng, Nikhil Kandpal, Matt Gardner, and Sameer Singh. 2019. “Universal Adversarial Triggers for Attacking and Analyzing NLP.” In <i>Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)</i>, 2153–62. Hong Kong, China: Association for Computational Linguistics. doi:<a href="https://doi.org/10.18653/v1/D19-1221">10.18653/v1/D19-1221</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_17"></a>Welbl, Johannes, Amelia Glaese, Jonathan Uesato, Sumanth Dathathri, John Mellor, Lisa Anne Hendricks, Kirsty Anderson, Pushmeet Kohli, Ben Coppin, and Po-Sen Huang. 2021. “Challenges in Detoxifying Language Models.” In <i>Findings of the Association for Computational Linguistics: EMNLP 2021</i>, 2447–69. Punta Cana, Dominican Republic: Association for Computational Linguistics. doi:<a href="https://doi.org/10.18653/v1/2021.findings-emnlp.210">10.18653/v1/2021.findings-emnlp.210</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_18"></a>Wu, Zeqiu, Yushi Hu, Weijia Shi, Nouha Dziri, Alane Suhr, Prithviraj Ammanabrolu, Noah A. Smith, Mari Ostendorf, and Hannaneh Hajishirzi. 2023. “Fine-Grained Human Feedback Gives Better Rewards for Language Model Training.” arXiv. <a href="http://arxiv.org/abs/2306.01693">http://arxiv.org/abs/2306.01693</a>.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_19"></a>Ziegler, Daniel M., Nisan Stiennon, Jeffrey Wu, Tom B. Brown, Alec Radford, Dario Amodei, Paul Christiano, and Geoffrey Irving. 2020. “Fine-Tuning Language Models from Human Preferences.” arXiv. <a href="http://arxiv.org/abs/1909.08593">http://arxiv.org/abs/1909.08593</a>.</div>
</div>
