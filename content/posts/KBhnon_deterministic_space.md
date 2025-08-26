+++
title = "Non-Deterministic Space"
author = ["Houjun Liu"]
draft = false
+++

[Non-Deterministic Space]({{< relref "KBhnon_deterministic_space.md" >}}) is like [Non-Deterministic Computation]({{< relref "KBhnon_deterministic_computation.md" >}}) but now is space efficient.


## requirements {#requirements}

We say \\(A \in \text{NSPACE}\qty(s \qty(n))\\) if \\(\exists\\) [Non-deterministic Turing Machine]({{< relref "KBhnon_deterministic_turing_machines.md" >}}) \\(M\\) which decides \\(A\\) such that \\(M\\) always uses \\(O\qty(s \qty(n))\\) space.


## additional information {#additional-information}

See [NL]({{< relref "KBhnl.md#nl" >}})
