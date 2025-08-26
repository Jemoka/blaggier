+++
title = "relaxation (algorithms)"
author = ["Houjun Liu"]
draft = false
+++

## background info {#background-info}

Recall [asymtotic analysis]({{< relref "KBhasymtotic_analysis.md" >}}). We remember that:

```text
constant time < logarithmic time < linear time < polynomial time < exponential time
```

The question? What happens if [dynamic programming]({{< relref "KBhdynamic_programming.md" >}}) is too slow/not good enough for the problem? What if [dynamic programming]({{< relref "KBhdynamic_programming.md" >}}) is not needed; instead, why don't we just settle for a pretty good solution?

Take, for instance, [Nueva Courses]({{< relref "KBhnueva_courses_index.md" >}}). The optimal solution is "most students get their highest possible preferences." However, this is impractical and pretty much impossible. Instead, what if we endeavor to figure a schedule that generally maximize happiness?


## relaxation methods {#relaxation-methods}


### constraint relaxation {#constraint-relaxation}

[constraint relaxation](#constraint-relaxation) is a [relaxation]({{< relref "KBhrelaxation_algorithums.md" >}}) method to remove extra constraints.

Motivating problem: traveling salesman problem

-   Visit all towns in a given location
-   Travel the minimal distance to do so
-   Cannot visit any town more than once

Calculating the basic, naive solution to find all roads is \\(O(n!)\\). Best known solution is \\(O(2^nn^2)\\), which is still slow. Its also an \\(NP\\) hard problem.

Hence, to actually solve it in a reasonable time, we are going to make two relaxations.

1.  The salesmen can visit a town more than once
2.  The salesmen can teleport to visited towns

By these two relations, we convert traveling salesmen to the [minimum spanning tree]({{< relref "KBhminimum_spanning_tree.md" >}}) problem.

We now (how?) that solving MST is no worse than optimal TSP. We will solve MST, then use that problem as the upper bound of solution to TSP.


### continuous relaxation {#continuous-relaxation}

[continuous relaxation](#continuous-relaxation) is a [relaxation]({{< relref "KBhrelaxation_algorithums.md" >}}) method to convert difficult discrete problems into continuous ones.

Motivating problem: set cover

You are having a party, and you want your friends to get a nice paper invite.

-   you will send invitations to some subsets of your friends
-   tell them to send invitations to all your mutual friends with them

What's the minimum number of friends to invite, and who?

Set-cover is also hard, and also NP hard. The problem is that sending invitation is discrete.

Hence, to solve, we make it possible to solve for fractions of invitations. Hence, we can prove that our solution is guaranteed to be within bounds


### Lagrangian relaxation {#lagrangian-relaxation}

[Lagrangian relaxation](#lagrangian-relaxation) is a [relaxation]({{< relref "KBhrelaxation_algorithums.md" >}}) method to convert hard-limit constrains into flexible penalization (negative values).

Motivating problem: shortest paths problem with a constraint.

You need to drive the shortest number of miles as well as doing it in a hard constraint to complete the solution in a certain time.

We can instead relax the problem into overtime driving being a negative value in the solution.