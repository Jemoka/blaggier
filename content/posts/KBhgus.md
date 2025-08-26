+++
title = "GUS"
author = ["Houjun Liu"]
draft = false
+++

[GUS]({{< relref "KBhgus.md" >}}) is the a architecture of [frame](#frame) based [Dialogue Systems]({{< relref "KBhchatbot.md" >}}); this is sometimes called a **domain ontology**.

General principle: try to fill as many user slots in the frame as possible that the user specifies, if the frame is filled, do action and report result.

You maybe working in multi-frame systems, then in which case some slots in one frame may help inform or fill those in another frame.

[GUS]({{< relref "KBhgus.md" >}}) uses regular expressions/grammar rules to perform all of its tasks. Generating responses are usually completely templated.


## tradeoffs {#tradeoffs}

-   **high precision**
-   **low recall**
-   **maybe hard to write**


## three tasks {#three-tasks}

-   **domain classification**: which frames to activate?
-   **intent determination**: which tasks to activate once frame is filled?
-   **slot filling**: fill frame

we can actually consider this as one giant frame:

{{< figure src="/ox-hugo/2024-03-01_09-47-15_screenshot.png" >}}


## frame {#frame}

[frame](#frame) is a structure which is used to store information about an interaction.

| Slot   | Type | Question |
|--------|------|----------|
| origin | city | "....?"  |
| ...    | ...  | ...      |

which, throughout the interaction, is filled out by asking the questions.
