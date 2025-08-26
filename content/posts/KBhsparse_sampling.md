+++
title = "Sparse Sampling"
author = ["Houjun Liu"]
draft = false
+++

Same core algorithm as [Forward Search]({{< relref "KBhforward_search.md" >}}), but instead of calculating a [utility]({{< relref "KBhutility_theory.md" >}}) based on the [action-value]({{< relref "KBhaction_value_function.md" >}}) over all possible next states, you make \\(m\\) different **samples** of next state, action, and reward, and average them
