// const arr=[2,4,6,8,10]
// for(const i of arr){
//     // console.log(i);
// }

// const greetings ="Hello Sir, How may i help you ?"
// for(const greet of greetings){
//     // console.log(greet);
// }

// const Arr=[5,10,15,20,25]
// for (const i of Arr) {
//     // console.log(i);
// }

//map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('PAK',"Pakistan")

// console.log(map);
for (const [i,j] of map) {
    console.log(i,' : - ',j);
    
}
