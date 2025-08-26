+++
title = "Second-Order Linear Differential Equations"
author = ["Houjun Liu"]
draft = false
+++

Here's a general form:

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = f(t)
\end{equation}

see:

-   [solving homogeneous constant coefficient higher-order differential equations](#solving-homogeneous-constant-coefficient-higher-order-differential-equations)
-   and more generally, using [matrix exponentiation]({{< relref "KBhmatrix_exponentiation.md" >}}), [solving homogeneous higher-order differential equations](#solving-homogeneous-higher-order-differential-equations)


## solving homogeneous higher-order differential equations {#solving-homogeneous-higher-order-differential-equations}

This problem because easier if the right side is \\(0\\).

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = 0
\end{equation}

The general goal to solve in this case is to make this a system of [First-Order Differential Equations]({{< relref "KBhlinear_non_seperable_equation.md#solving-differential-equations" >}}).

To do this, we begin by making:

\begin{equation}
y = \dv{x}{t}
\end{equation}

Therefore, we can change the first equation:

\begin{equation}
a \dv{y}{t} + by + cx = 0
\end{equation}

Solving both of these conditions, we form a system of linear equations:

\begin{align}
&\dv{x}{t}=y \\\\
&\dv{y}{t} = \frac{-c}{a}x-\frac{b}{a}y
\end{align}

We are now first-order, so we can put this into a matrix equation:

\begin{equation}
\dv t \begin{pmatrix}
x \\\ y
\end{pmatrix}  = \begin{pmatrix}
0 & 1 \\\ -\frac{c}{a} & \frac{-b}{a}
\end{pmatrix}  \begin{pmatrix}
x \\\ y
\end{pmatrix}
\end{equation}

Now! We have an equation:

\begin{equation}
\dv{t}v = Av
\end{equation}

The result above shows that the transformations \\(\dv{t}\\) and \\(A\\) are isomorphic. Therefore, we now attempt to characterize \\(A\\) to solve this expression.

Let's begin. We will first shove that \\(v\\) on top of the differential for aesthetics:

\begin{equation}
\dv{v}{t} = Av
\end{equation}

This expression is actually nicely [seperable]({{< relref "KBhlinear_constant_coefficient_equation.md#solving-separable-differential-equations" >}}), so we shall endeavor to separate it:

\begin{equation}
\dd{v} = Av\dd{t}
\end{equation}

Of course, \\(v\\) is a function of \\(t\\). Therefore, the right side would be woefully complicated. Therefore, we shall do this handwavy thing where we go:

\begin{equation}
\frac{1}{v}\dd{v} = A\dd{t}
\end{equation}

Now, \\(A\\) is not a function in \\(t\\) --- its just some constants! So, we can integrate this safely without much trouble:

\begin{equation}
\int  \frac{1}{v}\dd{v} =\int  A\dd{t}
\end{equation}

To get:

\begin{equation}
\ln v = t A + C
\end{equation}

Note the order as \\(t\\) is a constant. Finally, we will invert the natural log and get \\(v\\) back:

\begin{equation}
v = e^{tA+C}
\end{equation}

Excellent. We will now apply some [log/exponent laws]({{< relref "KBhlog_laws.md" >}}):

\begin{equation}
v = e^{tA}e^{C} = e^{tA}C
\end{equation}

~~this is so very handwavy. \\(C\\) is technically a vector here... long story and iffy understanding~~

Ok, how do we go about solving \\(x\\)?

Note now that \\(v=(x\ y)\\), so we will expand that:

\begin{equation}
\begin{pmatrix}
x \\\ y
\end{pmatrix} = e^{tA}\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}
\end{equation}

where, as we defined above \\(y=\dv{x}{t}\\) (each integral needing a different constant.)

Now. remember that \\(A\\) is diagonalizable; and so will \\(tA\\) (citation needed, but intuition is that scaling eigenvalues do nothing anyways). So, to make this exponentiation easier, we will diagonalize it.

We now have that

\begin{equation}
e^{tA} =  \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}})\mqty(v\_1& \dots& v\_{m})^{-1}
\end{equation}

([how?]({{< relref "KBhraising_e_to_a_matrix.md" >}}))

