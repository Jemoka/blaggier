+++
title = "SU-MATH53 FEB212024"
author = ["Houjun Liu"]
draft = false
+++

A [Partial Differential Equation]({{< relref "KBhpartial_differential_equations.md" >}}) is a [Differential Equation]({{< relref "KBhdiffeq_intro.md" >}}) which has more than one **independent variable**: $u(x,y), u(t,x,y), ...$

For instance:

\begin{equation}
\pdv{U}{t} = \alpha \pdv[2]{U}{x}
\end{equation}


## Key Intuition {#key-intuition}

-   [PDE]({{< relref "KBhpartial_differential_equations.md" >}})s may have no solutions (unlike [Uniqueness and Existance]({{< relref "KBhuniqueness_and_existance.md" >}}) for [ODE]({{< relref "KBhordinary_differential_equations.md" >}})s)
-   yet, usually, there are too many solutions---so... how do you describe all solutions?
-   usually, there are no explicit formulas


## [Laplacian of \\(u(x,y)\\)]({{< relref "KBhlaplacian_of_u_x_y.md#laplacian-of-u--x-y" >}}) {#laplacian-of-u--x-y----kbhlaplacian-of-u-x-y-dot-md}

[Laplacian of \\(u(x,y)\\)]({{< relref "KBhlaplacian_of_u_x_y.md#laplacian-of-u--x-y" >}})


## Examples {#examples}


### [Heat Equation]({{< relref "KBhheat_equation.md" >}}) {#heat-equation--kbhheat-equation-dot-md}

See [Heat Equation]({{< relref "KBhheat_equation.md" >}})


### [Wave Equation]({{< relref "KBhwave_equation.md" >}}) {#wave-equation--kbhwave-equation-dot-md}

see [Wave Equation]({{< relref "KBhwave_equation.md" >}})


### Transport Equation {#transport-equation}

\begin{equation}
\pdv{u}{t} = \pdv{u}{x}
\end{equation}

generally any \\(u = w(x+t)\\) should solve this


### Schrodinger Equation {#schrodinger-equation}

We have some:

\begin{equation}
u(x,t)
\end{equation}

and its a complex-valued function:

\begin{equation}
i \pdv{u}{t} = \pdv[2]{u}{x}
\end{equation}

which results in a superposition in linear equations


### Nonlinear Example {#nonlinear-example}

\begin{equation}
\pdv{u}{t} = \pdv[2]{u}{x} + u(1-u)
\end{equation}

this is a [PDE]({{< relref "KBhpartial_differential_equations.md" >}}) variant of the [logistic equation]({{< relref "KBhlogistic_equations.md" >}}): this is **non-linear**


### Monge-Ampere Equations {#monge-ampere-equations}

\begin{equation}
u(x,y)
\end{equation}


#### Hessian {#hessian}

\begin{equation}
Hess(u) = \mqty(\pdv[2]{u}{x} & \frac{\partial^{2} u}{\partial x \partial y}  \\\ \frac{\partial^{2} u}{\partial x \partial y} & \pdv[2]{u}{y})
\end{equation}

If we take its determinant, we obtain:

\begin{equation}
\pdv[2]{u}{x} \pdv[2]{u}{y} - \qty(\frac{\partial^{2} u}{\partial x \partial y})^{2}
\end{equation}


## Traveling Wave {#traveling-wave}

For two-variable [PDE]({{< relref "KBhpartial_differential_equations.md" >}})s, it is called a [Traveling Wave](#traveling-wave) if solutions to \\(u\\) takes on the form:

\begin{equation}
u(t,x) = w(x-ct)
\end{equation}

for some constant \\(c\\), and where \\(w(x)\\) is a function which depends on only one of the two variables.


## [Bell Curves]({{< relref "KBhbell_curves.md#bell-curves" >}}) {#bell-curves--kbhbell-curves-dot-md}

See also [Bell Curves]({{< relref "KBhbell_curves.md#bell-curves" >}})
