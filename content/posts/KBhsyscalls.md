+++
title = "syscalls"
author = ["Houjun Liu"]
draft = false
+++

[syscalls]({{< relref "KBhsyscalls.md" >}}) are public functions that allow user land operations to access system-level services (such as reading a sector) which otherwise is locked in [kernel mode](#kernel-mode) because they require special privileges.

These functions are called completely isolated to another function: 1) private stack frame 2) private memory, etc.

`open`, `close`, `read`, `write`


## kernel mode {#kernel-mode}

[kernel mode](#kernel-mode) allows superuser function access such as reading [sector]({{< relref "KBhfilesystem.md#disk" >}})s, etc. which would be dangerous if public.


## file {#file}


### open {#open}

```C
int open(const char *pathname, int flags, mode_t mode);
```

Flags are a bitwise OR operations: you have to open with `O_RDONLY` (read only), `O_WRONLY` (write only), or `O_RDWR` (both read and write). This returns \\(-1\\) if the reading fails.

Other flags:

-   `O_TRUNC` (truncate file)
-   `O_CREAT` (creating a file if not exist), which will require a `mode_t mode` parameter to set the permission
-   `O_EXCL` (file must not exist)


### close {#close}

```C
int close(int fd);
```

`ssize_t` is a type that is a `size_t` which accepts `-1`.


### read {#read}

get a block of a file

```C
ssize_t read(int fd, void *buf, size_t count);
```

Returns the number of bytes actually read (for instance, if count is too large, it will only return the number of bytes read). \\(0\\) if EOF, \\(-1\\) on error.

1.  read my nat read all the bytes
2.  the OS keeps track of where you are reading from


### write {#write}

writes a block of a file

```C
ssize_t write(int fd, void *buf, size_t count);
```

Returns the number of bytes actually read (for instance, if count is too large, it will only return the number of bytes read). \\(0\\) if EOF, \\(-1\\) on error.


## file descriptor {#file-descriptor}

After we open a file, file descriptors, which are ints, which track where the reading head is in the file; so you can have multiple descriptors each with a different location

[file descriptor](#file-descriptor) is used to model access to a variety of resources:

1.  network connections
2.  printers/services

and special file descriptors:

-   0: `STDIN_FILENO` --- input from the terminal
-   1: `STDOUT_FILENO` --- output to the terminal
-   2: `STDERR_FILENO` --- error to the terminal
