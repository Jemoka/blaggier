+++
title = "normal equation"
author = ["Houjun Liu"]
draft = false
+++

for small equations of [Linear Regression]({{< relref "KBhlinear_regression.md" >}}), we can solve it using [normal equation]({{< relref "KBhnormal_equation.md" >}}) method.

Consider \\(d\\) dimensional feature and \\(n\\) samples of data. Remember, including the dummy feature, we have a matrix: \\(X \in \mathbb{R}^{n \times \qty(d+1)}\\) and a target \\(Y \in \mathbb{R}^{n}\\).

Notice:

\begin{equation}
J\qty(\theta) = \frac{1}{2} \sum\_{i=1}^{n} \qty(h\_{\theta} \qty(x^{(i)}) - y^{(i)})^{2}
\end{equation}

and \\(h = X \theta\\), we we can write:

\begin{equation}
J(\theta) = \frac{1}{2} \qty(X \theta - y)^{T} \qty(X \theta - y)
\end{equation}

We can take a derivative of this

{{< figure src="/ox-hugo/2025-01-08_14-49-35_screenshot.png" >}}

Setting this to \\(0\\), taking the pseudoinverse:

\begin{equation}
\theta = \qty(X^{T}X)^{-1} X^{T}y
\end{equation}
