let chess = "";
let grid = 24;

for (let i = 0; i < grid; i++) {
  for (let j = 0; j < grid; j++) {
    if((i + j) % 2 == 0) {
      chess += " ";
    }else {
      chess += "#";
    }
  }
  chess += "\n";
}

console.log(chess)
