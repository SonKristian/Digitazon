// scrivere una funzione chiamata mapsUnion che 
// date due mappe (in JS chiamate anche oggetti) in ingresso
// ritorni una mappa (o oggetto) che contenga tutte le chiavi e 
// tutti i valori delle due mappe
// in caso di chiavi duplicate deve rimanere il valore della 
// seconda mappa (o oggetto)

// e' una funzione che volendo si puo' scrivere in una riga sola

function mapsUnion(m1, m2) {
    // return m1.set(m2)
    return new Map([...m1, ...m2]);
}

let Map1 = new Map()
Map1.set("chiave", "valore1")
Map1.set("chiave2", "valore 2")
Map1.set("chiave3", "valore 3")


let Map2 = new Map()
Map1.set("chiave4", "valore 4")
Map1.set("chiave3", "valore 3")
Map1.set("chiave5", "valore 5")

console.log(mapsUnion(Map1, Map2))