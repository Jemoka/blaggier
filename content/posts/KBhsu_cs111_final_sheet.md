+++
title = "SU-CS111 Final Sheet"
author = ["Houjun Liu"]
draft = false
+++

## FS {#fs}


### main challenges {#main-challenges}

-   **naming**: how do users name files
-   **reliability**: surviving OS crashes and hardware failures
-   **protection**: isolation between users, controlled sharing
-   **disk space management**: minimize seeks, sharing space ("preventing fragmentation")


#### seeks {#seeks}

to wait until the platter go under the arm and read.


#### internal v. external fragmentation {#internal-v-dot-external-fragmentation}

-   **internal**: a file can be no less than a single block of text.
-   **external**: no space is available even if the space in aggregate is available


### main designs {#main-designs}


#### contiguous allocation {#contiguous-allocation}

IBM used this? puts files and meta-data together + implement an explicit free list allocator. **benefit**: simple; **drawback**: 1) external fragmentation 2) hard to grow files


#### linked files {#linked-files}

in every block, store the location of the next block; don't store files continuously---instead, store a pointer to where the next block of the file is. **benefit**: solves fragmentation and file growth; **drawback**: 1) huge seek time 2) random access from the middle is hard (i.e. O(n))


#### Windows FAT {#windows-fat}

linked files, but cached the file links in memory when using it. **benefits**: same as linked files, and a bit faster **drawback**: data _still_ fragmented and now you have a whole ass table to deal with! but its at least faster


#### File Payload Data {#file-payload-data}

Kind of what we do---instead of storing file data in order OR using links, store the file BLOCK information contiguously.

_multi-level index_: store all block numbers for a given file down a tree (EXT2/3, Unix V6, NTFS)


### Unix V6 + MLI {#unix-v6-plus-mli}

| Sector Size | Block Size | Inode Size | Inodes Per Block | Address Type   |
|-------------|------------|------------|------------------|----------------|
| 512         | 512        | 32         | 16               | Short, 2 bytes |


#### block {#block}

```C
const size_t INODE_PER_BLOCK = SECTOR_SIZE / sizeof(struct inode);
struct inode inodes[INODE_PER_BLOCK];

char buf[SECTOR_SIZE];
readsector(2, &inodes); // recall this is the first 16 inodes: sec0 is fs info, sec1 is supernode

printf("addr: %d\n", inodes[0].i_add);
```


#### ino {#ino}

```C
struct inode {
    uint16_t i_addr[8];
    uint16_t i_mode[8];
    uint16_t file_size;
}
```

[inode]({{< relref "KBhunix_v6_filesystem.md" >}})s have two modes

```C
if ((inode.i_mode & ILARG) != 0) == // node is in "large mode"
```

-   in **small mode**, the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) stores in `i_addr` the block numbers to the data
-   in **large mode**, the [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) stores in the **first seven** numbers in `i_addr` block numbers to _blocks that contain block numbers_ (512/2 = 256 block numbers, which are chars); the **eighth number** points to **doubly indirect** _blocks that contain block numbers that point to other blocks_

The [inode]({{< relref "KBhunix_v6_filesystem.md" >}}) table for each file only contains space to point to \\(8\\) block. 1 block = 1 sector on Unix v6. [inode]({{< relref "KBhunix_v6_filesystem.md" >}})s are usualy 32 bytes big, and 1 block = 1 sector = 512 bytes. usually this packs 16 inodes per block

in **large mode**, this system can store \\((7+256) \cdot (256 \cdot 512) = 34MB\\), which is as large as the file system itself, which means we are fine now.

<!--list-separator-->

-  sizing

    -   small: \\(512\\) bytes per block, and \\(8\\) block storable, so \\(8 \cdot 512 = 4096\\) bytes
    -   large: \\(512\\) bytes per block pointed to by i_addr, each containing \\(\frac{512}{2} = 256\\) block numbers. The first seven in total would therefore address \\(256 \times 7 = 1792\\) blocks of memory. The last eight would each address \\(256 \cdot 256 = 65536\\) blocks of memory. In total, that addresses \\(1792+65536 = 67328\\) blocks of memory. Finally, that means we can address \\(67328 \cdot 512 = 34471936\\) bytes.


