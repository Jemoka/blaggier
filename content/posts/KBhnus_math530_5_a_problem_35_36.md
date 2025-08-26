+++
title = "NUS-MATH530 5.A Problem 35/36"
author = ["Houjun Liu"]
draft = false
+++

Warmup: 35

Suppose \\(V\\) is finite dimensional, \\(T \in \mathcal{L}(V)\\) and \\(U\\) is [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\). Prove each eigenvalue of \\(T / U\\) is an eigenvalue of \\(T\\).

Now, \\(\lambda\\) is an eigenvalue of \\(T / U\\). That is:

\begin{equation}
Tv + U = \lambda v + U
\end{equation}

Meaning:

\begin{equation}
(T-\lambda I) v \in U, \forall v \in V
\end{equation}

Suppose for the sake of contradiction \\(\lambda\\) is not an eigenvalue of \\(T\\). This means no \\(\lambda\\) such that \\(Tv = \lambda v\\); specifically, that means also no \\(\lambda\\) such that \\(T|\_{u} u = \lambda u\\). Now, that means \\(T|\_{u} - \lambda I\\) is invertible given finite dimensional \\(V\\).

The previous statement means that \\((T|\_{u} - \lambda I)\\) is subjective across \\(u\\):

\begin{equation}
\forall v, \exists u: (T-\lambda I)v = (T|\_{u}-\lambda I) u
\end{equation}

And so:

\begin{equation}
Tv - \lambda v = Tu - \lambda u
\end{equation}

Finally, then:

\begin{equation}
T(v-u) = \lambda (v-u)
\end{equation}

Now, \\(v + U\\) being an eigenvector of \\(T / U\\) requires that \\(v + U \neq 0\\), which means \\(v \not \in  U\\). And so, \\(v \neq u\\) meaning \\(v-u \neq 0\\). Hence, the above expression demonstrates \\(\lambda\\) to be an eigenvalue of \\(T\\), reaching contradiction. \\(\blacksquare\\)

---

Now: 36

Removing finite-dimensional from the requirements above, demonstrate the result above breaks.

Let \\(V = \mathcal{P}(\mathbb{F})\\) and let \\(T\\) be differentiation. Now, let \\(U\\) be \\(P\_{2}(\mathbb{F})\\). Now:

\begin{equation}
T / U (v + U) = \lambda v + U
\end{equation}

let \\(v \in \mathcal{P}\_{3}(\mathbb{F})\\). Now, then, \\(T / U (v + U) = Tv + U\\), with \\(Tv \in \mathcal{P}\_{2}(\mathbb{F})\\). Hence, \\(T / U (v + U) = Tv + U = 0 + U\\). This makes \\(0\\) an eigenvalue and \\(u \in \mathcal{P}\_{2}(\mathbb{F})\\) eigenvectors.

Of course this does not hold for \\(T\\) in general as all \\(Tv \in \mathcal{P}\_{2}(\mathbb{F})\\) are not identically \\(0\\).

Having shown a counter-example, \\(\blacksquare\\)

---

Do we have finite-dimensions?

"Not invertible" =&gt; not injective---

\\(T\\) being not injective means that \\(null\ T\\) has more than just the zero vector.

Hence:

\begin{equation}
\exists v: Tv = 0 = 0 v
\end{equation}

That would make all nonzero \\(v \in null\ T\\) eigenvectors and \\(0\\) an eigenvalue.

"Not invertible" =&gt; not surjective---

\\(T\\) being not surjective means that \\(range\ T \subset V\\) strictly. So then \\(T|\_{range\ T}\\) is an operator so \\(range\ T\\) is an invariant subspace under \\(T\\).

Either way, we have that an eigenvalue exist.
