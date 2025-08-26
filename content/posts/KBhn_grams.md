+++
title = "N-Grams"
author = ["Houjun Liu"]
draft = false
+++

Main goals: assign a probability of each sequence of words existing:

\begin{equation}
P(W) = P(w\_1, \dots, w\_{n})
\end{equation}

closely related is the NLG formulation of predicting an upcoming word:

\begin{equation}
P(w\_5|w\_1, \dots, w\_{n})
\end{equation}

either of these we call a "grammar", or "[Language Model]({{< relref "KBhlanguage_model.md" >}})".


## Chain Rule Language Modeling {#chain-rule-language-modeling}

Recall [probability chain rule]({{< relref "KBhprobability.md#conditional-probability" >}}). Now, the probability of a sequence like:

\begin{equation}
P(its\ water\ is\ so\ transparent)
\end{equation}

gives:

\begin{equation}
P(its) \times P(water|its) \times P(is | its\ water) \dots
\end{equation}

That is:

\begin{equation}
P(w\_1 \dots w\_{n}) = \prod\_{i}P(w\_{i} | w\_1 \dots w\_{i-1})
\end{equation}


## Markov Assumption {#markov-assumption}

Because we can't make conditional counts over all words all the time, we make an assumption: the probability of the current word is the probability of the current word conditioned on the probability of the last \\(k\\) words.

\begin{equation}
P(w\_1, \dots, w\_{n}) \approx \prod\_{i}P(w\_{i} | w\_{i-k} \dots w\_{i-1})
\end{equation}


## Unigrams {#unigrams}

The simplest [Markov Assumption](#markov-assumption) is unigrams, which will be word salad generation because it has no understanding of language structure.


### Naive Bays Language Modeling {#naive-bays-language-modeling}

You can consider each class in Naive Bayes \\(P(word | c)\\) as a language model.

So:

\begin{equation}
P(sentence|c) = \prox\_{i}P(word\_{i}|c)
\end{equation}

Each class is a separate class-conditioned language model. So, we just want to compute the probability of each sentence, and classify the sentence based on the higher probability result.


## Limitations {#limitations}

In general, n gram models are limited because they don't consider long distance dependencies which are present in English.


## Estimating [N-Grams]({{< relref "KBhn_grams.md" >}}) {#estimating-n-grams--kbhn-grams-dot-md}

Many counts are results of...

1.  world ("people want chinese food more often, so want+Chinese appears more")
2.  grammar ("want+want is less likely")


### [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) {#mle--kbhmaximum-likelihood-parameter-learning-dot-md}

\begin{equation}
P(w\_{i} | w\_{i-1}) = \frac{C(w\_{i-1}, w\_{i})}{C(w\_{i-1})}
\end{equation}


### MAP, i.e. [Laplace Smoothing]({{< relref "KBhbaysian_parameter_learning.md#laplace-smoothing" >}}) {#map-i-dot-e-dot-laplace-smoothing--kbhbaysian-parameter-learning-dot-md}

\begin{equation}
P(w\_{i} | w\_{i-1}) = \frac{C(w\_{i-1}, w\_{i})+1}{C(w\_{i-1})+V}
\end{equation}

we have to add \\(V\\) on the denominator because every word could possibly follow \\(w\_{i-1}\\). Note that as \\(N\\) increases we actually still add \\(V\\) because we are predicting at each time a **single word** (just conditioned on more words), so if we are smoothing output we are only adding \\(V\\) extra counts.

IMPORTANT NOTE THOUGH: this is typically not used for [N-Grams]({{< relref "KBhn_grams.md" >}}) (because there are simply so many OOS sequences). Instead, its more frequently used in other cases such as [Naive Bayes for Text Classification]({{< relref "KBhbag_of_words.md#naive-bayes-for-text-classification" >}}).


### Log Probs {#log-probs}

In practice, we keep probability as log probabilities after we computed them.


### N-Gram Models {#n-gram-models}

Google n-gram models, SRILM


### Backoff {#backoff}

Use trigrams if high probability evidence is found, otherwise bigrams or unigrams


#### Stupid Backoff {#stupid-backoff}

1.  give the [MLE]({{< relref "KBhmaximum_likelihood_parameter_learning.md" >}}) if the conditioning sequence has a non-zero count
2.  otherwise, start backing off, recursively calculating the probability of the current word given the last n-1-gram, multplied by a discount factor
3.  if we end up with a unigram, just give the unigram probability

This **DOES NOT PRODUCE A PROBABILITY** as it is not normalized. Instead of being probabilites, we consider them "scores".


### Unigram Interpolation {#unigram-interpolation}

In practice, [Interpolation](#unigram-interpolation) works better. [Interpolation](#unigram-interpolation) smoothes the probability between unigram, bigram, and trigrams.

Mostly simply, we mix them with some factors \\(\lambda\_{1}, \lambda\_{2}, \lambda\_{3}\\), where \\(\sum\_{i} \lambda\_{i} = 1\\). This makes a weighted average over probabilities:

\begin{equation}
P(comb) = \lambda\_{1} P(uni) + \lambda\_{2} P(bi)+ \lambda\_{3} P(tri)
\end{equation}

lambdas could also be a function of the previous tokens.

We sometimes obtain this with a disjoint dataset from the original training set, whereby we train some ngrams from the original dataset, and then identify \\(\lambda\\) which maximises the probabilities.


### OOV Words {#oov-words}

we sometimes replace the lowest likelyhood few words with `<UNK>`, and train models such that we can have an [open vocabulary](#oov-words): whenever we encounter unknown words, we replace it with `<UNK>`


## Scaling Up {#scaling-up}

Strategies to make LMing with Ngrams more efficient

-   pruning: only store ngrams of top k
-   use tries (suffix trees, etc.)
-   approximations: bloom filter
-   storing indicies
