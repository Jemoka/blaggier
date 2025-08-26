+++
title = "Linear Systems"
author = ["Houjun Liu"]
draft = false
+++

## Systems of Linear Equations {#systems-of-linear-equations}

\begin{equation}
T v = v'
\end{equation}

every system of linear equations is decomposed into this. Classically, there's either a unique solution, no solution, infinite solutions---


### problems with zero {#problems-with-zero}

"zero" is really hard to define. For instance:

\begin{equation}
6.23423 \times 10^{192} - 1 \times 10^{7} = 6.23423 \times 10^{192}
\end{equation}

so in this case \\(10^{7}\\) literally behaves like zero. (small numbers have the opposite problem)

---

so, we use [elementary row operations]({{< relref "KBhmatricies.md#elementary-matrix" >}}) to make sure that enormous numbers are essentially standardized---if a row has huge numbers, we may want to scale it down to smaller numbers to make them nice.


#### row scaling {#row-scaling}

scaling an entire row by multiplying the number a la [elementary row operations]({{< relref "KBhmatricies.md#elementary-matrix" >}})


#### column scaling {#column-scaling}

scaling a column by changing the definition of \\(c\_{j}\\); for instance,

\begin{equation}
\mqty(3e-4 & 2 \\\ 1e-4 & 0) \mqty(c\_1 \\\ c\_2)  = \mqty(\ddots)
\end{equation}

we can set \\(c\_3 = c\_1(1e-4)\\) and write

\begin{equation}
\mqty(3 & 2 \\\ 1 & 0) \mqty(c\_3 \\\ c\_2) = \mqty(\ddots)
\end{equation}

the right side needn't to get scaled since we simply changed the definition of \\(x\\).


## square matrix {#square-matrix}

a [square matrix](#square-matrix) is a [invertable]({{< relref "KBhinvertability.md" >}}) [Linear Map]({{< relref "KBhlinear_map.md" >}}).


### solvability {#solvability}

singular matrix (non-solvable matrix) --- see [singular matrix]({{< relref "KBhinvertability.md" >}}):

-   one column is [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}) on the others
-   determinant is 0
-   non-empty [null space]({{< relref "KBhnull_space.md" >}})


## [Diagonal Matrix]({{< relref "KBhdiagonal_matrix.md" >}}) {#diagonal-matrix--kbhdiagonal-matrix-dot-md}

see [Diagonal Matrix]({{< relref "KBhdiagonal_matrix.md" >}})
