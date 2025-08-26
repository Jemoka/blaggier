+++
title = "simulated annealing"
author = ["Houjun Liu"]
draft = false
+++

Uses a randomness **temperature**, which starts high for exploration and slowly decreases by one of the [Simulated Annealing Schedules](#simulated-annealing-schedule). Whenever you are about to take a step, each step must be "accepted" with probability given by the [Metropolis Criteria](#metropolis-criteria).

Intuition: "sometimes, you try something that's bad, to jump out of local optima."


## Metropolis Criteria {#metropolis-criteria}

\begin{align}
P(\text{accept}) = \begin{cases}
1, \text{if}\ \Delta y \leq 0\\\\
\min \qty(e^{-\frac{\Delta y}{t}}, 1), \text{otherwise}
\end{cases}
\end{align}

where \\(t\\) is the temperature; meaning----even if the next point \\(\Delta y > 0\\)  (meaning its bad, because it increases loss), we sometimes take that ponit still.


## Simulated Annealing Schedule {#simulated-annealing-schedule}

we need to decrease \\(t\\) by a schedule over time


### Log {#log}

\begin{equation}
t = t \frac{\ln (2)}{\ln (k+1)}
\end{equation}


### Exponential {#exponential}

best one

\begin{equation}
t = \gamma t
\end{equation}


### Fast {#fast}

\begin{equation}
t = \frac{t}{k}
\end{equation}
