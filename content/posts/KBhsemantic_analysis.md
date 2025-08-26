+++
title = "semantic analysis"
author = ["Houjun Liu"]
draft = false
+++

lower things into LLVM IR, HLO, etc. --- "analyze the sentences"

-   check type
-   catch inconsistency
-   scoping rules, etc.

Typical, we implement multiple passes for this because optimizing for multiple passes is quite hard. We need this because most grammars are not actually context free (for instance, scoping).


## what to check {#what-to-check}

1.  declaration of identifiers
2.  types
3.  inheritance relationships
4.  class efined once
5.  methods in a class defined only once
6.  reserved identifiers are not misused (i.e., inherits, etc.)


## example {#example}


### type errors {#type-errors}

```java
let y: String <- "abc" in y+3
```


### variables that don't exist {#variables-that-don-t-exist}

```java
let y : Int in x + 3
```


### scope {#scope}

the **scope** of an identifier is the portion of a program in which a particular identifier is accessible.

-   same identifier may refer to differet things
-   different scopes for the same name don't overlap
-   an identifier may have a restricted scope


#### static scope {#static-scope}

The scope you think scope means.


#### dynamic scope {#dynamic-scope}

```java
g(y) = let a <- 4 in f(3);
f(x) = a;
```

so now the `a` within `f` differs due to the call stack. Older programming languages use this, modern languages don't use this largely.


#### introduction of names/scopes {#introduction-of-names-scopes}

-   class declarations (class names)
-   method definitions (method names)
-   let expressions (objids)
-   formal parameters (objids)
-   attribute definitions (objids)
-   case expressions (objids)

Different classes have different scopes rules; classes, for instance, are globally visible. Attribute names are global within the class (this makes sense).

Now, consider:

```java
x: Int <- y;
y: Int <- x+1;
```

this means `x=0`, `y=1`; why? this is because the [operational semantics]({{< relref "KBhsu_cs242_oct152024.md#structural-operational-semantics" >}}) gives that the objects are first initialized to default before their values/initalizers are used.


### shadowing {#shadowing}

Needing to parse shadowing.

```c

    int i = 3;
    {
        int i = 4;
        cout << i;
    }
}
```


## implementing scope {#implementing-scope}

most semantic analysis is a recursive AST descent

-   **before**: begin process AST node `n`
-   **recurse**: process children of `n`
-   **after**: finish processAST node `n`

that is, we have to descend down and then reprocess up each node based on information gathered by the children. think:

```java
let x: Int <- 0 in ....
```

to typecheck this node, we first have to type check the initializer, and then add `x` to a symbol table, then check that the initialized value is the same as that of `x` declared, and then the rest of the body can be typed.

A symbol table, therefore, has a common API:

```C
enter_scope(); // start a new tested scope; when you are done you will pop it off
find_symbol(x); // finds current x, or returns null
add_symbol(x); // add a symbol x to the table
check_scope(x); // true if x is defined in the current, *top* scope
                // we have this because we can thereby check for duplicated variables within the same scope
exit_scope(x); // exit the current scope
```


## type {#type}

There's only one type, a `class`, for OOP languages. Many operations don't make sense for a particular type:

-   it doesn't make sense to adding a function pointer and an integer
-   it does make sense to add two integer

so... you have to check for yourself. Type systems specifies **which operations** are valid for **which types**.


### sound (type system) {#sound--type-system}

a sound type system is such that \\(\vdash e: T\\), then \\(e\\) evaluates to a value of type \\(T\\). We want sound rules, but not all sound rules are made the same

\begin{equation}
\frac{\text{i is an int literal}}{\vdash i: \text{Object}}
\end{equation}

is technically a correct rule, but it isn't the world's most precise one.


### statically typed {#statically-typed}

All or almost all type checking is a part of compilation. C, Rust, etc.

Static typing makes stuff faster often, because type checking involves a lot of dynamic computation which can't be branch predicted, which is quite expensive.

Most of the time, most typed languages has a way to break the type system (i.e., unsafe casts) so its still sometimes run time checked types.


### dynamically typed {#dynamically-typed}

Almost all checking is done as a part of program execution (Scheme, Python, JS, etc.) Optional type rules exists, too, in Python.


### untyped {#untyped}

that is, assembly.


### types in COOL {#types-in-cool}

There are only two types of types in COOL, since [COOL]({{< relref "KBhsu_cs143_apr032025.md#cool" >}}) is an OOP language:

-   class names
-   SELF_TYPE

you can only declare a new type by declaring a class. The cool compiler has 2 jobs

1.  check types
2.  infer types for expressions (i.e., we will insert into the AST, on every single node, the type of the node---all inferred)

Two main parts: 1) type checking --- making sure that the programmers are not doing stuff they are not supposed to do 2) type inference --- inferring the types of some constructs based on other constructs.


#### rules of COOL {#rules-of-cool}

booleans

\begin{equation}
\frac{}{\vdash \text{false}: \text{Bool} }
\end{equation}

new

\begin{equation}
\frac{}{\vdash \text{new T} : \text{T}}
\end{equation}

negation

\begin{equation}
\frac{\vdash e: \text{Bool}}{\vdash !e : \text{Bool}}
\end{equation}

while loop:

\begin{equation}
\frac{\vdash e\_1: \text{Bool}, \vdash e\_2: T}{\vdash \text{ while } e\_1 \text{ loop } e\_2 \text{ pool }: \text{ Object}}
\end{equation}

we report an error if nothing matches.

Environment lookups!

\begin{equation}
\frac{O\qty(x) = T}{O \vdash  x : T}
\end{equation}

Let expressions

\begin{equation}
\frac{O[T\_0 / x] \vdash e\_1: T\_1}{O \vdash \text{let } x : T\_0 \text{ in } e\_1: T\_1}
\end{equation}

the notation \\(O[T\_0 / x]\\) says "if, in environment \\(O\\), we set \\(x\\) to have type \\(T\_0\\)". This environment is implemented as a symbol table.

\begin{equation}
\frac{O \vdash e\_0: T\_0, O[T / x] \vdash e\_1: T\_1}{O \vdash \text{let } x : T\_0 \leftarrow e\_0 \text{ in } e\_1: T\_1}
\end{equation}

this is not quite great since subtyping is not allowed; let's try again:

\begin{equation}
\frac{O \vdash e\_0: T\_0, O[T / x] \vdash e\_1: T\_1, T\_0 \leq T}{ O \vdash \text{let } x: T \leftarrow e\_0 \text{ in } e\_1: T\_1}
\end{equation}

now let's think about assignments:

\begin{equation}
\frac{O\qty(x) = T\_0, O \vdash e\_1: T\_1, T\_1 \leq T\_0}{O \vdash x \leftarrow e\_1: T\_1}
\end{equation}

which looks similar to attribute initalizaiton

\begin{equation}
\frac{O\qty(x) = T\_0, O \vdash e\_1: T\_1, T\_1 \leq T\_0}{O \vdash x \leftarrow e\_1: T\_1}
\end{equation}


#### example {#example}

\begin{equation}
\qty(e\_1 : \text{Int} \wedge e\_2: \text{Int}) \implies e\_1 + e\_2 : Int
\end{equation}

In the bar notation:

\begin{equation}
\frac{\vdash e\_1: \text{Int}, \vdash e\_2: \text{Int}}{\vdash e\_1 + e\_2 : \text{Int}}
\end{equation}
