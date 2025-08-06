
    // Primitive  (they are call by value) not real they are copy and changes are in the copy one 

    // 7 types : string, nimber, boolean, null, undefined, symbols, Bigint

    const id = Symbol('123')
    const studentId = Symbol('123')
    console.log(id === studentId);



    // Reference (non Primitive) direct gets a reference

     // Array, Objects, Functions

     const heros = ["vijay", "Ajay", "Abhay"];
     let myObj = {
        name: "Gaurav",
        age: 22,
     }

     const myFunction = Function(){
        console.log("Hello World");
     }