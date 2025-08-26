+++
title = "option"
author = ["Houjun Liu"]
draft = false
+++

[options]({{< relref "KBhoptions.md" >}}) are [derivatives]({{< relref "KBhderivatives.md" >}}) which gives you the _permission_ to make a transaction at a particular date.

There are two main types of [options]({{< relref "KBhoptions.md" >}}):

-   call: gives permission to **buy** a security on or before the "exercise" date
-   puts: gives permission to **sell** a security on or before the "exercise" date

For this article, we will define \\(S\_{t}\\) to be the stock price at the time \\(t\\), \\(K\\) as the option's strike price, \\(C\_{t}\\) to be the price of the "call" option, and \\(P\_{t}\\) to be the price of the "put" option at strike price \\(K\\); lastly \\(T\\) we define as the maturity date.

Naturally, the actual values \\(C\_{t}\\) and \\(P\_{t}\\) are:

\begin{equation}
\begin{cases}
C\_{t} = Max[0, S\_{T}-K] \\\\
P\_{t} = Max[0, K-S\_{T}] \\\\
\end{cases}
\end{equation}

you either make no money from the [option]({{< relref "KBhoptions.md" >}}) (market price is more optimal), or make some difference between the strike price and the market price.

The nice thing here is that little \\(Max\\) term. An [option]({{< relref "KBhoptions.md" >}}), unlike a futures contract, has no buying obligation: you don't have to exercise it. The payoff is always non-negative!

NOTE!!! \\(C\_{t}\\) at SMALL \\(t\\) is measured at \\(Max[0,S\_{\*T\*}, K}]\\), using \\(S\\) of LARGE \\(T\\). This is because, even when---currently---the stock is trading at $60, the right to buy the stock in \\(T\\) months for $70 is not worthless as the price may go up.

To analyze options, we usually use the [Black-Scholes Formula]({{< relref "KBhblack_scholes_formula.md" >}}).


## American vs European Options {#american-vs-european-options}

-   American options are excercisable at or before the maturity date.
-   European options are exrcercisable only at the maturity date.


## Analyze Options as Insurance {#analyze-options-as-insurance}

All insurance contracts are actually a form of an [option]({{< relref "KBhoptions.md" >}}), so why don't we analyze it as such?

A put option----

-   Asset insured: stock
-   Current asset value: \\(S\_{0}\\)
-   Term of policy: \\(T\\)
-   Maximum coverage: \\(K\\)
-   Deductible: \\(S\_0-K\\)
-   Insurance premium: \\(P\_{t}\\)

A call option is covariant with a put [option]({{< relref "KBhoptions.md" >}}); so its isomorphic, and so we will deal with it later.

A few differences:

-   American-style early exercise: (you can't, for normal insurance, exercise it without something happening)
-   Marketability: you can't give normal insurance to other people
-   Dividends: holding a stock pays dividends (an option's value goes down as dividends)