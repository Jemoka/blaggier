+++
title = "bitmask"
author = ["Houjun Liu"]
draft = false
+++

[bitmask]({{< relref "KBhbitmask.md" >}})ing is a very helpful to create [bit]({{< relref "KBhbinary_number_system.md#bit" >}}) [vector]({{< relref "KBhvector.md" >}})s.

-   | with a 1-mask is useful to turning things on
-   &amp; with a 0-mask is useful to turning things off (bitvector &amp; not(1-mask))
-   | is useful for set unions
-   &amp; is useful for intersections of bits
-   ^ is useful for flipping isolated bits: 0 is bit preserving, 1 is bit negating
-   ~ is useful for flipping all bits
