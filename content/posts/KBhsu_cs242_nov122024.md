+++
title = "SU-CS242 NOV122024"
author = ["Houjun Liu"]
draft = false
+++

## Haskell {#haskell}


### functional {#functional}

We can express lambda calculi

\begin{equation}
f = \lambda x . x \qty(\lambda y . y)
\end{equation}

```haskell
def f = \x -> x (\y -> y)
```

This is currently polymorphic


### Haskell primer {#haskell-primer}


#### pairs! {#pairs}

```haskell
dup' :: a -> (a,a)
dup' x = (x,x)
```

arrows here are right associative


#### pattern match {#pattern-match}

```haskell
fst :: (a,b) -> a
fst (x, _) = x
fst (x, _) = x
```

underscore has special meaning


#### lists! {#lists}

a list (cons)

```haskell
1 : 2
```

nil

```haskell
[]
```

we can also write

```haskell
[1,2]
```


#### ADTs {#adts}

```haskell
data IntList = IntCons Int IntList | IntNil
```

btw; you can also use `` `backticks` `` to infix something, so to construct something you can write

```haskell
12 `IntCons` IntNil
```


#### Generic ADTs {#generic-adts}

```haskell
data List a = Cons a (List a) | Nil
```

```haskell
l :: List String
```


#### dot operator {#dot-operator}

You can compose functions together---

```haskell
fn =  f1 . f2 . f3
```


#### lazy semantics / [normal order]({{< relref "KBhcombinator_calculus.md#normal-order" >}}) {#lazy-semantics-normal-order--kbhcombinator-calculus-dot-md}

Haskell is a [normal order]({{< relref "KBhcombinator_calculus.md#normal-order" >}}) language (...caveats, but basically). This makes side-effects (i.e. a case where the return value isn't used) is hard because side effects don't actually use the return value so it will never be evaluated.

Some solutions...

<!--list-separator-->

-  "impure" languages

    Don't evaluate normal order, and then have side effects directly.

    -   OCaml
    -   Scala
    -   F#

    this makes side effects easy but prevents normal order evaluation


#### monads {#monads}

notice that you can have monads encoded through ADTs

```haskell
data State s a = State (s -> (s,a))
```

whereby the `State` monad takes an old state in, and some new state and return value. But, we now have to write state and bind for each possible monad. So, we can abstract away by wrapping stuff in a monad instance.

To implement: typeclasses!!

A monad is defined already as---

```haskell
class Monad m where
  return :: a -> m a
  bind :: m a -> (a -> m b) -> m b
```

we can inherit this type class

```haskell
instance Monad (State s) where
  return = myReturnFunction
  bind = myBindFunction
```

now, we can then define functions that check if stuff inherits this typeclass

```haskell
-- silly monad thing
callBind :: Monad m => (a -> mb) -> m -> m
callBind f m1 m2 = bind m f...
```

this function is now generic over any monads


#### other typeclasses {#other-typeclasses}

```haskell
class Applicative m where
  pure :: a -> m a
  app :: m (a -> b) -> m a -> m b
```

so you write
