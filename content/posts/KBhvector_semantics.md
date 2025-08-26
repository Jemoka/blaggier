+++
title = "vector semantics"
author = ["Houjun Liu"]
draft = false
+++

[vector semantics]({{< relref "KBhvector_semantics.md" >}}) is a [sense]({{< relref "KBhsense.md" >}}) encoding method.

"a meaning of the word should be tied to how they are used"

we measure similarity between word [vector]({{< relref "KBhvector.md" >}})s with [cosine similarity]({{< relref "KBhranked_information_retrieval.md#cosine-similarity" >}}). see also [vector-space model]({{< relref "KBhranked_information_retrieval.md#vector-space-model" >}}).


## motivation {#motivation}


### idea 1 {#idea-1}

neighboring words can help infer semantic meaning of new words: "we can define a word based on its distribution in language use"


### idea 2 {#idea-2}

meaning should be in a point in space, just like [affective meaning]({{< relref "KBhsense.md#affective-meaning" >}}) (i.e. a score in each dimension).

that is: a word should be a [vector]({{< relref "KBhvector.md" >}}) in n space


## [vector semantics]({{< relref "KBhvector_semantics.md" >}}) {#vector-semantics--kbhvector-semantics-dot-md}

Each word is a point based on distribution; each word is a [vector]({{< relref "KBhvector.md" >}}) and similar words are nearby in semantic space.

The intuition is that classifiers can generalize to similar, but unseen words more easily by processing embeddings.


## transposing a [Term-Document Matrix]({{< relref "KBhterm_document_matrix.md" >}}) {#transposing-a-term-document-matrix--kbhterm-document-matrix-dot-md}

Typically we read a [Term-Document Matrix]({{< relref "KBhterm_document_matrix.md" >}}) column-wise, to understand what each document can be encoded in terms of words.

However, if you read it row-wise, you can see a distribution for words over the documents.


## term-term matrix {#term-term-matrix}

a [term-term matrix](#term-term-matrix) is a \\(|V| \times |V|\\) matrix that measures co-occurrence in some context. So each cell would be the number of times the two words co-occur in some small window.


### point-wise mutual information {#point-wise-mutual-information}

we usually normalize a [Term-Document Matrix]({{< relref "KBhterm_document_matrix.md" >}}) via [TF-IDF]({{< relref "KBhranked_information_retrieval.md#tf-idf" >}}). However, for [term-term matrix](#term-term-matrix), we usually normalize it as:

\begin{equation}
PMI(w\_1, w\_2) = \log  \frac{p(w\_1,w\_2)}{p(w\_1)p(w\_2)}
\end{equation}

"would something appear more often then change"


## word2vec {#word2vec}

see [word2vec]({{< relref "KBhword2vec.md" >}})
