function palindrome(word){
    let reverse = ""
    for(let i = word.length - 1; 0 <= i; i--){
        reverse += word[i]
    }
   return (word == reverse) ? "palindrome" : "not palindrome"
}

console.log(palindrome("anna"))