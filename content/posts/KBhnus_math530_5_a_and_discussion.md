+++
title = "NUS-MATH530 5.A and Discussion"
author = ["Houjun Liu"]
draft = false
+++

## Chapter 4 discussion with Lachlan {#chapter-4-discussion-with-lachlan}


### 4.2 {#4-dot-2}

False.

The union between \\(\\{0\\} \cup \\{p \in \mathcal{P}(\mathbb{F}): deg\ p = m\\}\\) is not closed under addition. You can add two \\(m\\) degree polynomials and get something that's not \\(m\\) degrees:

\begin{equation}
(z^{m} + 1) - z^{m} = 1
\end{equation}


### 4.3 {#4-dot-3}

False.

The union between \\(\\{0\\} \cup \\{p \in \mathcal{P}(\mathbb{F}): deg\ p\ even\\}\\) is not closed also under addition, for the same reason:

\begin{equation}
(z^{m} + z^{m-1} + 1) - (z^{m} + 1) = z^{m-1}
\end{equation}


## One Chapter 5 Exercise {#one-chapter-5-exercise}


### 5.A.5 {#5-dot-a-dot-5}

Suppose \\(T \in \mathcal{L}(V)\\), prove that the intersection of every collection of \\(V\\) that is invariant under \\(T\\) is invariant under \\(T\\)

Let \\(U\_1 \dots U\_{n}\\) be invariant subspaces under \\(T\\).

That is:

\begin{equation}
T u\_{j} \in U\_{j}
\end{equation}

We desire that:

\begin{align}
Tu \in \bigcap U\_{j}\ |\ u \in \bigcap U\_{j}
\end{align}

WLOG, treat \\(u \in \bigcap U\_{j}\\) as \\(u \in U\_{j}\\). Now, \\(Tu \in U\_{j}\\). This holds \\(\forall  U\_{j}\\). Therefore, \\(Tu \in \forall U\_{j}\\). So \\(Tu \in \bigcap U\_{j}\\).

Hence, the intersection of invariant subspaces are invariant as well.