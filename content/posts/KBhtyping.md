+++
title = "typing"
author = ["Houjun Liu"]
draft = false
+++

what is a [type]({{< relref "KBhtyping.md" >}})? a [type]({{< relref "KBhtyping.md" >}}) is a set of values.


### consider {#consider}

`List[Int]`; importantly, `List` is _not_ a type; its a "type constructor" which takes a type as input (`Int`) and gives you as type as output `List[int]`.

`->` is another "type constructor"; its a type constructor written in infix notation. It takes two arguments, it constructs a type for set of functions which takes an integer as input and maps it to another integer `Int -> Int`


### types are rules of inference {#types-are-rules-of-inference}

"If Hypothesis is true, then Conclusion is true"
"If E1 and E2 have certain types, then E3 has a certain type"

For instance:

if \\(e\_1\\) has type `Int` and \\(e\_2\\) has type `Int`, then \\(e\_1 + e\_2\\) has type `Int`.


### inference rule notation {#inference-rule-notation}

\begin{equation}
\frac{\vdash H\_{1} \dots \vdash H\_{n}}{\vdash C}
\end{equation}

where each \\(H\_{j}, C\\) have the shape \\(\vdash e: T\\), that some \\(e\\) has type some \\(T\\)


#### summation {#summation}

\begin{equation}
\frac{\vdash e\_1 : Int, \vdash e\_2: Int}{\vdash e\_1+e\_2 : Int}
\end{equation}


#### combining rules {#combining-rules}

suppose you need to first show that \\(1\\) and \\(2\\) are integers

\begin{equation}
\frac{\frac{\vdash 1: \text{1 is an integer}}{\vdash 1 : Int}, \frac{\vdash 2: \text{1 is an integer}}{\vdash 2 : Int}}{\vdash 1+2 : Int}
\end{equation}


### type rules {#type-rules}


#### variables {#variables}

\begin{equation}
\frac{}{A, x: t \vdash  x: t}
\end{equation}

if you assume \\(x:t\\), then \\(x:t\\)


#### integers {#integers}

\begin{equation}
\frac{}{A \vdash i: int}
\end{equation}

we call \\(i\\) any int


#### function applications {#function-applications}

\begin{equation}
\frac{\begin{align}
&A \vdash  e\_1: t \to  t'\\\\
&A \vdash  e\_2 : t
\end{align}}{A \vdash e\_1e\_2: t'}
\end{equation}

if my function \\(f\\) takes \\(t\\) to \\(t'\\), then applying it to a \\(t\\) will give you a \\(t'\\)


#### abstraction {#abstraction}

\begin{equation}
\frac{A, x:t \vdash e: t'}{A \vdash \lambda x:t . e : t \to t'}
\end{equation}

if we can prove that with a thing \\(x\\) of type \\(t\\) we can force \\(e\\) to be type \\(t'\\), then the lambda wrapped around it would have the signature \\(t \to t'\\).


#### let {#let}

\begin{equation}
\frac{\begin{align}
&A \vdash \lambda x.e : t, A \\\\
&f: t \vdash  e' : t'
\end{align}}{A \vdash let\ f=\lambda x.e \text{ in } e' : t'}
\end{equation}


### environment {#environment}

Environments gives types for free variables---an environment is a function from variables to types.

Let \\(A\\) be a function from [free variables]({{< relref "KBhsu_cs242_oct032024.md#free-variables" >}}) to [type]({{< relref "KBhtyping.md" >}}). For instance, \\(A \vdash e:T\\), meaning "under the assumption that variables have types by \\(A\\), its provable that the expression \\(e\\) has type \\(T\\).

We have then tack on this on

\begin{equation}
\frac{A \vdash e\_1 : Int, A \vdash e\_2: Int}{A\vdash e\_1+e\_2 : Int}
\end{equation}


### variables {#variables}

\begin{equation}
\frac{A(x) = T}{A \vdash x:T}
\end{equation}


## religion {#religion}

For a type system that doesn't allow primitive recursion, there maybe type duplication because you can't assign a thing into multiple types.


## type inference {#type-inference}

see [type inference]({{< relref "KBhsu_cs242_oct102024.md#type-inference" >}})

for every new application, we wrote

\begin{equation}
\frac{A \vdash  f: t \to  t', A \vdash  e : t}{A \vdash f e: t'}
\end{equation}

now, we modify this with a new type variables

\begin{equation}
\frac{t=t' \to \beta, A \vdash  e\_1: t, A \vdash  e\_2 : t'}{A \vdash e\_1e\_2: \beta}
\end{equation}

and now, to actually type things, we just want to solve for \\(\beta\\). we then solve the constraints:

-   S, t = ⍺ =&gt; S, t = ⍺, ⍺ = t [Symmetry]
-   S, ⍺ = t1, ⍺ = t2 =&gt; S, ⍺ = t1, ⍺ = t2, t1 = t2 [Transitivity]
-   S, t1 → t2 = t3 → t4 =&gt; S, t1 → t2 = t3 → t4, t1 = t3, t2 = t4 [Structure]


### infiite solutions {#infiite-solutions}

Consider:

\begin{equation}
x = int \to x
\end{equation}


### constraint solving {#constraint-solving}

-   for each equation \\(A=B \in S\\), check that \\(A' = C(\emptyset, S, A)\\) is defined
-   [canonicalization]({{< relref "KBhsu_cs242_oct102024.md#canonicalization" >}})
