
    // Primitive  (they are call by value) not real they are copy and changes are in the copy one 

    // 7 types : string, nimber, boolean, null, undefined, symbols, Bigint

   //  const id = Symbol('123')
   //  const studentId = Symbol('123')
   //  console.log(id === studentId);



    // Reference (non Primitive) direct gets a reference

     // Array, Objects, Functions

   //   const heros = ["vijay", "Ajay", "Abhay"];
   //   let myObj = {
   //      name: "Gaurav",
   //      age: 22,
   //   }

   //   const myFunction = Function(){
   //      console.log("Hello World");
   //   }


     //+++++++++++++++++  MEMORY +++++++++++++++++++++++++++++++++

     // 2 type of memory ( stack , Heap)

   // stack (Primitive) => copy
   // Heap (non-Primitive) => original reference

   //stack example
   let myYoutubename = "vijay gaming"
   let anotherName = myYoutubename
   anotherName = "vijay blogs"
   console.log(anotherName)
      console.log(myYoutubename)
   
   //Heap example
   let userOne = {
      name: "vijay",
      email: "user@google.com",
      upi: "user@ybl"
   };
   let userTwo = userOne
   userTwo.email = "xyzgoogle@.com"

   console.log(userTwo.email)
   console.log(userOne.name)

    //  name:"gaurav"
     //email:"gaurav@gmail.com"
   