// scrivere una funzione chiamata concatAll che 
// dato in ingresso un numero variabile di array
// ritorni un nuovo array che e' la concatenazione di tutti gli array
// passati

// ad esempio: con [1] [2] [3] ritornerebbe [1,2,3]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [1, 2, 3, 4]
// ad esempio: con [1, 2, 3] [1, 2] [3] ritornerebbe [1, 2, 3, 1, 2, 3]

function concatAll (...arrays){
    return arrays.reduce((arr, corr) => arr.concat(corr, []))
}

function concat (...arrays){
    return [].concat(...arrays)
}

function addUpFromNumber(n) {
    let somma = 0
    for(let i = n; 0 < i; i--){
      somma += i
    }
    return somma 
  }
  
  console.log(addUpFromNumber(10))
  

console.log(concatAll([1,2], [3,4], [5,6]))
console.log(concat([1,2], [3,4], [5,6]))