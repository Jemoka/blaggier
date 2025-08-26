+++
title = "fixed-point iteration"
author = ["Houjun Liu"]
draft = false
+++

<div class="verse">

Fixed point iteration is a method for finding a fixed point of a function, which is a value that remains unchanged when the function is applied to it (i.e., f(x) = x). The method works by repeatedly applying the function to an initial guess:<br />
<br />
1. Start with an initial approximation x₀<br />
2. Compute successive iterations: xₙ₊₁ = f(xₙ)<br />
3. Continue until convergence (|xₙ₊₁ - xₙ| &lt; ε) or maximum iterations<br />
<br />
The method converges if the function is a contraction mapping in the neighborhood of the fixed point (|f'(x)| &lt; 1).<br />

</div>
