+++
title = "F^n"
author = ["Houjun Liu"]
draft = false
+++

\\(\mathbb{F}^n\\) is the set of all lists of length \\(n\\) with elements of \\(\mathbb{F}\\). These are a special case of [matricies]({{< relref "KBhmatricies.md" >}}).

Formally---

\begin{equation}
    \mathbb{F}^n = \\{(x1,\ldots,x\_n):x\_j\in\mathbb{F}, \forall j =1,\ldots,n\\}
\end{equation}

For some \\((x\_1,\ldots,x\_n) \in \mathbb{F}^n\\) and \\(j \in \\{1,\ldots,n\\}\\), we say \\(x\_j\\) is the \\(j^{th}\\) **coordinate** in \\((x\_1,\ldots,x\_n)\\).


## additional information {#additional-information}


### addition in \\(\mathbb{F}^n\\) {#addition-in-mathbb-f-n}

_Addition_ is defined by adding corresponding coordinates:

\begin{equation}
   (x1,\ldots,x\_n) + (y\_1,\ldots,y\_n) = (x\_1+y\_1, \ldots,x\_n+y\_n)
\end{equation}


#### addition in \\(\mathbb{F}^n\\) is commutative {#addition-in-mathbb-f-n-is-commutative}

If we have \\(x,y\in \mathbb{F}^n\\), then \\(x+y = y+x\\).

The proof of this holds because of how addition works and the fact that you can pairwise commute addition in \\(\mathbb{F}\\).

\begin{align}
    x+y &= (x\_1,\ldots,x\_n) + (y\_1,\ldots,y\_n)\\\\
&= (x\_1+y\_1,\ldots,x\_n+y\_n)\\\\
&= (y\_1+x\_1,\ldots,y\_n+x\_n)\\\\
&= (y\_1,\ldots,y\_n) + (x\_1,\ldots,x\_n)\\\\
&= y+x
\end{align}

This is a lesson is why avoiding explicit coordinates is good.


### additive inverse of \\(\mathbb{F}^n\\) {#additive-inverse-of-mathbb-f-n}

For \\(x \in \mathbb{F}^n\\), the **additive [inverse]({{< relref "KBhinverses.md" >}})** of \\(x\\), written as \\(-x\\) is the vector \\(-x\in \mathbb{F}^n\\) such that:

\begin{equation}
    x+(-x) = 0
\end{equation}

Which really means that its the [additive inverse]({{< relref "KBhinverses.md" >}}) of each of the [coordinate]({{< relref "KBhlists_over_fields.md" >}})s.


### scalar multiplication in \\(\mathbb{F}^n\\) {#scalar-multiplication-in-mathbb-f-n}

At present, we are only going to concern ourselves with the product of a number \\(\lambda\\) and a vector \\(\mathbb{F}^n\\). This is done by multiplying each coordinate of the vector by \\(\lambda\\).

\begin{equation}
    \lambda (x\_1,\ldots,x\_n) = (\lambda x\_1, \lambda, \lambda x\_n)
\end{equation}

where, \\(\lambda \in \mathbb{F}\\), and \\((x\_1,\ldots,x\_n) \in \mathbb{F}^n\\).

The geometric interpretation of this is a scaling operation of vectors.