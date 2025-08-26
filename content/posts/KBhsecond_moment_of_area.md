+++
title = "second moment of area"
author = ["Houjun Liu"]
draft = false
+++

The [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) is a value which---given an origin---describes how point masses are distributed around that origin. (i.e. a number for how point masses are distributed). It is in units \\(m^{4}\\).

Take, for instance, the following picture:

{{< figure src="/ox-hugo/2022-09-05_22-46-56_screenshot.png" >}}

We have defined an origin at \\((0,0)\\) of the figure above. Furthermore, we have some \\(\rho\_{i}\\) which is the distance from that origin to each of the infinitesimal areas \\(\dd{A}\\).

Then, the [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) is defined as:

\begin{equation}
I = \iint\_{R} \rho^{2} \dd{A}
\end{equation}

This... would make sense.