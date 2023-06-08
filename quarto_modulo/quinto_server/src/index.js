import express from "express";
import cors from "cors";
import * as students from "./studentsRoutes.mjs";
import studenti from "../db/students.json" assert { type: "json" };
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", cors(), (req, res) => {
  res.send(studenti);
});

app.get("/digitazon/2023/02/group/1/students", students.getGroupStudents);
app.get("/digitazon/2023/02/students", students.getAllStudents);
app.get("/key", students.key);



app.listen(3001, () => {
  console.log("Gruppo uno, porta 3000");
});
