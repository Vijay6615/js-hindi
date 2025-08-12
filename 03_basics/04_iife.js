// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai (){                      // NAMED IIFE
    console.log(`DB connected`)         // we are using obj so paranthesis is used
})();                                   // semicolon is must to end the code 

( (name) => {                           // UNNAMED IIFE        // arrow function
    console.log(`DB connected ${name}`)
})("vijay");

// while writing TWO IIFE must use SEMICOLON (;) 