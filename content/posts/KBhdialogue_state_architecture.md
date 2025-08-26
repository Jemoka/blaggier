+++
title = "Dialogue State Architecture"
author = ["Houjun Liu"]
draft = false
+++

[Dialogue State Architecture]({{< relref "KBhdialogue_state_architecture.md" >}}) uses [dialogue acts](#dialogue-acts) instead of simple [frame]({{< relref "KBhgus.md#frame" >}}) filling to perform generation; used currently more in research.

{{< figure src="/ox-hugo/2024-03-01_09-52-46_screenshot.png" >}}

-   **NLU**: slot fillers to extract user's utterance, using ML
-   **Dialogue State Tracker**: maintains current state of dialogue
-   **Dialogue policy**: decides what to do next (think [GUS]({{< relref "KBhgus.md" >}})' policy: ask, fill, respond)---but nowaday we have more complex dynamics
-   **NLG**: respond


## dialogue acts {#dialogue-acts}

[dialogue acts](#dialogue-acts) combines [speech-act]({{< relref "KBhdialogue.md#speech-act" >}})s with underlying states

{{< figure src="/ox-hugo/2024-03-01_09-55-16_screenshot.png" >}}

{{< figure src="/ox-hugo/2024-03-01_09-55-39_screenshot.png" >}}


## slot filing {#slot-filing}

we typically do this with [BIO Tagging]({{< relref "KBhner_tagging.md#bio-tagging" >}}) with a BERT just like [NER Tagging]({{< relref "KBhner_tagging.md" >}}), but we tag for frame slots.

the final &lt;cls&gt; token may also work to classify domain + intent.


## corrections are hard {#corrections-are-hard}

folks sometimes uses [hyperarticulation](#corrections-are-hard) ("exaggerated prosody") for correction, which trip up ASR

correction acts may need to be detected explicitly as a speech act:

{{< figure src="/ox-hugo/2024-03-01_10-00-34_screenshot.png" >}}


## dialogue policy {#dialogue-policy}

we can choose over the last frame, agent and user utterances:

\begin{equation}
A = \arg\max\_{a} P(A|F\_{i-1}, A\_{i-1}, U\_{i-1})
\end{equation}

we can probably use a neural architecture to do this.

whether to confirm via ASR confirm:

-   \\(<\alpha\\): reject
-   \\(\geq \alpha\\): confirm explicitly
-   \\(\geq \beta\\): confirm implicitly
-   \\(\geq \gamma\\): no need to confirm


## NLG {#nlg}

once the speech act is determined, we need to actually go generate it: 1) choose some attributes 2) generate utterance

We typically want to **delexicalize** the keywords (Henry serves French food =&gt; [restraunt] serves [cruisine] food), then run through NLG, then rehydrate with frame.
