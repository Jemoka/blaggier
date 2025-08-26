+++
title = "Software Design and Architecture Patterns"
author = ["Houjun Liu"]
draft = false
+++

:clap: What. Does. The. Client. Want.


## Web Applications vs Local Application {#web-applications-vs-local-application}

-   scale---what levels of functionality and access do we want
-   training
-   speed


## SOLID principles {#solid-principles}

[SOLID principles](#solid-principles) is a set of OOP principles; its kinda famous but encourages mindless braindead Java devs.

-   **Single Responsibility**: that a class should have only one clearly defined thing it represents, and the class should only change IFF the underlying spec regarding that thing changes
    -   Easy pitfalls: mixing PERSISTENCE LOGIC with BUSINESS LOGIC (db should be moved to a separate class like ThingProvider/ThingPersistence)
-   **Open-Close Principle**: classes should be easily extendable and closed to modification
    -   "we should be able to add new functionality without touching what's written"
    -   so like interfaces are nice
-   **Liskov Substitution Principle**: subclasses should act like base classes (and more); good inheritance systems should have this built in
-   **Interface Segregation Principle**: you should build lots of interfaces + sub-interfaces based on what clients are and will need, such that a client only has to extend precisely the amount needed to do their job
-   **Dependency Inversion Principle**: when possible, depend on abstract classes or interfaces and not their implementations


### Dependency Injection {#dependency-injection}

> "Dependency Injection" is a 25-dollar term for a 5-cent concept. [...] Dependency injection means giving an object its instance variables. [...].

Blame this for all the fucking Factory classes.

Basically having a factory (or just a fancy-enough constructor) to give a class all the right instantiations of the things it needs instead of having the class construct them inside.

You do this because 1) the class can then depend on more abstract interfaces 2) you can test shit easier by constructing all the necessary parts


## Shared-nothing architecture {#shared-nothing-architecture}

A [shared-nothing architecture](#shared-nothing-architecture) is a type of distributed computing software architecture which ensures that no single shard shares/overlaps resources with others (i.e. needing shared memory, etc.)

So no mutexes; and no single-points of failure (i.e. we don't dependent on a central node always working).
