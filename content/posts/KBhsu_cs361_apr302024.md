+++
title = "SU-CS361 APR302024"
author = ["Houjun Liu"]
draft = false
+++

## Multi-Objective Optimization {#multi-objective-optimization}

1.  identify non-dominated individuals (individuals, for which in the multi-objective, is not **dominated**); this forms the "pareto frontier"
2.  create all combinations of input parameters, and create a pareto frontier for them
3.  identify a weighting between the variations you desire, and identify the elements which align with the Pareto frontier


### Pareto Optimality {#pareto-optimality}

At a [pareto optimal](#pareto-optimality) point, increasing one objective value decreases another. that is, a [pareto optimal](#pareto-optimality) point is not [dominate](#dominate)d.


#### dominate {#dominate}

one point [dominate](#dominate)s another if:

\begin{align}
f\_{i}(x) \leq f\_{i}(x') \forall  i \\\\
f\_{i}(x) < f\_{i}(x')\ \text{for some}\ i
\end{align}


### Pareto Frontier {#pareto-frontier}

A Pareto frontier is the entire set of [pareto optimal](#pareto-optimality) points---i. the set that's not dominated.


#### Solving for Pareto Frontier {#solving-for-pareto-frontier}

<!--list-separator-->

-  Constraint Method

    We can convert this into a single-objective optimization problem; first, sort the constraints by order of importance:

    \begin{align}
    \min\_{x}&\ f\_{1}(x) \\\\
    s.t.&\ f\_2(x) \leq  c\_2 \\\\
    &\ f\_3(x) \leq c\_3 \\\\
    &\ \dots
    \end{align}

    we can set \\(c\_{j}\\) to calibrate which point we want on our [Pareto Frontier](#pareto-frontier). By setting \\(c\_{j}\\) large, we identify that we don't care about that constraint as much; as we track \\(c\_{j}\\) small, we start tracing out the Frontier along the \\(j\\) th direction. At some point, as you lower \\(c\_{j}\\), we will run out of points because we would have left the criterion space.

<!--list-separator-->

-  Lexicographic Method

    Iteratively perform optimization; again sort constraints in order of importance, then:

    {{< figure src="/ox-hugo/2024-04-30_10-05-13_screenshot.png" >}}

<!--list-separator-->

-  Weight Method

    see [weighted sum method]({{< relref "KBhproperty_specification.md#weighted-sum-method" >}})

    you can use a linear weight to obtain _some_ Pareto optimal answers:

    \begin{equation}
    f = w^{\top}\mqty[f\_1 \\\ \dots\\\f\_{N}]
    \end{equation}

    this fits a line against the Pareto region, which will miss some points but will give some Pareto optimal answers---there will not be any weighting which preserves points in the zone.

    {{< figure src="/ox-hugo/2024-04-30_10-08-25_screenshot.png" >}}

<!--list-separator-->

-  Goal Programming

    \begin{align}
    \min\_{x \in \mathcal{X}} \mid f(x) - y^{goal} \mid\_{p}
    \end{align}

    just minimize some distance (L1, L2, L-inf norms are all good) to a "good" point, usually the [Utopia Point](#utopia-point).

    L1 norms have the same problem as [Weight Method](#weight-method) as it is a line.


### Utopia Point {#utopia-point}

The [Utopia Point](#utopia-point) is the most optimal point, component wise.


### Multi-Objective Population Method {#multi-objective-population-method}


#### Classic population method {#classic-population-method}

-   create \\(m\\) subpopulations
-   optimize each population for one objective
-   shuffle them together after each cohort's optimization, create crossovers and mutations

This method is good to get the pareto frontier, but often we get clumping at the extremas of each objective. Often, we try to encourage dispersion.


#### Non-Dominating Ranking {#non-dominating-ranking}

You can rank all points (including those not on the [Pareto Frontier](#pareto-frontier)), with

1.  pareto-frontier
2.  non-dominated except for 1)
3.  non-dominated except 1) or 2)
4.  ...


#### Pareto filter {#pareto-filter}

Identify points on the [Pareto Frontier](#pareto-frontier), and keep top k, perhaps with dispersion


#### Niche Technique {#niche-technique}

a **niche** disperses the design along the [Pareto Frontier](#pareto-frontier)

-   [fitness sharing](#niche-technique): penalize if neighbors are too close)
-   [equivalence class sharing](#niche-technique): if two individuals are compared, their non-dominating ranks are compared first, then [fitness sharing](#niche-technique) is used as a tie breaker
