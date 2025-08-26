+++
title = "SU-CS238V JAN072025"
author = ["Houjun Liu"]
draft = false
+++

## Alignment Problem {#alignment-problem}

**autonomous systems will do exactly what we tell them to do**... so we need to give them good instructions. This is the [Alignment Problem](#alignment-problem)

1.  **imperfect objective**---underspecified objective
2.  **imperfect model**---understanding of the world is underspecified
3.  **imperfect optimization**---the model just didn't solve the problem correctly


## Validation Framework {#validation-framework}

High level structure:

```python
validation_algorithm(system, spec)
```


### system {#system}

-   environment: state of the world, \\(T(s'|s,a)\\)
-   sensor, \\(O(o|s)\\)
-   agent, policy \\(\pi\qty(a | o)\\)


#### example: inverted pendulum {#example-inverted-pendulum}

-   **state**: \\(\qty (\theta, \omega)\\) of the pendulum
-   **observation**: \\(O(o|s) = \mathcal{N}\qty (o|s,\Sigma)\\), Gaussian noise
-   **policy**: consider the following [proportional controller]({{< relref "KBhproportional_controller.md" >}}) policy

\begin{equation}
\pi \qty(a | o) = \begin{cases}
1, \text{if} a = -15 \tau  - 8 \omega \\\\
0
\end{cases}
\end{equation}

-   **environment**: a \\(T(s'|s,a)\\) given by physics


### specification \\(\psi\\) {#specification-psi}

Rules of the system---"do not let the pendulum tip over". Specifications are usually given in formal specification language such as [Linear Temporal Logic]({{< relref "KBhlinear_temporal_logic.md" >}}) or [Signal Temporal Logic]({{< relref "KBhsignal_temporal_logic.md" >}}).


### validation algorithm {#validation-algorithm}

With input a system + specification, a [Validation Algorithm](#validation-algorithm) provides an output in the form of one of...


#### Failure Analysis {#failure-analysis}

-   Falsification: search for failures of a particular system
-   Failure distribution: identify what are the distirbutions of failures
-   Failure probability estimation: estimate the probability of failures


#### Formal Methods {#formal-methods}

"reachability"

-   Linear System reachability
-   Nonlinear system reachability
-   Discrete system reachability


#### Other stuff {#other-stuff}

-   Explanation
-   Runtime Assurances
