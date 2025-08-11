let a = 100
if (true) {
    let a = 10
    const b = 20
    console.log('INNER:', a);
    
}
//console.log(a);

//  Nested scope
    // not understand

if (true) {
    const username ='Vijay'
    if (username === 'Vijay') {
        const website = ' shukla'
        console.log(username + website)
    }
    
}