+++
title = "Representing Large Computation"
author = ["Houjun Liu"]
draft = false
+++

Instead of calculating:

\begin{equation}
\qty( \frac{52! -1}{52!} )
\end{equation}

We calculate the log of it because then you are able to write:

\begin{equation}
\log \qty( \frac{52! -1}{52!} ) = \log (52! - 1) - \log(52!)
\end{equation}

which won't be rounded to \\(0\\).
