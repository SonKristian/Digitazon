// scrivere una funzione chiamata isHomogeneous che
// dato un array di elementi in ingresso
// ritorni true se l'array contiene elementi tutti dello stesso tipo
// o false altrimenti

function isHomogeneous(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != typeof arr[i + 1]) {
      return false;
    }
  }
  return true
}

console.log(isHomogeneous([1, 2, 3, false]));
