+++
title = "SU-MATH53 FEB052024"
author = ["Houjun Liu"]
draft = false
+++

Sensitivity to Initial Conditions + Parameters.


## ODE Existence and Uniqueness {#ode-existence-and-uniqueness}

We can recast all high order systems into a first-order vector-valued system. So, for any system:

\begin{equation}
x' = g(t,x, a)
\end{equation}

if \\(g\\) is differentiable across \\(t,x\\) and \\(a\\), the [IVP]({{< relref "KBhinitial_value_problems.md" >}}) given by \\(x' = g(t,x,a)\\) and \\(x(0) = x\_0\\), has the property has that:

1.  the ODE has a solution \\(x(t\_0) = x\_0\\) for any \\(t\_0\\), and any two solutions on the interval coincide as the same solution
2.  The only way for a solution to fail to extend temporally is due to the bounds' \\(||x(t)||\\) becomes unbounded as \\(t\\) approaches the endpoints
3.  On any interval \\(t\_0 \leq t \leq T\\) the solution \\(y\_{a,y\_0}\\) depends continuously on \\(a, y\_0\\), "if I look at my solution sometime later, it would be a non-discontinuous change on the choice of initial condition"


### Example {#example}

Let's consider:

\begin{equation}
y' = -y
\end{equation}

and take the initial value at:

\begin{equation}
y(0) = y\_0
\end{equation}

we have a solution such that:

\begin{equation}
y(t) = y\_0e^{-t}
\end{equation}

which, at \\(y(10)\\), we obtain:

\begin{equation}
y(10) = y\_0e^{-10}
\end{equation}

Which brings the question: "how close should \\(y\_0'\\) be such that \\(|y'(10) - y(10)| \leq 10^{-5}\\)?"

We can recast this as:

\begin{equation}
|y\_0' e^{-10} - y\_0 e^{-10} | < 10^{-5}
\end{equation}

meaning:

\begin{equation}
|y\_0' - y\_0| < \frac{10^{-5}}{e^{-10}} \approx \frac{1}{4}
\end{equation}

If you flip it over, you will have extreme instability.


### Example {#example}

\begin{equation}
\begin{cases}
\dv{x}{t} = a(y-x) \\\\
\dv{y}{t} = (b-z)x-y \\\\
\dv{z}{t} = xy-cz
\end{cases}
\end{equation}

this seems innocuous, but no. If we set our parameters to be weirdly specific values:

\begin{equation}
\begin{cases}
a \approx 10 \\\\
b \approx 28 \\\\
c \approx \frac{8}{3}
\end{cases}
\end{equation}

These attractors spins across two separate spheres, and the number of times the system spins around a particular area is unknown. It is called...


#### Deterministic Chaos {#deterministic-chaos}

[Deterministic Chaos](#deterministic-chaos) is a hard problems which there is a bounded region in which the behavior happens, but the system is bounded.


### Another Example {#another-example}

Logistic expression:

\begin{equation}
y' = ry\qty(1-\frac{y}{k}) -h
\end{equation}

You can get solutions of this form for some carrying capacity \\(k\\) and a constant rate of removal \\(h\\). You can observe that we can build a [phase line]({{< relref "KBhphase_line.md" >}}) of this system, and observe. This behavior is called [bifurcation](#ode-existence-and-uniqueness): when some \\(h\\) is high enough, our whole system dies out.

"if the finish rate is too high over other parameters, you just die out."

You can also draw a plot, where the \\(x\\) axis is some parameter \\(p\\), and phase plot can be drawn sideways.


## Cauchy Stability {#cauchy-stability}

Suppose \\(x(t)\\) satisfies:

\begin{equation}
x'(t) = g(t,x(t)), x(t\_0) = x\_0
\end{equation}

For some interval \\(t \in I\\) where the IVP is satisfied; for any time interval \\([t\_1, t\_2]\\) inside \\(I\\) and any \\(x\_0'\\) near to \\(x\_0\\), the associated \\(x(t\_0) = x\_0'\\) should exist for the same interval \\([t\_1, t\_2]\\) and \\(|| x'(t) - x(t) ||\\) is small for \\(t\\).

This extends for not just initial conditions, but also parameters as well. For function parameters \\(a\_0\\) and \\(a\_0'\\).


## Newtonian 3-body problem {#newtonian-3-body-problem}

\begin{equation}
m\_1 x\_1'' = \frac{-Gm\_{1}m\_2}{|x\_1-x\_2|^{2}}- \frac{Gm\_{1}m\_3}{|x\_1-x\_3|^{2}}
\end{equation}

you will note that this expression has no close form solution, so you can't do the [Cauchy Stability](#cauchy-stability) thing to it.
