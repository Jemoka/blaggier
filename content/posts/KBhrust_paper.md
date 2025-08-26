+++
title = "Rust Paper"
author = ["Houjun Liu"]
draft = false
+++

1.  if paper has software isolation using Rust, sort into software isolation categories
2.  if the paper does not, scan for incorrect claims and then sort into either irrelevant or wrong mutability (keywords: mutable, borrow, reference, invariant)

---

1.  IM/PUI does **not** cause an issue because of narrow extension interface (NetBricks)
2.  IM/PUI does cause an issue, and is handled
3.  IM/PUI does cause an issue, and is deferred to future work
4.  IM/PUI does cause an issue, and is ignored (RedLeaf, Splinter)
5.  No User Language Extension/No Isolation Needs

<!--listend-->

-   How many papers use Rust, how many use Rust for language extensions? (a count on these would be nice if possible)

-   Do they contain the interior mutability bug we discussed RedLeaf has? Specifically, if they offer an interface for extensions in Rust that allow users to define and pass arbitrary datatypes, do they assume that passing in a ref (&amp;T) means that T can't be modified during the function call? If T is a cell or an atomic, there are ref (&amp;) operations that allow you to modify T. Note that cells are not send/sync, so if the papers assume that the function call involves sending the T to another thread, this will automatically prevent the cell interior mutability issue. (probably)

-   Do they make any statements about <span class="underline">not being able to handle interior mutability in their extension interface?</span> This means they are likely aware of the interior mutability issue

and recognize they are not solving it, but defer to future work. A count of this would be nice to have.

-   Do they make statements like "&amp; = const", e.g. "Rust separates

immutable and mutable references; an immutable refer-
ence is a reference that when held restricts access to the
underlying object to be read-only." -- this is straight from the splinter paper. Note that this might not mean the authors don't know about interior mutability, but they might be simplifying for the reader.

---
