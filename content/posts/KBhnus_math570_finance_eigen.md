+++
title = "Finance (Eigen)"
author = ["Houjun Liu"]
draft = false
+++

We have a system of differential equations:

\begin{equation}
\begin{cases}
\dv{I}{t} = -0.73 U(t) + 0.0438 + 0.4 \dv{M}{t} \\\\
\dv{U}{t} = 0.4I-0.012 \\\\
\dv{G}{t} = \dv{M}{t} - I(t)
\end{cases}
\end{equation}

where, \\(M\\) is a sinusoidal function which we can control.

We hope for this system to be as stable as possible.

First, let's try to get a general solution of the system. The linearized(ish) solution takes the shape of:

\begin{equation}
\dv t \mqty(I \\\ U \\\ G) = \mqty(0 & -x\_1 & 0 \\\ x\_4 & 0 & 0 \\\ -1 & 0 & 0 ) \mqty(I \\\ U \\\ G)+ \dv{M}{t}\mqty(x\_3 \\\ 0 \\\ 1) + \mqty(x\_2 \\\ x\_5 \\\ 0)
\end{equation}

With:

\begin{equation}
\begin{cases}
x\_1 = 0.73 \\\\
x\_2 = 0.0438 \\\\
x\_3 = 0.4 \\\\
x\_4 = 0.4 \\\\
x\_5 = 0.012
\end{cases}
\end{equation}

as input parameters. We will follow the method of underdetermined coefficients: taking the homogeneous solution first and then using it to get the general solution.


## Homogeneous System {#homogeneous-system}

To get the characteristic equation of the [homogeneous]({{< relref "KBhhomogeneity.md" >}}) system, we take the [eigenvalue]({{< relref "KBheigenvalue.md" >}}) of the system:

```sage
x1,x2,x3,x4,x5 = var("x1 x2 x3 x4 x5")
matrix = matrix([[0, -x1, 0], [x4, 0,0], [-1, 0,0]])
matrix.eigenvalues()
```

```text
[-sqrt(-x1*x4), sqrt(-x1*x4), 0]
```

Awesome. So we can see that our characteristic equation will be:

\begin{align}
\mqty(I \\\ U \\\ G)\_{h} &= \vec{c\_0} e^{0t} + \vec{c\_1} e^{\sqrt{-x\_1x\_4}t} + \vec{c\_2} e^{-\sqrt{-x\_1x\_4}t} \\\\
&= \vec{c\_0} + \vec{c\_1}e^{i \sqrt{x\_1x\_4}t} + \vec{c\_2} e^{-i \sqrt{x\_1x\_4}t}
\end{align}

Now, the two \\(e^{ix}\\) functions, one positive and one negative, inspires us to the following results:

\begin{equation}
\begin{cases}
\cos x = \frac{e^{ix}+e^{-ix}}{2}\\\\
\sin x = \frac{e^{ix}-e^{-ix}}{2i}\\\\
\end{cases}
\end{equation}

Treating \\(\frac{1}{2}\\) and \\(\frac{1}{2i}\\) (which we can do, because the constants can be defined on any space desired), we have:

\begin{align}
\cos x + \sin x &= \frac{e^{ix}+e^{-ix}}{2} + \frac{e^{ix}-e^{-ix}}{2i} \\\\
&= A\_1e^{ix}+A\_2e^{-ix}
\end{align}

for some constant scalars \\(A\_1\\) and \\(A\_2\\)

"Wait, doesn't the \\(e^{-ix}\\) and \\(-e^{-ix}\\) subtract each other out on the numerator? No, notice the denominator is different, so we will have \\((A-B)e^{-ix}\\) after we add the two expressions for some constants \\(A\\) and \\(B\\), it doesn't cancel out."

Performing this substitution allows us to reveal the sinusoidal nature of our characteristic equation, and get rid of those pesky \\(i\\).

\begin{align}
\mqty(I \\\ U \\\ G)\_{h} &= \vec{c\_0} e^{0t} + \vec{c\_1} e^{\sqrt{-x\_1x\_4}t} + \vec{c\_2} e^{-\sqrt{-x\_1x\_4}t} \\\\
&= \vec{c\_0} + \vec{c\_1}e^{i \sqrt{x\_1x\_4}t} + \vec{c\_2} e^{-i \sqrt{x\_1x\_4}t}  \\\\
&= \vec{c\_0} + \vec{c\_1'} \cos (\sqrt{x\_1x\_4} t)+ \vec{c\_2'} \sin (\sqrt{x\_1x\_4} t)
\end{align}

