/* java Script
  == is a comparison operator, transforms to same type before compare
  === is a strict comparison operator, returns false if not a similar type
  === on  NaN (Not a Number) is equal
  undefined is the result when something has had no value assigned to it.
  null has a value - nothing
  closure ?

 */

var dog;
testDog(dog);

dog = null;
testDog(dog);

dog = undefined;
testDog(dog);

dog = 'Hello';
testDog(dog);

dog = 1;
testDog(dog);

dog = '';
testDog(dog);

function testDog(dog) {
  if (dog) console.log('dog is true');
  else console.log('dog is false');

  if (dog == true) console.log('dog is true');
  else console.log('dog is false');

  if (dog == false) console.log('dog is true');
  else console.log('dog is false');

  console.log(isNaN(dog));

  if (dog == null) console.log('null true');
  else console.log('null false');

  if (dog == undefined) console.log('undefined true');
  else console.log('undefined false');

  if (dog === null) console.log('null true');
  else console.log('null false');

  if (dog === undefined) console.log('undefined true');
  else console.log('undefined false');
}

/* Section 1 */

// Package or tool to compile your code down
// Module loader

console.log('Something!');

/* Section 2 */
// var   - global scope
// let   - block scope
// const - non-mutable (pointer)

let age = 30;
if (true) {
  let age = 27;
  console.log(age);
}
console.log(age);

//---------------
function doSmth() {
  age1 = 27;
}
let age1;
doSmth();
console.log(age1);

//---------------
var fn = () => {
  console.log('Hello');
};
//---------------
var fn2 = () => console.log('Hello');

//---------------
var fn3 = (a, b) => {
  return a + b;
};
console.log(fn3(3, 8));

//---------------
var fn4 = (a, b) => a + b;
console.log(fn4(3, 8));

//---------------
var fn5 = (a) => a + 5;
console.log(fn5(3));

//---------------
/*
var button = document.querySelector('button');

var fn6 = () => console.log(this)        // <-- this is window object

function fn7() {
  console.log(this);                     // <-- this is what called the function, element button
}

button.addEventListener('click', fn);
*/

//---------------  Object Literal
let name = 'Anna';
let age3 = 25;

let obj = {
  name,
  age3,
  //[agefield]: 28,
  greet() {
    console.log(this.name + ', ' + this.age);
  },
  'greet me'() {
    console.log(this.name + ', ' + this.age);
  },
};
console.log(obj);

obj.greet();

obj['greet me']();

//console.log(obj[agefield]);

//---------------  Rest Operator
let numbers = [1, 2, 3, 4, 5];

function sumUp(toAdd) {
  result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}
console.log(sumUp(numbers));

//---------------  Spread Operator
function sumUpSpread(...toAdd) {
  result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}
console.log(sumUpSpread(100, 10, 20));
console.log(sumUpSpread(100, 10, '20'));

//---------------
let numbers2 = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers2)); // Can't to this with an array, with spread it loops through

//---------------  for-of loop
let numbers3 = [1, 2, 3, 4, 5];
for (let number of numbers3) {
}

//---------------  Template Literals
let name2 = 'Max';
let description = `
  Hello, I'm ${name2 + '!'}
  I like this!
`;

//---------------  Destructure Arrays
let numbers4 = [1, 2, 3]; // old
let a = numbers4[0];
let b = numbers4[0];
console.log(a + ', ' + b);

let [d, e, f = 'default'] = numbers; // new destructuring
console.log(d + ', ' + e);

[d, e] = [e, d];
console.log(d + ', ' + e);

[d, , , e] = [e, d];
console.log(d + ', ' + e);

//---------------  Destructure Objects
let obj2 = {
  name3: 'Anna',
  age3: 27,
  greet3() {
    console.log(name3 + ', ' + age3);
  },
};
let { name3, greet3 } = obj2; // names have to match object property names
greet3();

//{name3, greet3: hello} = obj;     // Alias
//hello();

/* Section 3 */
/*  Muodule rules
Modules & classes
es6 to es5 transcompiler - traceur

1) Modules always in Strict Mode
2) Modules do not have global scope, instead it has it's own scope.



*/
//---------------  A function
function Person1() {}
var person1 = new Person1();
console.log(person1);
//---------------  A class
class Person2 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
  }
}
let person2 = new Person2('Max');
person2.greet();
console.log(person2.__proto__ == Object.prototype); // false
console.log(person2.__proto__ == Person2.prototype); // true
//---------------  inheritance & prototypes
class Max extends Person2 {
  constructor(age) {
    super('Max'); // calls base class constructor
    this.age = age;
  }

  greet() {
    console.log('Hello!');
  }
  greetTwice() {
    this.greet();
    super.greet(); // calls base class method
  }
}
let max = new Max(27);
person2.greet();
max.greet();
console.log(max.__proto__ === Person2.prototype); // false
console.log(max.__proto__ === Max.prototype); // true

//---------------  Static Methods
class Helper {
  static LogTwice(message) {
    console.log(message);
    console.log(message);
  }
}
Helper.LogTwice('Logged!'); // no instantiation required

//---------------  Getters & Setters
class Person3 {
  constructor(name) {
    this._name = name; // _name is not protected and can be accessed directly
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length > 2) {
      this._name = value;
    }
  }
}
let person3 = new Person3('Max');
console.log(person3.name);
person3.name = 'Anna';
console.log(person3.name);
//---------------  extending built-in objects

