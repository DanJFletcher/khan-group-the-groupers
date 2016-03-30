staticTest($._("Add spans"), function() {
    var result = null;
    var descrip = $._("This webpage describes groupers, a type of large ocean fish. In the first step, your job is to to make the first sentences of each paragraph stand out. Add `<*span*>` tags around each first sentence, give them a class name of 'first-sentence' and then style that class to make the text either bold or underlined.");
    var displayP = "";
    
    var added1SpanP = {"p span:not(:empty)": 1};
    var added2SpansP = {"p span:not(:empty)": 2};
    var addedSpanClassP = {"p span.first-sentence:not(:empty)": 2};
    
    var styledClassP1 = ".first-sentence { font-weight: $bold}";
    var styledClassP2 = ".first-sentence { text-decoration: underline}";
    var usedIdP = "#first-sentence {}";
    var putIdP = "span#first-sentence";
    var fontStyleP  = ".first-sentence { font-style: _; }";
    var fontFamilyP  = ".first-sentence { font-family: _; }";
    
    var isBold = function($bold) {
        return $bold == "bold" || parseInt($bold, 10) > 400;
    };
    
    result = htmlMatch(added1SpanP);
    if (passes(result)) {
        if (!htmlMatches(added2SpansP)) {
            result = fail($._("Looks like you added 1 <span>, make sure you add another <span> to the first sentence of the second paragraph."));
        } else if (cssMatches(usedIdP) || htmlMatches(putIdP)) {
            result = fail($._("Remember, we want to use classes for this challenge, not ids. That means you should use the `class` attribute on your HTML tag, and the '.' before the class name in your CSS selector."));
        } else if (!htmlMatches(addedSpanClassP)) {
            result = fail($._("Looks like you added <span>s. Make sure you also add the 'first-sentence' class to each span too."));
        } else if (cssMatches(fontStyleP) || cssMatches(fontFamilyP)) {
            result = fail($._("To make text bold, use the `font-weight` property. To make text underline, use the `text-decoration` property. If you forget those properties in the future, you can always search the web."));
        } else if (!cssMatches(styledClassP1, isBold) && !cssMatches(styledClassP2)) {
            result = fail($._("Once you've added the <span>s, add a style for the 'first-sentence' class that makes them bold or underline."));
        } 
    } 
    assertMatch(result, descrip, displayP);
});

staticTest($._("Add a div"), function() {
    var result = null;
    var descrip = $._("Now wrap all of the paragraphs in a single `<*div*>`, give it a class of 'info' and style it to have a background color.");
    var displayP = "";
    
    var addedDivP = {"div p:not(:empty)": 1};
    var addedDivClassP = {"div.info p:not(:empty)": 1};
    var addedDivIdP    = "div#info";
    
    var styledClassP1 = ".info { background: $bc}";
    var styledClassP2 = ".info { background-color: $bc}";
    
    result = htmlMatch(addedDivP);
    if (passes(result)) {
        if (htmlMatches(addedDivIdP)) {
            result = fail($._("Add a class of 'info', not an id."));
        } else if (!htmlMatches(addedDivClassP)) {
            result = fail($._("Looks like you added a <div>. Make sure you also add the 'info' class to the div."));
        } else if (!cssMatches(styledClassP1) && !cssMatches(styledClassP2)) {
            result = fail($._("Once you've added the <div>, add a style for the 'info' class that gives it a background color."));
        }
    }
    assertMatch(result, descrip, displayP);
});


