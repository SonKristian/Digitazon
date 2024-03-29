function numeriRomani(numRomano) {
  let res = 0;
  let map = new map([
    ["x", 10],
    ["v", 5],
    ["i", 1],
  ]);

  for (let i = 0; i < numRomano.length; i++) {
    let char = numRomano[i];
    let pre = numRomano[i - 1];
    if (map.has(char)) {
      if (char > pre) {
        res += map.get(char);
      }
      res += map.get(char);
    }
  }
  return res;
}

console.log(numeriRomani("v"));
