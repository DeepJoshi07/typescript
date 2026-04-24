"use strict";
// terminology
// strongly typed languages => typescript
// loosely/weaky typed language => javascript
// static typed => typescript => types are cheked at compile time
// dynamic typed => javascript => types are cheked at run time
// types => string,number,boolean,regex,any,union
Object.defineProperty(exports, "__esModule", { value: true });
// type infuring/implicit
let username = "deep";
// when you hover over username it says string that is type infuring.
// username = 32; will give errors
// explicit
let username2 = "hello world";
let age;
let isLoading;
age = 23;
isLoading = true;
// any
let random;
random = ["deep", "meet"];
random = {
    name: "deep",
    age: 23
};
random = true;
random = "String";
random = 23;
// functions
const sum = (a, b) => {
    return a + b;
};
// union
let anything;
anything = "Deep";
anything = 3456;
//anything = true gives error
let postId;
// regex
let re = /\w+/g;
//# sourceMappingURL=main.js.map