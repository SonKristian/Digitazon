function reverse_word(words){
    let reverse = ""
    for (let i = words.length - 1; i >= 0; i--) {
            reverse = reverse + words.charAt(i);
    }
    return reverse
}

console.log(reverse_word("javascript"))