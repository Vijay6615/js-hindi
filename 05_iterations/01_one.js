// // for 

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (index == 5) {
//         console.log("5 is mest number");
        
//     }
//     console.log(element);
    
// }

// for (let index = 1; index <10; index++) {
//         console.log(`Table of ${index }`);
        
//     for (let index1 = 1; index1 <10; index1++) {
//         console.log(index + "*" + index1 + '=' + index*index1);
                
//     }    
// }

// break and continue 

for (let index = 1; index <=20; index++) {
    if (index == 5) {
     console.log(`detected 5`);
        break;
    }
        console.log(`value ${index}`);

}


for (let index = 1; index <=10; index++) {
    if (index == 5) {
        continue
    }
        console.log(`value ${index}`);

}