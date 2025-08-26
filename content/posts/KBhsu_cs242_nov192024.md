+++
title = "SU-CS242 NOV192024"
author = ["Houjun Liu"]
draft = false
+++

## Agda {#agda}

A whirlwind tour through [Agda](#agda)


### Agda whitespace rules {#agda-whitespace-rules}

Agda allows UNICODE! IN! VARIABLES! so:

`i:Int` is! not! `i : Int`

-   the first thing is an indentifier of type `i:Int`
-   the second thing is an `i` of type `Int`


### [Dependent Type Theories]({{< relref "KBhtype_theory.md#inductively-defined-types" >}}) with Agda {#dependent-type-theories--kbhtype-theory-dot-md--with-agda}


#### booleans {#booleans}

Consider two empty declarations:

```haskell
data False : Set where
```

this is a type with nothing in it!

```haskell
record True : Set where
```

this is a type with exactly one thing in it!

`False` has no elements in it, and `True` has exactly one element in it.

```haskell
trivial : True
trivial = _
```

since `True` only takes on one type, Agda can figure out the wild-card value is unique

```haskell
isTrue : Bool -> Set
isTrue true = True
isTrue false = False
```

we have now created True/False **AS TYPES**. We just mapped values to types.


#### less than {#less-than}

```haskell
_<_ : Nat -> Nat -> Bool
```

and now consider:

```haskell
_ < zero = false
zero < succ n = true
succ m < succ n = m < n
```


#### length of list {#length-of-list}

```haskell
length : { A : Set } -> List A -> Nat
length [] = zero
length (x :: xs) = succ (length xs)
```


### safe! list lookup {#safe-list-lookup}

we leverage the fact that `False -> A` has no candidates.

```haskell
lookup : {A : Set}(xs : List A)(n : Nat) -> isTrue (n < length xs) -> A
lookup [] n ()
lookup (x :: xs) zero p = x
lookup (x :: xs) (succ n) p = lookup xs n p
```

where `()` is a the "absurd pattern", and this can't execute.

and `p` is a proof that we show to Agda that `(n < length xs)`.


### standard datatypes {#standard-datatypes}

`Set` is the type of all small types (level 0 types in).


#### bool {#bool}

```haskell
data Bool : Set where
  false : Bool
  true : Bool
```

```haskell
not: Bool -> Bool
```

```haskell
not false = true
not true = false
```


#### numbers {#numbers}

```haskell
data Nat : Set where
  zero : Nat
  succ : Nat -> Nat
```

```haskell
plus : Nat -> Nat -> Nat
```

```haskell
plus zero m = m
plus (succ n) m =
  succ (plus n m)
```

notice that `succ` in this case is a **function** because in a [Dependent Type Theories]({{< relref "KBhtype_theory.md#inductively-defined-types" >}}) our data type can return other stuff.

Some rules about pattern matching....

-   patterns must be exaustive (every case must be covered)
-   patterns must be disjoint --- they cannot overlap in what they match (i.e. other languages have some matching order)


#### infix operators {#infix-operators}

`_op_` is the way that infix operators are defined, so:

```haskell
_+_ : Nat -> Nat -> Nat
zero + m = m
succ n + m = succ (n + m)
```

also that underscores represents where arguments can go, so if, then, else can be written as `if_then_else_`


#### List {#list}

```haskell
data List (A : Set) : Set
  where
    [] : List A
    _::_ : A -> List A -> List A
```


#### indexed type {#indexed-type}

```haskell
data Eq {A : Set} (x : A) : A -> Set where
  refl : Eq x x
```

this is an [indexed type](#indexed-type), meaning the type of the data type is a function from A to a type in Set.

This means that there is a **different type** for every value of `x`.

<!--list-separator-->

-  example proof

    we want to prove "if m = n, then f m = f n"

    ```haskell
    cong : {A : set} {B : set} {m : A} {n : A} (f: A -> B) -> Eq m n -> Eq (f m) (f n)
    cong f refl = refl
    ```

    the key note that the left refl has a type `Eq m n`, the right refl is implicitly defined through considering `Eq`


#### let + where {#let-plus-where}

```haskell
trip : Nat -> Nat
trip n =
  let double = n + n
      triple = n + double
  in triple
```


#### lambda {#lambda}

```haskell
addZero : Nat -> Nat
addZero n = (\x -> x + zero) n
```


#### polymorphic types {#polymorphic-types}

```haskell
identity : (A : Set) -> A -> A
identity A x = x
```

and now you can make identity things such as:

```haskell
zero' : Nat
zero' = identity Nat zero
```

you will note that the polymorphism is explicitly instantiated (type inference is _not_ figured out for you, you said `A` is of a particular argument explicitly).


#### polymorphic types, implicitly {#polymorphic-types-implicitly}

obviously Agda **can** guess what the types of things are. So:

```haskell
identity : {A : Set} -> A -> A
identity x = x
```

and then you can write:

```haskell
zero '' : Nat
zero'' = identity Zero
```

you will note that subsequent type instantiation is now implicit.


#### records {#records}

```haskell
record Position : Set where
  field
    xc : Nat
    yc : Nat
```

you can create instances of this record

```haskell
pos : Position
pos = record { xc = zero; yc = succ(zero) }
```

along with the record constructor, you get selectors for each field (`Position.xc` etc...) defined for you:

```haskell
myxc : Position -> Nat
myxc p = Position.xc p
```

```haskell
myyc : Position -> Nat
myyc p = Position.yc p
```

our record constructors could have parameters, so:

```haskell
record Position : Set (A : Set) (B : Set) where
  field
    xc : A
    yc : B
```

and then you can create constructors with annotated types

```haskell
pos : Position Nat Nat
pos = record { xc = zero; yc = succ(zero) }
```
