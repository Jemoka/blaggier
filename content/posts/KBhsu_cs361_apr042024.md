+++
title = "SU-CS361 APR042024"
author = ["Houjun Liu"]
draft = false
+++

## optimization inequalities cannot be strict {#optimization-inequalities-cannot-be-strict}

Consider:

\begin{align}
\min\_{x}&\ x \\\\
s.t.\ & x > 1
\end{align}

this has **NO SOLUTION**. (1,1) wouldn't actually be in [feasible set]({{< relref "KBhsu_cs361_apr022024.md#formal-formulation-of-optimization" >}}). So, we usually specify optimization without a strict inequality.

So, instead, we write:

\begin{align}
\min\_{x}&\ x \\\\
s.t.\ & x \geq  1
\end{align}


## Univariate Conditions {#univariate-conditions}


### First order Necessary Condition {#first-order-necessary-condition}

\begin{equation}
\nabla f(x^{\*}) = 0
\end{equation}


### Second order necessary condition {#second-order-necessary-condition}

\begin{equation}
\nabla^{2}f(x^{\*}) \geq 0
\end{equation}


## Derivative {#derivative}

\begin{equation}
f'(x) = \frac{\Delta f(x)}{\Delta x}
\end{equation}

Or gradient; our convention is that gradients are a **COLUMN** vector---

\begin{equation}
\nabla f(x) = \mqty(\pdv{f(x)}{x\_1} \\\ \pdv{f(x)}{x\_2} \\\ \dots \\\ \pdv{f(x)}{x\_{n}})
\end{equation}

Hessian matrix (2nd order partial); its just this, where columns are the second index and rows are the first index.


## Directional Derivative {#directional-derivative}

\begin{align}
\nabla\_{s} f(x) &= \lim\_{h \to 0} \frac{f(x+hs) - f(x)}{h}  \\\\
&= \lim\_{h \to 0} \frac{f(x+\frac{hs}{2}) - f(x- \frac{hs}{2})}{h}
\end{align}

i.e. this is "derivative along a direction"


## Numerical Method {#numerical-method}


### Finite-Difference Method {#finite-difference-method}

All of these methods suffer from the fact that \\(f(x+h) - f(x)\\) cancels out at small values of \\(x\\) and \\(h\\), because of **floating point errors**. To fix this, use [Complex-Difference Method](#complex-difference-method).


#### Forward Difference {#forward-difference}

Recall the Taylor Series about \\(f(x+h)\\):

\begin{equation}
f(x+h) = f(x) + \frac{f'(x)}{1} h + \frac{f''(x)}{2!} h^{2} + \dots
\end{equation}

Moving it around to get \\(f'(x)\\) by itself:

\begin{equation}
f'(x)h = f(x+h) - f(x) - \frac{f''(x)}{2!} h^{2} - \dots
\end{equation}

So:

\begin{equation}
f'(x) \approx \frac{f(x+h)-f(x)}{h}
\end{equation}

where $...$ errors in the end at \\(O(h)\\). So:

\begin{equation}
f'(x) = \lim\_{h \to 0}\frac{f(x+h)-f(x)}{h}
\end{equation}

<!--list-separator-->

-  Error Analysis

    \\(\frac{f''(x)}{2!}h + ... h^{n}\\), the biggest error term lives with \\(h\\), so this scheme has asymtotic error at \\(O(h)\\).


#### Central Difference {#central-difference}

Slightly different formulation, which gives quadratic error \\(O(h^{2})\\), because the non-squared \\(h\\) term cancels out:

\begin{equation}
f'(x)= \lim\_{h \to 0}\frac{f\qty(x+\frac{h}{2})-f\qty(x-\frac{h}{2})}{h}
\end{equation}


#### Backward Difference {#backward-difference}

Forward difference, backward:

\begin{equation}
f'(x) = \lim\_{h \to 0} \frac{f(x)-f(x-h)}{h}
\end{equation}


### Complex-Difference Method {#complex-difference-method}

Consider a Taylor approximation of complex difference:

\begin{equation}
f(x + ih) = f(x) + ih f'(x) - h^{2} \frac{f''(x)}{2!} - ih^{3} \frac{f'''(x)}{3!} + \dots
\end{equation}

Let's again try to get \\(f'(x)\\) by itself; rearranging and thinking for a bit, we will get every other term on the expression above:

\begin{equation}
f'(x) = \frac{\Im (f(x+ih))}{h} + \dots
\end{equation}

Where the $...$ errors is at \\(O(h^{2})\\)

**NOTICE**: we no longer have the cancellation error because we no longer have subtraction.


## [Automatic Differentiation]({{< relref "KBhautomatic_differentiation.md" >}}) {#automatic-differentiation--kbhautomatic-differentiation-dot-md}

See [Automatic Differentiation]({{< relref "KBhautomatic_differentiation.md" >}})


## Bracketing {#bracketing}

Given a unimodal function, the global minimum is guaranteed to be within \\([a,c]\\) with \\(b \in [a,c]\\) if we have that \\(f(a) > f(b) < f( c)\\).

So let's find this bracket.


### Unimodality {#unimodality}

A function \\(f\\) is unimodal if:

\\(\exists\\) unique \\(x^{\*}\\) such that \\(f\\) is monotonically decreasing for \\(x \leq x^{\*}\\) and monotonically increasing for \\(x \geq x^{\*}\\)


### Bracketing Procedure {#bracketing-procedure}

If we don't know anything, we might as well start with \\(a=-1, b=0, c=1\\).

One of three things:

-   we already satisfy \\(f(a) > f(b) < f( c)\\), well, we are done
-   if our left side \\(f(a)\\) is too low, we will move \\(a\\) to the left without moving $c$---doubling the step size every time until it works
-   if our right side is too low to the other thing, move it too, ...


#### Fibonacci Search {#fibonacci-search}

Say you wanted to evaluate your sequence a finite number of times to maximally lower the interval for bracketing.

<!--list-separator-->

-  Two Evaluations

    At two evaluations, you should pick two points right down the middle very close together; this will cut your interval in half.

<!--list-separator-->

-  \\(n\\) evaluations

    Evaluate intervals with lengths

    \begin{equation}
    F\_{n} =
    \begin{cases}
    1, n\leq 2 \\\\
    F\_{n-1} + F\_{n-2}
    \end{cases}
    \end{equation}

    as in; say you are allowed \\(n\\) evaluations; figure the sequence \\(\\{F\_1, \dots, F\_{n}\\}\\), and then partition your space between \\(a\\) and \\(b\\) into \\(F\_{n}\\) slices; evaluate at locations \\(\frac{F\_{n-1}}{F\_{n}}\\) and \\(1- \frac{F\_{n-1}}{F\_{n}}\\), and lop off the half-line which is to the extrema of the higher point.


#### Golden Section Search {#golden-section-search}

Because of [Binet's Formula]({{< relref "KBhbinet_s_formula.md" >}}), we can write:

\begin{equation}
\lim\_{n \to \infty} \frac{F\_{n-1}}{F\_{n}} = \frac{1}{\varphi}
\end{equation}

the inverse of the the golden ratio. So just shrink intervals by that instead.
