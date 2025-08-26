+++
title = "evaluation"
author = ["Houjun Liu"]
draft = false
+++

our ultimate goal is to create a **generalized** model that learns training data and extrapolate to future test data.

We don't _really_ care about how good we fit the training data.

**key idea**: fit the model on train set, and test on separate test set.


## requirements {#requirements}

We split our [training set]({{< relref "KBhsupervised_learning.md#training-set" >}}) into three parts

-   **training set**: to fit the model
-   **validation set**: quasi-test set
-   **test set**: actual test (we do it only once)


## additional information {#additional-information}


### root-mean-square error {#root-mean-square-error}

this is basically [least-squares error]({{< relref "KBhcost_function.md#least-squares-error" >}}) but with normalization

\begin{equation}
\text{RMSE}\qty(\theta) = \sqrt{\frac{1}{n} \sum\_{i=1}^{n} \qty(h\_{\theta} \qty(x^{(i)}) - y^{(i)})^{2}}
\end{equation}

we don't train with this because its like more faff but monotonic against [least-squares error]({{< relref "KBhcost_function.md#least-squares-error" >}}) so there's no point in adding the more faff.
