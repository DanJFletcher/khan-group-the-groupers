[


/********************************
 * STEP 1 PASS
 * ******************************/
 
{
    code: "<p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
    steps: ["pass"]
},



/********************************
 * STEP 1 FAIL
 * ******************************/
    
{
    code: "<p><span>Groupers</span></p>",
    steps: ["Looks like you added 1 `<span>`, make sure you add another `<span>` to the first sentence of the second paragraph."]
},


{
    code: "<p><span>Groupers are others</span></p> <p><span>Groupers are things</span></p>",
    steps: ["Looks like you added <span>s. Make sure you also add the 'first-sentence' class to each span too."]
},


{
    code: "<p><span id='first-sentence'>Groupers are others</span></p> <p><span>Groupers are things</span></p>",
    steps: ["Remember, we want to use classes for this challenge, not ids. That means you should use the `class` attribute on your HTML tag."]
},

/********************************
 * STEP 2 PASS
 * ******************************/
 
 {
    code: "<style>.first-sentence { font-weight: bold; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
    steps: ["pass", "pass"]
},


{
    code: "<style>.first-sentence { font-weight: 400; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
    steps: ["pass", "pass"]
},


{
    code: "<style>.first-sentence { text-decoration: underline; }</style><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
    steps: ["pass", "pass"]
},
 
 
 
/********************************
 * STEP 2 FAIL
 * ******************************/
   
{
    code: "<style>.first-sentence { font-style:underline; }</style> <p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
    steps: ["pass", "To make text bold, use the `font-weight` property. To make text underline, use the `text-decoration` property. If you forget those properties in the future, you can always search the web."]
}, 
    
/********************************
 * STEP 3 PASS
 * ******************************/
 
{
    code: "<style>.first-sentence { text-decoration: underline; }</style><div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
    steps: ["pass", "pass", "pass"]
},

/********************************
 * STEP 3 FAIL
 * ******************************/
    
    
/********************************
 * STEP 4 PASS
 * ******************************/
 
 {
    code: "<style>.first-sentence { text-decoration: underline; } .info { background: red; }</style><div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
    steps: ["pass", "pass", "pass", "pass"]
},


{
    code: "<style>.first-sentence { text-decoration: underline; } .info { background-color: red; }</style><div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
    steps: ["pass", "pass", "pass", "pass"]
},
 
/********************************
 * STEP 4 FAIL
 * ******************************/
  
]


// [{
//     code: "<p><span>Groupers</span></p>",
//     steps: ["Looks like you added 1 <span>, make sure you add another <span> to the first sentence of the second paragraph."]
// }, {
//     code: "<p><span>Groupers are others</span></p> <p><span>Groupers are things</span></p>",
//     steps: ["Looks like you added <span>s. Make sure you also add the 'first-sentence' class to each span too."]
// },{
//     code: "<p><span id='first-sentence'>Groupers are others</span></p> <p><span>Groupers are things</span></p>",
//     steps: ["Remember, we want to use classes for this challenge, not ids. That means you should use the `class` attribute on your HTML tag, and the '.' before the class name in your CSS selector."]
// },
// {
//     code: "<p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
//     steps: ["Once you've added the <span>s, add a style for the 'first-sentence' class that makes them bold or underline."]
// },
// {
//     code: "<style>.first-sentence { font-style:underline; }</style> <p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
//     steps: ["To make text bold, use the `font-weight` property. To make text underline, use the `text-decoration` property. If you forget those properties in the future, you can always search the web."]
// },
// {
//     code: "<style>.first-sentence { text-decoration:underline; }</style> <p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
//     steps: ["pass"]
// },
// {
//     code: "<style>.first-sentence { font-weight:bold; }</style> <p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p>",
//     steps: ["pass"]
// },
// {
//     code: "<style>.first-sentence { font-weight:bold; }</style> <div><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
//     steps: ["pass", "Looks like you added a <div>. Make sure you also add the 'info' class to the div."]
// },
// {
//     code: "<style>.first-sentence { font-weight:bold; }</style> <div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
//     steps: ["pass", "Once you've added the <div>, add a style for the 'info' class that gives it a background color."]
// },
// {
//     code: "<style>.first-sentence { font-weight:bold;} .info { background: grey; }</style> <div id='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
//     steps: ["pass", "Add a class of 'info', not an id."]
// },
// {
//     code: "<style>.first-sentence { font-weight:bold;} .info { background: grey; }</style> <div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
//     steps: ["pass", "pass"]
// },
// {
//     code: "<style>.first-sentence { font-weight:900;} .info { background: grey; }</style> <div class='info'><p><span class='first-sentence'>Groupers are others</span></p> <p><span class='first-sentence'>Groupers are things</span></p></div>",
//     steps: ["pass", "pass"]
// }
// ]