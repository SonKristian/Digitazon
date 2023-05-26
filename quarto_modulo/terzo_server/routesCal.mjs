import calciatori from "./db/calciatori.json" assert { type: 'json' }

const getAllPlayers = (req, res) => {
    res.send(calciatori)
}

const getPlayers =  (req, res) => {
    const players = calciatori.filter((calciatore) => calciatore.squadra_id == req.params.id)
    res.send(players)
}

const createPlayers = (req, res) => {
    calciatori.push({...req.body})
    res.status(200).end()
}

export{
    getPlayers,
    createPlayers, 
    getAllPlayers
}