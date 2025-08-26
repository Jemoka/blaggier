+++
title = "Capital-Asset Pricing Model"
author = ["Houjun Liu"]
draft = false
+++

[CAPM]({{< relref "KBhcapm.md" >}}) is a method of portfolio selection analysis which focuses on _maximizing_ [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}) given some fixed variance.

It deals with optimal [Capital Market Line](#capital-market-line), given here:

\begin{equation}
E[R\_{p}] = r\_{f}+\frac{\sigma\_{p}}{\sigma\_{T}}\qty(E[R\_{T}]-r\_{f})
\end{equation}

Which describes \\(E[R\_{p}]\\), the expected return of an optimal portfolio in a market, given, \\(R\_{T}\\) is the market return, \\(r\_{f}\\) is the risk-free rate, \\(\sigma\_{p}\\) is the portfolio returns, and \\(\sigma\_{t}\\) is standard-deviation of the market returns.


## Sharpe Ratio {#sharpe-ratio}

The [Sharpe Ratio](#sharpe-ratio) is a measure of the risk-adjusted performance of an asset---given the rate of return of some risk-free asset.

It is defined as:

\begin{equation}
S\_{a} = \frac{E[R\_{a}-R\_{b}]}{\sigma\_{a}}
\end{equation}

where, \\(R\_{a}\\) is the raw [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}) of the asset, \\(R\_{b}\\) is the risk-free rate of [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}), and \\(\sigma\_{a}\\) is the standard deviation of the asset "excess" return (i.e. standard deviation actual return - expected return---how much extra there is).


## Minimum-Variance Boundary {#minimum-variance-boundary}

For a given a weighted-average portfolio of stocks their waited averages, and correlations between the stocks you can draw this curvy curve. Let pink dots represent the two securities in your portfolio, and various curves highlighting possible linear combinations thereof---

{{< figure src="/ox-hugo/2022-10-29_16-04-23_screenshot.png" >}}

Let's observe the boundary conditions of this curve.

If the two stocks are exactly negatively correlated, then the more risk you take the more return you have for one while less return you have for the other (hence, two straight divergent lines.)

If you have an exactly correlated portfolio, the two assets will will form a line.

The [Effecient Frontier](#minimum-variance-boundary) is the top half of this curve (i.e. higher risk/higher return is not a fun place to be, so that's an inefficient frontier.)


## Capital Market Line {#capital-market-line}

The [Capital Market Line](#capital-market-line) is a line that uses the [Sharpe Ratio](#sharpe-ratio) of a **market** as a whole (how the market is performing against the risk-free rate) to analyze the performance of portfolio. It plots the performance of an "optimal portfolio" in a given market.

Let's construct first the [Sharpe Ratio](#sharpe-ratio) of a hypothetical market:

\begin{equation}
\frac{R\_{t}-r\_{f}}{\sigma\_{t}}
\end{equation}

where \\(R\_{T}\\) is the market return, \\(r\_{f}\\) is the risk-free rate, and \\(\sigma\_{t}\\) is standard-deviation of the market returns.

We will multiply this value by the standard-deviation of your portfolio to calculate what the market claims should be your expected return. Then, we shift the line by the risk-free rate (as you are expected also to get that rate back in your return.

So an "effecient" portfolio (getting the max expected return per unit risk as measured by the market [Sharpe Ratio](#sharpe-ratio)) should behave like:

\begin{equation}
E[R\_{p}] = r\_{f}+\frac{E[R\_{T}]-r\_{f}}{\sigma\_{T}}\sigma\_{p}
\end{equation}

again, \\(R\_{T}\\) is the market return, \\(r\_{f}\\) is the risk-free rate, and \\(\sigma\_{t}\\) is standard-deviation of the market returns.

The one liner is: "the return of your portfolio should be the base return by risk-free rate, plus how much excess risk you are taking on (and therefore [return]({{< relref "KBhrandom_walk.md#return--finmetrics" >}}) you should be getting back by the [Sharpe Ratio](#sharpe-ratio))"

(how much you are expected to get (i.e. market [Sharpe Ratio](#sharpe-ratio) times your portfolio volatility), shifted back up by the risk-free rate.


## Sharpe-Lintner CAPM {#sharpe-lintner-capm}

A linear formulation of CAPM base on market-excess return (i.e. if you want to beat the market, you will have to sustain proportionally the same amount of risk.)

{{< figure src="/ox-hugo/2022-10-29_18-44-41_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-10-29_18-45-03_screenshot.png" >}}


## Tangency Portfolio {#tangency-portfolio}

{{< figure src="/ox-hugo/2022-10-27_10-35-03_screenshot.png" >}}

There is a portfolio, which is named the [Tangency Portfolio](#tangency-portfolio). This portfolio is the tangent point between the [Capital Market Line](#capital-market-line) and the [Effecient Frontier](#minimum-variance-boundary).

It represents the point where you can get the highest return given some risk, but also control the risk at the market's [Sharpe Ratio](#sharpe-ratio).


## Black's CAPM {#black-s-capm}

[CAPM]({{< relref "KBhcapm.md" >}}) depends on a risk-free asset. Black of [Black-Scholes Formula]({{< relref "KBhblack_scholes_formula.md" >}}) fame derived another formulation of CAPM which doesn't dependent on a risk-free asset.


### Zero-Beta Portfolio {#zero-beta-portfolio}

To work with [Black's CAPM](#black-s-capm), we first define \\(0m\\), the [Zero-Beta Portfolio](#zero-beta-portfolio) (used in the formula as \\(R\_{0m}\\), the return of the [Zero-Beta Portfolio](#zero-beta-portfolio)).

It is defined to be the portfolio with the minimum variance of all portfolios not correlated with \\(m\\).

{{< figure src="/ox-hugo/2022-10-29_16-52-14_screenshot.png" >}}