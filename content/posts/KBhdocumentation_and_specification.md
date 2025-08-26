+++
title = "Documentation and Specification"
author = ["Houjun Liu"]
draft = false
+++

See also [Software Development Methodologies]({{< relref "KBhsoftware_development_methodologies.md" >}})


## documentation {#documentation}

-   Comments
-   Readme
-   Wiki


## specification {#specification}

-   UX
-   UI
-   High-Level Architecture (libraries, external APIs)
-   Low-Level Architecture (modules, functions, internal APIs)


## commenting {#commenting}

-   Almost anything hardcoded (constants, strings, etc.)
-   Anything confusing, tricky, nonstandard
-   Historical notes: if something is added/removed, write it down
-   TODO for bugs or hacks


## README Files {#readme-files}

-   Best used as a quick-start guide
-   What are key pieces of info they will pieces of info they will need?
    -   What is your code supposed to do?
    -   How does someone run your code?
    -   How does a new engineer get set up?
-   General overview of how things are laid out, with links to wiki pages with details


## Wiki {#wiki}

-   In-depth explanation of subsystems and modules
-   Separate pages for each subsystem
-   Include decisions of their design decisions
-   Discussions of why systems are not designed differently


## UI/UX Spec {#ui-ux-spec}

-   How do we know what the software is _supposed_ to do?
-   Varying levels of resolution
    -   User stories
    -   All the way up to granular details of UI elements

Don't forgot to document defaults!