#### dir {#dir}

```C
struct dirent {
    uint16_t d_inumber; // inode number of this file
    char d_name[14]; // the name; *NOT NECESSARILY NULL TERMINATED*
}
```

**THE NAME MAY NOT BE NULL TERMINATED** to cram max things. You have to use **strncmp**

**strcmp/strncmp**: stops comparing after \\(n\\) characters; &lt;0 if str1 comes before str2 alphabetically; &gt;0 if str1 comes after str2; 0 if equal

Start at the root directory, `/`. We want to go to the root directory, and find the entry named `/classes/`, and then, in that directory, find the file. etc. Traverse recursively. Directory could have metadata.

A directory is basically just a **file whose payload is a list of `dirent`**.

The inode tells you whether something is a file or a directory. They can be small or large, as usual. Root directory always have inode number `1`; `0` is reserved to NULL.


#### file {#file}

Recall that `read` doesn't read the whole thing. So, we it in parts.

```C++
void copyContents(int sourceFD, int destinationFD) {
    char buffer[INCREMENT];

    while (true) {
        ssize_t bytesRead = read(sourceFD, buffer, sizeof(buffer));
        if (bytesRead == 0) break;
        size_t bytesWritten = 0;
        while (bytesWritten < bytesRead) {
            ssize_t count = write(destinationFD, buffer + bytesWritten,
                                  bytesRead - bytesWritten);
            bytesWritten += count;
        }
    }
}
```

```C++
int open(const char *pathname, int flags);
```

Flags are a bitwise OR operations: you have to open with `O_RDONLY` (read only), `O_WRONLY` (write only), or `O_RDWR` (both read and write). This returns \\(-1\\) if the reading fails.

Other flags:

-   `O_TRUNC` (truncate file)
-   `O_CREAT` (creating a file if not exist), which will require a `mode_t mode` parameter to set the permission
-   `O_EXCL` (file must not exist)


#### open file table {#open-file-table}

open-file table is **system wide**: mentioning what mode an opening is + the cursor to the open file + the number of file-descriptors pointing to it to a `refcount`.

why is `refcount` ever higher than 1? because forks.


### Block Cache {#block-cache}

We will use part of the main memory to retain recently-accessed disk **blocks**. This is **NOT** at the granularity of individual files.


#### Least Recently Used (LRU) Cache {#least-recently-used--lru--cache}

When you insert a new element into the cache, kick out the element on the cache that hasn't been touched in the longest time.


#### Block Cache Modification {#block-cache-modification}

we can either **write asap**, or **delay**.

****write asap****: _safer_: less risk of data loss, written as soon as possible; _slow_: program must wait to proceed until disk I/O completes

****write delay****: _dangerous_: may loose data after crash; _efficient_: memory writes is faster


## Crash Recovery {#crash-recovery}


### main challenges {#main-challenges}

-   **data loss**: crashes can happen, and not all data could be saved to disk
-   **inconsistency**: crashes can happen in the middle of operations

Ideally, filesystem operations should be **atomic**. Every operation should happen or not happen at all---but not halfway.


### fsck {#fsck}

-   Check whether or not there is a clean shutdown: setting a disk flag on clean shutdown; so if the flag isn't set there isn't a clean shutdown.
-   If it wasn't a clean shutdown, identify inconsistencies
-   Scans meta data (inodes, indirect blocks, free list, directory blocks) and handle any of the following situations---
    1.  block in an inode and in free list; solution: pull the block off of free list
    2.  block is a part of two inodes; solution: give to newest, random, copy, remove (bad idea)
    3.  inode claims one dirent refers to it, but there are no such dirent; solution: put in lost and found


#### limitations {#limitations}

-   takes long because can't restart until done
-   doesn't prevent loss of actual file info
-   filesystem may still be unusable (core files moved to lost+found)
-   a block could migrate during recovery, leaking info


