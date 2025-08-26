+++
title = "NUS-MATH530 Linear Vehicles"
author = ["Houjun Liu"]
draft = false
+++

## Infinite Plane {#infinite-plane}


### Two Vehicles {#two-vehicles}

Yes. Though the travel of the two vehicles are not entirely independent, the second vehicle can diagonally traverse the plane while the first vehicle cuts across it. Practically, the question asks whether or not a combination of:

\begin{equation}
\alpha \begin{pmatrix}
0 \\\ 1
\end{pmatrix} + \beta \begin{pmatrix}
1 \\\ 1
\end{pmatrix}
\end{equation}

Can form all vectors in \\(\mathbb{R}^2\\). Expanding that expression out, we have, given some point \\((a,b)\\) that:

\begin{equation}
\begin{pmatrix}
\beta \\\\
\alpha + \beta
\end{pmatrix} = \begin{pmatrix}
a \\\ b
\end{pmatrix}
\end{equation}

Therefor, we have expressions:

\begin{equation}
\begin{cases}
\beta = a \\\\
\alpha +\beta = b
\end{cases}
\end{equation}

Substituting the definition of \\(\beta\\) then:

\begin{align}
&\alpha + a = b \\\\
\Rightarrow\ &\alpha = b - a
\end{align}

Therefore, we have that, for all desired locales \\((a,b)\\) we have a fully determined solution:

\begin{equation}
\begin{cases}
\alpha = b-a \\\\
\beta = a
\end{cases}
\end{equation}

This means that some direction of travel in both vehicles will suffice.


### Going Home {#going-home}

Not necessarily. Graphically, after shifting yourself to some location upper-right, its impossible to move horizontally in the vertical-only vehicle.

Practically, the question is asking that, if you are at some beginning location:

\begin{equation}
\begin{pmatrix}
a \\\b
\end{pmatrix}
\end{equation}

Can we devise some travel that follows:

\begin{equation}
\alpha \begin{pmatrix}
0 \\\ 1
\end{pmatrix} + \begin{pmatrix}
a \\\b
\end{pmatrix} = \begin{pmatrix}
0 \\\ 0
\end{pmatrix}
\end{equation}

Expanding this out, we have expressions:

\begin{equation}
\begin{cases}
0 + a = 0 \\\\
\alpha + b = 0
\end{cases}
\end{equation}

Namely, we have that:

\begin{equation}
\begin{cases}
a = 0 \\\\
\alpha = -b
\end{cases}
\end{equation}

We are therefore under-determined here; there is a solution only \\(\forall a=0\\), but for no other \\(a\\).


## Infinite Space {#infinite-space}


### Pickup and Hoverboard {#pickup-and-hoverboard}

We have:

\begin{equation}
\alpha \begin{pmatrix}
1 \\\ 1 \\\ 0
\end{pmatrix} + \beta \begin{pmatrix}
3 \\\ -2 \\\1
\end{pmatrix}
\end{equation}

to go to all directions \\((a,b,c)\\). Let's try solving:

\begin{equation}
\begin{cases}
\alpha + 3\beta = a\\\\
\alpha -2\beta  = b \\\\
\beta = c
\end{cases}
\end{equation}

Substituting the value for \\(\beta=c\\), to the above equations, we have:

\begin{equation}
\begin{cases}
\alpha + 3c = a \\\\
\alpha - 2c = b \\\\
\end{cases}
\end{equation}

And therefore, we have results:

\begin{equation}
\begin{cases}
\alpha = a-3c \\\\
\alpha = b+ 2c
\end{cases}
\end{equation}

This equation is again over-determined. Therefore, you cannot get anywhere in your space; you can, however, get to all the points \\((a,b,c)\\) where:

\begin{equation}
a-3c = b+2c
\end{equation}


### Pickup, Hoverboard, AND Jetpack (part 1) {#pickup-hoverboard-and-jetpack--part-1}

We now have:

\begin{equation}
\alpha \begin{pmatrix}
1 \\\ 1 \\\ 0
\end{pmatrix} + \beta \begin{pmatrix}
3 \\\ -2 \\\ 1
\end{pmatrix} + \gamma \begin{pmatrix}
0 \\\ 1 \\\ 1
\end{pmatrix}
\end{equation}

to go to all points \\((a,b,c)\\), we now try solving:

\begin{equation}
\begin{cases}
\alpha + 3\beta  = a \\\\
\alpha -2\beta + \gamma = b\\\\
\beta +\gamma = c
\end{cases}
\end{equation}

At this point, it is probably easier to use a matrix to solve this expression. Hence, let's solve:

\begin{equation}
\begin{pmatrix}
1 & 3 & 0 \\\\
1 & -2 & 1 \\\\
0 & 1 & 1
\end{pmatrix} \begin{pmatrix}
\alpha \\\ \beta \\\ \gamma
\end{pmatrix} = \begin{pmatrix}
a \\\ b \\\c
\end{pmatrix}
\end{equation}

Let's first subtract the first column from the second column:

\begin{equation}
\begin{pmatrix}
1 & 3 & 0 \\\\
0 & -5 & 1 \\\\
0 & 1 & 1
\end{pmatrix} \begin{pmatrix}
\alpha \\\ \beta \\\ \gamma
\end{pmatrix} = \begin{pmatrix}
a \\\ b-a \\\c
\end{pmatrix}
\end{equation}

Let's now rotate rows \\(2\\) and \\(3\\):

\begin{equation}
\begin{pmatrix}
1 & 3 & 0 \\\\
0 & 1 & 1\\\\
0 & -5 & 1
\end{pmatrix} \begin{pmatrix}
\alpha  \\\ \gamma \\\ \beta
\end{pmatrix} = \begin{pmatrix}
a  \\\c\\\ b-a
\end{pmatrix}
\end{equation}

