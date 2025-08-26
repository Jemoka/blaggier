+++
title = "SU-CS242 DEC052024"
author = ["Houjun Liu"]
draft = false
+++

Building a programing language, step by step:


## Lambda Calculus {#lambda-calculus}

\begin{equation}
e \to x | \lambda x.e | e\ e
\end{equation}

and you can add types

\begin{equation}
e \to x | \lambda x: t.e | e\ e | i
\end{equation}

\begin{equation}
t \to \alpha  | t \to  t | \text{int}
\end{equation}


## Adding ADT {#adding-adt}

[Algebraic Data Type]({{< relref "KBhsu_cs242_oct032024.md#algebraic-data-type" >}})---

\begin{equation}
\lambda a\_1 . \lambda a\_2 \dots  \lambda a\_{k}. \lambda f\_1 . \lambda f\_2 \dots  \lambda  f\_{n} f\_i a\_1 a\_2 \dots a\_{k}
\end{equation}


### possible encodings {#possible-encodings}

-   Non-Negative Integers
-   Pair
-   Booleans
-   Binary Trees


## Constants {#constants}

You can add natively....

-   integers
-   +, \*, -, etc.
-   strings
-   arrays
-   booleans
-   ...

We  build these in to obtain good hardware support.


## Controls {#controls}

\begin{equation}
\text{if}: \text{Bool} \to t \to t \to t
\end{equation}

where each \\(t\\) is an expression.

In a **call by value** language, this has to be a built-in construct because otherwise each of the arms will be evaluated first before if (which is disastrous because it kind of obviate the point of the if).

\begin{equation}
\frac{A \vdash e\_1 : \text{Bool}, A \vdash e\_2: t, A \vdash e\_3:t}{A \vdash \text{if } e\_1 e\_2 e\_3 : t}
\end{equation}

and to perform type inference

\begin{equation}
\frac{A \vdash e\_1: \text{Bool}, A \vdash  e\_2 :t\_1, A \vdash e\_3: t\_2, t\_1 = t\_2}{A \vdash \text{if } e\_1 e\_2 e\_3 : t\_1}
\end{equation}


## Recursion {#recursion}

Let us define a recursive function definition:

\begin{equation}
\text{letrec } f = \lambda x . e\_1\ \text{in}\ e\_2
\end{equation}

this is different from normal let because we want recursive functions, meaning we want \\(e\_1\\) to be able to use/call \\(f\\).

---

We define this via:

\begin{equation}
\qty(\lambda f . e\_2) \qty(Y \lambda f. \lambda x . e\_1)
\end{equation}

where, recall [y-combinator]({{< relref "KBhsu_cs242_oct032024.md#y-combinator" >}}):

\begin{equation}
Y = \lambda f. \qty(\lambda x. f (x x)) (\lambda x. f (x x))
\end{equation}

Type checking for recursion:

\begin{equation}
\frac{\begin{align}
&A, f : t\_1 \to  t\_2 \vdash  \lambda x. e\_1: t\_1 \to  t\_2  \\\\
&A, f : t\_1 \to  t\_2 \vdash  e\_2 : t
\end{align}}{A \vdash \text{letrec } f = \lambda x.e\_1 \text{ in } e\_2: t}
\end{equation}

notice this is different from a normal let because the first term also has available the type of \\(f\\), making this a recursive procedure.

Notice the type of \\(f\\) is underspecified; to make this happen, we use type inference:

\begin{equation}
\frac{\begin{align}
&A, f : \alpha \to \beta \vdash  \lambda x. e\_1: t\_1 \to  t\_2  \\\\
&A, f : \alpha \to \beta \vdash  e\_2 : t \\\\
&\alpha  = t\_1\ \beta = t\_2
\end{align}}{A \vdash \text{letrec } f = \lambda x.e\_1 \text{ in } e\_2: t}
\end{equation}

