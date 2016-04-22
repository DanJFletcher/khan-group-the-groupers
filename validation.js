
var misspelledSentenceCSS = [".first-sentance", ".first-snetence", ".first-setence"];
var misspelledSentenceHTML = ["first-sentance", "first-snetence", "first-snetence"];

// --------------------------------------
// step 1
staticTest($._("Add spans"), function() {
    var result = null;
    var descrip = $._("This webpage describes groupers, a type of large ocean fish. In the first step, your job is to to make the first sentences of each paragraph stand out. Start by adding `<span>` tags around each first sentence. Then give both of your `<span>` tags a class called \"first-sentence\".");
    var displayP = "<p><span class=\"first-sentence\">...mouth.</span>...</p>";
    
    var added1SpanP = {"p span:not(:empty)": 1};
    var added2SpansP = {"p span:not(:empty)": 2};
    var addedSpanClassP = {"p span.first-sentence:not(:empty)": 2};
    var addedClassAttrP = "span[class]";
    
    var usedIdP = "span#first-sentence";
    var misspelledSentenceHtmlP = [
            "p span.first-sentance", 
            "p span.first-snetence", 
            "p span.first-snetence"
        ];
        
    var misspelledSentence = function() {
        // check for misspellings of "sentence"
        for (var i = 0; i < misspelledSentenceHtmlP.length; i++) {
            if (htmlMatches(misspelledSentenceHtmlP[i])) {
                return true;
            } 
        }
        return false;
    };
    
    result = htmlMatch(added1SpanP);
    if (passes(result)) {
        if (!htmlMatches(added2SpansP)) {
            result = fail($._("Looks like you added 1 `<span>`, make sure you add another `<span>` to the first sentence of the second paragraph."));
        } else if (htmlMatches(usedIdP)) {
            result = fail($._("Remember, we want to use classes for this challenge, not ids. That means you should use the `class` attribute on your HTML tag."));
        } else if (misspelledSentence()) {
            result = fail($._("It looks like you misspelled your class name. Make sure it says \"first-sentence\"."));
        } else if (!htmlMatches(addedClassAttrP) && htmlMatches(added2SpansP)) {
            result = fail($._("Looks like you added <span>s. Make sure you also add the 'first-sentence' class to each span too."));
        } else if (htmlMatches(addedClassAttrP)) {
             if (!htmlMatches(addedSpanClassP)) {
                result = fail($._("Make sure your class name is spelled, \"first-sentence\". You shouldn't be making up your own names for this challenge."));
            }
        }
        
        // presumably no longer needed since the instructions in step 2 replace the funcion of this message.
        // else if (!cssMatches(styledClassP1, isBold) && !cssMatches(styledClassP2)) {
        //     result = fail($._("Once you've added the <span>s, add a style for the 'first-sentence' class that makes them bold or underline."));
        // } 
    }
    assertMatch(result, descrip, displayP);
});

// --------------------------------------
// step 2
staticTest($._("Style Spans"), function() {
    var result = null;
    var descrip = $._("Good! Now, using a class selector, write a CSS rule to style your \"first-sentence\" class. Make the sentence either bold, or underlined.");
    var displayP = "<style>\n  .first-sentence { \n    _: _;\n  }\n</style>";
    
    var styledClassP1 = ".first-sentence { font-weight: $bold}";
    var styledClassP2 = ".first-sentence { text-decoration: underline}";
    var styledClassP3 = "$selector {}";
    
    var usedIdP = "#first-sentence {}";
    
    var fontStyleP  = ".first-sentence { font-style: _; }";
    var fontFamilyP  = ".first-sentence { font-family: _; }";
    
    var misspelledSentenceCssP = [
        ".first-sentance", 
        ".first-snetence", 
        ".first-snetence"
    ];
    
    // returns true if "sentence" is misspelled
    var misspelledSentence = function($selector) {
        return misspelledSentenceCssP.indexOf($selector) !== -1;
    };

    var isBold = function($bold) {
        return $bold == "bold" || parseInt($bold, 10) >= 400;
    };
    
    result = anyPass(cssMatch(styledClassP1, isBold), cssMatch(styledClassP2));
    
    
    if (!passes(result)) {
        if (cssMatches(usedIdP)) {
            result = fail($._("Remember, we want to use classes for this challenge, not ids. That means you should use the `class` selector for your CSS rule, which is the '.' before the class name in your CSS selector."));
        } else if (cssMatches(fontStyleP) || cssMatches(fontFamilyP)) {
            result = fail($._("To make text bold, use the `font-weight` property. To make text underline, use the `text-decoration` property. If you forget those properties in the future, you can always search the web."));
        } else if (cssMatches(styledClassP3, misspelledSentence)) {
            result = fail($._("It looks like you misspelled your class selector. Make sure it says \".first-sentence\"."));
        }
    }

    
    assertMatch(result, descrip, displayP);
});

// --------------------------------------
// step 3
staticTest($._("Add a div"), function() {
    var result = null;
    var descrip = $._("Great! Wrap the paragraphs in a single `<div>`, and then give the `div` a class of \"info\".");
    var displayP = "";
    
    var addedDivP = {"div p:not(:empty)": 1};
    var addedDivClassP = {"div.info p:not(:empty)": 1};
    var addedDivIdP    = "div#info";
    
    
    result = htmlMatch(addedDivP);
    if (passes(result)) {
        if (htmlMatches(addedDivIdP)) {
            result = fail($._("Add a class of 'info', not an id."));
        } else if (!htmlMatches(addedDivClassP)) {
            result = fail($._("Looks like you added a <div>. Make sure you also add the 'info' class to the div."));
        } 
        
        // no longer needed since this is described in step 4.
        // else if (!cssMatches(styledClassP1) && !cssMatches(styledClassP2)) {
        //     result = fail($._("Once you've added the <div>, add a style for the 'info' class that gives it a background color."));
        // }
    }
    assertMatch(result, descrip, displayP);
});

// --------------------------------------
// step 4
staticTest($._("Style the Div"), function() {
    var result = null;
    var descrip = $._("Last step! Using a class selector, write a CSS rule to style your 'info' class. Give it a cool looking background color.");
    var displayP = "";
    
    var styledClassP1 = ".info { background: $bc}";
    var styledClassP2 = ".info { background-color: $bc}";
    
    var usedIdP = "#info {}";
    
    result = cssMatch(styledClassP1) || cssMatch(styledClassP2);
    
    if (!passes(result)) {
        if (cssMatches(usedIdP)) {
            result = fail($._("Remember, we want to use classes for this challenge, not ids. That means you should use the `class` selector for your CSS rule, which is the \".\" before the class name in your CSS selector."));
        }
    }
    
    assertMatch(result, descrip, displayP);
});



