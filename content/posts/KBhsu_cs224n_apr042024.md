+++
title = "SU-CS224N APR042024"
author = ["Houjun Liu"]
draft = false
+++

## [stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}}) {#stochastic-gradient-descent--kbhstochastic-gradient-descent-dot-md}

See [stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}})


## Word2Vec {#word2vec}

see [word2vec]({{< relref "KBhword2vec.md" >}})

Or, we can even use a simpler approach, [window-based co-occurance]({{< relref "KBhwindow_based_co_occurance.md" >}})


## GloVe {#glove}

-   **goal**: we want to capture linear meaning components in a word vector space correct
-   **insight**: the _ratio_ of co-occurrence probabilities are linear meaning components

Therefore, [GloVe](#glove) vectors comes from a log-bilinear:

\begin{equation}
w\_{i} \cdot w\_{j} = \log  P(i|j)
\end{equation}

such that:

\begin{equation}
w\_{x} \cdot (w\_{a} - w\_{b}) = \log  \frac{P(x|a)}{P(x|b)}
\end{equation}


## Evaluating a NLP System {#evaluating-a-nlp-system}


### Intrinsic {#intrinsic}

-   evaluate on the specific target task the system is trained on
-   evaluate speed
-   evaluate understandability


### Extrinsic {#extrinsic}

-   real task + attempt to replace older system with new system
-   maybe expensive to compute


## Word Sense Ambiguity {#word-sense-ambiguity}

Each word may have multiple different meanings; each of those separate word sense should live in a different place. However, words with polysemy have related senses, so we usually average:

\begin{equation}
v = a\_1 v\_1 + a\_2v\_2 + a\_3v\_3
\end{equation}

where \\(a\_{j}\\) is the frequency for the \\(j\\) th sense of the word, and \\(v\_1 ... v\_{3}\\) are separate word senses.


### sparse coding {#sparse-coding}

if each sense is relatively common, at **high enough dimensions**, [sparse coding](#sparse-coding) allows you to recover the component sense vectors from the average word vectors because of the general sparsity of the vector space.


## Word-Vector NER {#word-vector-ner}

Create a window +- n words next to each word to classify; feed the entire sequence's embeddings concatenated into a neural classifier, and use a target to say whether the center word is a entity/person/no label, etc.

These simplest classifiers usually use [softmax]({{< relref "KBhsoftmax.md" >}}), which, without other activations, gives a linear decision boundary.

With a neural classifier, we can add enough nonlinearity in the middle to make the entire representation, but the final output layer will still contain a linear classifier.
