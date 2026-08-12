// //This 

const user={
    username:"Alex",
    price:999,

    WelcomeMessage : function(){
        console.log(`${this.username}, welcome to website!`);
    }
}

user.WelcomeMessage()
user.username = "Sam";
user.WelcomeMessage()


// //Arrow Function

const addTwo=(n1,n2)=>{ return n1+n2}
console.log(addTwo(3,4));

// Arrow Function with Implicit Return

const addTwo = (n1, n2) => (n1 + n2);

console.log(addTwo(12, 13));

//IIFE : Immediately Invoked function expression

/*  
    functions that runs immediately after it is created 
    prevents from the pollution of global scope
    more then one IIFE is used then alway use ;

*/

//Normal function
function chai(){
    console.log(`DB Connected`);
}
chai()

// //IIFE
(function chai(){
    console.log(`DB Connected`);
    
})()

//General Syntax of IIFE
(function (){
    //code
})();

//Using Arrow function
(()=>{console.log("DB Connected")})()

//with Parameters
((name)=>{
    console.log(`DB Connected with ${name}`);
})("Alex")

/*
    Named IIFE :IIFE functions having functions name
    Simple IIFE :IIFE functions without name
*/
