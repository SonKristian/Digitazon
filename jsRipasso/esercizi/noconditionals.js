// scrivere una funzione chiamata noConditionals
// che prende in ingresso un numero che puo' essere 0 o 1
// ritorna 1 se il numero e' 0
// ritorna 0 se il numero e' 1

// non e' possibile usare
// if else
// operatori ternary
// negazioni
// operazioni su bit

function noConditionals(n) {
  return 1 - n;
}

console.log(noConditionals(0)); // Output: 1
console.log(noConditionals(1)); // Output: 0
