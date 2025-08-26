+++
title = "string (C)"
author = ["Houjun Liu"]
draft = false
+++

In C, [string]({{< relref "KBhstring.md" >}}) is an array of [char]({{< relref "KBhchar.md" >}})s. C strings don't track their length; each C string always end in an null-terminating character: `\0`. This is represents the zero byte.

There's a built in function `strlen` which checks the length of a string without the null-terminating character. This function is `O(n)`!!!


## String Pointer Syntax Sugar Synonyms {#string-pointer-syntax-sugar-synonyms}

```C
char str[6];

// these are equivalent
char *ptr = str;
char *ptr = &str[0];
char *ptr = &str; // DON'T DO THIS

// these are equivalent
char thirdLetter = str[3];
char thirdLetter = *(str + 3);
```


## seven commandments of c [string]({{< relref "KBhstring.md" >}})s {#seven-commandments-of-c-string--kbhstring-dot-md--s}

1.  if we create a string as `char[]`, we can modify its characters because its memory lives in our stack instead of living in a global data segment
2.  we can't set `char[]` as equaling to something, because its not strictly a pointer and instead it refers to an entire block of memory instead of a pointer to the first element (in a same vein, an array's size is fixed and travels with the variable)
3.  if we pass `char[]` as a parameter, it is converted to a `char *`
4.  if we create a string with new string literal as `char *thing = "thing"`, we can't modify it because its on the global data segment
5.  we can set `char *` equaling to another value because its a pointer
6.  adding an offset to a c string gives a substring that's places past the first character
7.  if we change characters in a string parameter, these changes will persist


## passing strings around {#passing-strings-around}

Strings are passed as a pointer to their first character.

```C
void foo(char *str) {
    // do string things
}

char string[6]; // THIS IS A STRING OF LENGTH 5!!!! (beacuse there's a null terminator)
foo(string); // pass the syntax sugar pointer
foo(&string[0]); // pass the actual first pointer
```

you won't know whether or not this is the address to a string or a pointer to a single character; so good practice to call it `something_str` if you'd like a string.


## character manipulation checker {#character-manipulation-checker}

```C
#include <ctype.h>

int main() {
    isalpha(ch);
    islower(ch);
    ...
}
```

{{< figure src="/ox-hugo/2023-10-06_11-08-28_screenshot.png" >}}


## string manipulations {#string-manipulations}

```C
#include <string.h>
```

{{< figure src="/ox-hugo/2023-10-06_11-17-37_screenshot.png" >}}


### strcmp {#strcmp}

When you comparing [string]({{< relref "KBhstring.md" >}})s, you can't use == or &lt; or &gt;. Instead:

```C
#include <string.h>

int main() {
    int cmp = strcmp(str1, str2);

    if (cmp == 0) {
        // if str1 is equal to str2
    } else if (cmp < 0) {
        // if str1 comes before str2 lexographically
    } else {
        // if str2 comes before str1 lexographically
    }

}
```


### strcpy {#strcpy}

Copying strings, dangerously, because buffer [overflow]({{< relref "KBhbinary_number_system.md#overflow" >}})s are fun.

{{< figure src="/ox-hugo/2023-10-06_11-22-58_screenshot.png" >}}

This function does NOT care about buffer overflows, and **WILL** put in a null terminator.


### strncopy {#strncopy}

This function optimize **against** buffer overflow, but it may not write a null terminator.

{{< figure src="/ox-hugo/2023-10-09_10-42-25_screenshot.png" >}}


### strcat {#strcat}

{{< figure src="/ox-hugo/2023-10-09_10-45-17_screenshot.png" >}}

strncat always puts in a null terminator.


### pointer arithmetic with strings {#pointer-arithmetic-with-strings}

Fortunatly, each [char]({{< relref "KBhchar.md" >}}) is


### strspn {#strspn}

{{< figure src="/ox-hugo/2023-10-09_11-16-40_screenshot.png" >}}

Count the number of characters that are "cool": contained within the end
