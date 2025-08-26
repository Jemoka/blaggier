+++
title = "TrustPOMDP"
author = ["Houjun Liu"]
draft = false
+++

Humans either over-rely (drive a Tesla while sleeping) or under rely (interfering) with robot's actions.

1.  human and robot interactions may depend on entire history
    1.  **trust is a proxy for the full interaction history**
2.  the **human's** policy must be modeled by th robot
3.  trust is demonstrated through real-world experimentation


## Formulation {#formulation}

Add two variable

-   Trust: \\(\theta\_{t}\\), the robot's ability to succeed in a task
-   Performance: \\(e\_{t+1}\\), success or failure in attempting a task

**the trust model probabilities for model's correct modeling of humans are low: high variance between participants.**


### Trust Dynamics {#trust-dynamics}

{{< figure src="/ox-hugo/2024-02-20_10-10-19_screenshot.png" >}}

models human's trust in the robot as a linear gaussian.


### Human Model {#human-model}

{{< figure src="/ox-hugo/2024-02-20_10-13-33_screenshot.png" >}}


## Results {#results}

Sadly, the system didn't actually increase in trust score, but the performance was better through lower human intervention.
