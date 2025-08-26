+++
title = "deadlock"
author = ["Houjun Liu"]
draft = false
+++

[deadlock]({{< relref "KBhdeadlock.md" >}}) is when [mutex]({{< relref "KBhmultithreading.md#mutex" >}})es lock in a circular order:

thread 1:

```C++
m1.lock();
m2.lock();
```

thread 2:

```C++
m2.lock();
m3.lock();
```

We prevent this by locking things in the same order. Which maybe hard: because loops.

---

We need, also, to **limit the number of threads competing for a shared resource**: imagine all of your threads doing a thing, will it deadlock? If so, limit.
