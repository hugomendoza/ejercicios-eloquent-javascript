const isEven = (target) => {
  const findIsEven = (a) => {
    if( a % 2 == 0 ) {
      return true;
    } else {
      return false;
    }
  }
  return findIsEven(target)
}

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

console.log(isEven(-1));