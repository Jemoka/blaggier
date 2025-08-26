+++
title = "Software Development Methodologies"
author = ["Houjun Liu"]
draft = false
+++

The software development models, or Software Development Life-cycles ([SDLC]({{< relref "KBhsoftware_development_methodologies.md" >}})s), are methodologies to approach organizing a software project.


## Waterfall {#waterfall}

The waterfall specification gets written before any code written. We hand off spec and code directly to tester, and code should behave like spec.

-   Code specification exactly
-   Spec does not update

Code happens only after stuff is done


## Agile {#agile}

[Agile](#agile) are designed to work with minimum specification before code. Spec is updated constantly as code changes and get user feedback.


## Spiral (Software Development) {#spiral--software-development}

The [Spiral](#spiral--software-development) model is as [SDLC]({{< relref "KBhsoftware_development_methodologies.md" >}}) that combines the iterative development approach of [Agile](#agile) and the structure of [Waterfall](#waterfall).

It focuses on Risk to mitigate it.

{{< figure src="/ox-hugo/2023-07-08_17-30-42_screenshot.png" >}}

1.  Waterfall style requirements detailing
2.  Preliminary design
3.  First prototype: scaled down system
4.  Second prototype
    1.  Mitigates strengths, weaknesses, and risks of 1st prototype
    2.  Augmented requirements that got scaled down during the firts prototype
5.  "The entire project can be aborted if the risk is deemed too great."
    1.  Budget
    2.  Operating cost
6.  Repeat until customer likes it
7.  Construct final system using the prototype as a spec


## Other Non-Canonical SDLCs {#other-non-canonical-sdlcs}


### [Test-Driven Development]({{< relref "KBhtesting.md#test-driven-development" >}}) {#test-driven-development--kbhtesting-dot-md}

See [Test-Driven Development]({{< relref "KBhtesting.md#test-driven-development" >}})


### Extreme Programming {#extreme-programming}

TDD + continually integrating code and pair programming to review code
