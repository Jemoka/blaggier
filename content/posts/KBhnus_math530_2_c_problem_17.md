+++
title = "NUS-MATH530 2.C Problem 17"
author = ["Houjun Liu"]
draft = false
+++

## Claim {#claim}

Proof or give a counter example for the statement that:

\begin{align}
\dim\qty(U\_1+U\_2+U\_3) = &\dim U\_1+\dim U\_2+\dim U\_3\\\\
&-\dim(U\_1 \cap U\_2) - \dim(U\_1 \cap U\_3) - \dim(U\_2 \cap U\_3) \\\\
&+\dim(U\_1 \cap U\_2 \cap U\_3)
\end{align}


## Counterexample {#counterexample}

This statement is false.

Take the following three subspaces of \\(\mathbb{F}^{2}\\):

\begin{align}
U\_1 = \qty{\mqty(a \\\ 0): a \in \mathbb{F}}\\\\
U\_2 = \qty{\mqty(0 \\\ b): b \in \mathbb{F}}\\\\
U\_3 = \qty{\mqty(c \\\ c): c \in \mathbb{F}}
\end{align}


### subspace check {#subspace-check}

All \\(U\_1\\), \\(U\_2\\), \\(U\_3\\) are in \\(\mathbb{F}^{2}\\).


#### zero {#zero}

Zero exists in all by setting free variables to \\(0\\)


#### addition {#addition}

For \\(U\_1\\) ---

\begin{equation}
\mqty(a\_1 \\\ 0) + \mqty(a\_2 \\\ 0) = \mqty(a\_1+a\_2 \\\ 0) \in \qty{\mqty(a \\\ 0): a \in \mathbb{F}}
\end{equation}

and, by the same token, addition is closed for \\(U\_2\\).

For \\(U\_3\\) ---

\begin{equation}
\mqty(c\_1 \\\ c\_1) + \mqty(c\_2 \\\ c\_2) = \mqty(c\_1+c\_2 \\\ c\_1+c\_2) \in  \qty{\mqty(c \\\ c): c \in \mathbb{F}}
\end{equation}


#### scalar multiplication {#scalar-multiplication}

For \\(U\_1\\) ---

\begin{equation}
\lambda \mqty(a \\\ 0)  = \mqty(\lambda a \\\ 0) \in \qty{\mqty(a \\\ 0): a \in \mathbb{F}}
\end{equation}

and, by the same token, scalar multiplication is closed for \\(U\_2\\).

For \\(U\_3\\) ---

\begin{equation}
\lambda \mqty(c \\\ c) = \mqty(\lambda c \\\ \lambda c) \in  \qty{\mqty(c \\\ c): c \in \mathbb{F}}
\end{equation}


### constructing the counterexample {#constructing-the-counterexample}

Let us calculate the value of both sides of:

\begin{align}
\dim\qty(U\_1+U\_2+U\_3) = &\dim U\_1+\dim U\_2+\dim U\_3\\\\
&-\dim(U\_1 \cap U\_2) - \dim(U\_1 \cap U\_3) - \dim(U\_2 \cap U\_3) \\\\
&+\dim(U\_1 \cap U\_2 \cap U\_3)
\end{align}

Recall that:

\begin{align}
U\_1 = \qty{\mqty(a \\\ 0): a \in \mathbb{F}}\\\\
U\_2 = \qty{\mqty(0 \\\ b): b \in \mathbb{F}}\\\\
U\_3 = \qty{\mqty(c \\\ c): c \in \mathbb{F}}
\end{align}


#### left side {#left-side}

Let's first construct:

\begin{equation}
U\_1 + U\_2 + U\_3
\end{equation}

By definition:

\begin{equation}
U\_1 + U\_2 + U\_3 = \qty{u\_1+u\_2+u\_3: u\_j\in U\_j}
\end{equation}

Therefore, taking a sample from each results as:

\begin{equation}
    u\_1+u\_2+u\_3 = \mqty(a \\\ 0) + \mqty(0 \\\ b) + \mqty(c \\\c) = \mqty(a+c \\\ b +c)
\end{equation}

This creates two free variables for slots, meaning:

\begin{equation}
U\_1+U\_2+U\_3 = \mathbb{F}^{2}
\end{equation}

