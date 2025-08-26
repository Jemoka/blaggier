+++
title = "inverse transform sampling"
author = ["Houjun Liu"]
draft = false
+++

1.  Generate a uniform number between 0 to 1.
2.  Get the inverse of the [standard normal density function]({{< relref "KBhgaussian_distribution.md#standard-normal-density-function" >}}) at that value (let number be \\(y\\), find the \\(x\\) such that \\(\phi(y) = x\\))
3.  return \\(x\\)
