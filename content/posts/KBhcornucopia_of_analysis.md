+++
title = "cornucopia of analysis"
author = ["Houjun Liu"]
draft = false
+++

## Pythagorean Theorem {#pythagorean-theorem}

\begin{equation}
\\|u + v\\|^{2} = \\|u \\|^{2} + \\|v\\|^{2}
\end{equation}

if \\(v\\) and \\(u\\) are orthogonal vectors.

Proof:

{{< figure src="/ox-hugo/2023-04-08_22-53-17_screenshot.png" >}}


## An Useful Orthogonal Decomposition {#an-useful-orthogonal-decomposition}

Suppose we have a vector \\(u\\), and another \\(v\\), both belonging to \\(V\\). We can decompose \\(u\\) as a sum of two vectors given a choice of \\(v\\): one a scalar multiple of \\(v\\), and another orthogonal to \\(v\\).

That is: we can write \\(u = cv + w\\), where \\(c \in \mathbb{F}\\) and \\(w \in V\\), such that \\(\langle w,v \rangle = 0\\).

Here's how:

For nonzero \\(v\\)

\begin{equation}
c = \frac{\langle u,v \rangle}{\\|v\\|^{2}}
\end{equation}

and

\begin{equation}
w = (u - cv)
\end{equation}

We can show \\(\langle w,v \rangle=0\\) as follows:

\begin{align}
\langle (u-cv), v \rangle &= \langle u,v \rangle - \langle cv, v \rangle  \\\\
&= \langle u,v \rangle - c \langle v,v \rangle \\\\
&= \langle u,v \rangle - \frac{\langle u,v \rangle}{\\|v\\|^{2}} \langle v,v \rangle  \\\\
&= \langle u,v \rangle - \frac{\langle u,v \rangle}{\\|v\\|^{2}} \\|v\\|^{2}  \\\\
&= 0
\end{align}


## Cauchy-Schwartz Inequality {#cauchy-schwartz-inequality}

\begin{equation}
| \langle u,v \rangle | \leq \\|u\\| \\|v\\|
\end{equation}

and the expression is an equality of each vector \\(u,v\\) is the scalar multiple of the other.

Proof:

Pick some set of \\(v\\) and \\(u\\) and write out the orthogonal decomposition we had outlined above:

\begin{equation}
u = cv + w
\end{equation}

Now, recall \\(c = \frac{\langle u,v \rangle}{\\|v\\|^{2}}\\). We now apply [Pythagorean Theorem](#pythagorean-theorem):

{{< figure src="/ox-hugo/2023-04-08_23-13-44_screenshot.png" >}}

Now we just multiply \\(\\|v\\|^{2}\\) to both sides and take square roots.

If \\(w = 0\\) (i.e. \\(v\\) and \\(w\\) have no othogonal component, and therefore they are scalar multiples), then this would turn into an equality as desired.


## triangle inequality (vectors) {#triangle-inequality--vectors}

See also [triangle inequality (complexes)]({{< relref "KBhthoughts_on_axler_4.md#triangle-inequality--complexes" >}})

{{< figure src="/ox-hugo/2023-04-08_23-23-03_screenshot.png" >}}

"The length of \\(u+v\\) is always less than the length of each \\(u\\) plus \\(v\\); the third side length is always shorter than the sum of both other sides' lengths."

\begin{equation}
\\|u\\| + \\|v\\| \geq \\|u+v\\|
\end{equation}

{{< figure src="/ox-hugo/2023-04-08_23-26-02_screenshot.png" >}}

Notably, the two lines between \\(2|\langle u,v \rangle|\\) and \\(2 \\|u\\| \\|v\\|\\) holds because of the [Cauchy-Schwartz Inequality](#cauchy-schwartz-inequality).

This inequality becomes an equality if \\(u\\) and \\(v\\) are a **non-negative** multiple of the other.


## parallelogram equality {#parallelogram-equality}

{{< figure src="/ox-hugo/2023-04-08_23-32-19_screenshot.png" >}}

The sums of squared side lengths of a parallelogram is equal to the sum of the squares of the length of diagonals:

\begin{equation}
\\|u + v\\|^{2} + \\|u-v\\|^{2} = 2(\\|u\\|^{2} + \\|v\\|^{2})
\end{equation}

{{< figure src="/ox-hugo/2023-04-08_23-33-33_screenshot.png" >}}