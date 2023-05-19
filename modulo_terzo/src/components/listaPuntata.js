import { useState } from "react"

const ListaPuntata = () => {
    const [input, setInput] = useState("");
    let frasi = [];
    frasi = input.split(" ")
    
  return (
    <div>
        <h2>listaPuntata</h2>
    <input value={input} onChange={(el)=>setInput(el.target.value)}></input>
    <ul>
    {frasi.map((e, i)=>
    <li key={i}>{e}</li>
    )}
    </ul>
    </div>
  )
}

export default ListaPuntata;
