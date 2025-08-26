+++
title = "pointer"
author = ["Houjun Liu"]
draft = false
+++

A [pointer]({{< relref "KBhpointer.md" >}}) is a variable which stores memory addresses. Because there are no pass-by reference, we use pointers to emulate pass by reference: by sharing addresses with other functions.

A pointer can identify a single [byte]({{< relref "KBhbinary_number_system.md#byte" >}}) OR some large data structures. We can dynamically allocate pointers, and also identify memory generically without types.

C is always pass-by-copy. Therefore, to pass-by-reference, you basically have to

```C
int x = 2; // declare object
int *xptr = &x; // get location of object (&: address of)

printf("%d\n", *xptr); // dereference the pointer
```


## address operator {#address-operator}

You will note, in the line above:

```C
int *xptr = &x;
```

uses an operator `&` to get the address of an object. That's called an [object]({{< relref "KBhobjects.md" >}}) operator.


## [pointer]({{< relref "KBhpointer.md" >}}) memory diagram {#pointer--kbhpointer-dot-md--memory-diagram}

{{< figure src="/ox-hugo/2023-10-11_11-12-28_screenshot.png" >}}

```C
void myFunct(int *intPtr) {
    *intPtr = 3;
}

int main() {
    int x = 2;
    myFunct(&x);
}
```
