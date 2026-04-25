"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Arrays
let fruits = ["mango", "apple", "cherry"];
// by default this has given string type
fruits.push("orange");
// fruits.push(12) gives error
fruits[0] = "kivi";
// fruits[0] = 122 gives error
let numString = ["deep", 2222];
numString.push(333);
numString.push("meet");
numString[0] = 2323; // first index has string but we gave number
numString[1] = "jay"; // second index has number but we gave string
let mixed = ["deep", true, 111];
mixed.push(23);
mixed.push(false);
mixed.push("meet");
mixed[0] = false;
mixed = ["deep", "meet", "jay"];
// fruits = mixed gives error
mixed = fruits;
// how to declare
let fruits2 = ["mango", "apple", "cherry"];
let mixed2 = ["deep", 12, true];
// ---------------------------------------------------
// if you want restrict the arr length and 
// want specific value at specific index you need
// Tuple
let myTuple = ["Dave", 123, true];
myTuple[0] = "deep";
// myTuple[0] = 123; gives error
// myTuple.push("deep"); does not give error but it won't work
// this tuple can only have 3 values.
// first String
// second number
// third boolean
mixed = ["deep", 123, true];
mixed = myTuple;
// myTuple = mixed; //gives error
//---------------------------------------------------
// Objects
let obj = {};
obj = []; // arrays is also object in javascript
console.log(typeof obj); // gives object as an answer
obj = {};
const exampleObj = {
    prop1: "deep",
    prop2: true,
};
exampleObj.prop1 = "meet";
let gt1 = {
    name: "eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
    //give all the property:valus defined inside of
    //type Guitarist otherwise it will give error
};
let gt2 = {
    name: "eddie",
    // active:false,
    albums: [1984, 5150, "OU812"],
    isFamouse: false
    //give all the property:valus defined inside of
    //type Guitarist otherwise it will give error
};
gt1 = gt2; // works despite not having isFamous in defination
const greet = (gt) => {
    // return `Hello ${gt.active.yoUpperCase()}`
    // can not use methos on optional values
    return `Hello ${gt.active}`;
    // if actives is not set it gives undefined
};
const greet2 = (gt) => {
    //edditional check
    if (gt.active) {
        return `Hello ${gt.active}`;
        // methos can be used
    }
    return "hello world";
};
// ----------------------------------------------------
// Enums
//unlike most typescript features, Enums are not a
// type-level addition to Javascript but something added
// to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
})(Grade || (Grade = {}));
console.log(Grade.U); // will give 0
//you can set the starting index
var Grade2;
(function (Grade2) {
    Grade2[Grade2["U"] = 1] = "U";
    Grade2[Grade2["A"] = 2] = "A";
    Grade2[Grade2["B"] = 3] = "B";
    Grade2[Grade2["C"] = 4] = "C";
    Grade2[Grade2["D"] = 5] = "D";
})(Grade2 || (Grade2 = {}));
console.log(Grade2.U); //gives 1.
//# sourceMappingURL=main.js.map