The primes here indicate that \\(\vec{c\_1} \neq \vec{c\_1'}\\) because the initial conditions shift when we move to sinusoidal functions.

Writing this out completely, ditching the vector expressions, we have

\begin{equation}
\begin{cases}
I\_{h}(t) = I\_0 + I\_1\cos(\sqrt{x\_1x\_4}t) + I\_2\sin (\sqrt{x\_1x\_4}t) \\\\
U\_{h}(t) = U\_0 + U\_1\cos(\sqrt{x\_1x\_4}t) + U\_2\sin (\sqrt{x\_1x\_4}t) \\\\
G\_{h}(t) = G\_0 + G\_1\cos(\sqrt{x\_1x\_4}t) + G\_2\sin (\sqrt{x\_1x\_4}t)
\end{cases}
\end{equation}

as the homogenous solutions for the equation.


## Underdetermined Coefficients {#underdetermined-coefficients}

Recall the expression we are trying to solve is:

\begin{equation}
\begin{cases}
\dv{I}{t} = -0.73 U(t) + 0.0438 + 0.4 \dv{M}{t} \\\\
\dv{U}{t} = 0.4I-0.012 \\\\
\dv{G}{t} = \dv{M}{t} - I(t)
\end{cases}
\end{equation}

We dealt with the homongenous part... but _not_ the next two parts! Let's do that.

In order to do that, we will use the method of underdetermined coefficients. Recall that:

\begin{equation}
\dv t \mqty(I \\\ U \\\ G) = \mqty(0 & -x\_1 & 0 \\\ x\_4 & 0 & 0 \\\ -1 & 0 & 0 ) \mqty(I \\\ U \\\ G)+ \dv{M}{t}\mqty(x\_3 \\\ 0 \\\ 1) + \mqty(x\_2 \\\ x\_5 \\\ 0)
\end{equation}

For now, we will add the extra \\(\dv{M}{t}\\) term explicitly later. Let us solve for the undetermined coefficients based on the assumption that each function (except for the attenuation by \\(M\\)) is linear:

\begin{equation}
y(t) = at
\end{equation}

("it linearly changes over time")

Its derivative by time is:

\begin{equation}
y'(t) = a
\end{equation}

Plugging that into our expressions above:

\begin{equation}
\mqty(a\_{I} \\\ a\_{U} \\\ a\_{G} ) = \mqty(0 & -x\_1 & 0 \\\ x\_4 & 0 & 0 \\\ -1 & 0 & 0 ) \mqty(a\_{I}t \\\ a\_{U}t \\\ a\_{G} t) + \dv{M}{t} \mqty(x\_3 \\\ 0 \\\ 1) + \mqty(x\_2 \\\ x\_5 \\\ 0)
\end{equation}

And now, arranging the right expressions such that we can clearly see each coefficient line up, relegating \\(M\\) to the side, and actually multiplying:

\begin{equation}
\mqty(a\_{I} \\\ a\_{U} \\\ a\_{G} ) = \mqty(0 & -x\_1 & 0 \\\ x\_4 & 0 & 0 \\\ -1 & 0 & 0 ) \mqty(a\_{I}t + x\_2 \\\ a\_{U}t + x\_5 \\\ a\_{G} t) + \dv{M}{t} \mqty(x\_3 \\\ 0 \\\ 1)
\end{equation}

\begin{equation}
\mqty(a\_{I} \\\ a\_{U} \\\ a\_{G} ) = \mqty(-x\_1  (a\_{U}t + x\_5) \\\ x\_4 (a\_{I}t + x\_2 )\\\ 1 a\_{G} t)  + \dv{M}{t} \mqty(x\_3 \\\ 0 \\\ 1)
\end{equation}

Awesome, so now, matching coefficients, we have:

\begin{equation}
\begin{cases}
a\_{I} = -x\_1x\_5 \\\\
a\_{U} = x\_4x\_2 \\\\
a\_{G} = 0
\end{cases}
\end{equation}

Which I honestly could have told you by.... Just staring at the equations. furthermore, we will add the requisite shift of \\(\dv{M}{t}\\) to the right equations when appropriate.

So, adding the \\(M(t)\\) in place, our particular solutions are:

\begin{equation}
\begin{cases}
I\_{p}(t) = -x\_1x\_5 t + x\_3 M(t) \\\\
U\_{p}(t) = x\_4x\_2t \\\\
G\_{p}(t) = M(t)
\end{cases}
\end{equation}

as the homogenous solutions for the equation.


## General Solution {#general-solution}

Let us know put the general and particular solutions together:

Recall that:

\begin{equation}
\begin{cases}
I\_{h}(t) = I\_0 + I\_1\cos(\sqrt{x\_1x\_4}t) + I\_2\sin (\sqrt{x\_1x\_4}t) \\\\
U\_{h}(t) = U\_0 + U\_1\cos(\sqrt{x\_1x\_4}t) + U\_2\sin (\sqrt{x\_1x\_4}t) \\\\
G\_{h}(t) = G\_0 + G\_1\cos(\sqrt{x\_1x\_4}t) + G\_2\sin (\sqrt{x\_1x\_4}t)
\end{cases}
\end{equation}

\begin{equation}
\begin{cases}
I\_{p}(t) = -x\_1x\_5 t + 0.4M(t) \\\\
U\_{p}(t) = x\_4x\_2t \\\\
G\_{p}(t) = M(t)
\end{cases}
\end{equation}

So, by linear additivity, we have:

\begin{equation}
\begin{cases}
I}(t) = I\_0 + I\_1\cos(\sqrt{x\_1x\_4}t) + I\_2\sin (\sqrt{x\_1x\_4}t) -x\_1x\_5 t + 0.4M(t)  \\\\
U}(t) = U\_0 + U\_1\cos(\sqrt{x\_1x\_4}t) + U\_2\sin (\sqrt{x\_1x\_4}t) + x\_4x\_2t\\\\
G}(t) = G\_0 + G\_1\cos(\sqrt{x\_1x\_4}t) + G\_2\sin (\sqrt{x\_1x\_4}t) + M(t)
\end{cases}
\end{equation}


