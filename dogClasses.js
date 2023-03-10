class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  speak() {
    console.log("Bark bark!")
  }
}

const dogOne = new Dog("Bisket", 7, "Mixed");
console.log(dogOne)
console.log(dogOne.speak());
console.log(dogOne.prototype)

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