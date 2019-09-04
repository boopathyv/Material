// declaration
var a;
let b;
const c = 10;
console.log(a); //undefined
console.log(b); //undefined
console.log(c); //10 --> if not initialised--> SyntaxError: Missing initializer in const declaration


// redeclaration
var a = 11;
// let b = 12; // Identifier 'b' has already been declared
// const c = 13; // Identifier 'c' has already been declared
console.log(a);
console.log(b);
console.log(c);

// reassignment
a = 20;
b = 22;
// c = 23; // TypeError: Assignment to constant variable.
console.log(a);
console.log(b);
console.log(c);

// var is function scoped
// let,const are block scoped