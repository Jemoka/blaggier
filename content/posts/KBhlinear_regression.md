+++
title = "Linear Regression"
author = ["Houjun Liu"]
draft = false
+++

## example: [house price prediction]({{< relref "KBhhouse_price_prediction.md" >}}) {#example-house-price-prediction--kbhhouse-price-prediction-dot-md}


### 1 dimension {#1-dimension}

We want to predict sales price from feet above ground.

\begin{equation}
h(x) = \theta\_{0} + \theta\_{1} x
\end{equation}

This makes: \\(h : \mathbb{R} \to  \mathbb{R}\\). and the \\(\theta = \qty(\theta\_{0}, \theta\_{1})\\) are what we call **parameters** or **weights**.


### d dimensions {#d-dimensions}

\begin{equation}
h(x) = \theta\_{0} + \sum\_{j=1}^{d}\theta\_{j}x\_{j}
\end{equation}

but this is like clumsy, so if we come up with a special feature \\(x\_0 = 1\\), we can just make it the linear model it is:

\begin{equation}
h(x) = \theta^{T} x
\end{equation}

so note: **this is d features but we have d+1 dimensions for the output**.
