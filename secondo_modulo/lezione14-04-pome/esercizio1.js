/*
// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve stampare una scacchiera di lato l
// contenente '# 'e ' ', opportunamente alternati
*/


function chessboard(num){
    table = ""
    if(num==0){
        console.log("numero = 0")
    }
    for(let i=0; i<num; i++){
        for(let j=0; j<num ; j++){
            if((i+j)%2==0){
                 table += "o"
            }else{
                 table += "#"
            }
        }
    table += "\n"
    }
    return table
}

console.log(chessboard(3))