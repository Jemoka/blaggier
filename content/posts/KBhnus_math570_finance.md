+++
title = "NUS-MATH570 Finance (Laplace)"
author = ["Houjun Liu"]
draft = false
+++

We need to solve this system:

\begin{equation}
\begin{cases}
\dv{I}{t} = -0.73U + 0.0438 + 0.4 \dv{M}{t} \\\\
\dv{U}{t} = 0.4I - 0.012 \\\\
\dv{G}{t} = \dv{M}{t}- I \\\\
M(t)=0.02\sin (1.15t + \phi)
\end{cases}
\end{equation}

To be able to work on this, let us create some functions:

```sage
# variable
t, dm = var("t dm")

# functions
I = function("_I")(t) # _I because i is imaginary
U = function("U")(t)
G = function("G")(t)

# parameter
phi = var("phi", latex_name="\phi")

# our equations
eqns = [
    diff(I,t) == -0.73*U + 0.0438 + 0.4*dm,
    diff(U,t) == 0.4*I - 0.012,
    diff(G,t) == dm - I
]

eqns
desolve(eqns, U, ivar=t, algorithm="fricas").expand()
```

Great, now, we will run the laplace transform upon these equations:

```sage
# laplace variable
s = var("s")

# laplaced functions
Fi = var("Fi")
Fu = var("Fu")
Fg = var("Fg")
Fm = var("Fm")

# constants
I0, U0, G0, M0 = var("I0 U0 G0 M0")

# substitution dictionary
subs = {
    laplace(I,t,s): Fi,
    laplace(U,t,s): Fu,
    laplace(G,t,s): Fg,
    laplace(M,t,s): Fm,
    I(0): I0,
    G(0): G0,
    U(0): U0,
    M(0): M0,
}

# laplace eqns
laplace_eqns = [i.laplace(t, s).subs(subs) for i in eqns]
laplace_eqns
```

```text
<ipython-input-236-2a2ddfe91635>:20: DeprecationWarning: Substitution using function-call syntax and unnamed arguments is deprecated and will be removed from a future release of Sage; you can use named arguments instead, like EXPR(x=..., y=...)
See http://trac.sagemath.org/5930 for details.
  I(Integer(0)): I0,
<ipython-input-236-2a2ddfe91635>:21: DeprecationWarning: Substitution using function-call syntax and unnamed arguments is deprecated and will be removed from a future release of Sage; you can use named arguments instead, like EXPR(x=..., y=...)
See http://trac.sagemath.org/5930 for details.
  G(Integer(0)): G0,
<ipython-input-236-2a2ddfe91635>:22: DeprecationWarning: Substitution using function-call syntax and unnamed arguments is deprecated and will be removed from a future release of Sage; you can use named arguments instead, like EXPR(x=..., y=...)
See http://trac.sagemath.org/5930 for details.
  U(Integer(0)): U0,
<ipython-input-236-2a2ddfe91635>:23: DeprecationWarning: Substitution using function-call syntax and unnamed arguments is deprecated and will be removed from a future release of Sage; you can use named arguments instead, like EXPR(x=..., y=...)
See http://trac.sagemath.org/5930 for details.
  M(Integer(0)): M0,
[Fi*s - I0 == 0.4*Fm*s - 0.73*Fu - 0.4*M0 + 0.0438/s,
 Fu*s - U0 == 0.4*Fi - 0.012/s,
 Fg*s - G0 == Fm*s - Fi - M0,
 Fm == (0.02*s*sin(phi) + 0.023*cos(phi))/(s^2 + 1.3225)]
```

And then, let us solve the Laplace solutions:

```sage
# substitute
laplace_solutions = solve(laplace_eqns,
                          Fi,
                          Fu,
                          Fg,
                          Fm, solution_dict=True)[0]
laplace_solutions
```

