+++
title = "NUS-MATH530 5.A Problem 14"
author = ["Houjun Liu"]
draft = false
+++

Suppose \\(V = U \oplus W\\), where \\(U\\) and \\(W\\) are nonzero subspaces of \\(V\\). Define \\(P \in \mathcal{L}(V)\\) by \\(P(u+w) = u\\) for \\(u \in U\\), \\(w \in W\\). Find all eigenvalues and eigenvectors of \\(P\\).

Solutions:

-   \\(\lambda = 1\\), \\(v = u \in U\\)
-   \\(\lambda = 0\\), \\(v = w \in W\\)

---

For \\(\lambda\\) to be an eigenvalue of \\(P\\), we have to have:

\begin{equation}
Pv = \lambda v
\end{equation}

Meaning, for WLOG \\(v = u+w\\):

\begin{align}
&Pv = \lambda v \\\\
\Rightarrow\ & P(u+w) = \lambda (u+w)  \\\\
\Rightarrow\ & u = \lambda u + \lambda w
\end{align}

Now, let's rewrite this expression to equal to \\(0\\) to take advantage of the fact that \\(V = U \oplus W\\).

\begin{align}
&u = \lambda u + \lambda w  \\\\
\Rightarrow\ & 0 = (\lambda -1) u + \lambda w
\end{align}

Now, recall that a sum of subsets in a direct sum if and only if the only way to write \\(0\\) is for each of the elements of the sums to be \\(0\\). In this case, it means that:

\begin{equation}
\begin{cases}
(\lambda -1) u = 0 \\\\
\lambda w = 0
\end{cases}
\end{equation}

We have two cases here: either \\(w=0\\) or \\(u=0\\).

---

Aside: why can't \\(u = w = 0\\)? Suppose for the sake of contradiction let's take \\(u=0, w=0\\). Then, \\(Pv = \lambda v\\), so \\(v=u+w\\), and so \\(v=0\\). This would make \\(v\\) no longer an eigenvector, by definition of eigenvector; this also makes \\(\lambda\\) no longer an eigenvalue. Hence, one of \\(u\\) or \\(w\\) is not \\(0\\).

---


## \\(w=0\\) {#w-0}

We have that \\(w=0\\). Replacing that in the above expression, we have that:

\begin{align}
&Pv = \lambda v \\\\
\Rightarrow\ & P(u+w) = \lambda u + \lambda w  \\\\
\Rightarrow\ & u = \lambda u + 0 \\\\
\Rightarrow\ & u = \lambda u
\end{align}

From this expression, or the top one from before \\((\lambda -1 ) u = 0\\), we have that \\(\lambda = 1\\).

Finally, then, we have:

\begin{align}
Pv &= \lambda v \\\\
&= v
\end{align}

Any valid solution for \\(v\\) is an eigenvector.

So:

\begin{align}
&Pv = v  \\\\
\Rightarrow\ & P(u+w) = v  \\\\
\Rightarrow\ & u = v
\end{align}

Hence, all \\(u \in U\\) is an eigenvector of \\(P\\) with eigenvalue \\(1\\).


## \\(u=0\\) {#u-0}

We now have that \\(u=0\\). So, we have that:

\begin{align}
&Pv = \lambda v \\\\
\Rightarrow\ & P(u+w) = \lambda u + \lambda w  \\\\
\Rightarrow\ & u = \lambda u + \lambda w  \\\\
\Rightarrow\ & 0 = \lambda w
\end{align}

From this expression, or the bottom one from \\(\lambda w = 0\\), we have that \\(\lambda = 0\\).

Finally, then, we have:

\begin{align}
Pv &= \lambda v \\\\
&= 0
\end{align}

Any valid solution for \\(v\\) is an eigenvector.

So:

\begin{align}
&Pv = 0  \\\\
\Rightarrow\ & P(u+w) = 0  \\\\
\Rightarrow\ & u = 0
\end{align}

Recall now that \\(v = u+w\\), so \\(v = 0 +w\\), making \\(v = w\\).

Hence, all \\(w \in W\\) is an eigenvector of \\(P\\) with eigenvalue \\(0\\).