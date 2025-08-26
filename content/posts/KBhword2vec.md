+++
title = "word2vec"
author = ["Houjun Liu"]
draft = false
+++

we will train a classifier on a binary prediction task: "is context words \\(c\_{1:L}\\) likely to show up near some target word \\(W\_0\\)?"

We estimate the probability that \\(w\_{0}\\) occurs within this window based on the product of the probabilities of the similarity of the embeddings between each context word and the target word.

-   we have a corpus of text
-   each word is represented by a [vector]({{< relref "KBhvector.md" >}})
-   go through each position \\(t\\) in the text, which has a center word \\(c\\) and set of context words \\(o \in O\\)
-   use similarity of word vectors \\(c\\) and \\(o\\) to calculate \\(P(o|c)\\)

Meaning, we want to devise a model which can predict high probabilities \\(P(w\_{t-n}|w\_{t})\\) for small \\(n\\) and low probabilities for large \\(n\\)


## Word2Vec is a [Bag of Words]({{< relref "KBhbag_of_words.md" >}}) model! {#word2vec-is-a-bag-of-words--kbhbag-of-words-dot-md--model}

This is a [Bag of Words]({{< relref "KBhbag_of_words.md" >}}) model as our training does **not** learn any information relating to the ordering and structure between words.


## Likelihood {#likelihood}

If we wrote the above out:

\begin{equation}
L(\theta) = \prod\_{t=1}^{T} \prod\_{-m \leq j \leq m, j\neq 0}^{} p\_{\theta}(w\_{t+j} | w\_{t})
\end{equation}


### Calculating \\(p\_{\theta}\\) {#calculating-p-theta}

We are going to use **TWO VECTORS** for each word:

-   \\(v\_{w}\\) when \\(w\\) is the center word
-   and \\(u\_{w}\\) when \\(w\\) is a context words

These vectors are the **only parameters** of our system. We actually do this only to make the math easy; to get the "word vector" for a word by averaging.

Therefore:

\begin{equation}
p(o|c) = \frac{\exp\qty(u\_{o} \cdot v\_{c})}{ \sum\_{w \in V}^{} \exp \qty(u\_{w} \cdot v\_{c})}
\end{equation}

-   exponentiation makes anything positive
-   normalize over the entire vocabulary

this is a [softmax]({{< relref "KBhsoftmax.md" >}}) operation.


## Objective Function {#objective-function}

But we perform:

1.  descent
2.  and log on each value to prevent underflow
3.  and average why not

\begin{equation}
J(\theta) = \frac{1}{T} \log L(\theta) = -\frac{1}{T} \sum\_{t=1}^{T} \sum\_{-m \leq j \leq  m, j\neq 0}^{} \log p\_{\theta}\qty(w\_{t+j} | w\_{t})
\end{equation}

Recall that:

\begin{equation}
p(o|c) = \frac{\exp\qty(u\_{o} \cdot v\_{c})}{ \sum\_{w \in V}^{} \exp \qty(u\_{w} \cdot v\_{c})}
\end{equation}

Because we need to minimize this, we need the derivative of it by the parameter:

\begin{align}
\pdv{J}{w\_{t}} &= -\frac{1}{T} \sum\_{t=1}^{T} \sum\_{-m \leq j \leq  m, j\neq 0}^{} \pdv w\_{t} \log p\_{\theta}\qty(w\_{t+j} | w\_{t})
\end{align}

meaning, we now can just calculate the inner part:

\begin{equation}
\pdv{\log p(o|c)}{v\_{c}} = \pdv v\_{c} \log \exp u\_{o} \cdot v\_{c} - \pdv v\_{c} \log \sum\_{w\_{j}}^{} \exp \qty(u\_{w} \cdot v\_{c})
\end{equation}

Look! The first part is a log of an exp, which cancels out, so the derivative is just \\(u\_{0}\\).

For the right part, by the chain rule:

\begin{align}
\pdv v\_{c} \log \sum\_{w\_{j}}^{} \exp \qty(u\_{w} \cdot v\_{c}) &=  \frac{\sum\_{x\_{j}}^{} \pdv v\_{c}\exp \qty(u\_{x} \cdot v\_{c}) }{\sum\_{w\_{j}}^{} \exp \qty(u\_{w} \cdot v\_{c})}  \\\\
&= \frac{\sum\_{x\_{j}}^{}\exp \qty(u\_{x} \cdot v\_{c}) u\_{x}}{\sum\_{w\_{j}}^{} \exp \qty(u\_{w} \cdot v\_{c})}
\end{align}

