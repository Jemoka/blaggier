+++
title = "Numerical Stability"
author = ["Houjun Liu"]
draft = false
+++

"being careful"


## numerically stable vector norms {#numerically-stable-vector-norms}

consider:

\begin{equation}
\Vert x \Vert\_{2} = \sqrt{x\_1^{2} + \dots + x\_{m}^{2}}
\end{equation}

squaring it could easily go over MAX-float for large \\(m\\). Instead, consider:

\begin{equation}
\Vert x \Vert\_{2} = z \sqrt{\qty(\frac{x\_1}{z})^{2} + \dots \qty(\frac{x\_{m}}{z})^{2}}
\end{equation}

where \\(z = \max\_{i} |x\_{i}|\\). Notice how now we are squaring numbers which are less than one, meaning this will never blow up. Yet, the results will be the same. This is bounded, therefore, by \\(m\\).


## numerically stable quadratic formula {#numerically-stable-quadratic-formula}

quadratic formula on small floating points give very wrong results after rounding (since \\(b - \sqrt{b^{2}-4ac}\\) maybe very close to \\(0\\)).

If we derationalize (multiply by rational on top and bottom):

\begin{equation}
\frac{2c}{-b \pm \sqrt{b^{2}-4ac}}
\end{equation}

this actually gets the other root wrong: i.e. the one which was fine on the other one (the \\(b+\ldots\\) case).

The takeaway is to use the normal one:

\begin{equation}
\frac{-b + \sqrt{b^{2}-4ac}}{2a}
\end{equation}

for the plus case and the derationalized one:

\begin{equation}
\frac{2c}{-b + \sqrt{b^{2} - 4ac}}
\end{equation}

for the other root. (If \\(-b\\) is negative, then flip the \\(\pm\\) signs to avoid cancellation).


## numerically stable l'hospital's {#numerically-stable-l-hospital-s}

Evaluating:

\begin{equation}
\frac{x^{2}-4}{x-2}
\end{equation}

near \\(x=2\\), where it becomes \\(\frac{0}{0}\\), is really bad and will lead to instability.

Naively doing:

\begin{equation}
\frac{x^{2}-4}{(x-2)+\epsilon}
\end{equation}

is also bad because it goes to \\(0\\) near \\(x=2\\), instead of the correct value which is near \\(x+2\\). Even worse, the derivative of this goes to an insane amount of error as you string \\(\epsilon\\) near \\(x=2\\), because the curve becomes increasingly sharper.
