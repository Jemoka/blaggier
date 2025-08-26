+++
title = "Defensive Programming"
author = ["Houjun Liu"]
draft = false
+++

## Facts {#facts}

1.  Everybody writes bugs
2.  Debugging _sucks_


## Defensive Programming Tools + Techniques {#defensive-programming-tools-plus-techniques}

-   Use language features
-   Specs, documentations, [Test-Driven Development]({{< relref "KBhtesting.md#test-driven-development" >}}), unit testing
-   Fail fast and loudly
-   Systematic debugging
-   Investing in tools


## Use Language Features {#use-language-features}

-   Descriptors: static, final, pub./priv.
-   Type checking: prevent type errors
-   Automatic array bounds checking
-   Memory management
-   Compiler optimization

Key idea: know what language features are available, why/when to use them. **don't work against the language in circumventing them**


## Specs, Docs., TDD, Unit Tests {#specs-docs-dot-tdd-unit-tests}

-   How should it work: specs
-   How does it work: docs
-   How will I know it works: TDD
-   How do I know it still works: unit tests

These all force you to _think_ about your code _before!!_ you write it so then you can correct them as soon as possible.


## Failing Fast and Failing Loudly {#failing-fast-and-failing-loudly}

1.  The earlier you recognize there is a problem, the easier it is to fix it
2.  Problems not fixed can be lost, covered up, or even **relied upon**
3.  Learn from every failure


### How do we put this into practice {#how-do-we-put-this-into-practice}

1.  Use asserts, exceptions, logging
2.  Fix/diagnose/track every bug, even if you choose not to fix it
3.  Add regression tests for every bug + run them regularly


## Systematic Debugging {#systematic-debugging}

[Systematic Debugging](#systematic-debugging) is a framework for debugging software.

1.  Reproduce the bug
2.  Reduce the bug to the smallest possible, repeatable test case
    1.  Faster test cases mean faster iterations in debugging
    2.  Smaller test cases help eliminate possible causes for error
3.  Find the root cause
    1.  Study data (logs, behavior, etc.), hypothesis, experiment, repeat
    2.  Change code and data to get more information
    3.  **FIXING SYMPTOM IS NOT ENOUGH**
4.  Fix the bug
5.  Add a regression test, and run all tests


### Reducing Test Case {#reducing-test-case}

-   Start with the data that uncovered the bug
-   Remove pieces of data until the bug no longer occurs
    -   Bracketing: create both a test case that fails and similar test cases that pass
    -   Binary search: remove/add back half of the data at a time
-   Can work from either end: start with everything and reduce until disappearance, or start with only one line and build until bug


### Finding the Cause {#finding-the-cause}

-   Trace through the program
-   View intermediate results
    -   Every iteration of a for loop
    -   Input and output of a given function
-   Tools to use
    -   assert()
    -   printing/logging
    -   a debugger
    -   binary search


## Tooling! {#tooling}

-   Linter
-   Fuzzer
-   Sanitizer
-   Valgrind
-   DTrace


##  {#d41d8c}


##  {#d41d8c}


##  {#d41d8c}