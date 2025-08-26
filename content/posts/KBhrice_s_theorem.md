+++
title = "Rice's Theorem"
author = ["Houjun Liu"]
draft = false
+++

For some predicate \\(P\\):

\begin{equation}
P: \qty {TM} \to \qty {0,1}
\end{equation}

think of \\(0\\) (false), \\(1\\) (true), where \\(P\\) satisfies:

1.  **non trivial**: there are Turing Machines \\(M\_{yes}\\), \\(M\_{no}\\) such that \\(P(M\_{yes}) = 1\\), and \\(P(M\_{no}) = 0\\)
2.  **semantic**: for all Turing Machines \\(M\_1\\) and \\(M\_2\\), if \\(L(M\_1) = L(M\_2)\\) then \\(P(M\_1) = P(M\_2)\\)

then, the language \\(L = \qty {M \mid P(M) = 1}\\) is undecidable.

to do this, check if \\(P(M\_{\emptyset}) = 0\\) or \\(P(M\_{\emptyset}) = 1\\); if the former, then ATM reduces to your language and your language isn't decidable. If the latter, than not ATM reduces to your language and your language isn't recognizable.


## Proof {#proof}


### Rice's Undecidable {#rice-s-undecidable}

Basic idea: reduce \\(A\_{TM}\\) or \\(\not A\_{TM}\\) to \\(L\\).

Let us define \\(M\_{\varnothing}\\) such that \\(L(M\_{\emptyset}) = \emptyset\\)

-   case 1: \\(P(M\_{\emptyset}) = 0\\), since \\(P\\) is non-trivial, there is an \\(P(M\_{yes}) = 1\\)
    -   reduction from \\(A\_{TM}\\) to \\(L\\) (i.e. \\(L\\) is not decidable)
        -   for \\((M,w)\\), we produce \\(M\_{w}(x)\\) for which both \\(M\\) accepts \\(w\\) AND \\(M\_{yes}\\) accepts $x$---meaning, \\(L(M\_{w}) = L(M\_{yes})\\) when \\(M\\) accepts \\(w\\); meaning \\(P(M\_{yes}) = 1\\), we have \\(P(M\_{w}) = 1\\) (because \\(P\\) is semantic); and so \\(M\_{W} \in  L\\)
        -   if \\(M\\) doesn't accept \\(w\\), then \\(L(M\_{w}) = L(M\_{\emptyset}) = \emptyset\\), and similarly, \\(P(M\_{\emptyset} = 0)\\), so we have \\(M\_{W} \not \in L\\)
-   case 2: \\(P(M\_{\emptyset}) = 1\\), since \\(P\\) is non-trivial, there is an \\(P(M\_{no}) = 0\\)
    -   reduction from \\(\neg A\_{TM}\\) to \\(L\\) (i.e. \\(L\\) is not even recognizable)
        -   for \\((M,w)\\), we produce \\(M\_{w}(x)\\) for which both \\(M\\) accepts \\(w\\) AND \\(M\_{no}\\) accepts \\(x\\); if \\(M\\) doesn't accept \\(w\\), we have \\(L(M\_{w}) = L(M\_{\emptyset}) = \emptyset\\), since \\(P(M\_{\emptyset}) = 1\\), then \\(M\_{w} \in L\\); otherwise, if \\(M\\) accepts \\(w\\) then \\(L(M\_{w}) = L(M\_{no})\\), similarly, since \\(P(M\_{NO}) = 0\\), we have \\(P(M\_{w}) = 0\\), so \\(M\_{w}\\) is not in \\(L\\)


## Examples of Predicates that are Semantic {#examples-of-predicates-that-are-semantic}

-   M accepts 0
-   for all w, M(w) accepts IFF M(wr) accepts
-   L(M) = {0}
-   L(M) is empty
-   L(M) = sigma^\*
-   M accepts 154 strings

these are all therefore all undecidable!


## Some Motivation {#some-motivation}

**It's not always easy to tell if stuff is decidable.**

Key example:

\begin{equation}
\qty {(M,w) \mid M\text{ is a turing machine that on $w$ tries to move its head past the left of the input}}
\end{equation}

(i.e. where you pump against the wall)

\begin{equation}
\qty {(M,w) \mid M\text{ is a turing machine that on $w$ tries to move its head left, at least once}}
\end{equation}

---

problem 1 is undecidable, and the second one is decidable!


### problem 1 {#problem-1}

we can reduce \\(A\_{TM}\\) to \\(L'\\)

In particular, let us take input \\((M,w)\\), we will make a truing machine that \\(N\\) that shifts \\(w\\) over by one cell, and marks a special symbol `$` on the now-empty leftmost cell. If \\(M\\) tries to move to the cell with `$` but haven't yet accepted, we move its head back one step to the right; if \\(M\\) accepts, we then roll our way all the way to the left.

Hence, \\(A\_{TM}\\) reduces to \\(L'\\). If \\(L\\) is decidable, then \\(A\_{TM}\\) should be too. But it isn't.


### problem 2 {#problem-2}

on input \\((M,w)\\), run \\(M\\) on \\(w\\) for \\(|Q|+|w|+1\\) for \\(|Q|\\) number of states of \\(M\\).

-   accept if \\(M\\) ever move to the left
-   reject otherwise

acceptance is clear; we can reject after \\(|Q|+|w|+1\\), after moving to the right \\(|w|+1\\) steps, we will get to an empty cell; we will then move over \\(|Q|\\) more times. After this, by pigeonhole we will land in another state which we have seen before. We are hence in a similar situation as before, which means we will keep moving forwards the right.
