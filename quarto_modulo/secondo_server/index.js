import { 
  hello, 
  cCRicerca, 
  cCGet, 
  cCGetId, 
  cCDeleteCasa, 
  cCModify, 
  cCPost 
} from './routes.mjs'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const port = 3000

const caseCinematografiche = require("./case_cinematografiche.json")

// devo fornire al server l'informazione dell'id piu' grande
// esistente all'interno di case-cinematografiche.json
// perche' abbiamo bisogno di tenerne traccia per via
// delle POST

// non lo faccio cosi perche' e' "debole" come implementazione
// potrebbe succedere che non c'e' un legame diretto
// tra posizione dell'i-esimo elemento e suo id
// const id = caseCinematografiche[caseCinematografiche.length - 1].id

let NEXT_ID = caseCinematografiche
  .reduce((bigger, c) => c.id > bigger ? c.id : bigger, -1)

app.get('/', hello)

app.get('/case-cinematografiche', cCGet)

app.get('/case-cinematografiche/ricerca/:termine', cCRicerca)

app.get('/case-cinematografiche/:id', cCGetId)

app.delete('/case-cinematografiche/:id', cCDeleteCasa)

app.put('/case-cinematografiche/:id', cCModify)

app.post("/case-cinematografiche", cCPost)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})