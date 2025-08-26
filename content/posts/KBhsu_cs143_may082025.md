+++
title = "SU-CS143 MAY082025"
author = ["Houjun Liu"]
draft = false
+++

## Primary Goals {#primary-goals}

-   management of run-time resources
-   correspondence between static and dynamic data structures
-   storage organization


## Run time execution {#run-time-execution}

-   execution of a program is under the control of the OS
-   when a program is invoked...
    1.  the OS allocates space for the program
    2.  the load is loaded into a part of that space
    3.  the OS jumps to the entropy point for the first instruction


## Typically the order is {#typically-the-order-is}


## Assumptions {#assumptions}

1.  execution is sequential: control pass from one point to another
    -   concurrency break this
2.  when a procedure is called, control should return to the point immediately after the call
    -   exceptions break this, but we won't have them


## activation {#activation}

-   invocation of procedure \\(P\\) is what we call an "activation" of \\(P\\)
-   [lifetime]({{< relref "KBhsu_cs242_oct312024.md#lifetime" >}}) of \\(P\\) is
    1.  all steps for activating \\(P\\)
    2.  all steps in \\(P\\)


### activation tree {#activation-tree}

-   when \\(P\\) calls \\(Q\\), \\(Q\\) returns before \\(P\\)
-   activation lifetimes can therefore be a tree

since there's only ever one path from main to the current active function call, we can use a stack and keep track of information in the call stack on the stack.


### what should be on the call stack/[activation tree](#activation-tree) {#what-should-be-on-the-call-stack-activation-tree--org57d5b1f}

When \\(F\\) calls \\(G\\)...

1.  \\(G\\) return value
2.  actual parameters to \\(G\\)
3.  pointers to the previous activation record ("control link")
4.  the return address
5.  registers and program counter and local variables for \\(F\\) right before calling \\(G\\)

So a possible design would be:

```C
struct ActivationRecord {
    int result;
    Elem* arguments;
    char* control_link; // ptr to the metadat of the previous thing
    char* return_addr; // ptr to where to return
}
```

the urge to just to `(char *) ActivationRecord` the struct and hope nothing goes wrong is strong.


## word alignment {#word-alignment}

remember! stuff needs to be 4-byte aligned


## stack machines {#stack-machines}

a simple evaluation model for expressions

1.  no variables or registers
2.  a stack of values to store intermediate results
3.  for each instruction...
    -   take its operands from the top of the stack
    -   removes these operads from the stack
    -   does something
    -   puts the result back onto the stack


### optimization of the stack machine {#optimization-of-the-stack-machine}

the top of the stack will always be in an register (we call it an "accumulator)


### invariants {#invariants}

-   results of expressions is in the accumulator
-   expression evaluation preserves the stack

this dicplin allows you to write left and r
