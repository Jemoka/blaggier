+++
title = "Linear Constraint Optimization"
author = ["Linear Constraint Optimization"]
draft = false
+++

\begin{align}
\min\_{x}\ &c^{\top} x \\\\
s.t.\ &Ax \leq b \\\\
& x \geq 0
\end{align}

-   linear objective function
-   linear constraints

single our inequality forms a half-space; the entire [feasible set]({{< relref "KBhsu_cs361_apr022024.md#formal-formulation-of-optimization" >}}) is denoted by a series of linear functions----these linear equalities are each **CONVEX**. The resulting [feasible set]({{< relref "KBhsu_cs361_apr022024.md#formal-formulation-of-optimization" >}}), then, is ALSO convex----meaning any line within the set remains within the set. So, any local minimum is a global minimum.


## 3 cases of design points {#3-cases-of-design-points}

1.  **points on the interior of feasible set** is always non-optimal, because we can always move along \\(c\\) gradient
2.  **points on the faces** could be optimal IFF the face is perpendicular to \\(c\\), the gradient of our objective function---but you can always slide along the face, making there be _infinite solutions_ if its on a face (because \\(c\\) doesn't change along that face)
3.  **points on vertex** could be optimal
4.  **unclosed feasible set**---possibly unbounded solution


## linear program equality form {#linear-program-equality-form}

\begin{align}
\min\_{x}\ &c^{\top} x \\\\
s.t.\ &Ax = b \\\\
& x \geq 0
\end{align}

We can transpose our standard-form expression into an equality form above by introducing another "slack variable" \\(s\\), such that we write:

\begin{equation}
Ax \leq b \implies Ax + s = b
\end{equation}

and introducing \\(s > 0\\) as another constraint.


## [FONC]({{< relref "KBhsu_cs361_apr042024.md#first-order-necessary-condition" >}}) for linear program {#fonc--kbhsu-cs361-apr042024-dot-md--for-linear-program}

To convert a linear program into a unconstrained program---

Our [Lagrangian]({{< relref "KBhlagrangian_mechanics.md" >}}):

\begin{align}
\mathcal{L} = c^{\top} x - \mu^{\top} - \lambda^{\top} (Ax - b)
\end{align}

Recall our [KKT Conditions]({{< relref "KBhsu_cs361_apr182024.md#kkt-conditions" >}}):

-   feasibility: \\(Ax = b, x \geq 0\\) (satisfies our constraints)
-   dual feasibility: \\(\mu \geq 0\\)
-   complementary slackness: \\(u \odot x = 0\\)
-   stationarity: \\(A^{\top}\lambda + \mu = c\\) (because [FONC]({{< relref "KBhsu_cs361_apr042024.md#first-order-necessary-condition" >}}): we want \\(\nabla\_{x}\mathcal{L} = 0\\)

Recall:

\begin{equation}
\min\_{x} \max\_{\mu \geq 0, \lambda} \mathcal{L}(x,\mu)
\end{equation}

For linear programs, is that [FONC]({{< relref "KBhsu_cs361_apr042024.md#first-order-necessary-condition" >}}) are sufficient by themselves!


## Dual Certificates {#dual-certificates}

[Dual Certificates](#dual-certificates) is a method of, given some proposed solution \\(x^{\*}\\) of the [primal problem]({{< relref "KBhsu_cs361_apr182024.md#primal-problem" >}}) for a [Linear Program]({{< relref "KBhlinear_constraint_optimization.md" >}}), we can verify the solution with the dual solution.

---

Recall the [dual form of the primal problem]({{< relref "KBhsu_cs361_apr182024.md#dual-form-of-the-primal-problem" >}}):

\begin{align}
\max\_{\lambda}\ &b^{\top}\lambda\\\\
s.t.\ &A^{\top} \lambda \leq c
\end{align}

Typically, this would give us an **lower bound** to the primal solution. However, for [Linear Program]({{< relref "KBhlinear_constraint_optimization.md" >}})s, they are **equal**.

---

So, given some \\((x^{\*}, \lambda^{\*})\\), we can verify it by checking:

1.  primal feasible: \\(Ax \leq b\\), \\(x \geq 0\\)
2.  dual feasible: \\(A^{\transpose} \lambda \leq c\\)
3.  dual certificate:  \\(c^{\top} x^{\*} = b^{\top} \lambda^{\*}\\)

This allows us to check, for a given solution, whether or not it is actually the correct solution.


## simplex algorithm {#simplex-algorithm}

1.  find feasible sets
2.  check for [KKT Conditions]({{< relref "KBhsu_cs361_apr182024.md#kkt-conditions" >}}) in [FONC for linear program](#fonc--kbhsu-cs361-apr042024-dot-md--for-linear-program)
3.  if done, return
4.  if not, try to swap possible vertices while maintaining optimality

recall that feasible solution essentially only exist on verticies. so this algorithm is a way of systematically checking verticies.


### Vertex Partitioning {#vertex-partitioning}

We need to define the act of partitioning before we can perform the [simplex algorithm](#simplex-algorithm).

We have two sets \\(\mathcal{B}, \mathcal{V}\\) which contains **indicies** in \\(x\\). For \\(\mathcal{B}\\), if \\(i \in \mathcal{B}\\), then \\(x\_{i} \geq 0\\). If \\(i \in \mathcal{V}\\), \\(x\_{i} = 0\\). Consider \\(n\\), the number of design variables in \\(x\\); and \\(m\\), the number of equality constraints in [linear program equality form](#linear-program-equality-form); vertices is defined the number of ways you can zero-out \\(n-m\\) of the values of \\(x\\). This means that a valid vertex would need \\(n-m\\) elements in \\(\mathcal{V}\\), and \\(m\\) elements in \\(\mathcal{B}\\) (because that's just \\(n-(n-m) = m\\)).

Recall:

\begin{align}
\min\_{x}\ &c^{\top} x \\\\
s.t.\ &Ax = b \\\\
& x \geq 0
\end{align}

Because \\(\mathcal{B}\\) are the only sets for which non-negative vertices's exist (that is, \\(x\_{\mathcal{V}} = 0\\)), we can write:

\begin{equation}
Ax = A\_{\mathcal{B}} x\_{\mathcal{B}} = b
\end{equation}

meaning, we can solve for the correct basis by writing:

\begin{equation}
x\_{\mathcal{B}} = A\_{\mathcal{B}}^{-1} b
\end{equation}

this will have a unique solution, then, when \\(A\_{\mathcal{B}}\\) is an [isomorphism]({{< relref "KBhisomorphism.md" >}}). Importantly, \\(A\_{\mathcal{B}}\\) is not going to be invertible for all choices of set \\(\mathcal{B}\\), so **not all partitions are valid verticies**.

```python
@dataclass
class LinearProgram:
    A: Matrix
    b: Vector
    c: Vector

    def get_valid_vertex(self, basis: List[int]):
        # because we want to index wile reserving the
        # original order, we sort
        basis = sorted(basis)

        # then, we want to get our A basis and try to
        # get x basis
        A_basis = self.A[:, basis]
        try:
            x_basis = A_basis.invert() @ b
        except:
            print("Can't invert! Not a valid basis.")
        # we want to set the rest of it as 0
        x_new = zeros_like(self.c)
        x_new[basis] = x_basis

        return x_new
```


### Partitioning FONC {#partitioning-fonc}

Recall our [KKT Conditions]({{< relref "KBhsu_cs361_apr182024.md#kkt-conditions" >}}):

-   feasibility: \\(Ax = b, x \geq 0\\) (satisfies our constraints)
-   dual feasibility: \\(\mu \geq 0\\)
-   complementary slackness: \\(u \odot x = 0\\)
-   stationarity: \\(A^{\top}\lambda + \mu = c\\)

We want to re-write this in terms of our basis. We can write \\(A^{\top}\lambda + \mu = c\\) as:

\begin{equation}
\begin{cases}
A\_{\mathcal{B}}^{\top}  \lambda + \mu\_{\mathcal{B}} = c\_{\mathcal{B}} \\\\
A\_{\mathcal{V}}^{\top} \lambda  + \mu\_{\mathcal{V}} = c\_{\mathcal{V}}
\end{cases}
\end{equation}

And our complementary slackness tells us that either \\(\mu\\) or \\(x\\) is zero. If \\(x\_{\mathcal{B}}\\) is non-zero, then \\(\mu\\) needs to be zero. If \\(\mu\\) is non-zero, then all \\(x\\) would need to be zero. Either way:

\begin{equation}
\mu\_{\mathcal{B}} = 0
\end{equation}

Therefore, let's consider the previous statement:

\begin{equation}
A\_{\mathcal{B}}^{\top}  \lambda + \mu\_{\mathcal{B}} = c\_{\mathcal{B}}
\end{equation}

plugging in the \\(\mu\_{\mathcal{B}}\\) from above, we obtain:

\begin{align}
&A\_{\mathcal{B}}^{\top}  \lambda + \mu\_{\mathcal{B}} = c\_{\mathcal{B}}  \\\\
\Rightarrow\ & A\_{\mathcal{B}}^{\top}  \lambda + 0 = c\_{\mathcal{B}}   \\\\
\Rightarrow\ & \lambda = A^{-\top}\_{\mathcal{B}} c\_{\mathcal{B}}
\end{align}

this allows us to check the [FONC for linear program](#fonc--kbhsu-cs361-apr042024-dot-md--for-linear-program) directly as we can compute \\(\lambda\\) for a given problem and basis.


### Phase 1: Initialize with a Valid Partition {#phase-1-initialize-with-a-valid-partition}

We need to first choose an initial partition which gives an initial feasible vertex. Recall our normal LP:

\begin{align}
\min\_{x}\ &c^{\top} x \\\\
s.t.\ &Ax = b \\\\
& x \geq 0
\end{align}

Let's change this problem by simply asking for constraint satisfaction and NOT minimality (i.e. set \\(c = 0\\)), AND let us introduce a helper variable \\(z\\):

\begin{align}
\min\_{x,z}\ &\mqty[0^{\top}, 1^{\top}] \mqty[x \\\ z] \\\\
s.t.\ &\mqty[A, Z] \mqty[x \\\ z] = b \\\\
& \mqty[x \\\ z] \geq 0
\end{align}

where \\(Z\\) is a diagonal square matrix of size of b:

\begin{equation}
Z\_{ii} = \begin{cases}
1, \text{if}\ b\_{i} \geq  0 \\\\
-1
\end{cases}
\end{equation}

(we do this because without this we can't support negative \\(b\\)).

Notice! For \\(A \in \mathcal{L}(n,m)\\), the partition \\(\mathcal{B} = \\{n+1, ..., n+m\\}\\) satisfies our constraints! We can see this by seting all \\(x = 0\\), and initialize \\(z\_{j} = |b\_{j}|\\).

If the original LP is feasible, the optimal solution to this LP should result in all of the \\(z = 0\\). So, if we solved the above and yet \\(z \neq 0\\) to satisfy the constraint \\(Ax + Zz = b\\), our original LP is infeasible.

Once we obtain the \\(\mathcal{B}\\) from the setup above, we can use that set as the initial partition to solve (because constraints are the same, and \\(z=0\\), our partitions can be recycled):

\begin{align}
\min\_{x,z}\ &\mqty[c^{\top} & 0^{\top}] \mqty[x \\\ z] \\\\
s.t.\ &\mqty[A & I \\\ 0 & I] \mqty[x \\\ z] = \mqty[b \\\ 0] \\\\
& \mqty[x \\\ z] \geq 0
\end{align}

(we keep \\(z\\) around because our initial partition may include \\(z\\)).


### Phase 2: Bounce Between Valid Partitions Until We Are Optimal {#phase-2-bounce-between-valid-partitions-until-we-are-optimal}

Consider an initial partition \\(\mathcal{B}\\); choose an entering index \\(q \in \mathcal{V}\\), and a leaving index \\(p \in \mathcal{B}\\). This results in a vertex transition \\(x \to x'\\).

Let's now define this thing \\(x\_{\mathcal{B}}'\\), which is the elements that **survived the transition**. Formally, this is the slice of the next vertex, projected onto the previous basis. Since \\(p\\) left (i.e. the [subspace]({{< relref "KBhsubspace.md" >}}) formed by new \\(\mathcal{B}\\), of which \\(x'\\) belongs, does not include index \\(p\\)), we expect that \\((x'\_{\mathcal{B}})\_{p} = 0\\).

So then, the middle parts of deriving phase 2 essentially involves "how do we grantee constraint satisfaction?" Recall Linear Program KKT, and recall:

\begin{align}
\min\_{x}\ &c^{\top} x \\\\
s.t.\ &Ax = b \\\\
& x \geq 0
\end{align}


#### feasibility: \\(Ax = b, x \geq 0\\) (satisfies our constraints) {#feasibility-ax-b-x-geq-0--satisfies-our-constraints}

So we need first:

\begin{equation}
Ax = b = Ax'
\end{equation}

specifically, then:

\begin{equation}
A\_{\mathcal{B}} + x\_\mathcal{B} = b = A\_{\mathcal{B}} x'\_{\mathcal{B}} + A\_{\\{q\\}} x\_{\\{q\\}}'
\end{equation}

(the right side makes sense because, as with the remark above, the leaving index would have a value of \\(0\\), meaning it won't change our computation).

Using the equality above, we can write:

\begin{equation}
x\_{\mathcal{B}}' = x\_{\mathcal{B}} - A^{-1}\_{\mathcal{B}} A\_{\\{q\\}} x'\_{\\{q\\}}
\end{equation}


#### objective optimality: \\(c^{\top} x'\\) {#objective-optimality-c-top-x}

We can re-write our objective in terms of the old basis

\begin{align}
c^{\top} x' &= c\_{\mathcal{B}}^{\top} x'\_{\mathcal{B}} + c\_{q} x'\_{q}
\end{align}

Plugging in our value for \\(x'\_{\mathcal{B}}\\) from above, we obtain:

\begin{align}
c^{\top} x' &= c\_{\mathcal{B}}^{\top} \qty(x\_{\mathcal{B}} - A^{-1}\_{\mathcal{B}} A\_{\\{q\\}} x'\_{\\{q\\}}) + c\_{q} x'\_{q}
\end{align}

Simplifying, we will obtain a \\(c\_{\mathcal{B}}^{\top} A^{-1}\_{\mathcal{B}}\\), which, recall from above that \\(\lambda = A^{-\top}\_{\mathcal{B}} c\_{\mathcal{B}} \implies \lambda^{\top} =  c\_{\mathcal{B}}^{\top} A^{-1}\_{\mathcal{B}}\\), so we can write this into:

\begin{align}
c^{\top} x' &= c\_{\mathcal{B}}^{\top} x\_{\mathcal{B}} - \lambda^{\top} A\_{\\{q\\}} x'\_{q} + c\_{q} x'\_{q}
\end{align}

Plugging in our value from stationarity above (\\(A\_{\mathcal{V}}^{\top} \lambda  + \mu\_{\mathcal{V}} = c\_{\mathcal{V}}\\)), but specifically constraining to a single set \\(\\{q\\}\\) instead of \\(\mathcal{V}\\), and simplifying, we also have:

\begin{align}
c^{\top} x' &= c^{\top} x + \mu\_{q} x'\_{q}
\end{align}


#### conditions for optimality {#conditions-for-optimality}

The top two steps gives:

\begin{equation}
x\_{\mathcal{B}}' = x\_{\mathcal{B}} - A^{-1}\_{\mathcal{B}} A\_{\\{q\\}} x\_{q}'
\end{equation}

and:

\begin{equation}
c^{\top} x' - c^{\top} x = \mu\_{q} x\_{q}'
\end{equation}

**key idea**: the second expression tells that our objective will only decrease if \\(\mu\_{q}\\) is negative (recall that correctly constrained \\(x\\) is non negative). So, to progress towards optimality, we need to find some \\(q\\) which makes \\(\mu\_{q}\\) negative. If all of \\(\mu\_{\mathcal{V}}\\) is non-negative, we know we can't find a better \\(\mu\\) anymore so we found the optimum.


#### finishing up {#finishing-up}

Finally, we need to 1) choose the entering index \\(q\\) and 2) solve for the corresponding leaving index \\(p\\).

<!--list-separator-->

-  Possible Heuristics for choosing \\(q\\)

    -   choose \\(q\\) which reduces \\(c^{\top} x\\) maximally
    -   Danzig: choose \\(q\\) with the most negative \\(\mu\_{\\{q\\}}\\)
    -   Bland: choose first \\(q\\) with negative \\(\mu\_{\\{q\\}}\\)

    we will use the first one.

<!--list-separator-->

-  Solving for \\(p\\)

    First choose an _entering_ index \\(q\\), then solve for leaving index \\(p\\). Given a choice of \\(q\\), a correctly chosen \\(p\\) would give \\((x'\_{\mathcal{B}})\_{p} = 0\\). Using this fact and substituting it into the definition of \\(x\_{\mathcal{B}}'\\) gives:

    \begin{equation}
    \qty(x'\_{\mathcal{B}})\_{p} = 0 = \qty(x\_{\mathcal{B}})\_{p} - \qty(A^{-1}\_{\mathcal{B}} A\_{\\{q\\}})\_{p} x'\_{q}
    \end{equation}

    the right hand side, then gives the following expression we call [minimum ratio test](#solving-for-p):

    \begin{equation}
    x\_{q}' = \frac{(x\_{\mathcal{B}})\_{p}}{(A\_{\mathcal{B}}^{-1} A\_{\\{q\\}})\_{p}}
    \end{equation}

    This computation, then, allows us to check the value of \\(\mu\_{q} x'\_{q}\\), which we want to make as small as possible. For a possibly-valid of choice of \\(q\\), we will have negative \\(\mu\_{q}\\) (see above in [conditions for optimality](#conditions-for-optimality)); therefore, to minimize \\(\mu\_{q}x'\_{q}\\), we need to make \\(x'\_{q}\\) as large as we can through our choice of \\(p\\).

    Hence, to choose \\(p\\), we just want to iteratively select the best \\(p\\) to minimize the above ratio.


### putting it all together {#putting-it-all-together}

```python
@dataclass
class LinearProgram:
    A: Matrix
    b: Vector
    c: Vector

    def solve(self):
        row,col = self.A.shape

        ### initialize components of basis problem ###
        # recall we want Z to be an identity
        # matrix, but sign match b to maintain
        # positivity
        z =
        Z = diag(self.b/abs(self.b))

        ### set up basis problem ###
        A_p = cat([self.A, Z])
        b_p = b
                  # x          # z
        c_p = cat([zeros(col), zeros(row)])
        # initial basis is n+1 ... n+m
        initial_basis = range(col+1, col+row+1)
        # create problem
        lp = LinearProgram(A_p, b_p, c_p)
        solver = LPSolver(lp, initial_basis)
        x_opt, basis = solver.solve()

        ### check feasibility ###
        # if any z results are non-zero, bad an stop
        if any(x_opt[col:] != 0):
            raise Exception("LP constraints not feasible")

        ### solve surrogate problem ###
        A_p = block_matrix([[self.A,             identity(row, row)],
                             [zeros((row, col)), identity(row, row)]])
        b_p = cat([b, zeros(row)])
        c_p = cat([c, zeros(row)])
        # create actual problem
        lp = LinearProgram(A_p, b_p, c_p)
        solver = LPSolver(lp, initial_basis)
        x_final, _ = solver.solve()
        # return only the x part, and not z
        return x_final[:col]

@dataclass
class LPSolver:
    LP: LinearProgram
    basis: List[int]

    # we solve by iterating upon the basis until
    # we find which which satisfies optimality (no swaps are possible)
    def solve(self):
        # step returns True when optimal
        while self.step() == False:
            continue
        # solve for our Xb (recall Ax = b)
        Ab = self.LP.A[:, self.basis]
        # we assume that basis_indicies is a valid basis, so Ab is invertable
        x_basis = Ab.invert() @ self.LP.b
        # fill that in
        x = zeros_like(self.c)
        x[self.basis] = x_basis

        return x, self.basis

    # greedily select the q that minimizes the system
    def step(self):
        basis_indicies = sorted(self.basis)
        # free indicies are the indicies that are not in the basis
        free_indicies = sorted(set(range(1, len(self.LP.c)+1)) -
                               set(basis_indicies))
        # partition our program into free and unfree sections
        Ab, Av = self.LP.A[:, basis_indicies], self.LP.A[:, free_indicies]
        cb, cv = self.LP.c[basis_indicies], self.LP.c[free_indicies]

        #####

        # solve for our new Xb (recall Ax = b)
        # we assume that basis_indicies is a valid basis, so Ab is invertable
        x_basis = Ab.invert() @ b
        # solve for our lagrange multipliers, which is derived in "partitioning FONC" section
        lmbda = Ab.invert().T() @ cb
        mu_v = cv - Av.T() @ lmbda

        ######

        # where best_delta is c^top x' - c^\top x
        (q_indx_best, p_indx_best,
         xq_prime_best, best_delta) = (None, None,
                                       float("inf"), float("inf"))

        # now, we need to use the greedy heuristic to choose q, meaning
        # we need to find our most negative mu_q x'q decrement out of v
        # recall q in V
        for q_indx, mu_q in enumerate(mu_v):
            if mu_q < 0: # otherwise it will literally be an increase because mu_v[indx] > 0,
                      # and we want the most negative mu_q
                # we want to find the best p given this q
                p_indx, xq_prime = self.solve_for_p_given_q(q_indx)
                # apply greedy heuristic
                if mu_q * xq_prime < best_delta:
                    q_indx_best, p_indx_best, xq_prime_best, best_delta = (
                        q_indx, p_indx,
                        xq_prime, mu_q * xq_prime
                    )

        # if q is still None, this means that we are at optimiality (i.e. all
        # choices of mu_q results in a higher error
        if q == None:
            # satisfies dual feasibility, this is global optimum
            return True

        # otherwise, this means that our problem is likely unbounded
        # that is, no smaller xq' exists as the minimum raito
        if xq_prime_best == float("inf"):
            raise Exception("unbounded LP")
        # swap p and q
        basis_indicies[basis_indicies.index(p_indx_best)] = q_indx_best
        # cache our new basis
        self.basis = basis_indicies
        # and then tell the system we haven't optimality
        return False

    # use the minimum ratio test
    def solve_for_p_given_q(self, q_cand_indx):
        basis_indicies = sorted(self.basis)
        # free indicies are the indicies that are not in the basis
        free_indicies = sorted(set(range(1, len(self.LP.c)+1)) -
                               set(basis_indicies))
        # partition our program into free and unfree sections
        Ab = self.LP.A[:, basis_indicies]
        # this is A_{q}, which only has our one q candidate
        Aq = self.LP.A[:, free_indicies[q_cand_indx]]
        # solve for our new Xb (recall Ax = b)
        # we assume that basis_indicies is a valid basis, so Ab is invertable
        x_basis = Ab.invert() @ self.LP.b

        #####

        # solve for our minimum ratio
        # first, we can cache all possible denomitanor
        # values for x_q' given each index of p
        xq_prime_denominator_cache = Ab.inverse() @ Aq

        # cache the smallest ratio we have see
        p_indx_best, xq_prime_best = 0, float("inf")

        # now iteratively find a p that will work
        for p_indx, d in enumerate(xq_prime_denominator_cache):
            # it could be zero, and we don't want a divide by zero
            if d > 0:
                # see if we got a better minimum ratio as what we had
                min_ratio = x_basis[p_indx]
                if min_ratio < xq_prime_best:
                    p_indx_best, xq_prime_best = p_indx, min

        # return the best we have
        return p_indx_best, xq_prime_best

```
