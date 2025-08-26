+++
title = "type theory"
author = ["Houjun Liu"]
draft = false
+++

[type theory]({{< relref "KBhtype_theory.md" >}}) was originally aimed creating a basis of all of mathematics. it got out-competed in math by set theory. it formalizes...

1.  programs
2.  propositions (types)
3.  proofs that programs satisfies these propositions

and does so in one system.


## key features {#key-features}

-   it **creates an isomorphism** between programs/types with proofs/propositions
-   it creates a **hierarchy** which allows defining types, type operations, proofs into the same system at different levels
-   it allows possibly-undecidable **expressive dependent types** to be constructed


## musing {#musing}

-   this is a foundation of mathematics, and in particular **constructive mathematics**
-   its pretty powerful to prove anything we want to prove---so can be used to verify the correctness of all sofware


## properties of type systems {#properties-of-type-systems}


### type stratification {#type-stratification}

Consider a type of all types `Type`,

\begin{equation}
\text{Type} = \qty {\text{Int}, \text{Bool}, \text{Int}\to \text{Int}, \dots }
\end{equation}

so is \\(\text{Type} \in \text{Type}\\)? Since the set contains all types, should it contain itself? **no**. We need this set to be [well-founded]({{< relref "KBhwell_founded.md" >}}) because of [Russell's Paradox]({{< relref "KBhthere_are_non_recognizable_languages.md#russell-s-paradox" >}}) ([Diagonalization Arguments]({{< relref "KBhthere_are_non_recognizable_languages.md#russell-s-paradox" >}})).

So, instead, we need a specific type hierarchy.


#### stratum 0: ordinary type {#stratum-0-ordinary-type}

standard type like `int`, `int->int`, etc.

-   0: int
-   f: int -&gt; int -&gt; int
-   true: bool
-   ...


#### stratum 1: set of types {#stratum-1-set-of-types}

the type of types `Type`; this makes `and` (which operates on Types) and `->` which operates on types "level 1 functions"

-   int: Type


### inductively defined types {#inductively-defined-types}

like [Algebraic Data Type]({{< relref "KBhsu_cs242_oct032024.md#algebraic-data-type" >}})s with recursion; these systems are "[Dependent Type Theories](#inductively-defined-types)"


### Pi types {#pi-types}

notice that our type functions can't currently express type functions that depended on their arguments

\begin{equation}
\text{cons}: \alpha \to \text{{List}}\qty(\alpha)\to \text{{List}}\qty(\alpha)
\end{equation}

this creates a (two views) 1) **parameterized** type or 2) a **family** of types.

To do this, we simply define a structure that acts like \\(\forall\\), but its \\(\Pi\\) for types:

-   \\(\text{List}: \text{Type} \to \text{Type}\\)
-   \\(\text{Cons}: \Pi \alpha : \text{Type}. \alpha \to \text{List}\qty(\alpha) \to  List\qty(\alpha)\\)
-   \\(\text{Nil}: \Pi \alpha : \text{Type}. \text{List}\qty(\alpha)\\)

that is, \\(\Pi \alpha: \text{Type}\\) means for all \\(\alpha\\) that is a Type, we can be generic over them. these are **dependent types**. You can think of this either as a function input or a conjuction of types.

Aside: \\(\forall\\) is actually a special case of \\(\Pi\\), in particular \\(\forall \alpha\\) assumes its \\(\Pi \alpha : \text{Type}\\).

To be more general, consider typed fixed length arrays

```rust
x: &[Type; 6]
```

so we can type the thing that makes this as

for:

\begin{equation}
\text{Array}: \text{Type} \to  \text{Int}\to \text{Type}
\end{equation}

\begin{equation}
\text{mkarray}: \Pi \alpha : \text{Type}. \Pi \beta : \text{Int} . \alpha \to \beta  \to  \text{Array}\qty(\alpha, \beta)
\end{equation}

where your length type \\(\beta\\) is a property of the **type**

Just fyi introducing this is often un[decidable]({{< relref "KBhturing_machinea.md#decidable" >}}).


## programs as proofs {#programs-as-proofs}

We can consider programs as type relations.

To prove that there is something of type \\(t \to t'\\), all we have to do is to show that \\(e\_1: t \to  t'\\)

Programs therefore, are **evidence** that proofs can be satisfied.


### lambda application {#lambda-application}

\begin{equation}
\frac{A \vdash e\_1 : t \to t', A \vdash e\_2 : t }{A \vdash e\_1e\_2: t'}
\end{equation}

**elimination rule**---it takes a construct (the \\(e\_{1}\\) function constructor) and eliminates it

