+++
title = "Linear Dependence Lemma"
author = ["Houjun Liu"]
draft = false
+++

[Linear Dependence Lemma]({{< relref "KBhlinear_dependence_lemma.md" >}}) is AFAIK one of the more important results of elementary linear algebra.


## statement {#statement}

Suppose \\(v\_1, \dots v\_{m}\\) is an [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}) list in \\(V\\); then \\(\exists j \in \\{1, 2, \dots m\\}\\) such that...

1.  \\(v\_{j} \in span(v\_1, \dots, v\_{j-1})\\)
2.  the [span]({{< relref "KBhspan.md" >}}) of the list constructed by removing \\(v\_{j}\\) from \\(v\_1, \dots v\_{m}\\) equals the span of \\(v\_1, \dots v\_{m}\\) itself

intuition: "in a [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}) list of vectors, one of the vectors is in the span of the previous ones, and we can throw it out without changing the span."


## proof {#proof}

By definition of [linear dependence]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}), given the list \\((v\_1, \dots v\_{m}\\)) is [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}), there exists some not-all-zero \\(a\_1, \dots, a\_{m} \in \mathbb{F}\\) such that:

\begin{equation}
a\_1v\_1+\dots +a\_{m}v\_{m} = 0
\end{equation}

Let \\(a\_{j}\\) be the last non-zero scalar in the expression (making the term actually exist). You can, in this circumstance, chuck everything to the right and divide by \\(a\_{j}\\) to recover \\(v\_{j}\\):

\begin{equation}
v\_{j}= -\frac{a\_1}{a\_{j}} v\_1 - \dots -\frac{a\_{j-1}}{a\_{j}}v\_{j-1}
\end{equation}

We were able to construct \\(v\_{j}\\) as a [linear combination]({{< relref "KBhlinear_combination.md" >}}) of \\(v\_{1}, \dots v\_{j-1}\\), therefore:

\begin{equation}
v\_{j} \in span(v\_1, \dots, v\_{j-1})
\end{equation}

showing \\((1)\\).

For \\(2\\), the intuition behind the proof is just that you can take that expression for \\(v\_{j}\\) above to replace \\(v\_{j}\\), therefore getting rid of one vector but still keeping the same [span]({{< relref "KBhspan.md" >}}).

Formally, \\(\forall u \in span(v\_1, \dots v\_{m})\\), we can write it as some:

\begin{equation}
u = c\_1v\_1 + \dots c\_{j}v\_{j} + \dots + c\_{m}v\_{m}
\end{equation}

now we replace \\(v\_{j}\\) with the isolated expression for \\(v\_{j}\\) above.

Exception: if \\(j=1\\) and \\(v\_1=0\\), note that you can just replace \\(v\_1\\) with \\(0\\) without doing any special substitution.

Having written all arbitrary \\(u \in span(v\_1, \dots v\_{m})\\) as a linear combination of \\(v\_1\dots v\_{m}\\) _without_ ... \\(v\_{j}\\), we see that the renaming vectors span the same space. \\(\blacksquare\\)


## issue {#issue}

note that if we chose \\(j=1\\) in the above result, \\(v\_1=0\\). Contrapositively, if \\(v\_1 \neq 0\\), \\(j\neq 1\\). This is because of the fact that:

if \\(j=1\\), the lemma tells us that \\(v\_{1} \in span(v\_{1-1}) \implies v\_1 \in span()\\). As per definition, the [span]({{< relref "KBhspan.md" >}}) of the empty set is \\(\\{0\\}\\). Therefore, \\(v\_1 \in \\{0\\} \implies v\_1=0\\).