So: \\(\dim \qty(U\_1+U\_2+U\_3)=2\\)


#### right side {#right-side}

<!--list-separator-->

-  dimension of the subspaces

    Let us construct a basis for each of these spaces to figure their dimension.

    For \\(U\_1\\), \\(\qty{\mqty(1 \\\ 0)}\\). We see that scaling the one vector in this basis will construct all vectors in \\(\mathbb{F}^{2}\\) for which the second coordinate will be \\(0\\) --- spanning \\(U\_1\\). Being a list with one non-zero vector, it is also linearly independent. So \\(\dim U\_1 = 1\\).

    By almost the same token, for \\(U\_2\\), \\(\qty{\mqty(0 \\\ 1)}\\). This makes also \\(\dim U\_2=1\\).

    For \\(U\_3\\), we have \\(\qty{\mqty(1 \\\ 1)}\\). Scaling this one vector will construct all vectors in \\(\mathbb{F}^{2}\\) for which both coordinates are the same --- spanning \\(U\_3\\). Being a list with one non-zero vector, it is also linearly independent. So \\(\dim U\_3 = 1\\).

    This renders all three subspaces have dimension \\(1\\).

<!--list-separator-->

-  dimension of the unions

    These subspaces were picked because of a surprising convenience. Their unions are all the zero vector!

    \begin{equation}
    U\_1 \cap U\_2 = \qty{\mqty(a \\\ 0): a \in \mathbb{F}} \cap \qty{\mqty(0 \\\ b): b \in \mathbb{F}} = \qty{\mqty(0 \\\ 0)}
    \end{equation}

    This is because \\(a=0\\), \\(b=0\\) respectively in order to satisfy both generators.

    Similarly

    \begin{equation}
    U\_1 \cap U\_3 = \qty{\mqty(a \\\ 0): a \in \mathbb{F}} \cap \qty{\mqty(c \\\ c): c \in \mathbb{F}} = \qty{\mqty(0 \\\ 0)}
    \end{equation}

    To satisfy both generators, \\(a=c\\) for the top coordinate, \\(c=0\\) for the bottom coordinate, so \\(a=c=0\\).

    By a similar token:

    \begin{equation}
    U\_2 \cap U\_3 = \qty{\mqty(0 \\\ 0)}
    \end{equation}

    We established before that the span of \\(\qty{}\\) (which is declared linearly independent) to be \\(\qty{0}\\), so we see that the dimensions of all three required unions as \\(0\\) (as an empty list has length \\(0\\).)

<!--list-separator-->

-  constructing the expression for the right side

    We have that:

    \begin{equation}
    \dim U\_j = 1, j \in \qty{1,2,3}
    \end{equation}

    And that:

    \begin{equation}
    \dim U\_{j} \cap U\_{k} = 0 , j,k \in \\{1,2,3\\}
    \end{equation}

    from above.

    This makes---

    \begin{align}
    \dim &U\_1+\dim U\_2+\dim U\_3\\\\
    &-\dim(U\_1 \cap U\_2) - \dim(U\_1 \cap U\_3) - \dim(U\_2 \cap U\_3) \\\\
    &+\dim(U\_1 \cap U\_2 \cap U\_3)\\\\
    =1&+1+1-0-0-0+0 \\\\
    =3
    \end{align}


### showing the counterexample {#showing-the-counterexample}

We have now that:

\begin{equation}
\dim(U\_1+U\_2+U\_3) = 2
\end{equation}

But:

\begin{align}
\dim &U\_1+\dim U\_2+\dim U\_3\\\\
&-\dim(U\_1 \cap U\_2) - \dim(U\_1 \cap U\_3) - \dim(U\_2 \cap U\_3) \\\\
&+\dim(U\_1 \cap U\_2 \cap U\_3)\\\\
=3
\end{align}

Yet \\(2 \neq 3\\).

So:

\begin{align}
\dim(U\_1+U\_2+U\_3) \neq  \dim &U\_1+\dim U\_2+\dim U\_3\\\\
&-\dim(U\_1 \cap U\_2) - \dim(U\_1 \cap U\_3) - \dim(U\_2 \cap U\_3) \\\\
&+\dim(U\_1 \cap U\_2 \cap U\_3)\\\\
\end{align}

Finishing the counter example. \\(\blacksquare\\)