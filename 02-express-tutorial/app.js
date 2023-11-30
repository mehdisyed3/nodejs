const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.status(200).send('<h1>this is a home page</h1>')
})

app.get('/about',(req,res)=>{
  res.status(200).send('<h1>this is the about page</h1>')
})

app.get('*',(req,res)=>{
  res.status(404).send('<h1>this page does not exist</h1>')
})


app.listen(5000, ()=>{
  console.log("app is being listened on 5000")
})

// WAtched till 5 hours