function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("M");    
}
sayMyName()

function addTwoNumbers(a,b){
    return a+b
}
console.log(addTwoNumbers(10,12));

function loginMessage(username){
    return `${username} just logged in!`
}
console.log(loginMessage("fahim"))


function loginMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in!`
}
console.log(loginMessage())


function loginMessage(username="sir"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in!`
}
console.log(loginMessage())

function calculateCartPrice(...num){
    let sum=0;
    for(i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum
}
console.log(calculateCartPrice(10,20,30,40,50))

function calculateCartPrice(value1,value2, ...num){ //value1 will store 0th index price and value 2 will store 1st index price and calculation will be between rest price
    let sum=0;
    for(i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum
}
console.log(calculateCartPrice(10,20,30,40,50))

const user={
    username:"alex",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject({
    username:"Alex",
    price:199
});


const arr=[200,300,400]

function returnSecondValue(getarray){
    return getarray[1];
}
console.log(returnSecondValue(arr))

function returnSecondValue(getarray){
    return getarray[1];
}
console.log(returnSecondValue(arr=[10,20,30,40]))