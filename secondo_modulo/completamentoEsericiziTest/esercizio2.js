/*
Calcola la spesa per reparto e restituisce l'oggetto con il reparto e la spesa totale.
Viene passato come parametro uno stringa contenente il nome del reparto seguito dagli acquisti effettuati,
separati da una nuova riga. La funzione esegue i seguenti passaggi:

Divide lo stringa in righe tramite il carattere line "\n".
Inizializza un array vuoto "results" dove verranno salvati i risultati.
Inizializza le variabili "reparto" e "spesa" a vuoto.
Scorre l'array delle righe.
Se la riga corrente è vuota o non è un numero, significa che si è concluso il blocco precedente e si deve salvare il risultato
 nel formato {reparto, spesa} dentro l'array "results".
Inizializza la variabile "reparto" alla riga corrente e "spesa" a 0.
Altrimenti, la riga contiene un numero, e si aggiunge il valore numerico alla variabile "spesa".
Salvare l'ultimo blocco nel caso non sia vuoto.
Inizializza un nuovo array "results2" dove verranno salvati i risultati finali.
Inizializza le variabili "min_spesa" e "max_spesa" al valore della spesa del primo reparto.
Inizializza le variabili "min_reparto" e "max_reparto" al nome del primo reparto.
Scorre l'array di risultati "results".
Se la spesa del reparto corrente è minore della variabile "min_spesa", aggiorna la variabile "min_spesa" e "min_reparto".
Aggiungi il reparto e la spesa minima nell'array "results2".
Se la spesa del reparto corrente è maggiore della variabile "max_spesa", aggiorna la variabile "max_spesa" e "max_reparto".
Aggiungi il reparto e la spesa massima nell'array "results2".
Restituisci l'array "results2" contenente i risultati finali. *

*/

function calcolaSpesa(str) {
  let lines = str.split("\n")
  let results = [], reparto = "", spesa = 0
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.trim() === "" || isNaN(parseInt(line))) {
      if (reparto !== "") {
        results.push({
          reparto: reparto,
          spesa: spesa,
        });
      }
      reparto = line.trim();
      spesa = 0;
    } else {
      spesa += parseInt(line);
    }
  }
  if (reparto !== "") {
    results.push({
      reparto: reparto,
      spesa: spesa,
    });
  }

  let results2 = []
  let min_spesa = results[0].spesa , max_spesa = results[0].spesa
  let min_reparto = results[0].reparto, max_reparto = results[0].reparto

  for (let i = 0; i < results.length; i++) {
    let spesaCorr = results[i].spesa
    let repartoCorr = results[i].reparto

    if (spesaCorr < min_spesa) {
      min_reparto = repartoCorr;
      min_spesa = spesaCorr;
      results2.push({
        reparto: min_reparto,
        spesa: min_spesa,
      });
    }

    if (spesaCorr > max_spesa) {
      max_spesa = spesaCorr;
      max_reparto = repartoCorr;
      results2.push({
        reparto: max_reparto,
        spesa: max_spesa,
      });
    }
  }
  return results2;
}

let str = `Cancelleria
    500
    40
    60
    
    Servizi igienici
    1000
    1
    200
    
    Vendite
    0`;

console.log(calcolaSpesa(str));
