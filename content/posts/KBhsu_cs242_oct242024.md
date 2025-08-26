+++
title = "SU-CS242 OCT242024"
author = ["Houjun Liu"]
draft = false
+++

## Object {#object}

The functional core still stays:

\begin{equation}
e \to x | \lambda  x. e | e e
\end{equation}


### Records {#records}

Named fields with values:

\begin{equation}
[flag = False, value = 42]
\end{equation}

"each element of the tuple has a name, and order is unimportant"

If the fields are fixed, they are basically just ADTs.


### Record Type {#record-type}

All functions are types, and so are the methods; so we can just add more types for the methods as well. So here's two properties and a method:

\begin{equation}
[flag = False, value = 42, add: Int \to Int]
\end{equation}


#### "self" {#self}

We will have something that's a recursive data type:

\begin{equation}
X = [flag = False, value = 42, first: X \to Bool, first: X \to Int]
\end{equation}

All methods will always take the self parameter first, and then take anything else after as needed.


### Objects {#objects}

Objects is a collection of fields and methods on those methods


## Object Calculus {#object-calculus}

\begin{equation}
o = [\dots, l\_{i} = \zeta (x) b\_{i}, \dots]
\end{equation}

object calculus is a map between field names and object producers.

-   **selection**: \\(o. l\_{i} \to  bi [ x := o]\\) (i.e. invoke with self)
-   **override**: \\(o.l\_{i} \Leftarrow \zeta (y) b \to  o\\) with \\(l\_{i} = \zeta (y) b\\) (i.e. set new method value)


### wait what about fields! {#wait-what-about-fields}

Well, we just have a method that returns a contsant, such as:

\begin{equation}
o = [l = \zeta(x) 3]
\end{equation}

Look, when we ask for \\(o.l\\) we will just get \\(3\\) because \\(3[x := o] = 3\\).


### recursion {#recursion}

\begin{equation}
o = [l = \zeta(x) x . l]
\end{equation}

or

\begin{equation}
o = [l = \zeta(x) x]
\end{equation}

invoking \\(o.l\\) will either get you back \\(o.l\\) or \\(o\\) in these things, enabling recursion.


### programing with overrides {#programing-with-overrides}

For instance, we can get a thing to rewrite itself!

\begin{equation}
o = [I = \zeta(y) (y.l \leq \zeta (x) x )]
\end{equation}

Meaning:

\begin{equation}
o.l \to  o.l \Leftarrow  \epsilon (x) x \to  [I = \zeta(x) x]
\end{equation}


#### numbers {#numbers}

```python
zero = [ iszero = s(x) true,
         pred = s(x) x,
         succ = s(x) (x.iszero <= s(y) false).pred <= s(y) x]
```

that is, in successor, we can keep rolling the number back


### transforming lambda calculus into object calculus {#transforming-lambda-calculus-into-object-calculus}

-   \\(T(x) = x\\)
-   \\(T(e\_1 e\_2) = \qty(T(e\_1) . arg \Leftarrow \zeta(y) T (e\_2)).val\\)
-   \\(T(\lambda  x . e) = [arg = \zeta(x) x. arg, val = \zeta(x) T (e) [x := x.arg]]\\)

Key idea: a function is an object of two fields, an argument and a body.

**note that the default argument field for a non-invoked lambda is just an infinite loop, its only a dummy value**


### transforming object calculus into lambda calculus {#transforming-object-calculus-into-lambda-calculus}

We will represent objects as lists of pairs: the first component is a label (an integer); the second component is the value of the methods/field---if there are more than one object with a particular value, we pick the first one (...which is how we do overrides).

Select a field:

\begin{equation}
o.i = \qty(o \qty(\lambda h. \lambda t. \text{ if } \qty(h.1) == 1 \text{ then } (h.2) \text{ else } t) \lambda x. x)
\end{equation}

And override (we just tack things up front):

\begin{equation}
o.i \Leftarrow f = cons(i,f) o
\end{equation}

**LIMITATION**: this can't work for types, because general overrides can't really work since the target of the override could be literally any types.


## subtyping {#subtyping}

\\(A < B\\) if an object with type \\(A\\) can be used in any context where something of type \\(B\\) is required.

\begin{equation}
\frac{E \vdash o: [l\_1 : B\_1, \dots, l\_{n}: B\_{n}], m < n}{E \vdash o: [l\_1 : B\_1, \dots, l\_{m}, B\_{n}]}
\end{equation}

that is, we can forget some fields and we can get a good type still.


## key tension... {#key-tension-dot-dot-dot}

If you want a typed object language, object method definition


### mainstream OO {#mainstream-oo}

Java, C++


#### properties {#properties}

-   **happens before type checking**: inheritance, static overrides, restrictions on superclass modification,, dynamic updates...
-   meaning, typing is **independent** of program evaluation
-   type checking after method assembly; each class is fully resolved


#### type checking {#type-checking}

-   inherentance is a static property
-   method override is resolved at compile time---before type checking


### functional -&gt; OO {#functional-oo}

OCaml, Haskell

We want to add some object orientation to a functional language---OO is a thin wrapper; to work around rough edges, we use higher order functions.


#### OCaml example {#ocaml-example}

```ocaml
let counter =
  object
    var mutable x = 0
    method get = 0
    method inc = x <- x + 1
  end;
```

This will give you a record type `val counter: <get: int, inc: unit >`---which is computed dynamically.

Unlike intermediate objects like the above, classes defined as a global scope _can_ be inherited.

```ocaml
class counter =
  object
    var mutable x = 0
    method get = 0
    method inc = x <- x + 1
  end;
```


### OO -&gt; functional {#oo-functional}

Java, C++

We want to add some functionalish components (higher order functions, parametric polymorphism) to our OO language:~:W

```java
(arg) -> { body }
```

like [Lambda Calculus]({{< relref "KBhsu_cs242_oct032024.md#lambda-calculus" >}})----

1.  functions are anonymous
2.  take one argument

parametric polymorphism = C++ templates:

```C++
template <class T>
class Test {
    private:
      T val;
    public:
    MyNum(T n) (val T) {};
}
```


### Dynamically Typed {#dynamically-typed}

"Give up"

Python, Javascript, LISP

noticeably more popular in the OO world (because static typing in OO is really hard)


#### prototypes {#prototypes}

Prototype-based systems are the analogies to type systems. New objects are created by copying the prototypes around.
