const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.get('/api/people', (req,res)=>{
  res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{
  console.log(req.body)
  const {name} = req.body
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }else{
    return res.status(401).send('please send credeintials')
  }

})

app.post('/api/people',(req,res)=>{
  console.log(req.body)
  const {name} = req.body

 
  if(!name){
    return res.status(400).json({success:false, message:'please Provide name'})
   
  }else{
    return res.status(201).json({success:true, person:name})
  }

})

app.post('/api/postman/people',(req,res)=>{
  const {name} = req?.body

  if(!name){
   return res.status(400).json({success:false, message:" PLEASE PROVIDE A NAME "})
  }else{
    return res.status(201).json({success:true, data:[...people, {id:Math.random(),name}]})
  }

})

app.put('/api/people/:id',(req,res)=>{
  const {name} = req?.body
  const {id}= req.params

  let updated = people.map(item =>{
    if(item.id === Number(id)){
       item.name = name
    }
    return item
  })

  res.status(201).json({succes:true, data:updated})
  


  console.log('>>> helllo')

  // if(!name){
  //  return res.status(400).json({success:false, message:" PLEASE PROVIDE A NAME "})
  // }else{
  //   return res.status(201).json({success:true, data:[...people, {id:Math.random(),name}]})
  // }

})





app.listen(5000,()=>{
  console.log('app is being listened on port 5000')
})

// watched video tilll 7:20
