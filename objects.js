// const obj = {
//   0: '0',
//   c: 'c',
//   1: '1',
//   a: 'a',
//   2: '2',
//   b: 'b',
//   3: '3'
// };

// obj.d = 'd';

// console.log(obj);
// console.log(Object.getOwnPropertyNames(obj).join(' '));

// // Prototypes
// let person = {
//   calling: 'hello'
// };

// let animal = {
//   calling: 'owwwwww'
// };

// let friend = Object.create(person);

// console.log(friend.calling);
// console.log(Object.getPrototypeOf(friend) === person);

// //setPrototypeof()
// Object.setPrototypeOf(friend, animal);

// console.log(friend.calling);
// console.log(Object.getPrototypeOf(friend) === person);

//super
//allowsa you to acces

let person = {
  greet() {
    return 'hello';
  }
};

let animal = {
  greet() {
    return 'owwwww';
  }
};

let friend = {
  greet() {
    return super.greet() + ' there';
  }
};
let cousin = Object.create(friend);
Object.setPrototypeOf(friend, person);
console.log(person.greet());
console.log(friend.greet());
console.log(cousin.greet());
