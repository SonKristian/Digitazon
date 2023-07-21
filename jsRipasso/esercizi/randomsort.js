// scrivere una funzione chiamata createRandomSortedArray che 
// dato un numero n in ingresso
// ritorni un array ordinato in
// modo crescente lungo n che
// contiene numeri casuali compresi tra 0 e 1,
// estremi esclusi

// ad esempio per 3 puo' ritornare
// [0.29576384904091846, 0.8219993580808898, 0.99213923917851]
// "puo'" perche' i numeri devono essere casuali
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []

function createRandomSortedArray(n) {
    const arr = [];
  
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.random();
      arr.push(randomNumber);
    }
    // console.log(arr);
    arr.sort((a, b) => a - b); // Ordina l'array in modo crescente
  
    return arr;
  }
  
  console.log(createRandomSortedArray(3));
  