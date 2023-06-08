import express from "express"
import session from 'express-session'
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

app.listen(port, () => {
    console.log(`Gruppo uno, porta ${port}`);
});
  