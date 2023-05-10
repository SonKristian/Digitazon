/*
scrivere un componente che rappresenti una TODO list prendendo
gli elementi della lista da questo endpoint: https://jsonplaceholder.typicode.com/todos
Ogni componente deve avere una checkbox, se la checkbox viene flaggata il
componente finisce in fondo alla lista e diventa piu' opaco
*/

import { useEffect, useState } from "react"

export function List (props){
    const [state, setState] = useState(false)

    return(
        <div className={(state)? "checked-todo" : "not-checked"}>
        <p>{props.title}</p>
        <input type="checkbox" onChange={() => setState((!state))}></input> 
        </div>
    )
}

export function ToDo (){
    let [list, setList] = useState([])
    useEffect(()=>{
        async function fetchList(){
            let res = await fetch("https://jsonplaceholder.typicode.com/todos")
            let json = await res.json()
            setList(json)
        }
        fetchList()
    }, []);

    return(
        <div className="father">
         <h1>ToDo List</h1>
         {list.map((el, index)=>(
         (index < 10) ? <List title={el.title}/> : ""
         ))}
        </div>
    )
}