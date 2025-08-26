+++
title = "monad"
author = ["Houjun Liu"]
draft = false
+++

We can abstract common part of language features such as [state]({{< relref "KBhstate.md" >}}) and [exception]({{< relref "KBhsu_cs242_oct220224.md#exception" >}}). It allows programming these features in pure lambda calculus.

A monad \\(M a\\) is an abstract type---

the "normal" type is \\(a\\), and we have the semantics hidden in \\(M\\).

-   **return**: \\(a \to Ma\\)
-   **bind**: \\(M a \to  (a \to  M b) \to  M b\\) --- it takes a monad, a function that takes the unwrapped thing and hands back a new monad, and returns that

bind is written with \\(v \gg = f\\) for monad \\(v\\) and function \\(f: a\to M b\\)


## discussion {#discussion}

Monads were used to explain stuff like state within Church theories; so languages are "core functional parts with monadic exceptions"---there's a set of monads which is built in, like state, exceptions, concurrencies, ec.


### upsides {#upsides}

-   "just programming": users can write their own monads
-   fairly ubiquitous in haskall


### downsides {#downsides}

-   programs using return and bind tends to be contagious
-   performance is bad: no free lunch
-   stuff ends up looking like C++


## state monad {#state-monad}

-   **return**: a -&gt; Ma = \\(\lambda v. \lambda s . (v,s)\\) (just give us the [state]({{< relref "KBhstate.md" >}}) transformer)
-   p **&gt;&gt;=** f: Ma -&gt; (a -&gt; Mb) -&gt; Mb = \\(\lambda s . let (v, s') = (p\ s)\ \text{in}\ f\ v\ s'\\)

"run p first against some state, get new state s' and resulting value, then apply this value to \\(f\\), and then run it on the new state; notice that this whole thing takes a state"


## exceptions {#exceptions}

```haskell
Exceptional e a =
  Success a |
  Exception e
```

the monad:

```haskell
monad M  = Exceptional e
```

```haskell
return := Success
```

bind:

```haskell
>>= :: M a -> (a -> M b) -> M b
v >>= f = case v of
  Exception I -> Exception I
  Success r -> f r
```

throw:

```haskell
throw = Exception
```

catch:

```haskell
catch e h = case e of
  Exception I -> h I
  Success r -> Success r
```


## partial functions {#partial-functions}

\\(Maybe(a)\\), that is `Option`

-   `head: List(a) -> Maybe(a)`
-   `div: int -> int -> Maybe(int)`

because these things may fail r not exist.

```haskell
Maybe a =
  Just a |
  Nothing
```

Composition:

```haskell
lx.let y = f x in
  case y of
    Nothing: Nothing
    Just v: g(v)
```

---

Notice how the above is tedious. We will then make this a monad.

```haskell
monad M = Maybe
```

**return**: `Just`

**bind**

with \\(v: Ma\\), \\(f: a \to Mb\\)

```haskell
v >>= f = case v of
  Nothing -> Nothing
  Just x -> f x
```

which means that we can write the above function:

```haskell
lx.x >>= f >>= g
```


## head of list {#head-of-list}

```haskell
head x = case x of
  Nil: Nothing
  Cons(a,as): Just(a)
```

taking the head of the head of the list

&lambda; l. return l &gt;&gt;= head &gt;&gt;= head
