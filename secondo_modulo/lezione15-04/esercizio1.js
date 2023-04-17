/*
data una stringa in ingresso, la funzione
deve calcolare la sottostringa palindroma più
lunga
*/

function sub_palindrome(word){
    let reverse = ""
    for(let i = word.length -1 ; 0 <= i; i-- ){
        reverse += word[i]
    }
    if(reverse == word){
        return reverse + " è palindroma"
    }else{
        return "non è palindromo"
    }
}

console.log(sub_palindrome("anna"))