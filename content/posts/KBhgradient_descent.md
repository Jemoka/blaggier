+++
title = "gradient descent"
author = ["Houjun Liu"]
draft = false
+++

It's hard to make **globally optimal** solution, so therefore we instead make **local** progress.


## constituents {#constituents}

-   parameters \\(\theta\\)
-   step size \\(\alpha\\)
-   [cost function]({{< relref "KBhcost_function.md" >}}) \\(J\\) (and its derivative \\(J'\\))


## requirements {#requirements}

let \\(\theta^{(0)} = 0\\) (or a random point), and then:

\begin{equation}
\theta^{(t+1)} = \theta^{(t)} - \alpha J'\qty (\theta^{(t)})
\end{equation}

"update the weight by taking a step in the opposite direction of the gradient by weight". We stop, btw, when its "good enough" because the training data noise is so much that like a little bit non-convergent optimization its fine.


## additional information {#additional-information}


### multi-dimensional case {#multi-dimensional-case}

\begin{equation}
\theta^{(t+1)} = \theta^{(t)} - \alpha \nabla J\qty(\theta^{(t)})
\end{equation}

where:

\begin{equation}
\nabla J(\theta) = \mqty(\dv \theta\_{1} J(\theta)  \\\ \dots \\\ \dv \theta\_{d} J(\theta))
\end{equation}


### [gradient descent]({{< relref "KBhgradient_descent.md" >}}) for [least-squares error]({{< relref "KBhcost_function.md#least-squares-error" >}}) {#gradient-descent--kbhgradient-descent-dot-md--for-least-squares-error--kbhcost-function-dot-md}

We have:

\begin{equation}
J\qty(\theta) = \frac{1}{2} \sum\_{i=1}^{n} \qty(h\_{\theta }\qty(x^{(i)}) - y^{(i)})^{2}
\end{equation}

we want to take the derivative of this, which actually is chill

\begin{equation}
\dv \theta\_{j }J(\theta) = \sum\_{i=1}^{n}\qty(h\_{\theta } \qty(x^{(i)}) - y^{(i)}) \dv \theta\_{j} h\_{\theta} \qty(x^{(i)})
\end{equation}

recall that $h<sub>&theta;</sub>(x) = &theta;<sub>0</sub> x<sub>0</sub> + ...$

and so: \\(\dv \theta\_{j} h\_{\theta}(x) = x\_{j}\\) since every other term goes to \\(0\\).

So, our update rule is:

\begin{align}
\theta\_{j}^{(t+1)} &= \theta\_{j}^{(t)} - \alpha \dv \theta\_{j} J\qty(\theta^{(t)})  \\\\
&= \theta\_{j}^{(t)} -\alpha \sum\_{i=1}^{n} \qty(h\_{\theta}\qty(x^{(i)}) - y^{(i)})x\_{j}^{(i)}
\end{align}

Meaning, in  vector notation: \\(\theta^{(t+1)} = \theta^{(t)}-\alpha \sum\_{i=1}^{n} \qty(h\_{\theta }\qty(x^{(i)}) - y^{(i)})x^{(i)}\\)


### when does gradient descent provably work? {#when-does-gradient-descent-provably-work}

... on [convex functions]({{< relref "KBhconvex_functions.md" >}})


### [stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}}) {#stochastic-gradient-descent--kbhstochastic-gradient-descent-dot-md}

see [stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}})
