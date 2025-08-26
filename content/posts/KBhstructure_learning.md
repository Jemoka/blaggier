+++
title = "structure learning"
author = ["Houjun Liu"]
draft = false
+++

We learn a [Bayes Net]({{< relref "KBhbaysian_network.md" >}}) grphical structure by following [Bayes rule]({{< relref "KBhbayes_theorem.md" >}}):

\begin{align}
P(G|D) &\propto P(D|G) P(G)   \\\\
&= P(G) \int P(D | \theta, G) P(\theta|G) d\theta  \\\\
&= P(G) \prod\_{i=1}^{n} \prod\_{j=1}^{q\_{i}} \frac{\Gamma(\alpha\_{i,j,0})}{\Gamma(\alpha\_{i,j,0} + m\_{i,j,0})} \prod\_{k=1}^{r\_{i}} \frac{\Gamma(\alpha\_{i,j,k} + m\_{i,j,k})}{\Gamma(\alpha\_{i,j,k})}
\end{align}

where, we define: \\(\alpha\_{i,j,0} = \sum\_{k} \alpha\_{i,j,k}\\).

The actual integration process is not provided, but mostly uninteresting. See [Beta Distribution]({{< relref "KBhbaysian_parameter_learning.md#beta-distribution" >}}) for a flavour of how it came about.

This is hard. We are multiply many gammas together, which is computationally lame. So instead, we use


## Baysian Network Scoring {#baysian-network-scoring}

[Log Bayesian Score](#baysian-network-scoring) is a score for measure of well-fittingness of a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) against some data. We sometimes call this the [Baysian Score](#baysian-network-scoring).

Let:

-   \\(x\_{1:n}\\) be variables
-   \\(o\_1, ..., o\_{m}\\) be the \\(m\\) observations we took
-   \\(G\\) is the graph
-   \\(r\_{i}\\) is the number of instantiations in \\(X\_{i}\\) (for boolean variables, this would be \\(2\\))
-   \\(q\_{i}\\) is the number of parental instantiations of \\(X\_{i}\\) (if parent 1 can take on 10 values, parent 2 can take 3 values, then child's \\(q\_{i}=10\cdot 3=30\\)) --- if a node has no parents it has a \\(q\_{i}\\) is \\(1\\)
-   \\(\pi\_{i,j}\\) is \\(j\\) instantiation of parents of \\(x\_{i}\\) (the \\(j\\) th combinator)

Let us first make some observations. We use \\(m\_{i,j,k}\\) to denote the COUNT of the number of times \\(x\_{i}\\) took a value \\(k\\) when \\(x\_{i}\\) parents took instantiation \\(j\\).

We aim to compute:

\begin{equation}
\log P(G|D) = \log P(G) + \sum\_{i=1}^{n} \sum\_{j=1}^{q\_{i}} \qty[\qty(\log \frac{\Gamma(\alpha\_{i,j,0})}{\Gamma(\alpha\_{i,j,0}+ m\_{i,j,0})}) + \sum\_{k=1}^{r\_{i}} \log \frac{\Gamma(\alpha\_{i,j,k} + m\_{i,j,k})}{\Gamma(\alpha\_{i,j,k})}]
\end{equation}

In practice, uniform prior of the graph is mostly used always. Assuming uniform priors, so \\(P(G)=1\\) and therefore we can drop the first term. Recall that \\(\alpha\_{i,j,0} = \sum\_{k} \alpha\_{i,j,k}\\).

We can effectively take a prior structure, and blindly compute the [Baysian Score](#baysian-network-scoring) vis a vi your data, and you will get an answer which whether or not something is the simplest model.

Of course, we can't just try all graphs to get a graph structure. Instead, we use some search algorithm:


## K2 Algorithm {#k2-algorithm}

Runs in polynomial time, but doesn't grantee an optimal structure. Let us create a network with a sequence of variables with some ordering:

\begin{equation}
x\_1, x\_2, x\_3, x\_4
\end{equation}

For [K2 Algorithm](#k2-algorithm), we assume a [uniform distribution]({{< relref "KBhprobability_distributions.md#uniform-distribution" >}}) initially before the graph is learned.

1.  we lay down \\(x\_1\\) onto the graph
2.  we then try to lay down \\(x\_{2}\\): compute the [Baysian Score](#baysian-network-scoring)s of two networks: \\(x\_1 \to x\_2\\) OR \\(x\_1\ x\_2\\) (see if connecting \\(x\_2\\) to \\(x\_1\\) helps). keep the structure with the maximum score
3.  we then try to lay down \\(x\_{3}\\): compute the [Baysian Score](#baysian-network-scoring) of \\(x\_1 \to x\_3\\) (plus whatever decision you made about \\(x\_2\\)) OR \\(x\_1, x\_3\\); keep the one that works the best. Then, try the same to decide whether to connect \\(x\_2\\) to \\(x\_3\\) as well
4.  Repeat until you considered all nodes

After you try out one ordering, you should try out another one. Because you can only add parents from elements before you in the list, you will never get a cycle.


## Local Graph Search {#local-graph-search}

Start with an uncorrected graph. Search on the following actions:

[basic graph operation](#local-graph-search)s:

-   add edge
-   remove edge
-   flip edge

A graph's [neighborhood](#local-graph-search) is the graphs for whicthey are one basic graph operation away.

Create a cycle detection scheme.

Now, just try crap. Keep computing a [Baysian Score](#baysian-network-scoring) after you tried something, if its good, keep it. If its not, don't.

To prevent you from being stuck in a local minimum:

-   perform random restarts
-   perform [K2 Algorithm](#k2-algorithm), and then try things out
-   [simulated annealing]({{< relref "KBhsimulated_annealing.md" >}}): take a step that's worse for optimizing [Baysian Score](#baysian-network-scoring)s
-   genetic algorithms: random population which reproduces at a rate proportional to their score


## Partially Directed Graph Search {#partially-directed-graph-search}

We first formulate a partially-directed graph, which is a graph which has some edges, but some edges left to be decided:

{{< figure src="/ox-hugo/2023-10-12_11-09-18_screenshot.png" >}}

In this case, edges \\(C \to D\\) and \\(D \leftarrow E\\) are both defined. \\(A,B,C\\) are left as undirected nodes available to be searched on.

We now try out all combinations of arrows that may fit between \\(A,B,C\\), with the constraint of all objects you search on being [Markov Equivalent]({{< relref "KBhmarkov_equivalence_classes.md" >}}) (so, you can't remove or introduce new [immoral v-structure]({{< relref "KBhimmoral_v_structure.md" >}})s).
