+++
title = "Linear Algebra Errors"
author = ["Houjun Liu"]
draft = false
+++

## Gaussian Elimination Quiz {#gaussian-elimination-quiz}

-   Demonstrate that matrices' multiplication are not commutative (error: didn't consider \\(m\times m\\))
-   Which \\(2\times 2\\) matrices under multiplication form a group? (error: closure need to proved on **invertable** matrices under multiplication, not just \\(2\times 2\\))
-   Deriving Rotation matrices (error: clockwise vs counter-clockwise)


## Linear Independence Quiz {#linear-independence-quiz}

-   Connection between linear independence and systems equations (error: beated around the bush) --- the matrix of an nxn system of equations has a solution if the matrix's column vectors is linearly independent


## Basis and Dimension Quiz {#basis-and-dimension-quiz}

-   put 0 into a basis AAAA not lin. indep; figure out what the basis for a polynomial with a certain root is: it is probably of dimension m (instead of m+1), because scalars doesn't work in the case of p(3)=0; so basis is just the scalars
-   missing some inequality about basis? --- its just that lin.idp sets is shorter or equal to basis and spanning sets is longer or equal to basis


## Final, part 1 {#final-part-1}

-   definition of vector space: scalar multiplication is not an operation
-   straight forgot \\(dim(U+V) = dim U + dim V - dim (U\cap V)\\)
-   plane containing \\((1,0,2)\\) and \\((3,-1,1)\\): math mistake
-   proof: det A det B = det AB


## Final, part 2 {#final-part-2}

-   Counterproof: If \\(v\_1 \dots v\_4\\) is a basis of \\(V\\), and \\(U\\) is a subspace of \\(V\\) with \\(v\_1, v\_2 \in U\\) and \\(v\_3, v\_4\\) not in \\(U\\), \\(v\_1, v\_2\\) is a basis of \\(U\\)
-   Counterproof: if \\(T \in \mathcal{L}(V,V)\\) and \\(T^{2}=0\\), then \\(T=0\\)
-   Counterproof: if \\(s,t \in \mathcal{L}(V,V)\\), and \\(ST=0\\), then \\(null\ s\\) is contained in \\(range\ T\\)

---


## Product Spaces Quiz {#product-spaces-quiz}

-   Need more specific description: explain why we use product and quotient to describe product and quotient spaces?
-   Prove that \\(\mathcal{L}(V\_1 \times V\_2 \times \dots \times V\_{m}, W)\\) and \\(\mathcal{L}(V\_1, W) \times  \dots \times \mathcal{L}(V\_{m}, W)\\) are [isomorphic]({{< relref "KBhisomorphism.md" >}}). Error: didn't do it correctly for infinite dimensional


## Quotient Spaces Quiz {#quotient-spaces-quiz}

{{< figure src="/ox-hugo/2023-02-09_10-24-09_screenshot.png" >}}

-   Couldn't prove that the list in linearly independent: the linear combinations is some \\(c\_1v\_1 + \dots c\_{m}v\_{m} + U\\); as \\(v\_1 \dots v\_{m}\\) is a basis of \\(V / U\\), \\(c\_1 \dots c\_{m} = 0\\), now the second part is also a basis so they are \\(0\\) too.
    -   The spanning proof: \\(v + U =\\) , rewrite as basis, etc.
-   she graded wrong: what's the importance of \\(\widetilde{T}\\)?
-   Give two statements equivalent to \\(v+U = w+U\\), prove equivalence betewen this statement and the others
    -   didn't prove both directions!


## Polynomials Quiz {#polynomials-quiz}

-   state the fundamental theorem of algebra; error: \\(\mathcal{P}\_{m}(\mathbb{F})\\) is a [vector space]({{< relref "KBhvector_space.md" >}}) of [polynomial]({{< relref "KBhpolynomial.md" >}})s with degree _at most \\(m\\)_, and yet the FtOA requires _exactly \\(m\\)_


## Upper Triangular Quiz {#upper-triangular-quiz}

-   upper-triangular representation is findable when the space is 1) under complexes and 2) for finite-dimensional vector spaces; need BOTH conditions


## Upper Triangular Quiz {#upper-triangular-quiz}

-   UNCLEAR: Geometric Multipliicty is bounded by Algebric Multiplicity; Algebraic multiplicity ("real estate" taken on the upper-triangular diagonal) v. geometric multiplicity (amount of linearly independent eigenvectors included with that eigenvalue); so if geometric multiplicity &lt; algebraic multiplicity, the map is not diagonalizable because its not bringing enough linearly independent eigenvectors


## Diagonalization Quiz {#diagonalization-quiz}

-   enough eigenvalues go in only one direction: it existing means its diagonalizable, but the opposite isn't true
-   the proof for \\(T\\) is diagonalizable IFF the matrix \\(T\\) is similar to a diagonal matrix: [NUS-MATH530 Similar to Diagonal]({{< relref "KBhnus_math530_similar_to_diagonal.md" >}})


## Final, part 1 {#final-part-1}

-   State the complex spectral theorem (error: the condition of normality is a PARALLEL result)


## Final, Part 2 {#final-part-2}

-   Said this was true, but its not; \\(null\ T \bigoplus range\ T = V\\), \\(T\\) is diagonalizable;
-   Said this was true, but its false \\(T^{2}= 0\\) IFF \\(null\ T = range\ T\\)
    suppose \\(T=0\\), \\(T^{2} = 0\\). \\(null\ T = V\\), \\(range\ T = 0\\).
-   Spectral theorem doesn't define diagonalizability, it defines diagonalibility for ORTHONORMAL
-   missing derivation of the pseudoinverse