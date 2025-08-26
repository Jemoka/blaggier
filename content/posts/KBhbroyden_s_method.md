+++
title = "Broyden's Method"
author = ["Houjun Liu"]
draft = false
+++

<div class="definition"><span>

Broyden's method is an approximate method to estimate the Jacobian. We give the root-finding variant here (i.e. the search direction is for finding \\(F\qty(x) = 0\\) instead of \\(\min F\\)).

For function \\(F\\), let:  \\(J^{(0)} = I\\). For every step

-   compute \\(\Delta c^{(q)}\\) from \\(J^{(q)}\Delta c^{(q)} = -F\qty(c^{(q)})\\)
-   compute \\(\arg\min\_{\alpha} F\qty(c^{(q)} + \alpha \Delta c^{(q)})^{T}F\qty(c^{(q)} + \alpha \Delta c^{(q)})\\) for root finding
-   compute \\(c^{(q+1)} = c^{(q)} + \alpha \Delta c^{(q)}\\)
-   set \\(\Delta c^{(q)} = c^{(q+1)} - c^{(q)}\\)
-   finally, we can update \\(J\\) such that...

\begin{equation}
J^{(q+1)} = J^{(q)} + \frac{1}{\qty(\Delta c^{(q)})^{T} \Delta c^{(q)}} \qty(F\qty(c^{(q+1)}) - F\qty(c^{(q)}) - J^{(q)}\Delta c^{(q)}) \qty(\Delta c^{(q)})^{T}
\end{equation}

</span></div>

<div class="corollary"><span>

The definition for \\(J\\) the Jacobian above is only valid for the search direction that was just taken:

\begin{equation}
J^{(q+1)}\qty(c^{(q+1)} - c^{(q)}) = F\qty(c^{(q+1)}) - F\qty(c^{(q)})
\end{equation}

but is not true generally (i.e. the Jacobian should give you the change in every direction, but the estimate above could only work with one Jacobian).

</span></div>

<div class="corollary"><span>

We can adapt this for minimization of some function \\(G\qty(x)\\) by setting \\(F\qty(x) = J(G)\\) and solve for the Hessian by replacing \\(J^{(q)} \implies H^{(j)}\\).

</span></div>
