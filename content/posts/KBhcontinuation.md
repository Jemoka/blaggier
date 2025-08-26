+++
title = "continuation"
author = ["Houjun Liu"]
draft = false
+++

Consider:

we can consider this as two parts

-   the computation of x = e1
-   and the continuation e2

it essentially create statement labels:

such that:

-   \\(k\_0 = \lambda w . k\_1 e\\)
-   \\(k\_1 = \lambda x . k\_2 e'\\)
-   \\(k\_2 = \lambda y . k\_3 (x+y)\\)
-   \\(k\_3 = \lambda z . z\\)


## why {#why}

-   we can make the order of evaluatinos explicit
-   we give a name to each intermediate value
-   we name every step of the computation

it is important in language implementation (where ever intermediate result is named); but we can also make continuation available as program value.


### implementation: gotos {#implementation-gotos}

\begin{equation}
e \to \qty(x \mid  \lambda x . e \mid  e e \mid  i \mid e + e \mid  (call / cc) \lambda k.e \mid  \text{resume}\ k\ e)
\end{equation}

specifically, we add two new cases which is translated as follows:

-   \\(C(call / cc\ \lambda x.e, k) = \qty(\lambda x . C(e,k))k\\)
-   \\(C(resume\ k e, k') = C(e,k)\\)

as in:

1.  call/cc - give the program access to the current continuation; it simply passes the program the current continuation \\(k\\) into the function provided to call/cc
2.  resume - instead of continuing at the intended continuation, continue at the given continuation instead

**this allows early returns**, and other nice non-local control operations---exceptions, backtracking, jmp, co-routines


#### discussion {#discussion}

-   a software architecture device---event driven systems (events are basically continuations)
-   makes **program control** first class values - which is nice when control flow is really really hard
-   turns programs "inside-out"---this is contagious, which means it will affect the structure of the entire program


## CPS transformation {#cps-transformation}

Let \\(C(e,k)\\) to be the translation of \\(e\\) with continuation \\(k\\) into CPS. Meaning, we create a program \\(C(e,k) = k e\\), but we want \\(e\\) to also be in CPS:

-   \\(C(i,k) = ki\\) for integers \\(i\\)
-   \\(C(x,k)\\) for variable \\(x\\)


### sum {#sum}

Parse continuations in the order in which you would evaluate things.

\begin{equation}
C(e + e', k) = C(e, \lambda v . C(e', \lambda v' . k (v + v')))
\end{equation}


### abstractions {#abstractions}

\begin{equation}
C(\lambda  x . e, k)
\end{equation}

challenge: we don't evaluate under lambdas; its passed around until its called, then we need to CPS and evaluate it. That is, where \\(e\\) returns to (the continuation of \\(e\\)) is _not_ \\(k\\)! Because we don't know when the function is called.

idea: we therefore split the continuation into two points, first \\(k\\) when function is used, and \\(k'\\) where functions are called.

\begin{equation}
C(\lambda x . e, k) = k (\lambda k' . \lambda x . C( e, k'))
\end{equation}

notice where the function is called, \\(k'\\) is a continuation you will have to pass the function for it to work.


### application {#application}

\begin{equation}
C(e e', k) = C(e, \lambda  f . C(e' , \lambda  v . f k v))
\end{equation}

typically, we translate the function first---notice how we are passing the function the output continuation first, and then run the function on \\(e'\\) (named \\(v\\)).


### Complete Program {#complete-program}

The initial continuation is the identity function \\(I\\) (that is, \\(\lambda x. x\\)).
