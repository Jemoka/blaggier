+++
title = "SU-CS361 APR162024"
author = ["Houjun Liu"]
draft = false
+++

## Stochastic Methods {#stochastic-methods}

[Stochastic Methods](#stochastic-methods) is where you use randomness **strategically** to escape local minima. This typically rely on **pseudo-random generation**.


### Noisy Descent {#noisy-descent}

Gradient descent but slightly bad:

\begin{equation}
\bold{x} = \bold{x} + \alpha \nabla f\_{\bold{x}} + \epsilon
\end{equation}

where:

\begin{equation}
\epsilon \sim \mathcal{N}(0, \lambda I)
\end{equation}


### Mesh Adaptive Direct Search {#mesh-adaptive-direct-search}

This is like [Generalized Pattern Search]({{< relref "KBhsu_cs361_apr112024.md#generalized-pattern-search" >}}), but instead of a fixed positive spanning set we change the directions of the span vectors every single step; once randomized, then we expand/shrink as needed.


### [simulated annealing]({{< relref "KBhsimulated_annealing.md" >}}) {#simulated-annealing--kbhsimulated-annealing-dot-md}

see [simulated annealing]({{< relref "KBhsimulated_annealing.md" >}})


### [Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}}) {#cross-entropy-method--kbhcross-entropy-method-dot-md}

We can also do [Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}}): choose an initial distribution and sample; refit distribution on the \\(k\\) best points, start again with sampling.


## Natural Evolution {#natural-evolution}

[Natural Evolution](#natural-evolution) is [Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}}) but more nuanced. Consider a design point sampling distribution parameterized by \\(\theta\\), our objective:

\begin{equation}
\min\_{x \sim p(\cdot | \theta)} \mathbb{E} [f(x)]
\end{equation}

("minimize the expectation of the objective function over sampled points from that sampling distribution")

To perform this minimization, we use gradient descent. Writing this out:

\begin{align}
\nabla\_{\theta}\mathbb{E} [f(x)] &=\nabla\_{\theta}  \int p(x|\theta) f(x) \dd{x}  \\\\
&= \int \frac{p(x|\theta)}{p(x|theta)} \nabla\_{\theta} p(x|\theta) f(x) \dd{x}  \\\\
&= \int p(x|\theta) \qty(\frac{1}{p(x|\theta)}\nabla\_{\theta} p(x|\theta)) f(x) \dd{x}  \\\\
&= \int p(x|\theta) \qty(\nabla\_{\theta} \log p(x|\theta)) f(x) \dd{x}  \\\\
&= \mathbb{E}\_{x \sim p(\cdot | \theta)} \qty[f(x) \nabla\_{\theta}\log p(x|\theta)]  \\\\
&\approx \frac{1}{m} \sum\_{i}^{}   f(x) \nabla\_{\theta} \log p(x|\theta)
\end{align}

where we used the "log derivative trick" (i.e. the chain rule with the log)

Notice: this works for **non differentiable \\(f\\)**!!!!!

And then we just do gradient descent with this instead of refitting points like in [Cross Entropy Method]({{< relref "KBhcross_entropy_method.md" >}}).


## Population Method {#population-method}

[Population Methods](#population-method) optimize, instead of a single [design point]({{< relref "KBhsu_cs361_apr022024.md#formal-formulation-of-optimization" >}}), a cohort of design points.

Typically, we use this by first using [Population Methods](#population-method) to get a generally good point, then, on each step, we fine tune this via iterated descent; two main idea:

-   [Lamarckian Learning](#population-method): do some [Population Method](#population-method), and then perform regular descent on each individual
-   [Baldwinian Learning](#population-method): do some descent method, and weight the fitness by the values from the descent (this preserve the diversity)


### Generic Algorithms {#generic-algorithms}

-   every single design is represented by a sequence of **chromosomes** (it sometimes use a binary representation, but real valued vectors work well as well)
-   select the fittest individuals
    -   **truncation selection**: cutting off most of the lowest performers
    -   **tournament selection**: select fittest out of \\(k\\) randomly chosen individuals
    -   **roulette wheel selection**: sample individuals with probability proportional to their fitness
-   children forming (from fittest)
    -   **single-point crossover**: randomly select a point between the **chromosome** sequence, then generate a child design by taking the chunk before and after that point from each parent
    -   **two-point crossover**: the above, but only cross over a single chunk
    -   **uniform crossover**: choose elements from parents with 50% probability
-   population mutation
    -   randomly flip each bit/reinitialize some values


### Particle Swarm Optimization {#particle-swarm-optimization}

for each individual in the papulation, we keep track of

-   current position
-   current velocity
-   best position so far by the current particle
-   best position seen by all particles

\begin{equation}
x^{(i)} = x^{(i)} + v^{(i)}
\end{equation}

\begin{equation}
v^{(i)} = w v^{(i)} + c\_1 r\_1 \qty(x^{(i)}\_{\text{your best}} - x^{(i)}) + c\_2 r\_2 \qty(x\_{\text{global best}} - x^{(i)})
\end{equation}

basically, this is momentum where we try to go both towards our local optima that we've seen and also in a little towards the direction that the entire swarm has seen


### Multi-Objective [Population Method](#population-method) {#multi-objective-population-method--org59669ac}

See [Multi-Objective Population Method]({{< relref "KBhsu_cs361_apr302024.md#multi-object-population-method" >}})
