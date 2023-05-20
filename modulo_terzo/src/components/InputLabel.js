import React from 'react'
import useState from "react"

const InputLabel = ({posizione, funx}) => {
     const [value, setValue] = useState ('')
        
        return (
            <>
                <h3>esercizio Label Imput</h3>
                <div style={{ display: "flex", flexDirection: "row" }} >
                    {posizione === 'l' && <label for="prova" >inserisci</label>}
                    <input value={funx (value)} id="prova" onChange={(e)=> setValue(e.target.value)} ></input>
                    {posizione === 'r' && <label for="prova" >inserisci</label>}
                </div>
              </>

        )
    }
    
const position = "l"

    function noChar(word) {
        if (!isNaN(word)) {
            return word
        } else {
            return word.slice(0, -1)
        }
    }

    function noNumber(word) {
        const regex = /^[a-zA-Z]+$/
        if (regex.test(word)) {
            return word
        } else {
            return word.slice(0, -1)
        }
        
    }

export default InputLabel