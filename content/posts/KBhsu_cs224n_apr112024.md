+++
title = "SU-CS224N APR112024"
author = ["Houjun Liu"]
draft = false
+++

## Linguistic Structure {#linguistic-structure}

Humans somehow turn linear into complex meaning with bigger, non-linear units. We need to make explicit this structural complexity. Sometimes, this is even ambiguous.

We can use this to extract information from human languages.


### Why is this hard? {#why-is-this-hard}

-   coding: **global clarity, local ambiguity** (number of white spaces doesn't matter, but code always have one exact meaning)
-   speaking: **global ambiguity, local clarity** (words are always clearly said, but what they refer to maybe unclear)


#### Prepositional Ambiguity {#prepositional-ambiguity}

Why? --- Prepositional Phrase does not have clear attachment. The sequence of possible attachments grows exponentially.


#### Coordination Scope Ambiguity {#coordination-scope-ambiguity}


### Two Representations {#two-representations}


#### Phrase-Structure Grammar {#phrase-structure-grammar}

[Phrase-Structure Grammar](#phrase-structure-grammar) uses [Context-Free Grammar]({{< relref "KBhcontext_free_grammar.md" >}})s to represent language into broken phrases (nobody actually does this unless you want to go build a [Constituency Parsing](#phrase-structure-grammar).)

1.  starting with word units (perform [POS Tagging]({{< relref "KBhpos_tagging.md" >}}))
2.  combine words into phrase units (create NPs, VPs, etc.)
3.  combine phrases into bigger phrases (build up sentences with phrase-level grammars)

With this parsing information, you can force a [Context-Free Grammar]({{< relref "KBhcontext_free_grammar.md" >}}) based on what could be possible:

And you can use this CFG to parse our text (not very well.... because of ambiguity).


#### Dependency Grammar {#dependency-grammar}

Dependency structure uses a graph between words to represents relationship directly on the world level.

"Which word is the head word, and what does it modify?"

1.  find head word
2.  which things modify the head word

repeat

<!--list-separator-->

-  Dependency Structure

    We begin with the headword of a sentence (usually the verb); and then, we go through the text and connect the head to each dependent; this forms a tree with the head word on top, and each word POINTS to its dependent (i.e. headword on top).

    Sometimes people point from dependent to head, but that's lame. So we point from HEAD to dependent (ROOT =&gt; Verb, and so on).

<!--list-separator-->

-  Sources of Dependency Information

    1.  Bilexical affinities --- is a particular pairwise dependency possible?
    2.  Dependency distance --- most, but not all dependencies are between nearby words
    3.  Intervening material --- dependencies rarely span intervening words or punctuations
    4.  valency ---- how many dependencies on which side are usual for a head?

<!--list-separator-->

-  Non-Projective Dependencies

    Dependencies can sometimes cross each other

<!--list-separator-->

-  Parsing Mechanism

    <!--list-separator-->

    -  Greedy Transition-Based Parsing

        -   take a stack, \\(\sigma\\), written with top tot the right
        -   take a buffer, \\(\beta\\), written with to to the left
        -   a set of dependency arcs \\(A\\), which we predict

        Three operations: push one word into the stack ("shift"), link last word on stack to second to last word ("arc-left"), link second to last word on stack to last word on stack ("arc-right")

    <!--list-separator-->

    -  Graph Based Parsing

        ask each word "what am I a dependent of?" So, it becomes a classification problem per word vs. other adjacent words. this is what Stanza uses

    <!--list-separator-->

    -  Evaluating Depparse

        We assess whether or not we have a good parser by checking whether or not the parsed arcs are good.

        <!--list-separator-->

        -  Unlabeled Dependency Score

            We consider the P/R/A/F of tuples of (head, dep, word, word), considering only exact matches as positive.

        <!--list-separator-->

        -  Labeled Dependency Score

            We consider the P/R/A/F of tuples of (head, dep, word, word, arc-label), considering only exact matches as positive.
