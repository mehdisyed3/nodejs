const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

// app.use(express.urlencoded({extended:false}))

app.get('/api/people', (req,res)=>{
  res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{
  console.log(req.body)
  const {name} = req.body
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }else{
    return res.status(401).setDefaultEncoding('please send credeintials')
  }

})

app.listen(5000,()=>{
  console.log('app is being listened on port 5000')
})

// watched video tilll 6:28