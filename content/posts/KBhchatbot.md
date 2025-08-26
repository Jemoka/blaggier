+++
title = "Chatbot"
author = ["Houjun Liu"]
draft = false
+++

Two main [Dialogue Systems]({{< relref "KBhchatbot.md" >}}) architectures:

-   **frame based** systems: talk to users + accomplish specific tasks
-   **LLM**: reasoning as agents


## [Dialogue Systems]({{< relref "KBhchatbot.md" >}}) vs [Chatbot]({{< relref "KBhchatbot.md" >}}) {#dialogue-systems--kbhchatbot-dot-md--vs-chatbot--kbhchatbot-dot-md}

Previously, when we say [Chatbot]({{< relref "KBhchatbot.md" >}}) we mean task-based systems


## humans and chat {#humans-and-chat}

humans tend to think of [Dialogue Systems]({{< relref "KBhchatbot.md" >}}) as human-like even if they know its not. this makes users more prone to share private information and worry less about its disclosure.


## [ELIZA]({{< relref "KBheliza.md" >}}) {#eliza--kbheliza-dot-md}

see [ELIZA]({{< relref "KBheliza.md" >}})


## LLM Chatbots {#llm-chatbots}


### Training Corpus {#training-corpus}

C4: colossal clean crawled corpus

patent, wikipedia, news


### Chatbots {#chatbots}

-   EmphaticDialogues
-   SaFeRDialogues
-   Pseudo-conversations: reddit, twitter, weibo


### Fine-Tuning {#fine-tuning}

-   **quality**: improving sensible and interesting responses
-   **safety**: prevention of suggesting harmful actions

**IFT**: perhaps you can add positive data as fine tuning as a part of instruction-finetuning step.

**Filtering**: build a filter for whether something is safe/unsafe, etc.


### Retrieval Augmented Generation {#retrieval-augmented-generation}

1.  call search engine
2.  get back a retrieved passages
3.  shove them into prompt
4.  "based on this tasks, answer:"

we can make [Chatbot]({{< relref "KBhchatbot.md" >}})s use [RAG](#retrieval-augmented-generation) by adding "pseudo-participants" to make the chat bots, which the system should add.


## Evaluation {#evaluation}

-   **task based systems**: measure task performance
-   **chatbot**: enjoyability by humans

we evaluate chatbots by asking a human to assign a score, and observer is a third party that assigns a score via a transcript of a conversation.


### participants scoring {#participants-scoring}

interact with 6 turns, then score:

-   avoiding repetition
-   interestingness
-   sensemaking
-   fluency
-   listening
-   inquisitiveness
-   humanness
-   engagingness

ACUTE-EVAL: **choosing who you would like to speak to**


### adversarial evaluation {#adversarial-evaluation}

train a human/robot classifier, use it, use the inverse of its score at the metric of the chat bot


### task evaluatino {#task-evaluatino}

measure overall task success, or measure slot error rate


## design system design {#design-system-design}

Don't build **Frankenstein**: safety (ensure people aren't crashing cars), limiting representation harm (don't demean social groups), privacy


### study users and task {#study-users-and-task}

what are their values? how do they interact?


### build simulations {#build-simulations}

**wizard of oz** study: observe user interaction with a **HUMAN** pretending to be a chat bot


### test the design {#test-the-design}

test on users


### info leakage {#info-leakage}

-   accidentally leaking information (microphone, etc.)
-   intentionally leaking information due to advertising, etc.
