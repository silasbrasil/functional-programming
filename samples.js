'use strict'
const R = require('ramda')

// Add function
R.add( 3, 5 )   // 8
R.add( 7 )( 8 ) // 15

// All
const isOne = a => a === 1
R.all(isOne, [1, 1, 1]) // true
R.all(isOne, [1, 1, 4]) // false

// Conditional - Matching
const lifePhase = R.cond([
  [R.lt(50), () => 'Its a old guy'],
  [R.lt(20), () => 'Its a young guy'],
  [R.lt(12), () => 'Its a teen guy'],
  [R.T,      () => 'Its a litle boy']
])

lifePhase(60)   // Its a old guy
lifePhase(35)   // Its a young guy
lifePhase(15)   // Its a teen guy
lifePhase(7)    // Its a litle boy

// Clamp
R.clamp(2, 5, -5) // 2
R.clamp(2, 5, 15) // 5
R.clamp(2, 5, 4)  // 4

// Map
const pow = x => x * 2;

R.map(pow, [1, 2, 3]); // [2, 4, 6]
R.map(pow, {x: 1, y: 2, z: 3}); // {x: 2, y: 4, z: 6}

// Pick
const person = {
    name: 'Silas Brasil',
    age: 15,
    height: '3.5',
    password: '1234'
}
R.pick(['name', 'age', 'password', 'token'], person)
// { name: 'Silas Brasil', age: 15, password: '1234' }

// PickAll
const person = {
    name: 'Silas Brasil',
    age: 15,
    height: '3.5',
    password: '1234'
}
R.pickAll(['name', 'age', 'password', 'token'], person)
// { name: 'Silas Brasil', age: 15, password: '1234', token: undefined }

// Has
const hasName = R.has('name');
hasName({name: 'alice'});   //=> true
hasName({name: 'bob'});     //=> true
hasName({});                //=> false

// or
R.has('name')({ name: 'John', age: 35 }) // => true
R.has('name')({ age: 35 }) // => false

// or
const point = {x: 0, y: 0};
const pointHas = R.has(R.__, point);
pointHas('x');  //=> true
pointHas('y');  //=> true
pointHas('z');  //=> false

// Take
R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(3, 'ramda');               //=> 'ram'

// Currying
const printThree = (a, b, c) => console.log(a, b, c)
const curryPrintThree = R.curry(printThree)

const printRest = curryPrintThree('a', 'b')
printC('c') //=> a, b, c

// or

curryPrintThree('a', 'b')('c') //=> a, b, c
curryPrintThree('a')('b', 'c') //=> a, b, c
