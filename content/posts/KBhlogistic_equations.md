+++
title = "logistic equation"
author = ["Houjun Liu"]
draft = false
+++

Consider:

\begin{equation}
P' = 2P(100-P)
\end{equation}

for a motivation, see [petri dish]({{< relref "KBhpetri_dish.md" >}}).


## Solution {#solution}

Assuming \\(P\\) never reaches 100

\begin{equation}
\int \frac{\dd{P}}{P(100-P)} \dd{P}= \int 2 \dd{t}
\end{equation}

Partial fractions time:

\begin{equation}
\frac{1}{100} \int  \qty(\frac{1}{p} + \frac{1}{100-p})\dd{P} = \frac{1}{100} \ln |p| - \ln |100-p| = 2t+C
\end{equation}

Remember now log laws:

\begin{equation}
\frac{1}{100} \ln \left| \frac{p}{100-p} \right| = 2t+C
\end{equation}

And finally, we obtain:

\begin{equation}
\qty | \frac{p}{100-p} | = e^{200t + C}
\end{equation}

We can get rid of the absolute value by reshaping the fraction:

\begin{equation}
 \frac{p}{100-p} = ke^{200t}
\end{equation}

Finally, we solve for \\(p\\):

\begin{equation}
p(t) = \frac{100k e^{200t}}{1+ke^{200t}} = \frac{100k}{e^{-200t}+k}
\end{equation}

Note!

-   as \\(t \to -\infty\\), we have \\(p \to 0\\)
-   as \\(t \to +\infty\\), we have \\(p \to 100\\)
