import express from 'express'
const app = express()
import bodyParser from 'body-parser'
app.use(bodyParser.json())
const port = 3000

import{
    hello,
    allSquad,
    squadId,
    squadLetter,
    squadUpdate,
    squadDelete,
    squadCreate
} from './routes.mjs'

import { createPlayers, getAllPlayers, getPlayers } from './routesCal.mjs'

app.get('/', hello)

app.get('/squadre', allSquad)
app.get('/squadre/:id', squadId)
app.get('/squadre/by-first-letter/:lettera', squadLetter)

app.put('/squadre/:id', squadUpdate)

app.delete('/squadre/:id', squadDelete)

app.post('/squadre', squadCreate)

/* crud sul json calciatori */
app.get('/squadre/:id/calciatori', getPlayers)
app.get('/calciatori', getAllPlayers)

app.post('/calciatori', createPlayers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})