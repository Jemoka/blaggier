+++
title = "insertion sort"
author = ["Houjun Liu"]
draft = false
+++

[insertion sort]({{< relref "KBhinsertion_sort.md" >}}) is an algorithm that solves the sorting problem.


## constituents {#constituents}

a sequence of \\(n\\) numbers \\(\\{a\_1, \dots a\_{n}\\}\\), called [keys]({{< relref "KBhkeys.md" >}})


## requirements {#requirements}

Insertion sort provides an ordered sequence \\(\\{a\_1', \dots a\_{n}'\\}\\) s.t. \\(a\_1' \leq \dots \leq a\_{n}'\\)


## implementation {#implementation}

I don't know why, but it seems like CLRS' implementation is back-to font. But perhaps I'm just mistaken.

```cpp
void insertion_sort(int length, int *A) {
    for (int j=1; j<length; j++) {
        int key = A[j];

        // insert the key correctly into the
        // sorted sequence, when appropriate
        int i = j-1;

        while (i > 0 && A[i] > key) { // if things before had
                                      // larger key
            // move them
            A[i+1] = A[i]; // move it down
            // move our current value down
            i -= 1;
        }

        // put our new element into the correct palace
        A[i+1] = key;
    }
}
```


## additional information {#additional-information}


### proof {#proof}

We use [loop invariant]({{< relref "KBhloop_invariant.md" >}}) method to show that our algorithm is correct. Our invariant is that the array \\(A[0, \dots, j-1]\\) is sorted \\(\forall j 0 \dots L+1\\).

-   Initialization: at the first step, \\(j=1\\) (second element), the subarray of \\(A[0, \dots j-1]\\) (namely, only the first element), is sorted trivially
-   Maintenance: during each loop, we move \\(j\\) to the right, only being done when the subarray to the left is correctly sorted
-   because of \\(j\\) is moving forward until length, it will terminate

As \\(j\\), by the end, covers the entire loop, our loop terminates at \\(L+1\\) and invariant (sortedness) is maintained between \\(A[0, \dots j]\\).