Combining this whole thing, we have:

\begin{equation}
\pdv{\log p(o|c)}{v\_{c}} = u\_{0} - \frac{\sum\_{x\_{j}}^{}\exp \qty(u\_{x} \cdot v\_{c}) u\_{x}}{\sum\_{w\_{j}}^{} \exp \qty(u\_{w} \cdot v\_{c})}
\end{equation}

Rewriting this slightly:

\begin{equation}
\pdv{\log p(o|c)}{v\_{c}} = u\_{0} - \sum\_{x\_{j}}^{}\frac{\exp \qty(u\_{x} \cdot v\_{c}) }{\sum\_{w\_{j}}^{} \exp \qty(u\_{w} \cdot v\_{c})}  u\_{x}
\end{equation}

Meaning:

\begin{equation}
\pdv{\log p(o|c)}{v\_{c}} = u\_{0} - \sum\_{x\_{j}}^{}\frac{\exp \qty(u\_{x} \cdot v\_{c}) }{\sum\_{w\_{j}}^{} \exp \qty(u\_{w} \cdot v\_{c})}  u\_{x}
\end{equation}

The right side is just the softmax probabilty of each \\(u\_{x}\\) times \\(u\_{x}\\), meaning its \\(\mathbb{E}[u\_{x}]\\); so, this loss just minimizes "error between output and expectation".


## Word2Vec Variants {#word2vec-variants}


### Model {#model}

-   [skip-gram](#skip-gram-with-negative-sampling)---predict probability of being side words \\(P(o|c)\\)
-   CBOW---predict probability of being center word given side words


### Objective {#objective}

-   naive softmax (above)
-   hierachichar softmax
-   [negative sampling]({{< relref "KBhnegative_sampling.md" >}}) (see also [skip-gram with negative sampling](#skip-gram-with-negative-sampling))


## properties {#properties}


### window size {#window-size}

-   **smaller windows**: captures more syntax level information
-   **large windows**: capture more semantic field information


### parallelogram model {#parallelogram-model}

simple way to solve analogies problems with vector semantics: get the difference between two word vectors, and add it somewhere else to get an analogous transformation.

-   only words for frequent words
-   small distances
-   but not quite for large systems


#### allocational harm {#allocational-harm}

embeddings bake in existing biases, which leads to bias in hiring practices, etc.


## skip-gram with negative sampling {#skip-gram-with-negative-sampling}

[skip-gram](#skip-gram-with-negative-sampling) trains vectors separately for word being used as target and word being used as context.

the mechanism for training the embedding:

-   select some \\(k\\), which is the count of negative examples (if \\(k=2\\), every one positive example will be matched with 2 negative examples)
-   sample a target word, and generate positive samples paired by words in its immediate window
-   sample window size times \\(k\\) negative examples, where the noise words are chosen explicitly as not being near our target word, and weighted based on unigram frequency

for each paired training sample, we minimize the loss via binary [cross entropy loss]({{< relref "KBhcross_entropy_loss.md" >}}):

\begin{equation}
L\_{CE} = -\qty[ \log (\sigma(c\_{pos} \cdot w)) + \sum\_{i=1}^{k} \log \sigma\qty(-c\_{neg} \cdot w)]
\end{equation}

recall that:

\begin{equation}
\pdv{L\_{CE}}{w} = \qty[\sigma(c\_{pos} \cdot w) -1]c\_{pos} + \sum\_{i=1}^{k} \qty[\sigma(c\_{neg\_{i}}\cdot w)]c\_{neg\_{i}}
\end{equation}

Importantly, because the [softmax]({{< relref "KBhsoftmax.md" >}}) function is symmetric \\(\sigma(-x) = -\sigma(x)\\). So really our objective is:

\begin{equation}
L\_{CE} = -\qty[ \log (\sigma(c\_{pos} \cdot w)) - \sum\_{i=1}^{k} \log \sigma\qty(c\_{neg} \cdot w)]
\end{equation}


### how to sample \\(k\\) {#how-to-sample-k}

We actually sample from:

\begin{equation}
P(w) \sim U(w)^{3/4}/Z
\end{equation}

to give the less common words slightly higher probability.
