+++
title = "Black-Scholes Formula"
author = ["Houjun Liu"]
draft = false
+++

People have been trading [option]({{< relref "KBhoptions.md" >}})s for a very long time, but there wasn't a good way of quantify the value of an [option]({{< relref "KBhoptions.md" >}}).

There are two main types of uses for [Black-Scholes Formula]({{< relref "KBhblack_scholes_formula.md" >}})

1.  you can use all variables and determine the value of [option]({{< relref "KBhoptions.md" >}})s
2.  you can get the price of [option]({{< relref "KBhoptions.md" >}})s being traded, then compute the $&sigma;$---the market's estimation of volatility (how much they want the [insurance policy]({{< relref "KBhoptions.md#analyze-options-as-insurance" >}}) that is the options)


## constituents {#constituents}

-   \\(S\_0\\): stock price
-   \\(X\\): exercise price
-   \\(r\\): risk-free interest rate
-   \\(T\\): maturity time
-   \\(\sigma\\): standard-deviation of log [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}})s---"volatility"


## [Black-Scholes Formula]({{< relref "KBhblack_scholes_formula.md" >}}) for an [European "Call" Option]({{< relref "KBhoptions.md#american-vs-european-options" >}}) {#black-scholes-formula--kbhblack-scholes-formula-dot-md--for-an-european-call-option--kbhoptions-dot-md}

Here is the scary formula:

\begin{equation}
C\_0 = S\_0 \mathcal{N}(d\_{1})-Xe^{-rT}\mathcal{N}(d\_{2})
\end{equation}

where, the variables are defined above, and:

\begin{equation}
\begin{cases}
d\_1 = \frac{\ln\qty(\frac{S\_0}{X})+\qty(r+\frac{\sigma^{2}}{2})T}{\sigma \sqrt{t}}\\\\
d\_2 = \frac{\ln\qty(\frac{S\_0}{X})+\qty(r-\frac{\sigma^{2}}{2})T}{\sigma \sqrt{t}}
\end{cases}
\end{equation}

and \\(\mathcal{N}\\) is the area at point under the standard [normal distribution]({{< relref "KBhnormal_distribution.md" >}}).


### oh god {#oh-god}

So let's dissect this a little.

The first term:

\begin{equation}
S\_0\mathcal{N}(d\_{1})
\end{equation}

is the "current" stock price, weighted by the probability of you being willing to exercise it.

and the second term:

\begin{equation}
Xe^{-rT}\mathcal{N}(d\_{2})
\end{equation}

is the "price" of the exercise (what you need to pay, if exercising the option, to get the stock.)

This strike price \\(X\\) is discounted by \\(e^{-rT}\\), which is like a time machine that rolls that strike price back to what it would be today (so that it's comparable to \\(S\_0\\).) As \\(r\\) is the risk free interest rate, we are essentially saying: "in a perfectly functional market, over the next \\(T\\) days, how will our asset grow?"

This is again weighted by the probability of you being willing to exercise it---through modified slightly differently.

Therefore, subtracting the two terms, we get the actual value of the option---the money you would gain by exercising it, then immediately selling the stock, weighted by how willing you are actually to excercise it.

Let's now take a look at those "probabilities" \\(d\_{\\{1,2\\}}\\). These factors essentially provide quantification of the statement that: "the higher our current price is ABOVE the excrecise price---accounting for volatility---the more willing we are to excercise the option."

Note then, \\(\ln\qty(\frac{S\_{0}}{X})\\) form the top of both expressions. That essentially measures how high the current price \\(S\_0\\) deviates from the strike price \\(X\\).

Now, as volatility \\(\sigma\\) increases, \\(d\_1\\) increases and \\(d\_2\\) decreases (as \\(\frac{\sigma^{2}}{2}\\) is being _added_ in \\(d\_1\\) and _subtracted_ in \\(d\_2\\)). This is because, as volatility increase, you are _less_ certain about what the actual "pay" (price) is, but your option---given its constant strike price---provides the certainty in gain.