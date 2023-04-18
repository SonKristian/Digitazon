/*
Data una stringa, ad esempio PAYPALISHIRING, scrivere una funzione che la ritorna a "ZigZag"
La funzione accetta in ingresso la stringa e un numero di righe, in questo caso e' stata invocata cosi: 
converti("PAYPALISHIRING", 3)
*/

function zigzag(string, rows){
    const rowsArray=[]
    let row = 0
    let step = 1

    for(let i=0; i < string.length; i++){
        const char = string[i]
        if(typeof rowsArray[row]=="string"){
            rowsArray[row]+=char
        }else{
            rowsArray[row]=char
        }
        row += step

        if(row == rows - 1){
            step = -1
        }else if(row == 0){
            step = 1
        }
    }
    return rowsArray.join("")
}

console.log(zigzag("PAYPALISHIRING",3))