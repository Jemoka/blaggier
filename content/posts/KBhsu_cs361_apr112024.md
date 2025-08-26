+++
title = "SU-CS361 APR112024"
author = ["Houjun Liu"]
draft = false
+++

## Hyper-gradient Descent {#hyper-gradient-descent}

Adapt the execution of [gradient descent]({{< relref "KBhlogistic_regression.md#gradient-descent" >}}) to [Hyper-gradient Descent](#hyper-gradient-descent)! Recall the [Descent Direction Iteration]({{< relref "KBhsu_cs361_apr092024.md#descent-direction-iteration" >}}) update rule:

For LR \\(\alpha\\), what if we write:

\begin{equation}
\pdv{f\qty(x^{(k+1)})}{\alpha} = \pdv{f(x^{(k+1)}}{x^{(k+1)}} \pdv{x^{(k+1)}}{\alpha}
\end{equation}

The left side is just \\(f'(x^{(k+1)}) = \nabla\_{x}f(x^{(k+1)})\\). Recall that the right side is \\(\pdv{\alpha} \qty(x^{(k)} - \alpha \nabla\_{x} f(x^{(k)}))\\). This evaluates to simply \\(-\nabla\_{x}f(x^{(k)})\\).

Therefore:

\begin{align}
\pdv{f\qty(x^{(k+1)})}{\alpha} &= \pdv{f(x^{(k+1)}}{x^{(k+1)}} \pdv{x^{(k+1)}}{\alpha}  \\\\
&= \nabla\_{x}f(x^{(k+1)}) \cdot (-\nabla\_{x}f(x^{(k)}))
\end{align}

And so, to update our step size/learning rate, we can:

\begin{align}
\alpha^{(k+1)} &= \alpha^{(k)} - \mu \qty(\pdv{f\qty(x^{(k+1)})}{\alpha})  \\\\
&= \alpha^{(k)} - \mu \qty[\nabla\_{x}f(x^{(k+1)}) \cdot (-\nabla\_{x}f(x^{(k)}))]   \\\\
&= \alpha^{(k)} + \mu \qty[\nabla\_{x}f(x^{(k+1)}) \cdot (\nabla\_{x}f(x^{(k)}))]
\end{align}

Therefore, we **update our weights** based on steps of \\(\alpha\\), and update our learning rate too with respect to minimizing \\(f\\). You will note that **optimal step sizes** results in gradients being orthogonal; we see that this reflects this---no updates to \\(\alpha\\) happen if the gradients from \\((k+1)\\) is orthogonal to \\(k\\).


## Second-Order Methods {#second-order-methods}


### Newton's Method {#newton-s-method}

See [Newton's Method]({{< relref "KBhnewton_s_method.md" >}})


### Secant Method {#secant-method}

You can estimate the [Hessian]({{< relref "KBhsu_math53_feb212024.md#hessian" >}}) from the gradient to apply [Newton's Method]({{< relref "KBhnewton_s_method.md" >}}); this requires doing a thing:

\begin{equation}
f''(x\_{k}) \approx \frac{f'(x\_{k}) - f'(x\_{k-1})}{x\_{k} - x\_{k-1}}
\end{equation}

Now, we can write:

\begin{equation}
x\_{t+1} = x\_{t} - \frac{x\_{t} - x\_{t-1}}{f'(x\_{t}) -f'(x\_{t-1})} f'(x\_{t})
\end{equation}

How do we do this for Hessian? Use one of---

-   [Davidson-Fletcher-Powell (DFP)]({{< relref "KBhdavidson_fletcher_powell_dfp.md" >}})
-   [Broyden-Fletcher-Goldfarb-SHanno (BFGS)]({{< relref "KBhbroyden_fletcher_goldfarb_shanno_bfgs.md" >}})
-   [Limited Memory BFGS]({{< relref "KBhlimited_memory_bfgs.md" >}})

due to approximate nature, this may take more steps to converge.


## Direct Methods {#direct-methods}


### Cyclic Coordinate Search {#cyclic-coordinate-search}

**cycle** through the **coordinates** and do line **search**. For a function that has \\(n\\) design variables in the design point. In each iteration, we freeze all dimensions except one, do line search, then move on to the next coordinate frame, and repeat.


#### Broken {#broken}

This may fail when there is a trough **between** two axes


#### Accelerated Coordinate Search {#accelerated-coordinate-search}

After taking \\(n\\) cycles through all the directions once, also take a step in the average of the directions of the previous \\(n\\) steps. This kinda fixes the case where there's a trough in between.


### Powell's Method {#powell-s-method}

This is [Accelerated Coordinate Search](#accelerated-coordinate-search), but we forget the oldest search direction. Consider [Cyclic Coordinate Search](#cyclic-coordinate-search), which searches in steps of the basis vectors \\(e^{1}, e^{2}, ..., e\_{n}\\). [Accelerated Coordinate Search](#accelerated-coordinate-search) searches in \\(e^{1} ... e^{n}, d\\), where \\(d\\) is the averages of your previous steps.

[Powell's Method](#powell-s-method) go once forward by dropping the first member of the list

-   \\(e^{1} ... e^{n}, d^{(1)}\\)
-   \\(e^{2}, ..., e^{n}, d^{(1)}, d^{(2)}\\)
-   \\(e^{3}, ..., e^{n}, d^{(1)}, d^{(2)}, d^{(3)}\\)


#### Failure {#failure}

This may rapidly result in linearly dependent variables due to so much averaging. We therefore perform a linear search to obtain a new \\(d\\) or just reset this list back to independent bases every so often.


### Hooke-Jeeves Search {#hooke-jeeves-search}

See [Hooke-Jeeves Policy Search]({{< relref "KBhlocal_policy_search.md" >}}), but you don't check the [Rollout Policy]({{< relref "KBhrollout_with_lookahead.md#rollout-policy" >}}); you just go and evaluate the function.

big picture: check a set of local perturbations, move your center point to the lowest one, and perturb again. If you converge, shrink your perturbation size.


### Generalized Pattern Search {#generalized-pattern-search}

[Hooke-Jeeves Search](#hooke-jeeves-search) uses \\(2n\\) searches, one in each direction; for \\(\mathbb{R}^{2}\\), for instance, this requires \\(4\\) lookups because 2 basis, and one sample in positive and one sample in negative direction.

So, to save one lookup, we create a positive spanning set instead (i.e. [spanning]({{< relref "KBhspan.md#spans" >}}) set for the space for which you are constrained to only use positive coefficients, meaning we need one more vector). This creates a "triangle" which requires \\(n+1\\) vectors, but we only check one point per [spanning]({{< relref "KBhspan.md#spans" >}}) set member.


#### Opportunistic Search {#opportunistic-search}

If you get a minimum point, just go there.


#### Dynamic Ordering {#dynamic-ordering}

If you found a minimum point once, check that point again first after going there.


### Nelder-Mead Simplex Method {#nelder-mead-simplex-method}

Take a simplex to search. Sort its verticies by lowest to highest in terms of objective function value, with lowest point being called \\(x\_{l}\\), the \\(x\_{h}\\) the highest function value, \\(x\_{s}\\) being the second highest function value. \\(\bar{x}\\) being the mean point between all points except \\(x\_{h}\\).

You have four possible actions

-   **reflection**: take your worst point, and reflex across the mean line formed across the remaining points
-   **expansion**: take your best point, and move them
-   **contraction**: move the worst point closer to the mean of the other two
-   **shrink**: move all points closer together