```text
{Fi: 1/100*(80000*(125*I0 - 50*M0 + sin(phi))*s^4 - 2000*(3650*U0 - 46*cos(phi) - 219)*s^3 + 200*(66125*I0 - 26450*M0 + 438)*s^2 - 193085*(50*U0 - 3)*s + 115851)/(100000*s^5 + 161450*s^3 + 38617*s),
 Fu: 1/50*(5000000*U0*s^4 + 4000*(500*I0 - 200*M0 + 4*sin(phi) - 15)*s^3 + 100*(66125*U0 + 184*cos(phi) + 876)*s^2 + 26450*(100*I0 - 40*M0 - 3)*s + 115851)/(100000*s^5 + 161450*s^3 + 38617*s),
 Fg: 1/100*(200000*(50*G0 - 50*M0 + sin(phi))*s^5 - 10000*(1000*I0 - 400*M0 - 23*cos(phi) + 8*sin(phi))*s^4 + 200*(80725*G0 - 80725*M0 + 36500*U0 - 460*cos(phi) + 292*sin(phi) - 2190)*s^3 - 40*(330625*I0 - 132250*M0 - 1679*cos(phi) + 2190)*s^2 + 193085*(20*G0 - 20*M0 + 50*U0 - 3)*s - 115851)/(100000*s^6 + 161450*s^4 + 38617*s^2),
 Fm: 2/5*(20*s*sin(phi) + 23*cos(phi))/(400*s^2 + 529)}
```

Now we inverse Laplace transform:

```sage
I_s(t) = inverse_laplace(laplace_solutions[Fi], s, t)
U_s(t) = inverse_laplace(laplace_solutions[Fu], s, t)
G_s(t) = inverse_laplace(laplace_solutions[Fg], s, t)
M_s(t) = inverse_laplace(laplace_solutions[Fm], s, t)

(I_s,U_s,G_s,M_s)
```

```text
(t |--> -1/2061000*sqrt(730)*(103050*U0 + 368*cos(phi) - 6183)*sin(1/50*sqrt(730)*t) + 1/1030500*(1030500*I0 - 412200*M0 - 2336*sin(phi) - 30915)*cos(1/50*sqrt(730)*t) + 529/51525*cos(23/20*t)*sin(phi) + 529/51525*cos(phi)*sin(23/20*t) + 3/100,
 t |--> 1/37613250*sqrt(730)*(1030500*I0 - 412200*M0 - 2336*sin(phi) - 30915)*sin(1/50*sqrt(730)*t) + 1/103050*(103050*U0 + 368*cos(phi) - 6183)*cos(1/50*sqrt(730)*t) - 184/51525*cos(phi)*cos(23/20*t) + 184/51525*sin(phi)*sin(23/20*t) + 3/50,
 t |--> -1/15045300*sqrt(730)*(1030500*I0 - 412200*M0 - 2336*sin(phi) - 30915)*sin(1/50*sqrt(730)*t) - 1/41220*(103050*U0 + 368*cos(phi) - 6183)*cos(1/50*sqrt(730)*t) + 1/103050*(920*cos(phi) + 2061*sin(phi))*cos(23/20*t) + 1/103050*(2061*cos(phi) - 920*sin(phi))*sin(23/20*t) + G0 - M0 + 5/2*U0 - 3/100*t - 3/20,
 t |--> 1/50*cos(23/20*t)*sin(phi) + 1/50*cos(phi)*sin(23/20*t))
```

Some plots.

```sage
I_specific = I_s.subs(I0=0.024, U0=0.039, M0=0, G0=0, phi=2.35)
U_specific = U_s.subs(I0=0.024, U0=0.039, M0=0, G0=0, phi=2.35)
G_specific = G_s.subs(I0=0.024, U0=0.039, M0=0, G0=0, phi=2.35)
M_specific = M_s.subs(I0=0.024, U0=0.039, M0=0, G0=0, phi=2.35)

plot(I_specific, t, 0, 10, color="blue") + plot(U_specific, t, 0, 10, color="orange") + plot(G_specific, t, 0, 10, color="green") + plot(M_specific, t, 0, 10, color="red")
```

```text
/Users/houliu/.sage/temp/baboon.jemoka.com/16964/tmp_sei9raar.png
```