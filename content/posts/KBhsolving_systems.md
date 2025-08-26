+++
title = "solving systems"
author = ["Houjun Liu"]
draft = false
+++

So let's say given a system:

\begin{equation}
\begin{cases}
x + 2y + z = 0 \\\\
2x + 0y - z = 1 \\\\
x - y + 0z = 2
\end{cases}
\end{equation}

We can represent this using a [matricies]({{< relref "KBhmatricies.md" >}}).

\begin{equation}
\begin{pmatrix}
1 & 2 & 1 \\\\
2 & 0 & -1 \\\\
1 & -1 & 0
\end{pmatrix} \begin{pmatrix}
x \\\ y \\\ z
\end{pmatrix} = \begin{pmatrix}
0 \\\ 1 \\\ 2
\end{pmatrix}
\end{equation}

We will use [Gaussian elimination]({{< relref "KBhmatricies.md#gaussian-elimination" >}}). We will begin by multiplying the top row by \\(-2\\).

\begin{equation}
\begin{pmatrix}
-2 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
1 & 2 & 1 \\\\
2 & 0 & -1 \\\\
1 & -1 & 0
\end{pmatrix} \begin{pmatrix}
x \\\ y \\\ z
\end{pmatrix}  =\begin{pmatrix}
-2 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
0 \\\ 1 \\\2
\end{pmatrix}
\end{equation}

And then we add row one to row two; we will not write out the transformation [matrix]({{< relref "KBhmatricies.md" >}}):

\begin{equation}
\begin{pmatrix}
-2 &-4 &-2 \\\ 2 &-0 &-1 \\\ 1 &-1 &0
\end{pmatrix} \begin{pmatrix}
x \\\ y \\\ z
\end{pmatrix} = \begin{pmatrix}
0 \\\ 1 \\\2
\end{pmatrix}
\end{equation}