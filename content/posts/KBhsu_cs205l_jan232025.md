+++
title = "SU-CS205L JAN232025"
author = ["Houjun Liu"]
draft = false
+++

## Issues with Direct Methods {#issues-with-direct-methods}

-   for instance, direct solvers have problems at numerical stability issues (for instance [numerically stable quadratic formula]({{< relref "KBhnumerical_stability.md#numerically-stable-quadratic-formula" >}})); for cubics, there maybe unacceptable errors since there's no such fix


## Continuous Collision Detection {#continuous-collision-detection}

Implementing collision detection: three points, generally, are three \\(v\_1, v\_2, v\_3\\) in \\(\mathbb{R}^{3}\\); yet, if they become [linearly dependent]({{< relref "KBhlinear_independence.md#linearly-dependent" >}}), we know collision happened. In particular if the rank of \\(\mqty(v\_1, v\_2, v\_3)\\) &lt; 3, we have collided.

Problem! Solving this (taking the determinant of our matrix to figure out when collisions happened) will result in a cubic polynomial! This is numerically quite unstable.

So, to make it work, we actually have to use a _double precision_ iterative solver.


## Residual and Solution Error {#residual-and-solution-error}

When solving \\(Ac = b\\), for current guess \\(c^{(q)}\\) has **residual** \\(r^{(q)} = b - A c^{(q)} = Ac^{\text{exact}} - A c^{(q)}\\); the **error** in the parameters \\(e^{(q)} = c^{(q)} - c^{\text{exact}}\\) relates to the residual in solution by:

\begin{equation}
r^{(q)} = - A e^{(q)}
\end{equation}

this is true by:

\begin{equation}
r^{(q)} = b - Ac^{(q)} = Ac^{\text{exact}} - Ac^{(q)} = A \qty(c^{\text{exact}} - c^{(q)}) = -Ae^{(q)}
\end{equation}

Considering the SVD'd version of this:

\begin{equation}
U^{T} r^{(q)} =  - \Sigma \qty(v^{T}e^{(q)})
\end{equation}

Meaning each one we have \\(\hat{r}^{q}\_{k} = -\sigma\_{k} \hat{e}\_{k}^{(q)}\\); **small singular values lead to deceiving small residuals even if the error in the parameters is large**.


## Line Search {#line-search}

For what it is, see [Line Search]({{< relref "KBhsu_cs361_apr092024.md#line-search" >}})

So, to update parameters, we have:

\begin{equation}
c^{(q+1)} = c^{(q)} + \alpha^{(q)} s^{(q)}
\end{equation}

where \\(s^{(q)}\\) is the search direction and \\(\alpha^{(q)}\\) is the learning rate. By subtracting oracle \\(c^{\text{exact}}\\) to both sides, we will get an equation for the error:

\begin{equation}
e^{(q+1)} = e^{(q)} + \alpha^{(q)} s^{(q)}
\end{equation}

and we can multiply through \\(-A\\) by both sides, and use the relationship above

\begin{equation}
r^{(q+1)} = r^{(q)} - \alpha^{(q)} \qty(A s^{(q)})
\end{equation}

Notice how we now have an expression for the residuals and error! Optimally, we want to wait until the parameter error in a particular direction is entirely eliminated, so at \\(e^{(q+1)}s ^{(q)} = 0\\); yet, the error is unknown! But, multiplying \\(A\\) through both sides is a thing we can do!! So, here's a fun convergence criteria:

\begin{equation}
r^{(q+1)} s^{(q)} = 0
\end{equation}

so the residuals is orthogonal to us. Now, plugging in the definition of \\(r^{(q+1)}\\) from above, we get:

\begin{equation}
\alpha^{(q)} = \frac{s^{(q)} \cdot r^{(q)}}{s^{(q)} \cdot A s^{(q)}}
\end{equation}

where \\(s^{(q)}\\) is a vector representing the [Line Search]({{< relref "KBhsu_cs361_apr092024.md#line-search" >}}) direction, and \\(r^{(q)}\\) is the output residual.


## Steepest Design {#steepest-design}

We can just choose the search direction based on the current residual! Choose \\(s^{q} = r^{q}\\). So, our iteration is:

\begin{equation}
r^{(q)} = b - Ac^{(q)}, a^{(q)} = \frac{r^{(q)} r^{(q)}}{r^{(q)} \cdot Ar^{(q)}}
\end{equation}

and

\begin{equation}
c^{(q+1)} = c^{(q)} + a^{(q)} r^{(q)}
\end{equation}

Small algebra change; we can just combine these two things together in the first equation:

\begin{equation}
r^{(q)} = r^{(q-1)} - \alpha^{(q-1)} A r^{(q-1)}
\end{equation}

Challenge: since we are moving until the _residual_ to \\(0\\), its possible to oscillate since we don't know if the input parameter errors needs to be different at times.


## Conjugate Gradient {#conjugate-gradient}

See [Error-Analysis for Conjugate Gradient]({{< relref "KBhsu_cs361_apr092024.md#error-analysis-for-id-fb791af3-96c3-4971-9861-9c9952ddf46a-conjugate-gradient" >}}) and [Conjugate Gradient]({{< relref "KBhsu_cs361_apr092024.md#conjugate-gradient" >}})
