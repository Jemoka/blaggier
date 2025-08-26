+++
title = "SU-CS242 OCT312024"
author = ["Houjun Liu"]
draft = false
+++

Problem: because [Object Calculus]({{< relref "KBhsu_cs242_oct242024.md#object-calculus" >}}) and [Lambda Calculus]({{< relref "KBhsu_cs242_oct032024.md#lambda-calculus" >}}) really can't be resolved in into one system, we have to decide either extending objects with lambda (Java, C++), or extend lambda with objects (OCaml, Haskell).


## memory safety {#memory-safety}

This is a problem introduced during manual memory management: pointers or references needs to be checked whether they point to a thing of the correct type --- key problem in C/C++ (double free, wild pointer, out of bounds accesses).

to ensure memory safety, we have three approaches:

1.  automatically via dynamic garbage collectors
2.  systematic but unenforced programming discipline (i.e. have system specific memory management best practices)
3.  have the static type system do it for you


### garbage collection {#garbage-collection}

key properties----

-   deallocation is done automatically: "objects that will never be used again are safe to deallocation"
-   no pointer arithmetic allowed (grantees that one can't make a pointer that GC doesn't know about)---only **references** are returned (i.e. its a pointer without pointer arithmetic and has a known type)
-   array indexing is always bounds checked

Pros: memory safe; Downside: array bounds checking is super expensive, GC is inefficient when the working set of memory is large, and GC has unpredictable delays.


### some programming discipline {#some-programming-discipline}

"ownership" tracking needs to be clear:

```c
void my_func() {
    int *ptr = (int*) malloc(sizeof (int));
    *ptr = 42;
    api_call(ptr);
}

void api_call(int *p);
```

after this, both `my_func` and `api_call` has access to `ptr`. So, who's responsible for deallocating this memory?

Solution: **one pointer** has to be designated to be the owner; meaning, it is the only pointer that could be used to deallocate the memory: you better have a unique owner.

Ownership rules for a given system is often documented as a part often comments: nothing in this system enforces particularly correct use. It's always a possibility that people do it incorrectly.


#### aliasing {#aliasing}

In the example above, `p` and `ptr` are both **names** for the int allocated up top; they are therefore _aliases_ with each other.

During allocation, we need to know that either "no aliases exist" or "no aliases will be deferenced"


#### aliasing control {#aliasing-control}

```c
void copy(char *x, char *y);
```

so what happens during `copy(x,x)`? One convention is to write:

```c
void copy(restrict char *x, restrict char *y);
```

which says "we promise that `x` and `y` can't be aliased to anything else in scope".

-   aliasing is bad
-   state can be modified in one name and those changes are visible through a different name
-   aliasing is really common in real programs---OOP code is particular bad at this and may generate aliasing


#### restrict mutation {#restrict-mutation}

Maybe aliasing isn't actually the problem.... Really, we want to disallow mutation. (Problems arise when aliases and mutation co-occur: because we can change pointer values under us)

Much of the computation problems have quite efficient algorithms without mutation; yet some things like array update is `O(1)` for all cases except for functional-type languages, where `O(log N)` is the best known functional update (certain matrix algorithms may not be possible).

```rust
let x = 5;
let mut x = 5;
x = 3; // only possible when x is mut
```

```sml
let x = 5;
let x = ref 5; (* now mutable! *)
    x := 3
```

i.e.: if you want something to change, you have to do something special---make these points obvious in syntax, make the program looks ugly when mutable.


### ownership types {#ownership-types}

That is, baking the idea of ownership into the typ esystem.

-   there's always a single _owner_ referencing an object (owning: responsible for the resources of the object)
-   if an object has no owner (when the owner goes out of scope), it will be deallocated
-   `x=y` will remove ownership from `y` and transfers it to `x` (we can't even use `y` after such a copy)

Typical ownership rules are very restrictive because the program must be linear. So, we use the following techniques:

-   using immutabel data structures when possible
-   deep copies are fine
-   borrowing creates a reference that can be used
    -   doesn't transfer ownership
    -   implies a borrowed reference can't deallocate an object
    -   owner can't deallocate objects until all borrowed refrences are returned
    -   borrowed references have a different syntax and type


#### lifetime {#lifetime}

Rust reasons about ownership through _lifetimes_: the **lifetime** of a variable is the span between its definition and its **last use**---a lifetime is a subset of the scope (i.e. if you stopped using a variable earlier than it going of scope).

Unique owner: lifetime of owners of an object cannot overlap.

This is called a [linear type discipline](#lifetime): you will never have an aliasing problem (beaches only one name is available at any time for an object).

If there were not borrowing in rust, it would be purely linear; that also makes writing non-trivial programs impossible because you can't write things like iterators (because it needs a pointer to the root and a pointer to the current value).

A larger lifetime could be subtypes for a shorter lifetime: \\(L <: L'\\) where \\(L\\) is **longer** than \\(L'\\).


#### borrow {#borrow}

"[borrow](#borrow)ing" is aliases in rust with tighter semantics. You can't call free on a borrow.

-   borrow cannot outlive its owner: the lifetime of a borrow is contained within the lifetime of its owner
-   a borrow can't deallocate its object---that's why its a borrow
-   there can only be one mutable borrow to an object in scope, and any number of readers


#### explicit lifetimes {#explicit-lifetimes}

Suppose we want to return the longer of two strings:

```rust
fn longest(x: &str, y: &str) -> &str;
```

`x` and `y` may not have the same lifetime, and we don't know that the lifetime of the result could be.

This requires some discussion of if statement:

\begin{equation}
\frac{A \vdash e\_1: Bool, A \vdash e\_2: T, A \vdash e\_3: T}{A \vdash \text{$e\_1$ then $e\_2$ else $e\_3$}:T}
\end{equation}

that is, both branches of an `if` statement must return the same type, otherwise it has n way to type check the output type.

An ownership type, then, requires that the _lifetime_ of these two branches to be the same. We will therefore take in lifetime information:

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str;
```