### ordered writes {#ordered-writes}

1.  Always initialize the **TARGET** before initializing the **REFERENCE**
    -   Initialize inode before initalize directory entry to it
2.  Never reuse a resource before **NULLIFYING** all existing ****REFERENCES****
    -   Remove the inode reference before putting a block on the free list
3.  Never clear the ****LAST REFERENCE**** to a live resource before setting a ****NEW REFERENCE**** ("its better to have 2 copies instead of none")
    -   Make the new directory entry before get rid of the old one


#### limitations {#limitations}

-   **performance**: we need to do operations synchronously
    -   if we really want to do caching async, we can track dependencies
    -   circular dependencies are possible
-   ****leak****: it could leak resources (reference nullification happens but resource not added)
    -   We can run fsck in the background


### journaling {#journaling}

[journaling]({{< relref "KBhcrash_recovery.md#journaling" >}}) keeps a paper trail of disk appertains in the event of a crash. We have an append-only log on disk that stores disk operations.

-   before performing an operation, record its info in the log
-   and write that to disk

The log will always record what's happening ahead. The actual block updates can eventually be carried out in any order.


#### what do we log? {#what-do-we-log}

-   we only log **metadata** changes (inodes, moving stuff around, etc.)
-   payload operations are not saved


#### structure {#structure}

We typically have a LSN: log serial number, operations, and metadata.

-   **LogPatch**: changes something
-   **LogBlockFree**: mark something as free
-   **LogBlockAlloc**: mark something as allocated, optionally zeroing data if its a data block (DO NOT zero if its a dirent or ino)

<!--listend-->

```toml
[offset 335050]
LSN 18384030
operation = "LogBlockAlloc"
blockno = 1027
zero_on_replay = 0

[offset 23232]
LSN N
operation = "LogPatch"
blockno = 8
offset = 137
bytes = 0.04
inode = 52
```


#### limitations and fixes {#limitations-and-fixes}

-   **multiple log entries**: each atomic operation will be wrapped into a unit **transaction** to make **idempotent**
-   **checkpoints**: we can truncate the log occasionally at a **checkpoint**---when it is no longer needed
-   **where do we start replaying**: log entries should be **idempotent**---doing something multiple times should have the same effect of doing them once. Logs cannot have external dependencies
-   **log entries may take time**: when finally we write stuff to disk, we write the logs first. So no problems there.


#### tradeoffs {#tradeoffs}

-   **durability** - the data needs to be safe (which is slow, and may require manual crash recovery (sans cache, etc.))
-   **performance** - it needs to be fast (which may mean less error checking)
-   **consistency** - the filesystem needs to be uniform (which means that we need to be slower and we may drop data in favor of previous checkpoints that worked)


## MP {#mp}

Multiprocessing: processes, PIDs, fork, execution order, copy on write, waitpid, zombie processes, execvp, pipes and pipe / pipe2, I/O redirection


### forking {#forking}

```C++
pid_t child_pid = fork();
```

fork returns the child PID if parent; returns 0 if child.

The arguments list have to **BEGIN WITH EXECUTABLE NAME** and **END WITH NULL**.

```C
char *args[] = { "/bin/ls", "-l", "~/hewo", NULL };
execvp(args[0], args);
```

**execvp LEAVES THE FILE DESCRIPTOR TABLE**.

every fork has to be waited on by `waitpid`:

```C
pid_t waitpid(pid_t pid, int *status, int options);
```

-   pid
-   status: pointer to store return about the child
-   options (0 for now)

if the PID has died, this returns immediately. Otherwise, this blocks.


#### the `status` int {#the-status-int}

is a bitmap with a bunch of stuff, which we can check with a series of macros

```C
int status;
int pid_act = waitpid(pid, &status, 0);

if (WIFEXISTED(status)) {
    // child normal exit
    int statuscode = WEXITSTATUS(status);
} else {
   // abnormal exist
}
```

the returned PID is the PID that got waited on; if the input PID is `-1`, it will wayt on any process


#### fork mechanics {#fork-mechanics}

