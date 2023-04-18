/*
Data una stringa che contiene solo parentesi
 tonde aperte e parentesi tonde chiuse, scrvere 
 una funzione che ritorna true se tutte le 
 parentesi sono bilanciate, false altrimenti
*/

function parentesi(word) {
  let pc = 0,
    pa = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "(") {
      pa++;
    } else if (word[i] == ")") {
      pc++;
    }
  }
  if(pa == pc){
    return true 
  }else{
    return false
  }
}

console.log(parentesi("(()()))"))
