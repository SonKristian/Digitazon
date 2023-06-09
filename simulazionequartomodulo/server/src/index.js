import express from "express";
import * as treasure from "./routes.mjs"
const app = express();

app.use(express.json());
const port = 3000

app.get('/', treasure.defaultPattern)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})