Ok. Finally, we will take the binroller that is "constancy" and apply it to \\(e^{tA}\\). This took quite a bit of time for me to get, so feel free to take some time to get it too.

This all hinges upon the fact that \\(C\\) is a constant, so multiplying any constant to it still makes it \\(C\\).

So far, we have that:

\begin{equation}
\begin{pmatrix}
x \\\ y
\end{pmatrix} = e^{tA}\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}  = \qty(\mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}})\mqty(v\_1& \dots& v\_{m})^{-1} )\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}
\end{equation}

Remember, now, that \\(v\_1\dots v\_{}\\) and its inverses are nothing but vectors filled with a lot of scalars. And any scalar \\(\alpha\\) times a constant still results in the (a new) constant: \\(\alpha C =C\\). So, we will steamroll \\(\mqty(x\_0&y\_0)\\) over the right side eigenbases matrix (multiplying a constant vector to any'ol matrix will just get a new set of constants back) to get:

\begin{align}
\begin{pmatrix}
x \\\ y
\end{pmatrix} &= \qty(\mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}})\mqty(v\_1& \dots& v\_{m})^{-1} )\begin{pmatrix}
x\_0 \\\ y\_0
\end{pmatrix}  \\\\
&= \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}}) \begin{pmatrix}
C\_1 \\\ C\_2
\end{pmatrix}
\end{align}

Now, the middle thing has \\(t\\) in it! (the input!) So, we can't just steamroll now. We have to preserve the middle part.

\begin{align}
\begin{pmatrix}
x \\\ y
\end{pmatrix} &= \mqty(v\_1& \dots& v\_{m})\mqty(\dmat{e^{t\lambda\_{1}}, \dots, e^{t\lambda\_{m}}}) \begin{pmatrix}
C\_1 \\\ C\_2
\end{pmatrix}  \\\\
&= \mqty(v\_1& \dots& v\_{m}) \begin{pmatrix}
C\_1 e^{t\lambda\_{1}} \\\ C\_2 e^{t\lambda\_{2}}
\end{pmatrix}
\end{align}

And finally, we keep steamrolling:

\begin{align}
\begin{pmatrix}
x \\\ y
\end{pmatrix} &= \mqty(v\_1& \dots& v\_{m}) \begin{pmatrix}
C\_1 e^{t\lambda\_{1}} \\\ C\_2 e^{t\lambda\_{2}} \end{pmatrix}\\\\
&= \mqty({C\_{1\_{x}} e^{t\lambda\_{1}} + C\_{2\_{x}} e^{t\lambda\_{2}}} \\\ {C\_{1\_{y}} e^{t\lambda\_{1}} + C\_{2\_{y}} e^{t\lambda\_{2}}})
\end{align}

There is absolutely no difference in nature between \\(C\_{j\_{x}}\\) and \\(C\_{j\_{y}}\\) except for the fact that they are _different_ constants (which we got by multiplying \\(v\_1 \dots v\_{m}\\)) to it.

Ok so:

\begin{equation}
\begin{cases}
x = C\_{1\_{x}} e^{t\lambda\_{1}} + C\_{2\_{x}} e^{t\lambda\_{2}}\\\\
y = C\_{1\_{y}} e^{t\lambda\_{1}} + C\_{2\_{y}} e^{t\lambda\_{2}}\\\\
\end{cases}
\end{equation}

constructing the characteristic equation, as desired.


## solving homogeneous constant coefficient higher-order differential equations {#solving-homogeneous-constant-coefficient-higher-order-differential-equations}

in the homogeneous case, we have some:

\begin{equation}
y'' + ay' + by = 0
\end{equation}

and it arises that there's a pair of solutions \\(y\_1(t)\\) and \\(y\_2(t)\\) whose linear combinations span the entire space of solutions. in fact, it arises as a solution to some functional quadratic equation \\(\lambda^{2} + a\lambda + b = 0\\).

