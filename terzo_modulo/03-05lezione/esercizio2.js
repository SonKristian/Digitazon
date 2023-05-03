/*
Scrivere una funzione che prende in ingresso un oggetto, si devono stampare solo le seguenti chiavi:
 * "chiave1"
 * "chiave2"
a prescindere da quante ce ne siano nell'oggetto.
Non si possono utilizzare if, non si puo' utilizzare l'operatore punto (.) cercate di utilizzare lo spread operator
*/

function keys({key1, key2}) {
   return key1 + " " + key2
   
}

const obj = {
  key1: "value",
  key2: "value",
  key3: "value",
};


console.log(keys(obj))