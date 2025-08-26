+++
title = "permits model"
author = ["Houjun Liu"]
draft = false
+++

[permits model]({{< relref "KBhpermits_model.md" >}}) is a counter for which there is \\(n\\) threads can do a task. For instance, there is \\(n\\) permits; each time it is requested, it needs to be subtracted.

Ideally, we do this without busy waiting (while loops with lock and unlocks). So:


## condition variable {#condition-variable}

you can call **wait** on a condition variable, which will block until another thread calls **notify_all**.

1.  identify a single event to wait/notify
2.  ensure that there is something to check to represent the event
3.  create a condition variable and share it
4.  identify who is the notifier, call **notify_all** when appropriate
5.  identify who will wait, and **wait** until condition variable triggers

<!--listend-->

```C++
condition_variable_any permitsCV;

// ...

thread(ref(permitsCV))
```

Identify the **ISOLATED event** to notify: for instance, whenever permit goes from 0=&gt;1, you notify. But, when permits go from 1=&gt;2, there really isn't really a need to notify. If you gave wait an unlocked lock, you UB.

But, implementing this is a little tricky: before sleeping on the condition variable, we have to release the underlying lock, but then values are not guaranteed after you unlock. So, the actual implementation:

```C++
permits.lock();
while (permits == 0) {
    permitsCV.wait(permitsLock);
}

permits--;
permitsLock.unlock();
```

the condition variable will...

1.  start sleeping ****FIRST****
2.  unlock a lock FOR US ****AFTER**** the sleeping starts
3.  after waiting ends, tries to reaquire lock
4.  blocks until we have the lock again

this ensures that you don't have to give up the lock before sleeping.

We need a "while" loop here to CHECK whether or not, after sleeping is over, our locked variable needs to be checked again just in case another thread took it: **just because we woke up it doesn't mean the condition is true forever**.

We also need a "while" loop because condition variables will send **false** wakeup signal, so we need to check the condition to be extra sure.

so ****CALL CONDITION VARIABLES IN A WHILE LOOP****.


### implementation {#implementation}

similar to [mutex]({{< relref "KBhmultithreading.md#mutex" >}})s


#### wait {#wait}

1.  should autonomically put the thread to sleep + unlock the given lock
2.  when the thread wakes up, it should reacquire the lock + return


#### notify one/all {#notify-one-all}

-   notify_one: should wake up + unblock first waiting thread
-   notify_all: should wake up/unblock all waiting threads

if no one is waiting, do nothing.
