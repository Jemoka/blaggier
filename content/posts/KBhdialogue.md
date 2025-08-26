+++
title = "Dialogue"
author = ["Houjun Liu"]
draft = false
+++

A human [Dialogue]({{< relref "KBhdialogue.md" >}}) is a human to human interaction.


## turn {#turn}

each contributino to a conversation is called a "turn", which contains a sentence, multiple sentences, or a single word


## turn-taking {#turn-taking}

-   when to take the floor
-   who takes the floor
-   what happens during interruptions?


## barge-in {#barge-in}

barge-in is the property to allow the user to interrupt the system


## end-pointing {#end-pointing}

deciding when a human has stopped talking, compute, etc.


## speech-act {#speech-act}

each [turn](#turn) is actually an "action" performed by the user

-   **constatives**: committing the speaker to something being the case (answering, denying)
-   **directives**: ask the addressee to do something (advising, ordering)
-   **com missives**: commuting the speaker to future action (planning, voving)
-   **acknowledgement**: reflecting the speaker's attitude for something (apologizing, greeting, etc.)


## common ground {#common-ground}

grounding is the problem of acknowledging and reflecting the state of interaction; such as the elevator lighting up when pressed.

**acknowledgements** and repeats is a way of grounding.

we need to make sure that the system acknowledges user interaction


## adjacency pairs {#adjacency-pairs}

-   question =&gt; answer
-   proposal =&gt; acceptance/rejection
-   complements =&gt; downplay

two-pair composition maybe interrupted or separated by a sub-dialogue


## conversational initiative {#conversational-initiative}

Sometimes, such as during interviews, only one agent has initiative. This is not true most of the time during human-human interactions.

**mixed initiative** is hard to achieve, usually we make dialogue systems as passive environments---only user and system understanding.