Great. Now let's subtract thrice the second row towards the first row:

\begin{equation}
\begin{pmatrix}
1 & 0 & -3 \\\\
0 & 1 & 1\\\\
0 & -5 & 1
\end{pmatrix} \begin{pmatrix}
\alpha  \\\ \gamma \\\ \beta
\end{pmatrix} = \begin{pmatrix}
a-3c  \\\c\\\ b-a
\end{pmatrix}
\end{equation}

And add five times the second row to the last row

\begin{equation}
\begin{pmatrix}
1 & 0 & -3 \\\\
0 & 1 & 1\\\\
0 & 0 & 6
\end{pmatrix} \begin{pmatrix}
\alpha  \\\ \gamma \\\ \beta
\end{pmatrix} = \begin{pmatrix}
a-3c  \\\c\\\ b-a+5c
\end{pmatrix}
\end{equation}

Let's subtract a sixth of the last row to the second row:

\begin{equation}
\begin{pmatrix}
1 & 0 & -3 \\\\
0 & 1 & 0\\\\
0 & 0 & 6
\end{pmatrix} \begin{pmatrix}
\alpha  \\\ \gamma \\\ \beta
\end{pmatrix} = \begin{pmatrix}
a-3c  \\\c-\frac{b-a+5c}{6}\\\ b-a+5c
\end{pmatrix}
\end{equation}

And add a half to the top row:

\begin{equation}
\begin{pmatrix}
1 & 0 & 0 \\\\
0 & 1 & 0\\\\
0 & 0 & 6
\end{pmatrix} \begin{pmatrix}
\alpha  \\\ \gamma \\\ \beta
\end{pmatrix} = \begin{pmatrix}
a-3c + \frac{b-a+5c}{2} \\\c-\frac{b-a+5c}{6}\\\ b-a+5c
\end{pmatrix}
\end{equation}

And finally divide the bottom row by \\(6\\):

\begin{equation}
\begin{pmatrix}
1 & 0 & 0 \\\\
0 & 1 & 0\\\\
0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
\alpha  \\\ \gamma \\\ \beta
\end{pmatrix} = \begin{pmatrix}
a-3c + \frac{b-a+5c}{2} \\\c-\frac{b-a+5c}{6}\\\ \frac{{b-a+5c}}{6}
\end{pmatrix}
\end{equation}

Great. So now we have a fully determined solution \\(\forall \alpha, \beta, \gamma\\). Therefore, given a pair of location which you want to reach \\((a,b,c)\\), we can use the expressions above to solve for the values by which we have to move each vehicle.


### Pickup, Hoverboard, AND Jetpack (part 2) {#pickup-hoverboard-and-jetpack--part-2}

We have the same problem, but with new numbers.

\begin{equation}
\begin{pmatrix}
1 & 3 & 5 \\\\
1 & -2 & 0 \\\\
0 & 1 & 1
\end{pmatrix} \begin{pmatrix}
\alpha \\\ \beta \\\ \gamma
\end{pmatrix} = \begin{pmatrix}
a \\\ b \\\c
\end{pmatrix}
\end{equation}

At this point, we really want to be checking of the vectors which form this matrix is a spanning set; that is, after performing Gaussian elimination, do we get back a zero-row? If so, it will restrict some combination of our input \\((a,b,c)\\) to converge to \\(0\\).

Let's begin by subtracting the first row from second row

\begin{equation}
\begin{pmatrix}
1 & 3 & 5 \\\\
0 & -5 & -5 \\\\
0 & 1 & 1
\end{pmatrix}
\end{equation}

And now, let's divide the middle row by \\(\frac{-1}{5}\\)

\begin{equation}
\begin{pmatrix}
1 & 3 & 5 \\\\
0 & 1 & 1 \\\\
0 & 1 & 1
\end{pmatrix}
\end{equation}

Let's then subtract the middle row from the last row:

\begin{equation}
\begin{pmatrix}
1 & 3 & 5 \\\\
0 & 1 & 1 \\\\
0 & 0 & 0
\end{pmatrix}
\end{equation}

Already we see an \\(0\\) row emerging. That means that some combination of the variables have to be \\(0\\) for a solution to exist: these vectors do not span the space and therefore we can't get everywhere in space.


### Pickup Breaks Down {#pickup-breaks-down}

We now want to know if the following vectors would reach \\((0,0,0)\\) after driving the pickup some distance \\(d\\); that is, if we started at some \\((a,b,c)\\), can:

\begin{equation}
\begin{pmatrix}
1 & 3 & 0 \\\\
1 & -2 & 1 \\\\
0 & 1 & 1 \\\\
\end{pmatrix} \begin{pmatrix}
0 \\\ \beta \\\ \gamma
\end{pmatrix} = -\begin{pmatrix}
a \\\ b \\\ c
\end{pmatrix}
\end{equation}

yield a solution? We have already performed the Gaussian Elimination above, therefore, we will skip directly to the solution:

\begin{equation}
\begin{pmatrix}
1 & 0 & 0 \\\\
0 & 1 & 0\\\\
0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
0  \\\ \gamma \\\ \beta
\end{pmatrix} = -\begin{pmatrix}
a-3c + \frac{b-a+5c}{2} \\\c-\frac{b-a+5c}{6}\\\ \frac{{b-a+5c}}{6}
\end{pmatrix}
\end{equation}

Obviously the bottom few rows yield a solution, however, the top row places some limitation on our possible location. Namely, that:

\begin{equation}
-\frac{a+b-c}{2} = 0
\end{equation}

If the locations you are at do not behave with these rules, a solution will not be yielded.