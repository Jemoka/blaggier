+++
title = "sparsity"
author = ["Houjun Liu"]
draft = false
+++

A bunch of matricies could be sparse; for fluid dynamics, for instance, has a \\(10^{6} \times 10^{6}\\) matrix, but may only have \\(7 \times 10^{6}\\) non-zero entries; but the inverse could be fully dense!

**In these cases, we almost never want to form a in inverse if needed.**

If we really need to invert this, performing a [LU-Factorization]({{< relref "KBhlu_factorization.md" >}}) is going to be a very good idea.
