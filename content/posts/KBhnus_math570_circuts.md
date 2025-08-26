+++
title = "NUS-MATH570 Circuits"
author = ["Houjun Liu"]
draft = false
+++

We declare known battery voltage \\(E(t)\\).

Here are the \\(y\\) values.

\begin{equation}
\begin{cases}
\dv{x\_1}{t} = y\_{4}\\\\
\dv{x\_2}{t} = y\_{3}\\\\
\dv{x\_3}{t} = y\_{1}\\\\
\dv{x\_4}{t} = y\_{2}\\\\
\end{cases}
\end{equation}

And here are some of the \\(x\\) values.

\begin{equation}
\begin{cases}
\dv{x\_4}{t}=-\frac{2}{RC}x\_2-\frac{1}{RC}x\_{3}-\frac{2E(t)}{R} \\\\
\dv{y\_1}{t}=-\frac{1}{LC}x\_2-\frac{E(t)}{C} \\\\
\dv{y\_4}{t} = -\frac{R}{L}y\_2-\frac{2E(t)}{L}
\end{cases}
\end{equation}

Right off the bat, we can see that we can make one substitution. That, given:

\begin{equation}
\begin{cases}
\dv{x\_4}{t}=-\frac{2}{RC}x\_2-\frac{1}{RC}x\_{3}-\frac{2E(t)}{R} \\\\
\dv{x\_4}{t} = y\_{2}
\end{cases}
\end{equation}

we have that:

\begin{equation}
y\_2 = -\frac{2}{RC}x\_2-\frac{1}{RC}x\_{3}-\frac{2E(t)}{R}
\end{equation}

This renders the last expression:

\begin{align}
\dv{y\_4}{t} &= -\frac{R}{L}y\_2-\frac{2E(t)}{L}  \\\\
&= -\frac{R}{L}\qty(-\frac{2}{RC}x\_2-\frac{1}{RC}x\_{3}-\frac{2E(t)}{R})-\frac{2E(t)}{L}  \\\\
&= \qty(\frac{2}{LC}x\_2+\frac{1}{LC}x\_{3}+\frac{2E(t)}{L})-\frac{2E(t)}{L}  \\\\
&=  \frac{2}{LC}x\_2+\frac{1}{LC}x\_{3}
\end{align}

So now, we have the final unused expressions:

\begin{equation}
\begin{cases}
\dv{x\_1}{t} = y\_4 \\\\
\dv{x\_2}{t} = y\_3 \\\\
\dv{x\_{3}}{t} = y\_1 \\\\
\dv{y\_1}{t} = -\frac{1}{LC}x\_2-\frac{E(t)}{C} \\\\
\dv{y\_4}{t} = \frac{2}{LC}x\_2+\frac{1}{LC}x\_3
\end{cases}
\end{equation}