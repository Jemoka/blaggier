+++
title = "SU-MATH53 Practice 1 Problem 4"
author = ["Houjun Liu"]
draft = false
+++

We have:

\begin{equation}
\pdv[2]{u}{x} + \pdv[2]{u}{y} = 0
\end{equation}

Ignoring the boundary conditions when \\(u(0,y)\\), we know that we have Dirichlet boundaries in \\(y\\). This gives:

\begin{equation}
u(x,0) = u(x,\pi) = 0
\end{equation}

Assuming our solution takes on the shape of \\(u=X(x)Y(y)\\), we obtain:

\begin{equation}
X''(x)Y(y) + Y''(y)X(x) = 0
\end{equation}

by plugging in derivatives of that assumption; meaning:

\begin{equation}
X''(x)Y(y) = -Y''(y)X(x)
\end{equation}

This gives rise to:

\begin{align}
\frac{X''(x)}{X(x)} = -\frac{Y''(y)}{Y(y)} = c
\end{align}

[you know why \\(c>0\\), so let's skip to]

We have \\(c>0\\), meaning:

\begin{equation}
X''(x) = cX(x)
\end{equation}

for some positive \\(c\\); this will result in a linear combination of exponentials:

\begin{equation}
X(x) = a\_{1} e^{\sqrt{c}x} + a\_2 e^{-\sqrt{c}x}
\end{equation}

this is because... try it! try solving \\(X''(x) = cX(x)\\).

Now, **importantly**, let's declare:

\begin{equation}
\lambda = \sqrt{c}
\end{equation}

This gives:

\begin{equation}
c = \lambda^{2}
\end{equation}

Meaning, we have:

\begin{equation}
\frac{Y''(y)}{Y(y)} = -\lambda^{2}
\end{equation}

meaning:

\begin{equation}
Y''(y) = -\lambda^{2} Y(y)
\end{equation}

Now, given we now have a negative sign in front of our second order ODE, we can see that this falls into the sinusoid case, whereby:

\begin{equation}
Y = a\_3 \cos \qty(\lambda x) + a\_4 \sin \qty(\lambda x)
\end{equation}

Our boundary condition gives:

\begin{equation}
Y\_0 = Y\_{\pi} = 0 = a\_3  = 0
\end{equation}

meaning

\begin{equation}
Y =  a\_4 \sin \qty(\lambda x)
\end{equation}

and so on. You multiply them together and all's well that ends well.
