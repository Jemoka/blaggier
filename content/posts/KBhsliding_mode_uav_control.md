+++
title = "Sliding Mode UAV Control"
author = ["Houjun Liu"]
draft = false
+++

Problem: we have a drone in an elevator; the elevator moves and hence the drone has a non-internal reference frame.

For a dynamical system which has uncertainty term which is not observable to the controller, one could control for position and velocity well with a [Sliding Mode Controller]({{< relref "KBhsliding_mode_controller.md" >}})

Sliding mode observer controls for the disturbance in the non-inertial reference frame.
