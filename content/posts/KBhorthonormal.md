+++
title = "orthonormal"
author = ["Houjun Liu"]
draft = false
+++

A list of vectors is [orthonormal]({{< relref "KBhorthonormal.md" >}}) if each vector is [orthogonal]({{< relref "KBhorthogonal.md" >}}) to every other vector, and they all have [norm]({{< relref "KBhnorm.md" >}}) 1.

In other words:

\begin{equation}
\langle e\_{j}, e\_{k} \rangle = \begin{cases}
1, j = k\\\\
0, j \neq k
\end{cases}
\end{equation}

The vectors should inner-product with itself to \\(1\\), and be orthogonal to all others.


## Additional Information {#additional-information}


### [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) {#orthonormal-basis--kbhorthonormal-basis-dot-md}

See also [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}})


### Norm of an Orthogonal Linear Combination {#norm-of-an-orthogonal-linear-combination}

\begin{equation}
\\| a\_1e\_1 + \dots + a\_{m}e\_{m} \\|^{2} = |a\_1|^{2} + \dots + |a\_{m}|^{2}
\end{equation}

When \\(e\_1, \dots e\_{m}\\) are [orthonormal]({{< relref "KBhorthonormal.md" >}}) vectors in \\(V\\) and \\(a\_1, \dots a\_{m} \in \mathbb{F}\\).

Proof:

Recall two facts: \\(e\_{j}\\) are [orthonormal]({{< relref "KBhorthonormal.md" >}}) vectors, so they are 1) [orthogonal]({{< relref "KBhorthogonal.md" >}}) to each other and have 2) [norm]({{< relref "KBhnorm.md" >}}) 1. Therefore, each \\(a\_j e\_{j}\\) are also [orthogonal]({{< relref "KBhorthogonal.md" >}}) and have norm \\(a\_{j}\\)

And so, the [orthogonal]({{< relref "KBhorthogonal.md" >}}) condition guarantees [pythagoras]({{< relref "KBhcornucopia_of_analysis.md#pythagorean-theorem" >}}), and we know that each vector being added here has norm \\(a\_{j}\\).

And so we can just chonk out each of the vectors, apply Pythagoras to the ending bunch and the one removed.


#### orthonormal list is linearly independent {#orthonormal-list-is-linearly-independent}

Its a corollary of the above is that [orthonormal]({{< relref "KBhorthonormal.md" >}}) lists are [linearly independent]({{< relref "KBhlinear_independence.md" >}}).

Proof:

\begin{equation}
a\_1e\_1 + \dots +a\_{m}e\_{m} = 0
\end{equation}

We desire that each \\(a\_{j}=0\\) to show that this list is linearly independent.

Now, given that the linear combination of these \\(e\_{j}\\) adds to \\(0\\), the summed vector is a zero-vector. So:

\begin{equation}
\\|a\_1 e\_1 + \dots +a\_{m}e\_{m} \\| = \\|0\\| = 0
\end{equation}

OF course their norm squared is also \\(0\\).

Apply the above, then, we now have:

\begin{equation}
|a\_1|^{2} + \dots +|a\_{m}|^{2} = \\|a\_1 e\_1 + \dots +a\_{m}e\_{m} \\| = 0
\end{equation}

Of course adding a list of positive numbers (\\(|a\_{j}|^{2}\\)) together yields not a negative number, so there are no possible additive inverses that will cancel each other out. Hence, \\(a\_{j} = 0\\), as desired. \\(\blacksquare\\)
