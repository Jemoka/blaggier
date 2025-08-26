+++
title = "bitwise operations"
author = ["Houjun Liu"]
draft = false
+++

&amp; | ~ ^ &lt;&lt; &gt;&gt;


## &amp; {#and}

Bitwise level AND


## | {#b99834}

Bitwise level OR


## ~ {#4c761f}

Unary bitwise negation


## ^ {#7e6a2a}

Unary XOR


## &lt;&lt; {#9c1628}

Shift the number to the left. Fill unused slots with 0.


## &gt;&gt; {#22a1da}

Shift the number to the right

-   for **signed** values, we perform an [arithmetic right shift](#22a1da): fill the unused slots with the most significant bit from before ("fill with 1s")
-   for **unsigned** values, we perform a [logical right shift](#22a1da)