The act of copying stack and heap sounds really really expensive. So.... Whapppens?

The child will map the parent's memory addresses to **different** physical addresses than for the parent. The copies are **LAZY**---if the child writes to an area in memory, its virtual address are mapped to different addresses. If no writes by the child happen, the virtual address are mapped to the same address.

during file reading, the file descriptors gets cloned, the underlying [open file table]({{< relref "KBhmultiprocessing.md#open-file-table" >}}) doesn't close.


### pipes {#pipes}

```C
int pipes[2];

// create the pipes
int ret = pipe(pipes);
/* int ret = pipe2(pipes, O_CLOEXEC); */

// an so
int read_from_here = ret[0];
int write_to_here = ret[1];
// i.e. ret[1] writes to => ret[0] read

// fork!
pid_t pid_p = fork();

if(pid_p == 0) {
    // child subroutine
    // because child is READING, and not READINg
    // we want to close the write
    close(write_to_here);

    // we want to then make a buffer
    char buf[num_bytes];
    // if the child reads before the parents write
    // it will block until some data is available
    // if the write ends are closed globally, read
    // will also stop.
    read(read_from_here, buffer, sizeof(buffer));
    close(read_from_here);

    return 0;
}

// parent subroutine
// because parent is WRITING and not READING
// we don't want the read to block, we will
// close the parent immediately.
close(read_from_here);

    // write some data
write(write_to_here, "msg", num_bytes);

// close now we are done writing
close(write_to_here);

// clean up child
waitpid(pid_p, NULL, 0);
```

Recall that dup2 exists:

```C++
dup2(fds[0], STDIN_FILENO);
close(fds[0]);
```

it will close the second file descriptor, if already in use, before binding the first file descriptor to it.


### shell {#shell}

```C++
while (true) {
    char *command = { "ls", "things" };

    pid_t child_pid = fork();
    if (!child_pid) {
        // this is the child; execvp will check PATH for you
        execvp(command.argv[0], command.argv);
        // if we got here, the PID didn't do well
        throw STSHException(string(command.argv[0])+": not found or didn't succeed to fork.");
    }

    waitpid(child_pid);

    // do cleanup
}
```


## MT {#mt}

```C++
// now the thread can execute at any time: once a thread is made, it will run in any order
thread myThread(function_to_run, arg1, arg2, ...);
// threads run AS SOON AS SPAWENED: so
```

We can wait for a thread:

```C++
myThread.join()
```

You can also start a bunch on a loop:

```C++
thread threads[3];
for (thread& cf : threads) {
    cf = thread(func, ...);
}
```


### passing by reference {#passing-by-reference}

threading doesn't know the type of arguments being passed into a function; this is especially prevalent when passing by reference.

```C++
static void mythingref(int &pbr);
thread(myfunc, ref(myint));
```

Remember: ref will ****SHARE MEMORY****, and you have no control over when the thread runs. So once a pointer is passed all bets are off in terms of what values things take on.


### mutex {#mutex}

it would be nice if a [critical section]({{< relref "KBhmultithreading.md#critical-section" >}}) can only be executed once; a [mutex]({{< relref "KBhmultithreading.md#mutex" >}}) can be shared across threads, but can only be "owned" by a single thread at once.

```C++
mutex tmp;
```

```C++
tmp.lock();
tmp.unlock();
```

importantly, if multiple [thread]({{< relref "KBhmultithreading.md#thread" >}})s are waiting on a mutex, the next thread that's going to get the mutex

