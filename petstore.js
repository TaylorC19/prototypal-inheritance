class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  treats() {
    return "YES!"
  }

  speak() {
    return "Bark bark!";
  }
}

class Puppy extends Dog {
  constructor(name, age, breed) {
    super(name, age, breed);
  }

  speak() {
    return "Yip Yip!";
  }
}

const dogOne = new Dog("Bisket", 7, "Mixed");
const puppyOne = new Puppy("Oreo", 0, "Pug");
console.log(dogOne);
console.log(dogOne.treats());
console.log(dogOne.speak());

console.log(puppyOne);
console.log(puppyOne.treats());
console.log(puppyOne.speak()); // Property Shadowing


/* 
  Dog {name: 'Bisket', age: 7, breed: 'Mixed'}
age: 7
breed: "Mixed"
name: "Bisket"
[[Prototype]]: Object
  constructor: class Dog
  speak: ƒ speak()
  [[Prototype]]: Object
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: (...)
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
*/