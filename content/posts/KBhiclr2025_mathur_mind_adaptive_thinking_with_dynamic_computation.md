+++
title = "ICLR2025 Mathur: MIND Adaptive Thinking with Dynamic Computation"
author = ["Houjun Liu"]
draft = false
+++

## Motivation {#motivation}

Standard computation doesn't adapt.


## Fixed-Point Iteration for Adaptation {#fixed-point-iteration-for-adaptation}


### method: CNN {#method-cnn}

1.  for every layer, perform [fixed-point iteration]({{< relref "KBhfixed_point_iteration.md" >}}) until convergence to mask out (what exactly?)
2.  supervise also an "introspection model" to skip the entire fixed point
3.  loss: LM + supervision for the introspection model


### method: MIND-transformer {#method-mind-transformer}

1.  for every layer, perform [fixed-point iteration]({{< relref "KBhfixed_point_iteration.md" >}}) until attention activation convergence
2.  ditto introspection as above