-   when there are multiple threads **writing** to a value
-   when there is a thread **writing** and one or more threads **reading**
-   if you are no writes, you don't need a mutex
    ```c++
    int locked = 0;
    Queue blocked_queue;

    void Lock::Lock() {
        // disable interrupts: otherwise multiple threads
        // could come and lock the mutex (such as between
        // the locked check and lock =1
        IntrGuard grd;

        if (!locked) {
            // if our thread is not locked, just lock it
            locked = 1;
        } else {
            // if our thread is locked, we need to prevent our current
            // thread from going to the ready queue, and push it to the current thread
            blocked_queue.push(CURRENT_THREAD);

            // remember this isn't an issue even if IntrGuard
            // didn't yet go out of scope; because it will either
            // land on a context_switch which will enable interrupts for you
            // or land on the beginning of a threadfunc helper, which
            // is also going to enable interrupts for you

            // nicely, the interrupts are here are *off* as required because switching
            // to another thread always will result in reenabling (either by new thread,
            // by timer handler, or by IntrGuard)
            mark_block_and_call_schedule(CURRENT_THREAD);
        }
    }

    void Lock::Unlock() {
        // disable interrupts: otherwise multiple threads
        // could come and lock the mutex (such as between
        // the locked check and lock =1
        IntrGuard grd;

        // if our thread is locked and nobody is waiting for it
        if (q.empty()) {
            locked = 0;
        } else {
            unblock_thread(q.pop());
            // we do not switch to the unblocked thread, just add it to the
            // ready queue. we are entrusting the scheduler to start this thread
            // whenever we feel right
        }
    }
    ```


### CV {#cv}

```C++
condition_variable_any permitsCV;

// ...

thread(ref(permitsCV))
```

Identify the **ISOLATED event** to notify; notify absolutely only when needed. To notify:

```C++
permitsCV.notify_all();
```

To listen:

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


### unique_lock {#unique-lock}

```C++
void my_scope(mutex &mut, condition_variable_any &cv) {
    unique_lock<mutex> lck(mut);
    // do stuff, you can even pass it to a condition variable!
    cv.wait(lck);
}
```


## Thread States and Contexts {#thread-states-and-contexts}

Recall that [thread]({{< relref "KBhmultithreading.md#thread" >}})s are the **unit of execution**. The [process control block]({{< relref "KBhprocess_control_block.md" >}}) keeps track of the [\*stack pointer]({{< relref "KBhassembly.md#stack-pointer" >}})\* of the thread `%rsp`, which means if a thread is put to sleep the state can be stored somewhere on the stack.

Three states:

1.  **running** (could switch to ready/blocked)
2.  **ready** able to run, but not on CPU yet (could switch to running **only**)
3.  **blocked** eating for something (could switch to ready/running)


### trap {#trap}

a [trap]({{< relref "KBhdispatching.md#trap" >}}) is a user request for OS attention explicitly from the user thread, swapping the user process off the CPU.

1.  system calls
2.  errors
3.  page fault (memory errors)


### interrupt {#interrupt}

a [interrupt]({{< relref "KBhdispatching.md#interrupt" >}}) takes place outside the current thread, it forces the OS' attention even if the user thread isn't asking for it

1.  character typed at keyboard
2.  completion of a disk operations
3.  a hardware timer that fires an interrupt


#### what if a timer goes off during an [interrupt]({{< relref "KBhdispatching.md#interrupt" >}}) {#what-if-a-timer-goes-off-during-an-interrupt--kbhdispatching-dot-md}

**interrupts are disabled during interrupt handling**, otherwise, this causes an infinite loop.


#### preemption {#preemption}

We use [interrupt]({{< relref "KBhdispatching.md#interrupt" >}})s to implement [preemption]({{< relref "KBhpreemption.md" >}}), "[preempting]({{< relref "KBhpreemption.md" >}})" threads in order to swap on another thread to CPU. This enables [scheduling]({{< relref "KBhscheduling.md" >}}) to happen.

```C++
// brand new thread

void interrupt_handler() {
    /* disables interupts, automatically by timer handler */

    // future spawns start here
    context_switch(...);

    /* enables interupts, automatically by timer handler */
}

void threadfunc_wrapper() {
    // manually enable interrupts before first run
    intr_enable(true);
    // start thread's actual business
    threadfunc();
}
```


## Scheduling {#scheduling}


### main challenges {#main-challenges}

1.  minimize time to a useful result---(**assumption**: a "useful result" = a thread blocking or completes)
2.  using resources efficiently (keeping cores/disks busy)
3.  fairness (multiple users / many jobs for one users)

