+++
title = "Code Review"
author = ["Houjun Liu"]
draft = false
+++

A [Code Review]({{< relref "KBhcode_review.md" >}}) is a systematic study code by others---like proofreading an essay. There's a few different ways of doing [Code Review]({{< relref "KBhcode_review.md" >}}).


## Why do we code review? {#why-do-we-code-review}

1.  catch bugs, style deviations, design + convention violations
2.  security trade-off: having someone who is well-versed in security is useful
3.  to know how other people's code work
4.  to learn additional skills, languages, frameworks


## Code Review Methodology {#code-review-methodology}


### Don't do it {#don-t-do-it}

-   Very fast!
-   None of the benefits of code review


### Over-the-Shoulder Code Review {#over-the-shoulder-code-review}

[Over-the-Shoulder Code Review](#over-the-shoulder-code-review) typically is done over someone's shoulder---author walking the reviewer through code.


#### Props {#props}

-   Typically catch major + obvious issues
-   Lightweight and fast---most likely to get done


#### Cons {#cons}

-   Author explains code as they go; biasing the reviewer
-   Author knows the code, so may gloss over the parts they are familiar with + move at a pace faster than the reviewer can process
-   The author only has two solders: can't involve more than 2 people
-   Usually real-time: the author is waiting for reviewer, which is blocking both author and reviewer's schedules


### Pair Programming {#pair-programming}

[Pair Programming](#pair-programming) is a two-brains, one keyboard paradigm. The less experienced person types (moves at the pace of the slower person)


#### Pros {#pros}

-   Real-time feedback/correction; good for learning new things
-   Writing code + code review at the same time---total time saved


#### Cons {#cons}

-   Two people working together are susceptible to bind slots  still!
-   Remember that it will take four times as long to do something: this trade-off is worth it!


### Formal Code Review {#formal-code-review}

Tools: Phabricator, Gerrit

The process of [Formal Code Review](#formal-code-review) is a very formal process.

-   Author writes and commits code
-   The diff of the commit is sent to the reviewer
-   Reviewer reads through the code at their own pace
-   Reviewer can comment on the entire diff, or on specific lines of code
-   This can involve multiple reviewers

This is _basically_ informal code review, but solving the original issues.


#### Best Practices {#best-practices}

-   Every commit must be code reviewed before pushed to other people
-   The larger the commit, the more reviewers should be on it


#### Reviewer Approval Levels {#reviewer-approval-levels}

-   +2: code can be pushed
-   +1: code looks good, someone else should make the call
-   0: why am I here? I dunno
-   -1: this code smells funny, but I'm willing to be overruled
-   -2: this code must be changed before being pushed

-1/-2: comment should clearly indicate whether they are blocking push.