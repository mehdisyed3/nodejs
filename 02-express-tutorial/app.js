const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./navbar-app'))

// app.get('/',(req,res)=>{
// res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*',(req,res) =>{
  res.status(404).send('This page does not exist')
})


app.listen(5000,()=>{
  console.log('server is being listened on port 5000')
})

// followed video till 5:24 .. when starting again start from 5:20..
// there are 2 aspects of backend.. ssr and api.. next i am going to learn about apis where ill be sending json data upon request