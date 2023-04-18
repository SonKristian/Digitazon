/*
creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri
 e restiuisce un array di 2 numeri: il primo, che rappresenta il numero più piccolo 
 del primo array, e il secondo che rappresenta il numero più grande del primo array.
Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, salvare
 l'array restituito dalla funzione e stampare il numero più grande e
  più piccolo con un apposito messaggio
*/

function getMaxMinAsArray(arr){
    let min_max = []
    let min = arr[0], max = 0
    for(let i=0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }
    
    min_max = [min, max]
    return "il numero più piccolo è " + min_max[0] + " il numero più grande è " + min_max[1]

}

console.log(getMaxMinAsArray([1, 2, 5, 9, 0 , 4]))