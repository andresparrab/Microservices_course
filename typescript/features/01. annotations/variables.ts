const apples: number = 5; // ": number" is the type annotation

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 4];
let truths: boolean[] = [true, false, true];

//Classes

class Car {
  //Remeber classname start always with capital
}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// the annotation here is ": (i: number) => void" it say it will take a variable i: number and return void
let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20 }';
// JSON.parse returns an any type. to fix this we tell coordinates
// what kind of type we expect from the JSON.parse, in this case
// object whit x and y as numbers
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20}

// 2) when we decalre a variable on one line
// and initializate it later
let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) whe we want a variable to have a type that can't be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // type annotaion to take both types "numberAboveZero: boolean | number"
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
