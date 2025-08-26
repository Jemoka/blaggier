+++
title = "products and quotients, the intuition"
author = ["Houjun Liu"]
draft = false
+++

We mentioned this in class, and I figured we should write it down.

So, if you think about the [Product of Vector Space]({{< relref "KBhproduct_of_vector_spaces.md" >}}):

\begin{equation}
\mathbb{R} \times \mathbb{R}
\end{equation}

you are essentially taking the \\(x\\) axis straight line and "duplicating" it along the \\(y\\) axis.

Now, the opposite of this is the [quotient space]({{< relref "KBhquotient_space.md" >}}):

\begin{equation}
\mathbb{R}^{2} / \left\\{\mqty(a \\\ 0): a \in \mathbb{R} \right\\}
\end{equation}

Where, we are essentially taking the line in the \\(x\\) axis and squish it down, leaving us only the \\(y\\) component freedom to play with (as each element is \\(v +\left\\{\mqty(a \\\ 0): a \in \mathbb{R} \right\\}\\)).

This also gets us the result that [two affine subsets parallel to \\(U\\) are either equal or disjoint]({{< relref "KBhparallel_linear_algebra.md#two-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-affine-subset-s-id-4c9e8fea-cd23-4a41-b85e-bb5be3867c96-parallel-to-u-are-either-equal-or-disjoint" >}}); specifically the conclusion that \\(v-w \in U \implies v+U = w+U\\): for our example, only shifting up and down should do different things; if two shifts' up-down shift is \\(0\\) (i.e. it drops us back into \\(\mqty(a \\\0)\\) land), well then it will not move us anywhere different.