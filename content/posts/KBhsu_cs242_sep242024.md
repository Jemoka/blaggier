+++
title = "SU-CS242 SEP242024"
author = ["Houjun Liu"]
draft = false
+++

"the ways in which one can dividing the original program together depends on the way people can glue problems together. one must provide new kinds of glue in teh programming language"


## Goals of PL {#goals-of-pl}

balancing between:

-   productivity---Python
-   safety---Coq, Lean
-   performance---C,

Edges:

-   safety+performance---Rust (not really productive)
-   productivity+safety---ML, Maskell (not very performant)
-   productivity+performance---Matlab (not very safe)

Java and C++ tries to do all three, but makes them more contradictory systems because you can't get optimality on all three


## key challenges of PL {#key-challenges-of-pl}

-   developers are reading, not writing
-   hardware is changing + software doesn't exploit it well
-   memory bloat is getting worse
-   bugs aren't getting any better
-   software systems are complex at all scales
-   developers mostly comprehend/debug code


### end of the Moore's law {#end-of-the-moore-s-law}

-   to get more performance: you have to build the hardware differently
-   software ways of performance improvement becomes much more important


## history of programming evolution evolution {#history-of-programming-evolution-evolution}


### theory {#theory}

-   [turing machine]({{< relref "KBhturing_machine.md" >}})s designed for studying logic first showed that it is possible to show that some procedural systems don't halt
-   [lambda calculus]({{< relref "KBhlambda_calculus.md" >}}) designed for formal logic systems


### evolution of Turing-type languages {#evolution-of-turing-type-languages}


#### initial implementation {#initial-implementation}

-   Von Neumann designed the idea of [turing machine]({{< relref "KBhturing_machine.md" >}})s being able to be implemented
-   Grace hopper designed the idea of higher-level programming abstractions (i.e. tape code, etc.)


#### FORTRAN {#fortran}

John Backus got quick adoption of FORTRAN, replacing much of assembly


#### Algol {#algol}

Derivation of FORTRAN, very European theory work: decoration, conditionals, global/local variables, block programming, etc.


#### C {#c}

The OS community took Algol and try to strip it down to bare basics for low-level features, and also try to make it type safe


#### SIMULA {#simula}

New simulation language: the first object-oriented system---inspired by ALGOL and other such efforts. This was super duper slow.


#### C++ {#c-plus-plus}

C++ was C's reaction to SIMULA.


#### Java {#java}

This was near the advent of Internet.

Java was a reaction to C++'s lack of garbage collection, manual memory collection, made it aggressively more objective oriented, and tried to fix its lack of portability, security, distributed programming, and threading.


#### Python {#python}

Python is a reaction to C++ and a desire


### evolution of Church-type languages {#evolution-of-church-type-languages}


#### LISP {#lisp}

"I didn't understand the rest of [Chruch's] book"

but took lambda calculus


#### ISWIM {#iswim}

ISWIM---a typed-ish LISP


#### ML {#ml}

a formal, basic functional language , supporting ideas of induction, etc.


#### Haskell {#haskell}

lazy evaluation, call by name lambda calculus, infinite structures, etc.


## why hasn't church languages taken over? {#why-hasn-t-church-languages-taken-over}

-   computers, for the most part, are Turing machines
-   church languages, back in the day, didn't fit and didn't finish in a long time

Alex protip of making a new programming language: you can throw away all the semantics, but keep syntax the same.

But, machines don't like [turing machine]({{< relref "KBhturing_machine.md" >}})s any more: Turing languages are actually pretty bad at that.


## change! {#change}

-   software systems tend to be big, slow, and buggy
-   broad forces are having compelling changes
    -   security is a problems =&gt; **let's design better verification systems**
    -   revolution is happening in underlying hardware (they are not [turing machine]({{< relref "KBhturing_machine.md" >}})s) =&gt; **let's move beyond Turing languages**
    -   we have a shortage of skilled programmers =&gt; **let's automate programming**
