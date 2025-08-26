+++
title = "ICLR2025 Li: MoE is secretly an embedding"
author = ["Houjun Liu"]
draft = false
+++

## motivation {#motivation}

Can we directly extract embeddings from MoE forwarding routing weights (i.e., compared to traditional residual stream information)?


## Key Insight {#key-insight}

Using residual states vs. forwarding weights as semantic searc embeddings offer complementary strengths (i.e., when one method fails, the other one succeeds more)


## Method {#method}

Create an aggregate embedding:

\begin{equation}
E\_{j} = X\_{j} + \alpha W\_{j}
\end{equation}

where \\(W\_{j}\\) is the routing weight of the residual, and \\(X\_{j}\\) is the residual.
