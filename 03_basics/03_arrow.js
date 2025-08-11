const user = {
    username: 'vijay',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = 'ajay'
// user.welcomeMessage()

console.log(this);          // this gives empty obj 
