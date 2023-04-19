/*
Scrivere una funzione che dato in ingresso un numero, ritorni il fattoriale di quel numero.
*/

function fattoriale(num){
    let fatt = num
    for(let i = 1; i < num ; i++){
        fatt = fatt * i
    }
    return fatt
}

console.log(fattoriale(5))
