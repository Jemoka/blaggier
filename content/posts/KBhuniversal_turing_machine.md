+++
title = "universal turing machine"
author = ["Houjun Liu"]
draft = false
+++

## bit string encoding {#bit-string-encoding}

encode a finite string in \\(\Sigma^{\*}\\) as a bit string: encoding each character in \\(\log | \Sigma |\\) bits (by basically IDing each bit).

For \\(x \in \Sigma^{\*}\\), define \\(b\_{\Sigma}(x)\\) to be its binary encoding.

For \\(x,y \in \Sigma^{\*}\\), to encode the pair of strings \\(x\\) and \\(y\\), we can encode tuples by adding just a separate symbol \\(\Sigma' = \Sigma \cup \qty {,}\\), and then we can write \\(x,y\\). (if we want to know how long \\(x\\) is ahead of time we can encode it by show you how long it is through zeros early---\\(0^{|b\_{\Sigma} (x)|} 1 b\_{\Sigma}(x) b\_{\Sigma}(y)\\).


## Turing Machine Encoding {#turing-machine-encoding}

we can encode a [turing machine]({{< relref "KBhturing_machinea.md" >}}) just by writing out its each part.

\\(n\\) state count, \\(m\\) tape symbol count (where the first \\(k\\) are input symbols), \\(s\\) start state id, \\(t\\) accept state id, \\(r\\) reject state id, \\(u\\) blank symbol ID, transitions \\((p,i), (q,j, D)\\) (i.e. start state, start tape, next state, next tape, movement directions)

the key is that this is constant size

being able to encode computation means that we can have languages defined by computation---

-   \\(A\_{DFA} = \\{(B,w) \mid B\\) encodes a DFA over some \\(\Sigma\\), and \\(B\\) accepts \\(w \in \Sigma^{\*}\\) \\(\\}\\)
-   \\(A\_{NFA} = \\{(B,w) \mid B\\) encodes a NFA over some \\(\Sigma\\), and \\(B\\) accepts \\(w \in \Sigma^{\*}\\) \\(\\}\\)
-   \\(A\_{TM} = \\{(B,w) \mid B\\) encodes a TM over some \\(\Sigma\\), and \\(B\\) accepts \\(w \in \Sigma^{\*}\\) \\(\\}\\)

(we will use a decoding such that any string decodes to a pair \\((A,b)\\), no matter if its useful or not---so we don't need to typecheck things; in particular, if there's some \\(x\\) which doesn't decode correctly, we just return \\((D, \varepsilon)\\) where \\(D\\) accepts nothing and \\(\varepsilon\\) remains to be the empty string.)

This means that:

\begin{equation}
\neg A\_{TM} = \qty { (M, w) \mid M \text{ does not accept } w}
\end{equation}


## Universal Turing Machine Theorem {#universal-turing-machine-theorem}

There exists a Turing machine \\(U\\) which takes as input:

1.  the code of an arbitrary Turing machine \\(M\\)
2.  an input string \\(w\\)

such that \\(U\\) accepts \\((M,w)\\) IFF \\(M\\) accepts \\(w\\). That is, \\(U\\) recognizes \\(A\_{TM}\\).

i.e.: \\(U\\) runs every Turing machine (think: programmable computers). Which, btw, isn't true of DFA/NFAs---the languages \\(A\_{DFA}\\) and \\(A\_{NFA}\\) is not regular

(in some sense, \\(U\\) is the "hardware" which drives the corresponding "software")


### \\(A\_{DFA}\\) is decidable {#a-dfa-is-decidable}

Because a [DFA]({{< relref "KBhdeterministic_finite_automata.md" >}}) is a special case of a Turing Machine. So we can run the Universal Turing machine on it and output its answer (we know DFAs terminate)---they always accept or reject.


### \\(A\_{NFA}\\) is decidable {#a-nfa-is-decidable}

perform [subset construction]({{< relref "KBhnondeterministic_finite_automata.md#id-4f5a240b-565b-4341-ab32-0b8b4540103f-dfa-s-are-equivalent-to-id-5520de84-0c82-4b31-97cb-51f7de4652dc-nfa-s" >}}), then do what's above (i.e. treat the DFA as a TM)


### \\(A\_{TM}\\) is recognizable but not decidable {#a-tm-is-recognizable-but-not-decidable}

We want to show that \\(A\_{TM}\\) is [recognizable]({{< relref "KBhturing_machinea.md#recognizable" >}}) but not [decidable]({{< relref "KBhturing_machinea.md#decidable" >}}); and \\(\neg A\_{TM}\\) is not recognizable (since \\(A\_{TM}\\) is only recognizable and not decidable, we know that \\(\neg A\_{TM}\\) can't even be recognizable; otherwise, we would satisfy [L is decidable IFF L and not L are both recognizable]({{< relref "KBhturing_machinea.md#l-is-decidable-iff-l-and-not-l-are-both-recognizable" >}}) and that would make \\(A\_{TM}\\) decidable).


#### \\(A\_{TM}\\) is undecidable {#a-tm-is-undecidable}

<!--list-separator-->

-  constructive proof

    Suppose we have a \\(H\\) that recognize \\(A\_{TM}\\).

    \begin{equation}
    H((M,w)) =
    \begin{cases}
    \text{Accept}, \text{if $M$ accepts $W$} \\\\
    \text{Reject or loops}, \text{if $M$ does not accept (including loops) $W$} \\\\
    \end{cases}
    \end{equation}

    let us define a new machine \\(D\\) which runs the encoding of \\(M\\) on \\(M\\): which run \\(H\\) on \\((M,M)\\) and output the opposite of \\(H\\) if it does halts; otherwise, \\(D\\) keeps looping.

    \begin{equation}
    D(M) =
    \begin{cases}
    \text{Reject}, \text{if $M$ accepts $M$} \\\\
    \text{Accept}, \text{if $M$ does not accept $M$} \\\\
    \text{Loops}, \text{if $M$ loops on $M$}
    \end{cases}
    \end{equation}

    plugging in \\(D\\) for \\(M\\), note that the first two options are still impossible but the last option is possible ("D loop if D loops on D"). So D must loop on D. Hence, \\(\qty(D\_{h}, D\_{h})\\) is not in \\(A\_{TM}\\) (it loops), yet \\(H\\) loops on it instead of rejecting it. So \\(A\_{TM}\\) is undecidable.

<!--list-separator-->

-  contradiction proof

    Suppose there is a machine \\(H\\) which decides \\(A\_{TM}\\). This means that:

    \begin{equation}
    H((M,w)) =
    \begin{cases}
    \text{Accept}, \text{if $M$ accepts $W$} \\\\
    \text{Reject}, \text{if $M$ does not accept (including loops) $W$} \\\\
    \end{cases}
    \end{equation}

    let us define a new machine \\(D\\) which runs the encoding of \\(M\\) on \\(M\\): which run \\(H\\) on \\((M,M)\\) and output the opposite of \\(H\\) (exists since we assumed that \\(A\_{TM}\\) is decidable (terminating)).

    \begin{equation}
    D(M) =
    \begin{cases}
    \text{Reject}, \text{if $M$ accepts $M$} \\\\
    \text{Accept}, \text{if $M$ does not accept (including loops) $M$} \\\\
    \end{cases}
    \end{equation}

    In particular, note that this has the same problem of [there are non-recognizable languages]({{< relref "KBhthere_are_non_recognizable_languages.md" >}}) --- if we ran \\(D(D)\\), if \\(D(D)\\) accepts, we have the property that \\(D\\) didn't accept \\(D\\); if \\(D(D)\\) rejects, then have the property that \\(D\\) accepts \\(D\\). This reaches a contradiction.
