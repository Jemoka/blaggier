+++
title = "Linear Constant-Coefficient Equation"
author = ["Houjun Liu"]
draft = false
+++

Here it is:

\begin{equation}
    a\frac{dy}{dx} + by = c
\end{equation}

For some constants \\(a,b,c\\). The name is pretty obvious, because we have constants and the highest power on everything is \\(1\\). Its first-order because the derivative is only the first-order derivative.


## linear (diffeq) {#linear--diffeq}

We technically call it "linear" because: if there are two possible solutions \\(y\_1(x)\\) \\(y\_2(x)\\), a linear combination \\(Ay\_1(x)+By\_2(x)\\) should also be a solution. Its "linear" because linear combinations work.


## solving separable differential equations {#solving-separable-differential-equations}

A [separable](#solving-separable-differential-equations) differential equation means that we can separate the derivative by itself and separate its two components. For the example above, we have that:

\begin{equation}
    \frac{dy}{dx} = \frac{c-by}{a}
\end{equation}

We can naturally separate this:

\begin{equation}
    \frac{a}{c-by}dy = dx
\end{equation}

And then we can finally take the integral on both sides:

\begin{equation}
    \int \frac{a}{c-by}dy = \int dx
\end{equation}

Wait wait wait but why is this possible? Why is it that we can separate a \\(\frac{dy}{dx}\\) such that \\(dy\\) and \\(dx\\) is isolatable? Remember:

\begin{equation}
    \frac{dy}{dx} = \lim\_{h\to 0} \frac{y(x+h)-y(x)}{h}
\end{equation}

no where is the differentials seperatable! Apparently Ted's undergrads didn't know this either. [So here's a reading on it](https://drive.google.com/file/d/1GWSagIMjXI0Awwy6wlQqsBm6c8tnCqcg/view?pli=1).

What if its non-seperable? See [Linear Non-Seperable Equation]({{< relref "KBhlinear_non_seperable_equation.md" >}})