The specific coefficients \\(c\_1\\) and \\(c\_2\\) of the linear combination arises out of the initial conditons, which is the same measurement given at the initial time and its derivative: \\(y(t\_0)\\) and \\(y'(t\_0)\\). It comes out of [Linear Algebra]({{< relref "KBhlinear_algebra_errors.md" >}}) why there is exactly two initial values.

Specifically, it arises out of solutions of the shape:

\begin{equation}
y(t) = c\_1 e^{\lambda\_{1}t} + c\_2e^{\lambda\_{2}t}
\end{equation}

where \\(\lambda\_{1}\\) and \\(\lambda\_{2}\\) are solutions to the characteristic polynomial above. For why exactly this is, see [method of undetermined coefficients](#method-of-undetermined-coefficients).


### finding [independent]({{< relref "KBhprobability.md#independence" >}}) solutions of second-order constant-coefficient linear ODEs {#finding-independent--kbhprobability-dot-md--solutions-of-second-order-constant-coefficient-linear-odes}

Given some:

\begin{equation}
y'' + ay' + by = 0
\end{equation}

we desire to find two [independent]({{< relref "KBhprobability.md#independence" >}}) solutions. After which, by [superposition principle]({{< relref "KBhordinary_differential_equations.md#superposition-principle" >}}), we know that any [linear combination]({{< relref "KBhlinear_combination.md" >}})s will yield a solution.

---

Aside, consider:

\begin{equation}
y'' = y
\end{equation}

we see that both \\(y=e^{t}\\) and \\(y=e^{-t}\\) are solutions. We can see that this is independent by setting up:

\begin{equation}
c\_1 e^{t} + c\_2 e^{-t} = 0
\end{equation}

which, multiplying through by \\(e^{t}\\) and dividing, we obtain:

\begin{equation}
e^{2t} = -\frac{c\_2}{c\_1}
\end{equation}

Now, the right side is constant, and the left is not. So the only way this can be true is if the right side is identically zero.


#### Linear Shifts {#linear-shifts}

Consider the case where you are given initial conditions:

\begin{equation}
\begin{cases}
y'' - y = 0 \\\\
y(5) = -2 \\\\
y'(5) = 5
\end{cases}
\end{equation}

instead of bothering to solve this, we define:

\begin{equation}
Y(t) = y(t+5)
\end{equation}

and it still hold that:

\begin{equation}
Y'' - Y = 0
\end{equation}

because the derivatives don't actually change.

Then, after solving, we can just translate it back:

\begin{equation}
y(t) = Y(t-5)
\end{equation}


#### Solution, more generally {#solution-more-generally}

Consider:

\begin{equation}
y'' + ay' + by = 0
\end{equation}

let us guess that \\(y = e^{\lambda t}\\)

recall that, in that case:

\begin{equation}
\begin{cases}
y' = \lambda e^{\lambda t} \\\\
y'' = \lambda^{2} e^{\lambda t}
\end{cases}
\end{equation}

plugging this back in:

\begin{equation}
\lambda^{2} e^{\lambda t} + a \lambda e^{\lambda t} + b e^{\lambda t} = 0
\end{equation}

which is:

\begin{equation}
(\lambda^{2} + a\lambda +b ) e^{\lambda t} = 0
\end{equation}

because the right side is never zero, we need the left side \\((\lambda^{2} + a\lambda +b )\\) is zero.

Note that there exists three separate cases:

-   \\(a^{2}-4b > 0\\), two exact solutions: \\(e^{\lambda\_{1}t}\\) and \\(e^{\lambda\_{2} t}\\), these two are independent functions as long as \\(\lambda\_{1} \neq \lambda\_{2}\\)
-   \\(a^{2}-4b < 0\\), which will yield imaginary solutions, recall [Euler's Equation]({{< relref "KBheuler_s_equation.md" >}}), you can split \\(e^{ikx}\\) into a superposition of \\(\cos (x) + i\sin (x)\\), each of which individually is a solution. You can break this up into the case of some real \\(e^{-at}\\) multiplied by sinusoldial functions.--- whereby \\(e^{at} (\cos(bt) \pm i\sin(bt))\\), we can break into two functions \\(y\_1 = e^{at}\cos (bt), y\_2= e^{at}i \sin (bt)\\).
-   for \\(a^{2}-4b = 0\\), we yield some solution \\(e^{-\frac{a}{2} t}\\), and the solution is \\(t e^{-\frac{a}{2}t}\\). because this is the limit of the first solution \\(\lim\_{\lambda\_{2} \to \lambda\_{1}}\frac{e^{\lambda\_{2}t} - e^{\lambda\_{1}t}}{\lambda\_{2} - \lambda\_{2}}\\)

<!--list-separator-->

-  All 2nd order solution is a linear combination

    In fact, all solutions carry the form of the two solutions:

    \begin{equation}
    c\_1 y\_1(t) + c\_2 y\_2(t) = y(t)
    \end{equation}

    This is because, consider the initial form \\(y\_1(t\_0)\\), and \\(y\_2(t\_0)\\):

    \begin{equation}
    \begin{cases}
    y\_1(t\_0) c\_1 + y\_2(t\_0) c\_2 = y(t\_0) \\\\
    y\_1'(t\_0) c\_1 + y\_2'(t\_0) c\_2 = y'(t\_0) \\\\
    \end{cases}
    \end{equation}

    This is the same as the matrix equation:

    \begin{equation}
    \mqty(y\_1(t\_0) & y\_2(t\_0) \\\ y\_1'(t\_0) & y\_2'(t\_0)) \mqty(c\_1 \\\ c\_2) = \mqty(y(t\_0) \\\ y'(t\_0))
    \end{equation}

    So, this map is surjective.


#### [Uniqueness and Existance]({{< relref "KBhuniqueness_and_existance.md" >}}) of second order {#uniqueness-and-existance--kbhuniqueness-and-existance-dot-md--of-second-order}

The uniqueness is also guaranteed with [one and exactly one solution exist for every initial condition of an IVP]({{< relref "KBhinitial_value_problems.md#one-and-exactly-one-solution-exist-for-every-initial-condition-of-an-ivp" >}}). Unlike first order ODE, solutions can cross: because the uniq and exi. is only guaranteed for the same **point** AND **slope** (i.e. the initial condition).

So solutions can cross, they just can't be tangent.


## method of undetermined coefficients {#method-of-undetermined-coefficients}

Ok. This mechanism hinges upon the fact that **linear combinations of differential equation solutions are solutions themselves**. You can show this to yourself by illustrating diffeq solutions as [subspace]({{< relref "KBhsubspace.md" >}})s of [F^S]({{< relref "KBhfs_is_a_vector_space.md" >}}), which are linear objects.

Therefore, for a non-homogeneous second-order linear equation, we attempt to find two sets of solutions---

namely, the general solution to the homogeneous case (using method above):

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = 0
\end{equation}

as well attempting to fit **particular** solutions to the general case:

\begin{equation}
a\dv[2]{x}{t} + b \dv{x}{t} + cx = f(t)
\end{equation}

the linear combination of both solutions would construct the final solution space.

We already know how to do step 1---[solve homogeneous higher-order differential equations](#solving-homogeneous-higher-order-differential-equations)---so we won't harp on it here. However, how do we find _particular_ solutions to the general equations?

Well, we guess! Here's a general table to help illustrate how:

| \\(f(t)\\)                     | \\(x(t)\\)                                          |
|--------------------------------|-----------------------------------------------------|
| \\(ae^{bt}\\)                  | \\(Ae^{bt}\\)                                       |
| \\(a \cos (ct) + b\sin (ct)\\) | \\(A\cos(ct) + B\sin (ct)\\)                        |
| \\(kt^{n}\\)                   | \\(A\_{n}t^{n} + A\_{n-1}x^{n-1} \dots  + A\_{0}\\) |

you can show these to yourself by taking derivatives. \\(a,b,c, k,A,B\\) are distinct constants.

Now, once you make an educated guess for what \\(x(t)\\) is, perhaps aided by the homogeneous solution, you would take the number of derivatives needed to plug it back to the original expression. Then, equate the left expression and right \\(f(t)\\) and match [coefficient]({{< relref "KBhpolynomial.md" >}})s of equal-degree terms to solve for the final constants \\(A\\), \\(B\\), etc.

After you finally got the specific solution for \\(A\\) and \\(B\\) , we add the degree of freedom back by adding the homogenous solution in.

Look for "Example 1 (again)" on [this page](https://www.mathsisfun.com/calculus/differential-equations-undetermined-coefficients.html) (silly, I know, but worth it) to see end-to-end such a solution.
