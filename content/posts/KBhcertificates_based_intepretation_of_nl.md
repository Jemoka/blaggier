+++
title = "Certificates-Based Intepretation of NL"
author = ["Houjun Liu"]
draft = false
+++

A language \\(A\\) is in \\(NL\\) if \\(\exists\\) a deterministic Turing Machine \\(V\\) that runs in [logspace]({{< relref "KBhspace_class_l.md" >}}) where \\(x \in A \Leftrightarrow \exists w \in \qty {0,1}^{\text{poly}\qty(|x|)}\\) (if and only if!! same as NP) such that \\(V \qty(x,w) = 1\\), where $x$---the real input \\(x\\) is on input tape one which is read-only, and the witness \\(w\\) is on input tape two which is **read-once** (because otherwise the same definition is equivalent to \\(NP\\)).

---

Given this definition, [STCONN is in NL]({{< relref "KBhnl.md#stconn-is-in-nl" >}}) is in \\(\text{NL}\\), witness is simply \\(s\\) to \\(t\\) path.
