+++
title = "SU-CS224N APR162024"
author = ["Houjun Liu"]
draft = false
+++

## Why do Neural Nets Work Suddenly? {#why-do-neural-nets-work-suddenly}


### Regularization {#regularization}

see [regularization]({{< relref "KBhregularization.md" >}})

We want to be able to manipulate our parameters so that our models learn better---for instance, we want our weights to be low:

\begin{equation}
J\_{L2}(\theta) = J\_{reg}(\theta) + \lambda \sum\_{k}^{} \theta^{2}\_{k}
\end{equation}

or good 'ol dropout---"fetaure dependent regularization"


#### Motivation {#motivation}

-   **classic view**: regularization works to prevent _overfitting_ when we have a lot of features
-   **NEW view with big models**: regularization produces _generalizable_ models when parameter count is big enough


### Dropout {#dropout}

[Dropout](#dropout): prevents feature co-adaptation =&gt; results in good regularization


## [Language Model]({{< relref "KBhlanguage_model.md" >}}) {#language-model--kbhlanguage-model-dot-md}

See [Language Model]({{< relref "KBhlanguage_model.md" >}})
