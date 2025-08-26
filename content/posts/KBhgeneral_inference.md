+++
title = "General Inference"
author = ["Houjun Liu"]
draft = false
+++

See [inference]({{< relref "KBhinference.md" >}}).

In general, the [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}}) tables are very hard to solve because it requires---for instance for binary variables---requries \\(2^{n}\\) entires, which is a lot.

1.  how do you define very large models?
2.  how do you perform [inference]({{< relref "KBhinference.md" >}}) with very large models
3.  what about the data can we use to inform the design process

"If you can tell me a generative story, we can compress our [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}})". Get ready for...... [inference]({{< relref "KBhinference.md" >}}) with causality with [Baysian Network]({{< relref "KBhbaysian_network.md" >}}).

If you can write a program to sample from the [joint probability distribution]({{< relref "KBhjoint_probability_distribution.md" >}}), you have just described the joint.

"Random variables are independent of causal non-descendents given their causal parents". [d-seperation]({{< relref "KBhbaysian_network.md#checking-for-conditional-independence" >}})
