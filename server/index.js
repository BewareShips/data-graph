const express = require("express");
const sequelize = require("./database");
const User = require("./models/User");

sequelize.sync().then(() => console.log("db is ready"));

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
   await User.create(req.body);
   res.send("User is inserted");
});

app.get('/users', async(req,res)=>{
  const users = await User.findAll()
  res.send(users)
})

app.get('/users/:id',async(req,res)=>{
  const reqId = req.params.id;
  const user = await User.findOne({where:{id: reqId}})
  res.send(user)
})

app.listen(3000, () => {
   console.log("app is running");
});
