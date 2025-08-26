+++
title = "SU-ENGR76 APR042024"
author = ["Houjun Liu"]
draft = false
+++

## information {#information}

_Information is the amount of surprise a message provides._

Shannon (1948): a mathematical theory for communication.


### information value {#information-value}

The [information value](#information-value), or [entropy](#information-value), of a [information source](#information-source) is its probability-weighted average [surprise](#surprise) of all possible outcomes:

\begin{equation}
H(X) = \sum\_{x \in X}^{} s(P(X=x)) P(X=x)
\end{equation}


#### properties of entropy {#properties-of-entropy}

-   **entropy is positive**: \\(H(x) \geq 0\\)
-   **entropy of uniform**: for \\(M \sim CatUni[1, ..., n]\\), \\(p\_{i} = \frac{1}{|M|} = \frac{1}{n}\\), and \\(H(M) = \log\_{2} |M| = \log\_{2} n\\)
-   **entropy is bounded**: \\(0 \leq H(X) \leq H(M)\\) where \\(|X| = |M|\\) and \\(M \sim CatUni[1 ... n]\\) ("uniform distribution has the highest entropy"); we will reach the upper bound IFF \\(X\\) is uniformly distributed.


#### binary entropy function {#binary-entropy-function}

For some binary outcome \\(X \in \\{1,2\\}\\), where \\(P(x=1) = p\_1\\), \\(P(X\_2 = 2) = 1-p\_1\\). We can write:

\begin{equation}
H\_{2}(p\_1) = p\_1 \log\_{2} \frac{1}{p\_1} + (1-p\_1) \log\_{2} \frac{1}{1-p\_1}
\end{equation}

If you plot this out, we get a cap-like function, whereby at \\(H(0) = 0\\), \\(H(1) = 0\\), but \\(H(0.5) = 1\\) --- information sources are most effective when what's communicated is ambiguous.


### information source {#information-source}

We model an [information source](#information-source) as an [random variable]({{< relref "KBhrandom_variables.md" >}}). A [random variable]({{< relref "KBhrandom_variables.md" >}}) can take on any number of information, until you GET the information, and you will get an exact value. Each source has a range of possible values it can communicate (which is the [support]({{< relref "KBhsupport.md" >}}) of the [random variable]({{< relref "KBhrandom_variables.md" >}}) representing the information source).

We will then define the [surprise](#surprise) of a piece of information as a (decreasing function? of) the probability corresponding to the event of receiving that information.


### surprise {#surprise}

IMPORTANTLY: this class uses base \\(2\\), but the base is unimportant.

\begin{equation}
s(p) = \log\_{2} \frac{1}{p}
\end{equation}


#### Properties of Surprise {#properties-of-surprise}

-   log-base-2 [surprise](#surprise) has units "bits"
-   \\(s(1) = 0\\)
-   \\(p \to 0, s(p) \to \infty\\)
-   \\(s(p) \geq 0\\)
-   "joint surprise" \\(s(p,q) = s(p) + s(q)\\)


#### Facts about Surprise {#facts-about-surprise}

1.  [surprise](#surprise) should probably decrease with increasing \\(p\\)
2.  [surprise](#surprise) should be continuous in \\(p\\)
3.  for \\(s(p\_i), s(q\_{j})\\), for two events \\(p\_i\\) and \\(q\_{j}\\), the "surprise" of \\(s(pi, q\_{j})\\) = \\(s(p\_{i}) + s(q\_{j})\\)
4.  [surprise](#surprise) satisfies the fact that something with probably \\(0\\) happening, we should be infinitely surprises; if something happens with iincreasing higher probabiity, surprise would be low

The surprise function is the **unique** function which satisfies all of the above property.


### additional information {#additional-information}

**information is relative to the domain which is attempted to be communicated**
