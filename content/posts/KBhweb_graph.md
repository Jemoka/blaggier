+++
title = "Web Graph"
author = ["Houjun Liu"]
draft = false
+++

let's consider the web as a **directed graph**, where...

1.  a hyper-link denotes perceived relevance ("quality")
2.  anchor of the hyper-link describe the target page ("textual context")


## anchor text {#anchor-text}

consider:

-   IBM's mostly graphical homepage
-   IBM's copyright page
-   Rival's span IBM page

Consider, a million picees of [anchor text](#anchor-text) saying "IBM" pointing to ibm.com, suddenly, that legitimizes the home page

```html
<a href="target">[archor text that says IBM]</a>
```

So, when we index a website, we index not just the website but 1) all links pointing to it and 2) the text of those links.


### side effects {#side-effects}

"Google Bombing"---a lot of people artificially increasing the rank of the website by pointing a lot to it on more fake websites and writing in anchor text about the spoofed website

solution: weight each web page's target anchors based on their "authoritativeness"---either curated or calculated.


### uses of anchor text {#uses-of-anchor-text}

-   synonym usage (collect multiple ways of referring to the same website)
-   finding translations (collect multiple languages referring to the same website)
-   providing constituency boundaries (i.e. the anchor text is a NP within the larger sentence)


## PageRank {#pagerank}

"A page that's a very popular is a good page."


### Page Rank {#page-rank}

Solves the LinkCount problem by using the intuition that we want to weight [Directed Popularity](#directed-popularity) based on the importance of the page where the link is from.

**Precisely**: after starting at a random page, we walk along each link with equal probability and continue until we reach a time where a page's visitation rate converges. We will use this as PageRank


#### Teleporting {#teleporting}

To resolve the problem of dead ends, if we reach a dead end we jump to a random page.

Even if we didn't reach a dead end, with probability \\(\alpha\\) we still jump to a random page.

-   if the node has no out-link, the transition probability to each other node is \\(\frac{1}{N}\\)
-   if the node does have \\(K\\) out links, the probability of telephoning to a random node is \\(\frac{\alpha}{N}\\), and the probability of going to a normal out link is \\(\frac{1-\alpha}{k}\\).


#### Building PageRank Matrix {#building-pagerank-matrix}

For some matrix A, \\(A\_{ij}\\) is \\(1\\) if there is a hyper-link from \\(i\\) to \\(j\\).

If row \\(A\\) has no 1s, then we will replace each element by \\(\frac{1}{N}\\). For all other rows, divide each row by the sum of the row, and multplying each entry by \\((1-\alpha)\\). Then, add \\(\frac{a}{N}\\) to the whole row.


#### calculating [PageRank](#pagerank) {#calculating-pagerank--org69f1397}

uses the fact that the matrix you built in the previous step is [Ergotic]({{< relref "KBhmarkov_chain.md#ergotic-markov-chain" >}}) to [compute its steady state]({{< relref "KBhmarkov_chain.md#computing-steady-state" >}}).


### Link Count {#link-count}

**page that is pointed to by lots of other pages**

Failure: this is **very easy to spam**--we can just create a bunch of pages and add arbitrary number of links.


#### Undirected Popularity {#undirected-popularity}

"Degree": number of in links plus the number of out-links.


#### Directed Popularity {#directed-popularity}

Number of in-links
