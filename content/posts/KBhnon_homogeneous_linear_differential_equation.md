+++
title = "non-homogeneous linear differential equation"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
y' + ay = f(t)
\end{equation}

The general solution for this would be

1.  any solution specifically which gives \\(f(t)\\), plus
2.  any homogeneous solutions

specifically:

\begin{equation}
y = y\_{p}(t) + y\_{n}(t)
\end{equation}

where the left is a particular solution, and the right is any homogeneous solution. We can do this because, say if we derivate it; the left derivative (the particular solution) gives \\(f(t)\\), and the right, because its homogeneous, gives 0.

Because there can be at most one solution to every IVP, we know that all solutions to the equation must take on the form of \\(y\_{p}(t) + c\_1 y\_{n\_{1}}(t) + ... + c\_{n} y\_{n\_{j}}(t) = y\\)

The general solution to this is:

\begin{equation}
y(t) = e^{-at} \int\_{0}^{t}e^{ax} f(x) \dd{x} + Ce^{-at}
\end{equation}

this works equally well when \\(a\\) is not constant:

\begin{equation}
y(t) = e^{-\qty(\int a(s) \dd{s})t} \int\_{0}^{t}e^{\qty(\int a(s) \dd{s})x} f(x) \dd{x} + Ce^{-at}
\end{equation}

**inhomogeneous solutions cannot work with the time translation trick**


## integrating factor {#integrating-factor}

Consider the case where:

\begin{equation}
y' + ay = f(t)
\end{equation}

ideally, we would love our whole left side to be one giant derivative which we can antiderive; let's try multiply both sides with \\(e^{at}\\):