We can measure 1) based on "average completion time": tracking the average time elapsed for a particular queue based on the start of scheduling that queue to the time when each thread ends.


### main designs {#main-designs}


#### first-come first-serve {#first-come-first-serve}

-   keep all threads in ready in a **queue**
-   run the first thread on the front until it finishes/it blocks for however long
-   repeat

**Problem**: a thread can run away with the entire system, accidentally, through infinite loops


#### round robin {#round-robin}

-   keep all threads in a **round robin**
-   each thread can run for a set amount of time called a [time slice]({{< relref "KBhscheduling.md#round-robin" >}}) (10ms or so)
-   if a thread terminates before that time, great; if a thread does not, we swap it off and put it to the end of the round robin

**Problem**: what's a good [time slice]({{< relref "KBhscheduling.md#round-robin" >}})?

-   too small: the overhead of context switching is higher than the overhead of running the program
-   too large: threads can monopolize cores, can't handle user input, etc.

Linux uses 4ms. Generally, you want 5-10ms range.


### gold: shortest remaining processing time {#gold-shortest-remaining-processing-time}

Run first the thread in queue that will finish the **most quickly** and run it **fully to competition**.

It **gives preference to those that need it the least** (i.e. because it runs the smalest one); of course THIS IS **not implementable** without oracle time guess.

Our goal, then is to get as close as possible to the performance of [SRPT]({{< relref "KBhscheduling.md#shortest-remaining-processing-time" >}}).

**Problem**:

1.  we don't know which one will finish the most quickly
2.  if we have many threads and one long-running thread, the long running thread won't be able to run ever


### priority based scheduling {#priority-based-scheduling}

Key idea: **behavior tends to be consistent in a thread**. We build multiple **priority queues** to address this.

[priority based scheduling]({{< relref "KBhscheduling.md#priority-based-scheduling" >}}) is an approximation of [SRPT]({{< relref "KBhscheduling.md#shortest-remaining-processing-time" >}}), using the past performance of the thread to estimate the running time of the thread. Over time, [thread]({{< relref "KBhmultithreading.md#thread" >}})s will move between priority queues, and we **run the topmost thread from the highest priority queue**


#### implement based on [time slice]({{< relref "KBhscheduling.md#round-robin" >}}) usage {#implement-based-on-time-slice--kbhscheduling-dot-md--usage}

a [thread]({{< relref "KBhmultithreading.md#thread" >}}) always enters in the **highest** priority queue

1.  if the [thread]({{< relref "KBhmultithreading.md#thread" >}}) uses all of its [time slice]({{< relref "KBhscheduling.md#round-robin" >}}) and didn't exit, bump them down a priority queue
2.  if a [thread]({{< relref "KBhmultithreading.md#thread" >}}) blocked before it used all of its [time slice]({{< relref "KBhscheduling.md#round-robin" >}}), bump them up a priority queue


#### implement based on aggregate time used: fixing neglect {#implement-based-on-aggregate-time-used-fixing-neglect}

a [thread]({{< relref "KBhmultithreading.md#thread" >}}) has a number for "how much time did you use on the CPU recently"? The priories are sorted by that value, and the smallest time use will be ran.


### context switch {#context-switch}

1.  (in asm) push **all callee saved [register]({{< relref "KBhassembly.md#register" >}})s** except `%rsp` into the bottom of the old thread's [stack]({{< relref "KBhstack.md" >}})
2.  store the [stack pointer]({{< relref "KBhassembly.md#stack-pointer" >}}) `%rsp` into the [process control block]({{< relref "KBhprocess_control_block.md" >}}) for that process corresponding to thread
3.  read the new thread's stack pointer from the [process control block]({{< relref "KBhprocess_control_block.md" >}}), and load that into `%rsp`
4.  (in asm) pop **all callee saved [register]({{< relref "KBhassembly.md#register" >}})s** stored on the bottom of our new stack back onto the registers

To deal with new threads, we create a fake freeze frame on the stack for that new thread which looks like you are just about to call the thread function, and calls `context_switch` normally.


