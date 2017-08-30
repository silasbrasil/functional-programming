## Concepts about Functional Programming

#### FIRST-CLASS FUNCTIONS
First-Class Functions are functions that support other functions
as arguments and return functions like variable.

Below the __sum__ function add __a__ to __b__ and __buildSum__ functions
create a new function with __a__ value. The new function created by __buildSum__
will add to __a__ the value passed to __b__.

- Example:
```javascript
const sum = ( a, b ) => a + b
const buildSum = ( a ) => b => sum( a, b )

const fnSum = buildSum( 3 )
fnSum( 5 )  // result: 8
fnSum( 12 ) // result: 15
```


#### HIGH-ORDER FUNCTIONS
High-Order Functions are functions that recive other function as
params. Example, setTimeout, map, reduce, forEach, etc.



#### PURE FUNCTIONS
Like bijetora functions on math, pure functions are functions
always return the same value to same inputs. Therefore pure functions don't
cause "side effects" on state of application.


- Example:
```javascript
const multiple = ( a, b ) => a * b
const createStudant = ( fullName, age ) => {
    "firstName": fullName.split(' '),
    "fullName": fullName,
    "age": age
}
```


#### CURRYING
Currying is a tecnic where you have a function that recive n
params but if you passing only one param to function, then will return a new
function that recive other n-1 params.

Currying is not default in JS, then below example is not will
run. It's only inlustration.

- Example:
```javascript
const fn = ( a, b, c ) => { ... }
const f1 = fn( 2 )      // result: function( b, c )
const f2 = f1( 3 )      // result: function( c )
const value = f2( 4 )   // result: value of fn( 2, 3, 4 )

// OR

fn( 2 )( 3 )( 4 ) // result: value of fn( 2, 3, 4 )
```

##### If desire using currying in JS you can use ramda ou lodash librarys.
##### See example with ramda on samples.js
