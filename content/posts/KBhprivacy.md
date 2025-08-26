+++
title = "privacy"
author = ["Houjun Liu"]
draft = false
+++

"privacy as an individual right"

-   [privacy]({{< relref "KBhprivacy.md" >}}) is a control of information: controlling our private information shared with others
    -   free choice with alternatives and informed understanding of what's offered
    -   control over personal data collection and aggregation
-   [privacy]({{< relref "KBhprivacy.md" >}}) as autonomy: your agency to decide for what's valuable
    -   autonomy over our own lives, and our ability to lead them
    -   do you have agency?

"privacy as a social group"

-   [privacy]({{< relref "KBhprivacy.md" >}}) as social good: social life would be severely compromised without privacy
    -   privacy allows social
-   [privacy]({{< relref "KBhprivacy.md" >}}) as a display of trust: privacy enables trusting relationships
    -   "fiduciary": proxy between you and a company
    -   "should anyone who has access to personal info have a fiduciary responsibility?"


## key trust questions {#key-trust-questions}

-   who/what do we trust?
-   what do we do if trust isn't upheald?
-   how to approach building trust


## trust {#trust}

**trust**: to stop questioning the responsibility of something

-   intentions
-   dependence
-   extensions of agency

We mostly don't trust software; instead, we trust the people that developed the software.


## accountability {#accountability}

a lot of people who are accountable in this chain:

-   hardware designer (intel)
-   OS developer (iOS, ec.)
-   app developer
-   users


## stakeholder {#stakeholder}

1.  **direct stakeholders** (people who are operating, technicians, etc.)
2.  **indirect stakeholders**: patients

purchase = long-term support ---- what do you do to get it fixed/repaired.


## time {#time}

-   support duration
-   obsolescence (how long is the end of support)
    -   products/services may not be garanteed forever
    -   problems with halting use---requires deleting entire pentagram account


## meltdown vulnerability {#meltdown-vulnerability}

**meltdown**: hardware vulnerability that allows an user program to access kernel level pages of system memory.

**potential ways of fixing a vulnerability/violation of trust**:

<https://www.cs.cmu.edu/~rdriley/487/papers/Thompson_1984_ReflectionsonTrustingTrust.pdf>


## loss of privacy {#loss-of-privacy}


### aggregation {#aggregation}

Through the loss of privacy, information can be piecemeal built up to understand somebody's profile.


### exclusion {#exclusion}

Not knowing or understanding or control how our information being used.


### secondary use {#secondary-use}

Using information for purposes not intended without permission.


## trust {#trust}

[trust](#trust) exposes people to the risk of being betrayed/let down. Differential privacy is used to anonomyze information. especially, for operation systems, each bug can have a massive impact because it impacts billions of users.

"[trust](#trust) means to stop questioning the dependability of something; you become vulnerable to it"

[trust](#trust)ing software is the task of extending your own **AGENCY** to a piece of software: "agential gullibility".

examples:

1.  ios bug: alams didn't go off
2.  printnightmare: printing caused remote code execution
3.  2017 admin access without password
4.  eternalblue (caused wannacry)


### key points {#key-points}

-   trust between different stakeholders are intertwined
-   trust is about extending agency
-   trust emerges through [various pathways](#pathways-to-trust)
-   we can design ways to partially substitute the need for trust


### pathways to trust {#pathways-to-trust}


#### trust by assumption {#trust-by-assumption}

1.  trust absent any clues to warrent it due to timing
2.  trust because there is imminent danger


#### trust by inference {#trust-by-inference}

1.  trust based on information you had before
    -   brands
    -   affiliation
    -   past performance
2.  trust in prior version of software


#### trust by substitution {#trust-by-substitution}

1.  trust something, but having a fallback plan
2.  trust a system because there would be a backup system protecting you


### scales of trust {#scales-of-trust}


#### scale of impact {#scale-of-impact}

-   a bug in an OS can be tremendously bad
-   "root access" --- privileged aces


#### scale of longevity {#scale-of-longevity}

-   people maybe on very very old OS
-   it requires keeping older OSes secure against modern technologies
