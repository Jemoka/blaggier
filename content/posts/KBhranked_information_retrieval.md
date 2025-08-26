+++
title = "Ranked Information Retrieval"
author = ["Houjun Liu"]
draft = false
+++

Most users are incapable of writing good [Boolean Retrieval]({{< relref "KBhinverted_index.md#boolean-retrieval" >}}) queries.


## feast or famine problem {#feast-or-famine-problem}

[Boolean Retrieval]({{< relref "KBhinverted_index.md#boolean-retrieval" >}}) either returns too few or too many results: AND queries return often too few results \\(\min (x,y)\\), and OR queries return too many results \\(x+y\\).

This is not a problem with [Ranked Information Retrieval]({{< relref "KBhranked_information_retrieval.md" >}}) because a large result set doesn't matter: top results just needs to be good results.


## free text query {#free-text-query}

Instead of using a series of [Boolean Retrieval]({{< relref "KBhinverted_index.md#boolean-retrieval" >}}), we instead give free text to the user.


## score {#score}

To do [Ranked Information Retrieval]({{< relref "KBhranked_information_retrieval.md" >}}), we need a way of asigning a [score](#score) to a query-document pair.

1.  the more frequently the query term appears in the doc, the higher the score should be
2.  if the word doesn't appear, we score as 0


### Jaccard Coefficient {#jaccard-coefficient}

\begin{equation}
jaccard(A,B) = |A \cap B | / |A \cup B|
\end{equation}

where \\(A\\) and \\(B\\) are vocab, (i.e. no frequency).


#### limitation {#limitation}

1.  doesn't consider **frequency**
2.  rare terms are more informative than frequent terms
3.  the normalization isn't quite right, ideally we should use \\(\sqrt{A\cup B}\\), which can be obtained via cosine-similarity


### log-frequency weighting {#log-frequency-weighting}

"Relevance does not increase proportionally with term frequency"---a document with 10 occurrences of a term is more relevant than that with 1, but its not 10 times more relevant.

\begin{equation}
w\_{t,d} = \begin{cases}
1 + \log\_{10} (tf\_{t,d}), \text{if } tf\_{t,d} > 0 \\\\
0
\end{cases}
\end{equation}

this gives less-than-linear growth.

to score, we add up all the terms which intersect.


### document frequency {#document-frequency}

the [document frequency](#document-frequency) is the number of documents in which a term occur.

Its an **INVERSE MEASURE** of the informativeness of a word---the more times a word appears, the less informative it is.

\begin{equation}
idf\_{t} = \log\_{10} (N / df\_{t})
\end{equation}

where \\(N\\) is the number of documents, and \\(df\_{t}\\) is the number of documents in which the term appears. We take the log in the motivation as [log-frequency weighting](#log-frequency-weighting).

"a word that occurs in every document has a weight of \\(0\\)".

There is no effect to one-term queries.

We don't use **collection frequencies** (i.e. we never consider COUNTS in CORPUS, because collection frequencies would score commonly found words equally because it doesn't consider distribution).


### TF-IDF {#tf-idf}

multiply [log-frequency weighting](#log-frequency-weighting) TIMES [document frequency](#document-frequency).

\begin{equation}
score(q,d) = \sum\_{t \in q \cap d} (1+\log\_{10}(tf\_{t,d})) \times \log\_{10}\qty(\frac{N}{df\_{t}})
\end{equation}

if \\(tf = 0\\), set the entire TF score to \\(0\\) without adding 1.

using this, we can now construct a weight-matrix. Each document is a vector of the TFIDF score for each term against each document.

There are a series of approaches that you can use as a possible approach to compute tfidf: various ways to normalizing, variable document frequency counts (or not use it), etc.


#### SMART notation {#smart-notation}

`ddd.qqq`, where the first three letters represent the document weighting scheme, and the second three letter represents the query weighting scheme.

{{< figure src="/ox-hugo/2024-02-24_21-04-31_screenshot.png" >}}


## vector-space model {#vector-space-model}

after creating a matrix where each column is a document and each row is a term, and the cells are [TF-IDF](#tf-idf) of the words against the documents, we can consider each document as a vector over the team.

we can treat queries as **ALSO** a document in the space, and therefore use proximity of the vectors as a searching system.

(Euclidian distance is bad: because its too large for vectors of different lengths. Instead, we should use angle instead of distance.)


### cosine similarity {#cosine-similarity}

\begin{equation}
\cos(q,d) = \frac{q \cdot d}{|q| |d|}
\end{equation}

because the dot product becomes just the angle between the two vectors after you normalize by length.

typically, you may want to normalize the length of the vectors in advance.

cosine is a little flatten ontop


### ltc.lnn weighting {#ltc-dot-lnn-weighting}

document: logarithm + idf + normed
query: logarithm + 1 + 1

meaning, we don't weight or normalize query vectors
