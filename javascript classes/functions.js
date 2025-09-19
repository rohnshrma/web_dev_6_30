// function declaration

//syntax

// function funcName(parameters){
// // code to be executed
// }

// function calcBmi() {
//   var weight = parseInt(prompt("Enter your weight (in kg's) : "));
//   var height = parseFloat(prompt("Enter your height (in meter's) : "));
//   var bmi = weight / height ** 2;
//   if (bmi < 18.5) {
//     console.log(`Underweight! as your bmi is ${bmi}`);
//   } else if (bmi >= 18.5 && bmi < 25) {
//     console.log(`Normal weight! as your bmi is ${bmi}`);
//   } else if (bmi >= 25 && bmi < 30) {
//     console.log(`Over weight! as your bmi is ${bmi}`);
//   } else {
//     console.log(`Obesse! as your bmi is ${bmi}`);
//   }
// }

// calcBmi();

// function addition(x, y) {
//   // parameters
//   console.log(x + y);
// }

// addition(23, 4); // argument
// addition("john", "doe");

// function calcBmi(weight, height) {
//   var bmi = weight / height ** 2;
//   if (bmi < 18.5) {
//     console.log(`Underweight! as your bmi is ${bmi}`);
//   } else if (bmi >= 18.5 && bmi < 25) {
//     console.log(`Normal weight! as your bmi is ${bmi}`);
//   } else if (bmi >= 25 && bmi < 30) {
//     console.log(`Over weight! as your bmi is ${bmi}`);
//   } else {
//     console.log(`Obesse! as your bmi is ${bmi}`);
//   }
// }

// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);
// calcBmi(80, 1.8);

// 2. Print a reverse star pattern for 6 rows:
//  ******
//  *****
//  ****
//  ***
//  **
//  *

function printStar(rows) {
  for (var i = rows; i >= 1; i -= 1) {
    console.log("*".repeat(i));
  }
}
// 3. Calculate and print the sum of all even numbers from 10 to 60.
function printSum(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i += 1) {
    sum += i;
  }
  console.log(`Sum of all numbers between ${start} and ${end} is ${sum}`);
}

//  Print numbers from 1 to 40, skipping multiples of 6.

function printNums(start, stop, skip) {
  for (var i = start; i <= stop; i += 1) {
    if (i % skip !== 0) {
      console.log(i);
    }
  }
}

function checkPrime(start, end) {
  for (var i = start; i <= end; i += 1) {
    var isPrime = true;
    if (i < 2) {
      console.log(i, "not a prime");
    } else {
      for (var j = 2; j < i; j += 1) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      console.log(i, "is prime");
    } else {
      console.log(i, "is not prime");
    }
    // console.log(`${i} is ${isPrime ? "Prime" : "Not a Prime"}`);
  }
}
