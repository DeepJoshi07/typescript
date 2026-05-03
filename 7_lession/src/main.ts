// Index signatures

interface TransactionObj {
    Pizza:number,
    Books:number,
    Job:number
}

const todaysTransactions : TransactionObj = {
    Pizza:-10,
    Books:-5,
    Job:50
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop:string = 'Pizza';
// console.log(todaysTransactions[prop]) // gives error

interface TransactionObj2 {
    // [index:string]:number,
    readonly [index:string]:number,
    Pizza:number,
    Job:number,
    Books:number
    // we can add new key:values but these three are must
    // without then it throws an error
}

const todaysTransactions2 : TransactionObj2 = {
    Pizza:-10,
    Books:-5,
    Job:50,
    Deep:23,
    // isActive:false //error
    // // gives error because index signature says string:number
}

console.log(todaysTransactions2.Pizza);
console.log(todaysTransactions2["Pizza"]);

let prop2:string = 'Pizza';
console.log(todaysTransactions2[prop2]) // gives error

// todaysTransactions2.Pizza = 40; // gives error because of readonly

const todaysNet = (transactions:TransactionObj2):number => {
    let total = 0;
    for(const transaction in transactions){
        total += transactions[transaction]!;
    }
    return total;
}

console.log(todaysNet(todaysTransactions2))

console.log(todaysTransactions2['deep']); // index signature is not that safe
// deep key does not exists it will give undefined

// ------------------------------------------------------

interface Student {
    [key:string]: string|number|number[]|undefined
    // we added undefined because classes is optional
    name:string,
    GPA:number,
    classes?:number[],
}

const student : Student = {
    name:"deep",
    GPA:4.5,
    classes:[100,200]
}

// console.log(student.isActive) // undefined

// how to iterate object that does not have index signature.

interface Student2 {
    // [key:string]: string|number|number[]|undefined
    // we added undefined because classes is optional
    name:string,
    GPA:number,
    classes?:number[],
}

const student2 : Student2 = {
    name:"deep",
    GPA:4.5,
    classes:[100,200]
}

for(const key in student2){
    console.log(`${key}: ${student2[key as keyof Student2]}`)
}

Object.keys(student2).map(key => {
    console.log(student[key as keyof typeof student2])
})

const logStudentKey = (student:Student2,key:keyof Student2):void =>{
    console.log(`Student ${key} : ${student[key]}`)
}

logStudentKey(student2,"name");

//-------------------------------------------------------------------
// alternatives

interface Incomes1 {
    [key:string]: number;
    // can not add string lieterals

    // Pizza : "dominoz"
}

type Streams = 'salary' | 'bonus' | 'sidehustle'; // can add lieterals

type Incomes2 = Record<Streams,number|string>
// now we can give union of number and string and add
// both string:number and string:string but
// here key's value gonna be either string or number
// unlike Income1 which is strict

const monthlyIncome : Incomes2 = {
    salary:500,
    bonus:100,
    sidehustle:250
}

for (const key in monthlyIncome){
    console.log(`${key} : ${monthlyIncome[key as keyof Incomes2]}`);
}