import { useState, useEffect } from "react"

export function Prova (){
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log(count);
    }, [count])
    return(
        <>
        <h2>Daje Roma</h2>
        <button onClick={() => {setCount(count + 1)}}>Dai zio porco</button>
        <span>{count}</span>
        </>
    )
}