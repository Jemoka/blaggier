+++
title = "Language Model"
author = ["Houjun Liu"]
draft = false
+++

A [machine learning]({{< relref "KBhmachine_learning.md" >}}) model: **input** --- last n words, **output** --- probabilist distribution over the next word. An LM predicts this distribution ("what's the distribution of next word given the previous words):

\begin{equation}
W\_{n} \sim P(\cdot | w^{(t-1)}, w^{(t-2)}, \dots, w^{(1)})
\end{equation}

By applying the chain rule, we can also think of the language model as assigning a probability to a sequence of words:

\begin{align}
P(S) &= P(w^{(t)} | w^{(t-1)}, w^{(t-2)}, \dots, w^{(1)}) \cdot P(w^{(t-1)} | w^{(t-2)}, \dots, w^{(1)}) \dots  \\\\
&= P(w^{(t)}, w^{(t-1)}, w^{(t-2)}, \dots, w^{(1)})
\end{align}


## philosophizing {#philosophizing}

A striking example for the **generality of prediction**.


## N-Gram LM {#n-gram-lm}

We can use the Markov assumption: that a word only dependents on the last \\(n-1\\) terms.

By doing this, we can write:

\begin{align}
P(x\_{t} | x\_{t-1}, .. x\_{0}) &\approx P(x\_{t} | x\_{t-1}, .. x\_{t-n-1})  \\\\
&= \frac{P(x\_{t}, x\_{t-1}, .. x\_{t-n-1})}{P(x\_{t-1}, .. x\_{t-n-1})}
\end{align}

and we can then just use the counts to make this prediction.


### Problems {#problems}

Key idea: **language is extremely sparse**

-   any [OOV Words]({{< relref "KBhn_grams.md#oov-words" >}}) has the probability of zero, making it sad; we can kinda solve this by [Laplace Smoothing]({{< relref "KBhbaysian_parameter_learning.md#laplace-smoothing" >}}) but not really.
-   any given condition is hard to find; we can kinda solve this by [Stupid Backoff]({{< relref "KBhn_grams.md#stupid-backoff" >}})

Conflicting demands: more context is better, but with more context had more sparseness problems.


## Neural LM {#neural-lm}

Same task; we want a model for

\begin{equation}
W\_{n} \sim P(\cdot | w^{(t-1)}, w^{(t-2)}, \dots, w^{(1)})
\end{equation}

We use the same Markov assumption, and then use a fixed local window of text to try to predict the next word.

Naively learning from concatenated word vectors is bad, because that's weight are not length agnostic---that is, the **position** in the context in which a word occurs is very sensitive.


### Recurrent Neural Network {#recurrent-neural-network}

Key [RNN](#recurrent-neural-network) idea --- apply the same weights \\(W\\) repeatedly. Each of our hidden state would be the sum of the previous hidden state by a matrix, and multiply the new word by a matrix. So each step:

\begin{equation}
h\_{t} = \sigma \qty( W\_{h}h\_{t-1} + W\_{e} e\_{t} + b)
\end{equation}

Our LM input uses "Teacher Forcing": i.e. we only generate a single input.

Usually we define our loss as a multilpying the loss with \\(\frac{1}{T}\\) where \\(T\\) is the token count per doc.


#### Problems {#problems}

-   slow
-   hard to look into the past dramatically


#### Gradient {#gradient}

"gradient w.r.t. a repeated weight is the sum of the gradient for each time where it appears"

Recall that gradient sum at outer branches, so calculate gradient at each step.

Sometimes you would give up after backdropping \\(n\\) steps (not all the way into history.

\begin{equation}
\pdv{J}{W\_{h}} = \sum\_{i=1}^{t} \pdv{J^{(t)}}{W\_{h}}
\end{equation}


## Making a LM {#making-a-lm}

1.  collect a large training set from web, books, etc.
2.  prepare data is next-word prediction examples
3.  train as large as a neural network as you can

Seminal paper: (<a href="#citeproc_bib_item_1">Radford et al., n.d.</a>), established SOTA results on known benchmarks.
