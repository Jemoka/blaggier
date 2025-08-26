+++
title = "Arbitrage Pricing"
author = ["Houjun Liu"]
draft = false
+++

## Background {#background}

In the 60s, economists that the pricing of options were independent of pricing of underlying assets. Nowadays, we can see that, if the underlying assets were obeying of a Brownian Motion, there is no additional degree of freedom that options can bring: that knowing the stocks will tell you exactly through a [DiffEQ]({{< relref "KBhdiffeq_intro.md" >}}) how the option will evolve.

The idea, then, is that you can replicate options: by dynamically buying and selling pairs of securities in the same way as the option, your new portfolio can track the option exactly.

Of course, there is a certain amount of volatility associated with [Brownian Motion]({{< relref "KBhbrownian_motion.md" >}}) markets.

Unfortunately, there is no one fixed volatility which can be used to model all options; you can fit a volatility given all strike prices---creating an implied **volatility surface**.

Otherwise, you can also model volatility as a random variable, a stochastic process modeled by **stochastic volatility**.

---


## Reading {#reading}

-   pg 350-352: diffusion are described by stochastic differential equations
-

---


## Option Pricing {#option-pricing}


### A Vanilla Call {#a-vanilla-call}

Given some current price \\(S\\), option price \\(K\\), time to maturity \\(T\\); the payoff increases linearly after the option matures. How much should the option be changed for the right to buy the option after \\(T\\) days?

We can use the option info to calculate the implied volatility.