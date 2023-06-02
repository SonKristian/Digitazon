import fs from "node:fs/promises";
import users from "../db/users.json" assert { type: "json" };
import todoUsers from "../db/todos-users.json" assert { type: "json" };
import passUsers from "../db/passUser.json" assert { type: "json" };
import axios from "axios";

const DB_PATH = "./db/users.json";
const DB_PATH_TODOS_USERS = "./db/todos-users.json";
const DB_PATH_PASS = "./db/passUser.json";

let NEXT = Object.keys(users).reduce((biggest, id) => biggest > parseInt(id, 10) ? biggest :  parseInt(id, 10),  0)
let NEXT_USER = Object.keys(passUsers).reduce((biggest, id) => biggest > parseInt(id , 10 )? biggest :  parseInt(id, 10),  0)

let pass = "password";

export const register = async (req, res) => {
  NEXT_USER++;

  passUsers[NEXT_USER] = req.body;
  await fs.writeFile(DB_PATH_PASS, JSON.stringify(passUsers, null, "  "));
  res.status(201).send({
    message: "user and password created",
  });
};

export const login = (req, res) =>{
  const login = req.body;

  const user = Object.keys(passUsers).find(
    (user) =>
    passUsers[user].username === login.username && passUsers[user].password === login.password
    )
  if(user){
  req.session.user = user
  req.session.logged = true
  res.send(user)
  res.redirect(`/session`)
  } else {
    res.status(401).send({
      message : "Gabriele attento a ciò che scrivi"
    })
  }
}

export const session = (req, res) => {
// // const currentTime = new Date().getTime();
// // const cookieExpires = new Date(req.session.cookie.expires).getTime();
    if(req.session.logged){
// //         if (cookieExpires && currentTime > cookieExpires) {
// //           console.log('Session cookie has expired');
// //           res.status(200).send({
// //             message : "Scaduto tempo"
// //           })
// //       }
res.status(200).send({
  message : "funziona"
})
}

}

export const create = async (req, res) => {
  NEXT++;

  if (req.body.id) {
    const res1 = await axios.get(
      `https://fakestoreapi.com/users/${req.body.id}`
    );
    users[req.body.id] = res1.data;
  } else users[NEXT] = req.body;
  // never use sync, go the async way
  // fs.writeFileSync(DB_PATH, JSON.stringify(users, null, '  '))
  await fs.writeFile(DB_PATH, JSON.stringify(users, null, "  "));
  res.status(201).send({
    message: "user created",
  });
};

export const get = (req, res) => {
  let user = users[req.params.id];
  if (user && !user.deleted) {
    res.send({ data: user });
  } else {
    res.status(200).send({
      data: {},
      error: true,
      message: "user not found",
    });
  }
};

export const getAll = (req, res) => {
  res.send(Object.entries(users).filter((el) => !el[1].deleted));
};

export const search = (req, res) => {
  const query = req.query;
  let filtered = Object.values(users).filter(
    (u) => u.name === query.name || u.surname === query.surname
  );
  res.send(filtered);
};

export const update = async (req, res) => {
  if (req.headers.token == pass) {
    let user = users[req.params.id];
    console.log(req.body);
    if (user) {
      let newUser = { ...user, ...req.body };
      users[req.params.id] = newUser;
      await fs.writeFile(DB_PATH, JSON.stringify(users, null, "  "));
      res.send(newUser);
    } else {
      res.status(200).send({
        data: {},
        error: true,
        message: "user not found",
      });
    }
  } else {
    res.status(401).end();
  }
};

export const remove = async (req, res) => {
  if (req.headers.token == pass) {
    let user = users[req.params.id];
    if (user) {
      let newUser = { ...user, deleted: true };
      users[req.params.id] = newUser;
      await fs.writeFile(DB_PATH, JSON.stringify(users, null, "  "));

      // make sure we delete any todos-users
      // related to this user
      Object.keys(todoUsers).forEach((idut) => {
        let split = idut.split("-");
        if (split[0] == req.params.id) {
          delete todoUsers[idut];
        }
      });
      await fs.writeFile(
        DB_PATH_TODOS_USERS,
        JSON.stringify(todoUsers, null, "  ")
      );

      await fs.writeFile(DB_PATH, JSON.stringify(users, null, "  "));
      res.status(200).end();
    } else {
      res.status(200).send({
        data: {},
        error: true,
        message: "user not found",
      });
    }
  } else {
    res.status(401).end();
  }
};
