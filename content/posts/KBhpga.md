+++
title = "PGA"
author = ["Houjun Liu"]
draft = false
+++

[PGA]({{< relref "KBhpga.md" >}}) extends [controller gradient ascent]({{< relref "KBhcontroller_gradient_ascent.md" >}}) to cover [CPOMDPs]({{< relref "KBhcpomdp.md" >}})


## Notation {#notation}

Recall from [controller gradient ascent]({{< relref "KBhcontroller_gradient_ascent.md" >}}) we have an objective which we will modify for [CPOMDP]({{< relref "KBhcpomdp.md" >}})s. For initial controller-states \\(\beta\\) and utility \\(\bold{u}\_{\theta}\\):

\begin{equation}
\max\_{\theta}\ \beta^{\top} (\bold{I} - \gamma \bold{T}\_{\theta})^{-1} \bold{r}\_{\theta}
\end{equation}

subject to:

-   \\(\Psi\\) remains a probably distribution over \\(|A|\\)
-   \\(\eta\\) remains a probably distribution over \\(|X|\\)
-   and, new for [CPOMDP]({{< relref "KBhcpomdp.md" >}}), \\(\beta^{\top} (\bold{I} - \gamma \bold{T}\_{\theta})^{-1} C\_{i} \leq \epsilon\_{i}\ \forall i\\), that is, each constraint \\(C\_{i} \in \bold{C}\_{i}\\) is satisfied to be lower than the budget \\(\epsilon\_{i}\\).

where

