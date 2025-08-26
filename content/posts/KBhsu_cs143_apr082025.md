+++
title = "SU-CS143 APR082025"
author = ["Houjun Liu"]
draft = false
+++

## Lexer {#lexer}

Goal: identify tokens in the input string. Its a lot of regular expressions and DFAing.


### Example {#example}

Consider:

```java
if (i == j)
    z = 0;
else
    z = 1;
```

We want a **linear** algorithm for lexing, because quadratic algorithms are slow. The gaol here is to partition the input string into substrings.


### Let's make a Lexer! {#let-s-make-a-lexer}

1.  identify [token classes](#token-classes)
2.  describe which strings belong to each token


#### token classes {#token-classes}

[token classes](#token-classes) define all items of interest; this is dependent on the choice of language and the design of the parser.

We separate the language into a few known tokens:

-   **identifier**: strings of letters or digits starting with a letter
-   **integer**: non-empty string of digits
-   **keyword**: else, if, begin, etc.
-   **whitespace**: non-empty sequence of blanks, newlines, or tabs
-   **(**: (
-   **[**: [

    etc.

<!--list-separator-->

-  a note on empty strings

    Its very easy to write regexp which matches on empty strings, which will cause your lexer to spin forever because every position has infinite empty strings. So make sure you don't do that.


#### classifying tokens {#classifying-tokens}

1.  clasify each substring as a token
2.  return the value or lexeme of the token
    -   **lexeme**: the actual substring
    -   **token**: the classified [token class](#token-classes) which the substring belongs to

When we classify tokens, we want the "[rule of maximum munch](#classifying-tokens)":


#### throwing stuff away {#throwing-stuff-away}

We can just ignore 1) white spaces and 2) comments (what happens to `<keyword> <whitespace> <keyword>`? it just looks like `<keyword> <keyword>` which is fine).


### Can this be hard? {#can-this-be-hard}

Yes. Don't be FORTRAN: "white space is insignificant". And then suddenly you can't tell the difference between:

```fortran
      DO 5 I = 1,25
```

versus

```fortran
      DO 5 I = 1.25
```

where the latter is a variable named `DO5I` and the former is a do jump loop.

Or if you don't mix keywords and statements and now parsing takes forever.


## formalism {#formalism}


### language {#language}

see [language]({{< relref "KBhalphabet.md" >}})


### regular languages {#regular-languages}

See [regular language]({{< relref "KBhregular_language.md" >}}). For [properties of regular languages]({{< relref "KBhregular_language.md#properties-of-id-a8a2a1e4-9bb8-4a06-8218-5002136bab87-regular-language-s" >}}), we take a recursive definition for regular \\(A, B\\) and alphabet \\(\Sigma\\):

the following is regular---

-   empty string: \\(L\qty(\epsilon) = \qty {''}\\)
-   member of the set: \\(L\qty('c') = \qty {c}\\) where our particular \\(c \in \Sigma\\)
-   union: \\(L\qty(A + B) = \qty {w | w \in L(A)\ \cup\ w \in L(B) }\\)
-   concatenation: \\(L\qty(A B) = \\{vw | v \in L(A), w \in L(B)\\}\\)
-   clean star: \\(L(A^{\*}) = \qty {s\_1 \cdot \dots \cdot s\_{k} | k \geq 0, s\_{i} \in L(A)}\\)


### component {#component}

-   keywords: else = e+l+s+e, etc.
-   integers: digit = 0+1+2+...; integer = digit digit\* = digit+
-   identifier: letter (letter + digit)\*
