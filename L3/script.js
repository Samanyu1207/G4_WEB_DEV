// let cart={
//     "shoes":300,
//     "earrings":400,
//     "dress":500
// }

// function ordercart(cart){
//     console.log("total number of products",Object.keys(cart).length);
//     for(let key in cart){
//         total+=cart[key];
//     }
//     return total;
//     setTimeout(cart,3000);
// }
// function ordersummary(){
//     console.log("total numnber of products",Object.keys(cart).length,"total amount to be paid,total");
//     console.log("order id",Math.random(100000,99999));
// }
// function paymentgateway(){
//     console.log(ordersummary());
//     console.log("Payment successful");
// }

//PROTOTYPE 

Array.prototype.myFilter = function(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};
// Example usage of myFilter
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.myFilter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]

const oddNumbers = numbers.myFilter(function(num) {
    return num % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5]