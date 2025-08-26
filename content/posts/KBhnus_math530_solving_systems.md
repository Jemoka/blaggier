+++
title = "NUS-MATH530 Solving Systems"
author = ["Houjun Liu"]
draft = false
+++

## Two Variables {#two-variables}

Let's begin with the equations:

\begin{equation}
\begin{cases}
2x+y = 3 \\\\
x - y = 0
\end{cases}
\end{equation}

We will first change this into a matrix equation:

\begin{equation}
\begin{pmatrix}
2 & 1 \\\\
1 & -1
\end{pmatrix} \begin{pmatrix}
x \\\ y
\end{pmatrix} = \begin{pmatrix}
3 \\\ 0
\end{pmatrix}
\end{equation}

We need to find, then, the inverse of:

\begin{equation}
\begin{pmatrix}
2 & 1 \\\ 1 & -1
\end{pmatrix}
\end{equation}

Namely, we need the matrix such that:

\begin{equation}
M \begin{pmatrix}
2 & 1 \\\ 1 & -1
\end{pmatrix} = I
\end{equation}

To do this, we can use row operations on both sides such that the left side becomes the identity, we are essentially inverting the process of reversing a matrix.

\begin{equation}
\begin{pmatrix}
2 & 1 \\\ 1 & -1
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\\ 0 & 1
\end{pmatrix}
\end{equation}

Let's begin:

\begin{align}
& \begin{pmatrix}
2 & 1 \\\ 1 & -1
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\\ 0 & 1
\end{pmatrix} \\\\
\Rightarrow\ &  \begin{pmatrix}
0 & 3 \\\ 1 & -1
\end{pmatrix} = \begin{pmatrix}
1 & -2 \\\ 0 & 1
\end{pmatrix} \\\\
\Rightarrow\ &  \begin{pmatrix}
0 & 1 \\\ 1 & -1
\end{pmatrix} = \begin{pmatrix}
\frac{1}{3} & -\frac{2}{3} \\\ 0 & 1
\end{pmatrix}  \\\\
\Rightarrow\ & \begin{pmatrix}
0 & 1 \\\ 1 & 0
\end{pmatrix} = \begin{pmatrix}
\frac{1}{3} & -\frac{2}{3} \\\ \frac{1}{3} & \frac{1}{3}
\end{pmatrix}  \\\\
\Rightarrow\ & \begin{pmatrix}
1 & 0 \\\ 0 & 1
\end{pmatrix} = \begin{pmatrix}
\frac{1}{3} & \frac{1}{3} \\\ \frac{1}{3} & -\frac{2}{3}
\end{pmatrix}
\end{align}

Finally, then, we will applying this matrix to the input:

\begin{align}
\begin{pmatrix}
\frac{1}{3} & \frac{1}{3} \\\ \frac{1}{3} & -\frac{2}{3}
\end{pmatrix} \begin{pmatrix}
3 \\\ 0
\end{pmatrix} = \begin{pmatrix}
1 \\\ 1
\end{pmatrix}
\end{align}


## Three Variables {#three-variables}

We do this again, but now with a much larger matrix. Namely:

\begin{equation}
\begin{pmatrix}
1 & 2 & 1 \\\\
2 & 0 & -1 \\\\
1 & -1 & 0
\end{pmatrix}
\end{equation}

I spend a good two hours (yes) trying to invert this. At this point, I know its invertable but I keep making mistakes. However, a solution exists and it is of shape:

\begin{equation}
\begin{pmatrix}
\frac{1}{5} & \frac{1}{5} & \frac{2}{5} \\\\
\frac{1}{5} & \frac{1}{5} & -\frac{3}{5} \\\\
\frac{2}{5} & -\frac{3}{5} & \frac{4}{5}
\end{pmatrix}
\end{equation}

And, applying the output, we have that:

\begin{equation}
\begin{pmatrix}
1 \\\\
-1 \\\\
1
\end{pmatrix}
\end{equation}

So complicated of an inverse, for such a simple result...


## Matrix Multiplication {#matrix-multiplication}

Matrix multiplication is not commutative. While you can, for instance, multiply a \\(2\times 3\\) by a \\(3\times 3\\), we cannot do it the other way.

For an equation with three variables, you need three equations at a minimum to have at least one solution; you can get at most the number of equations number of solutions with fewer equations. You probably will have no solutions if you have more equations---the result is likely to be overdetermined; of course, two equations may be the same relation then in which case one is effectively nulled.