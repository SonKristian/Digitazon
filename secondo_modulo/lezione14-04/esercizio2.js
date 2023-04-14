/* 
 Ex 2
data la stringa 'Riccardo'
realizzare l'apposita strategia per stampare in output l'ultimo carattere maiuscolo concatenato a un underscore e al primo carattere minuscolo:

O_r 
*/

let word = "Riccardo"
const word_length = word.length

console.log(word.toUpperCase().charAt(word_length - 1)+ "_" + word.toLowerCase().charAt(0))