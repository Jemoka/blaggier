+++
title = "Language Model Agents"
author = ["Houjun Liu"]
draft = false
+++

agents that uses the language to act on behave of another person or group.


## Challenges {#challenges}

See [Challenges of Language Model Agents]({{< relref "KBhchallenges_of_language_model_agents.md" >}})


## Methods {#methods}


### ReAct {#react}

See [ReAct]({{< relref "KBhreact.md#react" >}})


### Aguvis {#aguvis}

Take the [AgentNet]({{< relref "KBhagentnet.md" >}}) dataset, and then tune a vison LM to roll out the rest of the sequence of actions given screenshots as input on top of a Qwen base model.

We can also add on top [Chain of Thought]({{< relref "KBhchain_of_thought.md" >}}) to get more thinking as well.


## Formulations {#formulations}


### OSWorld {#osworld}

A unified task setup and evaluation.

Motivation: Given language is a universal task specification, can we create a **universal digital environment**---with unified observation and action spaces?


#### spec {#spec}

<!--list-separator-->

-  config

    -   initial state: how to setup, what to open, what files, etc.
    -   evaluator: an evaluation script for task being done

<!--list-separator-->

-  Obeservation

    screen, screen shot, etc.

    <!--list-separator-->

    -  Screenshot vs API Tradeoffs

        -   most websites/applications don't have them exposed
        -   API outputs is very hard to verify quickly, whereas actual mouse action is easy to verify+stop

<!--list-separator-->

-  action

    mouse keyboard controls, move, PyAutoGui style


#### dataset {#dataset}

369 computer use task for evaluations


#### evals {#evals}

Claude, for one, is still really really bad at computer use. Claude computer use gets ~20% success rate versus humans' ~70%.


### Interactive Agents {#interactive-agents}

Big question: how to we align agents in an interactive, dynamic way (i.e. without instruction fine tuning which is hard). Language is information that helps agents **predict the future**; instructions is **world modeling**

-   instead of instructions =&gt; actions (executor)
-   instructions =&gt; updated belief (world model)

User intent =&gt; action shouldn't have LLM language representation in the middle as a bottleneck.

There is an underlying representation of the user's preferences, you have to use language to coax it out of them.


#### Dynalang {#dynalang}

1.  build model that takes vision + language as a joint input
2.  pass it through an auto-encoding representation
3.  have the world model predict the next-encoding representation

Main Idea: modeling language/tokens/images as a joint latent representation over time.

Training objective:

1.  reconstruction loss against the future presentation: using \\(R\_{i}\\) to predict  \\(R\_{i+1}\\)
2.  predict the reward over time
3.  regularize?

<!--list-separator-->

-  Workflow

    1.  take reward/preferences/behavior data
    2.  [structure learning]({{< relref "KBhstructure_learning.md" >}}) to create the relationships between elements in the data structure


## Evaluations {#evaluations}


### Computer Agent Arena {#computer-agent-arena}

<https://arena.xlang.ai>

-   an open source platform for digital ai agents
-   users can preference-rank different agent performances


#### workflow {#workflow}

-   select OS environment (Windows, Ubuntu...) to create identical instances
-   configure computers in **initial setup** using preset scripts / click to have custom setup (why custom setups? to create diversity of senarios to help more generalization)
-   we automatically generate interaction scenarios given a user task prompt
-   finally, human perform scoring:
    1.  Correct or Not?
    2.  Which one is Better?
    3.  Safe or not?


#### goals {#goals}

-   for eval: evaluate + rank agents
-   training: data collection, RL, etc.
