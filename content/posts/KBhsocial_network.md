+++
title = "Social Network"
author = ["Houjun Liu"]
draft = false
+++

A [Social Network]({{< relref "KBhsocial_network.md" >}}) is a scheme for studying the relationships and interactions amongst groups of people.

-   **people**: \\(V\\)
-   **relationship**: \\(E\\)
-   **system**: a network \\(G(V,E)\\)

Importantly, the "labels" of \\(E\\) often do not matter as we frequently want to study only the graphical structure of the [Social Network]({{< relref "KBhsocial_network.md" >}}).


## degree (node) {#degree--node}

The degree of a node is the number of edges that are touching that node (whether in or out, or undirected).

The in-degree and out-degree are the number of edges touching that node (going in or out) respectively.


### degree of node {#degree-of-node}

many nodes on the internet have fairly low degree, whereas some hubs have very high degree. Consider a function \\(P(k)\\), representing the number of nodes with degree \\(k\\). This follows a power law:

\begin{equation}
P(k) \propto k^{-a}
\end{equation}

meaning:

\begin{equation}
P(k) = ck^{-a}
\end{equation}

whereby as degree increases, the percentage of nodes with that number of degree drops of exponentially.

A power law distribution is log-log linear, and is "scale free": meaning no matter how the input \\(x\\) is scaled its simply resulting in a multiplicative constant under the output: shape does NOT change.


### Zipf's Law {#zipf-s-law}

\begin{equation}
freq(w\_{r}) \prop \frac{1}{r^{\beta}}
\end{equation}

where \\(\beta\\) is close to \\(1\\) and \\(w\_{r}\\) is the r-th most frequent word.


## betweenness {#betweenness}

the [betweenness](#betweenness) of a target node is calculated as: for all pairs of nodes on the graph that is not our target node, what's the ratio between the number of shortest paths between the two nodes and the number that goes through \\(j\\).

Formally:

for some node \\(j\\) for which we want to calculate [betweenness](#betweenness), and \\(s\_{ik}(j)\\) being the number of shortest paths between \\(i\\) and \\(k\\) that goes through \\(j\\) and \\(s\_{ik}\\) being the number of shortest paths there are in general, we have:

\begin{equation}
b\_{j} = \frac{\sum\_{i=1}^{n} \sum\_{k=1}^{n}  s\_{ik}(j)}{\sum\_{i=1}^{n} \sum\_{k=1}^{n} s\_{ik}}
\end{equation}

where \\(i \neq j \neq k\\)

Recall that with directed graphs we may need to double count.


## clustering coefficient {#clustering-coefficient}

for some node \\(A\\), the [clustering coefficient](#clustering-coefficient) measures the percentage of nodes directly adjacent to \\(A\\) which are also directly adjacent with each other.

recall that, if a node has \\(n\\) friends, the total possible edges is \\(\frac{n\qty(n-1)}{2}\\).


## Milgram Small-World experiment {#milgram-small-world-experiment}

made 300 people in Omaha NE to mail a thing to somebody in Boston by passing it through only people they knew by first-name basis.


## Small World Graph {#small-world-graph}

The world is a [Small World Graph](#small-world-graph): networks of friends is large, sparse, decentralized, and extremely clustered. Yet, people mostly seem to be about 5-6 degrees of separation away.

This characterizes a [Small World Graph](#small-world-graph):

-   high [clustering coefficient](#clustering-coefficient)
-   low average shortest path


### Watts and Strogatz {#watts-and-strogatz}

[Watts and Strogatz](#watts-and-strogatz) proposes a way to build a [Small World Graph](#small-world-graph):

1.  start with a ring and connect each node to the next \\(z\\) nodes
2.  with probability \\(p\\) on each node, rewire every edge/add a shortcut to a random node

as long as \\(0 < p < 1\\), we get a [Small World Graph](#small-world-graph)

**intuition**: a single random connection builds a shortcut through highly centralized clusters---high \\(C\\), low \\(L\\).


## weak link {#weak-link}

most job referrals were through personal contacts, but they are often **WEAK LINKS**.


### Triadic Closure {#triadic-closure}

If two people have a common friend, its likely that they become friends eventually too. This increases cluster coefficient.


#### Strong Triadic Closure {#strong-triadic-closure}

If there is a strong tie between \\(A - B\\), and \\(B - C\\), then there must be a strong tie between \\(A - C\\).

If this property is satisfied, then any [Local Bridge](#local-bridge) must be a weak tie. Otherwise:

{{< figure src="/ox-hugo/2024-03-06_20-12-33_screenshot.png" >}}

if there is a strong \\(A-B\\) tie and it is a local bridge, then \\(C-B\\) must be a connection under [Strong Triadic Closure](#strong-triadic-closure). yet, \\(A-B\\) is a local bridge.

By contradiction, \\(A-B\\) is a weak tie.


### Local Bridge {#local-bridge}

A [Local Bridge](#local-bridge) is an edge \\(x-y\\) which bridges two "local components" together. More formally, an edge between \\(A,B\\) is a [Local Bridge](#local-bridge) if it does not live on any triangle of \\(A\\) or \\(B\\).
