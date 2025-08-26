$("#postulating").hide();

$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

function render(templateString, data) {
  var conditionalMatches,conditionalPattern,copy;
  conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
  //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
  copy = templateString;
  while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
    if(data[conditionalMatches[1]]){
      //valid key, remove conditionals, leave contents.
      copy = copy.replace(conditionalMatches[0],conditionalMatches[2]);
    }else{
      //not valid, remove entire section
      copy = copy.replace(conditionalMatches[0],'');
    }
  }
  templateString = copy;
  //now any conditionals removed we can do simple substitution
  var key, find, re;
  for (key in data) {
    find = '\\$\\{\\s*' + key + '\\s*\\}';
    re = new RegExp(find, 'g');
    templateString = templateString.replace(re, data[key]);
  }
  return templateString;
}

function query() {
    // show loading bar
    $("#postulating").show();
    // clear results
    $("#search-results").html("");

    // load and get
    let text = $("#search-query").val();
    $.ajax({
        cache: false,
        type: "GET",
        url: "https://blagger.jemoka.com/query",
        data: {q: text},
        success: (res) => {
            $("#postulating").hide();

            if (res.result == "ok") {
                var templateDefinition = $('#search-result-template').html();
                res = res.payload;
                var output = render(templateDefinition, {
                                        title:res.title,
                                        score:res.extractive_score.toFixed(3),
                                        link:res.permalink,
                                        before:res.extractive_padding[0],
                                        after:" "+res.extractive_padding[1],
                                        answer:res.extractive_answer,
                                    });
                $('#search-results').html(output);
            } else {
                var templateDefinition = $('#search-error-template').html();
                $('#search-results').html(templateDefinition);
            }
        },
    })
}

$("#search-button").click(query);
$("#search-query").enterKey(query);

