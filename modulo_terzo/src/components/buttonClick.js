/*
Semplice: scrivere un pulsante non cliccabile, 
quando l'utente ci arriva quasi sopra (come potete programmare questo "quasi"?)
 il pulsante si sposta in un punto random della pagina.
*/

import { useState } from "react"

export function NotClickButton () {
const [left, setLeft] = useState()
const [top, setTop] = useState()

function changePosition(){
    setLeft(Math.floor(Math.random()*600))
    setTop(Math.floor(Math.random()*600))
}


return(
    <main>
        <div style={{top: top, left: left, position: "absolute", padding: "2rem"}} onMouseEnter={() => changePosition()}>
            <button disabled>Catch me, if you can</button>
        </div>
    </main>
)
}