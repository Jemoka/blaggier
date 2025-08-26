+++
title = "Euler-Bernoulli Theory"
author = ["Houjun Liu"]
draft = false
+++

The [Euler-Bernoulli Theory]({{< relref "KBheuler_bernoulli_theory.md" >}}) is a theory in dynamics which describes how much a beam deflect given an applied load.


## Assumptions {#assumptions}

For [Euler-Bernoulli Theory]({{< relref "KBheuler_bernoulli_theory.md" >}}) to apply in its basic form, we make assumptions.

-   The "beam" you are bending is modeled as a 1d object; it is only long and is not wide
-   For this page, \\(+x\\) is "right", \\(+y\\) is "in", and \\(+z\\) is "up"
-   Probably more, but we only have this so far.
-   the general form of the [Euler-Bernoulli Theory]({{< relref "KBheuler_bernoulli_theory.md" >}}) assumes a freestanding beam


## Basic Statement {#basic-statement}

The most basic for the [Euler-Bernoulli Equation]({{< relref "KBheuler_bernoulli_theory.md" >}}) looks like this:

\begin{equation}
\dv[2]x \qty(EI\dv[2]{w}{x}) =q(x)
\end{equation}

where, \\(w(x)\\) is the deflection of the beam at some direction \\(z\\) at position \\(x\\). \\(q\\) is the load distribution (force per unit length, similar to pressure which is force per unit area, at each point \\(x\\)). \\(E\\) is the [Elastic Modulus]({{< relref "KBhelastic_modulus.md" >}}) of the beam, and \\(I\\) the [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) of the beam's cross section.

Note that \\(I\\) must be calculated with respect to the axis perpendicular to the load. So, for a beam placed longside by the \\(x\\) axis, and pressed down on the \\(z\\) axis, \\(I\\) should be calculated as: \\(\iint z^{2}\dd{y}\dd{z}\\).

Pretty much all the time, the [Elastic Modulus]({{< relref "KBhelastic_modulus.md" >}}) \\(E\\) (how rigid your thing is) and [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) \\(I\\) (how distributed are the cross-section's mass) are constant; therefore, we factor them out, making:

\begin{align}
&\dv[2]x \qty(EI\dv[2]{w}{x}) =q(x) \\\\
\Rightarrow\ & EI \qty(\dv[2]x \dv[2]{w}{x} )=q(x) \\\\
\Rightarrow\ & EI \dv[4]{w}{x} = q(x)
\end{align}

This is also apparently used everywhere in engineering to figure out how bendy something will be given some \\(q\\) put along the beam.

Ok, let's take the original form of this equation and take some integrals to see the edges of this thing:

\begin{equation}
\dv[2]{x} \qty(EI \dv[2]{w}{x}) = q(x)
\end{equation}

First things first, let's take a single integral:

\begin{equation}
\dv{x} \qty(EI \dv[2]{w}{x}) = -Q
\end{equation}

This is the total shear force on the material (the sum of all forces applied to all points \\(\int q(x)\\).) We have a sign difference

---

old notes

Let's take some [transverse load]({{< relref "KBhtransverse_loaod.md" >}}) \\(q(x,t)\\), applied at time \\(t\\) at location \\(x\\). To model the load/bending/vibration of the rod, we first have to know a few more things.

First, figure the [Young's Modulus]({{< relref "KBhyoung_s_modulus.md" >}}) \\(E\\) of the thing that you are bending.

Of course, we also want to know what shape our thing is; more specifically, we want to know how the point masses in our thing is distributed. So we will also need the [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) \\(I\\).

Finally, we should have \\(m\\) mass per unit length of the rod we are bending.

The [Euler-Bernoulli Theory]({{< relref "KBheuler_bernoulli_theory.md" >}}) tells us that the deflection (distance from the neutral-axis) each point \\(x\\) in the material should get is:

\begin{equation}
EI \pdv[4]{w}{x} + m \pdv[2]{w}{t} = q(x,t)
\end{equation}

Solving this lovely [Differential Equation]({{< relref "KBhdiffeq_intro.md" >}}) would tell you how far away each point diverges from the neutral point.

Tracing this out over \\((x,t)\\), we can get some trace of how the thing vibrates by measuring the behavior of \\(\omega\\).


## free vibrations in [Euler-Bernoulli Theory]({{< relref "KBheuler_bernoulli_theory.md" >}}) {#free-vibrations-in-euler-bernoulli-theory--kbheuler-bernoulli-theory-dot-md}

If no time-varying \\(q\\) exists, we then have:

\begin{equation}
EI \pdv[4]{w}{x} + m \pdv[2]{w}{t} = 0
\end{equation}

And then some magical [Differential Equations]({{< relref "KBhdiffeq_intro.md" >}}) happen. I hope to learn them soon.

{{< figure src="/ox-hugo/2022-09-05_23-15-31_screenshot.png" >}}

{{< figure src="/ox-hugo/2022-09-05_23-16-41_screenshot.png" >}}

The result here is significant: if we can figure the actual rate of vibrations which we expect.

However, this doesn't really decay---but [funing tork]({{< relref "KBhtuning_forks.md" >}})s do. How?

Apparently because air resistance---Zachary Sayyah. So Sasha time.