\begin{equation}
(e^{at}y)' = e^{at}y' + ae^{at}y  = e^{at}(y' + ay) = e^{at} f(t)
\end{equation}

We note that this gives:

\begin{equation}
(e^{at}y)' = e^{at}f(t)
\end{equation}

meaning:

\begin{equation}
e^{at}y(t) = \int\_{0}^{t} e^{ax} f(x) \dd{x}
\end{equation}

which gives:

\begin{equation}
y(t) = e^{-at} \int\_{0}^{t}e^{ax} f(x) \dd{x}
\end{equation}

Tacking on the homogeneous solution :

\begin{equation}
y(t) = e^{-at} \int\_{0}^{t}e^{ax} f(x) \dd{x} + Ce^{-at}
\end{equation}

note! the first term doesn't have a scaler in front of it. Otherwise, the derivative will give you \\(nf(x)\\) instead of \\(f(x)\\).

This actually doesn't matter what \\(a\\) is. In a sense, if we swap \\(a\\) for \\(a(t)\\), we simply have to write \\(a = \int a(x) \dd{x}\\).So, most generally:

\begin{equation}
y' + a(t)y = f(t)
\end{equation}

yields (CHECK THIS FACT&lt; IT MAY BE WRONG)

\begin{equation}
y(t) = e^{-\qty(\int a(t) \dd{t})} \int\_{0}^{t}e^{\qty(\int a(x) \dd{x})} f(x) \dd{x} + Ce^{-\qty(\int a(t) \dd{t})}
\end{equation}

for constant solutions, we get:

\begin{equation}
y(t) = C e^{-a(t-t\_0)} + e^{-at} \int\_{t\_0}^{t} e^{as} f(s) \dd{s}
\end{equation}

for

\begin{equation}
y' + ay = f(t)
\end{equation}


## [method of undetermined coefficients]({{< relref "KBhsecond_order_linear_differential_equation.md#method-of-undetermined-coefficients" >}}) {#method-of-undetermined-coefficients--kbhsecond-order-linear-differential-equation-dot-md}

Good guesses for the structure of:

\begin{equation}
y' + ay = f(t)
\end{equation}

-   for \\(f(t) = C\\) , guess \\(y = C'\\)
-   for \\(f(t) = x^{n}\\), guess \\(y = x^{n}\\) (with all subsequent terms)
-   for \\(f(t) = \sin (t)\\) or \\(f(t)=\cos (t)\\), guess \\(y=A \sin (t) + B \cos (t)\\)
-   for \\(f(t) = e^{\lambda t}\\), guess \\(y = Ce^{\lambda t}\\)


### example {#example}

say:

\begin{equation}
y' + ky = 70k + 10k \sin (t)
\end{equation}

let's break it up into three pieces:

\begin{equation}
\begin{cases}
y\_1' + ky\_{1} = 70 k\\\\
y\_2' + k y\_2 = 10k \sin (t) \\\\
y\_3' + k y\_{3} = 0
\end{cases}
\end{equation}

you will note that adding up all three of these yields a value for \\(y\\) that satisfy the overall expression.

-   first one: we can just guess \\(y = 70\\), which evidently works
-   second one: we want the sin and cos to cancel out, so we can guess \\(A \sin t + B \cos t\\), whose derivative is \\(-B \sin t + A \cos t\\), plugging that in, we get: \\((-B+kA) \sin t + (A+kB) \cos t\\), which we can use our coefficients to solve
-   third one: that's the homogeneous solution \\(Ce^{-kt}\\)

and we can finally add it all up.


### concern {#concern}

at some points, there is a case where---at certain choices of constants, you may obtain a homogeneous solution when you are trying to get the particular solution. that's bad. Consider:

\begin{equation}
y'' - y = e^{mt}
\end{equation}

and the particular solution you'd get is something like:

\begin{equation}
y\_{p}(t) = \frac{1}{m^{2}-1} e^{mt}
\end{equation}

this makes sense for all cases except where \\(m = \pm 1\\), because that gives a homogeneous solution, and the bottom of that fraction will blow up. To fix this, we can engineer a specific solution for which the limit towards \\(1\\) exists. Recall that, in general, we have:

\begin{equation}
y(t) = \frac{1}{m^{2}-1} e^{mt} + c\_1 e^{t} + c\_2 e^{-t}
\end{equation}

if we choose \\(c\_2=0\\), \\(c\_1= \frac{1}{m^{2}-1}\\), we can see that the limit exists through l'hospitals:

\begin{equation}
y\_{p}(t) = \frac{1}{m^{2}-1} \qty( e^{mt}-e^{t})
\end{equation}

we can evaluate this at \\(m=1\\) by using l'hospitals rule.

At this point, we essentially end up with two distinct solutions, given a choice of \\(m\\).


## variation of parameters method {#variation-of-parameters-method}

Take an independent set of homogeneous solutions which tells you what the general solution is, then modifying to modify the \\(f\\).

The general solution is irrespective of \\(f\\).

Now, consider:

\begin{equation}
y'' - y = f(t)
\end{equation}

Because the homogeneous solution \\(y\_1\\) and \\(y\_2\\) gives two independent solutions, we obtain:

\begin{equation}
y\_{p} = c\_1(t) y\_1(t) + c\_2(t) y\_2(t)
\end{equation}

we can take the derivative of this to obtain:

\begin{equation}
y'\_{p} = c\_1(t) y\_1(t)' + c\_2(t) y\_2(t)' + c\_1(t)' y\_1(t) + c\_2(t)' y\_2(t)
\end{equation}

we are going to guess the right two terms are zero (assume \\(c\_1 ' y\_1 + c\_2 ' y\_2 = 0\\)) and repeat this procedure:

\begin{equation}
y''\_{p} = c\_1(t) y\_1(t)'' + c\_2(t) y\_2(t)'' + c\_1(t)' y\_1(t)' + c\_2(t)' y\_2(t)'
\end{equation}

now, plugging this into our original equation, we obtain:

\begin{align}
y\_{p}'' - y\_{p} &= c\_1(y\_1 '' - y\_{1}) + c\_2 (y\_{2}'' - y\_2) + c\_1 ' y\_1 ' + c\_2 ' y\_2 ' \\\\
&= c\_1(0) + c\_2 (0) + c\_1 ' y\_1 ' + c\_2 ' y\_2 ' \\\\
&= c\_1 ' y\_1 ' + c\_2 ' y\_2 ' \\\\
&= f(t)
\end{align}

So, combining what we just got and our simplifying assumption, we obtain:

\begin{equation}
\begin{cases}
c\_1 ' y\_1 + c\_2 ' y\_2 = 0 \\\\
c\_1 ' y\_1 ' + c\_2 ' y\_2 '  = f(t)
\end{cases}
\end{equation}

This is now a matrix expression:

\begin{equation}
\mqty(y\_1 & y\_2 \\\ y\_1 '  & y\_2 ') \mqty(c\_1 ' \\\ c\_2 ') = \mqty( 0 \\\ f(t))
\end{equation}

that matrix on the left side is called the [Wronshian](#variation-of-parameters-method) matrix, and if \\(y\_1\\) and \\(y\_2\\) the homogeneous solutions are independent, we know that this is going to be invertible. Then, we can just solve and integrate to obtain \\(c\_1, c\_2\\).


## why do we tack on the homogeneous solution again? {#why-do-we-tack-on-the-homogeneous-solution-again}

What if we have a plane specified:

\begin{equation}
a x\_1 + b x\_2 + c x\_3 = K
\end{equation}

we want to solve \\(x\_{j}\\) as a vector which lives on this plane.

Let's begin by shifting this plane down to the origin:

\begin{equation}
a x\_1 + b x\_2 + c x\_3 + 0
\end{equation}

Which says the same thing as:

\begin{equation}
\mqty(a & b & c) \mqty(x\_1 \\\ x\_2 \\\ x\_3) = 0
\end{equation}

meaning:

\begin{equation}
A x = 0
\end{equation}

where \\(A \in \mathcal{L}(m,n)\\), where \\(m < n\\). To solve for \\(x\\), we desire \\(\text{null}\ A\\), and given we are a map into a bigger space, we should have non-trivial null space.

1.  find a particular solution \\(x\_{p}\\) to the non-shifted version
2.  the general solution should live in \\(x\_{p} + \text{null}\ A\\), the [affine subset]({{< relref "KBhparallel_linear_algebra.md" >}})
3.  meaning all solutions should live on \\(x = x\_{p} + c\_1 v\_1 + c\_2 v\_2\\)
