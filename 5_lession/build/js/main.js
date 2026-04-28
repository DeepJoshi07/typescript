"use strict";
// type assertion
// type casting
// both often used interchangebly
Object.defineProperty(exports, "__esModule", { value: true });
let a = "hello";
let b = a; // it could be either string or number
// so less specific
let c = a; //more specific
//using angle brakets (does not work in react[tsx])
let d = "world";
let e = 12;
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// despite function addOrConcat returns string or number we are telling typescript that it is going to return a string so there is no error.
let firstVal = addOrConcat(2, 2, "concat");
// here we know that the function returns a string but we told typescript(assertion) that it returns number this could cause an error so be careful while using type-assertion.
let secondVal = addOrConcat(2, 2, "concat");
// well when it can it checks assertion
// 10 as string
// line above gives error dispite us telling that 10 is a string.
// double casting
10;
// risky
// the DOM
const img1 = document.getElementById("#img");
// here img1 is possibly null or an html-element why?
// because get element by id just select an element with that id it could be any element <p> or <h1>...
// img1.src  // gives error
const img2 = document.querySelector("img");
// img2.src  // also gives error because it can be  null
const img3 = document.getElementById("#img");
img3.src; // works
// const img4:HTMLImageElement = document.getElementById('#img')!; // gives error
// img4.src // error
const img5 = document.querySelector("#img");
//it says it could be an element or null
// it does not say htmlelement it could be any element
// (! not null specifire)
const img6 = document.querySelector("img");
img6.src;
// question
// const year1 = document.getElementById("year");
// const thisYear1 = new Date().getFullYear();
// year1.setAttribute("datetime",thisYear1);
// year1.textContent = thisYear1;
// solution 1
let year2 = document.getElementById("year");
let thisYear2 = String(new Date().getFullYear());
year2.setAttribute("datetime", thisYear2);
year2.textContent = thisYear2;
// solution 2
let year3 = document.getElementById("year");
let thisYear3 = new Date().getFullYear().toString();
if (year3) {
    year3.setAttribute("datetime", thisYear3);
    year3.textContent = thisYear3;
}
// solution 3 (ideal)
let year4 = document.getElementById("year");
let thisYear4 = new Date().getFullYear().toString();
year4.setAttribute("datetime", thisYear4);
year4.textContent = thisYear4;
//# sourceMappingURL=main.js.map