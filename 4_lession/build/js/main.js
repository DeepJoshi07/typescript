"use strict";
// type aliases 
// functions
// literal type
// never type
Object.defineProperty(exports, "__esModule", { value: true });
const userId = 12;
// -------------------------------------------------
//Literal types
let username;
username = "Deep";
// username = "meet"; //gives errors
let ans;
ans = "option2";
// -------------------------------------------------
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Deep");
logMsg(add(3, 4));
// logMsg(add('a',5)); //gives error!
let subtract = function (a, b) {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 2));
let multiply2 = (a, b) => {
    return a * b;
};
console.log(multiply2(2, 2));
// optional parameter
// it should be the last parameter in the function.
const addAll = (a, b, c) => {
    // type gaurd
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
// default parameter
// default values will not work with interface 
// they must be defined in function using type
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(2, 3, 2));
console.log(sumAll(2, 3));
console.log(sumAll(2, 4));
// a is default parameter but to access that we must
// provide a as undefiend. 
console.log(sumAll(undefined, 3));
// rest parameters
// it should be the last parameter in the function.
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
        // without if statement it will return never type.
    }
};
//custom typeguards
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const isString = (value) => {
    return typeof value === 'string' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (isNumber(value))
        return 'number';
    // if(typeof value === 'string')return "string";
    if (isString(value))
        return 'string';
    // if(typeof value === 'number')return "number";
    return createError("this should never happen!");
};
//# sourceMappingURL=main.js.map