+++
title = "NUS-MATH530 Some Matrix Manipulation"
author = ["Houjun Liu"]
draft = false
+++

## Proof: identity of a group is unique {#proof-identity-of-a-group-is-unique}

Assume for contradiction that there exists two identities \\(e\_1\\) and \\(e\_2\\) which are identities of the group \\(A\\). Take also an \\(a \in A\\).

Given both \\(e\_1\\) and \\(e\_2\\) are identities, we have that:

\begin{equation}
    a \* e\_1 = a
\end{equation}

as well as

\begin{equation}
    a \* e\_2 = a
\end{equation}

Therefore, we have by the transitive property that:

\begin{equation}
    a \* e\_1 = a\*e\_2
\end{equation}

Because we are in a group, there exists a \\(1/a\\) the inverse of \\(a\\). Applying this inverse to the expression, we have that:

\begin{equation}
    1/a\*a \* e\_1 = 1/a\*a\*e\_2
\end{equation}

Therefore, that:

\begin{equation}
    e\_1 = e\_2\ \blacksquare
\end{equation}

Therefore, there cannot be two unique identities in a group.


## Proof: inverse of an element in a group is unique {#proof-inverse-of-an-element-in-a-group-is-unique}

Take group \\(A\\) and element \\(a\in A\\), assume for contradiction that there exists two inverses of \\(a\\) named here \\(a'\_1\\) and \\(a'\_2\\). Given they are both inverses for \\(a\\), we have that:

\begin{equation}
    a \* a'\_1 = 1
\end{equation}

as well as

\begin{equation}
    a \* a'\_2 = 1
\end{equation}

Therefore, we have by the transitive property that:

\begin{equation}
    a \* a'\_1 = a\*a'\_2
\end{equation}

Because we are in a group, there exists a \\(1/a\\) the inverse of \\(a\\). Applying this inverse to the expression, we have that:

\begin{equation}
    1/a\*a \* a'\_1 = 1/a\*a\*a'\_2
\end{equation}

Therefore, that:

\begin{equation}
    a'\_1 = a'\_2\ \blacksquare
\end{equation}

Therefore, there cannot be two unique inverses for an element in group.


## Proof: additive identity in field cannot have multiplicative inverse {#proof-additive-identity-in-field-cannot-have-multiplicative-inverse}

