+++
title = "SU-CS242 OCT220224"
author = ["Houjun Liu"]
draft = false
+++

## pairs {#pairs}

-   Constructor: \\(\qty(e,e')\\)
-   Destructor: \\(p.l, p.r\\) or \\(fst\ p\\), \\(snd\ p\\)
-   Type: \\(A \* B\\)


## currying {#currying}

Consider a function from pairs to a thing: \\(A \* B \to C\\)

We can instead construct a function: \\(A \to B \to C: \lambda a . \lambda b. f(a,b)\\)


## state and exception {#state-and-exception}

Both state and exceptions create "side information"----the side information is threaded through computation in a specific order; we create new primitives for manipulating side information.

This is the typical description of PL:

-   some lambda calculus semantics
-   additional features that give you escape hatches


### But why not just put it as a pure function? {#but-why-not-just-put-it-as-a-pure-function}

try just put the state in a pair

\begin{equation}
a \* s \to b \* s
\end{equation}

every function must take and expose a state.

or we can curry the state:

\begin{equation}
a \to (s \to b \* s)
\end{equation}

In particular, we can create a state transformer: \\(M b = s \to  b \* s\\) (i.e. the right side; that is, we can't get the \\(b\\) out without doing the computation to unwrap \\(Mb\\) with state)

THIS IS A [monad]({{< relref "KBhmonad.md" >}})!


## exception {#exception}

In an [exception](#exception) system, operations has two forms:

\begin{equation}
E \vdash e \to  v
\end{equation}

or

\begin{equation}
E \vdash e \to Exc(v)
\end{equation}

that is, the evaluate produces a normal value, or produce an exception that may wrap an value. Further evaluation must be _strict_ in the exception---if anyone touches that value, it should return that value unless yo you are a handler.


### semantics of exceptions {#semantics-of-exceptions}

variables

\begin{equation}
\frac{}{E \vdash  x \to E(x)}
\end{equation}

integers

\begin{equation}
\frac{}{E \vdash i \to i}
\end{equation}

closures

\begin{equation}
\frac{}{E \vdash \lambda x . e \to  < \lambda x . e , E >}
\end{equation}

raising

\begin{equation}
\frac{E \vdash  e \to v}{E \vdash \text{raise } e \to Exc(v)}
\end{equation}

application, part1: exception propagation in function

\begin{equation}
\frac{E \vdash e\_1 \to  Exc(v)}{E \vdash e\_1 e\_2 \to  Exc(v)}
\end{equation}

application, part2: exception propagation in value

\begin{equation}
\frac{E \vdash e\_1 \to  < \lambda  x . e\_0, E ' >, E \vdash e\_2 \to  Exc(v)}{E \vdash e\_1 e\_2 \to  Exc(v)}
\end{equation}

application, part 3: normal abstractions

\begin{equation}
\frac{E \vdash e\_1 \to < \lambda  x . e\_0, E' >, E \vdash e\_2 \to v, E'[x: v] \vdash e\_0 \to v'}{E \vdash e\_1 e\_2 \to v'}
\end{equation}
