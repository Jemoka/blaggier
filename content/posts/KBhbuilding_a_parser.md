+++
title = "top-down parsing"
author = ["Houjun Liu"]
draft = false
+++

## recursive descent parsing {#recursive-descent-parsing}

Given the grammar:

```nil
E -> T | T + E
T -> int | int * T | (E)
```

And suppose our token stream is: (int5) We will start top-level non-terminal character `E`, and will try to apply the rules for `E` in order...

(this is exactly how you imagine one builds a parser via recursive backtracking)


### when does it break? {#when-does-it-break}

Consider `S -> S a`, this becomes `S -> S1 a`.

Notice it will break into:

```C
bool S1() { return S() && term(a); }
bool S() { return S1(); }
```

This is what we call a [left recursive grammar](#left-recursive-grammar)


#### left recursive grammar {#left-recursive-grammar}

That is, the grammar keep recurses to the left without termination.


#### fixing [left recursive grammar](#left-recursive-grammar)s for [top-down parsing]({{< relref "KBhbuilding_a_parser.md" >}}) {#fixing-left-recursive-grammar--org2ad4ab1--s-for-top-down-parsing--kbhbuilding-a-parser-dot-md}

For:

```haskell
S -> S a1 | ... | S an | b1 | ... | bm
```

We write:

```haskell
S -> b1 S' | ... | bm S'
S' -> a1 S' | ... | an S' | nothing
```

where nothing is the empty string.

<!--list-separator-->

-  example

    For the [left recursive grammar](#left-recursive-grammar)

    ```C
    S -> S a | b
    ```

    We can refactor as

    ```C
    S -> B S'
    S' -> a S' | nothing
    ```

    where nothing is \\(\epsilon\\)


### example! {#example}

We will define boolean functions to check the string for matches.

```c
// gobble up the token string pointer
bool term(TOKEN tok) { return *next++ == tok; }
```

Let's now match each of our productions.

```c
bool E1() { return T(); }
bool E2() { return T() && term(PLUS) && E(); }
bool E() {
    TOKEN *save = next;
    // that is, if E1 matches, return immediately
    // otherwise, we return our saved pointer in text (i.e. roll what what
    // checking E1 could goble), and roll back
    return (
            E1() ||
            (next=save, E2());
    )
}
```

```c
bool T1() { return term(INT) };
// ... you get the point
```
