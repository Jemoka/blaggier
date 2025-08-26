+++
title = "monitor pattern"
author = ["Houjun Liu"]
draft = false
+++

[monitor pattern]({{< relref "KBhmonitor_pattern.md" >}}) is a [multithreading]({{< relref "KBhmultithreading.md" >}}) pattern to help prevent [race condition]({{< relref "KBhmultithreading.md#race-condition" >}})s and [deadlock]({{< relref "KBhdeadlock.md" >}})s.

**associate a single lock with a collection of variables** (a "class"), having one lock associated with the group.

any time when you want to access anything in that group, you unlock the [mutex]({{< relref "KBhmultithreading.md#mutex" >}}) associated with the group. meaning, there's only one mutex which can be used to change shared state.


## Bridge Crossing {#bridge-crossing}

There is cars that are crossing a **one lane bridge**: each car in a thread, they have to coordinate when/where to cross the bridge.

Car can be going east or the west. All cars must be traveling in the same direction. And a car can only go once the coast is clear.


### Interface {#interface}

```c++
static void cross_bridge_east(size_t carid) {
    approach_bridge(); // sleeping
    driveAcross(EAST); // sleeping
}

static void cross_bridge_west(size_t carid) {
    approach_bridge(); // sleeping
    driveAcross(WEST); // sleeping
}
```

we need to ensure that, we are sharing a one lane bridge, and they don't collide.


### Monitor Pattern {#monitor-pattern}

REDUCES NUMBER OF PARAMS!

Method for the mutex management system isolated into a single, thread-safe class. All the mutexes, etc., all of the mutex gunk gets isolated into a thread safe instance method of the bridge class.
