const testObject = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
    // __proto__: Object.prototype
  },
};

// testObject has properties a and b
// testObject.[[Prototype]] has properties b and c.
// testObject.[[Prototype]].[[Prototype]] is Object.prototype 

// Prototypal Chain: { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(testObject.a); // 1
// Is there an 'a' own property on testObject? Yes, and its value is 1.

console.log(testObject.b); // 2
// Is there a 'b' own property on testObject? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited. This is called Property Shadowing

console.log(testObject.c); // 4
// Is there a 'c' own property on testObject? No, check its prototype.
// Is there a 'c' own property on testObject.[[Prototype]]? Yes, its value is 4.

console.log(testObject.d); // undefined
// Is there a 'd' own property on testObject? No, check its prototype.
// Is there a 'd' own property on testObject.[[Prototype]]? No, check its prototype.
// testObject.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.
// testObject.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.