// class
class Coder {
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

// access modifires

class Coder2 {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript',
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge(){
    return `Hello, I am ${this.age} years old`;
  }
}

const Deep = new Coder2("Deep","melody",23);

console.log(Deep.getAge());
// console.log(Deep.age); // age is private
// console.log(Deep.lang); // lang is protected
// above those two lines are valid in javascript

class Webdev extends Coder2 {
    constructor(public computer:string,name:string,music:string,age:number){
        super(name,music,age);
        this.computer = computer;
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Jeet = new Webdev("mac","Jeet","rock",32);

console.log(Jeet.getLang());
// console.log(Jeet.age); // private
// console.log(Jeet.lang); // protected

// -------------------------------------------------
// Interface

interface Musician{
    name:string
    instrument:string
    play(action:string):string
}

class Guitarist implements Musician{
    name:string;
    instrument: string;

    constructor(name:string,instrument:string){
        this.name = name;
        this.instrument = instrument;
    }

    play(action:string){
        return `${this.name} ${action} the ${this.instrument}.`
    }
}

const Page = new Guitarist("jimmy","guitar");
console.log(Page.play("plays"))

// -------------------------------------------------

// static

class Peeps{
    static count: number = 0;

    static getCount():number{
        return Peeps.count;
    }

    public id : number;

    constructor(public name:string){
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

class Bands{
    private dataState:string[]

    constructor(){
        this.dataState = [];
    }

    public get data():string[]{
        return this.dataState;
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value;
            return 
            // setters can not return any value.
        }else{
            throw new Error('param is not an array of string!')
        }
    }
}

const myBands = new Bands()

myBands.data = ["neil young","led zep"];
console.log(myBands.data);

myBands.data = [...myBands.data,'ZZ Top'];
console.log(myBands.data);

// myBands.data = "deep"; // error
// myBands.data = ["van halen",5160]; // error