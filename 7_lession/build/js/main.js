"use strict";
// Index signatures
Object.defineProperty(exports, "__esModule", { value: true });
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = 'Pizza';
const todaysTransactions2 = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Deep: 23,
    // isActive:false //error
    // // gives error because index signature says string:number
};
console.log(todaysTransactions2.Pizza);
console.log(todaysTransactions2["Pizza"]);
let prop2 = 'Pizza';
console.log(todaysTransactions2[prop2]); // gives error
// todaysTransactions2.Pizza = 40; // gives error because of readonly
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions2));
console.log(todaysTransactions2['deep']); // index signature is not that safe
const student = {
    name: "deep",
    GPA: 4.5,
    classes: [100, 200]
};
const student2 = {
    name: "deep",
    GPA: 4.5,
    classes: [100, 200]
};
for (const key in student2) {
    console.log(`${key}: ${student2[key]}`);
}
Object.keys(student2).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student2, "name");
// now we can give union of number and string and add
// both string:number and string:string but
// here key's value gonna be either string or number
// unlike Income1 which is strict
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const key in monthlyIncome) {
    console.log(`${key} : ${monthlyIncome[key]}`);
}
//# sourceMappingURL=main.js.map