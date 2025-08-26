+++
title = "damped heat equation"
author = ["Houjun Liu"]
draft = false
+++

we can also damp the heat equation:

\begin{equation}
\pdv{u}{t} + ku = \pdv[2]{u}{x}
\end{equation}

we note that substituting \\(u(t,x) = e^{-kt}w(t,x)\\) into the expression, we yield:

\begin{equation}
\pdv{w}{t} = \pdv[2]{w}{t}
\end{equation}

therefore, we simply have to solve the system normally on \\(w\\), then multiply the solution by \\(e^{-kt}\\) to obtain our solution for the damped equation.
