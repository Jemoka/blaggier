+++
title = "stack"
author = ["Houjun Liu"]
draft = false
+++

[stack]({{< relref "KBhstack.md" >}}) is where all local variables and parameters live for a [function]({{< relref "KBhfunction.md" >}}). The stack frame goes away when the function returns.

[stack]({{< relref "KBhstack.md" >}}) grows downwards in memory; each function call sets aside some space in stack regardless if local variables are used.
