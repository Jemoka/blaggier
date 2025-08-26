+++
title = "electric field"
author = ["Houjun Liu"]
draft = false
+++

Though [Coulomb's Law]({{< relref "KBhcoulomb_s_law.md" >}}) allow us to calculate the force between any two individual charges, one can note that most of it is independent of the second test charge. In fact, each charge emits a field around itself of the shape:

\begin{equation}
\vec{E( r)} = k \frac{q}{r^{2}} = \frac{1}{4\pi \epsilon\_{0}} \frac{q}{r^{2}}
\end{equation}

Or, you can think of it as moving a test charge \\(q\\) around the charge of interest, then calculating:

\begin{equation}
\vec{E} = \frac{\vec{F\_{e}}}{q}
\end{equation}

As you can see, if the source charge were to be positive, you have a **positive** \\(E\\) which will point _away_ from the charge, and **negative** charge \\(E\\) will point _towards_ the charge.

One institution here that the above statement provides is that **electric fields are drawn positive to negative**; so, if you placed a positive test charge in the field, it will experience a force tangent to and in the same direction that traced out by the field lines. If you have a negative test change, then it will experience a force in the opposite direction.


## additional information {#additional-information}


### tracing electric field lines {#tracing-electric-field-lines}

By tracing out electric fields and observing the lines' density, we can make a guess about how long the fields are.

{{< figure src="/ox-hugo/2023-02-12_15-10-20_screenshot.png" >}}


### composing electric fields {#composing-electric-fields}

Unsurprisingly, [superposition]({{< relref "KBhcoulomb_s_law.md#superposition" >}}) matters here as well:

If your system has multiple charges, then \\(E\_{total} = E\_{q\_1} + E\_{q\_2}\\). No surprise here.
