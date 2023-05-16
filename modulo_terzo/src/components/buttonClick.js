/*
Semplice: scrivere un pulsante non cliccabile, 
quando l'utente ci arriva quasi sopra (come potete programmare questo "quasi"?)
 il pulsante si sposta in un punto random della pagina.
*/

import { useState } from "react"

export function NotClickButton () {
const [position, setPosition] = useState({x:0, y:0})

function handleButton (el){

}

    return <button disabled>Catch me, if you can</button>
}