import './node_modules/formula-pmt/PMT.js';
import PMT from './node_modules/formula-pmt/PMT.js';

//var pmt = require('formula-pmt');
// let str = `ASUJSDHFI
// SAFSDF`;

// console.log(str);
// console.log(str.length);

// //subistitution

// let name = 'Amr';
// let age = 43;
// let greating = `Hello There, ${name}. your age is ${age}`;

// console.log(greating);
// let count = 5;
// let price = 0.25;
// let name = 'Cat';

// let output = `${greet()}, your total is ${count * price}`;

// console.log(output);

// function greet() {
//   let name = 'Amr';
//   return `Hello ${name}`;
// }

// function asynvFunc(
//   url,
//   timeout = 2000,
//   callback = function() {
//     console.log('Test');
//   }
// ) {
//     setTimeout=timeout
//   callback();
// }

// asynvFunc();

// function foo(a, b) {
//   //'use strict';
//   // it is automatic active when using default.

//   console.log(arguments);
//   console.log(a === arguments[0]);
//   console.log(b === arguments[1]);
//   a = 'x';
//   b = 'y';
//   console.log(arguments);
//   console.log(a === arguments[0]);
//   console.log(b === arguments[1]);
// }

// foo('A', 'b');

// let value = 5;

// function Foo() {
//   return ++value;
// }

// function bar(firest, second = Foo()) {
//   console.log(`${firest}
//     ${second}`);
// }

// bar(23);
// bar(23);
// bar(23);

// TDZ

// function foo(first, second = first) {
//   console.log(first, second);
// }

// foo();

// //Function Constractor
// var stat = 'return args[0]';

// var add = new Function('...args', stat);

// console.log(add('Ajshksa safdasd', 'ghjhjhj'));

// let numArr = [20, 25, 36, 10, -256, 1];

// console.log(Math.max.apply(Math, numArr));

// console.log(Math.max(...numArr));

//name property

// let add = (val1, val2) => {
//   console.log(val1 + val2);
// };

// add(2, 3);

// let m5 = val1 => val1 * 5;

// console.log(m5(5));

// const nums = [3, 4, 5, 6];

// nums.forEach(function(num) {
//   return num + 5;
// });

// nums.forEach(num => num + 5);

// function makarrorfunk() {
//   return () => arguments[0];
// }

// let arrow = makarrorfunk(5);

// console.log(arrow());

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// function improvedFactorial(n, p = 1) {
//   if (n <= 1) {
//     return 1 * p;
//   } else {
//     let result = n * p;
//     return improvedFactorial(n - 1, result);
//   }
// }

// console.log(improvedFactorial(5));
// console.log(factorial(5));

//// literal shorthand syntax
// function makePerson(name, age) {
//   return {
//     name,
//     age
//   };
// }

// console.log(makePerson('amr', 43));

// // concise Method syntax
// const person = {
//   name: 'Amr',
//   sayName: function() {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// };

// const person2 = {
//   name: 'Amr Soliman',
//   sayName() {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// };
// person.sayName();
// person2.sayName();

// METHODS!!

// console.log(+0 == -0);
// console.log(+0 === -0);
// console.log(Object.is(+0, -0));

// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

// console.log(5 == '5');
// console.log(5 === '5');
// console.log(5 == 5);
// console.log(5 === 5);

// console.log(Object.is(5, '5'));
// console.log(Object.is(5, 5));

// //Mixins
// function mixin(recever, supplire) {
//   Object.keys(supplire).forEach(key => {
//     recever[key] = supplire[key];
//   });
//   return recever;
// }

// const person = {
//   name: 'Amr',
//   age: 43
// };

// const person2 = mixin({}, person);
// console.log(person2);

// // Assign
// const person = {
//   name: 'Amr',
//   age: 43
// };
// const person2 = Object.assign({}, person);
// console.log(person2);

// obj1 = { wheels: 4, tires: 'big' };
// obj2 = { make: 'Ford', model: 'Raptor' };
// const car = {};
// Object.assign(car, obj1, obj2);
// console.log(car);

//Dublicate
//'use strict';
const car = {
  make: 'Ford',
  mahe: 'Honda'
};

console.log(car);
console.log(PMT(0.01, 60, -1000000, 200000, 1));
