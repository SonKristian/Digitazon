/*
Dato un array ordinato di interi tutti diversi, e un numero target, ritornare l'indice 
al quale il target e' trovato. Se non viene trovato ritornare l'indice 
al quale andrebbe inserito per mantenere l'ordine
*/


//dichiarare 2 variabili left e right
//la prima parte dal primo indice, la seconda dall'ultimo
//dichiarare una variabile mid
//se il valore medio è inferiore cerca a destra, viceversa se è superiore cerca a sinistra
//se non è a destra o sinistra, controlla se è al centro

function binarySearch(arr,n) {
    
    let end = arr.length-1
    let start = 0 

    while ( start <= end ) {
        let half = Math.floor((end+start)/2)  
        if (n==arr[half]) {
            return half
        }
        if (n>arr[half]){
            start = half+1  //arrotondando per difetto si deve aggiustare il caso in cui ci siano solo due elementi.
        } else {
            end = half-1
        }  
    }
    return -1 
}

console.log(binarySearch([1,2,3,5,6],7));

console.log(indice([1, 2, 3, 4], 4)); 