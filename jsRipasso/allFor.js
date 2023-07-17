const array = [1, 2, 3, 4];
for (const element of array) {
  console.log(element);
}
// Output: 1 2 3 4

const stringa = "Ciao";
for (const carattere of stringa) {
  console.log(carattere);
}
// Output: "C" "i" "a" "o"

/* for...of: Utilizzato per iterare sugli elementi di una struttura 
iterabile come un array, una stringa o un oggetto iterable (ad esempio una Map o un Set)
Restituisce il valore degli elementi. */

const oggetto = { a: 1, b: 2, c: 3 };
for (const chiave in oggetto) {
  console.log(chiave);
}
// Output: "a" "b" "c"

const array2 = [10, 20, 30];
for (const indice in array2) {
  console.log(indice);
}
// Output: "0" "1" "2"


const array3 = [1, 2, 3, 4];
for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}
// Output: 1 2 3 4

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

