+++
title = "Newton's Method"
author = ["Houjun Liu"]
draft = false
+++

\begin{equation}
f(x) \approx f(x\_{t-1}) + (x-x\_{t-1}) f'(x\_{t-1}) + \frac{(x-x\_{t-1})^{2}}{2}  f''(x\_{t-1})
\end{equation}

Taking a derivative with respect to this, we obtain:

\begin{equation}
f'(x\_{t-1}) + (x-x\_{t-1}) f''(x\_{t-1})
\end{equation}

Solving the update equation for zero, we obtain that:

\begin{equation}
x = x\_{t-1} - \frac{f'(x\_{t-1})}{f''(x\_{t-1})}
\end{equation}

This converges **quadratically!!**

For gradients:

\begin{equation}
x\_{t} = x\_{t-1} - \qty(\bold{H}\_{g})^{-1}\bold{g}\_{k}
\end{equation}


## Failure Case {#failure-case}

If the function is near an inflection point (i.e. with bad quadratic approximation), you may converge at a point which doesn't satisfy [SONC]({{< relref "KBhsu_cs361_apr042024.md#second-order-necessary-condition" >}}) (i.e. you will get an inflection but not a minima).
