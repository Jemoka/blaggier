+++
title = "Brownian Motion"
author = ["Houjun Liu"]
draft = false
+++

[Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}) is the pattern for measuring the convergence of [random walk]({{< relref "KBhrandom_walk.md" >}}) through continuous timing.


## discrete random walk {#discrete-random-walk}

[discrete random walk](#discrete-random-walk) is a tool used to construct [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}). It is a [random walk]({{< relref "KBhrandom_walk.md" >}}) which only takes on two discrete values at any given time: \\(\Delta\\) and its [additive inverse]({{< relref "KBhinverses.md" >}}) \\(-\Delta\\). These two cases take place at probabilities \\(\pi\\) and \\(1-\pi\\).

Therefore, the expected return over each time \\(k\\) is:

\begin{equation}
\epsilon\_{k} = \begin{cases}
\Delta, p(\pi) \\\\
-\Delta, p(1-\pi)
\end{cases}
\end{equation}

(that, at any given time, the [expectation]({{< relref "KBhexpectation.md" >}}) of return is either---with probability $&pi;$---\\(\Delta\\), or--with probability $1-&pi;$---\\(-\Delta\\).

This makes \\(\epsilon\_{k}\\) independently and identically distributed. The price, then, is formed by:

\begin{equation}
p\_{k} = p\_{k-1}+\epsilon\_{k}
\end{equation}

and therefore the price follows a [random walk]({{< relref "KBhrandom_walk.md" >}}).

Such a [discrete random walk](#discrete-random-walk) can look like this:

{{< figure src="/ox-hugo/2022-09-19_10-53-11_screenshot.png" >}}

We can split this time from \\([0,T]\\) into \\(n\\) pieces; making each segment with length \\(h=\frac{T}{n}\\). Then, we can parcel out:

\begin{equation}
p\_{n}(t) = p\_{[\frac{t}{h}]} = p\_{[\frac{nt}{T}]}
\end{equation}

Descretized at integer intervals.

At this current, discrete moments have expected value \\(E[p\_{n}(T)] = n(\pi -(1-\pi))\Delta\\) and variance \\(Var[p\_{n}(T)]=4n\pi (1-\pi)\Delta^{2}\\). #why

Now, if we want to have a [continuous]({{< relref "KBhuniqueness_and_existance.md#continuity" >}}) version of the descretized interval above, we will maintain the finiteness of \\(p\_{n}(T)\\) but take \\(n\\) to \\(\infty\\). To get a continuous [random walk]({{< relref "KBhrandom_walk.md" >}}) needed for [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}), we adjust \\(\Delta\\), \\(\pi\\), and \\(1-\pi\\) such that the expected value and variance tends towards the normal (as we expect for a [random walk]({{< relref "KBhrandom_walk.md" >}})); that is, we hope to see that:

\begin{equation}
\begin{cases}
n(\pi -(1-\pi))\Delta \to \mu T \\\\
4n\pi (1-\pi )\Delta ^{2} \to \sigma^{2} T
\end{cases}
\end{equation}

To solve for these desired convergences into the normal, we have probabilities \\(\pi, (1-\pi), \Delta\\) such that:

\begin{equation}
\begin{cases}
\pi = \frac{1}{2}\qty(1+\frac{\mu \sqrt{h}}{\sigma})\\\\
(1-\pi) = \frac{1}{2}\qty(1-\frac{\mu \sqrt{h}}{\sigma})\\\\
\Delta = \sigma \sqrt{h}
\end{cases}
\end{equation}

where, \\(h = \frac{1}{n}\\).

So looking at the expression for \\(\Delta\\), we can see that as \\(n\\) in increases, \\(h =\frac{1}{n}\\) decreases and therefore \\(\Delta\\) decreases. In fact, we can see that the change in all three variables track the change in the rate of \\(\sqrt{h}\\); namely, they vary with [O(h)]({{< relref "KBhasymtotic_analysis.md#o--n" >}}).

\begin{equation}
\pi = (1-\pi) = \frac{1}{2}+\frac{\mu \sqrt{h}}{2\sigma} =  \frac{1}{2}+O\qty(\sqrt{h})
\end{equation}

Of course:

\begin{equation}
\Delta = O\qty(\sqrt{h})
\end{equation}

So, finally, we have the conclusion that:

1.  as \\(n\\) (number of subdivision pieces of the time domain \\(T\\)) increases, \\(\frac{1}{n}\\) decreases, \\(O\qty(\sqrt{h})\\) decreases with the same proportion. Therefore, as \\(\lim\_{n \to \infty}\\) in the continuous-time case, the probability of _either_ positive or negative delta (\\(\pi\\) and \\(-\pi\\) trends towards each to \\(\frac{1}{2}\\))
2.  by the same vein, as \\(\lim\_{n \to \infty}\\), \\(\Delta \to 0\\)

Therefore, this is a cool result: in a continuous-time case of a [discrete random walk](#discrete-random-walk), the returns (NOT! just the expect value, but literal \\(\Delta\\)) trend towards \\(+0\\) and \\(-0\\) each with \\(\frac{1}{2}\\) probability.


## actual Brownian motion {#actual-brownian-motion}

Given the final results above for the limits of [discrete random walk](#discrete-random-walk), we can see that the price moment traced from the returns (i.e. \\(p\_{k} = p\_{k-1}+\epsilon\_{k}\\)) have the properties of normality (\\(p\_{n}(T) \to \mathcal{N}(\mu T, \sigma^{2}T)\\))

True [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}) follows, therefore, three basic properties:

1.  \\(B\_{t}\\) is normally distributed by a mean of \\(0\\), and variance of \\(t\\)
2.  For some \\(s<t\\), \\(B\_{t}-B\_{s}\\) is normally distributed by a mean of \\(0\\), and variance of \\(t-s\\)
3.  Distributions \\(B\_{j}\\) and \\(B\_{t}-B\_{s}\\) is independent


## Standard Brownian Motion {#standard-brownian-motion}

Brownian motion that starts at \\(B\_0=0\\) is called [Standard Brownian Motion](#standard-brownian-motion)


## quadratic variation {#quadratic-variation}

The [quadratic variation](#quadratic-variation) of a sequence of values is the expression that:

\begin{equation}
\sum\_{i=0}^{N-1} (x\_{i+1}-x\_i)^{2}
\end{equation}

On any sequence of values \\(x\_0=0,\dots,x\_{N}=1\\) (with defined bounds), the quadratic variation becomes bounded.