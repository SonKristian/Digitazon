// scrivere una funzione chiamata intersection che 
// dati due array di interi
// ritorni un array che rappresenti l'intersezione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna []
// ad esempio con [1,2] e [2,3] ritorna [2]


function intersection(a, b) {
    let max = Math.min(a.length, b.length)
    let arr= []

    for(let i=0; i < max; i++ ){
        console.log(i);
        if (b.indexOf(a[i])!=-1) arr.push(a[i])
        // console.log(a[i]);
    }
    return arr
}

console.log(intersection([1, 2, 3], [2, 4, 5, 6, 3]))