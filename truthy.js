if(true){
    console.log("True is truthy value");
}

//strings

if("Hello"){
    console.log("Non-empty strings is truthy");
}

//numbers

if(20){
    console.log("Number other than 0 is truthy");
}

//arrays

if(["apple", "banana"]){
    console.log("Array is truthy value");
}

//objects

if({name: "Anis"}){
    console.log("Object is truthy value");
}

//functions

if(function() {}) {
    console.log("Function is truthy value");
}
