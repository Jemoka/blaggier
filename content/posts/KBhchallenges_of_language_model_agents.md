+++
title = "Challenges of Language Model Agents"
author = ["Houjun Liu"]
draft = false
+++

## Challenge of Making Agents {#challenge-of-making-agents}

Agents are not very new---(<a href="#citeproc_bib_item_1">Riedl and Amant 2002</a>). But newer models can be powered by LLM/VLMs, meaning we are using language for reasoning/communication.


### Sequentiality is hard {#sequentiality-is-hard}

1.  what is the context/motivation?
2.  how to you transfer across contexts?
3.  how do you plan?


### Evaluation {#evaluation}

1.  Different from how previous NLP benchmarks: we are **not** worried about language modeling
2.  No longer boundaries between various fields

Common goals:

-   realistic agents---stop playing Atari games.
-   reproducible systems
-   measurability goals
-   scalable models
-   which are easy to use


#### Web as an Interactive Environment {#web-as-an-interactive-environment}

-   agents on the web is both practical and scalable
-   <https://webshop-pnlp.github.io/>
-   WebShop can actually transfer with no work to training on Amazon
-   Mind2Web


#### InterCode {#intercode}

Formulation of agent decisions as POMDP in order to fully benchmark Markovian decisions:

<https://arxiv.org/abs/2306.14898>


### Agent Development {#agent-development}

Agents development has no core framework


#### production systems {#production-systems}

-   set of rules specificying a precondition + action
-   when preconditinons are met, perform an action

Big kitchen sink proposal: <https://arxiv.org/abs/2309.02427>


### Trust and safety {#trust-and-safety}

Agents are much more powerful and dynamic


## Challenges of Agent Data Collection {#challenges-of-agent-data-collection}

Because agent data collection requires **embodiment** (it like actually have to touch the world).

1.  infra is hard (initial enevironment setup is really hard)
2.  complex observation-action interactions in divere environment
3.  we want to create / filter for goal-aligned alignment


### some strategies {#some-strategies}

-   humans do it
-   synthetic data: NNetNav or AgentTrek (limitation: parallelization and search is hard)
-   interest scale data: observing INTERNET demonstrations (but its hard to ground to some goal)


### human agent interaction collection procedure {#human-agent-interaction-collection-procedure}

-   Make users install [AgentNet]({{< relref "KBhagentnet.md" >}}) tool and capture the screen
-   Make humans do stuff that are goal aligned
-   Then, we now have unified agent data!


## Challenges of Agent Benchmarking {#challenges-of-agent-benchmarking}

-   only can write evaluation for very limited tasks: time consuming
-   can't script evaluation metrics for open-answer tasks (chichis from real users)
