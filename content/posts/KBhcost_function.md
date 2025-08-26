+++
title = "cost function"
author = ["Houjun Liu"]
draft = false
+++

a [cost function]({{< relref "KBhcost_function.md" >}}) \\(J\\) tells us how good our training is.


## additional information {#additional-information}


### least-squares error {#least-squares-error}

\begin{equation}
J\qty(\theta) = \sum\_{i=1}^{n}\qty(h\_{\theta }\qty(x^{(i)}) - y^{(i)})^{2}
\end{equation}

see also [example: gradient descent for least-squares error]({{< relref "KBhgradient_descent.md#example-id-4730306d-0b44-4301-b4d8-1d0d981175b0-gradient-descent-for-id-791a4b7e-3a9b-40fd-a3c0-0732d5112647-least-squares-error" >}})
