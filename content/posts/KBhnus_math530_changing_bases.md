+++
title = "NUS-MATH530 Changing Bases"
author = ["Houjun Liu"]
draft = false
+++

## Standard Bases Back and Fourth {#standard-bases-back-and-fourth}

To map the vectors from \\(B\_2\\) back to the standard bases, we simply have to construct the map:

\begin{equation}
\mqty(2 & 1 & 2 \\\ 1& 1& -1 \\\ 1 & -1 & 0)
\end{equation}

Each of the "standard" vectors in the new basis, when applied to this matrix, gets moved back to their original representation.

Presumably, then, moving "forward" into the new space is simply taking the inverse of this vector, which we will do separately; its inverse is:

\begin{equation}
\mqty(\frac{1}{7} & \frac{2}{7} & \frac{3}{7} \\\ \frac{1}{7} & \frac{2}{7} & -\frac{4}{7} \\\ \frac{2}{7} & -\frac{3}{7} & -\frac{1}{7})
\end{equation}

Now. The former matrix will map vectors in terms of \\(B\_2\\) into \\(B\_1\\), and the latter \\(B\_1\\) into \\(B\_2\\).


## Mapping Back and Forth {#mapping-back-and-forth}

We can apply the latter matrix to the vector to change its basis:

\begin{equation}
\mqty(1 \\\ 1 \\\ 0)
\end{equation}

This means that, as a linear combination of \\(B\_2\\), we have:

\begin{equation}
1 \mqty(2 \\\ 1 \\\ 1) + 1 \mqty(1 \\\ 1 \\\ -1) + 0 \mqty(2 \\\ -1 \\\0)
\end{equation}

And the vector \\(\mqty(1\\\1\\\0)\\) aforementioned is the representation of the vector desired in terms of basis \\(B\_2\\). The desired matrix mapping in the second matrix above.


## Generally {#generally}

For mapping from a new basis to the standard basis, simply arrange the vectors that form the basis as columns of a matrix. To map from the standard basis towards the new ones, invert that map. If mappings between two basis are needed, and they are both expressed in terms of the standard basis, compose the maps.