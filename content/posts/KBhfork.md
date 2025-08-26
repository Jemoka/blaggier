+++
title = "fork"
author = ["Houjun Liu"]
draft = false
+++

[fork]({{< relref "KBhfork.md" >}}) creates a second process that is an exact **clone** from the first.

The original process is called the **parent**, the child process is called the **child**. The **child** comes in at the next instruction after fork. This means that fork **calls once, returns twice**. **After `fork`, the execution order between both processes is completely up to the OS.** After fork, we cannot assume execution order.

Fork's **return value** is different between parent and child:

-   in parent, fork will return the PID of the child process
-   in the child, fork will return \\(0\\), you can get PID by calling `getpid`, and get parent ID through `getppid`.
-   if its \\(-1\\), something failed


## things that are duplicated {#things-that-are-duplicated}

-   fire descriptor table
-   mapped memory regions (both stack and heap)


## shell {#shell}

a [shell](#shell) forks off a child to run the command.

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

This is because the act of running a subprogram from a program requires **taking over the current PID with a different program**. If we don't fork, once the takeover happens, we don't have a shell anymore.


## execvp {#execvp}

[execvp](#execvp) takes over the current PID with another executable.

```C
int execvp(const char *path, char *argv[]);
```

if [execvp](#execvp) works, obviously it never returns. If it is unsuccessful, it returns `-1`.

The arguments list have to **BEGIN WITH EXECUTABLE NAME** and **END WITH NULL**.

```C
char *args[] = { "/bin/ls", "-l", "~/hewo", NULL };
execvp(args[0], args);
```

This is how we run other programs. After this happens, recall that the process is the **SAME PROCESS**, so we can still wait on this process.

**execvp LEAVES THE FILE DESCRIPTOR TABLE**.


## waitpid {#waitpid}

[waitpid](#waitpid) waits for a subprocess and frees information from the OS to store the information about the child process' exit code. [waitpid](#waitpid) can **ONLY ALLOW YOU TO WAIT ON DIRECT CHILDREN\***.

```C
pid_t waitpid(pid_t pid, int *status, int options);
```

-   pid
-   status: pointer to store return about the child
-   options (0 for now)

if the PID has died, this returns immediately. Otherwise, this blocks.


### the `status` int {#the-status-int}

is a bitmap with a bunch of stuff, which we can check with a series of macros

```C
if (WIFEXISTED(status)) {
    // child normal exit
    int statuscode = WEXITSTATUS(status);
 } else {
    // abnormal exist
 }
```


### wait on any children {#wait-on-any-children}

If want to deal with the children as they exit, whichever one finishes first, you can write:

```C
int pid = waitpid(-1, ...);
```

which will wait on any of the process' direct children, returning whichever one finishes first and returning its PID. If `pid`-1= and errcode is ECHILD, this means that there's no more children to be waited on.


## words {#words}


### zombie {#zombie}

a child process which exists which hasn't been blocked by a parent process using `waitpid`, where its exit code is stored and taking up resources forever.


### orphan {#orphan}

a child process whose parent exited; which the bootloader takes care of.


## fork mechanics {#fork-mechanics}

The act of copying stack and heap sounds really really expensive. So.... Whapppens?

Each program thinks its is given all memory addresses to use; the OS maps the "virtual addresses" to the main address. So, when the fork happens, the virtual address space stays the same. The child will map the parent's memory addresses to **different** physical addresses than for the parent.

The copies are **LAZY**---if the child writes to an area in memory, its virtual address are mapped to different addresses. If no writes by the child happen, the virtual address are mapped to the same address.

during file reading, the file descriptors gets cloned, the underlying [open file table]({{< relref "KBhmultiprocessing.md#open-file-table" >}}) doesn't close.


## typical mp pattern {#typical-mp-pattern}

```C
int main() {
    // fork off first child
    pid_t f1 = fork();
    if (f1 == 0) {
        dispatch_1();
        return 0;
    }

    // fork off the process, if
    // we are still in main (meaning we are not a child)
    pid_t f2 = fork();
    if (f2 == 0) {
        dispatch_2();
        return 0;
    }

    // this is equivalent to .join()
    // recall that even if f1 returns later
    // its ok, becasue we can let f2 be zombie for a bit
    waitpid(f1, NULL, 0);
    waitpid(f2, NULL, 0);

    return 0;
}
```
