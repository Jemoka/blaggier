+++
title = "raising e to a matrix"
author = ["Houjun Liu"]
draft = false
+++

Let's compute what \\(e^{tA}\\) should look like, where \\(t\\) is some scalar and \\(A\\) is a diagonalizable matrix. This is a supplement to [Second-Order Linear Differential Equations]({{< relref "KBhsecond_order_linear_differential_equation.md" >}}).

Let \\(v\_1\dots v\_{m}\\) be the eigenvectors of \\(A\\). Let \\(\lambda\_{1}\dots\lambda\_{m}\\) be the [eigenvalue]({{< relref "KBheigenvalue.md" >}})s.

Recall that we can therefore diagonalize \\(A\\) as:

\begin{equation}
A = \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{\lambda\_{1}, \dots, \lambda\_{m}})\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}

read: change of choordinates into the eigenbases, scale by the eigenvalues, then change back to normal choordinates.

Now, imagine if we are multiplying \\(A\\) by itself manymany times; what will that look like?

\begin{equation}
A^{n} = \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{\lambda\_{1}, \dots, \lambda\_{m}})\mqty(v\_1& \dots& v\_{m})^{-1}\mqty(v\_1& \dots& v\_{m})\mqty(\dmat{\lambda\_{1}, \dots, \lambda\_{m}})\mqty(v\_1& \dots& v\_{m})^{-1} \dots
\end{equation}

The middle parts, nicely, cancels out! Its a matrix applied to its inverse! So, we get rid of it

\begin{equation}
A^{n} = \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{\lambda\_{1}, \dots, \lambda\_{m}})\mqty(\dmat{\lambda\_{1}, \dots, \lambda\_{m}})\mqty(v\_1& \dots& v\_{m})^{-1} \dots
\end{equation}

Now, we are [multiplying]({{< relref "KBhmultiplying.md" >}}) diagonal [matricies]({{< relref "KBhmatricies.md" >}}) against itself! If you work out the mechanics of [matrix]({{< relref "KBhmatricies.md" >}}) [multiplication]({{< relref "KBhmultiplying.md" >}}), you will note that each element simply gets scaled to higher powers (the [matricies]({{< relref "KBhmatricies.md" >}}) are diagonal!)! So then, we have:

\begin{equation}
A^{n} = \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{{\lambda\_{1}}^{n}, \dots, {\lambda\_{m}}^{n}})\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}

Nice.

Recall also the Tayler expasion of \\(e^{x}\\); we will apply it to to \\(e^{tA}\\):

\begin{equation}
e^{tA} = \sum\_{k=0}^{\infty} \frac{1}{k!}(tA)^{k} = \sum\_{k=0}^{\infty} \frac{t^{k}}{k!}A^{k}
\end{equation}

Ok. We now apply our definition of \\(A^{n}\\) derived above:

\begin{equation}
e^{tA} =  \sum\_{k=0}^{\infty} \frac{t^{k}}{k!}\mqty(v\_1& \dots& v\_{m})\mqty(\dmat{{\lambda\_{1}}^{k}, \dots, {\lambda\_{m}}^{k}})\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}

See now that \\(\mqty(v\_1 & \dots &v\_{m})\\) and its inverse is both constant in the sum, so we take it out:

\begin{equation}
e^{tA} =  \mqty(v\_1& \dots& v\_{m})\qty(\sum\_{k=0}^{\infty}\frac{t^{k}}{k!} \mqty(\dmat{{\lambda\_{1}}^{k}, \dots, {\lambda\_{m}}^{k}}))\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}

And now, the actual mechanics of adding a [matrix]({{< relref "KBhmatricies.md" >}}) is just adding it elementwise, so we will put the summations into the matrix:

\begin{equation}
e^{tA} =  \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{\sum\_{k=0}^{\infty}\frac{t^{k}}{k!} {\lambda\_{1}}^{k}, \dots, \sum\_{k=0}^{\infty}\frac{t^{k}}{k!} {\lambda\_{m}}^{k}})\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}

Note now that each value in that matrix is just the Tayler expansion of \\(e^{k\_{\lambda\_{j}}}\\) (take a moment to pause if this is not immediately obvious; think about what each element in that diagonal matrix look like and what the Tayler polynomial \\(e^{x}\\) should look like. Perhaps what some arbitrary \\(e^{ab}\\) should looks like.

\begin{equation}
e^{tA} =  \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}})\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}