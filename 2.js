const express = require("express")

const app = express();

app.use(express.json())

app.get("/",(res,req)=>{
res.send("Backend is starting")
})

let students = [
   { id: 1, name: "Kuldeep" },
    { id: 2, name: "Riya" },
    { id: 3, name: "Amit" },
    { id: 4, name: "Chandu" }

]

app.post("/abc",(req,res)=>{
  const student = req.body
  students.push(student)
  res.send("name added")
})

app.get("/abc/:id",(req,res)=>{
const id = Number(req.params.id)
const student = students.find(s => s.id===id)
res.send("Delete ho gya hai")
})
app.delete("/abc/:id",(req,res)=>{
const id = Number(req.params.id)
students = students.filter(s => s.id!==id)
res.send("Delete ho gya hai")
})

app.put("/abc/:id",(req,res)=>{
  const id = Number(req.params.id)
  const student = students.find(s => s.id===id)
  student.id = req.body.id
  student.name  = req.body.name
  res.send(students)
})

app.get("/abc",(req,res)=>{
  res.send(students);
})

app.listen(4000,()=>{
  console.log("server is running"); 
})


