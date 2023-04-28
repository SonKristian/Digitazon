/*
dati due array ordinati, creare una funzione chiamata merge,
 che prende in ingresso i due array e ne ritorna uno solo, ordinato
*/

function merge(arr1, arr2) {
  let arr_f = []
  let i = 0, j =0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr_f.push(arr1[i]);
      i++;
    } else {
      arr_f.push(arr2[j]);
      j++;
    }
  }
  
  for (let k = i; k < arr1.length; k++) {
    arr_f.push(arr1[k]);
  }
  
  for (let k = j; k < arr2.length; k++) {
    arr_f.push(arr2[k]);
  }
  return arr_f;
}

console.log(merge([1,3,5], [2, 4, 6]))