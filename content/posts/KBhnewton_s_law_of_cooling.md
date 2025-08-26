+++
title = "Newton's Law of Cooling"
author = ["Houjun Liu"]
draft = false
+++

Putting something with a different temperature in a space with a constant temperature. The assumption underlying here is that the overall room temperature stays constant (i.e. the thing that's cooling is so small that it doesn't hurt room temperature).

\begin{equation}
y'(t) = -k(y-T\_0)
\end{equation}

where, \\(T\_0\\) is the initial temperature.

The intuition of this modeling is that there is some \\(T\_0\\), which as the temperature \\(y\\) of your object gets closer to t. The result we obtain


## Solving {#solving}

\begin{equation}
\int \frac{\dd{y}}{y-T\_0} = \int -k \dd{t}
\end{equation}

we can solve this:

\begin{equation}
\ln |y-T\_0| = -kt+C
\end{equation}

which means we end up with:

\begin{equation}
|y-T\_0| = e^{-kt+C} = e^{C}e^{-kt}
\end{equation}

So therefore:

\begin{equation}
y(t) = T\_0 + C\_1e^{-kt}
\end{equation}

to include both \\(\pm\\) cases.

this tells us that cooling and heating is exponential. We will fit our initial conditions rom data to obtain \\(C\_1\\).
