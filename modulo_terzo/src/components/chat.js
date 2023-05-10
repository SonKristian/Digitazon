import { useState } from "react"

export function Input (props) {
    const [nome, setNome] = useState("")
    const [inpB, setInpB] = useState("")
    const [mess, setMess] = useState([])

    function savingMess () {
     let newmes ={nome, inpB}
     setMess([...mess , newmes])
     props.text(newmes)
    }

    return(
    <footer>
    <input value={nome} placeholder="username" onChange={(e) => {setNome(e.target.value)}}></input>
    <input value={inpB} placeholder="mesaggio" onChange={(e) => {setInpB(e.target.value)}}></input>
    <button onClick={savingMess}>Invio</button>
    </footer>
    )
}

export function Messaggio({nome, messaggio}){
    return(
        <div className="line-chat">
          <p>{nome}: </p>
          <p>{messaggio}</p>
        </div>
    )
}

export function Chat (){
    const [mess, setMess] = useState([])

    function gestisciMess(messaggio){
        setMess([...mess, messaggio])
        console.log(mess)
    }
     
    return(
        <main>
          <Input text={gestisciMess}></Input>
          {mess.map((el)=>{
            return(
              <Messaggio nome={el.nome} messaggio={el.inpB}/>
            )
          })}

        </main>
    )
}

