// let total = 0,
//     count = 1;

// while( count <= 10 ) {
//   total += count;
//   count += 1

//   console.log({count, total})
// }

// console.log(total)

// const factorial = (n) => {
//   if(n == 0) {
//     return 1
//   } else {
//     console.log((n - 1) * n)
//     return factorial( n - 1 ) * n;
//   }
// }

// console.log(factorial(8));

//Unary operators
// console.log(typeof 4.5)
// console.log(typeof "x")
// console.log(-(10 - 2))

// let theNumber = Number(prompt("Pick a number"))

// if(!Number.isNaN(theNumber)) {
//   console.log(`Your number is the square root of ${ theNumber * theNumber }`)
// } else {
//   console.log(`${theNumber} is not a number`)
// }

// let number = 0;

// while (number <= 12) {
//   console.log(number)
//   number = number + 2;
// };

// for (let current = 20; ; current = current + 1) {
//   if ( current % 7 == 0 ) {
//     console.log(current);
//     break;
//   }
// }

// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//     console.log(result)
//   }
//   return result;
// };

// console.log(power(2, 10));

// const hummus = () => {
//   const ingredient = (amount, unit, name) => {
//     let ingredientAmount = amount * factor;
//     if( ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   }

//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// }

// let launchMissiles = () => {
//   missileSystem.launch("now")
// };

// if(safeMode) {
//   launchMissiles = () => {
//     console.log("Do something!!");
//   }
// }

const square1 = (x) => { return x * x};
const square2 = x => x * x;

const findSolution = (target) => {
  const find = ( current, history ) => {
    if( current == target ) {
      return history;
    } else if ( current > target ) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
              find(current * 3, `(${history} * 3)`);
    }
  }

  return find(1, "1");
}

console.log(findSolution(24))

// const printFarmInventory = (cows, chickens) => {
  
//   let cowString = String(cows);
//   while( cowString.length < 3 ) {
//     cowString = "0" + cowString
//   }
//   console.log(`${ cowString } Cows`);

//   let chickenString = String(chickens);
//   while(chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }

//   console.log(`${chickenString} Chickens`)

// }

// printFarmInventory(7, 11);

// const printZeroPaddedWithLabel = (number, label) => {
//   let numberString = String(number);
//   while ( numberString.length < 3 ) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }

// const printFarmInventory = (cows, chickens, pigs) => {
//   printZeroPaddedWithLabel(cows, "Cows");
//   printZeroPaddedWithLabel(chickens, "Chickens");
//   printZeroPaddedWithLabel(pigs, "Pigs");
// }

const zeroPad = (number, width) => {
  let string = String(number);
  while(string.length < width ) {
    string = "0" + string;
  }
  return string;
}

const printFarmInventory = (cows, chickens, pigs) => {
  console.log(`${zeroPad( cows, 3 )} Cows`)
  console.log(`${zeroPad( chickens, 3 )} Chickens`)
  console.log(`${zeroPad( pigs, 3 )} Pigs`)
}

printFarmInventory(7, 11, 3)