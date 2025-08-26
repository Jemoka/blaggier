+++
title = "VWAP"
author = ["Houjun Liu"]
draft = false
+++

The [VWAP]({{< relref "KBhvwap.md" >}}) is a [Financial Market]({{< relref "KBhfinancial_markets_intro.md" >}}) metric that stands for "volume-weighted average price." It is given by (sum<sub>shares brought</sub>(shares bought at price\*price its at)/(total shares bought in period)).

"the [price]({{< relref "KBhprice.md" >}}) we care the most about, is the price where the most volume is traded."


## Motivation {#motivation}

Its a weighted-by volume trading price. Though the [closing price]({{< relref "KBhaccounting_price.md" >}}) is the [price]({{< relref "KBhprice.md" >}}) used for accounting, it isn't a good metric for large-volume trades.


## Trading at the VWAP {#trading-at-the-vwap}

We [Trade at the VWAP](#trading-at-the-vwap) because a LARGE trade will move the market around, and we don't want that if we are a large trader. So we trade at the [VWAP]({{< relref "KBhvwap.md" >}}) to ensure that we are getting the best possible value.

1.  Build a volume a profile
2.  Slicing the orders to match
3.  Control for volume deviations


### Volume Profile {#volume-profile}

We use the volume-profile: "how much/what percentage of today's volume happened in this chunk of the day" to predict today's trading by matching by historical data. This often results in looking like a J curve: lots of trading happen at the beginning of the day, very little towards the middle, and LOTS in the end.


### Slicing Orders {#slicing-orders}

Slice your funds needed to trade, volume-wise, according to the [Volume Profile](#volume-profile). Set limit orders per slice at the best price for the market.


### Control Deviations from Expectation {#control-deviations-from-expectation}

If you were't able to trade by the limit order you posted at that slice, by the end of the slice, cancel your limit order and just send in a market order to ensure your participation with the desired volume at that slice.