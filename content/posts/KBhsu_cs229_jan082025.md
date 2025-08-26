+++
title = "SU-CS229 JAN082025"
author = ["Houjun Liu"]
draft = false
+++

## Notation {#notation}


## New Concepts {#new-concepts}

-   [supervised learning]({{< relref "KBhsupervised_learning.md" >}})
    -   [training set]({{< relref "KBhsupervised_learning.md#training-set" >}})
    -   [cost function]({{< relref "KBhcost_function.md" >}})
        -   [least-squares error]({{< relref "KBhcost_function.md#least-squares-error" >}})
-   [machine learning evaluation]({{< relref "KBhmachine_learning_evaluation.md" >}})
    -   [root-mean-square error]({{< relref "KBhmachine_learning_evaluation.md#root-mean-square-error" >}}) (this is [least-squares error]({{< relref "KBhcost_function.md#least-squares-error" >}}) with normalization, so "units work well" for test benchmarks)
-   [linear regression]({{< relref "KBhlinear_regression.md" >}})
-   [gradient descent]({{< relref "KBhgradient_descent.md" >}})
    -   [stochastic gradient descent]({{< relref "KBhstochastic_gradient_descent.md" >}})
-   [normal equation]({{< relref "KBhnormal_equation.md" >}})


## Important Results / Claims {#important-results-claims}

-   [gradient descent for least-squares error]({{< relref "KBhgradient_descent.md#id-4730306d-0b44-4301-b4d8-1d0d981175b0-gradient-descent-for-id-791a4b7e-3a9b-40fd-a3c0-0732d5112647-least-squares-error" >}})
-   [when does gradient descent provably work?]({{< relref "KBhgradient_descent.md#when-does-gradient-descent-provably-work" >}})


## Questions {#questions}

-   Why can't we use [root-mean-square error]({{< relref "KBhmachine_learning_evaluation.md#root-mean-square-error" >}}) for the training objective? It seems like its just more normalization...
