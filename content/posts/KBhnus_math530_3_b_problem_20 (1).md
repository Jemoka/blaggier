+++
title = "NUS-MATH530 3.B Problem 20"
author = ["Houjun Liu"]
draft = false
+++

## Statement {#statement}

Support \\(W\\) is finite-dimensional, and \\(T \in \mathcal{L}(V,W)\\). Prove that \\(T\\) is injective IFF \\(\exists S \in \mathcal{L}(W,V)\\) such that \\(ST = I \in \mathcal{L}(V,V)\\).


## Proof {#proof}


### Given injectivity {#given-injectivity}

Given an injective \\(T \in \mathcal{L}(V,W)\\), we desire that \\(\exists S \in \mathcal{L}(W,V)\\) such that \\(ST = I \in \mathcal{L}(V,V)\\).

We begin with some statements.

-   Recall that, a linear map called injective when \\(Tv=Tu \implies v=u\\)
-   Recall also that the "identity map" on \\(V\\) is a map \\(I \in \mathcal{L}(V,V)\\) such that \\(Iv = v, \forall v \in V\\)


#### Motivating \\(S\\) {#motivating-s}

We show that we can indeed create a function \\(S\\) by the injectivity of \\(T\\). Recall a function is a map has the property that \\(v=u \implies Fv=Fu\\).

WLOG consider two vectors \\(a,b \in V\\).


#### Creating \\(S\\) {#creating-s}

Define a function \\(S:W\to V\\) in the following manner:

\begin{equation}
S(v) = a \mid Ta = v
\end{equation}

<!--list-separator-->

-  Demonstrating that \\(S\\) is a function

    So, given \\(v, u \in W\\) and \\(v=u\\), we have:

    -   \\(Sv = a \mid Ta=v\\)
    -   \\(Su = b \mid Tb=u\\)

    If \\(Sv=Su\\), then \\(a=b\\). To demonstrate that \\(S\\) is a function, we now desire that \\(a=b\\).

    -   From the above, we have that \\(Ta=v\\), \\(Tb=u\\).
    -   From prior, we have \\(v=u\\)
    -   From the two statements above, we have \\(v=u \implies Ta=Tb\\)
    -   Lastly, from the injectivity of \\(T\\), we have that \\(Ta=Tb \implies a=b\\)

    Hence demonstrating