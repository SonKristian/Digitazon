// scrivere una funzione chiamata alfabetoStrambo che 
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna 
// "funzionara soloro con vocaliri allara finere"
function alfabetoStrambo(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (vowels.includes(char)) {
      if (i === str.length - 1) {
        result += char + 'r' + char;
      } else if (str[i + 1] === ' ') {
        result += char + 'r' + char + ' ';
        i++;
      } else {
        result += char;
      }
    } else {
      result += char;
    }
    }
    
    return result;
    }
    
    let sentence = ""
    
    console.log(alfabetoStrambo(sentence))
