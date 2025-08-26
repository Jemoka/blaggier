+++
title = "restrict"
author = ["Houjun Liu"]
draft = false
+++

in C/C++, its a keyword:

```C
f(restrict char *a,
  restrict char *b)
```

means that `a` and `b` are unique pointers to the objects to which they refer.