## Virtual Memory {#virtual-memory}


### main challenges {#main-challenges}

-   **multitasking**: multiple processes should be able to use memory
-   **transparency**: no process need to know that memory is shared; each process should be able to run regardless of the number/locations of processes
-   **isolation**: processes shouldn't be able to corrupt other processes' memory
-   **efficiency**: shouldn't be degraded by sharing


### crappy designs with no DMT {#crappy-designs-with-no-dmt}

-   **single tasking**: assume there's one process 1) no isolation 2) no multitasking 3) bad fragmentation
-   **load time relocation**: move the entire program somewhere on load time 1) no isolation 2) can't grow memory after load 3) external fragmentation after frees


### main designs {#main-designs}


#### base and bound {#base-and-bound}

load time relocation + virtual memory

-   assign a location in physical memory, call the **base**; during translation, we just add every virtual address by the **base**
-   we can cap the virtual address space for each process by a **bound**, we can raise a bus error/segfault if it goes above the highest allowable

**last possible address**: is (bound - 1)+base

1.  compare virtual address to bound, trap and raise if &gt;= **bound**
2.  then, return virtual address + **base**

tradeoffs: good - 1) inexpensive 2) doesn't need more space 3) ritualized; bad - 1) can't really move either (i.e. need to allocate) 2) fragmentation 3) no read only memory


#### multiple segments {#multiple-segments}

break stack, heap, etc. into multiple segments; then do base and bound for each segment

tradeoffs: good - 1) you can now recycle segments 2) you can not map the middle 3) you can grow the heap (but not the stack, because it moves downwards); bad - 1) you need to decide segment size and location ahead of time


### goal design {#goal-design}

paging: **fixed** segment size, and just split each thing.

we map each page independently, and keep the offset. If a page is unused, **internal fragmentation** but not too bad. The **stack can now grow downwards**: because if it reaches into lower page numbers we can just map that page somewhere too.

For instance, typically page sizes are 4kb

| Page Size         | Offset Number Digits |
|-------------------|----------------------|
| 4096 bytes (16^3) | 3                    |

then the rest of the address would just be the page number.


#### Intel's implementation {#intel-s-implementation}

**Virtual Addresses**

|                  |                               |                  |
|------------------|-------------------------------|------------------|
| Unused (16 bits) | Virtual page number (36 bits) | Offset (12 bits) |

**Physical Addresses**

|                       |                  |
|-----------------------|------------------|
| Page number (40 bits) | Offset (12 bits) |


#### translation {#translation}

-   chop off page number and offset
-   translate the page number
-   concat the two together


### implementation {#implementation}

| Index | Physical Address | Writable | Present/Mapped? | Last Access | Kernel | Dirty |
|-------|------------------|----------|-----------------|-------------|--------|-------|
| 0     | 0x2023           | 1        | 0               | 0           | 0      | 0     |
| 1     | 0x0023           | 1        | 1               | 1           | 0      | 0     |


## Swap {#swap}

1.  pick a page to kick out
2.  write kicked page to disk
3.  mark the old page entry as not present
4.  give the physical address to the new virtual page


### choosing what to swap {#choosing-what-to-swap}

-   randomly! (works apparently kinda fine)
-   First-in-first out (fair, bust bad --- throw out the page in memory longest; but what if its very used)
-   **least recently used** - clock algorithm


### clock algorithm {#clock-algorithm}

**rotate through all pages until we find one that hasn't been referenced since last time**

