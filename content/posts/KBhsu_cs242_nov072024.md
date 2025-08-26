+++
title = "SU-CS242 NOV072024"
author = ["Houjun Liu"]
draft = false
+++

## Logic Programming {#logic-programming}

Logic is the study of correct arguments. For instance, for some [predicate]({{< relref "KBhpredicates.md" >}}) \\(P\\); for instance:

\begin{equation}
\forall x .\exists y. P(x,y)
\end{equation}

-   we can "prove" this by doing the thing
-   we can also do that by contradiction (but that won't create a witness \\(y\\) of the statement)


### PROLOG {#prolog}

**PROgramming LOgic** - PROLOG; not general, but good in specific cases (databases, scheduling outputs, etc.)


### pros and cons {#pros-and-cons}


#### pros {#pros}

-   very declarative
-   easy to write some backtracking search approaches


#### worst {#worst}

-   "algorithm" / "complexity" obscured because you only have one algorithm
-   because you get performance only by wrangling goal ordering


## [PROLOG](#prolog) time {#prolog--org689a56a--time}

So, every **predicate** returns true/false.

```prolog
rev([1,2,3], [3,2,1]) => true
```

However, you could give the "witness" as a variable, and PROLOG will fill in the witness

```prolog
rev([1,2,3], y) => true
y := [3,2,1]
```

you can actually put random places, and PROLOG will try to fill it out

```prolog
rev([1,2,a], [3,2,b]) => true
a := 3
b := 1
```


### phraseology {#phraseology}

-   a constant: `1`, `nil`
-   a variable
-   a constructor: `c(x,y,z)`
-   an atom: apply a predicate to terms

lists have special sugar `[x,y, ...]`


### program {#program}

A PROLOG program has facts and rules.


#### rule/clause {#rule-clause}

```prolog
P1(t11, ...) := P2(t21, ...), ...
```

("if all the things on the right hand side is true, then the left hand side is true")

(if you want to write the disjunction "OR" of the predicates, write `;` instead of `,`)


#### fact {#fact}

a rule without a RHS, so automatically true

```prolog
P1(t11, ...).
```


#### PROLOG semantics {#prolog-semantics}

Let \\(\sigma\\) range over all "ground substitutions" (substitution that maps variables to terms without variables---"grounding" the variables).

Given:

\begin{equation}
P\_1\qty (t\_{11}, \dots) \vdash P\_2 \qty(t\_{21}, \dots), \dots P\_n \qty(t\_{n1}, \dots)
\end{equation}

the semantics is the smallest set of atoms placed in \\(F\\) which would be satisfying

\begin{equation}
\qty {\sigma \qty(P\_2\qty (t\_{21}, \dots)), \sigma \qty(P\_n\qty (t\_{n1}, \dots))} \subseteq F \implies \sigma \qty(P\_{1}\qty(t\_{11}, \dots)) \in F
\end{equation}

-   all facts are in \\(F\\)
-   any implications proven by atoms in \\(F\\) is in \\(F\\)


### PROLOG execution {#prolog-execution}

Given a goal \\(a\\), find a rule whose LHS matches \\(a\\), add the RHS atoms as subgols until you get to facts.


#### example {#example}

```prolog
imokay :- youreokay, hesokay
youreokay :- theyreokay
hesokay.
theyreokay.
```

Let's say we want to prove `imokay`

-   `imokay` `> =youreokay, hesokay`; two more subgoals now
-   `yourokay` `> =theyreokay`; still two more subgoals
-   `theyreokay` =&gt; fact
-   `hesokay` =&gt; fact

Ok, now let's add an new constraint:

```prolog
imokay :- youreokay, hesokay
youreokay :- theyreokay
hesokay.
theyreokay.

hesnotokay := imnotok
shesokay := hesnotokay
shesokay := theyreokay
```

-   **refine rule**: we will select the first textually matching rule
-   if a subgoal failso select the next matching rule
-   if no matching rule is found, fail

this is standard recursive [backtracing]({{< relref "KBhbacktracing.md" >}}).


#### depth-first instead of breadth-first {#depth-first-instead-of-breadth-first}

PROLOG semantics implies breadth-first search, but that's pretty bad (i.e. we have to keep adding our subgoals in a breadth-first way).


#### variable substitution {#variable-substitution}

To satisfy a goal \\(g\\), we want to find the first untried rule \\(G :- H\_1, ..., H\_{n}\\), such hat \\(s\_1 = unify(g,G)\\) such that the function computes a substitution \\(s1\\) s uch that after substitution the syntax are equivalent \\(s\_1(g) = s\_1(G)\\)


#### backtracking {#backtracking}

Consider a rule \\(G :- H\_1, H\_2, ..., H\_{n}\\)

If there are substitutions that fail on \\(H\_1\\), we will have to backtrack on the right on different inputs as well, and not just backtrack on different \\(G\\).

As you match and unify statements, cache your substitutions around and keep applying them.


#### occurs check {#occurs-check}

Most implementations for substitution on \\(a=T\\) doesn't ever check that \\(a\\) doesn't occur in \\(T\\). But that's deviating from the semantics.


#### cut {#cut}

Backtracking can be super expensive, so PROLOG includes backtracking boundaries:

```prolog
A :- B,C,!,D
```

meaning if \\(D\\) fails, we don't try to resatisfy \\(B,C\\) with different variables and instead fail the entire rule.


### examples {#examples}


#### reverse a list {#reverse-a-list}

```prolog
% first we define a predicate for (a,b,_), if b is stuck to the right of a
addright(nil, X, [X]).
addright(cons(A,B), X, cons(A,Z)) = addright(B,X,Z)

% now, reverse is just done simply
rev(nil, nil).
rev(cons(X<y), Z) := rev(Y,W), addright(W,Y,Z)
```
