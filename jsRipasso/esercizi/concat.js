// scrivere una funzione chiamata concatAll che 
// dato in ingresso un numero variabile di array
// ritorni un nuovo array che e' la concatenazione di tutti gli array
// passati

// ad esempio: con [1] [2] [3] ritornerebbe [1,2,3]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [1, 2, 3, 4]
// ad esempio: con [1, 2, 3] [1, 2] [3] ritornerebbe [1, 2, 3, 1, 2, 3]

function concatAll(...array) {
    return array.reduce((corr, arr) => corr.concat(arr), [])
   }
   
   console.log(concatAll([1,2], [3, 4], [5, 6]))