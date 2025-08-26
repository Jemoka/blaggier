+++
title = "NUS-MATH570 Problem Set 2, Problem 1"
author = ["Houjun Liu"]
draft = false
+++

Considering the system:

\begin{equation}
\begin{cases}
\dv{x}{t} = -2x+y+(1-\sigma)z \\\\
\dv{y}{t} = 3x-y \\\\
\dv{z}{t} = (3-\sigma y)x-z\\\\
\end{cases}
\end{equation}

with the initial locations \\((x\_0, y\_0, z\_0)= (-1,1,2)\\).

We notice first that the top and bottom expressions as a factor in \\(x\\) multiplied by \\(y\\), which means that our system is not homogenous. Let's expand all the expressions first.

\begin{equation}
\begin{cases}
\dv{x}{t} = -2x+y+(1-\sigma)z \\\\
\dv{y}{t} = 3x-y \\\\
\dv{z}{t} = 3x-\sigma yx-z\\\\
\end{cases}
\end{equation}