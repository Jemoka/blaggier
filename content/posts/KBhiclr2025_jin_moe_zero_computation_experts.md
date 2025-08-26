+++
title = "ICLR2025 Jin: MOE++ zero computation experts"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

A fixed amount of experts is activated per task.


## Key Insight {#key-insight}

MoE++ allows the amount of expert distribution to be adaptive.


## Method {#method}

Three key contributions:

1.  zero-computation experts: discarding input \\(E\qty(x) = 0\\), copy input \\(E\qty(x) = x\\) ("skip"), const \\(E(x) = \alpha\_{a} x +\alpha\_{b} v\_{\theta}\\) (plus normallFFN experts)
2.  pathway-aware router (with additional loss augmentation where we learn a \\(\tau\_{\theta}\\) to decide
3.  something else I missed


### zero-computation experts {#zero-computation-experts}

1.  simple to handle easy tokens quickly
2.  new experts is relatively low cost
