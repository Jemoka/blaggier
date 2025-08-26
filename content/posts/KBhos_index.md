+++
title = "Operating Systems Index"
author = ["Houjun Liu"]
draft = false
+++

cs111.stanford.edu


## Topics {#topics}

CS111 leverages CS107 experience to show operating systems and how they function.


### What is an operating system {#what-is-an-operating-system}

-   operating system sits between **hardware** and **user programs**
-   most importantly: manages _shared resources_ to allow the program to run
    -   **CPU**: gets which program to do work and for how long
    -   **RAM**: how much memory to give to a program
    -   **Hard Drive**


### Main Events {#main-events}

-   concurrency: switch between processes so quickly to only use on core while concurrent access
-   memory: memory addresses are mostly scattered everywhere --- everything include the lowest level including CPU uses only virtual memory, translated by the OS
-   file management
-   i/o devices
-   networking: CS144
-   security: interactions between users in a system


### Main Components of the Course {#main-components-of-the-course}

-   File Systems
-   Process and Multiprocess
-   Threads
-   Virtual Memory + Paging + limits
-   Modern Technologies/Niceties


## What's Next {#what-s-next}

[SU-CS111 Outline]({{< relref "KBhsu_cs111_outline.md" >}})


## Content {#content}


### [filesystem]({{< relref "KBhfilesystem.md" >}}) {#filesystem--kbhfilesystem-dot-md}

How can we design file systems to manage files on disk, and what are the tradeoffs inherent in designing them. How can we interact with the filesystem?

-   [filesystem]({{< relref "KBhfilesystem.md" >}})
    -   [Unix V6 Filesystem]({{< relref "KBhunix_v6_filesystem.md" >}})
        -   [Freelist]({{< relref "KBhunix_v6_filesystem.md#freelist" >}}) and [Block Cache]({{< relref "KBhunix_v6_filesystem.md#block-cache" >}})
-   [disk]({{< relref "KBhfilesystem.md#disk" >}})
-   [crash recovery]({{< relref "KBhcrash_recovery.md" >}})
    -   [fsck]({{< relref "KBhcrash_recovery.md#fsck" >}})
    -   [ordered writes]({{< relref "KBhcrash_recovery.md#ordered-writes" >}})
    -   [journaling]({{< relref "KBhcrash_recovery.md#journaling" >}}): [write-ahead logging]({{< relref "KBhcrash_recovery.md#journaling" >}})
-   [syscalls]({{< relref "KBhsyscalls.md" >}})
    -   [kernel mode]({{< relref "KBhsyscalls.md#kernel-mode" >}})
    -   files handling
        -   [file]({{< relref "KBhsyscalls.md#open" >}})
        -   [file descriptor]({{< relref "KBhsyscalls.md#file-descriptor" >}})


### multiprocessing {#multiprocessing}

How are programs run, how to spawn subprograms, and how they work in general?

-   [multiprocessing]({{< relref "KBhmultiprocessing.md" >}})
-   [fork]({{< relref "KBhfork.md" >}})
    -   [execvp]({{< relref "KBhfork.md#execvp" >}})
    -   [waitpid]({{< relref "KBhfork.md#waitpid" >}})
-   [shell]({{< relref "KBhfork.md#shell" >}})
-   [pipe]({{< relref "KBhpipe.md" >}}) and ipc


### Multithreading {#multithreading}

How do we implement a single program within a single program, and how do we not have race conditions

-   [multithreading]({{< relref "KBhmultithreading.md" >}})
    -   [processes vs threads]({{< relref "KBhmultithreading.md#id-cc41feaf-ce09-48ec-84d7-8f98d9ca20ba-process-es-vs-id-b4b86ccc-70f3-4d30-b437-2f5fff63b0e6-thread-s" >}})
    -   [race condition]({{< relref "KBhmultithreading.md#race-condition" >}}) and [mutex]({{< relref "KBhmultithreading.md#mutex" >}})
    -   [passing by reference]({{< relref "KBhmultithreading.md#passing-by-reference" >}})
-   [permits model]({{< relref "KBhpermits_model.md" >}})
    -   [busy waiting]({{< relref "KBhpermits_model.md" >}})
    -   [condition variable]({{< relref "KBhpermits_model.md#condition-variable" >}})
-   [Unique Lock]({{< relref "KBhunique_lock.md" >}})


#### trust {#trust}

how do we [trust]({{< relref "KBhprivacy.md#trust" >}}) software?

-   [trust by assumption]({{< relref "KBhprivacy.md#trust-by-assumption" >}})
-   [trust by inference]({{< relref "KBhprivacy.md#trust-by-inference" >}})
-   [trust by substitution]({{< relref "KBhprivacy.md#trust-by-substitution" >}})


#### patterns {#patterns}

-   [monitor pattern]({{< relref "KBhmonitor_pattern.md" >}})


#### dispatches {#dispatches}

-   [assembly]({{< relref "KBhassembly.md" >}}) review
    -   [process control block]({{< relref "KBhprocess_control_block.md" >}})
-   [dispatching]({{< relref "KBhdispatching.md" >}})
    -   [trap]({{< relref "KBhdispatching.md#trap" >}})
    -   [interrupts]({{< relref "KBhdispatching.md#interrupt" >}})
    -   [context switch]({{< relref "KBhdispatching.md#context-switch" >}})
-   [scheduling]({{< relref "KBhscheduling.md" >}})
-   [preemption]({{< relref "KBhpreemption.md" >}})


#### virtual memory {#virtual-memory}

"how can one set of memory be shared across several processes"

-   [virtual memory]({{< relref "KBhvirtual_memory.md" >}})
    -   [dynamic address translation]({{< relref "KBhvirtual_memory.md#dynamic-address-translation" >}})
-   [demand paging]({{< relref "KBhdemand_paging.md" >}})
    -   [clock algorithm]({{< relref "KBhclock_algorthium.md" >}})


#### model technologies {#model-technologies}

-   [modern OS]({{< relref "KBhmodern_os.md" >}})


#### trust and OS {#trust-and-os}

-   [trust]({{< relref "KBhprivacy.md#trust" >}})

---

An example of a good time:

```C
void main() {
    // make pipe
    int fds[2];
    pipe(fds);

    pid_t pidp = fork();

    if (pidp == 0) {
        close(pidp[1]);
        dup2(pidp[0], STDIN_FILENO);
        close(pidp[0]);
        execvp("", ...);
        // throw-a-tantrum
        exit(1);
    }

    close(pidp[0]);

    return pidp[1];
}
```
