+++
title = "sigmoid"
author = ["Houjun Liu"]
draft = false
+++

[sigmoid]({{< relref "KBhsigmoid.md" >}}) function is used to squash your data between \\(0\\) and \\(1\\). Sigmoid is symmetric. It could take any number and squash it to look like a probability between 0 and 1.

\begin{equation}
\sigma(z) = \frac{1}{1+ e^{-z}}
\end{equation}

Say you have one discrete variable \\(X\\), and one continuous variable \\(Y\\), and you desire to express \\(p(x|y)\\).

The simplest way to do this, of course, is to say something like:

\begin{equation}
P(x^{j} \mid y) = \begin{cases}
P(x^{j} \mid y) = 0, y < \theta \\\\
P(x^{j} \mid y) = 1, y > \theta
\end{cases}
\end{equation}

whereby if \\(y\\) is above or below a value, \\(x^{j}|y\\) behaves differently. But we often don't want a card cap.

To soften this, we can use a [sigmoid]({{< relref "KBhsigmoid.md" >}}) model:

\begin{equation}
P(x^{1} \mid y) = \frac{1}{1 + \exp \qty(-2 \frac{y-\theta\_{1}}{\theta\_{2}})}
\end{equation}

whereby, \\(\theta\_{1}\\) is where the threshold of activation is, and \\(\theta\_{2}\\) is how soft you want the spread to be.

The derivative of this function is also dead simple:

\begin{equation}
\dv{\sigma(z)}{z} = \sigma(z) (1-\sigma(z))
\end{equation}
