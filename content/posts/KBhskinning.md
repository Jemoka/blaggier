+++
title = "skinning"
author = ["Houjun Liu"]
draft = false
+++

[skinning]({{< relref "KBhskinning.md" >}}) is a notion in graphics which solves [Cloth Fitting Task]({{< relref "KBhexample_cloth_fitting_prediction.md" >}}) which adds a prior \\(S\qty(\theta)\\) which is _not learned_ to make the learning of \\(D\qty(\theta)\\) easier

\begin{equation}
\phi = f\_{}\qty(\theta) = S \qty(\theta) + D \qty(\theta)
\end{equation}

so then, when we make a model, keeping around \\(S\qty(\theta)\\) which is learned by physical dynamics, and constraining a [displacement map]({{< relref "KBhskinning.md" >}}) \\(D\qty(\theta)\\) within each square \\(S\qty(\theta)\\).

We can then rasterize the diffs into RGB space into a grid, then we can run a CNN.
