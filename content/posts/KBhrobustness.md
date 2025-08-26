+++
title = "robustness (modeling)"
author = ["Houjun Liu"]
draft = false
+++

Four key points of [robustness]({{< relref "KBhrobustness.md" >}}) of [machine learning]({{< relref "KBhmachine_learning.md" >}}) models

1.  **Well-Possessedness**: a _problem_ is ill-posed if small changes in the inputs lead to large changes in the outputs, implying that any source of error would dominate the results; you can [well-posedness]({{< relref "KBhwell_posedness.md" >}})
2.  **Condition Number**: an _algorithm_ is ill-conditioned if small changes in the inputs lead to large changes in the output; large [condition number]({{< relref "KBhrobustness.md" >}}) is bad (our system is "sensitive") and small [condition number]({{< relref "KBhrobustness.md" >}}) are good (insensitive); if the relative input/output change is identical, then [condition number]({{< relref "KBhrobustness.md" >}}) is 1
3.  **Stability**: an algorithm is stable if it could complete itself in a meaningful way---i.e. don't create numerically explosive results
4.  **Accuracy**: we want low size of error (i.e. our answer should be close to the solution)
