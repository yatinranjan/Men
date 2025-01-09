const {addToCart,changeQty} = require("./cartModule");

console.log('welcome to day 1');
console.log(10+20);
let l=[10, 20, 30, 40, 50];
l.forEach((value, index) => {
    console.log(value, index); 
})
console.log(addToCart())
console.log(changeQty())