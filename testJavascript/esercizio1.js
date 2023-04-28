/*
Vi viene fornita una stringa che rappresenta le spese di ogni reparto della vostra societa’, la
richiesta e’ che troviate il nome del reparto che spende di più e quello che spende meno,
con i relativi importi totali.
Segue un esempio di questa stringa:
`
Cancelleria
500
40
60

Servizi igienici
1000
1
200

Vendite 
0
`
Dovete scrivere quindi una funzione che data in ingresso una stringa simile a quella data sia
in grado di sommare tutti gli importi e ritornare quanto richiesto, cio’ che puo’ cambiare sono
i nomi e il numero dei reparti e gli importi, la struttura rimarra’ la stessa.
In questo esempio andrebbe ritornato un risultato di questo tipo:
[{
    "reparto": "Servizi igienici",
    "spesa":1201
},{
    "reparto": "Vendite",
    "spesa": 0
}]
*/


/*Per prima cosa creo una funzione che prende in parametro una stringa
utilizzo il metodo trim per levare spazi all'inizio e alla fine della stringa
e il metodo split per dividire la stringa in array di stringhe 

creo  variabili per il reparto che spende di più e quello che spende meno e nomi 
reparti

utilizzo for per ciclare i valori splittati e parsare i valori

faccio un confronto tra il totale della spesa corrente e il valore della spesa massima o minima
a seconda dei casi. Se la spesa corrente è maggiore della spesa massima, aggiorno i valori
della variabile maxspesa, altrimenti se è minore della spesa minima, aggiorno
i valori della variabile min spesa/

restituisco i valori delle due variabili all'interno di un array
oggetto messo in output

restituisco un array contenente i due oggetti rappresentanti i reparti che hanno
*/
function calcolaSpese(string) {
    let spese = string.trim().split('\n');

    let max_spesa=0, min_spesa=1000, max_reparto="", min_reparto=""
    let totale=""
  
        
        const result = [
        {"reparto": max_reparto, "spesa": max_spesa},
        {"reparto": min_reparto, "spesa": min_spesa}
        ];
        
        return result;
        }
  


  console.log(calcolaSpese( `
    Cancelleria
    500
    40
    60
    
    Servizi igienici
    1000
    1
    200
    
    Vendite 
    0 `))

    