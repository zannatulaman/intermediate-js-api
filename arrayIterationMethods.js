//filter method
const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = numbers.filter((num, index, array) => {
    console.log('Num', num);
    console.log('Index', index);
    console.log('Array', array);
    //num < 3

    return num % 2 === 0;
})
//console.log('Newnumbers', newNumbers);

//map method
const numbers2 = [1, 2, 3, 4, 5, 6]
const number2Multiply = numbers2.map((num, index, array) => num * num);
console.log(number2Multiply);

//find method
const fruits = ["apple", "banana", "date", "cherry"];
const arrayFruits = fruits.find((num, index, array) => (num.length === 4));
console.log(arrayFruits);

