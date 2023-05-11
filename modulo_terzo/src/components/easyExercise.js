/*
Semplice: scrivere un componente che rappresenti un input text, 
quando l'input e' vuoto oppure ha dentro solo dei numeri, oppure solo della punteggiatura, deve avere il bordo rosso.
Quando la pagina carica non deve subito partire dal rosso, ma arrivarci solo dopo che l'utente ha scritto qualcosa.
*/

import { useState } from "react"

export function InputText(){
let arr = [".", ",", "-", "_", "?", "!", "'"]
let [inpA, setInpA] = useState("")
let [state, setState] = useState(false)

function handleState(){
// eslint-disable-next-line no-cond-assign
(inpA = "") ? setState(true) : setState(false)

(isNaN(inpA))? setState(false) : setState(true)
}

    return(
        <input className={(state)? "red-border" : "no-border"} placeholder="" onChange={handleState}></input>
    )
}
