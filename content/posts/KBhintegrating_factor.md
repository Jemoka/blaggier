+++
title = "integrating factor"
author = ["Houjun Liu"]
draft = false
+++

The [integrating factor]({{< relref "KBhintegrating_factor.md" >}}) \\(\rho(x)\\) is a value that helps undo the product rule. For which:

\begin{equation}
    log(\rho(x)) = \int P(x)dx
\end{equation}

for some function \\(P(x)\\).

Separating the \\(\rho(x)\\) out, we have therefore:

\begin{equation}
    e^{\int P dx} = \rho(x)
\end{equation}

Why is this helpful and undoes the product rule? This is because of a very interesting property of how \\(\rho(x)\\) behaves.