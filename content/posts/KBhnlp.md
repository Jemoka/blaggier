+++
title = "NLP"
author = ["Houjun Liu"]
draft = false
+++

[Complex System]({{< relref "KBhcomplex_system.md" >}})


## Coherence {#coherence}

**Generative REVOLUTION**


### Why probability maximization sucks {#why-probability-maximization-sucks}

Its expensive!


### Beam Search {#beam-search}

1.  Take \\(k\\) candidates
2.  Expand \\(k\\) expansions for each of the \\(k\\) candidates
3.  Choose the highest probability \\(k\\) candidates

\\(k\\) should be small: trying to maximizing


### [Branch and Bound]({{< relref "KBhbranch_and_bound.md" >}}) {#branch-and-bound--kbhbranch-and-bound-dot-md}

See [Branch and Bound]({{< relref "KBhbranch_and_bound.md" >}})


### Challenges of Direct Sampling {#challenges-of-direct-sampling}

[Direct Sampling]({{< relref "KBhdirect_sampling.md" >}}) sucks. Its sucks. It sucks. Just sampling from the distribution sucks. This has to do with the fact that assigning slightly lower scores "being less confident" is exponentially worse.

The model has to therefore be VERY conservative about giving low confidences; so, it is over confident about worst tokens.


### Top-K {#top-k}

Top-k is too broad, and top


### Nucleaus Sampling {#nucleaus-sampling}

Find the smallest set of tokens that make up to \\(p\\) probability.


## Correctness {#correctness}

-   The highest probability answer isn't always right
-   Generative models consider every answer, so we want another model to compute the correct answer


### Surface Form Competition {#surface-form-competition}

The [Surface Form Competition](#surface-form-competition) problem results when top probabity token "steals" probability from the other tokens.

The predicted frequency of a possible string is a main comfounder. And so we can use models to decompose their own predictions:

Turns out:

\\(P(answer|question) \approx P(answer\ is\ valid)P(answer|domain)\\)

So...

\begin{equation}
P(answer\ is\ valid) = \frac{P(answer|question)}{P(answer|domain)}
\end{equation}

This is better :point_up:. Futher reading: (<a href="#citeproc_bib_item_1">Holtzman et al. 2021</a>)


#### Domain {#domain}

[Domain](#domain) is the context in which that the text may occur.


## Coverage {#coverage}

Why aren't models controllable


### Hallucination {#hallucination}

-   Language models predict what's most likely
-   We hope to control them with natural-language semantics


### In-Context Learning {#in-context-learning}

If we show the model some context which has example input output pairs, it can output. (model are few shot learners)


#### Correct Scoring {#correct-scoring}

We can reverse the output to predict the input to prevent model from loosing information, and use that to rerank the info. Of course, if the model can't generate the desired input, the output is probably missing information.

Smaller models can be made better because of info reranking.

Th Degenerative Discriminative Gap.


## Future Work {#future-work}

The fact that the single comma shift the input. What we need is a language to control language behavior.

****The Ability to Control a Model are the Goal of Understand the Model****

We should only claim to understand a model when we can make a theory map about it: "when X is fed into the model, we get Y"


### So: {#so}

-   we should look at what the model is biased about ([Surface Form Competition](#surface-form-competition), for instance)
-   we would be closer to prime behaviors such that they mimic the human behavior (in pieces, not just "complete these tokens") in completion
-   We see success as the actual evaluation metrics; we can use machines vs. other machines as the the results


## Questions {#questions}

ahai@uw.edu

Marcel Just

anthropic ai papers

**percy liang**
