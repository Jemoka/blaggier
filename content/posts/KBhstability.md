+++
title = "stability (ODEs)"
author = ["Houjun Liu"]
draft = false
+++

A stationary point of an [ODE]({{< relref "KBhordinary_differential_equations.md" >}}) is considered "stable" if, at the stationary point \\(y=c\\), the function with initial condition.

If you start near a stationary point, the function will either diverge \\(t\to \infty\\) to that stationary point, or converge to a stationary point. Whether the functions done that makes it "stable"/"unstable".

For an [autonomous ODEs]({{< relref "KBhautonomous_odes.md" >}}) \\(y'(t) = f(y(t))\\), suppose \\(y(t) = c\\) is a stationary solutiona:

-   \\(c\\) is stable (i.e. \\(t\to \infty, y \to c\\) for \\(y\_0 \approx c\\)) if the graph of \\(f\\) near \\(c\\) crosses from positive to negative; that is, when \\(f'( c) < 0\\)
-   \\(c\\) is unstable (i.e. \\(t\to -\infty, y \to c\\) for \\(y\_0 \approx c\\)) if the graph of \\(f\\) near \\(c\\) crosses from negative to positive; that is, when \\(f'(t) > 0\\)
-   \\(c\\) is semi-stable (i.e. stable on one side, unstable on the other) if the graph of \\(f\\) near \\(c\\) has the same sign on both sides; meaning \\(f'( c) = 0\\) and \\(f''( c)\neq 0\\)
-   if \\(f'( c) = 0\\) and \\(f''( c) \neq 0\\), we are sad and should investigate more

away from zeros, the concavity of \\(y(t)\\) could be checked for \\(f f'\\). when its positive, \\(y(t)\\) is concave up; when its negative \\(y(t)\\) is concave down.
