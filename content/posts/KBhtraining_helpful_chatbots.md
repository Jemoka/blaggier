+++
title = "Training Helpful Chatbots"
author = ["Houjun Liu"]
draft = false
+++

"What we have been building since ChatGPT at [H4]({{< relref "KBhh4.md" >}}).

-   No pretraining in any way


## Basic Three Steps {#basic-three-steps}

Goal: "helpful, harmless, honest, and huggy" bots.

1.  Retraining step: large-scale next token prediction
2.  Incontext learning: few shot learning without updating parameters
3.  "Helpful" steps
    1.  Taking supervised data to perform supervised fine tuning
4.  "Harmless" steps
    1.  Training a classifier for result ranking
    2.  RLHF


## Benchmarking {#benchmarking}

Before we started to train, we have a problem. Most benchmarks are on generic reasoning, which evaluates 1), 2). Therefore, we need new metrics for steps 4) and 5).

So:


### Evaluating instruction and "chatty-ness" {#evaluating-instruction-and-chatty-ness}

Pairwise [Elo Ratings]({{< relref "KBhelo_ratings.md" >}}) leaderboard from 🤗 + AlpacaEval. Both use GPT4 as the automated evaluator + as well as humans. MTBench from LMSYS has a new benchmark for the same thing, but supports multi-turn evaluation.

Three main effects observed:

1.  results improve _slightly_ the longer the prompt
2.  GPT4 MTBench assigns worse scores on gpt4 like data
3.  adding more data into fine tuning had diminishing returns after thousands of samples

TruthfulQA is the most differentiating benchmark; most others score about the same


### Evaluating Reward Model {#evaluating-reward-model}

There are not any open source reward models. Nor is there anything on evaluating or dataset on red teaming. The only dataset out there is Anthropic's red teaming data.

<https://huggingface.co/blog/red-teaming>


### Wackiness GPT4 as an evaluator {#wackiness-gpt4-as-an-evaluator}

Why is everybody using GPT4 as a proxy for humans?

1.  GPT4 has a left positional bias (if you admonish GPT about this, it will prefer the second one instead :/), while humans provide pretty much uniform rating
2.  "Doping": GPT4 prefers model trained on data that it itself generated
3.  GPT4 prefers a large variance in unique tokens
4.  GPT4 has bad correlation with humans with "low entropy" factual tasks: QA, Summarization, Code; it has better correlation with humans in brainstorming and creative generation

arxiv:2306.05685


## Supervised Fine Tuning {#supervised-fine-tuning}


### Data {#data}

"Self-Instruct" dataset, Wang et all 2022 =&gt; "Surge Instruct", huggingface 2023

-   Instruction (what to do)
-   Input (what to do it on)
-   Output (what you are supposed to do)

Goal: "helpful and chatty"


#### Bootstrapping Data Generation {#bootstrapping-data-generation}

-   175 seed tasks: 1 instruction + 1 input/output pair
-   Give it to a language model to generate more instructions
-   Language mode


#### Human-In-The-loop Data Generation {#human-in-the-loop-data-generation}

Ultrachat, Ding et al 2023

1.  human doing some research on the topic and create a prompt
2.  ask LLM to generate the output
3.  if result not good, rephrase the prompt
4.  repeat until good


#### Roleplaying Data Generation {#roleplaying-data-generation}

Have two models role play to get and correct data.


#### Huggingface Surge-Instruct {#huggingface-surge-instruct}

Humans write everything from scratch. With a pretrained model, diminishing return is seen after a few thousand high quality examples.

<!--list-separator-->

-  Task Distribution

    What should the topics be?

    Use InstructGPT as guidance: largestest section is a generation task (12%), OpenQA the second largest one (12.4%).

    HF replaced InstructGPT distribution's "Other" section (3.5%) with code work.

<!--list-separator-->

-  Length Distribution

    How long should the prompts be? Collected distributions, and Surge Instruct seems to be closest with InstructionGPT.

    Both Anthropic and InstructGPT used a US based task force, and so so did 🤗

    -   us based taskforce
    -   roughly even gender slpit
    -   19 to 62 years old
    -   primarily white
    -   technical degree to PhD

    Only used one turn. Multi-turn fine tuning wasn't a thing a few mounths ago.


### Training {#training}

-   starcoder, falcon, llama2
-   True fine tuning + [PEFT]({{< relref "KBhpeft.md" >}}) (LoRA)


## The HF part of RLHF {#the-hf-part-of-rlhf}

Scale agreed with Surge and [H4]({{< relref "KBhh4.md" >}}) a lot more, but mostly no one agreed with anyone.

Goal: "safe and factual"


### Task Distribution {#task-distribution}

Distribution: a lot more about factual things (because we want to encourage factualness) so much more math and code than the general generation. Its also easier to score.


### Ranking Guidelines {#ranking-guidelines}

-   OpenAI have guidelines about how to rate
-   Rate every turn from the diaglogue
-   Smaller total length (&lt;2048 tokens)
-   **Helpfulness OVER honesty** -- this is the opposite of OpenAI because the model wasn't large enough to be very honest

Two step selection: "which one is better" =&gt; "how much is better"
