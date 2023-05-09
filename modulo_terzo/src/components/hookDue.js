import { useState, useEffect } from "react"

export function ProvaDue (){

    const [inpA, setInpA] = useState()
    const [inpB, setInpB] = useState()
    const [verified, setVerified] = useState()

    useEffect(()=>{
        setVerified(inpA && inpB ? "funziona" : "")
    }, [inpA, inpB])
    return(
        <>
        <h2>Daje Roma</h2>
        <input value={inpA} onChange={(el)=> setInpA(el.target.value)}></input>
        <input value={inpB} onChange={(el)=> setInpB(el.target.value)}></input>
        <span>{verified}</span>
        </>
    )
}