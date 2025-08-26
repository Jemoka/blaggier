+++
title = "SIR Model"
author = ["Houjun Liu"]
draft = false
+++

The [SIR Model]({{< relref "KBhsir_model.md" >}}) is a model to show how diseases spread.

-   Susceptible -- # of susceptible people
-   Infectious --- # of infectious people
-   Removed --- # of removed people


## Compartmental SIR model {#compartmental-sir-model}

S =&gt; I =&gt; R [ =&gt; S]

So then, the question is: what is the transfer rate between populations between these compartments?

Parameters:

-   \\(R\_0\\) "reproductive rate": the number of people that one infectious person will infect over the duration of their entire infectious period, if the rest of the population is entirely susceptible (only appropriate for a short duration)
-   \\(D\\) "duration": duration of the infectious period
-   \\(N\\) "number": population size (fixed)

---

Transition I to R:

\begin{equation}
\frac{I}{D}
\end{equation}

\\(I\\) is the number of infectious people, and \\(\frac{1}{D}\\) is the number of people that recover/remove per day (i.e. because the duration is \\(D\\).)

Transition from S to I:

\begin{equation}
I \frac{R\_0}{D} \frac{S}{N}
\end{equation}

So for \\(\frac{R\_0}{D}\\) is the number of people able to infect per day, \\(\frac{S}{N}\\) is the percentage of population that's able to infect, and \\(I\\) are the number of people doing the infecting.

And so therefore---

-   \\(\dv{S}{T} = -\frac{SIR\_{0}}{DN}\\)
-   \\(\dv{I}{T} = \frac{SIR\_{0}}{DN}\\)
-   \\(\dv{I}{T} = \frac{I}{D}\\)


## Evolutionary Game Theory {#evolutionary-game-theory}

Suppose that we have two strategies, \\(A\\) and \\(B\\), and they have some payoff matrix:

|   | A     | B     |
|---|-------|-------|
| A | (a,a) | (b,c) |
| B | (c,b) | (d,d) |

and we have some values:

\begin{equation}
\mqty(x\_{a} \\\x\_{b})
\end{equation}

are the relative abundances (i.e. that \\(xa+xb\\)).

The finesses ("how much are you going to reproduce") of the strategies are determined by---

-   \\(f\_{A}(x\_{A}, x\_{B}) = ax\_{A} + bx\_{B}\\)
-   \\(f\_{B}(x\_{A}, x\_{B}) = cx\_{A} + dx\_{B}\\)

Except for payoff constants \\((a,b,c,d)\\), everything else is a function of time.

The mean fitness, then:

\begin{equation}
q = x\_{A}f\_{A} + x\_{B}f\_{B}
\end{equation}

Let's have the actual, absolute number of individuals:

\begin{equation}
\mqty(N\_{A}\\\ N\_{B})
\end{equation}

So, we can talk about the change is individuals using strategy \\(A\\):

\begin{equation}
\dv t x\_{A} = \dv t \frac{N\_{A}}{N} = X\_{A}(f\_{a})
\end{equation}
