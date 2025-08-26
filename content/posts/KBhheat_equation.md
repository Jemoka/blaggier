+++
title = "Heat Equation"
author = ["Houjun Liu"]
draft = false
+++

**see also [two-dimensional heat equation]({{< relref "KBhtwo_dimensional_heat_equation.md" >}})** the following relates to 1d

heat distributes by "diffusing"; this is heat \\(u\\) diffusing across a plate

\begin{equation}
\pdv{u}{t} = \pdv[2]{u}{x}
\end{equation}

we have, with [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}):

\begin{equation}
u\_{k}(t,x) =  \sum b\_{k} e^{ - \frac{k^{2} \pi^{2}}{l^{2}} t } \sin \qty( \frac{k \pi x}{l})
\end{equation}

and with [Neumann Conditions]({{< relref "KBhsu_math53_feb232024.md#neumann-conditions" >}}):

\begin{equation}
u\_{k}(t,x) =  \sum b\_{k} e^{ - \frac{k^{2} \pi^{2}}{l^{2}} t } \cos \qty( \frac{k \pi x}{l})
\end{equation}

with infinite boundaries:

\begin{equation}
U(t,x) =\frac{1}{\sqrt{4 \pi \alpha t}} \int\_{\mathbb{R}} f(y)  e^{-\frac{(x-y)^{2}}{4\alpha t}} \dd{y}
\end{equation}

general system:

\begin{equation}
\begin{cases}
A'(t) = \lambda A(t) \\\\
B''(x) = \lambda B(x)
\end{cases}
\end{equation}


## Removing a constant {#removing-a-constant}

Consider a function:

\begin{equation}
t = c \tau
\end{equation}

you can remove the constant by finanglisng because the constant drops out when scaled (i.e. you can just scale your results back TODO check this).


## damping {#damping}

[damped heat equation]({{< relref "KBhdamped_heat_equation.md" >}})


## Solving Heat Equation {#solving-heat-equation}

Consider the one dimensional heat equation:

\begin{equation}
\pdv{u}{t} = \pdv[2]{u}{x}
\end{equation}

"well posed-ness" of to this problem requires two sets of initial conditions: one "boundary condition"


### Initial Condition {#initial-condition}

Because the expression is linear by time, we need one initial condition; let's say its some function in \\(x\\):

\begin{equation}
f\_{0}(x)
\end{equation}


### Solving {#solving}

Let's make an educated guess:

\begin{equation}
u(t,x) = A(t) B(x)
\end{equation}

Consider:

\begin{equation}
\pdv{u}{t} = A'(t)B(x)
\end{equation}

\begin{equation}
\pdv[2]{u}{x} = A(t) B''(x)
\end{equation}

This results in:

\begin{equation}
A'(t) B(x) = A(t) B''(X)
\end{equation}

meaning, we can rearrange and integrate:

