// scrivere un componente che astragga il funzionamento della fetch, quindi deve accettare in ingresso:
//  * un URL
//  * una funzione che verra' richiamata con il risultato quando la fetch termina
// Mostrare un esempio di utilizzo.
// Ad esempio <AsyncCall callback={fn} url={url} />

import { useEffect, useState } from "react"

function Fetch({URL,setRes}){

        async function fetchContents(){
            let res= await fetch(URL)
            let json= await res.json()
            setRes(json)
        }
        fetchContents()

}

export default function AbstractFetch(){
    let [res,setRes] = useState([])

    return(
        <>
        <h1>Fetch</h1>
        <Fetch setRes={setRes} URL='https://fakestoreapi.com/products' />
        {res.map((obj)=> 
            <div key={obj.id}> 
                <span>{obj.title}</span>
            </div> 
        )}
        </>
    )
}