## Simplification {#simplification}

Recall that our function \\(M(t)\\) is a sinusoidal function. And it is being added to some linear combination of sinusoidal functions in each term of our general solution above. Meaning, each of our equations are of the shape:

[some vertical shift] + [cosine something] + [sine something] + [optional linear drift] + [M(t)]

For us to use \\(M(t)\\) to attenuate/stabilize the system, the best we can do is to dampen the sinusoidal part (because \\(M\\) itself is sinusoidal). We can't do much of anything else.

To do this, we want ideally \\(M(t)\\) be \\(\pi\\) ahead of the \\(\cos  + \sin\\) waves in each of the functions; that is, we want \\(M\\) to be out of phase exactly.

\\(\cos +\sin\\) is harder to be out of phase than just \\(\sin\\); if the latter, we can just figure out its frequency and shift, and be \\(\pi\\) ahead of it.

Fortunately, our \\(\cos\\) and \\(\sin\\) terms have exactly the same contents; therefore, their sum form just another shifted sine wave (don't believe me, plot it!). Therefore, we will now endeavor to combine them.


### Aside: \\(A\cos (x)+B\sin (x)\\) {#aside-a-cos--x--plus-b-sin--x}

Here's how you go about the combination. We desire that \\(A\cos (x) + B \sin (x)\\) be a single shifted sine function; we know this is true (by plottingish or using imaginary numbers), so we will set the sum to some arbitrary sine function and solve for its correct coefficients to mimic the sum; that is:

\begin{equation}
r \sin (x + \alpha) := A\cos (x) + B \sin (x)
\end{equation}

we know desire the coefficients \\(r, \alpha\\) that would make this true.

Recall \\(\sin a+b =  \cos a\sin b + \sin a\cos b\\); so:

\begin{align}
r \sin (x+\alpha) & = r(\cos x \sin \alpha + \sin x \cos \alpha )  \\\\
&= r \sin x \cos \alpha  + r \cos x \sin \alpha \\\\
&= (r \sin \alpha) \cos x + (r \cos \alpha) \sin x
\end{align}

Now, we have:

\begin{equation}
(r \sin \alpha) \cos x + (r \cos \alpha) \sin x := A\cos (x) + B \sin (x)
\end{equation}

Therefore:

\begin{equation}
\begin{cases}
r\sin \alpha = A \\\\
r \cos \alpha = B
\end{cases}
\end{equation}

And we desire correct coefficients \\(r, \alpha\\) in terms of \\(A, B\\).

Dividing the two expressions:

\begin{equation}
\frac{\sin \alpha }{\cos \alpha } = \frac{A}{B}
\end{equation}

Therefore, \\(\alpha = \tan^{-1}\qty(\frac{A}{B})\\).

Finally, recall that \\(\sin^{2} x +\cos^{2} x =1\\) for any \\(x\\). We will use this fact to get \\(r\\).

\begin{align}
&\sin^{2} \alpha + \cos^{2} \alpha = 1  \\\\
\Rightarrow\ & \qty(\frac{A}{r})^{2} + \qty(\frac{B}{r})^{2}  =1
\end{align}

By rearranging our pair of expressions above to get \\(\sin \alpha\\) and \\(\cos \alpha\\) by itself.

Finally, we have:

\begin{align}
1 &= \qty(\frac{A}{r})^{2} + \qty(\frac{B}{r})^{2}  \\\\
&= \frac{A^{2} + B^{2}}{r^{2}}
\end{align}

So:

\begin{equation}
r^{2} = \sqrt{A^{2}+B^{2}}
\end{equation}

Finally, we have that:

\begin{equation}
A\cos (x)+B\sin (x) = \sqrt{A^{2}+B^{2}} \sin \qty(x + \tan^{-1}\qty(\frac{A}{B}))
\end{equation}


### Using the above result {#using-the-above-result}

Recall we are working with:

\begin{equation}
\begin{cases}
{I}(t) = I\_0 + I\_1\cos(\sqrt{x\_1x\_4}t) + I\_2\sin (\sqrt{x\_1x\_4}t) -x\_1x\_5 t + 0.4M(t)  \\\\
{U}(t) = U\_0 + U\_1\cos(\sqrt{x\_1x\_4}t) + U\_2\sin (\sqrt{x\_1x\_4}t) + x\_4x\_2t\\\\
{G}(t) = G\_0 + G\_1\cos(\sqrt{x\_1x\_4}t) + G\_2\sin (\sqrt{x\_1x\_4}t) + M(t)
\end{cases}
\end{equation}

And we desire to use the above to simplify it. Plugging this expression directly in, for instance, to the first expression, we have:

\begin{equation}
I(t) = I\_0 + \sqrt{ {I\_{1}}^{2} + {I\_{2}}^{2} } \sin \qty(\sqrt{x\_1x\_4}t + \tan^{-1} \qty(\frac{I\_1}{I\_2})) -x\_1x\_5 t + 0.4M(t)
\end{equation}

Notice! Even if the shift changes based on each function, the _frequency_ of the oscillation of each function is the same---

as each \\(\cos x + \sin x\\) sinusoidal, after applying the identity derived above, takes the form of:

\begin{equation}
A\sin (\sqrt{x\_1x\_4}t + \tan^{-1}(B))
\end{equation}

we can see that they all oscillate with frequency of

\begin{equation}
\frac{\sqrt{x\_1x\_4}}{2\pi}
\end{equation}

"how many \\(2\pi\\) can our function go in \\(1\\) second?"

Therefore, the control mechanism must work in frequencies of \\(\frac{\sqrt{x\_1x\_4}}{2\pi}\\) (and best be exactly or as best as possible out of phase by being phase shifted by \\(\tan^{-1}(B) + \pi\\)) to be able to attenuate the sinusoidal the best.

We can allow \\(M(t)\\) to go to any sinusoidal function, and compose them together:

\begin{equation}
I(t) = I\_0 + \sqrt{ {I\_{1}}^{2} + {I\_{2}}^{2} } \sin \qty(\sqrt{x\_1x\_4}t + \tan^{-1} \qty(\frac{I\_1}{I\_2})) -x\_1x\_5 t + 0.4 (c \sin(ax+b))
\end{equation}

Ok, let us now spend another aside to figure out the frequency and amplitude of this new curve, which will be our target upon which we are optimizing:


#### Attenuating the Sums of Sinusoidals {#attenuating-the-sums-of-sinusoidals}

We now have:

\begin{equation}
a\_1\sin (b\_1t + c\_1) + a\_2 \sin (b\_2t+c\_2)
\end{equation}

The question is how we can make the first wave destructively interfere with the second one.