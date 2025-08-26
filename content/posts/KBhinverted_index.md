+++
title = "Inverted Index"
author = ["Houjun Liu"]
draft = false
+++

For each term \\(t\\), let's store all the documents containing \\(t\\). We identify each doc by DocID.


## postings list {#postings-list}

a "[postings list](#postings-list)" datastructure is a variable-length list which is appended to with "postings". In this way, we can store a "posting" for every DocID with the index we encounter.

For instance, this could be a linked list.

Although: we generally want to sort our [postings list](#postings-list) by documentID for ease of indexing.


## indexing process {#indexing-process}

1.  sort term vs. docID tuples by term alphabetically
2.  sort docIDs within each tuple by integer
3.  merge multiple entries in the single document, keeping track of total frequency
4.  consolidate information into postings list (`term + document frequency (how many documents does the term show up): [postings, here, ...]`)

    for instance

{{< figure src="/ox-hugo/2024-02-28_10-13-30_screenshot.png" >}}


## useful pre-processing {#useful-pre-processing}

-   cut character sequences into word tokens
-   map text and query into the same form
-   stemming or lemmatization
-   removing stopwords (the, a, to, etc.?) --- but this may not be a good idea (song "to be or not to be")


## handling phrases {#handling-phrases}


### biword index {#biword-index}

Sometimes, single word don't work well as tokens. sometimes, we use bi-grams instead to be indexed. Then, we can break any query down into series of bigrams ("stanford university palo alto" =&gt; (stanford university) (university palo) (palo alto))

We already have \\(V^{2}\\) blow up here. So this is actually **NOT** the standard solution.


### positional index {#positional-index}

in each posting of a [postings list](#postings-list), store the docID and a sublist of positions of the term within that document.

typically, for English/germanic/romatic languages, a positional index is 2-4 times as lange as a non-positional index. in particular, the size would be 35%-50% of the original text.


## Boolean Retrieval {#boolean-retrieval}


### AND query {#and-query}

"merge" two postings: identify intersections by two pointer at the head of both lists, check if the two pointers are pointing at the same docID.

-   if the answer is "no", advance the pointer pointed to the smaller docid
-   if the answer is "yes", advance both pointers

once any list is exhausted, stop.

And this is why we need the postings sorted.

Typically, when you start, you'd like to start your searches on your smallest postings list.


## phrase-query retrieval {#phrase-query-retrieval}

[phrase-query retrieval](#phrase-query-retrieval) is the prcoess to process documents where an exact phrase appears. First index for the postings list of the entire phrase:

then do the [Boolean Retrieval](#boolean-retrieval) iteratively---merge the phrases using AND queries first, then zoom into each document to merge their word positions, offset by one.

{{< figure src="/ox-hugo/2024-02-28_10-19-09_screenshot.png" >}}
