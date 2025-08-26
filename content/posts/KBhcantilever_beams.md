+++
title = "Cantilever Beams"
author = ["Houjun Liu"]
draft = false
+++

A [Cantilever]({{< relref "KBhcantilever_beams.md" >}}) beam is a rigid structure which is extended horizontally and supported on one end.

---


## Working with [Cantilever Beams]({{< relref "KBhcantilever_beams.md" >}}) {#working-with-cantilever-beams--kbhcantilever-beams-dot-md}


### curvature {#curvature}

Let's first define a function:

\begin{equation}
w(x)
\end{equation}

this represents the deflection of the beam at point \\(x\\). We will begin by taking its derivative by location:

\begin{equation}
\Delta w = \pdv{w}{x}
\end{equation}

is the change in deflection over location. "How much deviation of the beam from the resting axi is there as you run along it?"

We now take another derivative:

\begin{equation}
k = \pdv[2]{w}{x}
\end{equation}

\\(k\\) is defined as the "[Curvature](#curvature)" of the beam: the "change in the change of bentness." The intuition is essentially this:

-   a straight, flat beam fixed an one end has \\(\Delta w=0\\), \\(k=0\\). It does **not change** from its resting axis, and its rate of change from resting does ****not change****
-   a straight, slanted beam fixed at one end has \\(\Delta w=C, k=0\\). It ****changes**** from its resting axis with a linear rate, and its rate of change from resting does ****not change****.
-   a _curved_, slanted beam fixed at one end has \\(\Delta \omega = f(x), k=C\\). It ****changes**** from its resting axis non-linearly (hence curving at a function of \\(x\\)), and its rate of change from resting is **changing** at a constant \\(c\\).


### flexural rigidity {#flexural-rigidity}

[Flexural Rigidity](#flexural-rigidity) is the "force couple" ("rate") which relates the [Curvature](#curvature) of an non-rigid body and how much torque it actually generates given the object's properties.

Recall first our [Elastic Modulus]({{< relref "KBhelastic_modulus.md" >}}) \\(E\\): it is a fraction of \\(\frac{stress}{strain}\\) measured in Pascals (force per unit area, i.e. \\(\frac{N}{m^{2}} = \frac{kg}{ms^{2}}\\)).

Find also [second moment of area]({{< relref "KBhsecond_moment_of_area.md" >}}) \\(I\\): a value in units \\(m^{4}\\) which is the sum (by area) of the squared displacement of each infinitesimal area to the axis of origin.

And we bam! we multiply the two things together, creating a value \\(EI\\) in units \\(Nm^{2}\\).


### bending moment {#bending-moment}

[bending moment](#bending-moment) is the [torque from bending](#bending-moment). It is expressed usually in \\(M\\). As mentioned in the section about [Flexural Rigidity](#flexural-rigidity), we can use that value to relate \\(M\\) with the actual [Curvature](#curvature) of your object.

Specifically, that:

\begin{equation}
M = -(EI)k = -EI\pdv[2]{w}{x}
\end{equation}

"[bending moment](#bending-moment) is [flexural rigidity](#flexural-rigidity) times [curvature](#curvature)" =&gt; "[how much force per distance you exert] is the result of [how bendy your thing is] times [how much you bent it]."

There is a negative in front because if you pull out your lovely little right hand, point your thumb forward (+y), start curling your nice fingers around your nice hand (-z), you will notice that you are wrapping them downwards (the - part of the z) which is rather not positive. If we want \\(\pdv[2]{w}{x}\\) to be positive (bend up), we will need to chuck a negative in front of it to make both things positive.

This relation, while intuitive, is not from first-principles. In order to get such a derivation, [you read Wikipedia](https://en.wikipedia.org/wiki/Euler%E2%80%93Bernoulli_beam_theory#Derivation_of_the_bending_equation).


### magic {#magic}

We can take two derivatives by location---

\begin{equation}
\pdv[2] x \qty(EI \pdv[2]{w}{x}) = -\mu \pdv{w}{t}+q(x)
\end{equation}

where \\(\mu\\) is the mass density, \\(q(x)\\) is the force applied (in Newtons) by area. this is magic. Will come back to it.


## Solving this? {#solving-this}

See [Finite Difference Method]({{< relref "KBhfinite_difference_method.md" >}})


## Actually attempting to solve it {#actually-attempting-to-solve-it}

[Numerical Cantileaver Simulations]({{< relref "KBhnumerical_cantileaver_simulations.md" >}})


## Working on Deformation {#working-on-deformation}