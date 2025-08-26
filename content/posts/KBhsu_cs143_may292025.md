+++
title = "SU-CS143 MAY292025"
author = ["Houjun Liu"]
draft = false
+++

[Garbage Collection](#garbage-collection)!


## Garbage Collection {#garbage-collection}

Very simple idea: when an object is created, unused space is automatically allocated. We leverage the observation that a program can use only the objects that it could find:

for instance

```haskell
let x:A <- new A in { x <- y }
```

1.  allocate space as needed for new objects
2.  when spaces runs out...
    a) compute what objects might be used again (trace from "root")
    b) free the space not found in


### Mark and Sweep {#mark-and-sweep}

when memory runs out...

1.  mark: traces reachabel objects
2.  sweep: collects garbage objects

Every object has a new bit, the "mark bit". Every object start with the mark bit set to 0, and we set it to 1 for reachable objects in the mark phase.

At the sweep phrase, we reset everything to 0.


#### mark {#mark}

BFS through starting at all roots.

```python
todo = graph_roots
while len(todo) > 0:
    if mark(v) == 0: # unmarked, but reachable
       set!(mark(v) <- 1)
       todo = todo ++ heap_ptrs(v)
```


#### sweep {#sweep}

-   scan the heap looking fort objects with mark bit 0
-   an object is added to the free list
-   the objects with a mark bit 1 have their mark bit reset to 0

<!--listend-->

```python

p = bottom of heap
while p < top of heap:
    if mark(p) == 1:
        mark(p) = 0
    else:
        freelist.append((p, p+sizeof(p)))
    p += sizeof(p)
```


#### catch {#catch}

Noticeably, the mark phase requires an arbitrary-length todo list. We will therefore have to stick stuff onto the heap.

1.  free list: easy, just stick it onto the freed variables themselves
2.  todo list: instead of storing an explicit todo list, reverse each pointer to come back and descent down new branches


#### con {#con}

no object pointer updates during GC (pointers stay where they are).


#### pros {#pros}

Importantly, this prohibits parallel garbage collection.

Also, lots of fragmentation.


### Stop and Copy {#stop-and-copy}

organize memory into two areas

-   old space: used for allocation
-   new space: use as a reserve for GC

no fragmentation!

1.  copy reachable objects into new space from old space
2.  update pointers
3.  reverse the roles of old space and new space

as we copy an object, we save a "forwarding pointer" so we know stuff has been copied.


#### catch {#catch}

We still have to figure out how to implement reference counting. To do this, in the new space, we maintain two pointers scan and alloc. The distance between scan and alloc is our BFS list. We move alloc forward whenever we copy something (when we encounter a reference), and w


#### pros {#pros}

stop and copy is generally believed to be the fastest GC scheme.

-   allocation is very cheap (we just use the new space)
-   collection is decently cheap (only need to touch reachable objects)


### Reference Counting {#reference-counting}

Instead of waiting for memory to be exhausted, collect an object when there are no more pointers to it.

**Insight**: store in every object the number of pointers to that object.

On new, store in each object the number of references to it.

On assignment `x <- y`, where x points to `p` and y points to `o`:

-   rc(p) &lt;- rc(p) + 1
-   rc(o) &lt;- rc(o) - 1
-   if (rc(o) == 0), mark o as free
-   x &lt;- y


#### catch {#catch}

Such scheme cannot delete stuff that is in a cycle. For instance, if an object points to another in a cycle, both of them will forever have a reference counter of 1.

To deal with this, we can just use another garbage collection scheme.
