+++
title = "Dissociating Language and Thought"
author = ["Houjun Liu"]
draft = false
+++

## Big Idea {#big-idea}


### Motivation: Touring Test {#motivation-touring-test}

Point of the Turing test: we can use language to get the underlying thought and the underlying cognition. However, language IS NOT thought.


### Language is not thought {#language-is-not-thought}

Good at language != good at thought =&gt; public speaking settings

Bad at language != bad at thought =&gt; language models?


### LLM eval should separate language and thought {#llm-eval-should-separate-language-and-thought}

1.  formal vs functional linguistic confidence (good at speaking and speaking is useful)
2.  generalized world knowledge


## Detour and motivation: cognitive science {#detour-and-motivation-cognitive-science}

-   language centre in brain is specific to a location, and changes in language doesn't change what region gets activated
-   language shows little/no response when we are thinking of cognitively challenging tasks lik emaffs

Key examples: aphasics can still think. So each skill is in a separate brain-place.


## Formal and Functional Competence {#formal-and-functional-competence}

Mahowold, Ivanlova, et al.

Can we find out what parts of the network separately process core language skills (syntax and formal grammar) vs. "functional" skills (semantics and mathematical reasoning), and how does LLMs perform in each area?


### Formal Competence {#formal-competence}

Unsurprisingly for us but surprisingly for linguists, GPT can grammar real good. No surprises there.


### Functional Competence {#functional-competence}

It can memorize the output, and it doesn't perform well for out of sample math/reasoning cases


## Generalized World Knowledge {#generalized-world-knowledge}

Two types of knowledge

-   ****Factual****: Paris is the capital of France; Birds lay eggs
-   **Distributional**: the sky is {blue, black, pink}. the first two are largely more likely

The **factual** side LLMs are very good at and that's again unsurpsininlgy. But for #2...

LLM embeddings have similar colours close together, and similar animals close together. LLMs are subject to reporter bias: we talk less about obvious things, yet LLMs are only trained on what we talk about.

---

Question 1: does the generalized world model require languages?

"The fox is chasing a planet." --- there is a logical failure here.

However, when shown semantically incompatible **events**, the language centre activates, but not very much. Doing this to aphasics still showed that having no difference.

SO: ****Language network is recruited but not required for event semantics****

---

Event knowledge evaluations:

-   This is actually formal and so LLMs do very well: "The laptop ate the teacher" (inanimate objects cannot eat, formal issue)
-   This is perceptual and LLMs do poorly: "The fox chased the rabbit" (foxes can't be slower than a fox)

Question: what happens if you in-context complete the recruitment of [counterfactual]({{< relref "KBhcounterfactual.md" >}})s
