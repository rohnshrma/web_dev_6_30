// if (condition){
// //  code to be executed
// }else

// the code inside of the if block runs only if the given condition is true

// else
// the fallback code goes into the else block

// the code inside of the else block runs only if all the condition above are false

// var age = parseInt(prompt("Enter age : "));

// if (age >= 18) console.log("eligible");
// else console.log("Not eligible to code");

// if (age >= 18) {
//   console.log("eligible");
// } else {
//   console.log("Not eligible to code");
// }

// (optional)
// ternary operator
// age >= 18 ? console.log("Eligible") : console.log("Not Eligible");

// var n = parseInt(prompt("Enter a number : "));
// if (n > 0) console.log(`${n} is positive`);
// else if (n < 0) console.log(`${n} is negative`);
// else console.log(`${n} is zero`);

// var today = parseInt(prompt("Enter the day today : ", "0-6"));

// if (today === 0) console.log("Sunday");
// else if (today === 1) console.log("Monday");
// else if (today === 2) console.log("Tuesday");
// else if (today === 3) console.log("Wednesday");
// else if (today === 4) console.log("Thursday");
// else if (today === 5) console.log("Friday");
// else if (today === 6) console.log("Saturday");
// else console.log(`${today} is not a valid day`);

var age = parseInt(prompt("Enter your age : "));

if (age >= 18) {
  var yourname = prompt("Enter your name : ").toLowerCase();
  if (yourname.length > 3 && yourname.startsWith("s")) {
    console.log(`Welcome to party, ${yourname}`);
  } else {
    console.log("Not Invited");
  }
} else {
  console.log("Not Eligible To Party!!");
}
