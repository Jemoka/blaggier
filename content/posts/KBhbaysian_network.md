+++
title = "Baysian Network"
author = ["Houjun Liu"]
draft = false
+++

A [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) is composed of:

1.  a directed, acyclic graph
2.  a set of [conditional probabilities]({{< relref "KBhprobability.md#conditional-probability" >}}) acting as [factor]({{< relref "KBhfactor.md" >}})s.

You generally want arrows to go in the direction of causality.

{{< figure src="/ox-hugo/2023-09-28_10-20-23_screenshot.png" >}}

Via the chain rule of Bayes nets, we can write this equivalently as:

\begin{equation}
(P(B) \cdot P(S)) \cdot P(E \mid B,S) \cdot P(D \mid E) \cdot P(C \mid E)
\end{equation}

generally, for \\(n\\) different variables,

\begin{equation}
\prod\_{i=1}^{n} p(X\_{i} \mid pa(x\_{i}))
\end{equation}

where, \\(pa(x\_{i})\\) are the parent values of \\(x\_{i}\\).


## conditional independence {#conditional-independence}

\\(X\\) and \\(Y\\) are [conditionally independent](#conditional-independence) given \\(Z\\) IFF:

\begin{equation}
P(X, Y|Z) = P(X|Z) \cdot P(Y|Z)
\end{equation}

("two variables are [conditionally independent](#conditional-independence) if they exhibit [independence]({{< relref "KBhprobability.md#independence" >}}) conditioned on \\(Z\\)")

this is equivalent to saying:

\begin{equation}
P(X|Z) = P(X|Y,Z)
\end{equation}

("two variables are [conditionally independent](#conditional-independence) if the inclusion of the evidence of another set into the condition doesn't influence the outcome if they are both conditioned on \\(Z\\)")

We write:

\begin{equation}
X \perp Y \mid Z
\end{equation}

The network above has an important property: conditions \\(B\\) and \\(S\\) are independent; and conditions \\(D\\) and \\(C\\) are independent. Though they all depended on \\(E\\), each pair is [conditionally independent](#conditional-independence).


### checking for conditional independence {#checking-for-conditional-independence}

\\((A \perp B \mid C)\\) IFF ALL undirected paths from \\(A\\) to \\(B\\) on a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) exhibits [d seperation](#checking-for-conditional-independence), whose conditions are below:

A path is d-seperated by \\(C\\), the set of evidence if ANY of the following:

1.  the path contains a chain of nodes: \\(X \to Y \to Z\\) where \\(Y \in C\\)
2.  the path contains a fork: \\(X \leftarrow C \to Z\\), where \\(Y \in C\\)
3.  the path contains a [inverted fork](#checking-for-conditional-independence): \\(X \to Y \leftarrow Z\\), where \\(Y\\) is **not** in \\(C\\) and no descendent of \\(Y\\) is in \\(C\\).

Note that \\(C\\) can be empty. This is why, \\(B,S\\) is [conditionally independent](#conditional-independence) on **nothing** on that graph above, so they are just actually independent.

If the structure does not imply [conditional independence](#conditional-independence), it does **NOT** mean that the structure is conditionally dependent. It could still be [conditionally independent](#conditional-independence).
end{equation}


#### markov blanket {#markov-blanket}

the [markov blanket](#markov-blanket) of node \\(X\\) is the minimal set of nodes on a [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) which renders \\(X\\) [conditionally independent](#conditional-independence) from all other nodes not in the blanket.

It includes, at most:

-   node's parenst
-   node's chlidren
-   other parents of node's children

Check that you need all of these values: frequently, you don't---simply selecting a subset of this often d-seperates the node from everyone else.


## [parameter learning]({{< relref "KBhparameter_learning.md" >}}) in [Baysian Network]({{< relref "KBhbaysian_network.md" >}}) {#parameter-learning--kbhparameter-learning-dot-md--in-baysian-network--kbhbaysian-network-dot-md}

Let:

-   \\(x\_{1:n}\\) be variables
-   \\(o\_1, ..., o\_{m}\\) be the \\(m\\) observations we took
-   \\(G\\) is the graph
-   \\(r\_{i}\\) is the number of instantiations in \\(X\_{i}\\) (for boolean variables, this would be \\(2\\))
-   \\(q\_{i}\\) is the number of parental instantiations of \\(X\_{i}\\) (if parent 1 can take on 10 values, parent 2 can take 3 values, then child's \\(q\_{i}=10\cdot 3=30\\)) --- if a node has no parents it has a \\(q\_{i}\\) is \\(1\\)
-   \\(\pi\_{i,j}\\) is \\(j\\) instantiation of parents of \\(x\_{i}\\) (the \\(j\\) th combinator)

What we want to learn from the graph, is:

\begin{equation}
P(x\_{i}=k | \pi\_{i,j}) = \theta\_{i,j,k}
\end{equation}

"what's the probability that \\(x\_{i}\\) takes on value \\(k\\), given the state of \\(x\_{i}\\)'s parents are \\(\pi\_{i,j}\\) right now?"

---

Let us first make some observations. We use \\(m\_{i,j,k}\\) to denote the COUNT of the number of times \\(x\_{i}\\) took a value \\(k\\) when \\(x\_{i}\\) parents took instantiation \\(j\\). This is usually represented programmatically as a set of matrices:

{{< figure src="/ox-hugo/2023-10-10_09-47-04_screenshot.png" >}}

To learn the parameter as desired, we use:

\begin{equation}
MLE\ \hat{\theta}\_{i,j,k} = \frac{m\_{i,j,k}}{\sum\_{k'} m\_{i,j,k'}}
\end{equation}

In that: we want to sum up all possible value \\(x\_{i}\\) takes on, and check how many times it takes on a certain value, given the conditions are the same.
