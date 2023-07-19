// scrivere una funzione chiamata largestSwap
// che prende in ingresso un numero di due cifre,
// ritorna true se e' il piu' grande dei due possibili scambi di
// cifre, false altrimenti

// ad esempio per 27 deve ritornare false perche' posso invertire 
// le due cifre per ottere 72
// ad esempio per 43 deve ritornare true perche' 34 sarebbe minore


// function largestSwap(n) {
//     n+=''
//     let x=n[1]+n[0]
//     if (x>n) {
//         return false
//     }
//     else return true
// }

function largestSwap(n) {
    let number = n.toString()
    let reverse = ""
    for(let i= number.length - 1; 0 <= i; i--){
        reverse += number[i]
    }
    return (number > reverse) ? false : true
}

console.log(largestSwap(23))