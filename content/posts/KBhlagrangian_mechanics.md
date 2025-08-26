+++
title = "Lagrangian Mechanics"
author = ["Houjun Liu"]
draft = false
+++

Want mechanics? No. You get energy.

First, recall the [stationary-action principle]({{< relref "KBhstationary_action_principle.md" >}}). To define a system in [Lagrangian Mechanics]({{< relref "KBhlagrangian_mechanics.md" >}}), we define a [smooth function]({{< relref "KBhsmooth_function.md" >}}) \\(L\\), called the "Lagrangian", and some configuration space (axis) \\(M\\).

By convention, \\(L=T-V\\). \\(T\\) is the kinetic energy in the system, and \\(V\\) is the potential energy in the system.

By the [stationary-action principle]({{< relref "KBhstationary_action_principle.md" >}}), then, we require \\(L\\) to remain at a critical point (max, min, saddle.) This fact allows us to calculate the equations of motion by hold \\(L\\) at such a point, and evolving the \\((T,V)\\) pair to remain at that point.

The notion of solving for optimal \\((T,V)\\), which will give us the equations of motion, is why Lagrangian multipliers were invented.

Now, here's a few results which help you deal with the [Lagrangian]({{< relref "KBhlagrangian_mechanics.md" >}}).


## Conservation of Momentum {#conservation-of-momentum}

Note that momentum is always conserved.

Recall that:

\begin{equation}
F = m a = m \dv{v}{t} = \dv{mv}{t}
\end{equation}

when \\(m\\) is constant, which it almost certainly is.

Recall the definition of momentum:

\begin{equation}
p := mv
\end{equation}

Therefore, we have that:

\begin{equation}
F = \dv{p}{t}
\end{equation}

Great, now let's recall what energy is:

\begin{equation}
W = \int F\dd{x}
\end{equation}

Substituting our definitions of force:

\begin{equation}
W = \int \dv{p}{t}\dd{x} = \int \dd{p}\dv{x}{t} = \int  v \dd{p}
\end{equation}

[something something something ask leonard]

We end up with:

\begin{equation}
\pdv{W}{v} = p
\end{equation}

how? IDK. But you then usually would use this by taking the derivative of the [Lagrangian]({{< relref "KBhlagrangian_mechanics.md" >}}) by velocity, then figuring it lingual to \\(0\\).


## Beam Theory {#beam-theory}

We begin with this Euler-Lagrange expression:

{{< figure src="/ox-hugo/2022-10-25_00-28-03_screenshot.png" >}}

these are a series of expressions derived to semiautomatically solve Largrangian expressions of expressions derived to semiautomatically solve Largrangian expressions: they are the pre-figured-out [stationary-action principle]({{< relref "KBhstationary_action_principle.md" >}}) "stationary points" with the least energy.

We want to create a [Lagrangian]({{< relref "KBhlagrangian_mechanics.md" >}}) of our system, and plug it in there.

We define the [Lagrangian]({{< relref "KBhlagrangian_mechanics.md" >}}) for this system to be

{{< figure src="/ox-hugo/2022-10-25_00-31-04_screenshot.png" >}}

Recall that the [Lagrangian]({{< relref "KBhlagrangian_mechanics.md" >}}) is defined by all kinetic energy sum minus all potential energy sum. Will investigate deeper later, but the first term is obviously the kinetic energy (1/2 mass-density velocity squared), then the subtracted potential energy term is the spring potential of the system (1/2 kx^2).

Then there's this third term. No idea.

We then try to plug stuff into that Euler-Lagrange expression. We can calculate for ourselves that:

{{< figure src="/ox-hugo/2022-10-25_00-33-06_screenshot.png" >}}

Finally, then:

{{< figure src="/ox-hugo/2022-10-25_00-33-15_screenshot.png" >}}

literally... the end. We just move stuff around and that's literally it.

{{< figure src="/ox-hugo/2022-10-25_00-33-34_screenshot.png" >}}