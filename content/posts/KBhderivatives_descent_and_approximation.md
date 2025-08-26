+++
title = "SU-CS361: Derivatives, Bracketing, Descent, and Approximation Index"
author = ["Houjun Liu"]
draft = false
+++

-   [Formal Formulation of Optimization]({{< relref "KBhsu_cs361_apr022024.md#formal-formulation-of-optimization" >}})
-   [constraint]({{< relref "KBhsu_cs361_apr022024.md#constraint" >}})
-   types of conditions
    -   [FONC]({{< relref "KBhsu_cs361_apr042024.md#first-order-necessary-condition" >}}) and [SONC]({{< relref "KBhsu_cs361_apr042024.md#second-order-necessary-condition" >}})
-   [Derivatives]({{< relref "KBhsu_cs361_apr042024.md#derivative" >}})
    -   [Directional Derivatives]({{< relref "KBhsu_cs361_apr042024.md#directional-derivative" >}})
    -   numerical methods
        -   [Finite-Difference Method]({{< relref "KBhsu_cs361_apr042024.md#finite-difference-method" >}})
            -   [Forward Difference]({{< relref "KBhsu_cs361_apr042024.md#forward-difference" >}})
            -   [Central Difference]({{< relref "KBhsu_cs361_apr042024.md#central-difference" >}})
            -   [Backward Difference]({{< relref "KBhsu_cs361_apr042024.md#backward-difference" >}})
        -   [Complex-Difference Method]({{< relref "KBhsu_cs361_apr042024.md#complex-difference-method" >}})
    -   exact methods: autodiff
        -   [Forward Accumulation]({{< relref "KBhautomatic_differentiation.md#forward-accumulation" >}})
        -   cooool: [Dual Number Method]({{< relref "KBhautomatic_differentiation.md#dual-number-method" >}})
-   [Bracketing]({{< relref "KBhsu_cs361_apr042024.md#bracketing" >}}) (one dimensional optimization schemes)
    -   [Fibonacci Search]({{< relref "KBhsu_cs361_apr042024.md#fibonacci-search" >}})
    -   [Quadratic Search]({{< relref "KBhsu_cs361_apr092024.md#quadratic-search" >}})
    -   [Shubert-Piyavskill Method]({{< relref "KBhsu_cs361_apr092024.md#shubert-piyavskill-method" >}})
-   [Descent Direction Iteration]({{< relref "KBhsu_cs361_apr092024.md#descent-direction-iteration" >}})
    -   [Line Search]({{< relref "KBhsu_cs361_apr092024.md#line-search" >}})
    -   [Approximate Line Search]({{< relref "KBhsu_cs361_apr092024.md#approximate-line-search" >}})
        -   [Sufficient Decrease Condition]({{< relref "KBhsu_cs361_apr092024.md#sufficient-decrease-condition" >}})
        -   [Curvature Condition]({{< relref "KBhsu_cs361_apr092024.md#curvature-condition" >}})
    -   [Trust Region Methods]({{< relref "KBhsu_cs361_apr092024.md#trust-region-methods" >}})
-   [First-Order Methods]({{< relref "KBhsu_cs361_apr092024.md#first-order-methods" >}})
    -   good ol [gradient descent]({{< relref "KBhlogistic_regression.md#gradient-descent" >}})
    -   [Conjugate Gradient]({{< relref "KBhsu_cs361_apr092024.md#conjugate-gradient" >}})
    -   [Hyper-gradient Descent]({{< relref "KBhsu_cs361_apr112024.md#hyper-gradient-descent" >}})
-   [Second-Order Methods]({{< relref "KBhsu_cs361_apr112024.md#second-order-methods" >}})
    -   [Newton's Method]({{< relref "KBhnewton_s_method.md" >}})
    -   or approximate it using [Secant Method]({{< relref "KBhsu_cs361_apr112024.md#secant-method" >}})
-   [Direct Methods]({{< relref "KBhsu_cs361_apr112024.md#direct-methods" >}})
    -   [Cyclic Coordinate Search]({{< relref "KBhsu_cs361_apr112024.md#cyclic-coordinate-search" >}})
    -   [Accelerated Coordinate Search]({{< relref "KBhsu_cs361_apr112024.md#accelerated-coordinate-search" >}})
    -   [Powell's Method]({{< relref "KBhsu_cs361_apr112024.md#powell-s-method" >}})
    -   [Hooke-Jeeves Search]({{< relref "KBhsu_cs361_apr112024.md#hooke-jeeves-search" >}})
    -   [Generalized Pattern Search]({{< relref "KBhsu_cs361_apr112024.md#generalized-pattern-search" >}})
        -   opportunistic search
        -   dynamic ordering
    -   [Nelder-Mead Simplex Method]({{< relref "KBhsu_cs361_apr112024.md#nelder-mead-simplex-method" >}})
