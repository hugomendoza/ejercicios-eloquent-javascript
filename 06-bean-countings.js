const countBs = (string) => {

  let counter = 0;
  let b = "B";

  for (let i = 0; i < string.length; i++) {
    if(string[i] == b) {
      counter ++
    }
    return counter += 1
  }

}
console.log(countBs("BBC"));

const countChar = (string, target) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if(string[i] == target) {
      counter += 1
    }
  }
  return counter
}

console.log(countChar("kakkerlak", "k"));

// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }

// function countBs(string) {
//   return countChar(string, "B");
// }