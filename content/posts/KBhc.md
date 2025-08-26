+++
title = "C"
author = ["Houjun Liu"]
draft = false
+++

[C]({{< relref "KBhc.md" >}}) was created around 1970s to make [Unix]({{< relref "KBhunix.md" >}}) tool writing easier. It was meant to the be the simplest, lightest, human readable code on top of assembly.

-   **C is procedural**: you write functions and compose them, instead of defining types
-   **C++ is procedural (mostly), but you can have objects**: you still write functions, and _can_ build objects and call methods
-   **Java is actual oop**

We use C because its fast, highly efficient. C is popular for systems programming, OSes, networking, etc. Lets you work at a lower level to understand/manipulate the underlying systems.


## principles of C {#principles-of-c}

-   small, simple abstractions
-   minimalist aesthetic
-   efficiency and simplicity over safety and high-level abstractions


## C limitations {#c-limitations}

-   no advanced features
    -   operator overloading
    -   default arguments
    -   pass by reference
    -   classes, objects
    -   abstract data types
-   no extensive libs
    -   no networking
    -   no graphics
-   no safety ("people who write C think they don't make mistakes")
    -   weak compiler
    -   no runtime checks at all
