/*
creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:

- proprietà label, indica il nome del linguaggio
- proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
- un metodo printTags che itera sui tag dell'oggetto e li stampa con un WHILE

chiamare il metodo printTags per mostrare i dati in console

*/

const language = {
    label : "Javascript",
    tag : ["boh", "boh", "boh"],
     'printTags': function() {
        console.log(this.label + " caratteristiche: ")
        let i=0
        while (i <this.tag.length){
            console.log(this.tag[i])
            i++
        }
      },
}

language.printTags()