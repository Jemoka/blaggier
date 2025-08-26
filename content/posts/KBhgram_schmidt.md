+++
title = "Gram-Schmidt"
author = ["Houjun Liu"]
draft = false
+++

OMG its [Gram-Schmidtting]({{< relref "KBhgram_schmidt.md" >}})!!! Ok so like [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) are so nice, don't you want to make them out of boring-ass normal [basis]({{< relref "KBhbasis.md" >}})? Of course you do.

Suppose \\(v\_1, ... v\_{m}\\) is a [linearly independent]({{< relref "KBhlinear_independence.md" >}}) list in \\(V\\). Now let us define some \\(e\_{1} ... e\_{m}\\) using the procedure below such that \\(e\_{j}\\) are [orthonormal]({{< relref "KBhorthonormal.md" >}}) and, importantly:

\begin{equation}
span(v\_1, \dots, v\_{m}) = span(e\_{1}, \dots, e\_{m})
\end{equation}


## The Procedure {#the-procedure}

We do this process inductively. Let:

\begin{equation}
e\_1 = \frac{v\_1}{\\|v\_1\\|}
\end{equation}

And then, let:

\begin{equation}
e\_{j} = \frac{v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1} - \dots -\langle v\_{j}, e\_{j-1} \rangle e\_{j-1}}{\\|v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1} - \dots -\langle v\_{j}, e\_{j-1} \rangle e\_{j-1}\\|}
\end{equation}

That is, for each vector \\(v\_{j}\\), we subtract out the component which it is already parallel (i.e. not [orthogonal]({{< relref "KBhorthogonal.md" >}}), i.e. already accounted by) each other already [orthonormal]({{< relref "KBhorthonormal.md" >}}) basis. Then we norm the whole thing as lengths don't matter and we desire [norm]({{< relref "KBhnorm.md" >}})-1.


## The Proof {#the-proof}

We Prove this by induction.

Base case: \\(j=1\\)

\\(span (v\_1) = span (e\_{1})\\) because, by definition above, \\(e\_1 = \frac{v\_1}{\\|v\_1\\|}\\). And hence, they are multiples of each other and hence has the same span.

Induction: at \\(1<j <m\\)

So, we have that:

\begin{equation}
span (v\_1, \dots, v\_{j-1}) = span(e\_1, \dots, e\_{j-1})
\end{equation}

Let now \\(v\_{j} \not \in span(v\_1, ..., v\_{j-1})\\) (because \\(v\_{j}\\) are linearly independent). We have then \\(v\_{j} \not \in span(e\_1, ..., e\_{j-1})\\), given the two spans are equal.

Hence, \\(v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1}- ... - \langle v\_{j}, e\_{j-1} \rangle e\_{j-1} \neq 0\\) because otherwise \\(v\_{j}\\) would be writable as a linearly combinations of \\(e\_{1}, ..., e\_{j-1}\\) and would then be in the span thereof, which we know isn't true.

Dividing a vector by its [norm]({{< relref "KBhnorm.md" >}}) produces a [norm]({{< relref "KBhnorm.md" >}})-1 vector; so we have now that \\(e\_{j}\\) would be a [norm]({{< relref "KBhnorm.md" >}})-1 vector.

Now, let \\(k < j\\). We desire that \\(\langle e\_{j}, e\_{k} \rangle = 0\\) because we want our new \\(e\_{j}\\) to be [orthogonal]({{< relref "KBhorthogonal.md" >}}) to every other existing vector.

We have:

\begin{equation}
\langle e\_{j}, e\_{k} \rangle = \langle \frac{v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1} - \dots - \langle v\_{j}, e\_{k}  \rangle e\_{k} - \dots \langle v\_{j}, e\_{j-1} \rangle e\_{j-1}}{\\|v\_{j} - \langle v\_{j}, e\_{1} \rangle e\_{1}- \dots - \langle v\_{j}, e\_{k}  \rangle e\_{k} - \dots \langle v\_{j}, e\_{j-1} \rangle e\_{j-1}\\|}, e\_{k} \rangle
\end{equation}

Now, if we parcel out the large fraction the bottom, and apply additivity in the first slot, we will note that all of the \\(\langle e\_{i \neq k}, e\_{k} \rangle=0\\) as everything already on this list is orthonormal. Finally, then we have only:

\begin{equation}
\langle v\_{j}, e\_{k} \rangle - \langle v\_{k}, e\_{k}  \rangle \langle e\_{k}, e\_{k} \rangle
\end{equation}

