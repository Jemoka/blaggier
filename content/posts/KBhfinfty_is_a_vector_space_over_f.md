+++
title = "Finfinity is a Vector Space over F"
author = ["Houjun Liu"]
draft = false
+++

We define:

\begin{equation}
\mathbb{F}^{\infty} = \\{(x\_1, x\_2, \dots): x\_{j} \in \mathbb{F}, \forall j=1,2,\dots\\}
\end{equation}


## closure of addition {#closure-of-addition}

We define addition:

\begin{equation}
(x\_1,x\_2,\dots)+(y\_1,y\_2, \dots) = (x\_1+y\_1,x\_2+y\_2, \dots )
\end{equation}

Evidently, the output is also of infinite length, and as addition in \\(\mathbb{F}\\) is closed, then also closed.


## closure of scalar multiplication {#closure-of-scalar-multiplication}

We define scalar multiplication:

\begin{equation}
\lambda (x\_1,x\_2, \dots) = (\lambda x\_1, \lambda x\_2, \dots )
\end{equation}

_ditto._ as above


## [commutativity]({{< relref "KBhcommutivity.md" >}}) {#commutativity--kbhcommutivity-dot-md}

extensible from [commutativity]({{< relref "KBhcommutivity.md" >}}) of \\(\mathbb{F}\\)


## [associativity]({{< relref "KBhassociative.md" >}}) {#associativity--kbhassociative-dot-md}

extensible from [associativity]({{< relref "KBhassociative.md" >}}) of \\(\mathbb{F}\\), for both operations


## distribution {#distribution}

\begin{align}
\lambda ((x\_1,x\_2,\dots)+(y\_1,y\_2, \dots)) &= \lambda (x\_1+y\_1,x\_2+y\_2, \dots ) \\\\
&= (\lambda (x\_1+y\_1),\lambda (x\_2+y\_2), \dots )  \\\\
&= (\lambda x\_1+\lambda y\_1,\lambda x\_2+\lambda y\_2, \dots) \\\\
&= (\lambda x\_1, \lambda x\_2, \dots) + (\lambda y\_1, \lambda y\_2, \dots)  \\\\
&= \lambda (x\_1, x\_2, \dots) + \lambda (y\_1, y\_2, \dots)
\end{align}

_ditto._ for the other direction.


## additive ID {#additive-id}

\begin{equation}
(0,0, \dots )
\end{equation}


## additive inverse {#additive-inverse}

extensive from \\(\mathbb{F}\\)

\begin{equation}
(-a, -b, \dots ) + (a,b, \dots ) = 0
\end{equation}


## scalar multiplicative ID {#scalar-multiplicative-id}

\\(1\\)