\begin{equation}
T\_{\theta}((x,s), (x',s')) = \sum\_{a} \Psi(a | x) T(s'|s,a) \sum\_{o} O (o|a,s') \eta (x'|x,a,o)
\end{equation}

and

\begin{equation}
R\_{\theta}((x, s)) = \sum\_{a} \Psi(a|x) R(s,a)
\end{equation}

in which

-   \\(X\\): a set of nodes (hidden, internal states)
-   \\(\Psi(a|x)\\): probability of taking an action
-   \\(\eta(x'|x,a,o)\\) : transition probability between hidden states


## Optimization Formulation {#optimization-formulation}

we formulate policy parameters \\(\theta\\) as a large stacked vector of the shape:

\begin{equation}
\theta = \mqty(\Psi(a\_0 | x\_0) \\\ \Psi(a\_1 | x\_0) \\\ \dots \\\ \Psi(a\_n | x\_N) \\\ \eta(x\_0 | x\_0, a\_0, o\_0) \\\ \eta(x\_1 | x\_0, a\_0, o\_0) \\\ \dots \\\ \eta(x\_N | x\_N, a\_n, o\_f))
\end{equation}

Let us define block diagonal matricies \\(J\_{\Psi}\\) and \\(J\_{\eta}\\), whereby:

\begin{equation}
J\_{\Psi} = \mqty(\bold{1}\_{\Psi}^{\top} & \dots & \bold{0} \\\ & \dots & \\\ \bold{0} & \dots  &\bold{1}\_{\Psi}^{\top} )
\end{equation}

where \\(J\_{\Psi} \in \mathbb{R}^{|X| \times (|A| \times |X|)}\\) and each block part \\(\bold{1}\_{\Psi} \in \mathbb{R}^{|A|}\\) represents a one-vector of length of the action space. You can see how multiplying a vector \\(\qty[\Psi(a\_0|x\_0) \\\ \dots \\\ \Psi(a\_n|x\_N)]\\) against this matrix should yield a \\(1\\) vector if each \\(\Psi(\cdot | x\_{i})\\) is a probability distribution.

Similar, we define, \\(J\_{\eta}\\) in a similar fashion to add the  distributions over each \\(\eta(\cdot | x, a, o)\\).

This yields another block-block matrix

\begin{equation}
J = \mqty(J\_{\Psi} & 0 \\\ 0 & J\_{\eta})
\end{equation}

for which we desire \\(J\theta = 1\\) in order to verify that the probability distributions are valid.

Lastly, let us define \\(\bold{Z} = (\bold{I} - \gamma \bold{T}\_{\theta})\\). For ease of notation in constructing this result, we declare:

\begin{equation}
f(\theta) = \beta^{\top} \bold{Z}^{-1} \bold{r}\_{\theta}
\end{equation}

and

\begin{equation}
h\_{i}(\theta) = \beta^{\top} \bold{Z}^{-1} C\_{i}
\end{equation}

Finally, this allows us to formulate the problem as a nonlinear optimization problem:

\begin{align}
\max\_{\theta}\ &f(\theta) \\\\
\text{such that}\ &J\theta = 1 \\\\
& \theta \geq 0 \\\\
& h\_{i}(\theta) \leq  \epsilon\_{i},\ \forall i
\end{align}


## Gradient Ascent Procedure {#gradient-ascent-procedure}

Note that the initial state information \\(\beta\\) is constant. Therefore, the gradient of the top expression against each field in \\(\theta\\) becomes, via an rearrangement of the chain rule:

\begin{equation}
\pdv{f(\theta)}{\theta\_{i}} = \beta^{\top} \qty[\bold{Z}^{-1} \qty( \pdv{\bold{r}\_{\theta}}{\theta\_{i}} + \pdv{\bold{Z}}{\theta\_{i}} \bold{Z}^{-1}\bold{r}\_{\theta})]
\end{equation}

The derivatives of each \\(\theta\\) against each \\(\bold{r}\\) and \\(\bold{Z}\\) is given on pp 485 of Alg4DM.

As with all gradient ascent cases, each "step" takes the rough form of

\begin{equation}
\xi = \theta + \alpha \nabla\_{\theta} f(\theta)
\end{equation}

however, in this implementation, the step size isn't actually fixed. Instead, we do...


### Golden Section Line Search {#golden-section-line-search}

Instead of taking fixed-step sizes to get to the maxima, [PGA]({{< relref "KBhpga.md" >}}) proposes [Golden Section Line Search](#golden-section-line-search) as a line-search algorithm to dynamically choose the steps to get to maxima.

Line search algorithms are typically computationally heavy as it requires evaluating the relative utility (i.e. here \\(\bold{Z}^{-1} \bold{r}\_{\theta}\\)) a lot of times, which is computationally intractable.

So, [Golden Section Line Search](#golden-section-line-search) uses a divide-and-conquer method via the golden ratio to address this issue.

```python
def optimize!(CPOMDP, phi=golden_ratio,
              gamma=discount_factor, eps=minimum_boundary):

    # C-POMDP Spec
    f = CPOMDP.objective_function # this is f(theta)
    T = CPOMDP.transition_matrix
    R = CPOMDP.reward_vector
    b = CPOMDP.initial_state_vector

    # as obtained above
    nabla = f(theta).grad(theta)

    # initialize the search bounds based on splitting
    # search space (full step, no step) via the golden ratio
    a1, a2, a3, a4 = 0, (1-(1/phi)), (1/phi), 1
    # calculate new policies and their utilities
    theta2, theta3 = theta + a2*nabla, theta + a3*nabla
    z2, z3 = (I-gamma*T@theta2).inverse(), (I-gamma*T@theta3).inverse()

    # search until the middle bounds converged
    while (a4-a1) < eps*(abs(a2) + abs(a3)):
        # calculate utility vectors over belief
        u2, u3 = z2@R, z3@R

        # either relax top or bottom bounds, depending on
        # which one we had been successfully maximizing
        if b.dot(u3) >= b.dot(u2):
            # search "upwards", set bottom bound to a3
            a1, a2, a3 = a2, a3, a2+(1/phi)*(a4-a2)
            theta3, theta2 = theta + a3*nabla, theta3
            z3, z2 = (I-gamma*T@theta2).inverse(), z3
        else:
            # search "downwards"
            a1, a3, a2 = a2, a2, a3-(1/phi)*(a3-a1)
            theta2, theta3 = theta + a2*nabla, theta2
            z2, z3 = (I-gamma*T@theta2).inverse(), z2

    # return the average of our converged results
    return 0.5*(theta2+theta3), 0.5*(u2+u3)
```


### Naive Projection {#naive-projection}

Once we obtain a new set of parameters \\(\xi\\) from [Golden Section Line Search](#golden-section-line-search), we can't actually directly punch it into \\(\theta\\). This is because it is likely not going to satisfy the constraints that are given.

We can fix this naively with a non-linear programming formulation; that is, we desire to find the closest \\(\theta\\) to the computed value \\(\xi\\); we do this by minimizing a L2 norm (sum of squared errors):

\begin{align}
\min\_{\theta}\ & \frac{1}{2} \\| \xi - \theta \\|^{2}\_{2} \\\\
\text{such that}\ &J\theta = 1 \\\\
& \theta \geq 0 \\\\
& h\_{i}(\theta) \leq  \epsilon\_{i},\ \forall i
\end{align}

This, for the most part, is computationally intractable and needs to be computed through each iteration. This is especially bad for the \\(h\_{i}\\) for all \\(i\\) part. And so, instead of doing this, we formulate instead an approximate proxy objective.


### Approximate Projection {#approximate-projection}

The thing that makes the objective above hard is that \\(h\_{i}\\) doesn't have nice convex properties. To fix this, we perform a local linearizion of \\(h\_{i}\\).

Specifically, let's replace \\(h\_{i}\\) with its local Taylor expansion.

For some step where we started at \\(\theta\_{k}\\), if you wanted to evaluate some next step \\(\theta\_{k+1}\\) from that step, we can write:

\begin{equation}
h\_{i}(\theta\_{k+1}) \approx h\_{i}(\theta\_{k}) + (\nabla\_{\theta}(\theta\_{0}))(\theta\_{k+1}-\theta\_{k})
\end{equation}

Using this linear decomposition of three parts (i.e. parameter difference from original, the gradient of \\(h\\) against the parameter, and the original value of \\(h\\)), we can now split the \\(h\_{i}(\theta)\\) constraint of the non-linear program into a linear decomposition.

Let's define:

\begin{equation}
\nabla\_{\theta} \bold{h}(\theta) = \mqty[ (\nabla\_{\theta} h\_{1}(\theta))^{\top} \\\ \dots \\\ (\nabla\_{\theta} h\_{m}(\theta))^{\top}]
\end{equation}

From which we write block matriix

\begin{equation}
\bold{A} = \mqty[-\bold{I}\_{n} \\\ \nabla\_{\theta}\bold{h}(\theta\_{k})]
\end{equation}

where \\(\bold{I}\_{n} \in \mathbb{R}^{(|A| + |X|) \times  (|A| + |X|)}\\), and vector:

\begin{equation}
\bold{b} = \mqty[\bold{0}\_{n} \\\ \epsilon - \bold{h}(\theta\_{k}) + \nabla\bold{h}(\theta\_{k})\theta\_{k}]
\end{equation}

These definitions allow us to rewrite two of our objectives:

\begin{equation}
\begin{cases}
\theta \geq 0 \\\\
h\_{i}(\theta) \leq  \epsilon\_{i},\ \forall i
\end{cases}
\end{equation}

turning them instead into simply \\(\bold{A}\theta \leq \bold{b}\\). The top half of \\(\bold{A}\\), \\(\bold{B}\\) is responsible for making sure that all elements of \\(\theta\\) is positive (specifically, to ensure the negative of the values is smaller than 0); the bottom half ensures that all of them satisfy the cost.

These definitions result in a linear formulation of two objectives of our original non-linear program:

\begin{align}
\min\_{\theta}\ & \frac{1}{2} \\| \xi - \theta \\|^{2}\_{2} \\\\
\text{such that}\ &J\theta = 1 \\\\
& \bold{A}\theta \leq \bold{B}
\end{align}

and we are done.


### Quick Tip {#quick-tip}

Recall that we have to calculate the inverse of \\(\bold{Z}\\) quite a lot throughout the computation of \\(h\\) and \\(f\\). For each policy parameter \\(\theta\\), you can cache the value of \\(\bold{Z}\\), L-U ([upper-triangular]({{< relref "KBhupper_triangular_matrix.md" >}})/lower-triangular factored) and recombine them/invert them as needed to speed up computation. This ensures that you only calculate \\(\bold{Z}\\) once per step.
