+++
title = "NUS-MATH570 Research Question 1"
author = ["Houjun Liu"]
draft = false
+++

Intersects:

\begin{equation}
f(x) = (x+c)^{2}
\end{equation}

\begin{equation}
h(x) = c x
\end{equation}

Doesn't Intersect:

\begin{equation}
g(x) = c e^{\frac{x^{4}}{4}}}
\end{equation}

---

\begin{align}
&h\_1(x)-h\_2(x) = c\_1x-c\_2x  \\\\
\Rightarrow\ & 0 = c\_1x-c\_2x \\\\
\Rightarrow\ & 0 = x(c\_1-c\_2)
\end{align}

---

\begin{align}
&g\_1(x)-g\_2(x) = c\_1e^{\frac{x^{4}}{4}} - c\_2e^{\frac{x^{4}}{4}} \\\\
\Rightarrow\ & 0 = \qty(c\_1 - c\_2)e^{\frac{x^{4}}{4}}  \\\\
\Rightarrow\ & 0 = e^{\frac{x^{4}}{4}}(c\_1-c\_2)
\end{align}

---

\begin{align}
& f\_1(x)-f\_2(x)=(x+c\_1)^{2}-(x+c\_2)^{2}  \\\\
\Rightarrow\ & 0 = (x+c\_1)^{2}-(x+c\_2)^{2}  \\\\
\Rightarrow\ & 0 = 2x(c\_1-c\_2)+{c\_1}^{2}+{c\_2}^{2}
\end{align}

---

\begin{equation}
\dv{y}{x} + P'(x)y = Q'(x)
\end{equation}

\begin{align}
&y = e^{\int P'(x)\dd{x}} \int e^{\int P'(x)\dd{x}} Q'(x)\dd{x}  \\\\
\Rightarrow\ & e^{-P(x)} \int e^{P(x)}Q'(x)\dd{x} \\\\
\Rightarrow\ & e^{-P(x)} (\dots+C) \\\\
\Rightarrow\ & e^{-P(x)}C + \dots
\end{align}

---

\begin{equation}
h(x) \in e^{-P(x)}C + \dots
\end{equation}

\begin{equation}
g(x) \in e^{-P(x)}C + \dots
\end{equation}

---

\begin{align}
&0 = (e^{-P(x)}C\_1+\dots)-(e^{-P(x)}C\_2 + \dots) \\\\
\Rightarrow\ & e^{-P(x)}C\_1-e^{-P(x)}C\_2  \\\\
\Rightarrow\ & e^{-P(x)}(C\_1-C\_2) = 0
\end{align}