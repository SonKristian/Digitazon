/*
# #
 # #
# #
 # #

problemi
1) alternanza di "#" e " "
2) come capire quando andare a capo
3) quando si va a capo bisogna passare all'altro carattere



scelgo di partire con l'asterisco, memorizzato dentro CARATTERE
?


se volessi ciclare 4 volte e partissi da 0 e arrivassi a 4, ciclerei 5!!! volte
quindi devo partire da 0 e arrivare a 4-1=3


voglio stampare solo una riga di "#" e " "
la lunghezza della successione di caratteri arriva in input, LUNGHEZZA
definisco una variabile che conterra' il contenuto della stringa, RIGA, partendo da ""
definisco una variabile che conterra' il carattere attuale, CARATTERE, partendo da " "
ciclo partendo da 0 arrivando a LUNGHEZZA - 1
  se CARATTERE e' "#"
    imposto CARATTERE a " "
  altrimenti
    imposto CARATTERE a "#"
  concateno RIGA con CARATTERE
ritorno RIGA

riga e carattere
0: "" + "#" -> "#"
1: "#" + " " -> "# "
2: "# " + "#" -> "# #"
3: "# #" +
*/

function inverti(carattere) {
    return carattere === "#" ? " " : "#"
  }
  
  function costruisciRiga(lunghezza, carattere) {
    let riga = ""
    for (let i = 0; i < lunghezza - 1; i++) {
      // risoluzione problema 1)
      carattere = inverti(carattere)
      riga = riga + carattere
    }
    return riga
  }
  
  /*
   * scrivere una scacchiera lunga quanto mi viene chiesto in input alla funzione
   * mi aspetto una lunghezza in input, chiamata LUNGHEZZA
   * ciclare da 0 a LUNGHEZZA - 1
   *   chiamo la funzione che mi sono gia' creato passando LUNGHEZZA
   *   stampo il risultato dell'invocazione della funzione
   */
  
  function scacchiera(lunghezza) {
    let carattere = " "
    for (let i = 0; i < lunghezza - 1; i++) {
      carattere = inverti(carattere)
      console.log(costruisciRiga(lunghezza, carattere))
    }
  }
  
  scacchiera(10)