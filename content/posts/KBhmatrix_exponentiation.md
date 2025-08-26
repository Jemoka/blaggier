+++
title = "matrix exponentiation"
author = ["Houjun Liu"]
draft = false
+++

If we have some system:

\begin{equation}
x' = Ax
\end{equation}

the solution for this system should be \\(e^{At}\\). This gives rise to, given the power series:

\begin{equation}
e^{At} = 1 + At + \frac{1}{2} \qty(At)^{2} + \frac{1}{3!} (At)^{3}+ \dots
\end{equation}

the derivative of which:

\begin{align}
\dv t e^{At} &= A + A^{2}t + \frac{A^{3}t^{2}}{2} + \dots   \\\\
&= A\qty(1 + At + \frac{A^{2}t^{2}}{2})
\end{align}

This intuition makes sense for all matrices \\(A\\). Meaning the general solution gives:

\begin{equation}
x = e^{At} x\_0
\end{equation}

See also [raising e to a matrix]({{< relref "KBhraising_e_to_a_matrix.md" >}}) to see how to deal with [diagonalizable]({{< relref "KBhdiagonal_matrix.md#properties-of-diagonal-matrices" >}}) matricies.


## Benefits {#benefits}

1.  this approach produces all solutions no matter the [eigenvalue]({{< relref "KBheigenvalue.md" >}})s of \\(A\\).
2.  also tells you what to do if your [characteristic polynomial]({{< relref "KBhcharacteristic_polynomial.md" >}}) has repeated eigenvalues
3.  this is computationally not too bad if you have..
    1.  [diagonal]({{< relref "KBhdiagonal_matrix.md" >}}) \\(A\\)
    2.  [diagonalizable]({{< relref "KBhdiagonal_matrix.md#properties-of-diagonal-matrices" >}}) \\(A\\)


## Great Matrix Exponential Tragedy {#great-matrix-exponential-tragedy}

\begin{equation}
e^{A+B} \neq e^{A} e^{B}
\end{equation}

in general, because [matricies]({{< relref "KBhmatricies.md" >}}) don't commute.
