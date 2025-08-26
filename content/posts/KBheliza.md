+++
title = "ELIZA"
author = ["Houjun Liu"]
draft = false
+++

Wizenbaum (1966)

works pattern-action rules by rephrasing user's questions

"You hate me" =&gt; "what makes you think I hate you"

Rogerian psycotherapy: **assume no real-world knowledge**; simply draws out patient's statements

---

I need X =&gt; what would it mean to you if you got X.

{{< figure src="/ox-hugo/2024-01-12_09-37-07_screenshot.png" >}}

uses [regex]({{< relref "KBhregex.md" >}})

capture specific adjectives, "all", "always", etc. and responds accordingly


## Eliza Rules {#eliza-rules}

patterns are organized by **keywords**: a keyword has a pattern and a list of transforms:

e.g.:

keyword: **you**

```lisp
(0 you 0 me)
(what makes you think I 3 you)
(why do you think I 3 you)
```

Keywords are ranked from specific to general: each keyword has a rank, where most specific keywords words are most highly ranked, and then expansions are picked with the one with the highest keyword rank.


## "my transform" {#my-transform}

whenever the keyword "my" is used, we will pop a transformerd utterance onto the memory list ("earlier you said your"...) in a FIFO queue.

later if we don't know what to say we just pop something off


## ethical implications {#ethical-implications}

-   people maybe mislead by computer understanding
-   face to face interaction is vital
-   people develop specific relationships with artifacts: such as a diary
-   **value sensitive design**: consider benifits, harms, etc.
