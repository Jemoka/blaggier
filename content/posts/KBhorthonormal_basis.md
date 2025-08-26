+++
title = "orthonormal basis"
author = ["Houjun Liu"]
draft = false
+++

An [Orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) is defined as a [basis]({{< relref "KBhbasis.md" >}}) of a finite-dimensional vector space that's [orthonormal]({{< relref "KBhorthonormal.md" >}}).


## Additional Information {#additional-information}


### orthonormal list of the right length is a basis {#orthonormal-list-of-the-right-length-is-a-basis}

[An orthonormal list is linearly independent]({{< relref "KBhorthonormal.md#an-orthonormal-list-is-linearly-independent" >}}), and [linearly independent list of length dim V are a basis of V]({{< relref "KBhdimension.md#linearly-independent-list-of-length-dim-v-are-a-basis-of-v" >}}). \\(\blacksquare\\)


### Writing a vector as a linear combination of orthonormal basis {#writing-a-vector-as-a-linear-combination-of-orthonormal-basis}

According to Axler, this result is why there's so much hoopla about [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}).


#### Result and Motivation {#result-and-motivation}

For any basis of \\(V\\), and a vector \\(v \in V\\), we by [basis]({{< relref "KBhbasis.md" >}}) spanning have:

\begin{equation}
v = a\_1e\_1 + \dots a\_{n}e\_{n}
\end{equation}

Yet, for [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}), we can actually very easily know what the \\(a\_{j}\\) are (and not just that _some_ \\(a\_{j}\\) exist). Specifically:

\begin{equation}
a\_{j} = \langle v,e\_{j} \rangle
\end{equation}

That is, for [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) \\(e\_{j}\\) of \\(V\\), we have that:

\begin{equation}
v = \langle v, e\_{1} \rangle e\_{1} + \dots + \langle v, e\_{n} \rangle e\_{n}
\end{equation}

for all \\(v \in V\\).

Furthermore:

\begin{equation}
\\|v\\|^{2} = | \langle v,e\_1 \rangle|^{2} + \dots + | \langle v, e\_{n} \rangle|^{2}
\end{equation}


#### Proof {#proof}

Given \\(e\_{j}\\) are [basis]({{< relref "KBhbasis.md" >}}) (nevermind [orthonormal]({{< relref "KBhorthonormal.md" >}}) quite yet), we have that:

\begin{equation}
v = a\_1e\_{1} + \dots + a\_{n}e\_{n}
\end{equation}

WLOG let's take \\(\langle v, e\_{j} \rangle\\):

\begin{equation}
\langle v,e\_{j} \rangle = \langle a\_1e\_1 + \dots +a\_{n}e\_{n}, e\_{j} \rangle
\end{equation}

Given additivity and homogenity in the first slot, we now have:

\begin{equation}
\langle v, e\_{j} \rangle = a\_{1}\langle e\_1, e\_{j} \rangle + \dots +a\_{n}\langle e\_{n}, e\_{j} \rangle
\end{equation}

Of course, each \\(e\_{i}\\) and \\(e\_{j}\\) are [orthogonal]({{< relref "KBhorthogonal.md" >}}), so for the most part \\(a\_{i}\langle e\_{i}, e\_{j} \rangle = 0\\) for \\(i \neq j\\). Except where \\(a\_{j} \langle e\_{j}, e\_{j} \rangle = a\_{j} 1 = a\_{j}\\) because the \\(e\\) vectors are also [norm]({{< relref "KBhnorm.md" >}}) 1.

Therefore:

\begin{equation}
\langle v, e\_{j} \rangle= 0 + \dots +a\_{j} + \dots +0 = a\_{j}
\end{equation}

We now have \\(\langle v,e\_{j} \rangle = a\_{j}\\) WLOG for all \\(j\\), as desired.

Plugging this in for each \\(a\_{j}\\) and applying [Norm of an Orthogonal Linear Combination]({{< relref "KBhorthonormal.md#norm-of-an-orthogonal-linear-combination" >}}) yields the \\(\\|v\\|^{2}\\) equation above. \\(\blacksquare\\)
