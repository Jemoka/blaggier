+++
title = "SU-CS242 OCT172024"
author = ["Houjun Liu"]
draft = false
+++

Lambda calculus, now with sums:

\begin{equation}
e \to (x | \lambda \lambda x.e | e e | i | e+e)
\end{equation}


## explicit evaluation order {#explicit-evaluation-order}

write \\(e + e'\\) as....

\\(( \lambda x . ((\lambda y . (\lambda z.z) (x +  y)) e')) e\\)

in a call by value world, this would explicitly specify the order that we add \\(x\\) and \\(y\\) together.

Notice! We can also write this with let notation:

two good things about this

1.  the order of evaluation is explicit
2.  every intermediate result is now named
