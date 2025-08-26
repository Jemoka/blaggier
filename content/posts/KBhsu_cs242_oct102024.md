+++
title = "SU-CS242 OCT102024"
author = ["Houjun Liu"]
draft = false
+++

more on [type]({{< relref "KBhtyping.md" >}})s

Remember: when we say \\(e: t\\), this means that as we evaluate \\(e\\), after all reductions we will get a thing of type \\(t\\).


## type checking {#type-checking}

1.  start at the leaves, integers and variables
2.  for each one above, match the expression to the [type rules]({{< relref "KBhtyping.md#type-rules" >}})

a\* type inference

1.  for every distinct lambda variable, we name a new type
2.  then, for function applications, we have then also substitute the output type of the function with a type variable

then, to saturating the constraint, we solve them using:

-   \\(t = a \implies a = t\\)
-   \\(a = t\_1, a = t\_2 \implies a = t\_1, a = t\_2, t\_1=t\_2\\)
-   \\(t\_1 \to t\_2 = t\_3 \to t\_4 \implies t\_1 \to  t\_2 = t\_3 \to  t\_4 = t\_1 = t\_3, t\_2 =t\_4\\)

to then check and infer types

-   we want to make sure no functions are int \\(x \to y = int\\)
-   we want to make sure that an equation has no infinite solutions: \\(int \to int \to  \ldots\\)

we do the first thing by staring at it real hard; we do the second thing by [canonicalization](#canonicalization).


### canonicalization {#canonicalization}

-   That no equation \\(x \to y = int\\) is present
-   That the equations do not have infinite solutions
-   Otherwise the program is ill-typed

we want every equivalent type to be represented by one thing.

-   \\(C(S, int) = int\\)
-   \\(C(S, t\to t') = C(S,t) \to  C(S, t')\\)
-   \\(C(S, a) = C(S, t)\\) if \\(a = t \in S\\), and \\(t\\) is not a type variable
-   \\(C(S, a) = C(S, b)\\) if \\(a = b \in S\\), and \\(a < b\\) (for some oner)
-   \\(C(S, a) = a\\), otherwise

This could go into an infinite loop---whenever you are canonicalizing something and you got the same expression twice you need to stop because you have an infinite loop. You can do this by keeping what you have seen of variables around.


## let expression {#let-expression}

god we finally have variables.

\begin{equation}
let\ f = \lambda x.e\text{ in } e'
\end{equation}

is equivalent to

\begin{equation}
(\lambda  f . e') \lambda x .e
\end{equation}


## polymorphic types {#polymorphic-types}


### universally quantified types {#universally-quantified-types}

types are allowed to be what they were before

\begin{equation}
t \to a | t \to  t | int
\end{equation}

but then we also have some kind of type qualifier

\begin{equation}
o \to \forall a . o | t
\end{equation}


### key idea {#key-idea}

"if we prove that \\(e :t\\), and the proof doesn't rely on assumptions about \\(\alpha\\), then we have also proven \\(e: \forall a. t\\)"
