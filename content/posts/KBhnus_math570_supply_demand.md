+++
title = "NUS-MATH570 Supply Demand"
author = ["Houjun Liu"]
draft = false
+++

We are given a set of expressions:

\begin{equation}
\begin{cases}
\dv{x}{t} = \frac{x}{w}\\\\
\dv{y}{t} = \frac{xz}{w} \\\\
\dv{z}{t} = \beta y \\\\
\dv{w}{t} = \beta y
\end{cases}
\end{equation}

We are asked to analyze the solutions to this system, its periodicity, etc.


## Stability Analysis {#stability-analysis}

The immediate thing to do is to shove all of this into a Jacobian matrix---not for linearnalization, but to check how the slope changes. We will take the eigenvalues of the matrix at the critical points of the function, which will tell us whether or not the functions converge or diverge from those points.

Let's go about doing that. Let us declare:

\begin{equation}
\begin{cases}
\dv{x}{t} = \frac{x}{w} = f(x,y,z,w)\\\\
\dv{y}{t} = \frac{xz}{w} = g(x,y,z,w)\\\\
\dv{z}{t} = \beta y = h(x,y,z,w)\\\\
\dv{w}{t} = \beta y = j(x,y,z,w)
\end{cases}
\end{equation}

Then, the Jacobian is (with each cell being \\(\dv{row}{column}\\)):

|    | dx  | dy   | dz | dw        |
|----|-----|------|----|-----------|
| df | 1/w | 0    | 0  | -x/w^2    |
| dg | z/w | 0    | 0  | -(xz)/w^2 |
| dh | 0   | beta | 0  | 0         |
| dj | 0   | beta | 0  | 0         |

Properly writing that out, this means that:

\begin{equation}
J = \mqty(\frac{1}{w} & 0 & 0 & -\frac{x}{w^{2}} \\\ \frac{z}{w} & 0 & 0 & -\frac{xz}{w^{2}} \\\ 0 & \beta & 0 & 0 \\\ 0 & \beta & 0 & 0)
\end{equation}

Now, let us solve for the critical points of this expression. Setting all expressions to \\(0\\):

\begin{equation}
\begin{cases}
f = 0 \\\\
g = 0 \\\\
h = 0 \\\\
j = 0
\end{cases}
\end{equation}

we have that:

\begin{equation}
f(\dots) = \frac{x}{w} = 0
\end{equation}

so \\(x=0\\).

We have also:

\begin{equation}
h(\dots) = \beta y= 0
\end{equation}

therefore, \\(y = 0\\).

Everything else is a free variable.

Substituting that into our expressions, we have:

\begin{equation}
J\* = \mqty(\frac{1}{w} & 0 & 0 & 0 \\\ \frac{z}{w} & 0 & 0 & 0 \\\ 0 & \beta & 0 & 0 \\\ 0 & \beta & 0 & 0)
\end{equation}

We are now ready to eigenvalueize. Using technology:

```sage
w,z,b = var("w z b")
M = matrix([[1/w, 0,0,0], [z/w,0,0,0], [0,b,0,0], [0,b,0,0]])
M
```

```text
[1/w   0   0   0]
[z/w   0   0   0]
[  0   b   0   0]
[  0   b   0   0]
```

So, the moment of truth:

```sage
M.eigenvalues()
```

```text
[1/w, 0, 0, 0]
```

Excellent, so we have two eigenvalues: \\(\frac{1}{w}\\) and \\(0\\). The \\(0\\) eigenvalue indicates to us that the system has "[neutral stability]({{< relref "KBhneutral_stability.md" >}})": that there will be results for which our system: while not exponentially increasing towards asymptotically, does not settle to a stable point.


## Behavior to Extrema {#behavior-to-extrema}

The next natural question is then---even if our system doesn't settle down, does it become larger over time?  For this, we turn to the \\(\frac{1}{w}\\) term. If our initial conditions render negative \\(w\\) eventually at that point, our system will converge to unstable but containable (i.e. does not go to infinity over time); otherwise, it does becomes unstable AND uncontainable (goes to infinity.)

To do this, we need to check two things; regrettably, it seems like we could't end up with a properly described solution to evolve our variables analytically. However, we can leverage the Lipschitz condition and hand-fisted dimensional analysis to clue us in about the behavior of the system.


### Continuity {#continuity}

Recall again that our system is:

We are given a set of expressions:

\begin{equation}
\begin{cases}
\dv{x}{t} = \frac{x}{w}\\\\
\dv{y}{t} = \frac{xz}{w} \\\\
\dv{z}{t} = \beta y \\\\
\dv{w}{t} = \beta y
\end{cases}
\end{equation}

To check the Lipschitz Continuity is actually not super difficult. Research indicates that the Litpschitz condition extends in the expected manner into multiple dimensions, checking continuity with a partial in each direction.

The actual partials of the terms on the right, though, are really only discontinuous in this case when we have something under a fraction---there is fortunately no weird exponential/log/sinusoidal/radical here. Evidently, then, we loose Lipschitz continuity at \\(w=0\\). As long as we don't cross that line, anything to the left or right of it exists and is unique(?) is each dimension.


### Ham-fisting Dimensional Analysis {#ham-fisting-dimensional-analysis}

The initial conditions asks us for starting with \\(w(0)=5\sqrt 5\\). Recall that we are interested in the value of \\(w\\) at \\((x,y)=(0,0)\\).

Furthermore, recall the Lipschitz condition we discussed above. That the function is Lipschitz continuous at two boundary intervals: between \\((-\infty, 0)\\) and \\((0, \infty )\\). Starting at the conditions of \\(w(0) = 5\sqrt{5}\\) indicates that there will be no way for \\(w\\) to cross into \\(\frac{1}{w} <0\\) territory.

Note, again, that the eigenvalues of the Jacobian of the system are \\(\\{0, \frac{1}{w}\\}\\), therefore, a positive \\(\frac{1}{w}\\) will indicate that the system tends towards infinity as there is one positive eigenvalue.

However, if we started at a negative \\(w\\) in the first place, we will equally be unable to use the same initial conditions to cross into \\(\frac{1}{w} > 0\\) territory. Because of this, conditions that begin with negative \\(w\\) will be unstable but not asymptotically increasing as there will be no positive eigenvalues of its Jacobian at any given point.

{{< figure src="/ox-hugo/2022-11-27_16-28-45_screenshot.png" >}}