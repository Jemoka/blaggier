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


#### Creating \\(S\\) {#creating-s}

Define a relation \\(S:range\ T\to V\\) in the following manner:

\begin{equation}
S(v) = a \mid Ta = v
\end{equation}


#### Demonstrating that \\(S\\) is a function {#demonstrating-that-s-is-a-function}

We show that there are no two possible choices for \\(a\\), and therefore that \\(S\\) is a function, by the injectivity of \\(T\\). Recall a function is a map has the property that \\(v=u \implies Fv=Fu\\).

So, given \\(v, u \in W\\) and \\(v=u\\), we have:

-   \\(Sv = a \mid Ta=v\\)
-   \\(Su = b \mid Tb=u\\)

If \\(Sv=Su\\), then \\(a=b\\). To demonstrate that \\(S\\) is a function, we now desire that \\(a=b\\).

-   From the above, we have that \\(Ta=v\\), \\(Tb=u\\).
-   From prior, we have \\(v=u\\)
-   From the two statements above, we have \\(v=u \implies Ta=Tb\\)

Recall now that a linear map called injective when \\(Tv=Tu \implies v=u\\).

Therefore, from the injectivity of \\(T\\), we have that \\(Ta=Tb \implies a=b\\). Hence demonstrating the desired quality that shows \\(S\\) as a function.


#### Demonstrating that \\(S\\) is a linear map {#demonstrating-that-s-is-a-linear-map}

The linearity \\(S\\) actually simply inherits the linearity of \\(T\\), which is defined to be a linear map.

Additivity:

\begin{align}
Sv+Su &= (a \mid Ta =v) + (b \mid Tb =u) \\\\
&= (a+b) \mid Ta+Tb = (v+u) \\\\
&= (a+b) \mid T(a+b) = (v+u)  \\\\
&= x \mid Tx = (v+u)  \\\\
&= S(v+u)
\end{align}

Homogenity is shown in a similar fashion. We can therefore conclude that \\(S \in \mathcal{L}(range\ T, V)\\).


#### Note on the codomain of \\(S\\) {#note-on-the-codomain-of-s}

Note that we desire \\(S \in \mathcal{L}(W,V),\ i.e.\ S:W\to V\\), And yet, as it stands, \\(S: range\ T \to W\\). Fortunately, as \\(range\ T\\) is a subspace of \\(W\\) (as ranges are subspaces of the codomain), we can leverage Axler 3.A-E11 (Sasha's Proof, "maps to subspaces can be extended to the whole space") to arbitrary extend \\(S\\) to \\(S:W\to V\\).

It turns out that where the "extended" basis vectors gets mapped doesn't matter. We only care about \\(S\\) insofar as its compositional behavior with \\(T\\).


#### Demonstrating that \\(S\\) has the properties we desire {#demonstrating-that-s-has-the-properties-we-desire}

We desire that \\(ST = I \in \mathcal{L}(V,V)\\).

Recall that the "identity map" on \\(V\\) is a map \\(I \in \mathcal{L}(V,V)\\) such that \\(Iv = v, \forall v \in V\\). We now show that \\(ST\\) acts like the identity map.

WLOG take \\(v \in V\\).

-   Let \\(Tv=a\\).
-   Let \\(Sa = u\\). Based on the definition of \\(S\\) (that \\(Sx = y \mid Ty=x\\), "\\(S\\) is the inverse map"), we have that \\(Tu=a\\).

Recall once again that a linear map called injective when \\(Tv=Tu \implies v=u\\).

We now have that \\(Tu=a=Tv\\), therefore, because \\(T\\) is given injective, \\(u=v\\).

We have show WLOG that \\((ST)v = S(Tv) =Sa = u=v\\). Therefore \\((ST)v=v\\), making \\(ST\\) an identity map \\(ST:V\to V\\). Lastly, as the product of linear maps are themselves a linear map, \\(ST=I\in \mathcal{L}(V,V)\\)


#### Conclusion {#conclusion}

Having constructed the existence of \\(S\\) based on the required properties of \\(T\\), we show that given an injective \\(T \in \mathcal{L}(V,W)\\), have an \\(S \in \mathcal{L}(W,V)\\) such that \\(ST = I \in \mathcal{L}(V,V)\\), as desired.


### Given \\(S\\) {#given-s}

Given some \\(T \in \mathcal{L}(V,W)\\) and that \\(\exists S \in \mathcal{L}(W,V): ST=I \in \mathcal{L}(V,V)\\), we desire that \\(T\\) is injective. Fortunately, we essentially just reverse the logic of the last section in the last part of the proof.

Recall that a linear map called injective when \\(Tv=Tu \implies v=u\\). Suppose for the sake of contradiction that \\(\exists u,v: Tv=Tu\\) but \\(u\neq v\\).

-   Let \\(Tv=Tu=a\\)
-   Let \\(Sa=b\\)

Therefore: \\((ST)v=(ST)u=S(a)=b\\). Just to reiterate, this means that we have:

-   \\((ST)v=b\implies Iv=b\\)
-   \\((ST)u=b \implies Iu=b\\)

Therefore, we have that \\(Iv=Iu\\) for distinct \\(v,u\\), which is absurd. Having reached contradiction, we have that \\(Tu=Tv\implies u=v\\), reaching the definition of injectivity for \\(T\\). \\(\blacksquare\\)