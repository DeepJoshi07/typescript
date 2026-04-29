"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class
class Coder {
    name;
    music;
    age;
    lang;
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// access modifires
class Coder2 {
    name;
    music;
    age;
    lang;
    secondLang;
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age} years old`;
    }
}
const Deep = new Coder2("Deep", "melody", 23);
console.log(Deep.getAge());
// console.log(Deep.age); // age is private
// console.log(Deep.lang); // lang is protected
// above those two lines are valid in javascript
class Webdev extends Coder2 {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Jeet = new Webdev("mac", "Jeet", "rock", 32);
console.log(Jeet.getLang());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitarist("jimmy", "guitar");
console.log(Page.play("plays"));
// -------------------------------------------------
// static
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
const A1 = new Peeps("deep");
const A2 = new Peeps("meet");
const A3 = new Peeps("jay");
// number of times class instanciated
// 3
console.log(Peeps.count); // 3
console.log(A1.id); // 1
console.log(A2.id); // 2
console.log(A3.id); // 3
// ------------------------------------------------
// getters and setters
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
            // setters can not return any value.
        }
        else {
            throw new Error('param is not an array of string!');
        }
    }
}
const myBands = new Bands();
myBands.data = ["neil young", "led zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data);
// myBands.data = "deep"; // error
// myBands.data = ["van halen",5160]; // error
//# sourceMappingURL=main.js.map