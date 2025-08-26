+++
title = "Wave Equation"
author = ["Houjun Liu"]
draft = false
+++

If we write it in a single set of variables:

\begin{equation}
\pdv[2]{u}{t} = \pdv[2]{u}{x}
\end{equation}

At a glance, for [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}):

\begin{equation}
u(t,x) = \sum\_{k}  \qty(a\_{k} \sin  \qty(\frac{ck\pi}{l} t) + b\_{k} \cos  \qty(\frac{ck\pi}{l} t)) \sin  \qty( \frac{k \pi}{l}x)
\end{equation}

this takes two initial condition:

\begin{equation}
u(0,x) = \sum b\_{k} \sin  \qty( \frac{k\pi x}{l}) = f(x)
\end{equation}

\begin{equation}
\pdv{u}{t}(0,x) = \sum a\_{k} \frac{ck \pi}{l} \sin  \qty( \frac{k\pi x}{l}) = g(x)
\end{equation}

meaning:

\begin{equation}
b\_{k} = \frac{2}{l} \int\_{0}^{l} f(x) \sin \qty( \frac{k\pi}{l} x) \dd{x}
\end{equation}

and:

\begin{equation}
a\_{k} = \frac{2}{k\pi c} \int\_{0}^{l} h(x) \sin \qty( \frac{k\pi}{l} x) \dd{x}
\end{equation}

which now finishes our initial conditions.

Importantly, as we have a **SECOND ORDER** expression now, we need **two** initial conditions with initial amplitude and velocity.


## [d'alembert]({{< relref "KBhwave_equation.md" >}})'s formula {#d-alembert--kbhwave-equation-dot-md--s-formula}

The general solution to the wave equation, with:

\begin{equation}
\pdv[2]{U}{t} = c^{2} \pdv[2]{U}{x}
\end{equation}

with \\(U(0,x) = f\_0(x)\\), and \\(\pdv{U}{t}(0,x) = f\_1(x)\\) is:

\begin{equation}
U(t,x) = \frac{1}{2} \qty(f\_0 (x+ct) + f\_0 (x-ct)) + \frac{1}{2c} \int\_{x-ct}^{x+ct} f\_1(y) \dd{y}
\end{equation}


## damping {#damping}

see [damped wave equation]({{< relref "KBhdamped_wave_equation.md#damped-wave-equation" >}})


## solving wave equation {#solving-wave-equation}

---

Recall:

\begin{equation}
\pdv[2]{u}{t} = c^{2} \pdv[2]{u}{x}
\end{equation}

where \\(c^{2}\\) is called the "wave speed". Let's start with the [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}).

Unlike the [Heat Equation]({{< relref "KBhheat_equation.md" >}}), [Wave Equation]({{< relref "KBhwave_equation.md" >}}) are time reversible (i.e. time going forward and backwards should have no difference). Any solutions that go forward in time also satisfy for going backwards in time.

Let's try to solve it. Guess:

\begin{equation}
u = A(t) B(x)
\end{equation}

meaning, we have:

\begin{equation}
A''(t) B(x) = c^{2} A(t)B''(x)
\end{equation}

This finally gives:

\begin{equation}
\frac{A''(t)}{A(t)} = c^{2} \frac{B''(x)}{B(X)} = \lambda
\end{equation}

which gives:

\begin{equation}
B''(x) - \frac{\lambda}{c^{2}} B(x) = 0
\end{equation}

we can only solve this, given our boundary conditions:

\begin{equation}
\lambda = \frac{-c^{2} k^{2} \pi^{2}}{l^{2}}
\end{equation}

which gives:

\begin{equation}
B(x) = \sin  \qty( \frac{k \pi}{l}x)
\end{equation}

and \\(A\\) will result in a second order equation (unlike before):

\begin{equation}
A''(t) + \frac{c^{2} h^{2} \pi^{2}}{l^{2}} A(t) = 0
\end{equation}

This gives generally a solution:

\begin{equation}
A(t) = c\_1 \sin  \qty(\frac{ck\pi}{l} t) + c\_2 \cos  \qty(\frac{ck\pi}{l} t)
\end{equation}

Therefore, multiplying everything out:

\begin{equation}
u(t,x) = \sum\_{k}  \qty(c\_1 \sin  \qty(\frac{ck\pi}{l} t) + c\_2 \cos  \qty(\frac{ck\pi}{l} t)) \sin  \qty( \frac{k \pi}{l}x)
\end{equation}

meaning: the overall oscillation is controlled by the wave speed, which changes in **time** but not **space**.

Finally, note that:

\begin{equation}
u(0,x) = \sum b\_{k} \sin  \qty( \frac{k\pi x}{l}) = f(x)
\end{equation}

Consider the \\(t\\) derivative as well:

\begin{equation}
\pdv{u}{t} = \sum \qty(a\_{n} \frac{ck\pi}{l} \cos \qty( \frac{ck \pi}{l} t) - b\_{k}\frac{k\pi}{l} \sin \qty( \frac{k\pi}{l}t)) \sin  \qty( \frac{k\pi}{l} x)
\end{equation}

now, this gives us another initial condition:

\begin{equation}
\pdv{u}{t}(0,x) = \sum a\_{k} \frac{ck \pi}{l} \sin  \qty( \frac{k\pi x}{l}) = g(x)
\end{equation}

which now finishes our initial conditions.


## General Standing Wave Solution {#general-standing-wave-solution}

Because the [PDE]({{< relref "KBhpartial_differential_equations.md" >}}) given is linear, solutions compose, and we note that any scale of \\(\cos kt \sin kx\\) will compose.

\begin{equation}
u(t,x) = \sum\_{k=0}^{\infty} a\_{k} \cos kt \sin kx
\end{equation}


## Fourier Series {#fourier-series}

\begin{equation}
u(o,x) \sum\_{k} a\_{k}\sin kx
\end{equation}

BIG **stunning conclusion**: **every single function, including wack ones, can be decomposed**. See [Fourier Series]({{< relref "KBhsu_math53_feb252024.md#fourier-decomposition" >}})


## General Traveling Wave Solution {#general-traveling-wave-solution}

\begin{equation}
u(t,x) = \sin (x-t) w(x-t)
\end{equation}

as long as \\(w\\) is a valid twice-differentiable solution, plugging its derivative in will resolve as well.


### Composition {#composition}

\begin{equation}
\sin (x-t) + \sin (x+t) = \sin x \cos t - \cos x \sin t + \sin x \cos t + \cos x \sin t = 2 \sin x \cos t
\end{equation}
