+++
title = "SU-CS242 OCT082024"
author = ["Houjun Liu"]
draft = false
+++

[Lambda Calculus]({{< relref "KBhsu_cs242_oct032024.md#lambda-calculus" >}}), [typing]({{< relref "KBhtyping.md" >}})


## hyperstrict {#hyperstrict}

aggressively reduce everything


## call-by-value {#call-by-value}

we recursively evaluate the argument before reducing the function application


## implementing lambda calculus {#implementing-lambda-calculus}

we can implement [Lambda Calculus]({{< relref "KBhsu_cs242_oct032024.md#lambda-calculus" >}}) through abstracting it into [SKI Calculus]({{< relref "KBhcombinator_calculus.md" >}}):

observe that \\(\lambda x.e \implies A(E, x)\\); for each expression \\(e\\), we replace the innermost lambda expression \\(\lambda x.e'\\) in \\(e\\) by \\(A(e', x)\\).


## simply typed [Lambda Calculus]({{< relref "KBhsu_cs242_oct032024.md#lambda-calculus" >}}) {#simply-typed-lambda-calculus--kbhsu-cs242-oct032024-dot-md}

Recall normal lambda calculus:

\begin{equation}
e \to x | \lambda x.e | e e
\end{equation}

we will now add an additional rule for typed lambda calculus:

\begin{equation}
e \to x | \lambda x: t.e | e e| i
\end{equation}

where we define types:

\begin{equation}
t \to \alpha | t \to t | Int
\end{equation}

either a type variable, a function from type to type, or an integer.

-   FUNCTION CURRYING ASSOCIATION IS TO THE RIGHT: \\(a \to b \to c\\) associates like \\(a \to (b \to c)\\)
-   we don't allow recursive types (and correlate: anything in this system will therefore terminate)


### some examples {#some-examples}


#### identity {#identity}

\begin{equation}
\frac{x: \alpha  \vdash  x: \alpha}{\vdash  \lambda x : \alpha . x : \alpha \to \alpha }
\end{equation}


#### K {#k}

\begin{equation}
\frac{x: \alpha , y: \beta \vdash x: \alpha }{ \frac{x: \alpha \vdash \lambda y:\beta  . x \beta  \to  \alpha }{\vdash  \lambda x:\alpha . \lambda y: \beta . x: \alpha  \to \beta \to \alpha }}
\end{equation}
