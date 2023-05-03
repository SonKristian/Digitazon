/*
Scrivere una funzione che sia in grado di dire se una data stringa in ingresso sia o meno
“pazza”.
Una stringa e’ “pazza” se:
● non ha un soggetto, un soggetto puo’ essere solo: “Lui”, “Lei”, “Egli”, “Ella”
● finisce con “?!?”
● contiene la stringa “Cthulhu”
● inizia e finisce con una parola che finisce in “are”, o “ere”, o “ire”
● inizia con della punteggiatura, quindi con uno tra “,.!?:;-~”
Basta uno dei suddetti “requisiti di pazzia” per rendere una frase “pazza”; a meno che la
stringa contenga una di queste stringhe, in quel caso la stringa non e’ mai “pazza”:
● Church
● mare
Esempi di stringhe pazze:
● .Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.
● Andare a rimirare

Esempi di stringhe non pazze:
● Lui e’ pazzo.
● ~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo
amano ~
● ~ Papa’, come sta Church? ~
*/

/*
Inzio
Scrivo funzione chiamata crazyString che prende come parametro in ingresso un testo

Ultima Condizione per le Eccezioni 
Sapendo che basta una delle condizioni per rendere la frase pazza, parto controllando
se ci sono le parole "Church" e mare, dato che se sono presenti la frase non è pazza
Utilizzo lo split per trasforare la stringa in un array di parole, sfruttando un for
controllo se uno degli indici del testo splittato, chiamato check_text", contiene una 
delle due parole

Prima Condizione
Ora controllo se nella frase è presente un soggetto, dichiaro un nuovo array con i soggetti
e verifico se check_text(testo splittato) contiene uno dei soggetti

Seconda Condizione
La seconda condizione rende una stringa pazza se il suo ultimo valore contiene ?!? e quindi credo una
variabile check_last che prende come parametro l'ultimo valore dell'array splittato(check_text) e
utilizzo include per verificare se è presente ?!?

Terza Condizione
verificare che Cthulhu sia presente all'interno della stringa, per fare questo utilizzo il testo
preso in ingresso e utilizzando il metodo include controllo la presenza della parola

Quarta Condizione
Utilizzo il metodo endswith per controllare che una stringa finisca con specifici caratteri nel nostro caso
are ere ire

Quinta Condizione
Come per la condizione dei soggetti dichiaro un array che ha come valori i simboli della punteggiatura
e se vengono trovati all'interno dell'indice 0 del check_text(array splittato), allora la stringa è pazza
*/

function crazyString(text) {
  let subj = ["Lui", "Lei", "Egli", "Ella"];
  let punctuation = [",", ".", "!", "?", ":", ";", "~", "-"];
  let check_text = text.split(" ");
  let check_last = check_text[check_text.length - 1];
  let checkSubject = true,
    checkCthulhu = true,
    checkLast = true,
    checkPunct = true;

  for (let i = 0; i < check_text.length; i++) {
    if (check_text[i].includes("Church") || check_text[i].includes("mare")) {
     return "stringa non pazza"
    }else{

    if (check_text[i].includes("Cthulhu")) {
    checkCthulhu = true
    } else {
      checkCthulhu = false
    }
  }

  for (let i = 0; i < subj.length; i++) {
    if (check_text !== subj[i]) {
      checkSubject = true
    } else {
      checkSubject = false
    }
  }

  for (let i = 0; i < punctuation.length; i++) {
    if (check_text[0] == punctuation[i]) {
      checkPunct = true
    } else {
      checkPunct = false
    }
  }

  if (check_text[0].endsWith("are") || check_text[0].endsWith("ere") || check_text[0].endsWith("ire")) {
    return "stringa pazza prima parola che finisce con are/ere/ire"
  }
  
  if(check_last.endsWith("are") || check_last.endsWith("ere") || check_last.endsWith("ire")){     
    return "stringa pazza ultima parola che finisce con are/ere/ire"
  }
  
  if (check_last.includes("?!?")) {
    checkLast = true
  } else {
    checkLast = false
  }
}

if(checkCthulhu==false && checkSubject == true && checkPunct == false && checkLast==false){
    return "stringa non pazza"
}else{
    return "stringa pazza"
}
}

console.log(crazyString("Lui è pazzo"));
