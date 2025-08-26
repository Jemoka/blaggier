+++
title = "SU-CS242 DEC032024"
author = ["Houjun Liu"]
draft = false
+++

## array programing {#array-programing}

"collection-oriented programming"---

1.  precise programs with bulk operations over the whole collection---the iteration structures/accesses are spelt out much more explicitly (i.e. not to use general structures like for loops as a crutch): **iteration patterns are baked into the language**
2.  performance: leaving the details of parallelism to your hardware


### array programmings are easy to optimize {#array-programmings-are-easy-to-optimize}

Lifting for loops is hard; but: \\(\qty(\text{map } f) \cdot \qty(\text{map } g) = \text{map } \qty(f \cdot g)\\). This is, notably, **not true** if your functions \\(f\\) and \\(g\\) are not pure (i.e. they have state or can throw exceptions); for instance, \\(f\\) crashes up front and \\(g\\) crashes in the end, then, the crashed error is different between the first and second method of evaluation.


### numpy {#numpy}


#### broadcasting {#broadcasting}

suppose you had a operation \\(A \text{ op } B\\),and yet they have different dimensions, numpy perform something called "broadcasting", which:

for each dimension \\(1\\);

-   if \\(A\\), \\(B\\) dimension \\(u\\) edge has the same size, be done
-   if one of \\(A\\) or \\(B\\) has size \\(1\\)  in direction \\(i\\), replace the data in that dimension with the same size as each other
-   if both have the same size, and none of these is \\(1\\), then we throw an error.


#### sizing {#sizing}

Notice: slicing defines **views** (i.e. aliases) off subsets in the array

the slice **shares storage** with the full array


#### copying {#copying}

copying occurs when boolean indexing happens, because Numpy has no way of telling what access order element follow


## Takeaways {#takeaways}

-   combinator calculus (i.e. `map` -y systems) are important for array/collection programming
    -   ...useful for parallel implementations
-   important for program generation
