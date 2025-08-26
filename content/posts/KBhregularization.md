+++
title = "regularization"
author = ["Houjun Liu"]
draft = false
+++

[regularization]({{< relref "KBhregularization.md" >}}) penalize large weights to reduce [overfitting]({{< relref "KBhoverfitting.md" >}})

1.  create [data interpolation]({{< relref "KBhdata_interpolation.md" >}}) that countains intentional error (by throwing away/hiding parameters), missing some/all of the data points
2.  this makes the resulting function more "predictable"/"smooth"

there is, therefore, a **trade-off** between sacrificing quality and on the ORIGINAL data and better accuracy on new points. If you regularize too much, you will [underfit]({{< relref "KBhunderfit.md" >}}).

---

For instance, in a linear model:

\begin{equation}
\min\_{\theta} |y - X \theta|\_{2}^{2} + \lambda | \theta |\_{2}^{2}
\end{equation}

This gives a analytical form:

\begin{equation}
\theta = \qty(B^{\top}B + \lambda I)^{-1} B^{\top} y
\end{equation}

Or, you can write the...


## Lasso {#lasso}

The lasso uses an $L$-1 norm on the weights

\begin{equation}
\min\_{\theta} |y - X \theta|\_{2}^{2} + \lambda | \theta |\_{1}^{2}
\end{equation}

which will downselect weights that are not useful.

Which has no closed form.
