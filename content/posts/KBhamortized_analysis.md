+++
title = "big-o"
author = ["Houjun Liu"]
draft = false
+++

Intuition:

-   \\(O\\): \\(\leq\\)
-   \\(\theta\\): \\(=\\)
-   \\(\Omega\\): \\(\geq\\)

Definitions:

-   \\(f(n) = O(g(n)) \implies \exists n\_{0}: \forall n > n\_0, f(n) \leq c (g(n))\\)
-   \\(f(n) = \Omega(g(n)) \implies \exists n\_{0}: \forall n > n\_0, f(n) \geq c (g(n))\\)
-   \\(f(n) = \theta(g(n)) \implies \exists n\_{0}: \forall n > n\_0, f(n) \geq 1 (g(n)), f(n) \leq c (g(n))\\)

Little ones:

-   \\(o\\): \\(<\\)
-   \\(\omega\\): \\(>\\)
