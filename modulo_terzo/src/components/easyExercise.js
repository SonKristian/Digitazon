/*
Semplice: scrivere un componente che rappresenti un input text, 
quando l'input e' vuoto oppure ha dentro solo dei numeri, oppure solo della punteggiatura, deve avere il bordo rosso.
Quando la pagina carica non deve subito partire dal rosso, ma arrivarci solo dopo che l'utente ha scritto qualcosa.
*/

export function InputText(){
const [inpA, setInpA] = useState(false)


    return(
        <input value={inpA} placeholder="" onChange={(el) => setInpA(el.target.value)}></input>
    )
}