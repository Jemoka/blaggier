+++
title = "buffer overflow"
author = ["Houjun Liu"]
draft = false
+++

[buffer overflow]({{< relref "KBhbuffer_overflow.md" >}}) happens when operations like `stcpy` runs beyond the edge of the allocated buffer. We need to find and fix [buffer overflow]({{< relref "KBhbuffer_overflow.md" >}})s, which causes people who use o


## [buffer overflow]({{< relref "KBhbuffer_overflow.md" >}}) horror stories {#buffer-overflow--kbhbuffer-overflow-dot-md--horror-stories}

-   AOL messanger
-


## identifying [buffer overflow]({{< relref "KBhbuffer_overflow.md" >}})s {#identifying-buffer-overflow--kbhbuffer-overflow-dot-md--s}

Think about whether or not what you are going to do will cause [buffer overflow]({{< relref "KBhbuffer_overflow.md" >}})s. There are stuff which you shouldn't do:

-   [strcpy]({{< relref "KBhstring.md#strcpy" >}}): which keeps copying
-   [strcat]({{< relref "KBhstring.md#strcat" >}}):
-   gets: it keeps taking input forever and forever

<https://www.acm.org/code-of-ethics> "Design and implement systems that are robustly and usably secure."


### valgrind {#valgrind}

[valgrind](#valgrind) is a good tool to check whether or not something will buffer overflow.
