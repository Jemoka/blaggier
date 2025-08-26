+++
title = "flux"
author = ["Houjun Liu"]
draft = false
+++

[flux]({{< relref "KBhflux.md" >}}) is the volume of flow per unit time: multiplying the speed of flow \\(\frac{m}{s}\\) against the area \\(m^{2}\\) gives you the volume flowed per second \\(\frac{m^{3}}{s}\\).


## tilted flux {#tilted-flux}

Flow, however, is not necessarily **perpendicular** to the plain. Therefore, we only analyze the perpendicular component of the flow: that is --- \\(\Phi = Av \cos \theta\\). Why? If we tipped the plane (of certain area) up, the flow that used to cross the bottom of the plane now will not go through the plane, so we want to account for that.


## electric flux {#electric-flux}

The electric flux through an are, hopefully not unexpectedly, is:

\begin{equation}
\Phi\_{E} = \int E \cdot dA
\end{equation}

where, \\(E\\) is the [electric field]({{< relref "KBhelectric_field.md" >}}) strength though that differential area, and \\(dA\\) is the actual differential area.
