+++
title = "pipe"
author = ["Houjun Liu"]
draft = false
+++

[pipe]({{< relref "KBhpipe.md" >}}) chains the STDOUT of one command and put it to the STDIN of another command. Typically, we want to do pipe per direction.


## command pipelines {#command-pipelines}

1.  span two child processes
2.  create a pipe to allow the two processes to communicate
3.  connect the first child's STDOUT to the pipe + the second child's STDIN to the pipe


## pipe() {#pipe}

[pipe()](#pipe) gives us back two [file descriptor]({{< relref "KBhsyscalls.md#file-descriptor" >}})s, such that whatever is written to one can be read from another.

Interface:

```C
int pipes[2];

// create the pipes
int ret = pipe(pipes);

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

[pipe]({{< relref "KBhpipe.md" >}})s have to be closed twice, and opened before the fork.


## dup2() {#dup2}

[dup2()](#dup2) lets you **REWIRE** fire descriptors:

```C
dup2(scrfd, destft);
```

for instance:

```C
dup2(fds[0], STDIN_FILENO);
close(fds[0]);
```

copy the underlying open file pointer which `fds[0]` points to the FD STDIN, meaning STDIN will now refer to the underlying file of `fds[0]`.


## stalling {#stalling}

if you **don't close the right ends of your pipes, it STALLS**. `read()` BLOCKS UNTIL ALL WRITES ARE CLOSED!
