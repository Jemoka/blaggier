+++
title = "regular expression (string processing)"
author = ["Houjun Liu"]
draft = false
+++

did you know you can do matching inline too matching equivalent statements: `test (\w+) \1`; non-capture group `(?:test)`


## lookaheads {#lookaheads}

-   (?=pattern) true if pattern matches, but doesn't touch the character pointer
-   (?!pattern) true if pattern doesn't match; also doesn't advance pointer
-   (?:pattern) will advance character pointer but will not create a capture group
-   ^beginning of line
-   end of line$