(you could quantify the bottom expressions; trying to make the top of the let---i.e. the recursion---polymorphic makes the result un[decidable]({{< relref "KBhturing_machinea.md#decidable" >}})).


## Parametric Polymorphism {#parametric-polymorphism}

\begin{equation}
e \to  x | \lambda x . e | e\ e | \text{let} f = \lambda x.e \text{ in } e | i
\end{equation}

\begin{equation}
t \to \alpha  | t \to  t | \text{int}
\end{equation}

\begin{equation}
o \to \forall a . o | t
\end{equation}

to avoid code duplication (because functions could now be polymorphic)


## Subtyping {#subtyping}

For instance, suppose you have an if statement that allowed different types

\begin{equation}
\frac{\begin{align}
&A \vdash e\_1 : \text{Bool} \\\\
&A \vdash e\_2: t\_1 \\\\
&t\_3 = \text{lub}\qty(t\_1, t\_2)
\end{align}}{A \vdash  e\_1 ? e\_2 : e\_3 : t\_3}
\end{equation}

where \\(lub\\) is the least-upper-bound: the **one, smallest type** which is the supertype of both \\(t\_1\\) and \\(t\_2\\)

Notice this only makes sense where your type hierarchy is a tree (meaning single inheritance).


## Overloading {#overloading}

\begin{align}
&+: \text{int} \to  \text{int} \to  \text{int} \\\\
& +: \text{float}\to \text{float}\to \text{float}\\\\
& +: \dots
\end{align}

overloading with subtyping is, therefore, complicated.


## Functional Languages {#functional-languages}

At this point we have succeeded in building functional languages---

-   all: lambdas + primitives + ADTs
-   with polymorphism: ML, OCaml, Haskell


### Monads {#monads}

A consequence of this is to be able to pump a generalized "state" through computation. Many language features can be monads---state, continuations, exceptions, threads, etc.

Haskell's key idea: make your own monads, and scope them! Notice that since they carry state, they are really single-threaded in the sense that they are best done with coroutines.


## Objects {#objects}

Objects are something fundamentally different. Typed OOP languages can't really be translate into typed functional languages because unrestricted method overrides is impossible to type (if there is runtime function swapping with new types).


### OOP vs. Functional Language {#oop-vs-dot-functional-language}


#### Functional language {#functional-language}

-   adding a new function is a local change
-   adding a new kind of data (i.e. a new constructor), it requires updating every function that takes that type


#### OOP language {#oop-language}

-   adding a new data is a local change
-   adding a new function (method) requires updating many classes with a definition of that method (perhaps mostly automatic through inheritance)


## Extending OOP to Functional Languages {#extending-oop-to-functional-languages}

Haskell typeclasses! In some sense this is closer to Java "interfaces" than objects---interfaces has a performance hit compared to inheritance, but do support systems better.


### some typeclasses {#some-typeclasses}

"supporting object equality"

```haskell
(==) :: Eq a => a -> a -> bool
```

"supporting object ordering"

```haskell
(<) :: Ord a => a -> a -> bool
```

code that require certain functionality can require a value of the appropriate type class without details to implementation (i.e. we only guarantee specific methods existing but not how they are implemented).


## Extending Functional Languages to OOP {#extending-functional-languages-to-oop}

-   C++ has lambdas since C++14
-   Java had lambdas since Java8
-   Polymorphic types: C++ has templates(ish, because C++ actually instantiates templates after type checking), Java ha generics


## Invariant Inference {#invariant-inference}

This is a bonus topic that just isn't caused anywhere.

{{< figure src="/ox-hugo/2024-12-05_10-13-08_screenshot.png" >}}

Suppose \\(I\\) is an inductive [loop invariant]({{< relref "KBhloop_invariant.md" >}}). Notice in the `{code}` segment we don't assume that our invariant is true; the invariant could disappear and get reestablished.

We also only have to show this once through the loop, for all desired preconditions.

Inferring what invariants are there is still an active research topic.
