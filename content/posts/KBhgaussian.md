+++
title = "Gaussian"
author = ["Houjun Liu"]
draft = false
+++

The [Gaussian]({{< relref "KBhgaussian.md" >}}), in general, gives:

\begin{equation}
e^{-\frac{ax^{2}}{2}}
\end{equation}

which is a Bell-Shaped curve. It's pretty darn important


## solving heat equation without boundary {#solving-heat-equation-without-boundary}

for general expression:

\begin{equation}
\pdv{U}{t} = \alpha \pdv[2]{U}{x}
\end{equation}

\begin{equation}
U(t,x) =  \frac{1}{\sqrt{4\pi \alpha t}}\int\_{\mathbb{R}} f(y) e^{-\frac{(x-y)^{2}}{4\alpha t}} \dd{y}
\end{equation}

where,

\begin{equation}
\hat{U}(t,\lambda) = \hat{f}(\lambda)e^{-\alpha t \lambda^{2}}
\end{equation}

\begin{equation}
\hat{U}(t,\lambda) = \hat{f}(\lambda)e^{-\lambda^{2}(t)}
\end{equation}


## [Heat Equation]({{< relref "KBhheat_equation.md" >}}) and [Gaussian]({{< relref "KBhgaussian.md" >}}) {#heat-equation--kbhheat-equation-dot-md--and-gaussian--kbhgaussian-dot-md}

\begin{equation}
H(t,x) = \frac{1}{\sqrt{2\pi} t}e^{-\frac{x^{2}}{2t}}
\end{equation}

You will note that \\(H\\) **does** satisfy the heat equation:

\begin{equation}
\pdv{U}{t} = \pdv[2]{U}{x}
\end{equation}


### closed form solution {#closed-form-solution}

\begin{equation}
U(t,x) = \frac{1}{\sqrt{2\pi} t} \int\_{\mathbb{R}} f(y) e^{-\frac{(x-y)^{2}}{2t}} \dd{y}
\end{equation}

this is exactly:

\begin{equation}
\int\_{\mathbb{R}}f(y) H(t,(x-y)) \dd{y} = \int\_{\mathbb{R}}\frac{1}{\sqrt{2\pi} t}e^{-\frac{(x-y)^{2}}{2t}} f(y) \dd{y}
\end{equation}

We can understand this when \\(t \to 0\\), where there is a single, narrow, area \\(1\\) band which we sweep across all of \\(y\\). Because its thin and \\(1\\), its basically \\(f(x)\\) at each \\(y\\).


### solving [Heat Equation]({{< relref "KBhheat_equation.md" >}}) without boundary {#solving-heat-equation--kbhheat-equation-dot-md--without-boundary}

Consider the partial [Fourier Transform]({{< relref "KBhfourier_transform.md" >}}) on the \\(x\\) variable of the heat equation.

\begin{equation}
U(t,x) = \frac{1}{2\pi} \int\_{\mathbb{R}} e^{ix\lambda} \hat{U} \qty(t,\lambda) \dd{\lambda}
\end{equation}

Taking derivatives of this:

\begin{equation}
\pdv{U}{t} (t,x) = \frac{1}{2\pi} \int\_{\mathbb{R}} e^{i\lambda x} \pdv{\hat{U}}{t} (t,\lambda) \dd{\lambda}
\end{equation}

and:

\begin{equation}
\pdv[2]{U}{x} = \frac{1}{2\pi} \int\_{\mathbb{R}} \qty(-\lambda^{2}) e^{ix \lambda } \hat{U}(t,\lambda) \dd{\lambda}
\end{equation}

Because these two are equal, it gives us that:

\begin{equation}
\hat{U}(t,\lambda) = -\lambda^{2} \hat{U}(t,\lambda)
\end{equation}

meaning:

\begin{equation}
\hat{U}(t,\lambda) = a(\lambda)e^{-\lambda^{2}t}
\end{equation}

Finally, at:

\begin{equation}
\hat{U}(0,\lambda) = a(\lambda) = \hat{f}(\lambda)
\end{equation}

We see that:

\begin{equation}
\hat{U}(t,\lambda) = \hat{f}(\lambda)e^{-\lambda^{2}(t)}
\end{equation}

To get our original function back, we need to inverse Fourier transform it:

\begin{equation}
U(t,x) = \frac{1}{2\pi} \int\_{\mathbb{R}} e^{ix\lambda - \lambda^{2}t} \hat{f}(\lambda) \dd{\lambda}
\end{equation}


## Integrating Gaussian, more Generally {#integrating-gaussian-more-generally}

Let's integrate:

\begin{equation}
\int\_{-\infty}^{\infty} e^{-\frac{{ax}^{2}}{2}}  \dd{x}
\end{equation}

Let's replace: \\(s = \sqrt{a} x\\)

This gives us that (based on [Integrating Gaussian](#integrating-gaussian)):

\begin{equation}
x = \sqrt{\frac{2\pi}{a}}
\end{equation}

If we replace \\(a\\) by \\(\frac{1}{t}\\), we obtain:

\begin{equation}
\frac{1}{\sqrt{2\pi}t} \int\_{-\infty}^{\infty} e^{-\frac{x^{2}}{2t}} \dd{x} = 1
\end{equation}

by rescaling \\(x(a)\\) function above.

If \\(t\\) increases, you will see that this function diffuses from a single point at \\(0\\) and spreading out. Notice, that over the whole real line, no matter what the \\(t\\) is, you always end up with integral \\(1\\).


## Integrating Gaussian {#integrating-gaussian}

Let's integrate:

\begin{equation}
\int\_{-\infty}^{\infty} e^{-\frac{x^{2}}{2}}  \dd{x}
\end{equation}

---

computing this is funny:

\begin{equation}
A \cdot A = \int\_{-\infty}^{\infty} e^{-\frac{x^{2}}{2}}  \dd{x} \int\_{-\infty}^{\infty} e^{-\frac{y^{2}}{2}}  \dd{y}
\end{equation}

We can think of this as a double integral:

\begin{equation}
A \cdot A = \int\_{-\infty}^{\infty} \int\_{-\infty}^{\infty} e^{-\frac{x^{2}}{2}}   e^{-\frac{y^{2}}{2}} \dd{x}  \dd{y}
\end{equation}

meaning we get:

\begin{equation}
A \cdot A = \int\_{-\infty}^{\infty} \int\_{-\infty}^{\infty} e^{-\frac{x^{2}+y^{2}}{2}} \dd{x}  \dd{y}
\end{equation}

Its polar time; recall:

\begin{equation}
x^{2} + y^{2} = r^{2}
\end{equation}

we can now go over this whole thing by converting into polar (notice the extra factor \\(r\\)):

\begin{equation}
A \cdot A = \int\_{0}^{2\pi} \int\_{0}^{\infty} e^{-\frac{r^{2}}{2}} r \dd{r} \dd{\theta}
\end{equation}

very suddenly we can use u sub on \\(r\\) to obtain:

\begin{equation}
2\pi \int\_{0}^{\infty} e^{-u} \dd{u} = 2\pi \cdot 1 = 2\pi
\end{equation}

Meaning:

\begin{equation}
A = \sqrt{2\pi}
\end{equation}
