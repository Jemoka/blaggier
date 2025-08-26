+++
title = "NUS-ENG401 Gift Utility"
author = ["Houjun Liu"]
draft = false
layout = "blank"
+++

## Welcome! {#welcome}

The device of the station of birth plays a large part in all four of the works we read over the semester. In I, Tituba, the author grants Tituba renewed empowerment through her birth; in Black Shack Alley, Jose’s birth in the Alley forces him to leverage the racially unequal devices of the French regime to gain social advancement; Sophie’s trauma in Breath, Eyes, Memory is propagated by her violent conception—which results in her mother’s forced testing upon her; Joys of Motherhood’s Nnu Ego’s family is loving, yet with conservative values which forces a crippling sense of motherly duty that almost drove her to death. Birth, and challenging the station assigned at birth, is a fundamental value pervasive through the texts.

This game aims to explore some of the dynamics found in all four of the works, while exploring some aspects of Haitian, Martinican, or Nigerian culture.

To play the game, here are what you need to know--

-   The game works like a CTF: through the game, you are hunting for game tokens that look like this: **s_[numbers]_[numbersletters]**
-   You can validate whether or not the token is correct with the tool provided below


## Validate a Token! {#validate-a-token}

To check whether or not a token you received through the game is valid, use the utility below:


<input id="token" placeholder="s_0000_0e"></input> <button id="validate">Validate</button>

<div id="result" style="font-size: 13px">please enter a token</div>

<script>
    function sumDigits(n) {
        let sum = 0;
        while (n) {
            digit = n % 10;
            sum += digit;
            n = (n - digit) / 10;
        }
        return sum;
    }

    $("#validate").click(() => {
        let invalid = "invalid token, sorry!";
        let valid = "valid token, congrats!";
        let value = $("#token").val().split("_");
        if (value[0] != "s") {
            $("#result").html(invalid);
        } else if (!isNaN(value[1])) {
            let sumVal = sumDigits(parseInt(value[1]));
            let mod18_str = (sumVal % 50117).toString(16);
            if (value[2] == mod18_str) $("#result").html(valid);
            else $("#result").html(invalid);
        }
    })
</script>


## The Game {#the-game}

Please go ahead to [this link]({{< relref "KBhnus_eng401_gift_1.md" >}}) to get started.