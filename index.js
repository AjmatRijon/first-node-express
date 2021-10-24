const express = require("express");
const app = express();
var cors = require('cors')

const port = 5000;

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Ajmat!");
});
const users = [
  { id: "0", name: "Ajmat" ,email:"ajmatullah35@gmail.com"},
  { id: "1", name: "Ullah" ,email:"ajmatullah48@gmail.com"},
  { id: "2", name: "Rijon" ,email:"ajmatrijon@gmail.com"},
  { id: "3", name: "Ajmat Ullah Rijon" ,email:"ajmatullah119@gmail.com"},
];
// app.get("/users", (req, res) => {
//   res.send(users);
// });
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
