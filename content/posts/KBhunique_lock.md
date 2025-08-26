+++
title = "unique_lock"
author = ["Houjun Liu"]
draft = false
+++

the [unique_lock]({{< relref "KBhunique_lock.md" >}}) is a mutex management type. Its a lock management system whereby the type will unlock the mutex on your behalf whenever the unique lock goes out of scope.

this is useful if there are multiple paths to exit a function, where an edge case made you forget when to unlock:

```C++
void my_scope(mutex &mut, condition_variable_any &cv) {
    unique_lock<mutex> lck(mut);
    // do stuff, you can even pass it to a condition variable!
    cv.wait(lck);
}
```
