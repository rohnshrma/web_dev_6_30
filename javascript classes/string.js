// string

// a sequence of characters (alphabets , numbers, special symbols and whitespace) enclosed in
// single (' '), double (" ") quotes or backticks (` `)

var yourName = "john doe";
var myName = "@johndoe";
var userName = `@johndoe`;

// note : value taken as an input using the prompt function of of type "string" by default, but can be
// converted into supported data type

// var age = Number(prompt("Enter your age : "));
// var age = parseInt(prompt("Enter your age : "));
// var age = parseFloat(prompt("Enter your age : "));

// console.log(typeof age, age);

// concatenation
// adding two or more string together

// console.log(typeof 123 + 123, 123 + 123); // number , 246
// console.log(typeof "123" + 123, "123" + 123); // string , 123123
// console.log(typeof "123" + "123", "123" + "123"); // string , 123123

// unary + and -
// console.log(+"123" + 123); // number , 246
// console.log(-"123" + 123); // number , 0

// var fName = prompt("Enter your first name : ");
// var lName = prompt("Enter your last name : ");
// var age = parseInt(prompt("Enter your age : "));

// console.log(
//   "hello world my name is " +
//     fName +
//     " " +
//     lName +
//     " and i am " +
//     age +
//     " years old"
// );

// template literal
// `` are used to create a template literal , where variables and expressions are inserted using ${}

// console.log(
//   `Hello world my name is ${fName} ${lName} and i am ${age ** 2} years old`
// );

// the str.length property returns number of characters in a string
// console.log(fName.length);

// indexing
// syntax
//         str[ index ]
// counting starting from 0 used to access characters of a string

// h e l l o
// 1 2 3 4 5 : normal counting
// 0 1 2 3 4 : positive indexing (l-r)
//-5-4-3-2-1 : negative indexing (r-l)

// first character is always on the 0th position
// last character is always on the str.length - 1 = th position

var txt = "hello";
// console.log(txt[0]);
// console.log(txt[txt.length - 1]);

// string methods

// return a new string with all alphabets in uppercase
txt.toUpperCase();
// return a new string with all alphabets in lowercase
txt.toLowerCase();
