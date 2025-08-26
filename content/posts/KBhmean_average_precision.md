+++
title = "mean average precision"
author = ["Houjun Liu"]
draft = false
+++

-   at each point a relevant result is returned, calculate precision
-   and then average that
-   and then average the precision over all queries


## precision {#precision}

\begin{equation}
\frac{tp}{tp + fp}
\end{equation}


## recall {#recall}

\begin{equation}
\frac{tp}{tp+fn}
\end{equation}


## accuracy {#accuracy}

\begin{equation}
\frac{tp + tn}{tp+tn+fp+fn}
\end{equation}


## f1 {#f1}

\begin{equation}
F\_1 = \frac{2 (P\cdot R)}{P+R}
\end{equation}