\begin{equation}
\frac{A'(t)}{A(t)} = \frac{B''(x)}{B(x)}
\end{equation}

You will note that taking a derivative by \\(t\\) on one side tells us that the right side is \\(0\\), and taking derivative of \\(x\\) on the other results in left side is \\(0\\). This tell us that this function is constant in both \\(t\\) and \\(x\\). Meaning:

\begin{equation}
\frac{A'(t)}{A(t)} = \frac{B''(x)}{B(x)} = \lambda
\end{equation}

This results in a renewed system:

\begin{equation}
\begin{cases}
A'(t) = \lambda A(t) \\\\
B''(x) = \lambda B(x)
\end{cases}
\end{equation}


#### Solving using [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}) {#solving-using-dirichlet-conditions--kbhsu-math53-feb232024-dot-md}

<!--list-separator-->

-  Finding \\(\lambda\\) using Boundary Conditions

    Now, recall from our system:

    \begin{equation}
    B''(x) = \lambda B(x)
    \end{equation}

    Its solutions are

    \begin{equation}
    B(x) = c\_1 e^{\sqrt{\lambda}x} + c\_2 e^{-\sqrt{\lambda}x}
    \end{equation}

    Recall [Dirichlet Conditions]({{< relref "KBhsu_math53_feb232024.md#dirichlet-conditions" >}}):

    \begin{equation}
    u(t,0) = u(t, l)= 0
    \end{equation}

    This tells us that \\(B(0) = 0\\), \\(B(l) = 0\\).

    At \\(B(0)\\), this gives us that \\(c\_1 + c\_2 = 0\\), meaning \\(c\_2 = -c\_1\\)

    At \\(B(l) = 0  = c\_1 \qty( e^{\sqrt{\lambda}l} - e^{-\sqrt{\lambda}l})\\). Dividing \\(c\_1\\) to both sides, we obtain \\(e^{2\sqrt{\lambda} l} = 1\\).

    We finally can obtain \\(\lambda\\). One obvious answer is \\(\lambda = 0\\). But, there are other fun things we can do:

    ---

    Aside:

    Recall, if we desire

    \begin{equation}
    e^{i\theta} = \cos \theta + i \sin  \theta  = 1
    \end{equation}

    This gives:

    \begin{equation}
    \theta = 2\pi k
    \end{equation}

    ---

    Therefore, recall that we obtained \\(e^{2\sqrt{\lambda}l}\\), we obtained:

    \begin{equation}
    2\sqrt{\lambda}l = 2\pi k i
    \end{equation}

    Solving for \\(\lambda\\), we finally get solutions:

    \begin{equation}
    \lambda\_{k} = \frac{-k^{2}\pi^{2}}{l^{2}}
    \end{equation}

    for \\(k = 0, 1, 2, 3\\); this condition called "quantization"

<!--list-separator-->

-  Solving Again

    Now that we know \\(\lambda\\), we can say:

    \begin{equation}
    \begin{cases}
    A'(t) = \frac{-k^{2}\pi^{2}}{l^{2}} A(t) \\\\
    B''(x) = \frac{-k^{2}\pi^{2}}{l^{2}} B(x)
    \end{cases}
    \end{equation}

    And then we can proceed to solve everything again. [a little lost, but in theory \\(\cos(x)\\) drops out after solving].

    This Gives us eventually:

    \begin{equation}
    A(t) = e^{-\frac{k^{2}\pi^{2}}{l^{2}} t}
    \end{equation}

    and

    \begin{equation}
    B(x) = \sin \frac{k\pi x}{l}
    \end{equation}

    sin
    Recall that \\(U = AB\\), this means, with all generality:

    \begin{equation}
    u\_{k} = e^{-\frac{k^{2}\pi^{2}}{l^{2}} t}\sin \frac{k\pi x}{l}
    \end{equation}

<!--list-separator-->

-  Initial Conditions

    Suppose we have initial condition:

    \begin{equation}
    f\_{0}(x) = \sum a\_{n} \sin  \qty( \frac{k\pi x}{l})
    \end{equation}

    because the PDE is linear, we obtain:

    \begin{equation}
    u\_{k}(t,x) = \sum a\_{k} e^{-\frac{k^{2}\pi^{2}}{l^{2}}t} \sin \qty( \frac{k \pi x}{l})
    \end{equation}

    again quantized over \\(k\\).

    This is because each individual terms corresponds to a solution \\(a\_{n} \sin  \qty(\frac{k\pi x}{l})\\), and at boundary condition \\(f\_{0}(x)\\), the left term of the general solution drops out, to obtain:

    \begin{equation}
    a\_{n}\frac{k \pi x}{l} = f\_{0}(x) = u(0, x) = e^{0} \sin \qty(\frac{k \pi x}{l})  = a\_{k} \sin \qty(\frac{k \pi x}{l})
    \end{equation}

    so we can just match terms.

    The good news is that, because exists, any initial condition that's a well-formed function can be written a sum of sines. This also converges really quickly (because \\(e^{-k^{2}}\\)). Further, given some \\(f\_{0}(x)\\), we obtain a specific \\(k\\) and will obtain a specific solution.


#### Solving using [Neumann Conditions]({{< relref "KBhsu_math53_feb232024.md#neumann-conditions" >}}) {#solving-using-neumann-conditions--kbhsu-math53-feb232024-dot-md}

Go through the derivation, this gives:

\begin{equation}
u\_{k}(t,x) =  \sum b\_{k} e^{ - \frac{k^{2} \pi^{2}}{l^{2}} t } \cos \qty( \frac{k \pi x}{l})
\end{equation}
