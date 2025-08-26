+++
title = "randomized algorithm"
author = ["Houjun Liu"]
draft = false
+++

[randomized algorithm]({{< relref "KBhrandomized_algorithum.md" >}}) is a type of algorithm, similar to [relaxation]({{< relref "KBhrelaxation_algorithums.md" >}}).

-   Make a hard problem easier by changing the problem
-   What if, instead of guaranteeing we find the best/correct answer, we only provide some chance of finding the best/correct answer?


## primality testing {#primality-testing}

[primality testing](#primality-testing) is very important for modern crypto systems; we need to be able to find large prime numbers, and be able to generate them quickly.


### traditional primality testing {#traditional-primality-testing}

We can divide every prime number below \\(\sqrt x\\). In theory, this is pretty fast, but we need to know all the primes we need to test.

This would therefore take \\(O(\sqrt{x})\\) time.


### miller-rabin primality testing {#miller-rabin-primality-testing}

[miller-rabin primality testing](#miller-rabin-primality-testing) is a [primality testing](#primality-testing) [randomized algorithm]({{< relref "KBhrandomized_algorithum.md" >}}).

-   Construct a set of equations, each one requiring an exponentiation and a division
-   If any of them is false, the number is composite
-   If they are all true, the probability that the number is composite is reduced to \\(\frac{1}{4}\\).

If we run miller-rabin 10 times \\(O(10)=O(1)\\), the number is \\(1-\left(\frac{1}{4}\right)^{10}\\) chance of being prime.

This is of course much much faster than [traditional primality testing](#traditional-primality-testing).

Modern cryptographic system uses this.