+++
title = "Information Retrival"
author = ["Houjun Liu"]
draft = false
+++

[Information Retrival]({{< relref "KBhinformation_retrival.md" >}}) is trying to **find material** within **large collections** which is **unstructured** which satisfies an **information need** (of structured info).

Unstructured information has had a massive outburst after the millennium.

IMPORTANTLY: evaluating [Information Retrival]({{< relref "KBhinformation_retrival.md" >}}) is based on Precision/Recall/F on [information need](#information-need) and not the [query](#query).

For ranked system, we can come up with a curve of precision-recall curve by selecting increasing \\(k\\), or [mean average precision]({{< relref "KBhmean_average_precision.md" >}}).


## Basic Terminology {#basic-terminology}


### collection {#collection}

a set of documents---could by static, or dynamically added


### goal {#goal}

retrieve documents with information **relevant to the user's information need** + to complete a **task**


### information need {#information-need}

[information need](#information-need) is the actual information that is needed by a search; this is usually translated into a search [query](#query), which is actually used to search.


### query {#query}

[query](#query) is a computer accessible form of text which searches to answer an [information need](#information-need).

-   [information need](#information-need): "info about removing mice without killing them"
-   [query](#query): "trapping mouse alive"


## Stages of Interpolation {#stages-of-interpolation}

-   user task =&gt; info need: we may not be looking for the right info
-   info need =&gt; query: we may not be using the best methods to get the info we are looking for


## Motivation {#motivation}

"what's wrong with grepping?"

1.  we cannot afford to do a linear search over web-scale data
2.  a "NOT" query is non-trivial
3.  no semantics
4.  we have no ranking, so we don't know what's the "best" document


## Ranked Approaches {#ranked-approaches}

[Ranked Information Retrieval]({{< relref "KBhranked_information_retrieval.md" >}})
