[
    /********************************
     * STEP 1 PASS
     * ******************************/
     
    // 10
    {   
        code: "<p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["pass"]
    },
    
    
    
    /********************************
     * STEP 1 FAIL
     * ******************************/
      
    // 20  
    {   // adds 1 span.
        code: "<p><span>Groupers</span></p>",
        steps: ["Looks like you added 1 `<span>`, make sure you add another `<span>` to the first sentence of the second paragraph."]
    },
    
    // 30
    {   // adds 2 spans / no class.
        code: "<p><span>Groupers are others</span></p> <p><span>Groupers are things</span></p>",
        steps: ["Looks like you added <span>s. Make sure you also add the 'first-sentence' class to each span too."]
    },
    
    // 40
    {   // uses id instead of class attribute.
        code: "<p><span id='first-sentence'>Groupers are others</span></p> <p><span>Groupers are things</span></p>",
        steps: ["Remember, you want to use classes for this challenge, not ids. That means you should use the `class` attribute on your HTML tag."]
    },
    
    // 50
    {   // misspells "sentence".
        code: "<p><span class='first-sentance'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["It looks like you misspelled your class name. Make sure it says \"first-sentence\"."]
    },
    
    // 60
    {   // makes up own class name.
        code: "<p><span class='not-first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["Make sure your class name is spelled \"first-sentence\". You shouldn't be making up your own names for this challenge."]
    },
    
    /********************************
     * STEP 2 PASS
     * ******************************/
     
    // 70
    {
        code: "<style>.first-sentence { font-weight: bold; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["pass", "pass"]
    },
    
    // 80
    {
        code: "<style>.first-sentence { font-weight: 400; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["pass", "pass"]
    },
    
    // 90
    {
        code: "<style>.first-sentence { text-decoration: underline; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["pass", "pass"]
    },
     
     
     
    /********************************
     * STEP 2 FAIL
     * ******************************/
       
    // 100
    {   // uses font-style instead of font-weight or text-decoration.
        code: "<style>.first-sentence { font-style:underline; }</style> <p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["pass", "To make text bold, use the `font-weight` property. To make text underline, use the `text-decoration` property. If you forget those properties in the future, you can always search the web."]
    }, 
    
    // 110
    {   // uses id instead of class selector.
        code: "<style>#first-sentence { font-weight: bold; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["pass", "Remember, you want to use classes for this challenge, not ids. That means you should use the `class` selector for your CSS rule, which is the '.' before the class name in your CSS selector."]
    },
    
    // 120
    {   // misspells "sentence".
        code: "<style>.first-sentance { font-weight: bold; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
        steps: ["pass", "It looks like you misspelled your class selector. Make sure it says \".first-sentence\"."]
    },
        
    /********************************
     * STEP 3 PASS
     * ******************************/
     
    // 130
    {
        code: "<style>.first-sentence { text-decoration: underline; }</style><div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
        steps: ["pass", "pass", "pass"]
    },
    
    /********************************
     * STEP 3 FAIL
     * ******************************/
        
    // 140
    {   // uses id instead of class attribute
        code: "<style>.first-sentence { text-decoration: underline; }</style><div id='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
        steps: ["pass", "pass", "Add a class of 'info', not an id."]
    },
    
    // 150
    {   // adds div / no class
        code: "<style>.first-sentence { text-decoration: underline; }</style><div><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
        steps: ["pass", "pass", "Looks like you added a <div>. Make sure you also add the 'info' class to the div."]
    },
    
        
    /********************************
     * STEP 4 PASS
     * ******************************/
     
    // 160
    {
        code: "<style>.first-sentence { text-decoration: underline; } .info { background: red; }</style><div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
        steps: ["pass", "pass", "pass", "pass"]
    },
    
    // 170
    {
        code: "<style>.first-sentence { text-decoration: underline; } .info { background-color: red; }</style><div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
        steps: ["pass", "pass", "pass", "pass"]
    },
     
    /********************************
     * STEP 4 FAIL
     * ******************************/
      
    // 180
    {   // uses id instead of class selector.
        code: "<style>.first-sentence { text-decoration: underline; } #info { background: red; }</style><div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
        steps: ["pass", "pass", "pass", "Remember, we want to use classes for this challenge, not ids. That means you should use the `class` selector for your CSS rule, which is the \".\" before the class name in your CSS selector."]
    },
]