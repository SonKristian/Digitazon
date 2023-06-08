import express from "express"
import session from 'express-session'
import * as parola from "./wordsRoutes.mjs";
const app = express();
const port = 3001;
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get("/words", parola.getAllWords);
app.get("/words/random", parola.getRandomWords)

app.put("/words/random", parola.checkWords)


app.get("/")
app.listen(port, () => {
    console.log(`Gruppo uno, porta ${port}`);
});
  