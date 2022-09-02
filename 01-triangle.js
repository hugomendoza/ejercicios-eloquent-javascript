const triangleLoop = () => {

  let hash = "#";
  // while (counter <= 7) {
  //   console.log(hash);
  //   hash += "#"
  //   counter += 1;
  // }
  
  for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  for (let i = 1; i < 8; i++) {
    console.log(hash);
    hash += "#"
  }

  
}

triangleLoop()