/* Section 4 */
/*
  Symbols are a new type
  unique ID's

*/
let symbol = Symbol('debug');
console.log(symbol);
//console.log(symbol.ToString());
console.log(typeof symbol);

let obj3 = {
  name: 'max',
  [symbol]: 22,
};

console.log(obj3[symbol]);

/* Section 5 */
/*
  Iterators & Generators

  Iterator is all objects that know how to access values in a collection.
  Generator is a function that doesn't necassarely run until the end when you execute it. It may yield values different than what is apart of the collection.

*/
// Iterator is an object that knows how to access a collection
//let array = [1, 2, 3];
//console.log(typeof array[Symbol.iterator]);

// let it = array[Symbol.iterator];   // not working
// console.log(it.next); // 1
// console.log(it.next); // 2
// console.log(it.next); // 3
// console.log(it.next); // undefined

let person4 = {
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
  [Symbol.iterator]: function () {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function () {
        let value = hobbies[i];
        i++;
        return {
          done: i >= hobbies.length ? true : false,
          value: value,
        };
      },
    };
  },
};

for (let hobby of person4) {
  console.log(hobby);
}

// Add an * to make it a generator
// By running a generator, you actually get back an iterator
function* select() {
  yield 'House', yield 'Garage';
}

let it2 = select();
console.log(it2.next()); // 'House'
console.log(it2.next()); // 'Garage'
console.log(it2.next()); // undefined

//---------------
let obj4 = {
  [Symbol.iterator]: gen,
};

function* gen() {
  yield 1;
  yield 2;
}

for (let element of obj4) {
  console.log(element);
}

//---------------  Generators in Action
function* gen(end) {
  for (let i = 0; i < end; i++) {
    yield i;
  }
}

let it3 = gen(2);

console.log(it3.next()); // 0
console.log(it3.next()); // 1
console.log(it3.next()); // undefined, done = true
console.log(it3.next()); // undefined, done = true

/* Section 6 */
/*
  Promises

    Useful helper object to work with an asyncrois task.
*/

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //resolve('Done!');
    reject('Failed');
  }, 15000);
});

promise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

//---------------  Changing Promises
function waitASecond(seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      seconds++;
      resolve(seconds);
    }, 1000);
  });
}

waitASecond(0)
  .then(waitASecond)
  .then(function (seconds) {
    console.log(seconds);
  });

//---------------  Catching Errors
function waitASecond(seconds) {
  return new Promise(function (resolve, reject) {
    if (seconds > 2) {
      reject('Failed');
    } else {
      setTimeout(function () {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}

waitASecond(1) // pass 2, or 3
  .then(waitASecond)
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    console.log(error);
  });

//---------------  Multiple Promises
//All and Race - built in methods for promises

let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Resolved');
  }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('Rejected');
  }, 1000);
});

Promise.all([promise1, promise2]) // "Rejected" - second promise didn't resolve.
  .then(function (success) {
    console.log(success);
  })
  .catch(function (error) {
    console.log(error);
  });

Promise.race([promise1, promise2]) // "Resolved" - First to finish
  .then(function (success) {
    console.log(success);
  })
  .catch(function (error) {
    console.log(error);
  });

/* Section 7 */
//---------------  Object Extensions
// All JavaScript objects inherit properties and methods from a prototype.
var obj5 = {
  a: 1,
};

var obj6 = {
  b: 2,
};

var obj7 = Object.assign(obj5, obj6);
console.log(obj7);

//---------------  Object Extention Prototype
var Obj8 = {
  contstructor() {
    this.a = 1;
  },
};

var Obj9 = {
  contstructor() {
    this.b = 2;
  },
};

var obj8 = new obj8();
var obj9 = new Obj9();

var obj10 = Object.assign(obj8, obj9);
console.log(obj10.__proto__ === obj8.prototype); // true - match first obj proto only
//---------------  Change Prototype after object is created
Object.setPrototypeOf(obj10, obj9);
console.log(obj10.__proto__ === obj9.prototype); // true

//---------------  Math
console.log(Math.sign(-10)); // -1 - returns sign only
console.log(Math.sign(0)); // -0
console.log(Math.sign(10)); //  1

let number5 = 3.78;
console.log(Math.trunk(number5)); // 3
console.log(Math.floor(number5)); // 3

let number6 = -3.78;
console.log(Math.trunk(number6)); // 3
console.log(Math.floor(number6)); // 4

//---------------  String
// startsWith, endsWith, includes
let name4 = 'Maximilian';
console.log(name4.startsWith('Max')); // true
console.log(name4.includes('imi')); // true

// startsWith, endsWith, includes
let number7 = 'Maximilian';
console.log(Number.isNaN(number7)); // false

let number8 = 10000000;
console.log(Number.isFinite(number8)); // true

//---------------  Arrays
let array = [10, 12, 16];
console.log(array);

let newArray = array.from(array, (val) => val * 2);
console.log(newArray);

array.fill(100);
console.log(array);

array.fill(200, 1, 2);
console.log(array);

console.log(array.find((val) => val >= 200));

var inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
];

function findCherries(fruit) {
  return fruit.name === 'cherries';
}

/* Section 8 */

/* Section 9 */

/* Section 10 */

/* Section 11 */

/* Section 12 */
