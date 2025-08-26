+++
title = "SU-MATh53 JAN262023"
author = ["Houjun Liu"]
draft = false
+++

## Underdetermined ODEs {#underdetermined-odes}

-   [Complex ODE System]({{< relref "KBhunderdetermined_ode_system.md" >}})
-   [Matrix Exponentiation]({{< relref "KBhmatrix_exponentiation.md" >}})


### Finding [eigenvector]({{< relref "KBheigenvalue.md" >}})s {#finding-eigenvector--kbheigenvalue-dot-md--s}

\\(A = n \times n\\) matrix, the task of finding eigenvalues and eigenvectors is a linear algebra problem:

\begin{equation}
A v = \lambda v
\end{equation}


### Finding specific solutions to [IVP]({{< relref "KBhinitial_value_problems.md" >}})s with special substitution {#finding-specific-solutions-to-ivp--kbhinitial-value-problems-dot-md--s-with-special-substitution}

For some:

\begin{equation}
\begin{cases}
x'  = Ax \\\\
x(t\_0) = x\_0
\end{cases}
\end{equation}

we can leverage the first task:

1.  find \\(v\\), \\(\lambda\\) for \\(A\\)
2.  guess \\(x = u(t)v\\), this is "magical substitution"
3.  and now, we can see that \\(x' = u'v = A(uv) = \lambda u v\\)
4.  meaning \\(u' = \lambda u\\)
5.  finaly, \\(u(t) = ce^{\lambda} t\\)


### Eigenbasis case {#eigenbasis-case}

Suppose \\(A\\) has a basis of [eigenvector]({{< relref "KBheigenvalue.md" >}})s, and **real** eigenvalues. We can write its entire solution set in terms of these basis eigenvectors:

\begin{equation}
x(t) = u\_1(t) v\_1 + \dots + u\_{n}(t) v\_{n}
\end{equation}

this means:

\begin{equation}
x'(t) = Ax = u\_1' v\_1 + \dots +u\_{n} ' v\_{n} = \lambda\_{1} u\_{1} v\_1 + \dots + \lambda\_{n} u\_{n} v\_{n}
\end{equation}

Because \\(v\\) forms a basis, each \\(u\_j' = \lambda\_{j} u\_{j}\\).

We thereby decomposed our entangled expression seperably by changing into eigenbasis.

After solving each \\(u\\), we obtain:

\begin{equation}
x(t) = c\_1 e^{\lambda\_{1}} v\_1 + \dots  + c\_{n} e^{\lambda\_{n}} v\_{n}
\end{equation}

We can identify \\(c\_{j}\\) by noting, that \\(x(0)\\) resolves to:

\begin{equation}
x(0) = c\_1v\_1 + \dots + c\_{n}v\_{n}
\end{equation}

Finally, we can write this as:

\begin{equation}
x(0) = x\_0 = \mqty[v\_1 & \dots & v\_{n}] c
\end{equation}

Meaning, we can solve for initial conditions as:

\begin{equation}
\mqty[v\_1 & \dots & v\_{n}]^{-1} x\_0 = c
\end{equation}


## Practice Solving {#practice-solving}

Let:

\begin{equation}
A = \mqty(0 & 1 & 1 \\\ 1 & 0 & 1 \\\ 1 & 1 & 0)
\end{equation}

We have two eigenspaces:

\begin{equation}
\lambda = -1, v = \left\\{\mqty(-1 \\\ 1 \\\ 0), \mqty(0 \\\ 1 \\\ -1)\right\\}
\end{equation}

and

\begin{equation}
\lambda = 2, v = \left\\{\mqty(1 \\\ 1 \\\ 1)\right\\}
\end{equation}

This gives rise to a basis of eigenvectors with all three vectors. We obtain:

\begin{equation}
x(t) = c\_1 e^{-t} \mqty(-1 \\\ 1\\\0) + c\_2 \mqty(0 \\\ 1 \\\ -1) e^{-t} + c\_3 \mqty(1 \\\ 1 \\\ 1) e^{2t}
\end{equation}
