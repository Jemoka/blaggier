+++
title = "Quantum Group Project"
author = ["Houjun Liu"]
draft = false
+++

-   Viewing computational linguistics from the length across linear algebra and linear structure
-   Quantum algorithms and the necessary infra were being developed; and in the 2010s programmable quantum computers became showing up

Quantum is done over the complexes, which makes the normal linguistics done with the reals more powerful.

-   want to infer the probability distribution of words based on their letters
    -   Linearity breaks down: letter combinations in not commutative; and P(letter C) + P(letter A) != P(letters CA)

-   instead of encoding letters as one-hot vectors; we encode these letters with matrices: adds more dimensions
    -   immediate benefits:
        -   noncommutivity of matricies is a PLUS
        -   words is just the composed results into another 2x2 matricies
        -   then, to map into probability distrubtion, we map the matrix into a partial trace
            -


## things {#things}

-   create bounds from the problem: letters
-   improve upon optimization scheme in a quantum rhelm
-   implement this scheme on a quantum computer: <https://arxiv.org/pdf/1710.10248.pdf>

-   task: NTJ reading; come up with the needed novelty