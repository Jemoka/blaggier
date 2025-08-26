+++
title = "ASCII"
author = ["Houjun Liu"]
draft = false
+++

[ASCII]({{< relref "KBhascii.md" >}}) represents each [char]({{< relref "KBhchar.md" >}}) as an [integer]({{< relref "KBhinteger.md" >}}), its "ascii value".

-   Uppercase letters are sequentially numbered
-   Lowercase letters are sequentially numbered
-   Digits are sequentially numbered
-   Lowercase letters are 32 more than their uppercases (which means its a single bit flip)

<!--listend-->

```C
char upper = 'A'; // 65
char lower = 'a'; // 97
char zero = '0'; // 48
```
