+++
title = "Gauss' Law"
author = ["Houjun Liu"]
draft = false
+++

The [Gauss' Law]({{< relref "KBhgauss_law.md" >}}) is a principle of [electric flux]({{< relref "KBhflux.md#electric-flux" >}}) of uniformly distributed electric field along a surface: that, the [electric flux]({{< relref "KBhflux.md#electric-flux" >}}) through a **closed surface** is the sum of the electric [charge]({{< relref "KBhcharged.md" >}}) enclosed divided by the [permittivity of free space]({{< relref "KBhpermittivity_of_free_space.md" >}}).

That is:

\begin{equation}
\oint E \cdot dA = \frac{\sum Q}{\epsilon\_{0}}
\end{equation}


## somewhat motivating [Gauss' Law]({{< relref "KBhgauss_law.md" >}}) {#somewhat-motivating-gauss-law--kbhgauss-law-dot-md}

{{< figure src="/ox-hugo/2023-02-19_11-00-47_screenshot.png" >}}

Consider a sphere with uniformly distributed [charge]({{< relref "KBhcharged.md" >}}) on its surface. It has surface area \\(4 \pi r^{2}\\). Given the expression of [electric flux]({{< relref "KBhflux.md#electric-flux" >}}) and the fact that the origin change is in the center, and the test change is evenly distributed (i.e. \\(E\\) is held constant):

\begin{align}
\Phi\_{E} &= \int E \cdot dA \\\\
&= E\int dA
\end{align}

Now, we are integrating across the entire surface of the sphere, so it is a closed integral. So:

\begin{align}
\Phi\_{E} &= \oint E dA
\end{align}

We have the entire sum of the surfaces to be the surface area; so \\(\oint dA = 4\pi r^{2}\\). Furthermore, recall that if the field is uniform, \\(E\\) is constantly at \\(\frac{1}{4 \pi \epsilon\_{0}} \frac{Q}{r^{2}}\\).

So, substituting the two in:

\begin{align}
\Phi\_{E} &= \frac{1}{4\pi \epsilon\_{0}} \frac{Q}{r^{2}} 4\pi r^{2} \\\\
&= \frac{Q}{\epsilon\_{0}}
\end{align}

where, \\(\epsilon\_{0}\\) is the [permittivity of free space]({{< relref "KBhpermittivity_of_free_space.md" >}}).

Congrats, we have [Gauss' Law]({{< relref "KBhgauss_law.md" >}}): "the [electric flux]({{< relref "KBhflux.md#electric-flux" >}}) through the surface of an object is the sum of the [charge]({{< relref "KBhcharged.md" >}})s enclosed divided by the [permittivity of free space]({{< relref "KBhpermittivity_of_free_space.md" >}})."


## spheres {#spheres}

**electric field inside a closed conductor is zero**

This is a direct result of gauss' law
