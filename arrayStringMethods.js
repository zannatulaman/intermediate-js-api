//slice method
const fruits = ["apple", "banana", "date", "cherry"];
const slicedFruits = fruits.slice(0, 1);
console.log(slicedFruits);

//splice method
//const removeElements = Array.splice(start, deleteCount, item1, item2, ...rest);

const colors = ["green", "blue", "purple", "yellow"];
const removed = colors.splice(0, 3, "purple", "yellow");
console.log(removed);

//split method
const stack = "We are learning javascript";
const splitElements = stack.split(" ");
console.log(splitElements);
