+++
title = "Bag of Words"
author = ["Houjun Liu"]
draft = false
+++

[Bag of Words]({{< relref "KBhbag_of_words.md" >}}) is an order-free representation of a [corpus]({{< relref "KBhcorpus.md" >}}). Specifically, each word has a count which we assign to each word without any other information about ordering, etc.

With the [Bayes Theorem]({{< relref "KBhbayes_theorem.md" >}}), we have:

\begin{equation}
C\_{MAP} = \arg\max\_{c \in C} P(d|c)P( c)
\end{equation}

where \\(d\\) is the document, and \\(c\\) is the class.

So, given a document is a set of a bunch of words:

\begin{equation}
C\_{MAP} = \arg\max\_{c\in C} P(x\_1, \dots, x\_{n}|c)P( c)
\end{equation}


## Naive Bayes for Text Classification {#naive-bayes-for-text-classification}

Assumptions of [Bag of Words]({{< relref "KBhbag_of_words.md" >}}) for [Naive Bayes]({{< relref "KBhnaive_bayes.md" >}})


### \\(P( c)\\) {#p--c}

The right side is just relative frequencies (count of freq divided by count of class).


### \\(P(x\_1, ..., x\_{n})\\) {#p--x-1-dot-dot-dot-x-n}

-   [Naive Bayes assumption]({{< relref "KBhnaive_bayes.md#id-6cdf74a2-2451-47d1-8a62-62aa6dff62c6-naive-bayes-assumption" >}}) (each word's position doesn't matter)
-   [Bag of Words]({{< relref "KBhbag_of_words.md" >}}) assumption (assume position doesn't matter)

So we have:

\begin{equation}
C\_{NB} = \arg\max\_{c\in C} P(c\_{j}) \prod\_{x\in X} P(x|c)
\end{equation}

We eventually use logs to prevent underflow:

\begin{equation}
C\_{NB} = \arg\max\_{c\in C}\log P(c\_{j}) +\sum\_{x\in X} \log P(x|c)
\end{equation}


### Parameter Estimation {#parameter-estimation}

Because we don't know new words completely decimating probability, we want to establish a [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}}) prior which smoothes the outcomes, meaning:

\begin{equation}
P(w\_{k}|c\_{j}) = \frac{n\_{k} + \alpha }{n + \alpha |V|}
\end{equation}

where \\(n\_{k}\\) is the number of occurrences of word \\(k\\) in class \\(C\\), and \\(n\\) is the number of words in total that occurs in class \\(C\\).


### Unknown Words {#unknown-words}

We ignore them. Because knowing a class has lots of unknown words don't help.


### Binary Naive Bayes {#binary-naive-bayes}

There is another version, which simply clip all the word count \\(n\_{k}\\) to \\(1\\) for both train and test. You do this by de-duplicating the entire corpus by **DOCUMENT** (i.e. if a word appears twice in the same document, we count it only once).


### Benefits {#benefits}

-   Doesn't have significant **fragmentation** problems (i.e. many important features clotting up decision)
-   Robust to irrelevant features (which cancel each other out)
