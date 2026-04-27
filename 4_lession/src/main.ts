// type aliases 
// functions
// literal type
// never type

// -------------------------------------------------
// type aliases

type stringOrNumber = string |number;

const userId:stringOrNumber = 12;

type stringOrNumberArray = (string|number)[];

type Guitarist = {
    name:string,
    active: boolean,
    albums:stringOrNumberArray
    // albums: (string|number)[]
}

// -------------------------------------------------
//Literal types

let username : "Deep";

username = "Deep";
// username = "meet"; //gives errors

let ans : "option1"|"option2"|"option3";

ans = "option2";

// -------------------------------------------------
// functions

const add = (a:number,b:number):number =>{
    return a+b;
}

const logMsg = (message:any) : void =>{
    console.log(message);
}

logMsg("Deep");
logMsg(add(3,4));
// logMsg(add('a',5)); //gives error!

let subtract = function(a:number,b:number):number{
    return a-b;
}

type mathFunction = (a:number,b:number) => number;

let multiply: mathFunction = (a,b) =>{
    return a*b;
}

console.log(multiply(2,2));

interface mathFunction2 {
    (a:number,b:number) :number;
}

let multiply2:mathFunction2 = (a,b)=>{
    return a*b;
}

console.log(multiply2(2,2))

// optional parameter
// it should be the last parameter in the function.

const addAll = (a:number,b:number,c?:number):number =>{
    // type gaurd
    if(c !== undefined){
        return a+b+c;
    }
    return a+b;
}

// default parameter
// default values will not work with interface 
// they must be defined in function using type
const sumAll = (a:number = 10,b:number,c:number = 2) :number =>{
    return a+b+c;
}

console.log(addAll(2,3,2));
console.log(sumAll(2,3));
console.log(sumAll(2,4));

// a is default parameter but to access that we must
// provide a as undefiend. 
console.log(sumAll(undefined,3));

// rest parameters
// it should be the last parameter in the function.

const total = (a:number,...nums:number[]):number =>{
    return a + nums.reduce((prev,curr) => prev+curr); 
}

console.log(total(10,2,3));

const createError = (errMsg:string):never => {
    throw new Error(errMsg);
}

const infinite = () =>{
    let i:number = 1;
    while(true){
        i++;
        if(i > 100) break;
        // without if statement it will return never type.
    } 
}

//custom typeguards
const isNumber= (value:any) =>{
    return typeof value === 'number' ? true: false;
}
const isString= (value:any) =>{
    return typeof value === 'string' ? true: false;
}

// use of the never type
const numberOrString = (value:number|string):string=>{
    if(isNumber(value))return 'number';
    // if(typeof value === 'string')return "string";
    if(isString(value))return 'string';
    // if(typeof value === 'number')return "number";
    return createError("this should never happen!")
}