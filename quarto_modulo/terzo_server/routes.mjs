import squadre from "./db/squadre.json" assert { type: 'json' }
import calciatori from "./db/calciatori.json" assert { type: 'json' }

let nextID = squadre.reduce((bigger, s) => {
    s.id > bigger ? s.id : bigger, -1
})

const hello = (req, res) => {
    res.send('Hello')
  }

const allSquad = (req, res) => {
    let squadOnly = []
    for(let i=0; i < squadre.length; i++){
    squadOnly.push(squadre[i].squadra)
    }
    res.send(squadOnly)
}

const squadId = (req, res) => {
    for(let i=0; i < squadre.length; i++){
        if(squadre[i].id == req.params.id){
            res.send(squadre[i]) 
            return
        }
      }
      res.status(404).end()
}

const squadLetter = (req, res) => {
    let squadFl= []
    for(let i=0; i < squadre.length; i++){
        if(squadre[i].squadra.charAt(0) == req.params.lettera.toUpperCase()){
            squadFl.push(squadre[i].squadra)
            res.send(squadFl)
        }
    }
        res.status(404).end()
}

const squadUpdate = (req, res) => {
    for(let i=0; i < squadre.length; i++){
        if(squadre[i].id == req.params.id){
            squadre[i] = {...squadre[i], ...req.body, id:squadre[i].id}
            res.status(200).end()
        }
    }
    res.status(404).end()
}

const squadDelete = (req, res) => {
let index = -1
for(let i=0; i < squadre.length; i++){
        if(squadre[i].id == req.params.id){
            index = i
        }
    }

    if(index == -1){
        res.status(404).end()
    }else{
        squadre.splice(index, 1)
        for(let i=calciatori.length -1; i >= 0; i--){
            if(req.params.id == calciatori[i].squadra_id){
                calciatori.splice(i, 1)
            }
        }
        res.status(200).end()
    }
}


const squadCreate = (req, res) =>{
nextID++
squadre.push({...req.body, ...{id : nextID}})
res.status(200).end()
}

export {
    hello,
    allSquad,
    squadId, 
    squadLetter, 
    squadUpdate, 
    squadDelete, 
    squadCreate
}