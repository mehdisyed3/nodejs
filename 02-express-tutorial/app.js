const express = require('express')
const app = express()

// req => middleware => res


const logger = require('./logger')
const authorize = require('./authorize')

// app.use([authorize, logger])
app.use(express.static('./methods-public'))

app.get('/',(req,res)=>{
  res.send('Home')
})

app.get('/about',(req,res)=>{
  console.log('>>> reqUSer', req.user)
  res.send('About')
})

app.listen(5000,()=>{
  console.log('app is being listened on port 5000')
})

// watched video tilll 6:28