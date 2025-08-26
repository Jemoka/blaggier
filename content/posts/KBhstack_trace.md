+++
title = "stack trace"
author = ["Houjun Liu"]
draft = false
+++

A [stack trace]({{< relref "KBhstack_trace.md" >}}) is the output of failing code by the runtime to indicate the location of the fault. For instance, in Python:

```python
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-1-0b766d7d4bc7> in <module>
----> 1 0+""

TypeError: unsupported operand type(s) for +: 'int' and 'str'
```