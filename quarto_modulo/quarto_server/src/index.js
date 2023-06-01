import express from 'express'
import session from 'express-session'
const app = express()
const port = 3000
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

import bodyParser from 'body-parser'
app.use(bodyParser.json())


import * as user from './user-routes.mjs'
import * as todo from './todo-routes.mjs'
import * as todoUser from './routes-user-todo.mjs'

app.get('/users', user.getAll)
app.get('/users/search', user.search)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.delete('/users/:id', user.remove)
app.post('/users', user.create)
app.post('/register', user.register)
// app.get('/login', user.login)

app.get('/todos', todo.getAll)
app.get('/todos/search', todo.search)
app.get('/todos/:id', todo.get)
app.put('/todos/:id', todo.update)
app.delete('/todos/:id', todo.remove)
app.post('/todos', todo.create)

app.post('/users/:idu/todos/:idt', todoUser.create)
app.delete('/users/:idu/todos/:idt', todoUser.remove)
app.put('/users/:idu/todos/:idt/completed', todoUser.completed)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})