+++
title = "SU-MATH53 FEB122024"
author = ["Houjun Liu"]
draft = false
+++

How would we solve equations like:

\begin{equation}
\begin{cases}
y'' - 2xy' + 2\lambda y = 0 \\\\
y'' - xy = 0
\end{cases}
\end{equation}


## Taylor Series {#taylor-series}

Its time to have a blast from the past! [Taylor Series](#taylor-series) time.

\begin{equation}
p\_{n}(x) = \sum\_{i=0}^{n} \frac{f^{(n)}(0) x^{n}}{n!}
\end{equation}

[Taylor's Theorem with Remainder](#taylor-series) gives us that, at some \\(n\\), \\(|f(x) - p\_{n}(x)|\\) is bounded.

\begin{equation}
|x(t+h) - (x(t) + h x'(t))| \leq Ch
\end{equation}

Insight: if your derivatives are bounded, then at high values of \\(j\\) we have \\(\frac{f^{(j)}\qty(0)}{n!}\\) tends eventually towards zero as \\(n\\) increases.

Two constraints:

1.  need \\(f^{(n)}\\) to exist infinitely
2.  and there's a set of functions that are representable by Taylor Series (even if differentiable; such as \\(e^{-\frac{1}{|x|}}\\)


## variable-coefficient ODEs {#variable-coefficient-odes}

\begin{equation}
\dv[2]{y}{x} + a(x) \dv{y}{x} + b(x) y = 0
\end{equation}

We can no longer use any linearizion facilities we have developed before because [matrix exponentiation]({{< relref "KBhmatrix_exponentiation.md" >}}) (i.e. the eigenvalue trick) no longer work very well as squaring independent variable within the expression actually have consequences now.


## Solving ODEs via [power series]({{< relref "KBhpower_series_o.md" >}}) {#solving-odes-via-power-series--kbhpower-series-o-dot-md}

if \\(a\_0(t), ..., a\_{n}(t), f(t)\\) are all convergent [power series]({{< relref "KBhpower_series_o.md" >}}) on an interval centered at \\(t\_0\\) then, solutions of \\(a\_{n}(t)y^{(n)} + ... a\_0(t)y = f(t)\\) is also a convergent power series on an interval at \\(t\_{0}\\), provided that \\(a\_{n}(t)\\) doesn't go to \\(0\\) on that interval.

1.  write down solutions in terms of \\(y(t) = \sum\_{n=0}^{\infty} c\_{n}(t-t\_0)^{n}\\)
2.  take enough derivatives of that expression \\(y(t)\\) above
3.  solve for \\(c\_0\\), \\(c\_1\\), etc. by using the fact that \\(c\_{n} = \frac{y^{(n)}(t\_0)}{n!}\\) (i.e. plug in the given \\(y^{(n)}\\) from the IVP and solve for \\(c\_{j}\\))
4.  plug what you have in terms of derivatives as well as the initial coefficients, and relate to a general power series
5.  notice patterns


### Case Study {#case-study}

Take \\(y' = 2y\\). Consider:

\begin{equation}
y = \sum\_{n=0}^{\infty} a\_{n}x^{n}
\end{equation}

We hope that our solution function can be fit to this form.

If we differentiate:

\begin{equation}
y' = \sum\_{n=0}^{\infty} a\_{n} n x^{n-1}
\end{equation}

We want to line up powers of \\(x\\), which makes life earlier. Because this is an infinite series, and at \\(n=0\\) the whole differentiated term looks like \\(0\\), we can actually just shift \\(n\\) one over and we'd be good.

\begin{equation}
y' = \sum\_{n=0}^{\infty} a\_{n+1} (n+1) x^{n}
\end{equation}

We can now plug the whole thing into our original equation:

\begin{equation}
\sum\_{n=0}^{\infty} a\_{n+1} (n+1) x^{n} = \sum\_{n=0}^{\infty} 2a\_{n}x^{n}
\end{equation}

Because these are two polynomials that equal, corresponding coefficients should match:

\begin{equation}
a\_{n+1}(n+1) = 2a\_{n}
\end{equation}

So, we have:

\begin{equation}
a\_{n+1} = \frac{2a\_{n}}{n+1}
\end{equation}

At \\(y(0)=a\_{0}\\), so we can start the recursion relationship at any initial condition we'd like.

We notice that the value:

\begin{equation}
a\_{n} = \frac{2^{n}}{n!} a\_{0}
\end{equation}

satisfies the system above. Which means we can write out the general answer as \\(a\_0 \sum\_{i=0}^{\infty} \frac{2^{n}x^{n}}{n!}\\)


### Case Study 2 {#case-study-2}

We have:

\begin{equation}
y'' - 2xy' + 2\lambda y = 0
\end{equation}

Let's calculate our Taylor series:

\begin{equation}
y = \sum\_{i=0}^{\infty} a\_{n} x^{n}
\end{equation}

\begin{equation}
y' = \sum\_{i=0}^{\infty} n a\_{n}x^{n-1}
\end{equation}

\begin{equation}
y'' = \sum\_{n=0}^{\infty} n(n-1)a\_{n}x^{n-2}
\end{equation}

Reindexing:

\begin{equation}
y'' = \sum\_{n=0}^{\infty} (n+1)(n+1) a\_{n+2} x^{n}
\end{equation}

Because \\(2xy'\\) appears in the equation, we can actually write:

\begin{equation}
-2xy' = -\sum\_{i=0}^{\infty} 2n a\_{n} x^{n}
\end{equation}

and the final term:

\begin{equation}
2\lambda  = \sum\_{n=0}^{\infty} a\_{n} x^{n}
\end{equation}

Adding the whole thing up, we obtain that:

\begin{equation}
\sum\_{n=0}^{\infty} \qty[(n+2)(n+1) a\_{n+2} - 2\_{n}a\_{n} + 2\lambda a\_{n}] x^{n} = 0
\end{equation}

For each term, we get a recursion relationship in:

\begin{equation}
a\_{n+2} = \frac{2(n-\lambda)}{(n+2)(n+1)} a\_{n}
\end{equation}
