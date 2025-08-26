+++
title = "First-Order Linear Systems of ODEs"
author = ["Houjun Liu"]
draft = false
+++

Consider the case where there are two functions interacting with each other:

\begin{equation}
y\_1(t) \dots y\_{2}(t)
\end{equation}

So we have more than one dependent function, with functions \\(y\_1, y\_1', y\_2, y\_2'\\) and so forth. To deal with this, we simply make it into a matrix system:

\begin{equation}
y(t) = \mqty(y\_1(t) \\\ \dots \\\ y\_{n}(t))
\end{equation}

For instance, should we have:

\begin{equation}
\begin{cases}
y\_1' = 3y\_1 - 2y\_2 \\\\
y\_2' = -y\_1 + 5y\_2
\end{cases}
\end{equation}

We can write this system in a matrix like such:

\begin{equation}
y'(t) = \mqty(3 & -2 \\\ -1 & 5) y(t)
\end{equation}

Meaning:

\begin{equation}
y' = Ay
\end{equation}

which is a single linear equation.

Recall that we had:

\begin{equation}
y' = Ay
\end{equation}

Let \\(v\\) be an [eigenvector]({{< relref "KBheigenvalue.md" >}}) of \\(A\\) with \\(\lambda\\) be an eigenvalue. Let us guess that \\(y = e^{\lambda t} v\\)  is a solution.

Plugging this in, we have:

\begin{equation}
y' = Ay = A(e^{\lambda t} v) = e^{\lambda t} Av = \lambda e^{\lambda t} v
\end{equation}

Of course, \\(y' = \lambda e^{\lambda t} v\\).

Meaning this is a solution of our system. Recall [finding eigenvalues with actual numbers]({{< relref "KBheigenvalue.md#finding-eigenvalues-with-actual-numbers" >}}), so we want some \\(\lambda\\) for which \\(det(A-\lambda I)=0\\).

Plugging the eigenvalues back, and recalling the [superposition principle]({{< relref "KBhordinary_differential_equations.md#superposition-principle" >}}), we are left with some:

\begin{equation}
y(t) = c\_1 e^{\lambda\_{1}} v\_1 + \dots  + c\_{n} e^{\lambda\_{n}} v\_{n}
\end{equation}

This is true if we have enough [eigenvalue]({{< relref "KBheigenvalue.md" >}})s which forms a basis. Now, at \\(y(0)\\), we have some \\(y\_0 = c\_1v\_1 + ... + c\_{n}v\_{n}\\).

This yields a system \\(y\_{0} = \mqty[v\_1 & \dots & v\_{n}] \mqty[c\_1 \\\ \dots \\\ c\_{n}]\\).

We call this matrix written in terms of eigenvectors \\(E\\), that is:

\begin{equation}
E = \mqty[v\_1 & \dots & v\_{n}]
\end{equation}

Finally, we have:

\begin{equation}
\mqty[c\_1 \\\ \dots \\\ c\_{n}] = E^{-1} y\_0
\end{equation}

This method works for cases where we have enough [independent]({{< relref "KBhprobability.md#independence" >}}) [eigenvector]({{< relref "KBheigenvalue.md" >}})s to admit enough initial conditions. Otherwise, [matrix exponentiation.]({{< relref "KBhmatrix_exponentiation.md" >}})

---


## Special Cases {#special-cases}


### 2x2 with \\(\lambda\_{2} = \bar{\lambda\_{1}}\\) {#2x2-with-lambda-2-bar-lambda-1}

For any two by two system, where there the eigenvalues are conjugates of each other, we can formulate a solution in the form:

\begin{equation}
y(t) = c\_1 Re(e^{\lambda t} v) + c\_2 Im(e^{\lambda t}v)
\end{equation}

if the matrix representing the system admits two eigenvalues, \\(\lambda\\) and \\(\bar{\lambda}\\). We can obtain this by rephrasing one solution as \\(e^{\lambda t} = e^{a + ib} e^{t} = e^{a+t}(\cos b + i\sin b)\\).


## Tips and Tricks {#tips-and-tricks}


### Changing higher order system into lower orders {#changing-higher-order-system-into-lower-orders}

We can actually write higher order linear system this way too:

\begin{equation}
y'' + ay' + by = 0
\end{equation}

we can actually construct:

\begin{align}
& y\_1(t) = y(t)  \\\\
& y\_2(t) = y'(t)
\end{align}

And therefore, we can construct:

\begin{equation}
\mqty(y\_1 \\\ y\_2)' = \mqty(y\_2 \\\ -by1 - ay2) = \mqty(0 & 1 \\\ -b &-a) \mqty(y\_1 \\\ y\_2)
\end{equation}
