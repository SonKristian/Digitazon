/*
Semplice: scrivere un componente che rappresenti un input text, 
quando l'input e' vuoto oppure ha dentro solo dei numeri, oppure solo della punteggiatura, deve avere il bordo rosso.
Quando la pagina carica non deve subito partire dal rosso, ma arrivarci solo dopo che l'utente ha scritto qualcosa.
*/

import { useEffect, useState } from "react"

export function InputText(){
const [state, setState] = useState(true)
const [text, setText] = useState("")
const [color, setColor] = useState("")

useEffect(()=>{
    if(state) return setState(false)
    if(!text) return setColor("red-border")
    const punteggiatura = new Set(['.',',',';',':','!','?','*','-','(',')','[',']','"','«','»',`'`])
    let number = true, symbol = true
    for(let i=0; i<punteggiatura.length; i++){
        if(isNaN(text[i])) {number = false}
        if(!punteggiatura.has(text[i])) { symbol = false}
    }
    if(number || symbol) { return setColor('red-border') } // 2.4
    return setColor('')
}, [text])


return(
<input className={color}  onChange={el => {setText(el.target.value)}}></input>
)
}