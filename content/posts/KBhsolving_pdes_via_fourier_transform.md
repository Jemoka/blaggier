+++
title = "Solving PDEs via Fourier Transform"
author = ["Houjun Liu"]
draft = false
+++

This will have no explicit boundary conditions in \\(x\\)!

Assume \\(|U(t,x)|\\) decays quickly as \\(|x| \to \infty\\).


## Apply Fourier Transform {#apply-fourier-transform}

Step one is to apply the Fourier Transform on our PDE

\begin{equation}
\hat{U}(t, \lambda) = \int\_{R} U(t,x) e^{-i\lambda x} \dd{x}
\end{equation}

Leveraging the fact that [Derivative of Fourier Transform]({{< relref "KBhfourier_transform.md#derivative-of-fourier-transform" >}}) is a multiplication, we can simply our Fourier transform in terms of one expression in \\(x\\).


## Apply a [Fourier Transform]({{< relref "KBhfourier_transform.md" >}}) on \\(f(x)\\) {#apply-a-fourier-transform--kbhfourier-transform-dot-md--on-f--x}

This allows you to plug the initial conditions into your transformed expression above.


## Solve for \\(\hat{U}(t,\lambda)\\), and then convert back {#solve-for-hat-u--t-lambda--and-then-convert-back}

This uses the inverse Fourier transform.
