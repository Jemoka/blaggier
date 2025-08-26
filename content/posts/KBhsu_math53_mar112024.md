+++
title = "SU-MATH53 MAR112024"
author = ["Houjun Liu"]
draft = false
+++

## heat equation on the entire line {#heat-equation-on-the-entire-line}

\begin{equation}
\pdv{u}{t} = \frac{1}{2} \pdv[2]{u}{x}
\end{equation}

We can try to find a:

\begin{equation}
U(0,x) = f(x)
\end{equation}

if we write:

\begin{equation}
\hat{U}(t,\lambda) = \int e^{-i x \lambda} U(t,x) \dd{x}
\end{equation}

which means we can write, with initial condtions:

\begin{equation}
\hat{U} (t, \lambda) = \hat{f}(\lambda) e^{- t \frac{\lambda^{2}}{2}}
\end{equation}

We want to reach a close form:

\begin{equation}
U (t, x) =  \frac{1}{\sqrt{2\pi} t} \int\_{-\infty}^{\infty} f(y) e^{-\frac{(x-y)^{2}}{2t}} \dd{y}
\end{equation}

---

Steps: recall we ended up at

\begin{equation}
\hat{U} (t, \lambda) = \hat{f}(\lambda) e^{- t \frac{\lambda^{2}}{2}}
\end{equation}

Let's call:

\begin{equation}
\hat{g}(\lambda) = e^{- t \frac{\lambda^{2}}{2}}
\end{equation}

so we have:

\begin{equation}
\hat{U} (t, \lambda) = \hat{f}(\lambda) \hat{g}(\lambda)
\end{equation}

we can use [convolution]({{< relref "KBhconvolution.md#convolution" >}}) to figure \\(U(t,x)\\).

Recall that the Fourier transform of a Gaussian:

\begin{equation}
\mathcal{F}\qty(e^{-\frac{ax^{2}}{2}}) = \sqrt{\frac{2\pi}{a}}e^{-\frac{\lambda^{2}}{2a}}
\end{equation}

Let's first set:

\begin{equation}
a = \frac{1}{t}
\end{equation}

Which will give us that:

\begin{equation}
g(x) = \frac{1}{\sqrt{2\pi t} } e^{-\frac{x^{2}}{2t}}
\end{equation}

Meaning, with convolution:

\begin{equation}
\mathcal{F}^{-1}(\hat{f} \hat{g}) = f \* g
\end{equation}


### why does this make sense {#why-does-this-make-sense}

We are convolving a Gaussian against \\(f(x)\\). Meaning, at very small \\(t\\) , we are taking a very small window of size \\(1\\) against.


### Heavyside function {#heavyside-function}

\begin{equation}
f(x) = \begin{cases}
1, x\geq  0 \\\\
0, x<0
\end{cases}
\end{equation}

This gives: if we split the room by \\(x\\). Recall:

\begin{equation}
U (t, x) =  \frac{1}{\sqrt{2\pi} t} \int\_{-\infty}^{\infty} f(y) e^{-\frac{(x-y)^{2}}{2t}} \dd{y}
\end{equation}

Given our \\(f\\), this becomes:

\begin{equation}
U (t, x) =  \frac{1}{\sqrt{2\pi} t} \int\_{0}^{\infty}  e^{-\frac{(x-y)^{2}}{2t}} \dd{y}
\end{equation}

If we change variables:

\begin{align}
\frac{(x-y)^{2}}{2t} - \qty( \frac{x}{\sqrt{2t}} - \frac{y}{\sqrt{2t}})^{2}
\end{align}

which means:

\begin{equation}
z = \frac{y}{2\sqrt{t}}
\end{equation}

\begin{equation}
\frac{1}{\sqrt{\pi}} \int\_{0}^{\infty} e^{^{-\qty(\frac{x}{\sqrt{2t}} - z)^{2}}} \dd{z}
\end{equation}

and we will also apply:

\begin{equation}
w = z - \frac{x}{\sqrt{2t}}
\end{equation}

which will give:

\begin{equation}
\frac{1}{\sqrt{\pi}} \int\_{-\frac{x}{\sqrt{2t}}}^{\infty}  e^{-w^{2}} \dd{w}
\end{equation}

notice, as \\(x\\) increases, we are integrating more of a Gaussian, which will be exceedingly close to \\(1\\); as \\(x\\) decreases, we'll get closer to \\(0\\). And also, \\(t\\) smoothed \\(x\\) out, which means as \\(t\\) increases the interface between \\(0\\) and \\(1\\) becomes smoother.


## erf {#erf}

[erf](#erf)


## [convolution]({{< relref "KBhconvolution.md#convolution" >}}) {#convolution--kbhconvolution-dot-md}

see [convolution]({{< relref "KBhconvolution.md#convolution" >}})
