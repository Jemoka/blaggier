+++
title = "expectation"
author = ["Houjun Liu"]
draft = false
+++

[expectation]({{< relref "KBhexpectation.md" >}}) is the calculation of the "intended" or "target" value given a [random variable]({{< relref "KBhrandom_variables.md" >}}):

\begin{equation}
\mathbb{E}[M] = \sum\_{x} x\ p(X=x)
\end{equation}

1.  Standardize variables to \\(z\\) by dividing
2.  The correlation is simply their "product": means of positive and negative groups

The [expectation]({{< relref "KBhexpectation.md" >}}) is the average of the counts of the data you have.


## properties of [expectation]({{< relref "KBhexpectation.md" >}}) {#properties-of-expectation--kbhexpectation-dot-md}

these holds **REGARDLESS** of whether or not the variables you are doing is [independent]({{< relref "KBhprobability.md#independence" >}}), [IID]({{< relref "KBhindependently_and_identically_distributed.md" >}}), etc.


### Linearity in the first slot {#linearity-in-the-first-slot}

[expectation]({{< relref "KBhexpectation.md" >}}) has additivity and [homogeneity]({{< relref "KBhhomogeneity.md" >}}).

\begin{equation}
\mathbb{E}[aX+b] = a\mathbb{E}[X] + b
\end{equation}


### Closure under expectation {#closure-under-expectation}

\begin{equation}
E[X+Y] = E[X]+E[Y]
\end{equation}


### Unconscious statistician {#unconscious-statistician}

\begin{equation}
\mathbb{E}[g(x)] = \sum\_{x \in X}^{} g(x) P(X=x)
\end{equation}

whereby, if \\(g\\) is a normal function, you can just add up all the possible output. This property can be used to show the firts results.


## conditional expectation {#conditional-expectation}

We can perform [expectation]({{< relref "KBhexpectation.md" >}}) via [conditional probability]({{< relref "KBhprobability.md#conditional-probability" >}}).

\begin{equation}
E[X|Y=y] = \sum\_{x}^{} x \cdot p(X=x|Y=y)
\end{equation}


## law of total expectation {#law-of-total-expectation}

\begin{equation}
\mathbb{E}[X] = \sum\_{y}^{}\mathbb{E}[X|Y=y] P(Y=y)
\end{equation}

what is the "background variable"? the \\(y\\) value above.
