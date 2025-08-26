+++
title = "supervised learning"
author = ["Houjun Liu"]
draft = false
+++

Supervised learning (also known as [behavioral cloning]({{< relref "KBhsupervised_learning.md" >}})) if the agent is learning what to do in an [observe-act cycle]({{< relref "KBhobserve_act_cycle.md" >}})) is a type of [decision making]({{< relref "KBhdecision_making.md" >}}) method.


## constituents {#constituents}

-   **input space**: \\(\mathcal{X}\\)
-   **output space**: \\(\mathcal{Y}\\)
-   **hypothesis/model/prediction**: \\(h : \mathcal{X} \to \mathcal{Y}\\)


## requirements {#requirements}

Our ultimate goal is to learn a good model \\(h\\) from the [training set](#training-set):

-   what "good" means is hard to define
-   we generally want to use the model on **new data**, not just the [training set](#training-set)

continuous \\(\mathcal{Y}\\) is then called a [regression]({{< relref "KBhsupervised_learning.md" >}}) problem; discrete \\(\mathcal{Y}\\) is called a [classification]({{< relref "KBhsupervised_learning.md" >}}) problem.

That is, we want our [hypothesis]({{< relref "KBhsupervised_learning.md" >}}) to behave as \\(h\_{\theta}\qty (x^{(i)}) \approx y^{(i)}\\).


## additional information {#additional-information}


### training set {#training-set}

The training set is a set of pairs:

\begin{equation}
\qty {\qty(x^{(1)}, y^{(1)}) \dots  \qty (x^{(n)}, y^{(n)})}
\end{equation}

such that \\(x^{(j)} \in \mathcal{X}, y^{(j)} \in \mathcal{Y}\\).

We call \\(n\\) the [training set](#training-set) size.


### main procedure {#main-procedure}

1.  provide the [agent]({{< relref "KBhagent.md" >}}) with some examples
2.  use an automated learning algorithm to generalize from the example

This is good for typically representative situations, but if you are throwing an [agent]({{< relref "KBhagent.md" >}}) into a completely unfamiliar situation, supervised learning cannot perform better.


### Disadvantages {#disadvantages}

-   the labeled data is finite
-   limited by the quality of performance in the training data
-   interpolation between states are finite


### cost function {#cost-function}

see [cost function]({{< relref "KBhcost_function.md" >}})


### evaluation {#evaluation}

see [machine learning evaluation]({{< relref "KBhmachine_learning_evaluation.md" >}})