For some field \\(F\\) take its additive identity \\(0 \in F\\). Assume for the sake of contradiction there exists a multiplicative inverse for \\(0\\) named \\(0' \in F\\).

Let's take some \\(a \in F\\). By definition of the additive identity, we have:

\begin{equation}
    0 + a = a
\end{equation}

We will apply \\(0'\\) to both sides, we having that:

\begin{equation}
    0'(0+a) = 0'a
\end{equation}

Distributing \\(0'\\) to both sides, we have:

\begin{equation}
   1 + 0'a = 0'a
\end{equation}

Given \\(a,0' \in F\\), and multiplication is closed in \\(F\\) being a field, \\(0'a \in F\\); applying \\(-0'a \in F\\) the additive inverse of the result of multiplying together to both sides, we have that:

\begin{equation}
  1 + 0'a - 0'a = 0'a - 0'a
\end{equation}

And therefore:

\begin{equation}
    1 = 0
\end{equation}

which is absurd, reaching the desired contradiction. \\(\blacksquare\\)


## System {#system}

\begin{equation}
\begin{cases}
x + 2y + z = 0 \\\\
2x + 0y - z = 1 \\\\
x - y + z = 2 \\\\
\end{cases}
\end{equation}

We will subtract the top and bottom expressions to have that:

\begin{equation}
    3y = -2
\end{equation}

And to get:

\begin{equation}
    y = \frac{-2}{3}
\end{equation}

Manipulating the second expression, we have that:

\begin{equation}
    2x -1 = z
\end{equation}

Substituting this expression and \\(y\\) into the third expression, we have:

\begin{equation}
    x + \frac{2}{3} + 2x -1 = 2
\end{equation}

performing algebraic manipulations:

\begin{align}
    &3x + \frac{2}{3} = 3 \\\\
\Rightarrow\ &3x = \frac{7}{3} \\\\
\Rightarrow\ &x = \frac{7}{9}
\end{align}

And finally:

\begin{equation}
    \frac{14}{9}-1 = z = \frac{5}{9}
\end{equation}


## Multiply {#multiply}

\begin{equation}
\begin{pmatrix}
1 & 2 & 1 \\\\
2 & 0 & -1 \\\\
1 & -1 & 0\end{pmatrix} \begin{pmatrix} x \\\\
y\\\\
z \end{pmatrix} = \begin{pmatrix}
x+2y+z \\\\
2x-z \\\\
x-y
\end{pmatrix}
\end{equation}

The inner dimensions (column vs. row) of the matricies have to be the same for them to be multiplied; matrix multiplication is not commutative.


## Proof: 2x2 Matrices with Real Entries form a Group Under Addition {#proof-2x2-matrices-with-real-entries-form-a-group-under-addition}


### Closure {#closure}

\begin{equation}
\begin{pmatrix}
   a & b \\\\
c &d
\end{pmatrix} + \begin{pmatrix}
   e & f \\\\
g & h
\end{pmatrix} = \begin{pmatrix}
   a+e & b+f \\\\
c+g & d+h
\end{pmatrix}
\end{equation}


### Identity {#identity}

\begin{equation}
\begin{pmatrix}
   a & b \\\\
c &d
\end{pmatrix} + \begin{pmatrix}
   0 & 0 \\\\
0 & 0
\end{pmatrix} = \begin{pmatrix}
   a & b \\\\
c & d
\end{pmatrix}
\end{equation}


### Inverse {#inverse}

\begin{equation}
\begin{pmatrix}
   a & b \\\\
c &d
\end{pmatrix} + \begin{pmatrix}
   -a & -b \\\\
-c & -d
\end{pmatrix} = \begin{pmatrix}
   0 & 0 \\\\
0 & 0
\end{pmatrix}
\end{equation}


### Associative {#associative}

\begin{equation}
\left (
\begin{pmatrix}
   x\_1 & x\_2 \\\\
x\_3 & x\_4
\end{pmatrix} + \begin{pmatrix}
   y\_1 & y\_2 \\\\
y\_3 & y\_4
\end{pmatrix} \right) + \begin{pmatrix}
   z\_1 & z\_2 \\\\
z\_3 & z\_4
\end{pmatrix} = \begin{pmatrix}
   (x\_1+y\_1)+z\_1 & (x\_2+y\_2)+z\_2 \\\\
   (x\_3+y\_3)+z\_3 & (x\_4+y\_4)+z\_4
\end{pmatrix}
\end{equation}

which is equal, by associativity in \\(\mathbb{F}\\), as:

\begin{equation}
\begin{pmatrix}
   x\_1+(y\_1+z\_1) & x\_2+(y\_2+z\_2) \\\\
   x\_3+(y\_3+z\_3) & x\_4+(y\_4+z\_4)
\end{pmatrix}
\end{equation}

And finally, this is equal to:

\begin{equation}
\begin{pmatrix}
   x\_1 & x\_2 \\\\
x\_3 & x\_4
\end{pmatrix} + \left (\begin{pmatrix}
   y\_1 & y\_2 \\\\
y\_3 & y\_4
\end{pmatrix} + \begin{pmatrix}
   z\_1 & z\_2 \\\\
z\_3 & z\_4
\end{pmatrix} \right)
\end{equation}

We have therefore shown that 2x2 matricies form a group under addition.


## Proof: 2x2 Matrices with Real Entries does _not_ from a Group Under Multiplication {#proof-2x2-matrices-with-real-entries-does-not-from-a-group-under-multiplication}


### Inverse {#inverse}

The matrix

\begin{equation}
\begin{pmatrix}
   0 & 0 \\\\
0 &1
\end{pmatrix}
\end{equation}

is not invertable. In that, one cannot apply a matrix to this one to result in the multiplicative identity \\(I\_2\\).