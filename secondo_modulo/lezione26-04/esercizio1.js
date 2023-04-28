function findLongestSubstring2(string) {
    let result =''
    let corrent = ''
    for (let i = 0; i < string.length; i++) {
        corrent += string[i]
        for (let j = i+1; j < string.length; j++) {
            if (result.includes(string[j])) {
                if (corrent.length > result.length) {
                    result = corrent
                    
                }
                corrent = ''
                break
                
            }
            corrent += string[j]
             
        }
        
    }
    return result
}

console.log(findLongestSubstring2('casesssroma'));