1.  we add a **reference bit** to the [page table]({{< relref "KBhvirtual_memory.md#paging" >}})---its set to \\(1\\) if the program wrote or read each page, otherwise its set to \\(0\\)
2.  when page kick is needed, clock algorithm starts where it left off before and scan through physical pages
    1.  each page it checks with reference bit 1, it sets the **reference bit** as 0
    2.  if it checked a page and its reference bit is 0, we kick it out (because we've gone through two )

We now **save the position of the hand**---we want to begin checking with the page that hasn't been checked for the longest time. If every page has a **reference bit** is one, running this algorithm doesn't break because it would set its immediately next bit of memory.


### page replacement {#page-replacement}

-   we _don't use_ **per process replacement** because we need to allocate max pages per process
-   we use **global replacement** to maximise usage


### demand fetching {#demand-fetching}

most modern OSes start with **no pages loaded**---load pages only when referenced; this is tempered by the type of page that's needed:

| Page Type  | Need Content on First Load | Save to Swap ("Swap?") |
|------------|----------------------------|------------------------|
| code       | yes                        | no (read from exe)     |
| data       | yes                        | yes                    |
| stack/heap | no                         | yes                    |

We only write to disk if its **dirty**.


## Multicore + Flash {#multicore-plus-flash}


### Scheduling Multi-Core CPUs {#scheduling-multi-core-cpus}


#### main approaches {#main-approaches}

-   one queue for everyone 1) need to figure out what is the priory of things on that queue (for preemption)
-   one queue per core: 1) where do we put a thread? 2) how do we move between cores?


#### One Ready Queue per Core {#one-ready-queue-per-core}

1.  where do we put a given thread?
2.  moving core between threads is expensive

Big tension:

-   **Work Stealing**: if one core is free (even if there is things in the ready queue), check other cores' ready queues and try to do thread communism.
-   **Core Affinity** ideally, because moving threads between cores is expensive (need to rebuild cache), we keep each thread running on the same core.


#### Gang Scheduling {#gang-scheduling}

When you have a thread you are trying to schedule, try to see if there are other threads from the same process in the ready queue and schedule all of them on various cores.


### Locking Multi-Core CPUs {#locking-multi-core-cpus}

disabling interrupts are not enough

**hardware atomic operation** `exchange` + **busy waiting**, which reads, returns, and swaps the value of some memory in a single atomic operation AND which is never ran in parallel; it returns the previous value of the memory before it was set:

```C++
class Lock {
    std::automic<int> sync(0);
}

void Lock::lock() {
    while (sync.exchange(1)) {}

    // we are now the only one using it
    // do work ....

    sync = 0;
}
```

The exchange function returns the old value.


### Flash Storage {#flash-storage}


#### writing {#writing}

You have two operation.

-   **erase**: You can set **ALL SEGMENT** of an "erase unit" to \\(1\\) ("erase unit" size is usually 256k)
-   **write**: You can modify one "page" at a time (which is smaller than a erase unit)---but you can ONLY set individual bits in the page into 0 ("page" size is usually 512 bytes or 4k bytes)


#### wear-out {#wear-out}

**wear leveling**: make sure that the drive wears out at roughly the same rate as other parts of the drive. Moving commonly written data ("hot" data) around


#### [FTL]({{< relref "KBhmodern_os.md#flash-storage" >}}) limitations {#ftl--kbhmodern-os-dot-md--limitations}

-   no hardware access (can't optimize around flash storage)
-   sacrifices performances for performance
-   wasts capacity (to look like hard drive)
-   many layers


## Ethics {#ethics}

trusting software is the task of extending your own **AGENCY** to a piece of software: "agential gullibility".


### pathways to trust {#pathways-to-trust}

-   **trust by assumption**: 1) trust absent any clues to warrent it due to timing 2) trust because there is imminent danger
-   **trust by inference**: trust based on information you had before (brands, affiliation, performance)
-   **trust by substitution**: having a backup plan


### accountability {#accountability}

accountability is in a **chain**

-   hardware designer (intel)
-   OS developer (iOS, ec.)
-   app developer
-   users


### stakeholder {#stakeholder}

1.  **direct stakeholders** (people who are operating, technicians, etc.)
2.  **indirect stakeholders**: patients

purchase = long-term support ---- what do you do to get it fixed/repaired.


### scales of trust {#scales-of-trust}


#### scale of impact {#scale-of-impact}

-   a bug in an OS can be tremendously bad
-   "root access" --- privileged aces


#### scale of longevity {#scale-of-longevity}

-   people maybe on very very old OS
-   it requires keeping older OSes secure against modern technologies
