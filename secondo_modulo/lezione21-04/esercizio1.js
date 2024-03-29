/*
Ex 1

creare un array in cui occorre includere 5 dati di tipi diversi:
- un letterale oggetto con proprietà x: 10 e y: 5
- un numero (100)
- una stringa ("javascript")
- una mappa ("label" -> "sono una mappa")
- un array [40, 50, 60]

Iterare sull'array esterno con un foreach e...
se l'elemento corrente è...

un letterale oggetto, stampa la somma delle sue proprietà x e y

un numero, controlla se è > 100 scrivi red, altrimenti blue

una stringa, stampa il suo primo carattere

una mappa, stampa il valore della sua proprietà "label", se ce l'ha

un array, stampa i numeri in ordine inverso
*/
const map1 = new Map()
const arr = [{x :10, y:5}, 100, "javascript", map1.set("label", "sono una mappa"), [40, 50, 60]]


arr.forEach(function(element){
    if(element instanceof Map){
       console.log(element)
    }else if(element instanceof Array){
    for(let i=arr.length; 0 < i; i--){
        console.log(element)
    }
    }else if(typeof element == "object"){
        console.log(element)
    }

    if(typeof element == "number"){
        if(element > 100){
           console.log("red")
        }else{
        console.log("blue")
        }
    }

    if(typeof element == "string"){
          console.log(element.charAt(0))
    }


})

/*
let ar = [ {x:10,y:5}, 100, 'javascript', new Map([['label','sono una mappa']]), [40,50,60] ]

        ar.forEach((el)=>{

            // check mappa
            if (el instanceof Map){
                console.log( el.has('label') ? el.get('label') : 'no label property found' );
                return
            }

            // check array
            if( Array.isArray(el) ){
                console.log('sono un array - stampo numeri in ordine inverso');
                for (let i = el.length-1; i >=0; i--) console.log(el[i]);

                return
            }

            // check stringa, numero, oggetto
            switch( typeof el ) {
                case 'string':
                    console.log('sono una stringa - primo carattere = '+el[0])
                    return

                case 'number':
                    console.log( (el > 100) ? 'numero - red' : 'numero - blue') 
                    return

                case 'object':
                    console.log('oggetto - somma proprietà = '+ (el.x+el.y))
                    return
            }

        })

*/