+++
title = "Elimination Matricies"
author = ["Houjun Liu"]
draft = false
+++

For matrix \\(A\\), we want to make a series of matrix \\(M\\) which will zero columns out. This is a algorithms approach for doing this, which is also applied columnwise.

{{< figure src="/ox-hugo/2025-01-14_12-48-49_screenshot.png" >}}

{{< figure src="/ox-hugo/2025-01-14_12-48-55_screenshot.png" >}}

nicely, we can undo our operations

{{< figure src="/ox-hugo/2025-01-14_12-49-06_screenshot.png" >}}

and you can compose them by subtracting together

{{< figure src="/ox-hugo/2025-01-14_12-51-37_screenshot.png" >}}

**\*THIS IS ONLY TRUE when we are applying in the right ordering, row \\(1\\) to row \\(2\\), etc.**


## pivoting {#pivoting}

this procedure breaks on:

\begin{equation}
A = \mqty(0 & 4 \\\ 4 & 9)
\end{equation}

because it requires dividing by \\(\frac{1}{0}\\); to "fix" this, reorder the equatinos.

you can flip both rows and columns.

-   [partial pivoting](#pivoting): swap rows to use the largest magnitue element in the column under consideration
-   [full pivoting](#pivoting): swap rows and columns to use the largest element on the upper left

Remember to change the order of \\(b\\) in the first case, and both \\(b\\) (rows) and \\(c\\) (columns) in the second case.