on top, which conveniently equals \\(0\\). Meaning \\(\langle e\_{j}, e\_{k} \rangle= 0\\), so \\(e\_{k}\\) is indeed [orthogonal]({{< relref "KBhorthogonal.md" >}}) to the rest of the list.

By definition of \\(e\_{j}\\) above, \\(v\_{j}\\) can be written as a linear combination of \\(e\_{1}, ... e\_{j-1}\\) as well as a bare \\(e\_{j}\\). Therefore:

\begin{equation}
span(v\_1, \dots, v\_{j}) \subset  span (e\_1, \dots e\_{j})
\end{equation}

Of course, both subspaces are the same dimension and so extending the basis to \\(v\_{1} ... v\_{j}\\) to \\(e\_{1}, ... e\_{j}\\) would be trivial. So they are equal. Phew. \\(\blacksquare\\)


## Corollary Results {#corollary-results}


### Every [Inner Product Space]({{< relref "KBhinner_product.md#inner-product-space" >}}) has an [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) {#every-inner-product-space--kbhinner-product-dot-md--has-an-orthonormal-basis--kbhorthonormal-basis-dot-md}

Take any [basis]({{< relref "KBhbasis.md" >}}), [Gram-Schmidt it]({{< relref "KBhgram_schmidt.md" >}}), [orthonormal list of the right length is a basis]({{< relref "KBhorthonormal_basis.md#orthonormal-list-of-the-right-length-is-a-basis" >}}). \\(\blacksquare\\)


### Orthonormal list extended to [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) {#orthonormal-list-extended-to-orthonormal-basis--kbhorthonormal-basis-dot-md}

Based on the procedure above, [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}}) does nothing to already orthonormal vectors: the inner products between any yet-to-be-reghramschmidt'd already orthonormal vector will be \\(0\\), so nothing will be subtracted.

So, suppose you have an [orthonormal]({{< relref "KBhorthonormal.md" >}}) list \\(e\_1, ..., e\_{m}\\) in \\(V\\), which because [orthonormal list is linearly independent]({{< relref "KBhorthonormal.md#orthonormal-list-is-linearly-independent" >}}), can be [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}})'d to the same thing.

As [a linearly independent list expends to a basis]({{< relref "KBhbasis.md#a-id-45384b28-f1e3-4fb1-aeb2-21c875834744-linearly-independent-list-expends-to-a-id-f88170b1-08b5-48a7-a7b5-1ace768e7b28-basis" >}}), go do that. Now [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}})ting this new thing won't change \\(e\_1, ... e\_{m}\\) at all, but will give you extra [orthonormal]({{< relref "KBhorthonormal.md" >}}) vectors to them which all form the basis as its the right length.


### Orthonormal upper-triangular matrix basis exists if normal upper-triangular exists {#orthonormal-upper-triangular-matrix-basis-exists-if-normal-upper-triangular-exists}

Note that [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}})ting doesn't actually change the span; meaning, if you have an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}), you must have each \\(span(v\_1, ...v\_{j})\\) be invariant under \\(T\\).

Now, recall that [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}})ting doesn't actually change span; therefore, if each \\(span (v\_1, ... v\_{j})\\) is invariant under \\(T\\), then each \\(span(e\_1, ... e\_{j}) = span(v\_1, ... v\_{j})\\)  after [Gram-Schmidt]({{< relref "KBhgram_schmidt.md" >}})ting is _still_ [invariant]({{< relref "KBhinvariant_subspace.md" >}}) under \\(T\\). So we can actually build an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) out of the [orthonormal]({{< relref "KBhorthonormal.md" >}})ized matrix as well.


### Schur's Theorem {#schur-s-theorem}

Support \\(V\\) is a finite-dimensional complex vector space, then \\(T\\) has an [upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md" >}}) w.r.t. an [orthonormal basis]({{< relref "KBhorthonormal_basis.md" >}}) of \\(V\\).

[every complex operator has an upper-triangular matrix]({{< relref "KBhupper_triangular_matrix.md#every-complex-operator-has-an-id-af53dbd7-0421-4039-a9f9-9080ea6e1c42-upper-triangular-matrix" >}}); and [orthonormal upper-triangular matrix basis exists if normal upper-triangular exists](#orthonormal-upper-triangular-matrix-basis-exists-if-normal-upper-triangular-exists).
