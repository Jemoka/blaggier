+++
title = "Communication Complexity (Chapter)"
author = ["Houjun Liu"]
draft = false
+++

[Communication Complexity]({{< relref "KBhcommunication_complexity.md" >}}) tries to model one aspect of **distributed computing**.

See [Communication Complexity]({{< relref "KBhprotocol.md#communication-complexity" >}})

Let us consider two parties---Alice and Bob. They want to compute some function:

\begin{equation}
f: \qty{0,1}^{\*} \times \qty{0,1}^{ \*} \to \qty{0,1}
\end{equation}

against two inputs held by Alice and Bob respectively, \\(x \in \qty{0,1}^{\*}\\) and \\(y \in \qty{0,1}^{ \*}\\), where \\(|x| = |y| = n\\), where \\(n\\) is very large (i.e. just sending all of \\(x\\) over to the other party and compute \\(f\\) on one end isn't good).

Our goal is to compute \\(f(x,y)\\) by communicating as few bits as possible.

---

Every step, a bit is sent. Suppose Alice and Bob both holds some encoding function \\(A, B\\), whereby the first argument is their intended new bit of message and the second argument is the message they received thus far, so:

-   \\(A(x, \epsilon) = 0\\)
-   \\(B(y, 0) = 1\\)
-   \\(A(x,01) = 1\\)
-   \\(B(y, 011) = 0\\)
-   \\(A(x,0110) = STOP\\)

    and so on. WLOG we call the last bit sent before STOP as \\(f(x)\\), the thing that Alice and Bob were trying to compute

this is a [protocol]({{< relref "KBhprotocol.md" >}})

---


## concepts {#concepts}

-   [protocol]({{< relref "KBhprotocol.md" >}})
