import express from "express";
import connectdb from "./db/db";
import userRoute from "./routes/user.routes"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

connectdb();

app.get("/",(req,res) =>{
  res.send("hi")
})

app.use("/users", userRoute);

export{
  app
};