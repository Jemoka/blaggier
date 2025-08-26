+++
title = "Neural Network Verification"
author = ["Houjun Liu"]
draft = false
+++

We can think of a neural network as a roll-out of a system. For ReLU networks in particular, we can compute the _exact_ [reachable set]({{< relref "KBhreachability_analysis.md#reachability-analysis" >}})!

Suppose we have the input set \\(s\_1\\); let's consider:

\begin{equation}
z\_1 = W\_1 s\_1 + b\_1
\end{equation}

after one linear layer. We can then apply a nonlinear function to it. The beauty with ReLU nonlinearities is that we can split our network into one set per quadrant, and consider what ReLU will do to it.

{{< figure src="/ox-hugo/2025-02-20_13-39-04_screenshot.png" >}}

As you can see this blows up at high dimensions. Instead, we can try an [overapproximation]({{< relref "KBhoverapproximation.md#overapproximation" >}})!

Pick a set of bounding vectors \\(d\\) (edges), and we want to pick a vector \\(s\\)

\begin{equation}
\max\_{s} d^{T} s\_{d}
\end{equation}

such that

-   \\(s\_1 \in \mathcal{S}\\)
-   \\(s\_{d} = f\_{n}\qty(s\_{1})\\)

such that each next step is a possible output for our network.
