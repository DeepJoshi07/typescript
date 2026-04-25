// Arrays
let fruits = ["mango", "apple", "cherry"];
// by default this has given string type

fruits.push("orange");
// fruits.push(12) gives error
fruits[0] = "kivi";
// fruits[0] = 122 gives error

let numString = ["deep",2222];

numString.push(333);
numString.push("meet");

numString[0] = 2323; // first index has string but we gave number
numString[1] = "jay" // second index has number but we gave string

let mixed = ["deep",true,111];

mixed.push(23);
mixed.push(false);
mixed.push("meet");

mixed[0] = false;

mixed = ["deep","meet","jay"];

// fruits = mixed gives error
mixed = fruits;

// how to declare
let fruits2:string[] = ["mango","apple","cherry"];
let mixed2:(string|number|boolean)[] = ["deep",12,true];

// ---------------------------------------------------

// if you want restrict the arr length and 
// want specific value at specific index you need

// Tuple

let myTuple:[string,number,boolean] = ["Dave",123,true];

myTuple[0] = "deep";
// myTuple[0] = 123; gives error

// myTuple.push("deep"); does not give error but it won't work

// this tuple can only have 3 values.
// first String
// second number
// third boolean

mixed = ["deep",123,true];

mixed = myTuple;
// myTuple = mixed; //gives error

//---------------------------------------------------
// Objects

let obj:object = {}

obj = [] // arrays is also object in javascript

console.log(typeof obj); // gives object as an answer

obj = {}

const exampleObj = {
    prop1:"deep",
    prop2:true,
}

exampleObj.prop1 = "meet";

// exampleObj.prop1 = true; 
// gives error because it initially supposed to have
// a String value


// Object annotation
type Guitarist = {
    name:string,
    active?:boolean,
    albums:(string|number)[]
}

let gt1 : Guitarist = {
    name:"eddie",
    active:false,
    albums:[1984,5150,"OU812"]
    //give all the property:valus defined inside of
    //type Guitarist otherwise it will give error
}

let gt2 = {
    name:"eddie",
    // active:false,
    albums:[1984,5150,"OU812"],
    isFamouse:false
    //give all the property:valus defined inside of
    //type Guitarist otherwise it will give error
}

gt1 = gt2; // works despite not having isFamous in defination

const greet = (gt:Guitarist) => {
    // return `Hello ${gt.active.yoUpperCase()}`
    // can not use methos on optional values
    return `Hello ${gt.active}`
    // if actives is not set it gives undefined
} 

const  greet2 = (gt:Guitarist) => {
    //edditional check
    if(gt.active){
        return `Hello ${gt.active}`
        // methos can be used
    }
    return "hello world"
}

// ----------------------------------------------------
// Enums
//unlike most typescript features, Enums are not a
// type-level addition to Javascript but something added
// to the language and runtime

enum Grade{
    U,
    A,
    B,
    C,
    D,
}

console.log(Grade.U); // will give 0

//you can set the starting index
enum Grade2{
    U = 1,
    A,
    B,
    C,
    D,
}

console.log(Grade2.U); //gives 1.