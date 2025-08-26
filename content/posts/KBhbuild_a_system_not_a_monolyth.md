+++
title = "Build a System, Not a Monolith"
author = ["Houjun Liu"]
draft = false
+++

"How do we build well developed AI systems without a bangin' company"


## Two main paradigms {#two-main-paradigms}

-   **transfer learning**: (pretrain a model, and) faster convergence, better performance
-   **\*monolithic models**: (pretrain a model, and) just use the pretrained model


## Problems with monolythic models {#problems-with-monolythic-models}

-   Continual development of large language models mostly don't exist: no incremental updates
-   To get better improvements, we throw out the old monolythic model
-   Most of the research community can't participate in their development


## New Alternative Paradigm {#new-alternative-paradigm}

-   A very simple routing layer
-   A very large collection of specialist models all from a base model
-   Collaborative model development means that a large amount of contributors can band together to contribute to the development of the models


### Why {#why}

-   Specialist models are cheaper and better to train
    -   few shot parameter efficient fine tuning is better liu et al
    -   **few shot fine-tuning is better than few-shot in-context learning**
-   Specialist models can be communicable, incremental updates to a base model
    -   think: [PEFT]({{< relref "KBhpeft.md" >}})
    -   each of the specialist models can only need to update a small percent of the weights
    -   think "adapters": parameter efficient updates


### Routing {#routing}

-   task2vec: task embedding for meta learning Achille et al
-   efficiently tuned parameters are task embeddings Zhou et al


#### distinction between MoE {#distinction-between-moe}

-   instead of routing in sub-layer level routing, we are routing at the **input level**
-   we look at the


### Novel Tasks (Model Merging) {#novel-tasks--model-merging}

Tasks can be considered as a composition of skills.

1.  each task can be encoded as a composition of skills
2.  we can merge the skills of sub-models


#### Usual updates {#usual-updates}

1.  we take a pretrained model
2.  we adapt it to some target task


#### Model Merging {#model-merging}

<!--list-separator-->

-  Fisher-weight averaging

    **"Merging models with fisher-weight averaging", Matena et al**
    Merging can be shown as an optimization problem:

    \begin{equation}
    argmax\_{\theta} \sum\_{i-1}^{M} \lambda\_{i} \log p(\theta \mid \mathcal{D}\_{i})
    \end{equation}

    "a merged model is the set of parameters which would maximize the log-posterior of each model \\(\mathcal{D}\_{i}\\), controlled by \\(\lambda\_{i}\\)"

<!--list-separator-->

-  Task arthmetic

    **"Editing models with Task Arthmetic", llharco et al**
    **"Resolving inference when merging models" by Yadev et al**

    You can create multi-task models by just doing maff:

    \begin{equation}
    \tau\_{1} = \theta\_{finetune\_{1}} - \theta\_{pretrain}
    \end{equation}

    \begin{equation}
    \tau\_{2} = \theta\_{finetune\_{2}} - \theta\_{pretrain}
    \end{equation}

    \begin{equation}
    \theta\_{finetune\_{1+2}} = (\tau\_{1} + \tau\_{2}) + \theta\_{pretrain}
    \end{equation}

    this apparently works ok.

<!--list-separator-->

-  Soft MoE

    ****Soft merging of experts with adaptive routing, Muqeeth et al****

    MoE, but instead of choosing an expert to activate, the router's probability densities will result in a mixture of the experts' weights. So, mulitple experts can be invoked in a linear way.


## Git-Theta {#git-theta}

**Git-Theta: A Git Extension for Collaborative Development of Machine Learning Models, Kandpal et al**

Communal and iterative development of model checkpoints. Saves only LoRA'd parameters, and removes any weights that didn't change between diffs.


## Petals {#petals}

**Petals: Collaborative Inference and Fine-Tuning of Large Models, Borzunov et al.**

Distributed fine-tuning and model inference by using different sub-worker nodes to run different layers of the model.

<https://health.petals.dev/>
