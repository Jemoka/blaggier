+++
title = "Logit Probe"
author = ["Houjun Liu"]
draft = false
+++

## Goals {#goals}

Motivation: it is very difficult to have an interpretable, causal trace of facts. Let's fix that.


### Facts {#facts}

It is also further difficult to pull about what is a "fact" and what is a "syntactical relation". For instance, the task of

```text
The Apple iPhone is made by American company <mask>.
```

is different and arguably more of a syntactical relationship rather than factually eliciting prompt than

```text
The iPhone is made by American company <mask>.
```

For our purposes, however, we obviate this problem by saying that both of these cases are a recall of the fact triplet `<iPhone, made_by, Apple>`. Even despite the syntactical relationship established by the first case, we define success as any intervention that edits this fact triplet without influencing other stuff of the form:

```text
The [company] [product] is made by [country] company [company].
```


## The Probe {#the-probe}


### Definition {#definition}

-   Maps
    -   Hidden mappings \\(H^{(1)}, ..., H^{N}\\)
    -   Output projections \\(W = W^{O}W^{I}\\)
-   Spaces
    -   embedding space \\(U \subset \mathbb{R}^{\text{hidden}}\\)
    -   vocab space \\(V \subset \mathbb{R}^{|V|}\\), where \\(|V|\\) is vocab size
-   LM: \\(L = (W H^{(N)} \dots H^{(1)}): U \to V\\), such that \\(L u \in V\\), for some word embedding \\(u \in U\\).
-   LM's distribution: \\(\sigma L\\), such that \\(\sigma u \in \triangle\_{|V|}\\).


### The Logit Lens {#the-logit-lens}

The Logit Lens proposes that we can chop off some \\(H\\) and recover a distribution that's _similar_ to the true output distribution. Empirically, given large enough \\(N\\), it is likely that:

\begin{equation}
\arg\max\_{j} \qty(W H^{(N)} \dots H^{(1)})\_{j} = \arg\max\_{j} \qty(W H^{(N-1)} \dots H^{(1)})\_{j} = \arg\max\_{j} \qty(W H^{(N-2)} \dots H^{(1)})\_{j}
\end{equation}

up to some finite depth before this effect breaks down.


### A Sketch {#a-sketch}

Evidence suggests that storage of "factual" information is not typically axis-aligned in \\(U\\). Meaning, it's difficult to learn some binary mask \\(m\\) such that \\(m \cdot u \in U\\) which would then disrupt downstream knowledge production of a fact without knocking out other stuff.

However, we know that due to the one-hot cross-entropy LM objective, "facts" (as defined above) _is_ axis aligned to \\(V\\). After all, a word \\(v\_{j}\\) is represented by the \\(j\\) th standard basis (i.e. one-hot vector) in \\(v\\).
