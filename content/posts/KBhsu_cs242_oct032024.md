+++
title = "SU-CS242 OCT032024"
author = ["Houjun Liu"]
draft = false
+++

## Lambda Calculus {#lambda-calculus}

Like [SKI Calculus]({{< relref "KBhcombinator_calculus.md" >}}), its a language of functions; unlike [SKI Calculus]({{< relref "KBhcombinator_calculus.md" >}}), there are variables.

\begin{equation}
e\to x \mid \lambda x.e \mid  ee \mid  (e)
\end{equation}

meaning, we have:

-   a variable \\(x\\)
-   an **abstraction** \\(\lambda x . e\\) (a function definition)
-   an **application** \\(e\_1 e\_2\\)

we call \\((\lambda x . e)e'\\) (a function and its argument, ready for reduction) a `redex`.


### abstraction {#abstraction}

```python
def f(x) = e
```

can be written as:

\begin{equation}
\lambda x.e
\end{equation}

this is just an anonymous function---it can be returned, etc.


### syntax {#syntax}

Association to the left: \\(f x y z = ((f(x))y)z\\). An lambda abstraction extends as far right as possible:

\begin{equation}
\lambda x.x \lambda y.y \to \lambda x.(x \lambda y . y)
\end{equation}


### substitution {#substitution}

variables requires us being able to substitute things.

-   \\(x [x:=e] = e\\) --- similar to \\(I\\)
-   \\(y [x:=e] = y\\) --- similar to \\(K\\)
-   \\((e\_1 e\_2) [x := e] = (e\_1 [x:= e]) (e\_2 [x:= e])\\) --- similar to \\(S\\)
-   \\((\lambda x . e\_1) [x := e] = \lambda  x . e\_1\\) --- shadowing; that is, during a function application if shadowing occurs, we don't use substitution
-   \\((\lambda  y . e\_1) [x:= e] = \lambda y . (e\_1 [x:= e])\\), if \\(x \neq y\\) and \\(y\not \in FV(e)\\); that is, we can only substitute if the contents of our substitution is not going to be changed by new variable bindings
    -   if we got caught by this rule, use an [alpha reduction](#alpha-reduction)


#### the last rule?! {#the-last-rule}

\\((\lambda  y . e\_1) [x:= e] = \lambda y . (e\_1 [x:= e])\\), if \\(x \neq y\\) and \\(y\\) doesn't appear free in \\(e\\)

Consider:

\begin{equation}
(\lambda  y . x) [x:= y]
\end{equation}

it would not make sense to substitute \\(x\\) inside the function for \\(y\\).

<!--list-separator-->

-  free variables

    The free variables are variables not bound in an application:

    -   \\(FV(x) = \\{x\\}\\)
    -   \\(FV(e\_1 e\_2) = FV(e\_1) \cup FV(e\_2)\\)
    -   \\(FV(\lambda x.e) = FV(e) - \qty {x}\\)


### reductions {#reductions}

we can mostly ignore [alpha reduction](#alpha-reduction) and [eta reduction](#eta-reduction) be rephrasing as "rename variables to avoid collision whenever needed".


#### beta reduction {#beta-reduction}

\\((\lambda x.e\_1)e\_2 \to e\_1[x:=e\_2]\\), we replace every occurrence of \\(x\\) in \\(e\_1\\) with \\(e\_2\\); we call \\(x\\) the **formal parameter**, and \\(e\_2\\) the **actual argument**


#### alpha reduction {#alpha-reduction}

we can rename variables to avoid collision; \\(\lambda x. e = \lambda z . e [x := z]\\), with a fresh \\(z\\) (to avoid conflicting variables).


#### eta reduction {#eta-reduction}

\\(e = \lambda x . e x\\), \\(x \not \in FV(e)\\)


### evaluation order {#evaluation-order}

-   [call-by-name]({{< relref "KBhcombinator_calculus.md#normal-order" >}}) (for correct termination): evaluate the arguments only when the function can be reduced
-   [call-by-value]({{< relref "KBhsu_cs242_oct082024.md#call-by-value" >}}) (more efficient): it evaluates the arguments _one time_ (even if the function makes copies of the arguments, we don't evaluate it again)


### Church-Rosser Theorem {#church-rosser-theorem}

[Lambda Calculus](#lambda-calculus)


### programming time {#programming-time}


#### non terminating expression {#non-terminating-expression}

\begin{equation}
(\lambda x . x x) (\lambda x . x x) = (\lambda x . x x) (\lambda x . x x)
\end{equation}


#### y-combinator {#y-combinator}

\begin{equation}
Y = \lambda f . (\lambda  x . f (x x)) (\lambda  x . f ( x x))
\end{equation}

let's do it a few times:

\begin{equation}
Y g a \to (\lambda x . g (x x)) (\lambda x g ( x x)) a \to g ((\lambda x g ( x x)) (\lambda x g ( x x))) a
\end{equation}


#### booleans {#booleans}

-   \\(True\ x\ y = x\\)
-   \\(False \ x\ y = y\\)

to abstract this to combinators, we just put \\(\lambda\\) in front of each argument and we are done:

-   \\(True= \lambda x . \lambda y. x\\)
-   \\(False = \lambda  x. \lambda y .y\\)

we can recycle the combinator-based definitions for SKI to deal with the rest of the boolean logic: [conditionals]({{< relref "KBhcombinator_calculus.md#conditionals" >}})


#### pairs {#pairs}

-   \\(pair = \lambda a. \lambda b . \lambda f . f a b\\)
-   \\(fst = \lambda x. \lambda y. x\\)
-   \\(snd = \lambda x. \lambda y. y\\)


#### numbers {#numbers}

-   \\(0 f x = x\\), so \\(0 = \lambda f . \lambda x . x\\)
-   \\(succ\ n\ f\ x = f(nfx)\\), so \\(succ  = \lambda n . \lambda f . \lambda x. f (n f x)\\)


#### factorial {#factorial}

p = λp. pair (mul (p fst) (p snd)) (succ (p snd))
! = λn.(n p (pair one one) fst)


#### Algebraic Data Type {#algebraic-data-type}

```nil
Type T = constructor1 Type11 Type12 ... Type1n |
         constructor2 Type21 Type22 ... Type 2m |
         ...
```

-   **algebraic**: because the constructor packages up the arguments
-   the constructor is a "tad" naming the case of the ADT being used
-   **deconstructors** recovers the arguments of the constructor to use it

<!--listend-->

```nil
Type List = nil |
            cons Nat List
```

<!--list-separator-->

-  encoding ADTs in lambda calculus

    Consider an [ADT](#algebraic-data-type) \\(T\\) with \\(n\\) constructors; let each constructor have \\(k\\) arguments; so---here's an example constructor:

    \begin{equation}
    \lambda a\_1 . \lambda a\_2 \dots  \lambda a\_{k}. \lambda f\_1 . \lambda f\_2 \dots  \lambda  f\_{n} f\_i a\_1 a\_2 \dots a\_{k}
    \end{equation}

    each constructor must have \\(n\\)

<!--list-separator-->

-  natural numbers

    ```nil
    Type Nat = succ Nat |
               0
    ```

    we have two constructors---

    \begin{equation}
    succ  = \lambda n . \lambda f. \lambda x. f(n f x)
    \end{equation}

    \begin{equation}
    0 = \lambda f . \lambda x. x
    \end{equation}


### examples {#examples}

-   identity \\(I\\): \\(\lambda x . x\\)
-   constant \\(K\\): \\(\lambda z . \lambda y . z\\)


### numbers {#numbers}
