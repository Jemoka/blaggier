+++
title = "Approximation Algorithms"
author = ["Houjun Liu"]
draft = false
+++

## Probabilistically Checkable Proofs {#probabilistically-checkable-proofs}

Every statement that has a **polynomial time checkable** proof has such a proof where the verifier only reads \\(O(1)\\) (constant) bits of the proof such hat...

-   **perfect completeness**: correct statements will be accepted with probability 1
-   **soundness**: false statements will be rejected with probability 0.99 (with epsilon as the reading constant increases)


### PCP Theorem {#pcp-theorem}

For some constant \\(\alpha > 0\\), and for ever language \\(L \in NP\\), there exists a polynomial-time that makes every input \\(x\\) into a \\(f(x)\\) such that...

1.  if \\(x \in L\\), then \\(f(x) \in \text{SAT}\\)
2.  if \\(x \neq L\\), then there is no assignment that satisfies more than \\(\qty(1-\alpha)\\) fraction of \\(f(x)\\) clauses

That is, a sufficiently good approximation of [Max-SAT](#max-sat) will imply \\(P = NP\\) (because we cloud just us that [Max-SAT](#max-sat) to disambiguate whether or not \\(f(x)\\) has a maximum satisfiable over the line of \\((1-\alpha)\\) and declare it in or out of the language.


## Provability {#provability}

By definition everything in \\(NP\\) has a short and checkable proof (in polynomial time) ...same can go for coNP and if we **add interaction**.

**every problem in has an interactive proof!!!**


### Zero-Knowledge Proof {#zero-knowledge-proof}

This is a type of interactive proof that reveal **no knowledge** other than the membership query you asked; i.e. I give no witness but I will convince you.

You can actually formulate any **PSPACE** as a [Zero-Knowledge Proof](#zero-knowledge-proof).

You will notice that the proof above is kind of zero-knowledge (if I am simply trying to verify stuff is isomorphic, knowing which graph is isomorphic adds no other information)


## Approximation Hardness {#approximation-hardness}

For particular problems, we can't even **approximate** it well enough.

Interestingly, for many problems, we know exactly what the correct approximation factor is; we even know what the approximation boundary is, so beyond this line we know we can't solve it unless \\(P= NP\\).

To show these results, we will need approximation-preserving reductions


### approximation preserving reductions {#approximation-preserving-reductions}

for instance, (\\(3SAT \leq\_{P} \text{CLIQUE}\\)) is **very** approximation preserving because the size of the clique corresponds exactly to the number of clauses you can satisfy.

However, (\\(\text{IS} \leq\_{P} \text{{Vertex-Cover}}\\)) is super not approximation preserving; recall that our argument is that \\(V - IS\\) is a vertex cover, meaning \\(\qty(G, k) \Leftrightarrow (G, |V|-k)\\) is the sizes of the independent set and vertex covers respectively.

These are not good approximations of each other; suppose the minimum vertex cover is \\(k \ll n\\), this make the maximum independent set \\(n-k\\). An approximation of independent set will give a vertex cover size of \\(\frac{n}{c}\\) (since \\(k\\) is, as said before, very small), which means the approximate VC given would be \\(n - \frac{n}{c}\\) which may not be anywhere near \\(n-k\\).


## example {#example}


###  {#d41d8c}

Recall problem:

we want to find the smallest ---this could be approximated greedily which will find a which is at most twice as large as the original (a "two-approximation")

**the algorithm**: set \\(C = \emptyset\\), and while there exists an uncovered edge \\(e\\), add both endpoints of such an \\(e\\) to \\(C\\)

**prove**:

1.  it will work because for every uncovered edge, at least one of its endpoints is in the minimal vertex cover; so we add be greedy and just add both
2.  it 2x because we at most add 2x "extra" verticies


### Max-SAT {#max-sat}

given a (not just 3cnf), how many clauses can be satisfied? a **maximization problem** because we want to satisfy the maximal amount of clauses.

approximation: we can always satisfy a constant frication of all of the clauses: that is, when all clauses have at least 3 unique literals, we can satisfy at least 7/8 of all the clauses (i.e. we will get to \\(\geq \frac{7}{8}\\) clauses of the clauses than optimal solution).

We can't solve this even further (i.e. we can't solve up to \\(\frac{7}{8}+\varepsilon\\) for any \\(\varepsilon > 0\\)) without \\(P = NP\\). see [PCP Theorem](#pcp-theorem)


###  {#d41d8c}

for other problems (such as cliques), no constant approximation may even occur
