+++
title = "Dynamic RC Circuits"
author = ["Houjun Liu"]
draft = false
+++

Capacitor charging:

\begin{equation}
Q = Q\_0 (1-e^{-\frac{t}{RC}})
\end{equation}

where \\(Q\\) is capacitor change at time \\(t\\), and \\(Q\_0\\) initial change, and \\(RC\\) the [resistance]({{< relref "KBhcurrent.md#resistance-of-a-wire" >}}) and [capacitance]({{< relref "KBhcapacitance.md" >}}).

Where, \\(RC\\) is called the "time constant".

\begin{equation}
I = \frac{V}{R} (e^{-\frac{t}{RC}})
\end{equation}

Note! these are _inverse_ relationships: as a capacitor CHARGE, the current DROPS.