This is [implication elimination](#implication-elimination).


## abstraction rule {#abstraction-rule}

\begin{equation}
\frac{A,x:t \vdash e : t'}{A \vdash \lambda x . e : t \to t'}
\end{equation}

**introduction rule**---it constructs a construct (the function space type \\(t \to  t'\\))

This is [implication introduction](#implication-introduction).


## proof statements {#proof-statements}


### implication elimination {#implication-elimination}

**elimination** asks for a proof of \\(t \to  t'\\) and a proof of \\(t\\), and gives us a proof for \\(t'\\).


### implication introduction {#implication-introduction}

**introduction rule** asks for a proof of \\(t'\\) while assuming \\(t\\), and gives a proof for \\(t \to  t'\\).


### Curry-Howard Isomorphism {#curry-howard-isomorphism}

there is an [isomorphism]({{< relref "KBhisomorphism.md" >}}) between programs/types and proofs/propositions.

\begin{equation}
\vdash e: t
\end{equation}

means...

-   we have a proof that the program \\(e\\) has type \\(t\\), so \\(\to\\) is a constructor for function types
-   \\(e\\) is a proof of statement \\(t\\), so \\(\to\\) is a logical implication sign


### constructive logic {#constructive-logic}

our goal here is to encode standard logic now into this program-based type scheme; in particular, we want to use a program \\(e\_{j}\\) as a witness for a proof of a certain type \\(t\\) for \\(e\_{j} : t\\)


#### AND {#and}

<!--list-separator-->

-  introduction

    \begin{equation}
    \frac{A \vdash e\_1 : t\_1, A \vdash e\_2: t\_2}{A \vdash \qty(e\_1, e\_2) : t\_1 \wedge t\_2}
    \end{equation}

<!--list-separator-->

-  eliminate left

    \begin{equation}
    \frac{A \vdash e: t\_1 \wedge t\_2}{A \vdash e.0: t\_1}
    \end{equation}

<!--list-separator-->

-  eliminate right

    \begin{equation}
    \frac{A \vdash e: t\_1 \wedge t\_2}{A \vdash e.1: t\_2}
    \end{equation}


#### OR {#or}

**important**: this is the _constructive_ or---meaning we construct **evidence** for everything we prove (i.e. we have to exhibit a program that has the type we want to shown)

therefore, \\(t \vee \neg t\\) is **NOT** axiomatically true in this system. both \\(t\\) and \\(\neg t\\) may be true or not true.

<!--list-separator-->

-  introduction left

    \begin{equation}
    \frac{A \vdash e : t\_1}{A \vdash e : t\_1 \vee t\_2}
    \end{equation}

<!--list-separator-->

-  introduction right

    \begin{equation}
    \frac{A \vdash e : t\_2}{A \vdash e : t\_1 \vee t\_2}
    \end{equation}

<!--list-separator-->

-  eliminate

    This is very hard, but this makes sense: once we are handed something of a compound "of" type, we can't do anything other than using conditional logic to check which arm of the compound our thing is.

    \begin{equation}
    \frac{A \vdash e : t\_1 \vee t\_2, A, x: t\_1 \vdash e\_1 : t\_0, A,x: t\_2 \vdash e\_2: t\_0}{A \vdash \qty(\lambda x . \text{case } x \text{ of } t\_1 \to e\_1; t\_2 \to e\_2 ) e\_0: t\_0}
    \end{equation}

    "create two branches, both of which returns type \\(t\_0\\); however, each of them gets to that type \\(t\_0\\) in a different way (either \\(e\_1\\) or \\(e\_2\\)) based on what type \\(x\\) is (either \\(t\_1\\) or \\(t\_2\\))"


#### NOT {#not}

\begin{equation}
\neg p:= p\to \text{false}
\end{equation}

that is, \\(p\\) implies "false", having no elements at all. that is, the set of things \\(p\\) implies (i.e. "false") either has no content at all, or its content is only filled with non-terminating functions.

this is useful for...

-   negation
-   proof by contradiction (i.e. when we are trying to formalize mathematics)


#### [continuation]({{< relref "KBhcontinuation.md" >}})s {#continuation--kbhcontinuation-dot-md--s}

we can actually use NOT to sketch [continuation]({{< relref "KBhcontinuation.md" >}})s.

in lambda calculus, you can't have a thing of type \\(\neg p\\), because false has no elements.

but, with continuations, the continuation function doesn't actually return when it is called---it just finishes the program and exits.

So, continuations really have a type of \\(p \to \text{false}\\).


## constructive vs classical logic {#constructive-vs-classical-logic}

**constructive logic** gives us programs that we can run

we can give axioms as well in constructive logic, but in classical logic we have to witness in the form of programs at all.


## bootstrapping type theory {#bootstrapping-type-theory}

we should be able to define type checking, boolean logic, etc. all within the same framework of type theory.


### some primitives {#some-primitives}

let's first define a type `Type` which contains the set of all types:

\begin{equation}
\text{Type} = \qty(\text{Int}, \text{Bool}, \text{Int} \to \text{Int}, \dots)
\end{equation}

we also should define inference rules, which quires a type `Proof`.


### boolean connectives {#boolean-connectives}

\begin{equation}
\text{and}: \text{Type} \to \text{Type} \to \text{Type}
\end{equation}

\blankbegin{equation}
\text{or}: \text{Type} &rarr; \text{Type} &rarr; \text{Type}
\end{equation}

\begin{equation}
\text{not}: \text{Type} \to \text{Type} \to \text{Type}
\end{equation}

these are now functions on types, which means that we can define functions themselves. for instance, and should form the pair.


### inference rules {#inference-rules}

now, we can then write inference rules in terms of `Proof` (its a function that takes in zero or more hypotheses---`Proof`---and then checks that they are correct)

\begin{equation}
\text{{And-Intro}}: \text{Proof} \to \text{Proof} \to \text{Proof}
\end{equation}

\begin{equation}
\text{{And-Elim-Left}}: \text{Proof} \to \text{Proof}
\end{equation}

\begin{equation}
\text{{And-Elim-Right}}: \text{Proof}\to \text{Proof}
\end{equation}

that is, we should construct machines that takes proofs and manipulate them to get other proofs, etc.
