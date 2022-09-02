let fizz = "Fizz";
let buzz = "Buzz"

for (let i = 1; i < 101; i++) {
  if ( i % 5 == 0 && i % 3 == 0) {
    console.log(fizz+buzz);
  }
  else if( i % 3 == 0 ) {
    console.log(fizz);
  }
  else if ( i % 5 == 0 ) {
    console.log(buzz);
  }
  else {
    console.log(i)
  }
}

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
